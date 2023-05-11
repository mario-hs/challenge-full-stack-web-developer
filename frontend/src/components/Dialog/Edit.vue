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
        <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-sheet style="width: 45vw; max-width: 550px; min-width: 245px" class="mx-auto py-10 px-5 pa-sm-10">
          <v-card-title class="d-flex justify-center pb-5">
            <h3 >Cadastro</h3>
          </v-card-title>
          <v-divider></v-divider>
          <br>
          <v-form fast-fail>
            <v-text-field v-model="user.user_id" type="text" label="Indentificador único (id)"></v-text-field>
            <v-text-field v-model="user.name" type="text" label="Nome"></v-text-field>
            <v-text-field v-model="user.email" type="email" label="Email"></v-text-field>

            <div class="d-flex justify-space-between">
              <v-btn type="submit" 
                style="width: 35%;"
                :disabled="loading"
                :loading="loading"
                class="text-none mb-4"
                color="indigo-darken-3"
                size="x-large"
                @click.prevent="handlePut(user)"
                variant="flat"  >
                Salvar
              </v-btn>
              <v-btn type="submit"
                style="width: 35%;" 
                class="text-none"
                color="grey-lighten-3"
                size="x-large"
                variant="flat" @click.prevent="closeModal" >
                Cancelar
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
    emit: ['updateUser'],
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
            _id: props.user._id,
            user_id: props.user.user_id,
            name: props.user.name,
            email: props.user.email,
          }
      };
    },
    methods: {
      async handlePut(user) {
        const auth = useAuth().token
        this.loading = true
        try{
            await api
            .put(`/user/${user._id}`,  {
                headers: {
                    authorization: "Bearer " + auth,
                },
                body: 
                  {user_id: user.user_id, name: user.name, email: user.email}
            })
            .then(res => {
                if(res.status === 200){
                  this.loading = false
                  this.dialog= false
                  alert("Usuário editado com sucesso!")
                  this.$emit('updateUser', user)
                }
                this.loading = false
                this.dialog= false
            })
        }catch(error){
          this.loading = false
          alert(`[ERROR] - Verifique se o ${error.response.data.error.message.split(" ")[1]} já não existe!`)
          console.log(error);
        }
      },
      closeModal(){
        return this.dialog =false;
      }
    },
  }
</script>