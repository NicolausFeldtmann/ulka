<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Footer from './shared/Footer.vue';
import Header from './shared/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body{
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

::-webkit-scrollbar{
    width: 10px;
    border-radius: 5px;
}

::-webkit-scrollbar-thumb{
    background-color: rgb(53, 104, 53);
    border-radius: 10px;
    height: 64px;
}

::-webkit-scrollbar-track{
    height: 36px;
    background-color: rgb(184, 192, 119);
    border-radius: 5px;
}
</style>
