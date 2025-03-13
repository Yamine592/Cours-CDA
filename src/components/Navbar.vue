<template>
  <nav class="navbar">
    <h1>SafetyGold</h1>
    <div class="navCenter">
      <li class="home" @click="gotoHome">Accueil</li>
      <li class="signUp" @click="gotoSignup">Les étangs</li>
       
    </div>
    <li class="login" @click="gotoLogin">Connexion</li>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const gotoLogin = () => {
  router.push("/login");
};
const gotoHome = () => {
  router.push("/");
};
const gotoSignup = () => {
  router.push("/les étangs");
};
const gotoInsc = () => {
  router.push("/inscription");
};



</script>

<style>
.navbar {
  position: fixed;
  background-color:rgba(137,137,146,255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 9vh;
  padding: 15px 20px;
  background:linear-gradient(to right, grey, var(--dark));
  z-index: 1000;
  
}


.login {
  justify-content: right;
  border-radius: 20px;
  background-color: rgb(209, 173, 10);
  padding: 10px;
  font-weight: bold;

  cursor: pointer;
  color: rgb(73, 23, 15);
  box-shadow: 2px 2px 2px rgba(255, 255, 255, 0.3);
}

.login:hover{
  color: black;
}

.main,
ul,
li {
  /* padding: 10px;
  margin: 10px; */
  list-style: none;
  color: white;
}

li{
  cursor: pointer;
}

li:hover{
  color: aqua;
}

.navCenter{
  display: flex;
  flex-direction: row;
}

.navCenter li{
  margin: 0 10px;
}
</style>
