<template>
    <div class="row">
        <form>
            <div class="mb-3">
                <label class="form-label">Введите имя</label>
                <input 
                    type="text" 
                    class="form-control"
                    v-model="first_name"
                >
            </div>
            <div class="mb-3">
                <label class="form-label">Введите фамилию</label>
                <input 
                    type="text" 
                    class="form-control"
                    v-model="last_name"
                >
            </div>
            <div class="mb-3">
                <label class="form-label">Введите E-mail</label>
                <input 
                    type="email" 
                    class="form-control"
                    v-model="email"
                >
            </div>
            <div class="mb-3">
                <label class="form-label">Введите номер телефона</label>
                <input
                    type="text" 
                    class="form-control"
                    v-model="phone"
                >
            </div>
            <div class="mb-3">
                <label class="form-label">Введите роль</label>
                <select 
                    class="form-select" 
                    aria-label="Default select example"
                    v-model="role"
                >
                    <option value="Продавец">Продавец</option>
                    <option value="Покупатель">Покупатель</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Введите пароль</label>
                <input
                    type="password"
                    class="form-control"
                    v-model="password"
                >
            </div>
            <button 
                type="submit" 
                class="btn btn-primary"
                v-on:click="add"
            >Отправить</button>
        </form>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                role: '',
                password: '',
            }
        },
        methods: {
            add: function()
            {
                // проверить что данные записаны в модел данных
            }
        }
    }
</script>