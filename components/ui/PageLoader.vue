<template>
  <div class="page-loader" :class="{ 'is-hidden': !isLoading }">
    <div class="page-loader__text">{{ t('common.loading') || 'Loading...' }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  waitForImages: {
    type: Boolean,
    default: true
  },
  minDisplayTime: {
    type: Number,
    default: 1000
  }
});

const isLoading = ref(true);
const startTime = ref(Date.now());

onMounted(() => {
  if (props.waitForImages) {
    // Wait for all images to load before hiding loader
    window.addEventListener('load', checkLoadingStatus);
    // In case window load already happened
    if (document.readyState === 'complete') {
      checkLoadingStatus();
    }
  } else {
    // Just wait for a minimum display time
    setTimeout(() => {
      isLoading.value = false;
    }, props.minDisplayTime);
  }
});

function checkLoadingStatus() {
  const elapsedTime = Date.now() - startTime.value;
  const remainingTime = Math.max(0, props.minDisplayTime - elapsedTime);

  setTimeout(() => {
    isLoading.value = false;
  }, remainingTime);
}
</script>

<style lang="scss" scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  z-index: 9999;
  transition: opacity 0.5s ease, visibility 0.5s ease;

  &.is-hidden {
    opacity: 0;
    visibility: hidden;
  }

  &__text {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
