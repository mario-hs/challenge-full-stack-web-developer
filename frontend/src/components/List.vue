<template >
    <div class="d-flex align-center justify-center" style="height: 100vh; ">
        <v-table height="70vh" style="width: 90%; max-width: 550px;" class="overflow-auto">
            <thead>
            <tr>
                <th class="text-left">
                Id
                </th>
                <th class="text-left">
                Name
                </th>
                <th class="text-left">
                Email
                </th>
                <th class="text-left">
                Opcões
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="user in users"
                :key="user._id"
            >
                <td>{{ user.user_id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>
                     <div class="right d-flex align-center justify-space-between">
                        <DialogEdit class="mt-4 mb-3" :user="user" @updateUser="handleUpdate"/>
                        <DialogDelete class="mt-4 mb-3" :user="user"  @deleteUser="handleDelete" />
                    </div>
                </td>
            </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import { useAuth } from '../stores/auth'
    import api from '../services/http'
    import DialogEdit from "./Dialog/Edit.vue"
    import DialogDelete from "./Dialog/Delete.vue"
  
   
    export default {
        data(){
            return {
                users: []
            }
        },
        components: {
            DialogEdit, 
            DialogDelete
        },
        mounted() {
            const getUser = () => {
                const auth = useAuth().token
                try{
                    api
                    .get('/user',  {
                    headers: {
                        Authorization: "Bearer " + auth,
                    },
                    })
                    .then(res => {
                        if(res.status === 200){
                            this.users = res.data.users
                            
                        }
                    })
                }catch(error){
                console.log(error);
                }
            }
            return getUser()
        },
        methods: {
            test(){
                console.log(user._id)
            },
            handleDelete(id) {
                console.log(id)
                this.users = this.users.filter((user) => user._id !== id);
                console.log(this.users)
                return 
            },

            handleUpdate(newUser) {
                const user = this.users.filter((user) => user._id === newUser._id)[0];
                Object.assign(user, newUser)
                return 
            }
        }
  }
</script>