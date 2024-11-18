<template>
  <main>
    <h1>Desserts</h1>
    <div class="card__container">
      <CardComponent
        v-for="(dessert, index) in dessertsData"
        :key="index"
        :dessert="dessert"
        :add-to-cart="addDessertToCart"
        :remove-from-cart="removeDessertFromCart"
      />
    </div>
    <CartSummary
      class="cart"
      :cart-items="cart"
      :remove-all-dessert-type-from-cart="removeAllDessertTypeFromCart"
    />
  </main>
</template>

<script>
import CardComponent from './components/CardComponent.vue';
import CartSummary from './components/CartSummary.vue';
import OrderSummaryModal from './components/OrderSummaryModal.vue';

export default {
  components: {
    CardComponent,
    CartSummary,
    OrderSummaryModal,
  },
  data() {
    return {
      cart: {},
      dessertsData: [],
    };
  },
  provide() {
    return {
      cart: this.cart,
    };
  },
  methods: {
    async loadDesertsData() {
      let res = await fetch('/data/data.json');
      this.dessertsData = await res.json();
      console.log(this.dessertsData);
    },
    addDessertToCart(dessert) {
      if (this.cart[dessert.name]) {
        this.cart[dessert.name].quantity++;
      } else {
        this.cart[dessert.name] = {
          ...dessert,
          quantity: 1,
        };
      }
      console.log(this.cart);
    },
    removeDessertFromCart(dessert) {
      if (this.cart[dessert.name].quantity > 1) {
        this.cart[dessert.name].quantity -= 1;
      } else {
        delete this.cart[dessert.name];
      }
      console.log(this.cart);
    },
    removeAllDessertTypeFromCart(dessertName) {
      delete this.cart[dessertName];
    },
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
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
