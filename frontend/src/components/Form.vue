<template >
    <div class="d-flex align-center justify-center" style="height: 100vh; ">
        <v-sheet style="width: 90%; max-width: 550px;" class="mx-auto pa-10">
          <v-card-title class="d-flex justify-center pb-5">
            <h3 >Novo usuário</h3>
            </v-card-title>
            <v-divider></v-divider>
            <br>
            <v-form fast-fail >
                <v-text-field v-model="user_id" type="text" label="Indentificador único (id)"></v-text-field>
                <v-text-field v-model="name" type="text" label="Nome"></v-text-field>
                <v-text-field v-model="email" type="email" label="Email"></v-text-field>

                <div class="d-flex justify-space-between">
                <v-btn 
                    :disabled="loading"
                    :loading="loading" 
                    type="submit" 
                    block
                    size="x-large"
                    class="mt-2"
                    color="indigo-darken-3"
                    variant="flat" 
                    @click.prevent="addUser"
                >
                    Cadastrar
                </v-btn>

                </div>
            </v-form>
            
        </v-sheet>
    </div>
</template>

<script>
    import api from '../services/http'
    import {router} from "../router";
    import { useAuth } from '../stores/auth'

    export default {
        data() {
                return {
                    loading: false,
                    user_id: '',
                    name: '',
                    email: '',
                    dialog: false
                };
        },
        methods: {
            async addUser() {
                const auth = useAuth();
                if (this.user_id === '' && this.name.trim() === '' && this.email.trim() === '') {
                    return;
                }
                this.loading = true
                
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
                            if(res.status === 201){
                                alert("Usuário criado com sucesso!")
                            }else {
                                console.log(res.data)
                                alert("Usuário editado com sucesso!")
                            }
                        })
                    this.loading = false

                }catch(error){
                    this.loading = false
                    alert(`[ERROR] - ${error.response.data.error.message.split(" ")[1]} já cadastrado`)
                    console.log(error);
                }
            },
        },
    }
</script>