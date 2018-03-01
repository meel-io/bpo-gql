<template>
  <ApolloQuery
  :query="require('../graphql/Agents.gql')">
    <template slot-scope="{ result: { data } }">
      <nav v-if="data" class="panel">
        <p class="panel-heading">
          Agents
        </p>
        <a 
          v-for="agent in data.agents" :key="agent.id"
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
  </ApolloQuery>  
</template>
<script>
export default {
  name: "Agent",
  data() {
    return {
      rates: []
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