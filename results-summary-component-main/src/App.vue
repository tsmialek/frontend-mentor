<template>
  <!-- ToDo: rename the component -->
  <LargeLeftSection />
  <DetailsRightSection />
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

<style scoped></style>
