<template>
  <div class="main">
    <div class="banner">
     <img src="../assets/images/b-events.jpg">
    </div>
    <navLink></navLink>
    <div class="container">
            
         <ul class="events">
           <li>
              <div class="left">
                <img :src="item.image1">
              </div>
              <div class="right">
                <h2>{{item.title}} <br/> {{item.title2}}</h2>
                {{item.mome}}
              </div>
              <div class="clear"></div>
           </li>
            <li>
              <div class="left">
                 <div class="price">
                    <span> 原價：{{item.old_price}}</span>
                    <span style="color:#91498e">$ <span id="price" style="font-size: 50px;"> {{item.price}}</span> 元</span>
                 </div>
              </div>
              <div class="right">
                 <div class="date text-right">
                    <span> 優惠截止日：<span style="color:#ed1c24">{{item.mytime}}</span></span>
                 </div>
              </div>
              <div class="clear"></div>
           </li>
         </ul>

        <h1 class="text-center">立即購買</h1>

        <div class="contact">
          <div class="item">
              <label class="label" for="">
                  產品：
              </label>
              <div class="input" style="color:#ed1c24;">
                {{item.title}}：{{item.title2}}
              </div>
          </div>
          <div class="item">
              <label class="label" for="">
                  單價：
              </label>
              <div class="input" style="font-weight:800">
                  {{item.price}}
              </div>
          </div>

          <div class="item">
              <label class="label" for="">
                  數量：
              </label>
              <div class="input">
                   <div class="num">
                     <span @click="btn_minute" id="jian">-</span>
                      <input type="text" readonly v-model="info.num"  autocomplete="off" style=" text-align: center;">
                     <span @click="btn_add" id="jia">+</span>
                   </div>
              </div>
          </div>
          <div class="item">
              <label class="label" for="">
                  總金額：
              </label>
              <div class="input" style="color:#ed1c24; font-weight:800">
                 <span>{{item.total}}</span>  
              </div>
          </div>
          
           <div class="item">
              <label class="label">姓名：</label>
              <div class="input">
                  <input type="text"  v-model="info.name" autocomplete="off">
              </div>
          </div>
          <div class="item">
              <label class="label">手機：</label>
              <div class="input">
                  <input type="text"  v-model="info.phone" autocomplete="off">
              </div>
          </div>
          <div class="item">
              <label class="label">Email：</label>
              <div class="input">
                  <input type="text"  v-model="info.email" autocomplete="off">
              </div>
          </div>
          <div class="item">
              <label class="label">LineID：</label>
              <div class="input">
                  <input type="text"  v-model="info.line" autocomplete="off">
              </div>
          </div>
          <div class="item">
              <label class="label">地址：</label>
              <div class="input">
                  <input type="text"  v-model="info.address" autocomplete="off">
              </div>
          </div>
          <div class="item">
              <label class="label" style="width:140px">付款方式</label>
              <div class="input" style="margin-left:140px">
                
                
                  <input type="radio" name="pay" id="pay" checked value="貨到付款" autocomplete="off">
                  <label class="radio" for="pay">貨到付款</label>
                  <div style="display:inline-block">
                  <input type="radio" name="pay" id="pay2" value="ATM轉帳" autocomplete="off">
                  <label class="radio" for="pay2">ATM轉帳</label>
                  <input type="text" id="five" v-model="info.ATMfive" autocomplete="off" placeholder="帳號末五碼" style="width:200px;">
                  </div>
                  <br/>
                  <div style="display:inline-block">
                  <input type="radio" name="pay" id="pay4" value="到店付款" autocomplete="off">
                  <label class="radio" for="pay4">到店付款</label>
                  </div>
                  
                  <div style="display:inline-block">
                  <input type="radio" name="pay" id="pay3" value="手刷單" autocomplete="off">
                  <label class="radio" for="pay3">手刷單 (下載手刷單) </label>
                  </div>



              </div>
          </div>

          <div class="item">
              <label class="label">驗證碼：</label>
              <div class="input">
                  <input v-model="code" type="text" placeholder="驗證碼" style="width: 50%;"> 
                  <input type="button" v-model="vcode" @click="createCode" style="width: 100px"/>
              </div>
          </div>


      <button @click="submit" class="submit">
        訂購
      </button>

        </div>
       
      
    </div>
  </div>
</template>

<script>
import navLink from '../components/nav'
export default {
  name: 'events_detail',
  data () {
    return {
          code:"",
          vcode:"",
        item:{
            title:'',
            image1:'',
            price:'',
            old_price:'',
            total:'',
            mytime:'',
            mome:'',
        },
        info: {
            title:"",
            price:"",
            num:1,
            total:"",
            name:"",
            phone:"",
            line:"",
            email:"",
            address:"",
            payway:"",
            ATMfive:"",
        }

    }
  },  
  created () {
    //   if(this.$route.query.id){
    //       this.showNew = true;
    //       this.viewNew(this.$route.query.id)
    //   } 


      var id=this.$route.query.id;
      if(id==""||typeof(id)=="undefined"){
        id="";
      }else{
        id=this.$route.query.id
      }
      console.log('id',this.$route.query.id);
      this.axios
     // .get('/events/'+this.$route.query.id)
      .get('/events_detail/'+id)
      .then(res => {
        console.log(22,res.data[0]);
        this.item=res.data[0];
        this.item.total=res.data[0].price;

        this.info.title=res.data[0].title+"-"+res.data[0].title2;
        this.info.price=res.data[0].price;
        this.info.total=res.data[0].price;
        //console.log(11,this.item);
      })
      .catch(error => {
        this.errored = true
      })
      .finally(() => this.loading = false)

     
      this.createCode();//初始化生成一个4位数的验证码
    },

  methods:{
    createCode(){
      var code = "";
      var codeLength = 4;//验证码的长度
      var random = new Array(0,1,2,3,4,5,6,7,8,9//,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
      );//随机数
      for(var i = 0; i < codeLength; i++) {
      //循环操作
      var index = Math.floor(Math.random()*10);//36 取得随机数的索引（0~35）
      code += random[index];//根据索引取得随机数加到code上
      }
      this.vcode = code;//把code值赋给验证码
      //console.log(2,code)
    },

      submit: function() {

        if(this.info.name==""||this.info.phone==""||this.info.address==""){
          alert("請正確填寫資料");return;
        }

     var code = this.code.toUpperCase();//输入内容全部转化为大写
     if(code != this.vcode){
      alert("驗證碼錯誤");
      this.code='';
      this.createCode();return;
     }


          var radios = document.getElementsByName("pay");
          var payway = 0;
          for(var i=0;i<radios.length;i++){
              if(radios[i].checked == true){
                  payway = radios[i].value;
              }
          }
         
        if(payway=="貨到付款"){
          this.info.payway="貨到付款";
        }else if(payway=="ATM轉帳"){
          var v=document.getElementById('five').value;
          if(v.length != 5){
            alert("請輸入帳號末五碼");
            return;
          }
          this.info.payway="ATM轉帳-"+v;
          this.$delete(this.info,'ATMfive'); //vue删除方式
         // delete this.info.ATMfive;
        }else if(payway=="到店付款"){
          this.info.payway="到店付款";
        }else if(payway=="手刷單"){
          this.info.payway="手刷單";
        }

        //console.log(this.info)
        var info=this.qs.stringify(this.info)
 
         // this.$store.commit('showLoading');
        // $("input[type=submit]").attr("disabled",true);
         //let _this=this;  //_this.$qs.stringify(_this.info)
         this.axios.post("/contact/",info).then(res => {
           console.log(res);
           this.info.name="";
           this.info.phone="";
           this.info.address="";
           this.info.line="";
           this.info.email="";
           this.code='';
           alert("發訊完成");
              // if(res.statu=="1"){
              //   alert("發訊完成");
              //   //$("input[type=text]").val("");
              // }else{
              //   alert(res.statu);                  
              // }
              //$("input[type=submit]").attr("disabled",false);
          }, err => {
              alert("請稍後再試！")
              //$("input[type=submit]").attr("disabled",false);
          })
        // this.$store.commit('hideLoading');
      },


      //添加
        btn_add: function() {
            this.info.num = this.info.num+1;
            this.item.total=this.item.price*this.info.num
            this.info.total=this.item.price*this.info.num
           // this.hh();
        },
        //减去
        btn_minute: function() {
            if(this.info.num > 1) {
              this.info.num = this.info.num-1;
             this.item.total=this.item.price*this.info.num
              this.info.total=this.item.price*this.info.num
          //console.log(this.info.num)

            }
            //this.hh();
        },
  },

  components: {
    navLink
  }
}
</script>

<style scoped>
 input[type="button"]{border: 0}
 ul.events{border-bottom: solid 1px #cccccc;margin-bottom: 15px; }
 ul.events li{ margin-bottom: 5px;}
 .left{width: 45%; padding-right: 25px; float: left;}
 .left img{border:solid 1px #ef7f92;border-radius: 5px; padding: 5px;}
 .right{width: 55%; float: right; overflow: hidden;}
 .right h2{color:#ed1c24; font-size: 30px; margin-bottom: 20px;}
 .price{display: flex; justify-content: space-between; font-size: 24px; line-height: 60px; }
 .date{font-size: 30px; line-height: 60px;}
 .item{padding:10px 80px; font-size: 26px; }
.item .label{width: 120px;font-size: 30px; line-height: 45px; float: left;}
.item .input{margin-left:120px;min-height: 45px;line-height: 45px;}
.num{position: relative; width: 160px;}
#jian,#jia{position: absolute; width: 46px; height: 44px; text-align: center; font-size: 30px; cursor: pointer; background: #fff; display: block; left: 1px; top: 1px; border-radius: 5px;}
#jia{right: 1px; left:auto;}
 input[type='text']{border:solid 1px #ffcccc; border-radius: 5px;width: 100%; padding: 5px; line-height: 35px;}
 .radio{position: relative; padding-right:10px; }
 input[type="radio"] + label::before {
    content: "\a0"; 
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
    width: 1.3em;
    height: 1.3em;
    margin-right: .4em;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #ef7f92;
    text-indent: .15em;
    
}
input[type="radio"]:checked + label::before {
    background-color: #ef7f92;
    background-clip: content-box;
    padding: .2em;
}
.submit{background: #91498e; font-size:24px; padding: 5px 20px; border-radius: 5px;color: #fff; border:none;margin:20px auto; display: block; }
 @media (max-width: 767px){
 .left{width: 100%;padding-right: 0px; text-align: center;}
 .right{width: 100%; float: none;}
  .item{padding:5px 20px;  }

}

</style>
