<template>
    <div class="form-todo form-group">
        <p>
            <input type="text" name="author" id="" class="form-control" placeholder="nome" v-model="name">
        </p>
        <p>
            <textarea name="message" id="" cols="30" rows="10" class="form-control"
                placeholder="Comentário" v-model="message"></textarea>
        </p>
        <button v-on:click="addComment" class="btn btn-primary" type="submit">Comentar</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name: '',
                message: ''
            }
        },
        methods: {
            addComment() {
              console.log(this.message)
              if (this.message.trim() === '') {
                  console.log(this.name)
                    // return;
                }
                // this.$emit('add-todo', {
                //     name: this.name,
                //     message: this.message
                // })

                // this.name = '';
                // this.message = '';
            },
        }
    }
</script>