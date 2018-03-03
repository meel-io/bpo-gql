<template>
  <div class="container">
    <h2 class="subtitle">
      Rooms
    </h2>
    <div class="box"
    v-for="room in rooms" :key="room.id">
      <p>{{ room.roomType }}</p>
      <div class="columns">
        <div class="column">
          <label class="label">Weekday: </label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" :value="room.weekendRate | toCurrency">
          </div>
        </div>  
        <div class="column">
          <label class="label">Weekend: </label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" :value="room.weekendRate | toCurrency">
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RoomRate",
  props: ["rooms"],
  filters: {
    toCurrency: value => {
      return Number(value).toFixed(2)
    }
  },
  methods: {
    setRoomRate() {
      this.$apollo.mutate({
        mutation: gql`
          mutation($roomRateId: String!, $weekdayRate: Int!, $weekendRate: Int!) {
            setRoomRate(
              roomRateId: $roomRateId
              weekdayRate: $weekdayRate
              weekendRate: $weekendRate
            ) {
              id
              weekdayRate
              weekendRate
            }
          }
        `,
        variables: {
          roomRateId: roomRateId,
          weekdayRate: weekdayRate,
          weekendRate: weekendRate
        }
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
