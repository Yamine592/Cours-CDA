<script setup>
import { useRouter, useRoute, RouterLink } from 'vue-router';
import Navbar from './components/Navbar.vue';
import FooterComponent from './components/FooterComponent.vue';


const router = useRouter();
const route = useRoute();




</script>

<template>
  <div class="appContainer">
    <Navbar/>
    <router-view/>
    <FooterComponent/>

  </div>
</template>

<style>

:root{
  --dark: rgb(41, 29, 27);
  --light: rgb(207, 205, 205);
}
*, html{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.appContainer {
  position: relative;
  min-height: 100vh;
}

</style>
