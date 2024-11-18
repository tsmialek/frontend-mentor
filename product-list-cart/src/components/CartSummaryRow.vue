<template>
  <div class="cart__summary__row">
    <div class="cart__row__text">
      <p class="text-rose-900 semi-bold">{{ cartItem.name }}</p>
      <p>
        <span class="red semi-bold">{{ cartItem.quantity }}x</span>
        <span>@{{ singularPrice }}</span>
        <span class="semi-bold">{{ combinedPrice }}</span>
      </p>
    </div>
    <img
      src="../assets/images/icon-remove-item.svg"
      alt="remove item from cart"
      @click="removeAllDessertTypeFromCart(cartItem.name)"
    />
    <hr />
  </div>
</template>

<script>
import { formatPrice } from '../utils.js';

export default {
  props: {
    cartItem: {
      type: Object,
      default() {
        return {};
      },
    },
    removeAllDessertTypeFromCart: {
      type: Function,
      required: true,
    },
  },
  computed: {
    singularPrice() {
      return formatPrice(this.cartItem.price);
    },
    combinedPrice() {
      return formatPrice(this.cartItem.price * this.cartItem.quantity);
    },
  },
};
</script>

<style scoped>
.cart__summary__row {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}

img {
  border: 1px solid var(--clr-rose-400);
  padding: 2px;
  border-radius: 999px;
  width: 18px;
  cursor: pointer;
}

img:hover {
  background-color: var(--clr-rose-100);
}

.cart__row__text p:nth-of-type(2) {
  display: flex;
  gap: var(--spacing-100);
}

.cart__row__text {
  display: grid;
  row-gap: var(--spacing-100);
}

hr {
  margin-top: var(--spacing-200);
  border: 1px solid var(--clr-rose-100);
  grid-column: span 2;
}
</style>
