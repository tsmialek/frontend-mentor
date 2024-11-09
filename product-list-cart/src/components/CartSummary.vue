<template>
  <div class="cart">
    <h2 class="red bold">Your Cart</h2>
    <div class="cart__items">
      <CartSummaryRow />
      <CartSummaryRow />
      <CartSummaryRow />
      <CartSummaryRow />
      <CartSummaryRow />
      <CartSummaryRow />
    </div>
    <div class="cart__total">
      <p class="text-rose-900">Order Total</p>
      <h2 class="bold">{{ formattedPrice }}</h2>
    </div>
    <div class="carbon__badge">
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
      :custom-style="customConfirmOrderButtonStyle"
      type="primary"
      textContent="Confirm Order"
    />
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
      type: Array,
      default() {
        return [];
      },
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
    formattedPrice() {
      return formatPrice(46.5);
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
  grid-column: span 3;
  width: 100%;
}

.cart p {
  font-size: var(--fs-500);
  color: var(--clr-rose-900);
}

.cart__items {
  display: grid;
  row-gap: var(--spacing-200);
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
</style>
