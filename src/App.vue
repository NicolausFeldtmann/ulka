<template>
  <Header></Header>
  <LandingPage></LandingPage>
  <Footer></Footer>
</template>

<script>
import LandingPage from './components/LandingPage.vue';
import Footer from './shared/Footer.vue';
import Header from './shared/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    LandingPage,
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
</style>
