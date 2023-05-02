<template>
    <div>
        <button
            v-if="button_type == 'Button'"
            type="button"
            v-bind:class="'btn btn-primary'  + position"
        >{{ text }}</button>
        <a
            v-if="button_type == 'Link'"
            v-bind:class="'btn btn-primary ' + position"
            href="https:ya.ru/"
        >{{ text }}</a>
        <button 
            v-if="button_type == 'Modal'"
            type="button" 
            class="btn btn-primary" 
            data-bs-toggle="modal" 
            v-bind:data-bs-target="'#' + get_id"
        >{{ text }}</button>
    </div>
</template>

<script>
    export default {
        props: {
            button_type: String,
            text: String,
            position: String,
            get_id: String
        }
    }
</script>

<style>
.right{
    position: relative;
    left: 60em;
}
</style>