<template>
  <div class="card">
    <div class="card__img__button">
      <picture>
        <source
          media="(min-width: 46.875rem)"
          :srcset="getImageUrl('tablet')"
        />
        <source media="(min-width: 75rem)" :srcset="getImageUrl('desktop')" />
        <img :src="getImageUrl('mobile')" alt="dessert" width="654" />
      </picture>
      <button>Add to cart</button>
    </div>
    <div class="card__text">
      <p>{{ dessert.category }}</p>
      <h3>{{ dessert.name }}</h3>
      <p>
        <span class="red">
          {{ formattedPrice }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
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
    getImageUrl(type) {
      return new URL(
        `../assets/images/${this.dessert.image[type]}`,
        import.meta.url
      ).href;
    },
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
