<template>
  <div class="main">
    <div class="banner">
     <img src="../assets/images/b-events.jpg">
    </div>
    <navLink></navLink>
    <div class="container events">
            
       <div class="row">
            <div class="col-6" v-for="(item) in items" :key="item.id">
              <router-link :to="{path:'/events_detail/?id='+item.id}"><img :src="item.image1" > </router-link>
              <p class="title">{{item.title}}</p> 
            </div>
            <div class="clear"></div>
        </div>
        
 
       
      
    </div>
  </div>
</template>

<script>
import navLink from '../components/nav'
export default {
  name: 'events',
  data () {
    return {
        items:''
    }
  },  
  created () {
   this.axios
      .get('/events')
      .then(res => {
         console.log('index_events',res.data);
        this.items=res.data.data
      })

  },
  methods: {
    


     
  },

  components: {
    navLink
  }
}
</script>

<style scoped>
.row{ margin:0 -10px}
.col-6{width: 50%; padding:20px 20px; float: left;}
.events a{display: block;position: relative; border-radius: 10px; overflow: hidden; line-height: 0; padding: 5px; border:solid 1px #cc6699;}
.events p.title{ height: 50px; overflow: hidden; font-size: 25px; text-align: center; padding: 10px 5px;}


</style>
