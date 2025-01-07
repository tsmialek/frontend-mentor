<template>
  <div class="customRadio__container">
    <input type="radio" :value="id" :name="name" :id="id" v-model="model" />
    <label :for="id"></label>
    <span class="font-preset-3">{{ label }}</span>
  </div>
</template>

<!-- ToDo
- add classes dynamically when input (any) is focused / active
- display results
-->

<script setup lang="ts">
interface Props {
  name?: string;
  id: string;
  label?: string;
}

const model = defineModel();

const { name, id, label = 'not provided' } = defineProps<Props>();
</script>

<style scoped>
.customRadio__container {
  padding: 0.875rem 1rem;
  border: 1px solid var(--clr-slate-500);
  border-radius: 0.25rem;
  display: flex;
  gap: 1rem;
  transition: all ease-in-out 150ms;
}

.customRadio__container:has(input[type='radio']:checked) {
  background-color: hsl(61, 70%, 52%, 0.15);
  border-color: var(--clr-lime);
}

/* Custom radio button styles */
input[type='radio'] {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px !important;
  overflow: hidden;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
}

label {
  display: inline-flex;
  align-items: center;
}

label::before {
  content: '';
  display: block;
  height: 1.25em;
  width: 1.25em;
  border: solid 1px var(--clr-slate-700);
  border-radius: 50%;
  transition: border ease-in-out 150ms;
}

input[type='radio']:checked + label::before {
  background: radial-gradient(
    0.75em circle at center,
    currentColor 50%,
    transparent 55%
  );
  border-color: currentColor;
}

input[type='radio']:checked + label,
input[type='radio']:focus + label {
  color: var(--clr-lime);
}

input[type='radio']:focus + label::before {
  border-color: currentColor;
}
</style>
