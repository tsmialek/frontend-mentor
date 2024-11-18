<template>
  <customInput__container>
    <label
      v-if="label"
      :class="[inputClasses?.labelColor, inputClasses?.labelTextPrest]"
    >
      {{ label }}
    </label>
    <div
      :class="[
        { inverted: inputClasses?.unitPosition === 'left' },
        'input__item',
      ]"
    >
      <input
        :type="type"
        v-model="model"
        :class="[inputClasses?.inputColor, inputClasses?.inputTextPreset]"
      />
      <div
        class="input__unit"
        :class="[inputClasses?.labelColor, inputClasses?.inputTextPreset]"
      >
        {{ unit }}
      </div>
    </div>
  </customInput__container>
</template>

<script setup lang="ts">
import { IInputType } from '../interfaces.ts';

interface Props {
  type?: string;
  unit?: string;
  label?: string;
  inputClasses?: IInputType;
}

const model = defineModel();
const {
  type = 'string',
  unit = '',
  label = '',
  inputClasses,
} = defineProps<Props>();
</script>

<style scoped>
.inverted {
  display: flex;
  flex-direction: row-reverse;
}

.input__item {
  display: flex;
  border: 1px solid var(--clr-slate-500);
  border-radius: 0.25rem;
  margin-top: 0.875rem;
}
.input__item > * {
  border: none;
  padding: 0.875rem 1rem;
  border-radius: 0.25rem;
}

input {
  width: 100%;
}

.input__unit {
  background: var(--clr-slate-100);
}
</style>
