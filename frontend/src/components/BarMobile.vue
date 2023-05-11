<template>
  
  <v-bottom-navigation
  mode="shift"
  rail
  >
    <v-btn :to="'/home'">
      <v-icon>mdi-plus</v-icon>

      <span>Add</span>
    </v-btn>

    <v-btn :to="'/home/list'">
      <v-icon>mdi-account-multiple</v-icon>

      <span>Listar</span>
    </v-btn>

    <v-btn>
      <v-icon>mdi-logout</v-icon>

      <span>Sair</span>
    </v-btn>
  </v-bottom-navigation>

    
</template>

<script>
  
</script>