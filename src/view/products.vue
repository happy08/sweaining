<template>
  <div class="main">
    <div class="banner">
       <img src="../assets/images/b-products.jpg">
    </div>
    <navLink></navLink>
    <div class="container">
      <ul class="p_nav">
        <li v-for="(item,index) in pcitems" :key="item.id">
          <a href="javascript:;" @click="classid=item.id" :class="{ 'cur': classid == item.id}">{{item.title}}</a>
        </li>
        <!--
        <li>
          <a href="">收縮系列</a>
        </li> -->
      </ul>
      <div class="clear"></div>
      
      <div class="con">
         <ul>
           <li v-for="(item,index) in items" :key="item.id" v-if="item.classid==classid">
              <div class="left">
                <img :src="item.image1">
              </div>
              <div class="right">
                <h2>{{item.title}}</h2>
                <h4>{{item.title_en}}</h4>
                <div class="t">簡介：</div>
                {{item.mome}}  
                <div class="t">使用方法：</div>
                {{item.pro_text1}}
                <div class="t">適用膚質：</div>
                {{item.pro_text2}}
                <div class="t">售價NT$：<span class="price">{{item.price}}</span> </div>
              </div>
              <div class="clear"></div>
           </li>
           <!-- <li>
              <div class="left">
                <img src="../assets/images/b-stores.jpg">
              </div>
              <div class="right">
                <h2>E6 彈力鎖水精華霜 35ml</h2>
                <h4>ELASTIC MOISTURIZINGS</h4>
                <div class="t">簡介：</div>
                高效能之超微粒子包覆人體所須之水分、礦物
                質及微量元素能使肌膚迅速吸收，提供皮膚所
                需水分及養分達到防止水分流失及瞬間保濕滋
                潤效果。
                <div class="t">使用方法：</div>
                使用方法：簡介：早晚精華液後，取適量抹於全臉，輕抹至吸收
                及可。
                <div class="t">適用膚質：</div>
                任何肌膚適用。
                <div class="t">售價NT$：<span class="price">1500</span> </div>
              </div>
              <div class="clear"></div>
           </li> -->
         </ul>


      </div>



    </div>
  </div>
</template>

<script>
import navLink from '../components/nav'
export default {
  name: 'products',
  data () {
    return {
       classid:'',
       items:[],
       pcitems:[]
    }
  },
  created () {
    var classid=this.$route.query.classid;
    this.axios
      .get('/products/')
      .then(res => {
        console.log(res.data);
        this.items=res.data.data;
        this.classid=classid==""||typeof(classid)=="undefined"?res.data.data[0].classid : this.$route.query.classid;
        console.log(classid,this.$route.query.classid,this.classid);
      })
      .catch(error => {
        this.errored = true
      })
      .finally(() => this.loading = false)

    this.axios
      .get('/produts_class/')
      .then(res => {
        console.log(res.data);
        this.pcitems=res.data;
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
.p_nav li{width:16.66%;float: left;padding:5px 8px 10px 8px; }
.p_nav li a{display: block; text-align: center; border-radius: 5px;background: #dcb6dd; color: #91498e; font-size: 24px; height: 60px; line-height: 60px; overflow: hidden;;}
 .p_nav li a.cur{background: #ef7f92; color: #fff;}
 .con{padding: 10px}
 .con ul li{ margin-bottom: 25px;}
 .left{width: 50%; padding-right: 25px; float: left;}
 .left img{border:solid 1px #ef7f92;border-radius: 5px; padding: 5px;}
 .right{width: 50%; float: right;}
 .right h2{color:#ef7f92; font-size: 30px;}
 .right h4{font-weight: 100;font-size: 20px; }
 .right .t{font-size: 20px; color:#ef7f92; margin:10px 0 5px 0; font-weight: 800;}
  .right .t .price{font-size:30px; font-weight: 800; color: #222;line-height: 1; }
 @media (max-width: 767px){
.p_nav li{width:33.33%;}
 .left{width: 100%;padding-right: 0px; }
 .right{width: 100%; float: none;}
}
</style>
