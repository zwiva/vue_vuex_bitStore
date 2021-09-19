<template>
  <div>
    <h1>Búsquedas</h1>

    <section class="search__section">
      <h2>Filtro</h2>
      <input
        type="text"
        placeholder="Escribe el nombre del juego"
        :value="$store.state.busqueda"
        @input="$store.dispatch('setBusqueda', $event.target.value)"
      />
      <List v-if="$store.state.busqueda"
        :listaJuegos="$store.getters.encuentraJuegoBuscado"
      />
      <span class="filtermsge" v-else>👈 Por favor ingresa una búsqueda 🔍 </span>
    </section>

    <section class="search__section">
      <h2>Cantidad de juegos y stock total</h2>
      <p>Cantidad de juegos totales: {{ $store.state.juegos.length }}</p>
      <p>Stock total: {{ $store.getters.allStock }}</p>
    </section>

    <section class="search__section">
      <h2>Listado de juegos</h2>
      <List :listaJuegos="$store.state.juegos" />
    </section>
  </div>
</template>

<script>
import List from "../components/List.vue";
export default {
  components: { List },
};
</script>

<style>
.filtermsge {
  text-align: center;
  margin: 1em;
}
.search__section {
  text-align: start;
}
</style>