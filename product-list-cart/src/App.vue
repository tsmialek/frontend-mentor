<template>
  <main>
    <h1>Desserts</h1>
    <div class="card-container">
      <CardComponent
        v-for="(desser, index) in dessertsData"
        :key="index"
        :dessert="desser"
      />
    </div>
    <!-- CartComponent -->
    <!-- ConfirmOrderModal -->
  </main>
</template>

<script>
import CardComponent from './components/CardComponent.vue';

export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      cart: [],
      dessertsData: [],
    };
  },
  methods: {
    async loadDesertsData() {
      let res = await fetch('/data/data.json');
      this.dessertsData = await res.json();
      console.log(this.dessertsData);
    },
  },
  mounted() {
    this.loadDesertsData();
  },
};
</script>

<style scoped>
main {
  display: grid;
  row-gap: var(--spacing-400);
}

.card-container {
  display: grid;
  row-gap: var(--spacing-300);
}

h1 {
  font-weight: var(--fw-bold);
}
</style>
