<template>
  <div>
    <header class="header">
      <div class="logo-container">
        <img src="~/assets/icons/logo.svg" alt="Logo" class="logo" >
      </div>
      <button class="menu-icon" @click="toggleMenu">
        <img src="~/assets/icons/hamburger-select.svg" alt="Menu" >
      </button>
    </header>
    <MobileNavigationMenu :is-open="isMenuOpen" @close="closeMenu" />
    <slot />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import MobileNavigationMenu from '@/components/layout/mobileNavigationMenu.vue';

  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    if (isMenuOpen.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
  };
</script>

<style scoped>
  .header {
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: black;
}

.menu-icon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
</style>
