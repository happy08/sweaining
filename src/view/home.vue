<template>
  <div class="main">
    <div class="banner">
 
        <swiper :options="swiperOption" >
            <swiper-slide v-for='item of swiperList' :key="item.id">
                <img :src="item.background" class="swiper-img">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
 

     <!-- <img src="../assets/images/b1.jpg"> -->
    </div>
    <navLink></navLink>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="news">
            <h1>最新消息<img src="../assets/images/date.png" width="35px"></h1>
            <ul>
              <li v-for="(item) in news" :key="item.id">
                <template v-if="item.link == '' || item.link == null ">
                  <router-link class="title" :to="{path:'/news/?id='+item.id, append:'true'}">{{item.link}}{{item.title}}</router-link>
                </template>
                <template v-else>
                  <a class="title" :href="item.link"> {{item.title}}</a> 
                </template>
                <span class="time">{{item.mytime}}</span>
              </li>
              <!-- 
              <li>
                  <a class="title" href="">春節休館時間公告，請美人不要忘記預約新課程</a>
                  <span class="time">2019.2.2</span>
              </li> -->
            </ul>
          </div>
          <!-- 行銷活動 -->
          <div class="height15"></div> 
          <h3 class="t">我要下單</h3>
          <div class="events">
            <div class="row">
              <div class="col-6" v-for="(item) in events" :key="item.id">
                <router-link :to="{path:'/events_detail/?id='+item.id}"><img :src="item.image1" ></router-link>
              </div>
              <!-- <div class="col-6">
                <a href=""> <img src="../assets/images/p1.jpg" ></a>
              </div> -->
               <div class="clear"></div>
            </div>
          </div>

          <!-- 最新產品 -->
          <!-- <div class="height15"></div>  -->
          <h3 class="t">產品介紹</h3>
          <div class="events">
            <div class="row">
              <div class="col-6" v-for="(item) in products" :key="item.id">
                <router-link :to="{path:'/products/?classid='+item.classid+'&id='+item.id}">
                    <img :src="item.image1">
                    <p class="title">{{item.title}}</p>
                </router-link>
              </div>
              <!-- <div class="col-6">
                <a href=""> <img src="../assets/images/p1.jpg" >
                <p class="title">SD2淨化純露</p>
                </a>
              </div> -->
               <div class="clear"></div>
            </div>
          </div>

          <!-- Flicker照片 -->
          <div class="height15"></div> 
            <iframe height="242" width="100%" :src='youtube' frameborder="0" allowfullscreen></iframe>



           <!-- <div class="flicker" id="nanogallery2" 
           data-nanogallery2='{
              "kind":                  "flickr",
              "userID":                "44702621@N06",
              "album":                 "none",
              "thumbnailHeight":       150, "thumbnailWidth": 150,
              "galleryDisplayMode":    "pagination",
              "galleryMaxRows":        2,
              "galleryPaginationMode": "numbers"
            }'>
            </div> -->

        </div> 

        <!-- 右側 -->
        <div class="col-6">
          <!-- 歡迎預約 -->
           <div class="stores">
             <div class="title">
               <div class="sto_l">
                 <img src="../assets/images/time.png" width="65px">
                 <h1>歡迎預約</h1>
               </div>
               <div class="sto_r">
                  <h2> 思薇蜜 - 果凍美人館</h2> 
                  <h2> 網路客服 : {{phone}} </h2> 
                  <h2> Line ID : {{lineID}}</h2> 
               </div>
             </div>
             <div class="s_items"> 
             <ul class="s_item">
               <swiper :options="swiperOption2" >
                  <swiper-slide v-for='item of stores' :key="item.id">
                      
                  <li>
                    <h1>{{item.myname}}</h1>
                    <h4>{{item.tel}}</h4>
                    <h4>{{item.address}}</h4>
                  </li>
                  
                  </swiper-slide>

                  <div class="swiper-pagination"  slot="pagination"></div>
              </swiper>

               <!-- <li v-for="(item) in stores" :key="item.id">
                 <h1>{{item.myname}}</h1>
                 <h4>{{item.tel}}</h4>
                 <h4>{{item.address}}</h4>
               </li> -->
               <!-- <li>
                 <h1>仁和館</h1>
                 <h4>02-2921-3878</h4>
                 <h4> 新竹縣竹北市仁和街47號</h4>
               </li> -->

             </ul>
             </div>
             <div class="clear"></div>
           </div>

            <!-- 鏈接 -->
           <div class="height15"></div> 
           <div class="link" v-for="(item) in links" :key="item.id">
                <router-link :to="{path:item.link}">
                    <img :src="item.image1">
                </router-link>

           </div>

          <!-- facebook -->
           <div class="height15"></div> 
           <div class="facebook">
             <iframe src="https://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fsweaining&amp;width=427px&amp;height=500&amp;colorscheme=light&amp;show_faces=true&amp;header=false&amp;stream=true&amp;show_border=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100%; height:500px;" allowTransparency="true"></iframe>
            
              <!-- <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsweaining%2Fphotos%2Fa.378825392149310%2F1205625239469317%2F%3Ftype%3D3&width=500" style="width:100%; height:500px;border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
              <iframe target="_top" src="https://www.facebook.com/sweaining/posts/2265850676780096" style="width:100%; height:500px; border:none;"></iframe> -->
           </div>
           
        </div> 
          <div class="clear"></div>
      </div>
    </div>
    
  </div>
</template>

<script>

import {jquery} from '@/assets/js/jquery.min.js'

import navLink from '../components/nav'
export default {
  name: 'home',
  props:['phone','lineID','youtube'],
  data () {
    return {
      news: [],
      events:[],
      products:[],
      stores:[],
      links:[],
      //msg:''
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        loop: true,
      },
      swiperOption2: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        loop: true,
        slidesPerView: 2,
      },
      swiperList:[]
    }
  },
  created () {


    /*   const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js';
        document.head.appendChild(s);

      const s2 = document.createElement('script');
        s2.type = 'text/javascript';
        s2.src = 'https://unpkg.com/nanogallery2@2.4.1/dist/jquery.nanogallery2.min.js';
        document.head.appendChild(s2); */

     this.init();
        //141035746@N03   注idgettr.com中查找userID
        
    },
    mounted(){
  
    },
  methods: {
       
      async init() {

        await this.axios
      .get('/index_news/')
      .then(res => {
        //console.log(res.data);
        this.news=res.data.data;
      })

     await this.axios
      .get('/index_banner')
      .then(res => {
       this.swiperList=res.data;
       console.log(this.someList)
      })

     await this.axios
      .get('/index_events')
      .then(res => {
        //console.log('index_events',res.data);
        this.events=res.data.data
      })

     await this.axios
      .get('/index_products')
      .then(res => {
        //console.log(res.data);
        this.products=res.data.data
      })

     await this.axios
      .get('/index_stores')
      .then(res => {
        //console.log('stores',res.data);
        this.stores=res.data.data
      })
     await this.axios
      .get('/index_links')
      .then(res => {
        //console.log(res.data);
        this.links=res.data.data
      })
      .catch(error => {
        this.errored = true
      })
      .finally(() => this.bus.$emit('loading', false))
    }
  },
  components: {
    navLink
  }
}
</script>

<style scoped>
/* @import "https://unpkg.com/nanogallery2@2.4.1/dist/css/nanogallery2.min.css";
 */
.height15{height: 15px;}
h3.t{color: #cc6699}
.row{ margin:0 -7.5px}
.col-6{width: 50%; padding:0 7.5px; float: left;}
.news{border:solid 1px #cc6699; border-radius: 10px; padding: 20px 15px 15px 15px; background: #fff;}
.news ul li a.title{position: relative;margin-top:20px; overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap; padding: 0 20px 0 20px;display: block; cursor: pointer; line-height: 1.2; font-size: 18px; color: #cc6699;}
.news ul li a.title::before{transition:all 0.3s ease-out;
  position: absolute; left: 0; top: 50%; margin-top:-8px;
  content: "";
  width:0; 
  height:0; 
  border-top:8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #cc6699;}
.news ul li span.time{padding-left: 20px}

.stores{background: #0791bf;border-radius: 10px;padding: 10px;  overflow: hidden;}
.stores .title{ color:#fff;}
.sto_l{ width: 30%; float: left; text-align: center;}
.sto_l h1{ font-size: 23px; }

.sto_r{ margin-left: 35%;  }
.sto_r h2{ font-size: 22px; margin:10px 0; font-weight: 100; }
.s_items {width: 100%;border-radius: 3px;  overflow: auto;}
.s_item { }
.s_item li{width: 96%;margin:0px 5px 5px 5px ;min-height: 165px;  border-radius: 3px;  background: #fff; padding: 5px 10px; color: #cc6699; float: left;}
.s_item li h1{ text-align: center }

.events{ }
.events a{display: block; margin-bottom: 15px; position: relative; border-radius: 10px; overflow: hidden; line-height: 0; padding: 5px; border:solid 1px #cc6699;}
.events a p.title{ position: absolute; bottom: 0;line-height: 1; left: 0; font-size: 25px; text-align: center; width: 100%; background: rgba(255,255,255,.5); padding: 10px 5px;}

.swiper-pagination-bullet-active{
  background:#fff;
}
.wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 30.48%;
    background: #ccc;
}
.swiper-img{
  width: 100%;
}

.flicker{width: 100%; height: 325px; overflow-x: hidden !important; overflow-y: auto !important;}
</style>
