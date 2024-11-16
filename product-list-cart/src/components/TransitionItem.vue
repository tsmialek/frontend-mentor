<template>
  <Transition name="slide-item" appear>
    <slot></slot>
  </Transition>
</template>

<script>
export default {};
</script>

<style scoped>
.slide-item-enter-active,
.slide-item-leave-active {
  transition: all 300ms ease-in-out;
}

.slide-item-enter-from,
.slide-item-leave-to {
  scale: 0;
  opacity: 0;
  position: absolute;
}
</style>
