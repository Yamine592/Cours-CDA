<template>
  <div class="wwc1">
  <div class="container">
    <form @submit.prevent="register">
        <label for="username">Nom d'utilisateur</label>
        <input v-model="username" type="text" id="username" required />
        <label for="password">Mot de passe</label>
        <input
          v-model="password"
          type="hideclick ? 'text : 'password'"
          required
        />
        <img
          @click="hideEye"
          class="eye"
          src="../img/eye.png"
          alt=""
        />
        <label for="confirMdp">confirmer le mot de passe</label>
        <img
          @click="eyeclick"
          class="eye"
          src="../img/eye.png"
          alt=""
        />
        <input v-model="username" type="hideclickInsc" id="username" required />
        <label for="email">Email</label>
        <input v-model="email" type="text" class="mail" required />

        <label for="bday" class="birthday">Veuillez saisir votre date de naissance</label>
        <input type="date" name ="bday"/>
        <div>
          <button id="btn" @click="fetchData" type="submit">S'inscrire</button>
        </div>
    </form>
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";


const router = useRouter();
const username = ref("");
const password = ref("");
const hideclick = ref(false);
const hideclickInsc = ref(false);


const eyeclick = () => {
  hideclick.value = !hideclick.value;
  return;
};

const hideEye = () => {
  hideclickInsc.value = !hideclickInsc.value;
};



</script>

<style>

.eye {
  
 width: 15px;
 display: flex;
 
  
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 81vh;
}

label {
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
  color: white;
}

form {
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  

}
.birthday{
  margin: 10px 5px;
  padding: 10px;

}

/* #btn {
  cursor: pointer;
  margin: 30px;
  border-radius: 10px;
  font-size: medium;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: 10px;
} */
#btn {
  padding: 10px 20px;
  margin: 5px;
  color: white;
  background: linear-gradient(135deg, #0d315a, #1e5799);
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 25px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

#btn:hover {
  background: linear-gradient(135deg, #1e5799, #2980b9);
  transform: translateY(-2px);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
}

#btn:active {
  transform: translateY(0);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.wwc1 {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(/src/img/log\ in\ or\ sign\ up.jpeg);
  background-size: cover;
  background-position: center;
  opacity: 0.9;
  z-index: 4;
} 

</style>
