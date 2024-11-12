<template>
  <button class="button button-quantity" :style="customStyle">
    <span class="button__icon" @click="decrement">
      <img
        src="../assets/images/icon-decrement-quantity.svg"
        alt="decrement quantity"
        width="10px"
        height="10px"
      />
    </span>
    <span class="button__text semi-bold">{{ quantity }}</span>
    <span class="button__icon" @click="increment">
      <img
        src="../assets/images/icon-increment-quantity.svg"
        alt="decrement quantity"
        width="10px"
        height="10px"
      />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    quantity: {
      type: Number,
      default: 0,
      required: true,
    },
    customStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    increment: {
      type: Function,
      required: true,
    },
    decrement: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.button-quantity {
  display: flex;
  gap: var(--spacing-400);
  justify-content: space-between;
  align-items: center;
  background: var(--clr-red);
  color: var(--clr-white);
  min-width: 166px;
  border: none;
  cursor: auto;
}

.button__icon {
  border: 2px solid var(--clr-white);
  border-radius: 999px;
  padding: 5px;
  margin-inline: -1rem;
  cursor: pointer;
}

.button__icon:hover {
  color: var(--clr-red);
  background: var(--clr-white);
}

.button__icon:hover img {
  filter: brightness(0) saturate(100%) invert(27%) sepia(58%) saturate(2329%)
    hue-rotate(353deg) brightness(93%) contrast(98%);
}
</style>
