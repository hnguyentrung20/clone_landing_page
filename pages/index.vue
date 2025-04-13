<template>
  <div class="home-container">
    <PageLoader :waitForImages="true" :minDisplayTime="1500" />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
  </div>
</template>

<script setup>
  import Section1 from '~/components/homepage/section-1_getting-ready.vue';
  import Section2 from '~/components/homepage/section-2_about.vue';
  import Section3 from '~/components/homepage/section-3_player-card.vue';
  import Section4 from '~/components/homepage/section-4_partners.vue';
  import PageLoader from '~/components/ui/PageLoader.vue';
</script>

<style lang="scss">
  // Home page styling is imported from styles/pages/_home.scss
</style>
