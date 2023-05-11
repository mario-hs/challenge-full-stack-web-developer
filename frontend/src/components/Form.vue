<template >
    <div class="d-flex align-center justify-center" style="height: 100vh; ">
        <v-sheet style="width: 90%; max-width: 550px;" class="mx-auto pa-10">
          <v-card-title class="d-flex justify-center pb-5">
            <h3 >Cadastro</h3>
            </v-card-title>
            <v-divider></v-divider>
            <br>
            <v-form fast-fail >
                <v-text-field v-model="user_id" type="text" label="Indentificador único (id)"></v-text-field>
                <v-text-field v-model="name" type="text" label="Nome"></v-text-field>
                <v-text-field v-model="email" type="email" label="Email"></v-text-field>

                <div class="d-flex justify-space-between">
                <v-btn type="submit" color="primary"  class="mt-2"  v-on:click.prevent="addUser">Cadastrar</v-btn>
                <v-btn type="submit" variant="outlined" class="mt-2"  >Cancelar</v-btn>

                </div>
            </v-form>
            
        </v-sheet>
    </div>
</template>

<script>
    import api from '../services/http'
    import router from "../router";
    import { useAuth } from '../stores/auth'

    export default {
        data() {
                return {
                    user_id: 3,
                    name: 'Jorge',
                    email: 'jorge@gmail.com',
                    dialog: false
                };
        },
        methods: {
            async addUser() {
                const auth = useAuth();
                if (this.user_id === '' && this.name.trim() === '' && this.email.trim() === '') {
                    return;
                }
                
                try{
                    await api
                        .post('/user', 
                            {
                                headers: {
                                    authorization: "Bearer " + auth.token,
                                },
                                body: 
                                    {user_id: this.user_id, name: this.name, email: this.email}
                                ,
                            }
                        )
                        .then(res => {
                            
                            if(res.status === 200){
                                this.dialog = true;
                                alert("Usuário editado com sucesso!")
                            }
                        })

                    //   router.push({ name: 'home' })
                    //   router.go(3)
                }catch(error){
                    console.log(error);
                }
            },
        },
    }
</script>