<template>
  <div class="main">
    <div class="banner">
     <img src="../assets/images/b-news.jpg">
    </div>
    <navLink></navLink>
    <div class="container">
      <ul class="news">
        <li v-for="(item,index) in news" :key="item.id" :class="(item.id == show ?'cur':'')">
          <template v-if="item.link == '' || item.link == null ">
            <div class="title" @click="toggleCur(item.id)"> {{item.title}} <span>{{item.mytime}}</span></div> 
            <div class="content" v-html="item.mycontent">
            </div> 
          </template>
          <template v-else>
            <a class="title" :href="item.link"> {{item.title}} <span>{{item.mytime}}</span></a> 
          </template>

        </li>
        <!-- <li :class="[2 == show ?'cur':'']">
          <div class="title" @click="toggleCur(2)">春節休館時間公告，請美人不要忘記預約新課程 <span>2019-01-30</span></div> 
          <div class="content">
            春節休館時間公告，請美人不要忘記預約新課程
            春節休館時間公告，請美人不要忘記預春節休館時間公告，請美人不要忘記預約新課程約新課程
          </div> 
        </li> -->
      </ul> 
    </div>
  </div>
</template>

<script>
import navLink from '../components/nav'
export default {
  name: 'news',
  data () {
    return {
      news: [],
      show:""
    }
  },
  created () {
    this.axios
      .get('/news/')
      .then(res => {
        console.log(res.data);
        this.news=res.data.data;
        var id=this.$route.query.id;
        if(id!=""&&typeof(id)!="undefined"){
          this.show=id
        }else{
          this.show=res.data.data[0].id
        }
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
    toggleCur(index){
      if(this.show == index){this.show=''; return;}
        this.show = index
    }
  }
}
</script>

<style scoped>
.news li{ margin:30px 30px 10px 30px;}
.title,.title a{display: block; position: relative; padding: 0 120px 0 30px; cursor: pointer; line-height: 1.2; font-size: 24px; color: #cc6699;}
.title::before{transition:all 0.3s ease-out;
  position: absolute; left: 0; top: 50%; margin-top:-10px;
  content: "";
  width:0; 
  height:0; 
  border-top:12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 12px solid #cc6699;}
.title span{position: absolute; top: 50%; margin-top:-10px; right: 0; font-size: 22px; color: #666666;}
.content{display: none;margin-top:20px; border:solid 1px #cc6699; border-radius: 10px; padding: 20px; background: #fff;}
.news li.cur .content{display: block;}
.news li.cur .title::before{transform:rotate(90deg);}
</style>
