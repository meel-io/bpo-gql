<template>
  <div class="column">
    <label class="label">{{ type }}</label>
    <div class="control">
      <input class="input" type="text" placeholder="Text input" v-model="rate">
    </div>
  </div> 
</template>
<script>
export default {
  name: "Rate",
  props: ["type", "value", "roomRateId"],
  data: function() {
    return {
      rate: this.value
    }
  },
  filters: {
    toCurrency: value => {
      return Number(value).toFixed(2)
    }
  },
  watch: {
    rate: function(newRate) {
      const newRates = {
        roomRateId: this.roomRateId,
        weekdayRate: this.type === "Weekday" ? newRate : 0,
        weekendRate: this.type === "Weekend" ? newRate : 0
      }
      this.$emit("updateRate", { newRates })
    }
  }
}
</script>
