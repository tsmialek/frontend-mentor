<template>
  <section>
    <h3 class="light-blue">Your Result</h3>
    <div class="circle">
      <h1>76</h1>
      <p class="light-blue" style="opacity: 0.5">of 100</p>
    </div>
    <h2>Great</h2>
    <p class="light-blue">
      Your performance exceed 65% of the people conducting the test here!
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  background: var(--gradient-purple-light);
  color: var(--white);
  text-align: center;
  border-radius: 0 0 32px 32px;
}

.circle {
  background: var(--gradient-purple-dark);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  position: relative;
  margin-inline: auto;
}

.circle h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -60%;
  font-size: 56px;
}

h2 {
  font-weight: 600;
}

.circle p {
  position: absolute;
  margin-block: 0;
  padding-block: 0;
  bottom: 0;
  left: 50%;
  translate: -50% -80%;
}

.light-blue {
  color: var(--light-blue);
}

p {
  margin-inline: auto;
  max-width: 35ch;
  padding-bottom: 40px;
}

h2 {
  padding-block: 24px 8px;
}

@media (width >= 50.625rem) {
}
</style>
