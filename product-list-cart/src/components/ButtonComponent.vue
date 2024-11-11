<template>
  <button :class="`button button-${type}`" :style="customStyle">
    <span v-if="icon" class="button__icon">
      <img :src="getImageUrl(icon)" :alt="icon" width="24px" />
    </span>
    <span class="button__text">{{ textContent }}</span>
  </button>
</template>

<script>
import { getImageUrl } from '../utils.js';

export default {
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    icon: {
      type: String,
      default: '',
    },
    textContent: {
      type: String,
      default: 'Click me',
      required: true,
    },
    customStyle: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    getImageUrl,
  },
};
</script>

<style scoped>
img {
  min-width: 20px;
}
.button-primary {
  color: var(--clr-white);
  background-color: var(--clr-red);
  border: none;
}

.button-secondary {
  background-color: var(--clr-white);
  border: 1px solid var(--clr-rose-400);
}
</style>
