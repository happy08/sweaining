<template>
  <div class="main">
    <div class="banner">
     <img src="../assets/images/b-stores.jpg">
    </div>
    <navLink></navLink>
    <div class="container">
      <ul class="stores">
        <li v-for="(item,index) in lists" :key="item.id">
          <div class="stores-l">
            <h2>{{item.title}}</h2>
            <h1>{{item.myname}}</h1>
          </div>
          <div class="stores-r">
            <div class="item">
              <label>地址：</label>
              <div class="content"> {{item.address}}</div>
            </div>
            <div class="item">
              <label>電話：</label>
              <div class="content"> {{item.tel}}</div>
            </div>
            <div class="item">
              <label>手機：</label>
              <div class="content"> {{item.phone}}</div>
            </div>
            <div class="item">
              <label>Email：</label>
              <div class="content">&nbsp; {{item.email}}</div>
            </div>
            <div class="item">
              <label style="width:auto">營業時間：</label>
              <div class="content"> {{item.mytime}} </div>
            </div>
                            
          </div>
          <div class="clear"></div>
        </li>
        <!-- <li>
          <div class="stores-l">
            <h2>果凍美人</h2>
            <h1>南山館</h1>
          </div>
          <div class="stores-r">
            <div class="item">
              <label>地址：</label>
              <div class="content"> 新北市中和區景新街34巷 6號1樓(中和國小旁)</div>
            </div>
            <div class="item">
              <label>電話：</label>
              <div class="content"> (02)2247-3878 代表號</div>
            </div>
            <div class="item">
              <label>手機：</label>
              <div class="content"> 0932-006-195</div>
            </div>
            <div class="item">
              <label>Email：</label>
              <div class="content">&nbsp; sweaining@gmail.com</div>
            </div>
            <div class="item">
              <label style="width:auto">營業時間：</label>
              <div class="content" > PM 12:00~PM 21:00 (週一及週四休館) </div>
            </div>
          </div>
          <div class="clear"></div>

        </li> -->
      </ul>
      <div class="clear"></div>
      
    </div>
  </div>
</template>

<script>
import navLink from '../components/nav'
export default {
  name: 'stores',
  data () {
    return {
       lists:[]
    }
  },  
  created () {
    this.axios
      .get('/stores/')
      .then(res => {
        console.log(res.data);
        this.lists=res.data;
        
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
.stores li{margin:40px 20px 10px 20px; }
.stores-l{ float: left; width: 340px; height: 296px; padding: 20px; display: flex;flex-direction:column; align-items: center; justify-content: center; text-align: center; background: url("../assets/images/stores_bg.png") center no-repeat; background-size: cover; color: #fff;}
.stores-l h1{padding-top: 30px; font-size: 50px; line-height: 1}
.stores-l h2{font-size: 40px;line-height: 1}
.stores-r{margin-left: 360px; font-size: 30px; }
label{float: left; width: 95px;}
.content{margin-left: 95px;}
 @media (max-width: 900px){
.stores-l{float: left; width: 260px; height: 226px; }
.stores-l h1{padding-top: 30px; font-size: 40px;}
.stores-l h2{font-size: 30px;}
.stores-r{margin-left: 280px; font-size: 20px; }
label{float: left; width: 65px;}
.content{margin-left: 65px;}
}
 @media (max-width: 767px){
.stores-l{float: none; margin: 0 auto; }
.stores-r{margin:15px 0 0 0; }
}
</style>
