<template>
  <div class="language-selector" @click="toggleLanguageDropdown">
    <img
      v-if="currentLocale === 'en'"
      src="@/assets/icons/us-flag.svg"
      alt="US"
      class="flag-icon"
    >
    <img
      v-if="currentLocale === 'vi'"
      src="@/assets/icons/vn-flag.svg"
      alt="VN"
      class="flag-icon"
    >
    <img
      src="@/assets/icons/chevron-down.svg"
      alt="Expand"
      class="chevron-icon"
      :class="{ rotated: isLanguageDropdownOpen }"
    >
    <div v-if="isLanguageDropdownOpen" class="language-dropdown">
      <div class="language-option" @click.stop="setLocale('en')">
        <img src="@/assets/icons/us-flag.svg" alt="US" class="flag-icon" >
        <span>English</span>
      </div>
      <div class="language-option" @click.stop="setLocale('vi')">
        <img src="@/assets/icons/vn-flag.svg" alt="VN" class="flag-icon" >
        <span>Tiếng Việt</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { locale, setLocale } = useI18n();
  const isLanguageDropdownOpen = ref(false);

  const currentLocale = computed(() => locale.value);

  const toggleLanguageDropdown = () => {
    isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value;
  };
</script>

<style lang="scss" scoped>
  .language-selector {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
  }

  .language-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: fit-content;
    background-color: white;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    margin-top: 4px;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    .language-option {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px;
      cursor: pointer;
      transition: background-color 0.2s;
      text-wrap: nowrap;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .flag-icon {
    width: 24px;
    height: 16px;
  }

  .chevron-icon {
    width: 12px;
    height: 12px;
    transition: transform 0.2s;

    &.rotated {
      transform: rotate(180deg);
    }
  }
</style>
