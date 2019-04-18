<template>
  <div class="main">
    <div class="banner">
     <img src="../assets/images/b-sweaining.jpg">
    </div>
    <navLink></navLink>
    <div class="container" v-html="content">
      
      
    </div>
  </div>
</template>

<script>
import navLink from '../components/nav'
export default {
  name: 'sweaining',
  data () {
    return {
      content:''
    }
  },
  created () {
    this.axios
      .get('/about/')
      .then(res => {
        console.log(res.data);
        this.content=res.data[0].mycontent;
      })
      .catch(error => {
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
  components: {
    navLink
  },
  methods:{
    
  }
}
</script>

<style scoped>

</style>
