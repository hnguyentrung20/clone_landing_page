<template>
  <div>
    <LayoutHeader />

    <slot />
    <LayoutFooter />
  </div>
</template>

<script setup>
  import LayoutHeader from '~/components/layout/layoutHeader.vue';
  import LayoutFooter from '~/components/layout/layoutFooter.vue';
</script>
