<template>
  <div class="rates">
    <aside>
      <agent v-on:selectedAgent="handleSelectedAgent"/>
      <agent-rate v-if="rates.length" v-on:selectedRate="handleSelectedRate" :rates="rates" />
      <agent-season v-if="seasonRates.length" v-on:selectedSeason="handleSelectedSeason" :season-rates="seasonRates" />
    </aside>
    <section>
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
<style scope>
aside {
  float: left;
  width: 21%;
  margin-top: 10px;
}
section {
  margin-top: 10px;
  float: right;
  width: 78%;
  padding: 0px 15px;
}
</style>

