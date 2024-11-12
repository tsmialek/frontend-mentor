<template>
  <!-- Adjust the cart summary to reuse it in Modal
   - conditionally displaying carbon-neutral badge
   - passing main-img
   - passing summary row type
   - passing helper-text (figure out better name for it)
   - use provide / inject to pass the cartItems and other props
   -->
  <div class="cart">
    <h2 class="red bold">Your Cart ({{ cartContent }})</h2>
    <div class="cart__items" v-if="Object.keys(cartItems).length > 0">
      <CartSummaryRow
        v-for="(item, idx) in Object.values(cartItems)"
        :remove-all-dessert-type-from-cart="removeAllDessertTypeFromCart"
        :key="idx"
        :cart-item="item"
      />
    </div>
    <div class="cart__total" v-if="Object.keys(cartItems).length > 0">
      <p class="text-rose-900">Order Total</p>
      <h2 class="bold">{{ totalPrice }}</h2>
    </div>
    <div class="carbon__badge" v-if="Object.keys(cartItems).length > 0">
      <img
        src="../assets/images/icon-carbon-neutral.svg"
        alt="Carbon Neutral"
      />
      <p class="text-rose-900">
        This is a
        <span class="semi-bold">carbon-neutral</span>
        delivery
      </p>
    </div>
    <ButtonComponent
      v-if="Object.keys(cartItems).length > 0"
      :custom-style="customConfirmOrderButtonStyle"
      type="primary"
      textContent="Confirm Order"
    />
    <div v-if="Object.keys(cartItems).length == 0" class="cart__empty">
      <img
        src="../assets/images/illustration-empty-cart.svg"
        alt="Empty Cart"
      />
      <p>Your added items will appear here</p>
    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import { formatPrice } from '../utils.js';
import CartSummaryRow from './CartSummaryRow.vue';

export default {
  components: {
    ButtonComponent,
    CartSummaryRow,
  },
  props: {
    cartItems: {
      type: Object,
      default() {
        return ['hello'];
      },
    },
    removeAllDessertTypeFromCart: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      customConfirmOrderButtonStyle: {
        'font-size': 'var(--fs-500)',
        'text-align': 'center',
        width: '100%',
        'padding-block': 'var(--spacing-200)',
        'font-size': 'var(--fs-500)',
      },
    };
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (const item of Object.values(this.cartItems)) {
        total += item.price * item.quantity;
      }
      return formatPrice(total);
    },
    cartContent() {
      return Object.values(this.cartItems).reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
  },
};
</script>

<style scoped>
.cart {
  padding: var(--spacing-300);
  background: var(--clr-white);
  border-radius: var(--spacing-150);
  display: grid;
  row-gap: var(--spacing-300);
  width: 100%;
  height: fit-content;
}

.cart p {
  font-size: var(--fs-500);
  color: var(--clr-rose-900);
}

.cart__items {
  display: grid;
  row-gap: var(--spacing-200);
  max-height: 500px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: var(--clr-rose-100) var(--clr-white);
  margin-inline: -1rem;
  padding-inline: 1rem;
}

.cart__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-300);
}

.cart__total {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.carbon__badge {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: var(--spacing-200);
  background: var(--clr-rose-50);
  border-radius: var(--spacing-100);
  gap: var(--spacing-100);
}

@media (min-width: 46.875rem) {
}

@media (min-width: 75rem) {
  .cart {
    grid-column: 2;
    grid-row: 1 / 3;
    position: sticky;
    top: var(--spacing-300);
  }
}
</style>
