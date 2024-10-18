<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Soon...</h1>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/marketplace">Talent Marketplace</router-link></li>
        <li><router-link to="/outsourcing">Outsourcing & EOR</router-link></li>
        <li><router-link to="/talent-pool">Talent Pool</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}

a {
  text-decoration: none;
}
</style>
