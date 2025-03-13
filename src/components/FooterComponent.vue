<template>
 <footer>
    <div class="footerContainer">
    <div class="i">
      <p>&copy; 2025 Mon Site Web. Tous droits réservés.</p>
   </div>
      <ul>
        <li><a href="/about">À propos</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy">Politique de confidentialité</a></li>
      </ul>
      <p class="rgpd"@click="gotoLesetangs">
        <a href="/privacy">
         En utilisant ce site, vous acceptez notre politique de confidentialité et l'utilisation de vos données personnelles selon le RGPD.</a>
      </p>
    </div>
    
 </footer>

</template>
<script setup>

const gotoLesetangs= () => {
  router.push("/les étangs");
};

</script>

<style scoped>

.footerContainer {
 
 bottom: 0;
 left: 0;
 width: 100%;
 justify-content: center;
 align-items: flex-start;
 display: flex;
}

a {
   display: flex;
   color: white;
   justify-content: space-between;
}
footer {
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
}
.i {
   background-color: red;
   display: flex;
}

</style>
