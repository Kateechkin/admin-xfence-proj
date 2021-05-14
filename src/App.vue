<template>
  <div class="wrapperapp" id="wrapperapp" v-if="$route.meta.showgrid">
    <Header v-if="$route.meta.showFeedback" />
    <Nav v-if="$route.meta.showFeedback" />
    <router-view />
  </div>
  <Login v-if="!$route.meta.showFeedback" />
</template>

<script>
import Nav from "@/components/nav.vue";
import Header from "@/components/header.vue";
import Login from "./views/Login.vue";
export default {
  name: "App",

  components: {
    Nav,
    Header,
    Login,
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
