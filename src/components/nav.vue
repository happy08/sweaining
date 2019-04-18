<template>
    <nav>
      <router-link to="/"><img src="../assets/images/home.png"></router-link>
      <router-link to="/news"> 最新消息 </router-link>
      <router-link to="/stores"> 果凍美人館 </router-link>
      <router-link to="/events"> 行銷活動 </router-link>
      <router-link to="/sweaining"> Sweaining<br/>美學院 </router-link>
      <router-link to="/products"> 產品介紹 </router-link>
    </nav> 
</template>

<script>
export default {
  name:"navLink",
  // props:[
  //     "title"
  // ]
}
</script>

<style scoped>

</style>
