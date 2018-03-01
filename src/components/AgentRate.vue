<template>
  <nav class="panel">
    <p class="panel-heading">
      Rates
    </p>
    <a 
      v-for="rate in rates" :key="rate.id"
      v-on:click="handleSelectRate(rate)"
      class="panel-block"
      >
      <span class="panel-icon">
        <i class="fas fa-user"></i>
      </span>
      {{ rate.name }}
    </a>
  </nav>
</template>
<script>
export default {
  name: "AgentRate",
  props: ["rates"],
  methods: {
    handleSelectRate: function(rate) {
      this.$emit("selectedRate", { rate })
    }
  }
}
</script>
<style scoped>
nav {
  margin: 10px 0px;
}
</style>
