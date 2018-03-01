<template>
  <nav class="panel">
    <p class="panel-heading">
      Rooms
    </p>
    <a 
      v-for="room in rooms" :key="room.id"
      class="panel-block"
      >
      <span class="panel-icon">
        <i class="fas fa-user"></i>
      </span>
      {{ room.roomType }}
    </a>
  </nav>
</template>
<script>
export default {
  name: "RoomRate",
  props: ["rooms"]
}
</script>
