<template>
  <div>
    <BarMobile v-if="mobile" />
    <BarWeb v-else />
    <router-view></router-view>
     <div class="d-flex align-center justify-center" style="height: 100vh; ">
        <v-sheet style="width: 90%; max-width: 550px;" class="mx-auto pa-10">
          <v-btn type="submit" 
            block
            class="text-none mb-4 mt-2"
            color="indigo-darken-3"
            size="x-large"
            :to="'/home/add'"
            variant="flat"  >
            Cadastrar novo usuário
          </v-btn>
          <v-btn type="submit" 
            block
            class="text-none mb-4 mt-2"
            color="indigo-darken-3"
            size="x-large"
            :to="'/home/list'"
            variant="flat"  >
            Listar usuários
          </v-btn>
            
        </v-sheet>
    </div>
    
  </div>
</template>

<script>
  import BarMobile from "../components/NavBar/BarMobile.vue"
  import BarWeb from "../components/NavBar/BarWeb.vue"
  import Form from "../components/Form.vue"
  import Card from "../components/List.vue"
 
  export default {
    components: {
      BarMobile,
      BarWeb,
      Form,
      Card
    },

   computed: {
      mobile() {
        return this.$vuetify.display.width < 700 ? true : false
      },
    },
  }

</script>
