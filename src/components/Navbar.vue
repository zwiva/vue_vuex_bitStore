<template>
  <div class="navbar">
    <ul>
      <li><router-link :to="{ name: 'Inicio' }">Inicio</router-link></li>
      <li><router-link :to="{ name: 'Busquedas' }">Busquedas</router-link></li>
      <li><router-link :to="{ name: 'Ventas' }">Ventas</router-link></li>
      <li><router-link :to="{ name: 'Total' }">Total</router-link></li>
    </ul>

    <p class="logo">32bits</p>
    <img alt="Vue logo" src="../assets/img/logo.svg" class="logo-img" />
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
.logo {
  color: white;
  align-items: center;
  font-weight: bolder;
  font-size: 1.25em;
  margin: 0 1em;
}
.logo-img {
  margin-left: 0.5em;
  height: 50px;
  padding: 0.5em;
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