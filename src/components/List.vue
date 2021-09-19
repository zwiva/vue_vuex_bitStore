<template>
  <div>
    <ul>
      <li
        v-for="juego in listaJuegos"
        :key="juego.codigo"
        :style="{ 'background-color': juego.color }"
      >
        {{ juego.codigo }} | {{ juego.nombre }} | {{ juego.stock }} |
        {{ juego.precio }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "listajuegos",
  props: {
    listaJuegos: { type: Array, require: true },
  },
};
</script>

<style>
</style>