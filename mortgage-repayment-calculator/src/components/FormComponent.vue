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
    <div class="radio__container">
      <p class="font-preset-4 clr-slate-700">Mortgage type</p>
      <RadioItem
        name="mortgage-type"
        id="repayment"
        label="Repayment"
        v-model="mortgageType"
      ></RadioItem>
      <RadioItem
        name="mortgage-type"
        id="interest-only"
        label="Interest Only"
        v-model="mortgageType"
      ></RadioItem>
    </div>
    <div class="button form__submit font-preset-3" @click="submitForm">
      <img src="../assets/images/icon-calculator.svg" alt="calculator icon" />
      Calculate Repayments
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IFormData, IInputType } from '../interfaces.ts';
import InputItem from './InputItem.vue';
import RadioItem from './RadioItem.vue';

const mortgageAmount = ref();
const mortgageInputClasses: IInputType = {
  labelColor: 'clr-slate-700',
  labelTextPreset: 'font-preset-4',
  inputColor: 'clr-slate-900',
  inputTextPreset: 'font-preset-3',
  unitColor: 'clr-slate-900',
  unitPosition: 'left',
};

const mortgageTerm = ref();
const mortgageTermInputClasses: IInputType = {
  ...mortgageInputClasses,
  unitPosition: 'right',
};
const interestRate = ref();
const interestRateInputClasses: IInputType = {
  ...mortgageTermInputClasses,
};

const mortgageType = ref();

// submitting form
const emit = defineEmits(['calculateRepayment']);
const formData = ref<IFormData>({
  amount: mortgageAmount.value,
  term: mortgageTerm.value,
  interest: interestRate.value,
  type: mortgageType.value,
});

function submitForm() {
  formData.value = {
    amount: mortgageAmount.value,
    term: mortgageTerm.value,
    interest: interestRate.value,
    type: mortgageType.value,
  };
  emit('calculateRepayment', formData.value);
}
</script>

<style scoped>
.form__component {
  display: grid;
  row-gap: 1.5rem;
  padding: 2rem 1.5rem;
}

.radio__container {
  display: grid;
  row-gap: 0.875rem;
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
