<template>
  <div class="main">
    <div class="banner" style="width:100%; height:460px">
       <slider ref="slider" :options="options">
          <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
          <div slot="loading">loading...</div>
      </slider>

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
                <router-link class="title" :to="{path:'/news/?id='+item.id, append:'true'}">{{item.title}}</router-link>
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
          <div class="events">
            <div class="row">
              <div class="col-6" v-for="(item) in events" :key="item.id">
                <router-link :to="{path:'/events/?id='+item.id}"><img :src="item.image1" ></router-link>
              </div>
              <!-- <div class="col-6">
                <a href=""> <img src="../assets/images/p1.jpg" ></a>
              </div> -->
               <div class="clear"></div>
            </div>
          </div>

          <!-- 最新產品 -->
          <!-- <div class="height15"></div>  -->
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
           <!-- <div class="height15"></div> 
           <div class="flicker">
             <iframe src="https://zh-tw.facebook.com/sweaining/" style="width:100%; height:500px; border:none;"></iframe>
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
                  <h2> 網路客服 :  0985586195</h2> 
                  <h2> Line ID : 22434588</h2> 
               </div>
             </div>
             <div class="s_items"> 
             <ul class="s_item">
               <li v-for="(item) in stores" :key="item.id">
                 <h1>{{item.myname}}</h1>
                 <h4>{{item.tel}}</h4>
                 <h4>{{item.address}}</h4>
               </li>
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
             <iframe src="https://www.facebook.com/sweaining/posts/2265850676780096" style="width:100%; height:500px; border:none;"></iframe>
           </div>
           
        </div> 
          <div class="clear"></div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'
import navLink from '../components/nav'
export default {
  name: 'home',
  data () {
    return {
      news: [],
      events:[],
      products:[],
      stores:[],
      links:[],
      //msg:''
      someList:[
          // {
          //   style: {
          //     'background': 'url('+require('../assets/images/b1.jpg')+')'
          //   }
          // },
          // {
          //   style: {
          //     'background': 'url('+require('../assets/images/b1.jpg')+')'
          //   }
          // },
          // {
          //   style: {
          //     'background': 'url('+require('../assets/images/b1.jpg')+')'
          //   }
          // }
      ],
        //Slider configuration [obj]
      options: {
        currentPage: 0
      },
       
    }
  },
  created () {
    this.axios
      .get('/index_news/')
      .then(res => {
        //console.log(res.data);
        this.news=res.data.data;
      })
      .catch(error => {
        this.errored = true
      })
      .finally(() => this.loading = false)

     this.axios
      .get('/index_banner')
      .then(res => {
       // console.log('index_banner',res.data);
        // this.someList=res.data;
        var a={};
        var data=res.data;
         //console.log('data',res.data)
        for(var i=0; i<data.length; i++){
          a.style=data[i];
           this.someList.push(a);
        }
       // console.log(22,this.someList)
      })


     this.axios
      .get('/index_events')
      .then(res => {
        //console.log('index_events',res.data);
        this.events=res.data.data
      })

     this.axios
      .get('/index_products')
      .then(res => {
        //console.log(res.data);
        this.products=res.data.data
      })

     this.axios
      .get('/index_stores')
      .then(res => {
        //console.log('stores',res.data);
        this.stores=res.data.data
      })
     this.axios
      .get('/index_links')
      .then(res => {
        //console.log(res.data);
        this.links=res.data.data
      })
    
  },
  components: {
    navLink,
    slider,
    slideritem
  }
}
</script>

<style scoped>
.height15{height: 15px;}
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
.sto_l{ width: 150px; float: left; text-align: center;}
.sto_l h1{ font-size: 30px; }

.sto_r{ margin-left: 150px;  }
.sto_r h2{ font-size: 22px; margin:10px 0; font-weight: 100; }
.s_items {width: 100%;border-radius: 3px;  overflow: auto;}
.s_item {width: 1000%; }
.s_item li{width: 190px;margin:0px 10px 5px 0 ; border-radius: 3px;  background: #fff; padding: 5px 10px; color: #cc6699; float: left;}
.s_item li h1{ text-align: center }

.events{ }
.events a{display: block; margin-bottom: 15px; position: relative; border-radius: 10px; overflow: hidden; line-height: 0; padding: 5px; border:solid 1px #cc6699;}
.events a p.title{ position: absolute; bottom: 0;line-height: 1; left: 0; font-size: 25px; text-align: center; width: 100%; background: rgba(255,255,255,.5); padding: 10px 5px;}


</style>
