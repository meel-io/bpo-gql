<template>
  <nav class="panel">
    <p class="panel-heading">
      Agents
    </p>
    <a 
       v-for="agent in agents" :key="agent.id"
       v-on:click="handleSelectAgent(agent.rates)"
       class="panel-block"
      >
      <span class="panel-icon">
        <i class="fas fa-user"></i>
      </span>
      {{ agent.name }}
    </a>
  </nav>
</template>
<script>
import { AGENTS } from "../graphql/agents.js"

export default {
  name: "Agent",
  data() {
    return {
      agents: []
    }
  },
  apollo: {
    agents: {
      query: AGENTS
    }
  },
  methods: {
    handleSelectAgent: function(rates) {
      this.$emit("selectedAgent", { rates })
    }
  }
}
</script>
<style scoped>
nav {
  margin-bottom: 15px;
}
</style>
