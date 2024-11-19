<template>
  <main>
    <FormComponent @calculateRepayment="calculateRepayment" />
    <ResultsComponent :results="results" />
  </main>
</template>

<script setup lang="ts">
import FormComponent from './components/FormComponent.vue';
import ResultsComponent from './components/ResultsComponent.vue';
import { IResult, IFormData } from './interfaces.ts';
import { ref } from 'vue';

const results = ref<IResult>({});

function calculateRepayment(data: IFormData): IResult {
  console.log(data);
  const principal = data.amount;
  const annualInterestRate = data.interest / 100;
  const monthlyInterestRate = annualInterestRate / 12;
  const numberOfPayments = data.term;

  let monthlyPayment = 0;

  if (data.type === 'repayment') {
    monthlyPayment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  } else if (data.type === 'interest only') {
    monthlyPayment = principal * monthlyInterestRate;
  }

  console.log(monthlyPayment + ' ' + numberOfPayments);
  return {
    monthly: monthlyPayment,
    total: monthlyPayment * numberOfPayments,
  };
}
</script>

<style scoped></style>
