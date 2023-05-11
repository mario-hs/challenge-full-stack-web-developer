<template>
  <v-navigation-drawer
    expand-on-hover
    rail
    permanent
  >
    <v-list class="d-flex">
        <v-list-item class="pr-0" style="height:139px"
          prepend-avatar="https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        >
        </v-list-item>
        <v-list class="align-self-center">
          <v-list-item class="pa-0" style="min-height: 35px">
            Bem vindo, {{user.name}}!
          </v-list-item>
          <v-list-item class="pa-0" style="min-height: 35px">
            {{user.email}}
          </v-list-item>
        </v-list>
    </v-list>
    <v-divider></v-divider>

    <v-list density="compact" nav>
      <!-- <v-list-item prepend-icon="mdi-home" title="Página Inicial" value="home" :to="'/home'"></v-list-item> -->
      <v-list-item prepend-icon="mdi-plus" title="Adicionar usuário" value="add_user" :to="'/home/add'"></v-list-item>
      <v-list-item prepend-icon="mdi-account-multiple" title="Lista de usuário" value="list_user" :to="'/home/list'"></v-list-item>
      <v-list-item prepend-icon="mdi-logout" title="Sair" value="logout" @click="handleLogout"></v-list-item>
    </v-list>
   
  </v-navigation-drawer>

</template>

<script>
  import { useAuth } from '../../stores/auth'
  import {router} from "../../router";
    
  export default {
    data(){
      const user = {
          name: '',
          email:''
        }
      return {user}
    },
    mounted() {
      const auth = useAuth();
      this.user = {
        name: auth.user.name,
        email: auth.user.email
      }
    },
    methods: {
      handleLogout(){
        const auth = useAuth();
        auth.logout();
        router.go({ name: 'login' })

      }
    }
  }
</script>