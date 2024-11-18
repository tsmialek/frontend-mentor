<template>
  <teleport to="body">
    <div class="modal-overlay" v-if="isOpen">
      <div class="modal-content">
        Hello
        <button @click="$emit('close')">close</button>
      </div>
    </div>
  </teleport>
</template>

<!-- 
  [x] Using teleport in carSummary and then inside, modal content
      instead of passing closing function, use emit to close the modal (read the docs)
  [ ] Add animations of CartSummary and modal
-->

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}
</style>
