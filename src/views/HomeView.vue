<template>
  <div class="home">
    <div class="row">
      <div
        v-for="i in this.list"
        v-bind:key="i"
        class="card p-3 col-4 mt-5"
      >
        <div class="card-header">{{ i.Name }}</div>
        <div class="card-body">{{ i.Description }}</div>
        <div class="card-footer">{{ i.Price }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
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
