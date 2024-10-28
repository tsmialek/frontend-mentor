<template>
  <div
    class="detail"
    :style="{
      color: `var(${detailData.color})`,
      background: `var(${detailData.background})`,
    }"
  >
    <div class="detail__description">
      <img :src="detailData.icon" />
      {{ detailData.category }}
    </div>
    <div class="detail__score">
      <span class="dark-navy score">{{ detailData.score }}</span>
      <span class="dark-navy" style="opacity: 0.5">/ 100</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['detailData'],
  data() {
    return {};
  },
};
</script>

<style scoped>
.score {
  font-weight: 700;
  margin-right: 8px;
}

.detail {
  width: 100%;
  padding: 18px 16px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
}

.dark-navy {
  color: var(--dark-navy);
}
</style>
