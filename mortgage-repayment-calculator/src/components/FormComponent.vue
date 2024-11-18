<template>
  <div class="form__component">
    <div class="form__title">
      <h1 class="font-preset-2 clr-slate-900">Mortgage Calculator</h1>
      <a class="font-preset-4 clr-slate-700">Clear All</a>
    </div>
    <InputItem
      type="number"
      unit="&pound;"
      label="Mortgage Amount"
      v-model.number="mortgageAmount"
      :input-classes="mortgageInputClasses"
    ></InputItem>
    <InputItem
      type="number"
      unit="years"
      label="Mortgage Term"
      v-model.number="mortgageTerm"
      :input-classes="mortgageTermInputClasses"
    ></InputItem>
    <InputItem
      type="number"
      unit="&percnt;"
      label="Interest Rate"
      v-model.number="interestRate"
      :input-classes="interestRateInputClasses"
    ></InputItem>
    <div class="radio__container">radio placeholder...</div>
    <button class="form__submit">Calculate Repayments</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IInputType } from '../interfaces.ts';
import InputItem from './InputItem.vue';

const mortgageAmount = ref(0);
const mortgageInputClasses: IInputType = {
  labelColor: 'clr-slate-700',
  labelTextPrest: 'font-preset-4',
  inputColor: 'clr-slate-900',
  inputTextPreset: 'font-preset-3',
  unitColor: 'clr-slate-900',
  unitPosition: 'left',
};

const mortgageTerm = ref(0);
const mortgageTermInputClasses: IInputType = {
  ...mortgageInputClasses,
  unitPosition: 'right',
};
const interestRate = ref(0);
const interestRateInputClasses: IInputType = {
  ...mortgageTermInputClasses,
};
</script>

<style scoped>
.form__component {
  display: grid;
  row-gap: 1.5rem;
  padding: 2rem 1.5rem;
}

.form__title {
  display: grid;
  row-gap: 0.5rem;
}

.form__title a {
  cursor: pointer;
  text-decoration: underline;
}
</style>
