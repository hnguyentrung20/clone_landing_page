<template>
  <section class="home-page__section-1">
    <div class="home-page__section-1__container">
      <div class="content-wrapper">
        <h1 class="title">We're Getting Ready</h1>
        <CountdownTimer />
        <p class="description">
          {{ t('landing.description') }}
        </p>
        <div class="email-signup">
          <input type="email" :placeholder="t('emailPlaceholder')" >
          <button>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
    <div class="blur-zone"/>
    <div class="home-page__section-1__decoration">
      <img src="/assets/imgs/ong-tien.png" alt="bg-pattern" >
    </div>
  </section>
</template>

<script setup>
  import CountdownTimer from '../ui/CountdownTimer.vue';
  import ChevronRight from '../icons/ChevronRight.vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>

<style lang="scss" scoped>
  .home-page__section-1 {
  color: white;
  min-height: 90dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
  flex-direction: column;
  @media (min-width: 768px) {
    margin-bottom: 128px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/assets/imgs/bg-pattern.png');
    background-size: cover;
    background-position: center;
    z-index: 1;
    clip-path: ellipse(1390px 80% at 50% 0px);
    @media (min-width: 768px) {
      clip-path: ellipse(1390px 80% at 50% 1px);
    }
  }

  &__container {
    max-width: 1200px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    position: relative;
    z-index: 1000;
    @media (max-width: 768px) {
      margin-top: 15vh;
    }
  }

  &__decoration {
    position: relative;
    z-index: 2;
    margin-top: -10vh;
    left: 50%;
    transform: translateX(-40%);
    @media (min-width: 768px) {
      left: 0%;
      transform: translateX(0%);
      position: absolute;
      bottom: 0;
      left: -100px;
      height: 70vh;
      aspect-ratio: 1/1;
      z-index: 10;
    }
  }
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1000;

}

.blur-zone {
    position: absolute;
    top: 500px;
    left: 50%;
    transform: translate(-50%, -50%);
    right: 0;
    bottom: 0;
    width: 700px;
    height: 200px;
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.15) 30%,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0.05) 80%,
      rgba(0, 0, 0, 0) 100%
    );
    backdrop-filter: blur(15px);
    z-index: 10;
    border-radius: 1000px;
    @media (min-width: 768px) {
      max-width: 40%;
      top: 60%;
    }
  }

.title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.description {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 20px auto 30px;
}

.email-signup {
  display: flex;
  align-items: center;
  max-width: 500px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;

  input {
    flex: 1;
    padding: 15px 20px;
    border: none;
    font-size: 1rem;
    outline: none;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4d2e89;
  }
}
</style>
