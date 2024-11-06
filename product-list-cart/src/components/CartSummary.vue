<template>
  <div class="cart">
    <h2 class="red bold">Your Cart</h2>
    <div class="cart__items"></div>
    <!-- total -->
    <!-- carbon -->
    <ButtonComponent
      :custom-style="customConfirmOrderButtonStyle"
      type="primary"
      textContent="Confirm Order"
    />
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
  components: {
    ButtonComponent,
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
      },
    };
  },
};
</script>

<style scoped></style>
