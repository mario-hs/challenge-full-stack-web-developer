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
        <v-sheet style="width: 90%; max-width: 550px;" class="mx-auto pa-10">
          <v-card-title class="d-flex justify-center pb-5">
            <h3 >Deletar</h3>
          </v-card-title>

          <v-divider></v-divider>

          <br>

          <v-form fast-fail >
            <p class="font-weight-black text-center">
              Deseja confirmar a exclusão do usuário?
            </p>
            
            <p class="font-weight-regular">
              {{user.name}}
            </p>

            <v-btn type="submit" 
              :disabled="loading"
              :loading="loading"
              block
              class="text-none mb-4"
              color="indigo-darken-3"
              size="x-large"
              variant="flat" 
              @click.prevent="handleDelete"
               >
              Sim
            </v-btn>
            <v-btn type="submit" block
              class="text-none"
              color="grey-lighten-3"
              size="x-large"
              variant="flat" @click.prevent="closeModal" >
              Não
            </v-btn>
          
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
      handleDelete() {
        const auth = useAuth().token
        try{
          this.loading = true
          
          api
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
          console.log(error);
        }
      },
      closeModal(){
        return this.dialog =false;
      }
    },
    
  }
</script>