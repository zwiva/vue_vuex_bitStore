<template>
  <div class="navbar">
    <ul>
      <li><router-link :to="{ name: 'Inicio' }">Inicio</router-link></li>
      <li><router-link :to="{ name: 'Busquedas' }">Buscar</router-link></li>
      <li><router-link :to="{ name: 'Ventas' }">Vender</router-link></li>
      <li><router-link :to="{ name: 'Total' }">Total Ventas</router-link></li>
    </ul>
    <p class="logo__separation">|</p>
    <router-link :to="{ name: 'Inicio' }" class="router__icon">
      <div class="icon">
        <img alt="Vue logo" src="../assets/img/logo.svg" class="logo-img" />
        <p class="logo">32bits</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  display: flex;
  background-color: black;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
}
.icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.router__icon {
  margin: 1em;
}
div > .logo {
  color: white;
  align-items: center;
  font-weight: bolder;
  font-size: 1em;
  /* margin: 0 1em; */
}
.logo__separation {
  color: rgb(60, 60, 60);
  font-weight: lighter;
  font-size: 2em;
  margin: 0.25em 0.5em;
}
div > .logo-img {
  height: 50px;
}
.navbar ul {
  display: flex;
  color: white;
  margin: 0;
  flex-wrap: wrap;
  padding: 0;
}
.navbar li {
  margin: 0.5em;
  list-style: none;
  padding: 0.5em;
}
li a {
  color: white;
  text-decoration: none;
}
li a:hover {
  font-weight: bold;
}
</style>