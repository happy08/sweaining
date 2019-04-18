<template>
  <div id="app">
    <header>
      <div class="main header">
        <router-link to="/home" class="logo"><img src="./assets/images/logo.png"></router-link>
        <div class="top-icon">
            <a target="_blank" href="https://www.instagram.com/explore/tags/%E6%80%9D%E8%96%87%E8%9C%9C/"><img src="./assets/images/line1.png"></a>
            <a target="_blank" href="/home"><img src="./assets/images/line.png"></a>
            <a target="_blank" href="https://www.youtube.com/user/sweaining1/featured"><img src="./assets/images/youtobe.png"></a>
            <a target="_blank" href="https://www.facebook.com/sweaining/posts/2265850676780096"><img src="./assets/images/fb.png"></a>
        </div>
      </div>
    </header> 

    <router-view/>

    <div class="main">
      <footer class="text-center">
       <h4> 思薇蜜品牌整合行銷</h4>
       <h5> Copyright ©2019 Sweaining. All Rights Reserved.</h5>
       <div class="toTop" v-show="goTopShow"><img @click="goTop" src="./assets/images/top.png" width="40px"></div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return{
        scrollTop: '',
        goTopShow:false,
      }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods:{
    handleScroll () {
      
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(this.scrollTop>100){
          this.goTopShow=true
        }else{
          this.goTopShow=false
        }
    },
    goTop(){
         window.scrollTo(0,0);
    },
    
      
  }
}
</script>

<style scoped>

</style>
