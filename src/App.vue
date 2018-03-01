<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <h1>BPO</h1>
      </div>
      <div class="navbar-menu">
        <router-link class="navbar-item" to="/rates">Bookings</router-link>
        <router-link class="navbar-item" to="/rates">Agents & Rates</router-link>
        <router-link class="navbar-item" to="/rates">Allocation</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  padding: 10px 10px;
  font-size: 24px;
}
</style>
