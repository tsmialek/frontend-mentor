<template>
  <main>
    <h1>Desserts</h1>
    <div class="card__container">
      <CardComponent
        v-for="(desser, index) in dessertsData"
        :key="index"
        :dessert="desser"
      />
    </div>
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
  padding: var(--spacing-300);
  display: grid;
  row-gap: var(--spacing-400);
  column-gap: var(--spacing-400);
  grid-template-columns: 1fr;
  margin: 0 auto;
  width: fit-content;
}

h1 {
  font-weight: var(--fw-bold);
  justify-self: start;
}

.card__container {
  display: grid;
  row-gap: var(--spacing-400);
}

@media (min-width: 46.875rem) {
  main {
    grid-template-rows: auto auto auto;
    justify-items: center;
    row-gap: var(--spacing-400);
  }
  .card__container {
    grid-template-columns: repeat(3, 1fr);
    column-gap: var(--spacing-400);
  }
}

@media (min-width: 75rem) {
  main {
    padding: 0;
    margin: 5.5rem 7rem;
    grid-template-columns: 2fr 1fr;
  }

  .card__container {
    grid-column: 1;
  }
}
</style>
