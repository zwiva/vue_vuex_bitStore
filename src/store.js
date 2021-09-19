import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // manejo de la data centralizada
    busqueda: "", //espacio para guardar la busqueda
    juegos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
  },
  getters: {
    // metodos
    // calculos se hacen aca en la store para que puedan ser usandos en mas de un lugar
    allStock(state) {
      return state.juegos.reduce((acumulador, juego) => {
        acumulador = acumulador + juego.stock;
        console.log(acumulador);
        return acumulador;
      }, 0);
    },
    encuentraJuegoBuscado(state) {
      if (state.busqueda === "") {
        return [];
      } else {
        return state.juegos.filter((juego) =>
          juego.nombre.toLowerCase().includes(state.busqueda.toLowerCase())
        );
      }
    },
  },
  mutations: {
    // guardo la busqueda escrita por el usuario
    SET_BUSQUEDA(state, nuevaBusqueda) {
      state.busqueda = nuevaBusqueda;
      console.log("ocurre mutacion cambiando busqueda", state.busqueda);
    },
  },
  actions: {
    // ejecuta la busqueda ingresada por el usuario
    setBusqueda(contexto, nuevaBusqueda) {
      contexto.commit("SET_BUSQUEDA", nuevaBusqueda);
      console.log("ejecuta setBusqueda");
    },
  },
});

export default store;
