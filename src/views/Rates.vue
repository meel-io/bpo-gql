<template>
  <div class="rates columns">
    <aside class="column is-one-quarter">
      <agent v-on:selectedAgent="handleSelectedAgent"/>
      <agent-rate v-if="rates.length" v-on:selectedRate="handleSelectedRate" :rates="rates" />
      <agent-season v-if="seasonRates.length" v-on:selectedSeason="handleSelectedSeason" :season-rates="seasonRates" />
    </aside>
    <section class="column is-three-quarters">
      <room-rate v-if="rooms.length" :rooms="rooms" />
    </section>    
  </div>
</template>

<script>
import Agent from "@/components/Agent.vue"
import AgentRate from "@/components/AgentRate.vue"
import AgentSeason from "@/components/AgentSeason.vue"
import RoomRate from "@/components/RoomRate.vue"
export default {
  name: "rates",
  data() {
    return {
      rates: [],
      seasonRates: [],
      rooms: []
    }
  },
  components: {
    Agent,
    AgentRate,
    AgentSeason,
    RoomRate
  },
  methods: {
    handleSelectedAgent: function({ rates }) {
      this.rates = rates
      this.seasonRates = []
      this.rooms = []
    },
    handleSelectedRate: function({ rate }) {
      if (rate.seasons) {
        this.seasonRates = rate.seasons
        this.rooms = []
        return
      }
      this.rooms = rate.rooms
    },
    handleSelectedSeason: function({ season }) {
      this.rooms = season.rooms
    }
  }
}
</script>
<style scoped>
aside,
section {
  margin-top: 10px;
}
</style>