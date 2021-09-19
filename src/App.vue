<template>
  <div id="app">
    <Navbar />

    <main>
      <transition name="vista">
        <router-view></router-view>
      </transition>
    </main>

    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Navbar, Footer },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-items: center;
  height: 100vh;
  justify-content: space-between;
}
body,
p {
  margin: 0;
  padding: 0;
  font-family: "Orbitron", sans-serif;
}
main {
  margin: 0 auto;
  text-align: center;
  width: 90%;
  max-width: 720px;
}
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
h2 {
  font-family: "Rajdhani", sans-serif;
  text-align: start;
}
</style>
