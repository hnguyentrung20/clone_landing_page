<template>
  <header class="header">
    <div class="logo-container">
      <Logo class="logo" />
    </div>
    <button class="menu-icon" @click="toggleMenu">
      <HamburgerSelect />
    </button>
    <nav class="navigation-menu">
      <ul>
        <li>
          <a href="#">{{ t('header.about') }}</a>
        </li>
        <li>
          <a href="#">{{ t('header.games') }}</a>
        </li>
        <li>
          <a href="#">{{ t('header.partners') }}</a>
        </li>
        <li>
          <a href="#">{{ t('header.contact') }}</a>
        </li>
        <li>
          <LanguageSelector />
        </li>
      </ul>
    </nav>
    <MobileNavigationMenu
      v-if="isMobile || isMenuOpen"
      :is-open="isMenuOpen"
      @close="closeMenu"
    />
  </header>
</template>

<script setup>
  import { ref } from 'vue';
  import LanguageSelector from '~/components/layout/languageSelector.vue';
  import MobileNavigationMenu from '~/components/layout/mobileNavigationMenu.vue';
  import Logo from '~/components/icons/Logo.vue';
  import HamburgerSelect from '~/components/icons/HamburgerSelect.vue';
  import { useMobile } from '~/composables/useMediaQuery';
  import { useI18n } from 'vue-i18n';

  const isMenuOpen = ref(false);
  const isMobile = useMobile();

  const { t } = useI18n();

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

<style lang="scss" scoped>
  .header {
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  transition: padding $transition-duration $transition-timing;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.logo {
  color: white;
  width: 69px;
  height: 40px;
}

.menu-icon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
    width: 40px;
    height: 40px;
  }
}

.navigation-menu {
  display: none;
  >ul {
    display: flex;
    align-items: center;
    gap: 54px;
    >li {
      >a {
        color: white;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
}

@media (min-width: $breakpoint-md) {
  .header {
    padding: 0 40px;
  }
  .menu-icon {
    display: none;
  }

  .navigation-menu {
    display: block;
  }
}

@media (min-width: $breakpoint-lg) {
  .header {
    padding: 0 80px;
  }
  .navigation-menu {
    >ul {
      gap: 84px;
    }
  }
}
</style>
