<template>
  <!-- <router-link to="/about">About</router-link> -->
  <HeaderComponent />
  <ModalComponent id="login" />
  <router-view/>
</template>

<script>
  import HeaderComponent from "@/components/HeaderComponent.vue" 
  import ModalComponent from "@/components/ModalComponent.vue" 
  
  export default {
    components: {
      HeaderComponent,
      ModalComponent
    }
  }
</script>
