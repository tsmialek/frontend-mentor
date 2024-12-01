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
      v-model.number="formData.amount"
      :input-classes="mortgageInputClasses"
    ></InputItem>
    <span
      style="color: red"
      v-for="error in v$.amount.$errors"
      :key="error.$uid"
    >
      {{ error.$message }}
    </span>
    <InputItem
      type="number"
      unit="years"
      label="Mortgage Term"
      v-model.number="formData.term"
      :input-classes="mortgageTermInputClasses"
    ></InputItem>
    <span style="color: red" v-for="error in v$.term.$errors" :key="error.$uid">
      {{ error.$message }}
    </span>
    <InputItem
      type="number"
      unit="&percnt;"
      label="Interest Rate"
      v-model.number="formData.interest"
      :input-classes="interestRateInputClasses"
    ></InputItem>
    <span
      style="color: red"
      v-for="error in v$.interest.$errors"
      :key="error.$uid"
    >
      {{ error.$message }}
    </span>
    <div class="radio__container">
      <p class="font-preset-4 clr-slate-700">Mortgage type</p>
      <RadioItem
        name="mortgage-type"
        id="repayment"
        label="Repayment"
        v-model="formData.type"
      ></RadioItem>
      <RadioItem
        name="mortgage-type"
        id="interest-only"
        label="Interest Only"
        v-model="formData.type"
      ></RadioItem>
      <span
        style="color: red"
        v-for="error in v$.type.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </span>
    </div>
    <div class="button form__submit font-preset-3" @click="submitForm">
      <img src="../assets/images/icon-calculator.svg" alt="calculator icon" />
      Calculate Repayments
    </div>
  </div>
  <div v-for="(error, idx) in v$.errors" :key="idx">
    {{ error.$property }}: {{ error.$message }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IFormData, IInputType } from '../interfaces.ts';
import InputItem from './InputItem.vue';
import RadioItem from './RadioItem.vue';
import useVuelidate from '@vuelidate/core';
import { required, numeric, not, sameAs } from '@vuelidate/validators';

const rules = {
  amount: {
    required,
    numeric,
    not: not(sameAs(0)),
  },
  term: {
    required,
    numeric,
    not: not(sameAs(0)),
  },
  interest: {
    required,
    numeric,
    not: not(sameAs(0)),
  },
  type: { required },
};

const mortgageInputClasses: IInputType = {
  labelColor: 'clr-slate-700',
  labelTextPreset: 'font-preset-4',
  inputColor: 'clr-slate-900',
  inputTextPreset: 'font-preset-3',
  unitColor: 'clr-slate-900',
  unitPosition: 'left',
};
const mortgageTermInputClasses: IInputType = {
  ...mortgageInputClasses,
  unitPosition: 'right',
};
const interestRateInputClasses: IInputType = {
  ...mortgageTermInputClasses,
};

const formData = ref<IFormData>({
  amount: null,
  term: null,
  interest: null,
  type: '',
});
const v$ = useVuelidate(rules, formData);

// submitting form
const emit = defineEmits(['calculateRepayment']);
async function submitForm() {
  const result = await v$.value.$validate();
  if (!result) return;
  else emit('calculateRepayment', formData.value);
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
