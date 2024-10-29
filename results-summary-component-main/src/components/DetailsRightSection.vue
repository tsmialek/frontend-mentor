<template>
  <section>
    <h3>Summary</h3>
    <div v-if="detailsData" class="details__container">
      <DetailBar
        v-for="(detail, index) in detailsData"
        :key="index"
        :detail-data="detail"
      />
    </div>
    <ButtonItem :button-text="'Continue'" :color-variable="'--dark-navy'" />
  </section>
</template>

<script>
import DetailBar from './DetailBar.vue';
import ButtonItem from './ButtonItem.vue';

export default {
  components: {
    DetailBar,
    ButtonItem,
  },
  data() {
    return {
      detailsData: [],
    };
  },
  methods: {
    async loadDetailsData() {
      let res = await fetch('data.json');
      let data = await res.json();

      this.detailsData = data;
      console.log(this.detailsData);
    },
  },
  mounted() {
    this.loadDetailsData();
  },
};
</script>

<style scoped>
section {
  padding-inline: 30px;
}

.details__container {
  display: grid;
  row-gap: 1rem;
}

h3 {
  color: var(--dark-navy);
  padding-block: 1.5rem;
}

@media (width >= 810px) {
  section {
    padding-inline: 40px;
  }
  h3 {
    font-size: var(--fs-heading-m);
    padding-block: 36px 28px;
  }
}
</style>
