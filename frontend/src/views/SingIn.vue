<template >
    <div class="d-flex align-center justify-center" style="height: 100vh">
        <v-sheet style="width: 90%; max-width: 550px;" class="mx-auto pa-10">
          <v-card-title class="d-flex justify-center pb-5">
            <h3 >Login</h3>
            </v-card-title>
            <v-divider></v-divider>
            <br>
            <v-form fast-fail @submit.prevent="login">
                <v-text-field v-model="email" type="email" label="Email"></v-text-field>

                <v-text-field v-model="password" type="password" label="Senha"></v-text-field>
                <a href="#" class="text-body-2 font-weight-regular">Esqueceu sua senha?</a>

                <v-btn type="submit" color="primary" block class="mt-2" v-on:click="login" >Sign in</v-btn>
            </v-form>
            <div class="mt-2">
                <p class="text-body-2">Ainda não tem conta? <a href="#">Sign Up</a></p>
            </div>
        </v-sheet>
    </div>
</template>

<script>
  import api from '../services/http'
  import { useAuth } from '../stores/auth'
  import router from "../router";

  export default {
      data() {
          return {
              email: 'admin@admin.com',
              password: '123456',
          };
      },
      methods: {
          async login() {
            const auth = useAuth();
            try{
              await api
                .post('/auth', {email: this.email, password: this.password})
                .then(res => {
                  if(res.status === 200){
                    auth.setToken(res.data.token)
                    auth.setUser(res.data.user)
                  }
                })
              router.push({ name: 'home' })
              router.go(3)
            }catch(error){
              console.log(error);
            }
          },
      },
  }
</script>