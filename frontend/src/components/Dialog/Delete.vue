<template >
   <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="none"
          v-bind="props"
        >
     <v-icon>mdi-trash-can</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-sheet style="width: 45vw; max-width: 550px; min-width: 245px" class="mx-auto py-10 px-5 pa-sm-10">
          <v-card-title class="d-flex justify-center pb-5">
            <h3 >Deletar</h3>
          </v-card-title>

          <v-divider></v-divider>

          <br>

          <v-form fast-fail >
            <p class="font-weight-black text-center mb-10">
              Deseja confirmar a exclusão do usuário, {{user.name}}?
            </p>
            
            <p class="font-weight-regular">
              
            </p>

            <div class="d-flex justify-space-between">
              <v-btn type="submit" 
                style="width: 35%;"
                :disabled="loading"
                :loading="loading"
                class="text-none mb-4"
                color="indigo-darken-3"
                size="x-large"
                @click.prevent="handleDelete"
                variant="flat"  >
                Sim
              </v-btn>
              <v-btn type="submit"
                style="width: 35%;" 
                class="text-none"
                color="grey-lighten-3"
                size="x-large"
                variant="flat" @click.prevent="closeModal" >
                Não
              </v-btn>
            </div>
          
          </v-form>
            
        </v-sheet>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>
  import api from '../../services/http'
  import { useAuth } from '../../stores/auth'
 
  export default {
    emit: ['deleteUser'],
    props: {
      user:{
        id: String,
        user_id: String,
        name: String,
        email: String,
      }
    },
    data(props) {
      return {
          loading: false,
          dialog: false,
          user: {
            id: props.user.user_id,
            name: props.user.name,
            email: props.user.email,
          }
      };
    },
    methods: {
      async handleDelete() {
        const auth = useAuth().token
        try{
          this.loading = true
          
          await api
          .delete(`/user/${this.user._id}`,  {
            headers: {
              authorization: "Bearer " + auth,
              },
          })
          .then(res => {
              if(res.status === 200){
                this.loading = false
                this.dialog= false
                alert("Usuário excluido com sucesso!")
                this.$emit('deleteUser', this.user._id)
              }
              this.loading = false
              this.dialog= false
          })
        }catch(error){
          this.loading = false
          this.dialog= false
          alert(`[ERROR] - Não foi possível deletar o usuário, ${this.user.name}!`)
          console.log(error);
        }
      },
      closeModal(){
        return this.dialog =false;
      }
    },
    
  }
</script>