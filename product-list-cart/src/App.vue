<template>
  <main>
    <h1>Desserts</h1>
    <CardComponent
      v-for="(desser, index) in dessertsData"
      :key="index"
      :dessert="desser"
    />
    <CartSummary class="cart" />
    <!-- ConfirmOrderModal -->
  </main>
</template>

<script>
import CardComponent from './components/CardComponent.vue';
import CartSummary from './components/CartSummary.vue';

export default {
  components: {
    CardComponent,
    CartSummary,
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
  column-gap: var(--spacing-400);
  grid-template-columns: 1fr;
}

h1 {
  font-weight: var(--fw-bold);
  grid-column: span 3;
  justify-self: start;
}

@media (min-width: 46.875rem) {
  main {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    justify-items: center;
    row-gap: var(--spacing-400);
  }
}

@media (min-width: 75rem) {
  main {
  }
}
</style>
