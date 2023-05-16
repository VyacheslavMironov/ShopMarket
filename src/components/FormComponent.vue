<template>
    <div class="row">
        <form>
            <div class="mb-3">
                <label class="form-label">Введите имя</label>
                <input type="text" class="form-control" >
            </div>
            <div class="mb-3">
                <label class="form-label">Введите фамилию</label>
                <input type="text" class="form-control" >
            </div>
            <div class="mb-3">
                <label class="form-label">Введите E-mail</label>
                <input type="email" class="form-control" >
            </div>
            <div class="mb-3">
                <label class="form-label">Введите номер телефона</label>
                <input type="text" class="form-control" >
            </div>
            <div class="mb-3">
                <label class="form-label">Введите роль</label>
                <select class="form-select" aria-label="Default select example">
                    <option value="Продавец">Продавец</option>
                    <option value="Покупатель">Покупатель</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Введите пароль</label>
                <input type="password" class="form-control" >
            </div>
            <button type="submit" class="btn btn-primary">Отправить</button>
        </form>
    </div>
</template>