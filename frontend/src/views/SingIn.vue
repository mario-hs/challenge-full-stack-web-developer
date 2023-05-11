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

                <v-btn type="submit" 
                  block
                  :disabled="loading"
                  :loading="loading"
                  class="text-none mb-4 mt-2"
                  color="indigo-darken-3"
                  size="x-large"
                  @click.prevent="login"
                  variant="flat"  >
                  Sign in
                </v-btn>
            </v-form>
            <div class="mt-2">
                <p class="text-body-2">Ainda não tem conta? <a href="#">Sign Up</a></p>
            </div>
        </v-sheet>
    </div>
</template>

<script>
  import api from '../services/http'
  import {router} from "../router";
  import { useAuth } from '../stores/auth'

  export default {
      data() {
          return {
            loading: false,
            email: 'admin@admin.com',
            password: '123456',
          };
      },
      methods: {
          async login() {
            this.loading= true;
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
              this.loading= false;
              router.go(2)
            }catch(error){
              this.loading = false
              this.dialog= false
              alert(`[ERROR] - Não foi realizar o login, tente novamente!`)
              console.log(error);
            }
          },
      },
  }
</script>