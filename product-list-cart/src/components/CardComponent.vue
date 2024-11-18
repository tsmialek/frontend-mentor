<template>
  <div class="card">
    <div class="card__img__button">
      <picture>
        <source
          media="(min-width: 46.875rem)"
          :srcset="getImageUrl(dessert.image['tablet'])"
        />
        <source
          media="(min-width: 75rem)"
          :srcset="getImageUrl(dessert.image['desktop'])"
        />
        <img :src="getImageUrl(dessert.image['mobile'])" alt="dessert" />
      </picture>
      <ButtonComponent
        type="secondary"
        icon="icon-add-to-cart.svg"
        textContent="Add to Cart"
        class="semi-bold"
        :on-click="() => addToCart(dessert)"
        v-if="!cart[dessert.name]"
      />
      <ButtonQuantity
        v-else
        :quantity="cart[dessert.name].quantity"
        :increment="() => addToCart(dessert)"
        :decrement="() => removeFromCart(dessert)"
      />
    </div>
    <div class="card__text">
      <p>{{ dessert.category }}</p>
      <h3>{{ dessert.name }}</h3>
      <p>
        <span class="red semi-bold">
          {{ formattedPrice }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { getImageUrl, formatPrice } from '../utils.js';
import ButtonComponent from './ButtonComponent.vue';
import ButtonQuantity from './ButtonQuantity.vue';

export default {
  components: {
    ButtonComponent,
    ButtonQuantity,
  },
  props: {
    dessert: {
      type: Object,
      default() {
        return {
          name: 'no data provided',
        };
      },
    },
    addToCart: {
      type: Function,
      required: true,
    },
    removeFromCart: {
      type: Function,
      required: true,
    },
  },
  computed: {
    formattedPrice() {
      return formatPrice(this.dessert.price);
    },
  },
  inject: ['cart'],
  methods: {
    getImageUrl,
  },
};
</script>

<style scoped>
.card {
  display: grid;
  row-gap: var(--spacing-400);
}

.card p {
  font-size: var(--fs-400);
}

.card__img__button {
  position: relative;
}

.card__img__button button {
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 50%;
}

.card__text {
  display: grid;
  row-gap: var(--spacing-100);
  align-content: start;
}

.card img {
  border-radius: 8px;
}

@media (min-width: 46.875rem) {
  .card {
    max-width: 100%;
  }
}

@media (min-width: 75rem) {
}
</style>
