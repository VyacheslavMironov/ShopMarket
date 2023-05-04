<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-8 mx-auto">
                <h4>Ваши товары:</h4>
                <ul class="list-group">
                    <li
                        class="list-group-item d-flex"
                        v-for="i in sourceList"
                        v-bind:key="i"
                    >
                        <form>
                            <input type="checkbox" class="form-check-input">
                        </form>
                         <div class="col-1"></div> {{ i.Name }}
                         <div class="col-1"></div> Цена: {{ i.Price }}
                    </li>
                </ul>
                <hr>
                 <div class="row">
                    <div class="col-10">
                        <b>2200 р</b>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-primary w-100">Оплатить</button>
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
                sourceList: [
                    {
                        Name: "Огурец", 
                        Description: "Свежий, только что с грядки!",
                        Price: 25.50
                    },
                    {
                        Name: "Маршрутка", 
                        Description: "Везёт не овощи, а людей!",
                        Price: 90.00
                    }
                ]
            }
        }
    }
</script> 