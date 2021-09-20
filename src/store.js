import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const store = new Vuex.Store({
  state: {
    // manejo de la data centralizada
    busqueda: "", //espacio para guardar la busqueda
    juegos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 0,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 1,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 2,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 10,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 3,
        precio: 10000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 3,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
    ventas: [],
  },
  getters: {
    // metodos que no alteran la data, se procesan para hacer consultas (get)
    // calculos se hacen aca en la store para que puedan ser usandos en mas de un lugar

    allStoreStock(state) {
      return state.juegos.reduce((acumulador, juego) => {
        acumulador = acumulador + juego.stock;
        console.log(acumulador);
        return acumulador;
      }, 0);
    },
    //busqueda
    encuentraJuegoBuscado(state) {
      if (state.busqueda === "") {
        return [];
      } else {
        return state.juegos.filter((juego) =>
          juego.nombre.toLowerCase().includes(state.busqueda.toLowerCase())
        );
      }
    },
    juegosConStock(state) {
      return state.juegos.filter((juego) => {
        return juego.stock > 0;
      });
    },
    juegosSinStock(state) {
      return state.juegos.filter((juego) => juego.stock === 0);
    },
    // VENTA
    showTotalVentas(state) {
      return state.ventas.reduce((acumulador, venta) => {
        acumulador += venta.precio;
        return acumulador;
      }, 0);
    },
  },
  mutations: {
    // metodos que alteran la data
    // contexto: accedo al state y al root statem van con UPPER_SNAKECASE
    SET_BUSQUEDA(state, nuevaBusqueda) {
      // guardo la busqueda escrita por el usuario
      state.busqueda = nuevaBusqueda;
      console.log("ocurre mutacion cambiando busqueda", state.busqueda);
    },
    // **procesandoventa:
    REDUCIRPRODUCTO_STOCK(state, indiceJuego) {
      // bajar productos del stock
      state.juegos[indiceJuego].stock -= 1;
    },
    // extra:
    AGREGARPRODUCTO_STOCK(state, indiceJuego) {
      state.juegos[indiceJuego].stock += 1;
    },
    // generando venta
    AGREGARPRODUCTO_VENTA(state, venta) {
      state.ventas.push(venta);
    },
  },
  actions: {
    // contexto: puedo acceder al state y llamar a otras acciones
    setBusqueda(context, nuevaBusqueda) {
      // ejecuta la busqueda ingresada por el usuario, intercepta lo mutable
      console.log("tipo dato", typeof nuevaBusqueda);
      if (typeof nuevaBusqueda === "string") {
        context.commit("SET_BUSQUEDA", nuevaBusqueda);
        console.log("ejecuta setBusqueda");
      } else {
        console.log("valor ingresado no es un string");
      }
    },

    // VENTA DE JUEGO: asincora y cada uno con await para que el 2do que dura menos espere a que termine el primero que demora mas (1s vs 2s)
    async venderJuego(context, juego) {
      console.log("referencia desde la store", juego);
      // recibe un dispatch desde ventas
      await context.dispatch("procesarVenta", juego);
      await context.dispatch("registrarVenta", juego);
    },

    // **procesando venta, juegoAVender es una referencia, no es el de la store:
    async procesarVenta(context, juegoAVender) {
      await delay(2000); // durante proceso de la venta ocurre un delay de 1seg, luego de eso se ejecuta el reducir stock

      //mutacion REDUCIRPRODUCTO_STOCK:
      const indiceJuego = context.state.juegos.findIndex(
        (juego) => juego.codigo === juegoAVender.codigo
      );
      if (context.state.juegos[indiceJuego].stock > 0) {
        context.commit("REDUCIRPRODUCTO_STOCK", indiceJuego);
      }
      console.log("procesa venta");
    },
    //
    async registrarVenta(context, juego) {
      await delay(1000);
      const detalleProducto = {
        codigo: juego.codigo,
        nombre: juego.nombre,
        precio: juego.precio,
        destacado: juego.destacado,
      };
      context.commit("AGREGARPRODUCTO_VENTA", detalleProducto);
      console.log("registra venta");
    },
  },
});

export default store;
