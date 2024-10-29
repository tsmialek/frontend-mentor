<template>
  <!-- ToDo: rename the component -->
  <main>
    <LargeLeftSection />
    <DetailsRightSection />
  </main>
</template>

<script>
import LargeLeftSection from './components/LargeLeftSection.vue';
import DetailsRightSection from './components/DetailsRightSection.vue';

export default {
  components: {
    LargeLeftSection,
    DetailsRightSection,
  },
};
</script>

<style scoped>
@media (width >= 810px) {
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border-radius: 32px;
  }
}
</style>
