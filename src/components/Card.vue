<template>
  <div class="card">
    <p class="card__date">{{ this.date }}</p>
    <p>{{ this.fact }}</p>
  </div>
</template>

<script>
export default {
  props: {
    fact: String,
    date: String,
  },
};
</script>

<style scoped lang="scss">
.card {
  padding: 30px;
  border-radius: 10px;
  box-shadow: black;
  &__date {
    font-weight: bold;
  }
}
</style>
