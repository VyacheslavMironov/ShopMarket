<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Shop</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li 
                        class="nav-item"
                        v-for="menu_element in menu"
                        v-bind:key="menu_element"
                    >
                        <router-link
                            v-if="menu_element.title != 'Войти'"
                            v-bind:to="menu_element.link"
                            class="nav-link active" 
                        >{{ menu_element.title }}</router-link>
                    </li>
                    <li
                        v-if="auth"
                        class="nav-item">
                        <ButtonComponent
                            button_type="Modal"
                            v-bind:text="Войти"
                            position="right"
                            get_id="exampleModal"
                        />
                    </li>
                    <li
                        v-else
                        class="nav-item"
                    >
                        <ButtonComponent
                            v-on:click="logout"
                            button_type="Button"
                            v-bind:text="Выйти"
                            position="right"
                            get_id=""
                        />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import axios from 'axios'
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
    data() {
        return {
            menu: [
                {title: "Главная", link: "/"},
                {title: "Категории", link: "/catalog"},
                {title: "Корзина", link: "/cart"},
                {title: "Войти", link: "#"}
            ],
            auth: localStorage.getItem('tocken'),
            authUserId: localStorage.getItem('user_id')
        }
    },
    components: {
        ButtonComponent
    },
    methods:
    {
        logout: function()
        {
            axios.get(`http://127.0.0.1:8000/api/user/logout/${this.authUserId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length'
                }
            })
            .then(function(response){
                if (response.data)
                {
                    localStorage.removeItem("tocken")
                    localStorage.removeItem("user_id")
                    alert('Вы вышли из учётной записи!')
                }
            })
            .catch(function(error){
                console.log(error)
            })
        }
    }
}
</script>