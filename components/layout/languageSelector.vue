<template>
  <div class="language-selector" @click="toggleLanguageDropdown">
    <UsFlag v-if="currentLocale === 'en'" class="flag-icon" />
    <VnFlag v-if="currentLocale === 'vi'" class="flag-icon" />
    <ChevronDown
      class="chevron-icon"
      :class="{ rotated: isLanguageDropdownOpen }"
    />

    <div v-if="isLanguageDropdownOpen" class="language-dropdown">
      <div
        class="language-option"
        :class="{ selected: currentLocale === 'en' }"
        @click.stop="setLocale('en')"
      >
        <UsFlag class="flag-icon" />
        <span>English</span>
      </div>
      <div
        class="language-option"
        :class="{ selected: currentLocale === 'vi' }"
        @click.stop="setLocale('vi')"
      >
        <VnFlag class="flag-icon" />
        <span>Tiếng Việt</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import ChevronDown from '../icons/ChevronDown.vue';
  import UsFlag from '../icons/UsFlag.vue';
  import VnFlag from '../icons/VnFlag.vue';

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
    cursor: pointer;
    position: relative;

    @media (max-width: 768px) {
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      background-color: $background-gray;
    }
  }

  .language-dropdown {
    position: absolute;
    top: 100%;
    left: auto;
    min-width: 150px;
    background-color: white;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    margin-top: 4px;
    z-index: 10;
    box-shadow: $box-shadow-sm;
    display: flex;
    flex-direction: column;
    gap: 2px;


    @media (min-width: 768px) {
      right: 0;
    }

    .language-option {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px;
      cursor: pointer;
      transition: background-color 0.2s;

      span {
        white-space: nowrap;
      }

      &:hover {
        background-color: #f5f5f5;
      }
      &.selected {
        background-color: $background-gray;
        color: $text-white-color;
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
    fill: $text-white-color;

    &.rotated {
      transform: rotate(180deg);
    }
  }
</style>
