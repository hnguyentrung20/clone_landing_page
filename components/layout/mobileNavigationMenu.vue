<template>
  <div class="mobile-menu" :class="{ open: isOpen }">
    <div class="mobile-menu-header">
      <LanguageSelector />
      <button class="close-button" @click="close">
        <Close />
      </button>
    </div>

    <nav class="menu-links">
      <a href="#about" class="menu-item" @click="close">{{
        t('header.about')
      }}</a>
      <a href="#games" class="menu-item" @click="close">{{
        t('header.games')
      }}</a>
      <a href="#partners" class="menu-item" @click="close">{{
        t('header.partners')
      }}</a>
      <a href="#contact" class="menu-item" @click="close">{{
        t('header.contact')
      }}</a>
    </nav>
  </div>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';
  import LanguageSelector from './languageSelector.vue';
  import Close from '../icons/Close.vue';

  defineProps({
    isOpen: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits(['close']);
  const { t } = useI18n();

  const close = () => {
    emit('close');
  };
</script>

<style lang="scss" scoped>
  .mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  padding: 16px;
  background-color: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  // transform: translateX(-100%);
  pointer-events: none;
  opacity: 0;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow-y: auto;

  &.open {
    transform: translateX(0);
    pointer-events: auto;
    opacity: 1;
    z-index: 1000;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #f0f0f0;
  }
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    color: #000;
  }
}

.menu-links {
  display: flex;
  flex-direction: column;
  padding: 16px 0;

  .menu-item {
    padding: 20px 16px;
    text-decoration: none;
    color: #000;
    font-weight: 500;
    border-bottom: 1px solid #f0f0f0;
    display: block;
    font-size: 16px;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
