<template>
  <button>
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: String,
    colorVariable: String,
  },
};
</script>

<style scoped>
button {
  border-radius: 128px;
  color: var(--white);
  font-size: var(--fs-body);
  font-weight: 700;
  padding-block: 17px;
  margin-block: 30px;
  width: 100%;
  background: var(--dark-navy);
  transition: 150ms;
  transition-property: background;
}

button:hover {
  background: var(--gradient-purple-light);
}
@media (width >= 810px) {
  button {
    margin-block-start: 41px;
    cursor: pointer;
  }
}
</style>
