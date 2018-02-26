<template>
  <div class="home">
    <img src="../assets/logo.png">
    <aside>
      <agent />
      <agent-rate />
      <agent-season />
    </aside>
    <section>
      <room-rate />
    </section>    
  </div>
</template>

<script>
import Agent from "@/components/Agent.vue";
import AgentRate from "@/components/AgentRate.vue";
import AgentSeason from "@/components/AgentSeason.vue";
import RoomRate from "@/components/RoomRate.vue";

export default {
  name: "home",
  components: {
    Agent,
    AgentRate,
    AgentSeason,
    RoomRate
  }
};
</script>
