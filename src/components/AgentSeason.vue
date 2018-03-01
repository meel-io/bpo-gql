<template>
  <nav class="panel">
    <p class="panel-heading">
      Seasons
    </p>
    <a 
      v-for="seasonRate in seasonRates" :key="seasonRate.id"
      v-on:click="handleSelectSeason(seasonRate)"
      class="panel-block"
      >
      <span class="panel-icon">
        <i class="fas fa-user"></i>
      </span>
      {{ seasonRate.startDate }}
    </a>
  </nav>
</template>
<script>
export default {
  name: "AgentSeason",
  props: ["seasonRates"],
  methods: {
    handleSelectSeason: function(season) {
      this.$emit("selectedSeason", { season })
    }
  }
}
</script>