<template>
  <div class="wwc">
  <div class="formulaire">
    <div class="titre">
      <h2>CONNEXION</h2>
    </div>
    <div class="formcontainer">
      <form @submit.prevent="handleLogin">
        <label for="username">Nom d utilisateur :</label>
        <input type="text" id="username" v-model="username" />
        <div class="formulaires">
          <div class="eyeForm">
            <div>
              <label for="password">Mot de passe:</label>
              <input
                type="text"
                id="password"
                v-model="password"
                :type="eyeclick ? 'text' : 'password'"
                required
              />
            </div>
            <div>
              <img class="eye" src="../../src/img/eye.png" alt="" />
            </div>
          </div>
        </div>
        <button id="btn" @click="fetchData" type="submit">Se connecter</button>
        <div>
        <button id="btnMember" @click="fetchData" type="submit">Pas encore membre?</button>
        </div>
      </form>
    </div>
    </div>
  </div>
  
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = "";
const password = "";
const errorMsg = ref("");
const hideclick = ref(false);
const hideclicklog = ref(false);
const apiError = ref(false);
const apiUrl = process.env.VUE_APP_API_URL;

const eyeclick = () => {
  hideclick.value = !hideclick.value;
  return;
};

const handleLogin = async () => {
  try {
    const response = await fetch(`${apiUrl}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      await store.dispatch("login", data.token); // dispatch permet d'appeler action dans le store
      router.push("/WelcomeUser");
    } else {
      apiError.value = false;
      username.value = "";
      password.value = "";
    }
  } catch (err) {
    console.log(err);
  }
};
</script>

<style scoped>
.formulaire {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 71vh;
}

.wwc{
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(/src/img/fond-1.jpg);
  background-size: cover;
  background-position: center;
  opacity: 0.8;
  z-index: 1;
}

.formulaires {
  display: flex;
  flex-direction: row;
  align-items: end;
}

label {
  display: flex;
  margin-bottom: 20px;

  
}
input {
  width: 200px;
  padding: 2px;
  border: 1px solid #ff0000;
  margin-bottom: 10px;
  
}
.eye {
  width: 15px;
  height: 15px;
  filter: invert(1);
  display: flex;
  
}

.formcontainer {
  display: flex;
  align-items: center;
  padding: 50px;
  justify-content: center;
  background-color: var(--dark);
  border-radius: 20px;
  color: white;
  box-shadow: 5px 5px 5px rgba(150, 148, 148, 0.678);
  background:linear-gradient(to right,grey,var(--dark))
}

/* #btn{
  padding: 5px 10px;
  margin: 5px;
  color: white;
  background-color: #0d315a;
  font-weight: bold;
  cursor: pointer;
  border-radius: 20px;
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
  background: linear-gradient(125deg, #1e5799, #2980b9);
  transform: translateY(-2px);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
}

#btn:active {
  transform: translateY(0.5);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.eyeForm {
  display:flex;
  flex-direction: row;
  align-items: center;
  flex-direction: row;
  
}

#btnMember {
  padding: 5px ;
  margin: 5px;
  margin-top: 20px;
  color: white;
  background-color: #0d315a;
  font-weight: bold;
  cursor: pointer;
  border-radius: 15px;
  
}

h2{
  padding: 50px 0;
  font-size: 40px;
  color: rgb(140,97,122);
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
</style>
