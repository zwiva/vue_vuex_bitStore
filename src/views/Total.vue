<template>
  <div>
    <h1>Total ventas</h1>

    <section>
      <h2>Listado de ventas</h2>

      <List
        :listaJuegos="$store.state.ventas"
        total_mode="no ver"
        v-if="$store.state.ventas.length > 0"
      />
      <p v-else>El carrito esta vacío</p>
    </section>

    <section>
      <h2>Monto total de ventas</h2>
      <p>Total: $ {{ $store.getters.showTotalVentas }}</p>
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
</style>