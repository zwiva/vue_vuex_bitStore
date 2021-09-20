<template>
  <div>

    <h1>Ventas</h1>

    <section>
      <h1 class="start">Inventario existente:</h1>
      <div>
        <h2>Juegos con stock: (mayor a 0)</h2>
        <List :listaJuegos="$store.getters.juegosConStock" />
        <h4>➡️ Juegos con stock: {{ $store.getters.juegosConStock.length }}</h4>
      </div>
      <div>
        <h2>Juegos sin stock: (pedir a proveedores)</h2>
        <List :listaJuegos="$store.getters.juegosSinStock" />
        <h4>➡️ Juegos sin stock: {{ $store.getters.juegosSinStock.length }}</h4>
      </div>
    </section>

    <hr />

    <section>
      <h1 class="start">Venta de juegos:</h1>
      <List
        :listaJuegos="$store.getters.juegosConStock"
        btn_mode="vender"
        @vender="$store.dispatch('venderJuego', $event)"
      />
      <!-- desde el @vender llama a la store -->
    </section>

  </div>
</template>

<script>
import List from "../components/List.vue";
export default {
  components: { List },
  props: {
    listaJuegos: { type: Array, require: true },
  },
};
</script>

<style>
.start,
h4,
li {
  text-align: start;
}
h2 {
  color: gray;
}
</style>