<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Вход</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <section
                    v-if="id == 'login'"
                >
                    <div 
                        v-bind:class=" error == false ? 'alert alert-danger d-none' : 'alert alert-danger d-block' " 
                        role="alert"
                    >
                        Введите данные!
                    </div>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Введите Email</label>
                        <input 
                            type="email" 
                            class="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            v-model="signInEmail"
                        >
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Введите пароль</label>
                        <input 
                            type="password" 
                            class="form-control" 
                            id="exampleInputPassword1"
                            v-model="signInPassword"
                        >
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <router-link to="/registration">Зарегистрироваться</router-link>
                        </div>
                        <div class="col-4">
                            <ButtonComponent
                                button_type="Button"
                                text="Вход"
                                position
                                v-on:click="loginSend"
                            />
                        </div>
                    </div>
                    
                </form>
                </section>
                <section
                    v-if="id == 'registration'"
                >

                </section>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
    data(){
        return {
            signInEmail: "",
            signInPassword: "",
            error: false,
            user: [],
            authUser: null
        }
    },
    props: {
        id: String
    },
    components: {
        ButtonComponent
    },
    methods: {
        loginSend: function()
        {
            axios.get(`http://127.0.0.1:8000/api/user/auth/email/${this.signInEmail}/password/${this.signInPassword}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length'
                    }
                })
                .then(function(response){
                    if (response.data.bearerTocken.length > 0)
                    {
                        localStorage.setItem("tocken", response.data.bearerTocken)
                        localStorage.setItem("user_id", response.data["0"].id)
                        alert('Вы авторизовались!')
                    }
                })
                .catch(function(error){
                    console.log(error)
                })
        }
    }
}
</script>