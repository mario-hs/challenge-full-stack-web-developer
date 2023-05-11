<template>
  <div>
    <BarMobile v-if="mobile" />
    <BarWeb v-else />
   <router-view>
    </router-view>
    <!-- <Form v-if="add"></Form>
    <Card v-else></Card> -->
  </div>
</template>

<script>
  import BarMobile from "../components/BarMobile.vue"
  import BarWeb from "../components/BarWeb.vue"
  import Form from "../components/Form.vue"
  import Card from "../components/Card.vue"
 
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
