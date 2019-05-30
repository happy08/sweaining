<template>
  <div id="app">
    <header>
      <div class="main header">
        <router-link to="/home" class="logo"><img src="./assets/images/logo.png"></router-link>
        <div class="top-icon">
            <a target="_blank" :href="seo.IG"><img src="./assets/images/line1.png"></a>
            <a target="_blank" :href="seo.line"><img src="./assets/images/line.png"></a>
            <a target="_blank" :href="seo.youtube"><img src="./assets/images/youtobe.png"></a>
            <a target="_blank" :href="seo.facebook"><img src="./assets/images/fb.png"></a>
        </div>
      </div>
    </header> 
    <transition name="slide-fade">
      <router-view v-bind:phone="seo.phone" v-bind:lineID="seo.lineID" v-bind:youtube="seo.qq" />  
    </transition>
    
    <loading></loading> 

    <div class="footer">
      <footer class="text-center">
       <h4> 思薇蜜品牌整合行銷</h4>
       <h5> {{seo.copyright}} </h5>
       <div class="toTop" v-show="goTopShow"><img @click="goTop" src="./assets/images/top.png" width="40px"></div>
      </footer>
    </div>

  </div>
</template>

<script>
import loading from '@/components/loading'
export default {
  name: 'App',
  data(){
      return{
        scrollTop: '',
        goTopShow:false,
        seo:{}
      }
  },
  created () {
    this.axios
      .get('/seo/')
      .then(res => {
        console.log(res.data);
        this.seo=res.data;       
      })
  },
 mounted() {
   // this.bus.$emit('loading', true);

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
      
  },
  components:{
    loading
  }

}
</script>

<style scoped>
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 1.5s ease;
}
.slide-fade-leave-active {

  transition: all 1.1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateY(0px);
  opacity: 0;
}

</style>
