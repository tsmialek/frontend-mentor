<template>
  <div class="cart__summary__row">
    <div class="cart__row__text">
      <p class="text-rose-900 semi-bold">Dessert text</p>
      <p>
        <span class="red semi-bold">1x</span>
        <span>@$5.50</span>
        <span class="semi-bold">$5.50</span>
      </p>
    </div>
    <img
      src="../assets/images/icon-remove-item.svg"
      alt="remove item from cart"
    />
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    cartItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    formattedPrice() {
      return formatPrice(this.cartItem.price);
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
