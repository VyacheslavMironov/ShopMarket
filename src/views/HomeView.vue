<template>
  <div class="container">
    <div class="row">
      <div
        v-for="i in this.list"
        v-bind:key="i"
        class="col-4 mt-5"
      >
        <div class="card p-3">
          <div class="card-header">{{ i.name }}</div>
          <div class="card-body">{{ i.description }}</div>
          <div class="card-footer">
            {{ i.price }}
            <hr>
            <button
              type="button"
              class="btn btn-primary"
            >В корзину</button>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      list: Array
    }
  },
  methods: {
    getServer: function()
    {
      var self = this
      axios.get('http://127.0.0.1:8000/api/shop/all', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length'
          }
      })
        .then(function(request) {
          self.list = request.data
        })
        .catch(function(error) {
          if (error) {
            alert("Ошибка загрузки данных!")
          }
        })
    }
  },
  mounted() {
    this.getServer()
  }
}
</script>
