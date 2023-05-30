<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-8 mx-auto">
                <h4>Ваши товары:</h4>
                <div class="mt-5">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Наименование товара</th>
                            <th scope="col">Описание товара</th>
                            <th scope="col">Цена</th>
                            <th scope="col">Действие</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="i in sourceList"
                                v-bind:key="i"
                            >
                                <th scope="row">1</th>
                                <td>{{ i.Name }}</td>
                                <td>{{ i.Description }}</td>
                                <td>{{ i.Price }}</td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                    >Удалить</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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