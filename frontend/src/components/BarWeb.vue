<template>
  <v-navigation-drawer
    expand-on-hover
    rail
    permanent
  >
    <v-list class="d-flex">
        <v-list-item class="pr-0" style="height:139px"
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
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
      <v-list-item prepend-icon="mdi-plus" title="Adicionar usuário" value="add_user" :to="'/home'"></v-list-item>
      <v-list-item prepend-icon="mdi-account-multiple" title="Lista de usuário" value="list_user" :to="'/home/list'"></v-list-item>
      <v-list-item prepend-icon="mdi-logout" title="Sair" value="logout"></v-list-item>
    </v-list>
   
  </v-navigation-drawer>

</template>

<script>
  import { useAuth } from '../stores/auth'
    
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
    }
  }
</script>