<template>
  
  <v-bottom-navigation
  rail
  >
    <!-- <v-btn :to="'/home'">
      <v-icon>mdi-home</v-icon>

      <span>Home</span>
    </v-btn> -->
    <v-btn :to="'/home/add'">
      <v-icon>mdi-plus</v-icon>

      <span>Add</span>
    </v-btn>

    <v-btn :to="'/home/list'">
      <v-icon>mdi-account-multiple</v-icon>

      <span>Listar</span>
    </v-btn>

    <v-btn @click="handleLogout">
      <v-icon>mdi-logout</v-icon>

      <span>Sair</span>
    </v-btn>
  </v-bottom-navigation>

    
</template>

<script>
  import { useAuth } from '../../stores/auth'
  import {router} from "../../router";
  export default {
    methods: {
      handleLogout(){
        const auth = useAuth();
        auth.logout();
        router.go({ name: 'login' })
      }
    }
  }
</script>