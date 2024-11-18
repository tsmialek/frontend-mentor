<template>
  <div class="cart">
    <h2 class="red bold">Your Cart ({{ cartContent }})</h2>
    <transition-group
      appear
      v-autoHeight
      name="slide"
      tag="div"
      ref="cartItemsRef"
      v-show="Object.keys(cartItems).length > 0"
      class="cart__items"
    >
      <CartSummaryRow
        v-for="item in Object.values(cartItems)"
        :remove-all-dessert-type-from-cart="removeAllDessertTypeFromCart"
        :key="item.name"
        :cart-item="item"
      />
    </transition-group>
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
      :on-click="() => (modalOpen = true)"
    />
    <TransitionItem>
      <div v-if="Object.keys(cartItems).length == 0" class="cart__empty">
        <img
          src="../assets/images/illustration-empty-cart.svg"
          alt="Empty Cart"
        />
        <p>Your added items will appear here</p>
      </div>
    </TransitionItem>
    <OrderSummaryModal :is-open="modalOpen" @close="modalOpen = false" />
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import CartSummaryRow from './CartSummaryRow.vue';
import OrderSummaryModal from './OrderSummaryModal.vue';
import TransitionItem from './TransitionItem.vue';
import { formatPrice } from '../utils.js';
import { autoHeight } from '../directives/autoHeight.js';

export default {
  components: {
    ButtonComponent,
    CartSummaryRow,
    OrderSummaryModal,
    TransitionItem,
  },
  directives: {
    autoHeight,
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
      modalOpen: false,
      cartItemsWrapperHeight: 0,
    };
  },
  methods: {
    closeModal(event) {
      this.modalOpen = false;
    },
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
.slide-move,
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-leave-active {
  position: absolute;
}

.slide-leave-to,
.slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

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

.cart__items-wrapper {
  overflow: hidden;
  height: auto;
  transition: height 0.5s ease-in-out;
}

.cart__items {
  max-height: 500px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: var(--clr-rose-100) var(--clr-white);
  margin-inline: -1rem;
  padding-inline: 1rem;
  transition: all 300ms ease-in-out;
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
