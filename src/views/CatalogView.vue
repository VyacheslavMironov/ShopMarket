<template>
    <div class="">
        <div class="col-6 mx-auto p-3 mt-3 bg-light card">
            <form>
                <label for="exampleInputSearch" class="form-label d-block">Найти:</label>
                <!-- Иконка прочищения -->
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" v-bind:class="this.search.length > 0 ? 'd-block close_input_button bi bi-x-circle-fill' : 'd-none close_input_button bi bi-x-circle-fill'" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
                <!-- Конец -->
                <div class="mb-3 input-group">
                    <input type="text" v-model="search" class="form-control" id="exampleInputSearch" aria-describedby="button-addon2">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Кнопка</button>
                </div>
            </form>
        </div>
        <div class="container mt-3">
            <h3>Товары:</h3>
        </div>
        <div class="container">
            <div class="row">
                <div
                    v-for="i in this.list"
                    v-bind:key="i"
                    class="col-4 mt-5"
                >
                    <div class="card p-3">
                    <div class="card-header">{{ i.Name }}</div>
                    <div class="card-body">{{ i.Description }}</div>
                    <div class="card-footer">{{ i.Price }}</div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            search: "",
            list: [
                {
                    Name: "Огурец", 
                    Description: "Свежий, только что с грядки!",
                    Price: 25.50
                },
                {
                    Name: "Маршрутка", 
                    Description: "Везёт не овощи, а людей!",
                    Price: 90.00
                },
                {
                    Name: "Салфетки", 
                    Description: "Влажные, чистые!",
                    Price: 25.00
                },
                {
                    Name: "Ручка", 
                    Description: "Гелевая!",
                    Price: 100.00
                }
            ]
        }
    },
    components: {
        
    }
    }
</script>

<style>
    .close_input_button {
        position: absolute;
        left: 81%;
        width: auto;
        top: 50%;
        z-index: 999;
        cursor: pointer;
    }
</style>