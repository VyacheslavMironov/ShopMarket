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
                        <ButtonComponent
                            v-else
                            button_type="Modal"
                            v-bind:text="menu_element.title"
                            position="right"
                            get_id="exampleModal"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
    data() {
        return {
            menu: [
                {title: "Главная", link: "/"},
                {title: "Категории", link: "/catalog"},
                {title: "Корзина", link: "/cart"},
                {title: "Войти", link: "#"}
            ]
        }
    },
    components: {
        ButtonComponent
    }
}
</script>