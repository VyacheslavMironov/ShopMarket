<template>
    <div class="container">
        <div class="row">
            <h3>Добавить товар</h3>
        </div>
         <div class="cpl-6 mx-auto mt-3">
            <form>
                <div class="mb-3">
                    <label class="form-label">Наименование товара</label>
                    <input type="text" class="form-control" v-model="title">
                </div>
                <div class="mb-3">
                    <label class="form-label">Описание товара</label>
                    <textarea v-model="description" cols="30" rows="10" class="form-control"></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Цена товара</label>
                     <input type="text" v-model="price" class="form-control">
                </div>
                <button type="button" class="btn btn-primary">Отправить</button>
            </form>
         </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            title: null,
            description: null,
            price: null
        }
    }
}
</script>