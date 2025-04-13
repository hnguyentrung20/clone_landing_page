<template>
  <section class="section-4-partners">
    <h2 class="section-4-partners__title">{{
      t('landing.section4.title') || 'Our Partners'
    }}</h2>

    <div class="section-4-partners__carousel">
      <button @click="prevSlide" class="section-4-partners__btn section-4-partners__btn--prev">
        <span class="section-4-partners__sr-only">Previous</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div class="section-4-partners__container">
        <div
          class="section-4-partners__track"
          :style="{ transform: `translateX(-${translateX}%)`, transition: isAnimating ? `transform 0.5s ease-in-out` : 'none' }"
          @transitionend="onTransitionEnd"
        >
          <!-- Duplicate last logos at beginning for infinite loop effect -->
          <div
            v-for="(logo, index) in duplicatedLogos"
            :key="`${index}-${logo.alt}`"
            class="section-4-partners__slide"
          >
            <img :src="logo.src" :alt="logo.alt" class="section-4-partners__logo">
          </div>
        </div>
      </div>

      <button @click="nextSlide" class="section-4-partners__btn section-4-partners__btn--next">
        <span class="section-4-partners__sr-only">Next</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const logos = [
  { src: '/assets/logo/EA.png', alt: 'EA Games' },
  { src: '/assets/logo/game.png', alt: 'Game' },
  { src: '/assets/logo/first-power-up.png', alt: 'First Power Up' },
  { src: '/assets/logo/disney.png', alt: 'Disney' },
  { src: '/assets/logo/book-pro.png', alt: 'Book Pro Game Shop' },
  { src: '/assets/logo/2k.png', alt: '2K Games' },
  { src: '/assets/logo/sega.png', alt: 'Sega' }
];

// Tạo mảng logo trùng lặp để tạo hiệu ứng vòng lặp vô hạn
const duplicatedLogos = computed(() => {
  // Thêm 5 logo cuối cùng vào đầu và 5 logo đầu tiên vào cuối
  const visibleCount = slidesPerView.value;
  const prefix = [...logos].slice(-visibleCount);
  const suffix = [...logos].slice(0, visibleCount);
  return [...prefix, ...logos, ...suffix];
});

const currentIndex = ref(0);
const slidesPerView = ref(5);
const slideWidth = ref(100 / slidesPerView.value);
const translateX = ref(0);
const isAnimating = ref(false);
const autoplayInterval = 3000; // 3 seconds
let autoplayTimer = null;

// Calculate number of slides to show based on screen size
const calculateSlidesPerView = () => {
  if (window.innerWidth < 640) {
    slidesPerView.value = 1;
  } else if (window.innerWidth < 768) {
    slidesPerView.value = 2;
  } else if (window.innerWidth < 1024) {
    slidesPerView.value = 3;
  } else {
    slidesPerView.value = 5;
  }

  // Cập nhật lại slideWidth dựa trên slidesPerView
  slideWidth.value = 100 / slidesPerView.value;

  // Reset position khi thay đổi kích thước màn hình
  resetPosition();
};

const resetPosition = () => {
  isAnimating.value = false;
  currentIndex.value = slidesPerView.value; // Bắt đầu từ logo đầu tiên thực sự (sau prefix)
  translateX.value = currentIndex.value * slideWidth.value;
};

const nextSlide = () => {
  if (isAnimating.value) return;

  isAnimating.value = true;
  currentIndex.value++;
  translateX.value = currentIndex.value * slideWidth.value;

  // Nếu đến cuối mảng logos gốc + prefix, nhảy về đầu không có animation
  if (currentIndex.value >= logos.length + slidesPerView.value) {
    setTimeout(() => {
      isAnimating.value = false;
      currentIndex.value = slidesPerView.value;
      translateX.value = currentIndex.value * slideWidth.value;
    }, 500); // Thời gian bằng với transition
  }
};

const prevSlide = () => {
  if (isAnimating.value) return;

  isAnimating.value = true;
  currentIndex.value--;
  translateX.value = currentIndex.value * slideWidth.value;

  // Nếu nhảy về trước logo đầu tiên trong mảng logos gốc, nhảy về cuối không có animation
  if (currentIndex.value < slidesPerView.value) {
    setTimeout(() => {
      isAnimating.value = false;
      currentIndex.value = logos.length + slidesPerView.value - 1;
      translateX.value = currentIndex.value * slideWidth.value;
    }, 500); // Thời gian bằng với transition
  }
};

const onTransitionEnd = () => {
  isAnimating.value = false;
};

const startAutoplay = () => {
  stopAutoplay();
  autoplayTimer = setInterval(() => {
    nextSlide();
  }, autoplayInterval);
};

const stopAutoplay = () => {
  if (autoplayTimer) clearInterval(autoplayTimer);
};

onMounted(() => {
  calculateSlidesPerView();
  resetPosition();
  window.addEventListener('resize', calculateSlidesPerView);
  startAutoplay();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateSlidesPerView);
  stopAutoplay();
});
</script>

<style lang="scss">
.section-4-partners {
  padding: $spacing-xxl 0;
  background-color: $background-color;
  margin-bottom: 40px;

  @media (min-width: $breakpoint-md) {
    margin-bottom: 128px;
  }

  &__title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: $spacing-xl;
    font-weight: $font-weight-bold;
  }

  &__carousel {
    position: relative;
    padding: 0 $spacing-xl;
    max-width: 1200px;
    margin: 0 auto;
  }

  &__container {
    overflow: hidden;
    margin: 0 $spacing-xxl;
  }

  &__track {
    display: flex;
    align-items: center;
    will-change: transform;
  }

  &__slide {
    flex: none;
    width: 20%; // Mặc định hiển thị 5 logo
    padding: 0 $spacing-md;
    box-sizing: border-box;

    @media (max-width: $breakpoint-lg) {
      width: 33.333%; // Hiển thị 3 logo
    }

    @media (max-width: $breakpoint-md) {
      width: 50%; // Hiển thị 2 logo
    }

    @media (max-width: $breakpoint-sm) {
      width: 100%; // Hiển thị 1 logo
    }
  }

  &__logo {
    height: 80px;
    object-fit: contain;
    margin: 0 auto;
    display: block;

    @media (max-width: $breakpoint-lg) {
      height: 70px;
    }

    @media (max-width: $breakpoint-sm) {
      height: 60px;
    }
  }

  &__btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: $background-color;
    border-radius: $border-radius-circle;
    padding: $spacing-sm;
    border: none;
    box-shadow: $box-shadow-sm;
    z-index: 10;
    cursor: pointer;

    &:hover {
      background-color: $border-color;
    }

    &--prev {
      left: 0;
    }

    &--next {
      right: 0;
    }
  }

  &__sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
}
</style>
