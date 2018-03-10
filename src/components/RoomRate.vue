<template>
  <div class="container">
    <h2 class="subtitle">
      Rooms
    </h2>
    <div class="box"
    v-for="room in rooms" :key="room.id">
      <p>{{ room.roomType }}</p>
      <div class="columns">
        <rate v-on:updateRate="handleUpdatedRate" type="Weekday" :room-rate-id="room.id" :value="room.weekdayRate" />
        <rate v-on:updateRate="handleUpdatedRate" type="Weekend" :room-rate-id="room.id" :value="room.weekendRate" /> 
      </div>
    </div>
  </div>
</template>
<script>
import Rate from "@/components/Rate.vue"
import { UPDATE_RATE } from "../graphql/updateRate.js"

export default {
  name: "RoomRate",
  props: ["rooms"],
  components: {
    Rate
  },
  methods: {
    handleUpdatedRate(payload) {
      this.$apollo
        .mutate({
          mutation: UPDATE_RATE,
          variables: payload,
          update: (proxy, { data: payload }) => {}
        })
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}
</style>
