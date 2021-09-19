import Vue from "vue";
import Router from "vue-router";

const Inicio = () => import("./views/Inicio");
const Busquedas = () => import("./views/Busquedas");
const Ventas = () => import("./views/Ventas");
const Total = () => import("./views/Total");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "Inicio",
    },
    {
      path: "",
      redirect: "Inicio",
    },
    {
      path: "/inicio",
      name: "Inicio",
      component: Inicio,
      alias: ["/home"],
    },
    {
      path: "/busquedas",
      name: "Busquedas",
      component: Busquedas,
    },
    {
      path: "/ventas",
      name: "Ventas",
      component: Ventas,
    },
    {
      path: "/total",
      name: "Total",
      component: Total,
    },
    {
      path: "*",
      redirect: "Inicio",
    },
  ],
});
