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
        <img
          :src="getImageUrl(dessert.image['mobile'])"
          alt="dessert"
          width="654"
        />
      </picture>
      <ButtonComponent
        type="secondary"
        icon="icon-add-to-cart.svg"
        textContent="Add to Cart"
        class="semi-bold"
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
import { getImageUrl } from '../utils.js';
import ButtonComponent from './ButtonComponent.vue';

export default {
  components: {
    ButtonComponent,
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
  },
  computed: {
    formattedPrice() {
      return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(this.dessert.price);
    },
  },
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
    width: min-content;
  }

  .card img {
    max-width: 212px;
  }
}

@media (min-width: 75rem) {
  .card img {
    max-width: 240px;
  }
}
</style>
