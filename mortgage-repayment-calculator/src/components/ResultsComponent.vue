<template>
  <div class="results__component">
    <h1 class="font-preset-2 clr-white">Your results</h1>
    <p class="font-preset-4 clr-slate-300">
      Your results are shown below based on the information you provided. To
      adjust the results, edit the form and click “calculate repayments” again.
    </p>
    <div class="summary">
      <h2 class="font-preset-4 clr-slate-300">Your monthly repayments</h2>
      <p class="monthly__repayments font-preset-1 clr-lime">
        &pound;{{ results.monthly }}
      </p>
      <hr />
      <h2 class="font-preset-4 clr-slate-300">
        Total you'll repay over the term
      </h2>
      <p class="total__repayment font-preset-2 clr-white">
        &pound;{{ results.total }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IResult } from '../interfaces.ts';

interface Props {
  results: IResult;
}

const { results } = defineProps<Props>();
</script>

<style scoped>
.results__component {
  background-color: var(--clr-slate-900);
  padding: 2rem 1.5rem;
}

.total__repayment {
  margin-top: 0.875rem;
}

h1 {
  margin-bottom: 1rem;
}

hr {
  border: 0;
  border-top: 1px solid var(--clr-slate-500);
  margin-block: 1rem;
}

.summary {
  background: hsl(0, 0%, 0%, 0.25);
  border-radius: 0.5rem;
  padding: 1.5rem 1rem;
  margin-top: 1.5rem;
  box-shadow: 0px -5px 0px 0px var(--clr-lime);
}

.clr-slate-300 {
  color: var(--clr-slate-300);
}

.clr-white {
  color: var(--clr-white);
}

.clr-lime {
  color: var(--clr-lime);
}
</style>
