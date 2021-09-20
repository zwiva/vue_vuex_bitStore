<template>
  <div>
    <ul>
      <li
        v-for="juego in listaJuegos"
        :key="juego.codigo"
        :style="{ 'background-color': juego.color }"
      >
        {{ juego.codigo }} |
        {{ juego.nombre }} 
        <span v-if="total_mode === 'no'"> | </span> 
        {{ juego.stock }} | 
        $ {{ juego.precio }} 

        <!-- <span v-if="total_mode === 'si'"> {{ $store.getters.showVentaAgrupadaPorJuego }} </span> -->
        <button v-if="btn_mode === 'vender'" @click="$emit('vender', juego)">Vender</button>
        <!-- al hacer click emite accion vender y le pasa juego -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "listajuegos",
  props: {
    listaJuegos: { type: Array, require: true },
    btn_mode: { type: String, default: "mirar" },
    total_mode: { type: String, default: "no" },
  },
};
</script>

<style>
li {
  padding: 0.25em 0.25em;
}

button {
  background-color: white;
  border-radius: 3px;
  border: none;
  padding: 0.3em 0.5em;
  font-family: "Orbitron", sans-serif;
}
button:hover {
  background-color: black;
  color: white;
}
</style>