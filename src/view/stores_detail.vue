<template>
  <div class="main">
    <div class="banner">
      <img src="../assets/images/b-products.jpg">
    </div>
    <navLink></navLink>
    <div class="container">
      <ul class="p_nav">
        <li v-for="(item,index) in pcitems" :key="item.id">
          <a
            href="javascript:;"
            @click="classid=item.id;times=[]"
            :class="{ 'cur': classid == item.id}"
          >{{item.myname}}</a>
        </li>
      </ul>
      <div class="clear"></div>

      <div class="con">
        <ul>
          <li v-for="(item,index) in items" :key="item.id" v-if="item.id==classid">
            <div v-html="item.mycontent"></div>
            <h5>護膚預約</h5>
            <div v-html="item.mycontent_jp"></div>

            <div class="left">
              <label v-for="(time,idx) in item.times" :key="idx" class="checkbox" :for="'c'+idx">
                <input :id="'c'+idx" type="checkbox" v-model="times" :value="time">
                <span>√</span>
                {{time}}
              </label>
            </div>

            <div class="right">
              <iframe
                width="100%"
                height="300px"
                :src="map"
                frameborder="0"
              ></iframe>
            </div>
            <div class="clear"></div>
          </li>
        </ul>

        <div class="item">
          <label class="label">手機號碼：</label>
          <div class="input">
            <input v-model="phone" type="number" maxlength="10" oninput="if(value.length>10)value=value.slice(0,10)"  placeholder="輸入手機號碼" style="width: 50%;">
            <input v-show="sendAuthCode" class="sendCode" type="button" @click="sendCode" value="驗證手機">
            <button v-show="!sendAuthCode" class="sendCode disabled" type="button"> 倒計時 <span class="auth_text_blue">{{auth_time}} </span> s</button> 

          </div>
        </div>

        <div class="item">
          <label class="label">驗證碼：</label>
          <div class="input">
            <input v-model="code" type="text" placeholder="驗證碼" style="width: 50%;">
          </div>
        </div>

        <button @click="submit" class="submit">送出</button>
      </div>
    </div>
  </div>
</template>

<script>
import navLink from "../components/nav";
export default {
  name: "products",
  data() {
    return {
      sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
      auth_time: 0, /*倒计时 计数器*/

      classid: "",
      items: [],
      pcitems: [],
      times: [],
      phone: "",
      code: ""
    };
  },
  created() {
    this.init();
  },
  components: {
    navLink
  },
  methods: {
    async init() {
      var classid = this.$route.query.id;
      await this.axios.get("/stores/").then(res => {
        var data = res.data;
        for (var i in data) {
          if (data[i].times != null && data[i].times != "") {
            res.data[i].times = data[i].times.split(",");
            //console.log(data[i].times.split(","));
          }
        }
        console.log(1, res.data);

        // var times=res.data.times
        this.pcitems = res.data;
        this.items = res.data;
        this.classid =
          classid == "" || typeof classid == "undefined"
            ? res.data[0].id
            : classid;
        //console.log(classid,res.data,this.classid);
      });
    },
    sendCode() { //發送驗證碼

      if (this.phone.length!=10) {
        alert("請正確輸入手機號");
        return;
      }
      this.sendAuthCode = false;
      this.auth_time = 60;
      var auth_timetimer =  setInterval(()=>{
          this.auth_time--;
          if(this.auth_time<=0){
              this.sendAuthCode = true;
              clearInterval(auth_timetimer);
          }
      }, 1000);
     
      var info="phone="+this.phone;
       console.log(1,info);
       
      this.axios.post("/send_code/",info).then(res => {
        //alert("發訊成功，請注意查收");
      }, err => {
        alert("請稍後再試！")
      })
    },
    submit: function() {//提交表單
      if (this.times.length==0) {
        alert("請勾選護膚預約時間");
        return;
      }
      if (this.phone.length!=10) {
        alert("請正確輸入手機號");
        return;
      }
      if (this.code.length!=4) {
        alert("請正確輸入驗證碼");
        return;
      }

        var info=this.times.join(',') //this.qs.stringify(this.times)
        info='title='+info+'&phone='+this.phone+'&code='+this.code;
        console.log(info);  //return;
        
         this.axios.post("/stores_send/",info).then(res => {
           console.log(res);
           if(res.data.statu==1){
            this.times=[];
            this.phone='';
            this.code='';
            alert("發訊完成");
           }else if(res.data.statu==2){
             alert('驗證碼錯誤');
             this.code='';
           }
          }, err => {
              alert("請稍後再試！")
          })

    
    }
  }
};
</script>

<style scoped>
.p_nav li {
  width: 16.66%;
  float: left;
  padding: 5px 8px 10px 8px;
}
.p_nav li a {
  display: block;
  text-align: center;
  border-radius: 5px;
  background: #dcb6dd;
  color: #91498e;
  font-size: 24px;
  height: 60px;
  line-height: 60px;
  overflow: hidden;
}
.p_nav li a.cur {
  background: #ef7f92;
  color: #fff;
}
.con {
  padding: 10px;
  font-size: 20px;
}
.con ul li {
  margin-bottom: 25px;
}
.left {
  width: 50%;
  padding-right: 25px;
  float: left;
  margin-bottom: 20px;
}
.checkbox {
  margin: 10px 10px 10px 0;
  display: inline-block;
  font-size: 22px;
}

.checkbox input + span {
  width: 20px;
  height: 20px;
  font-size: 14px;
  padding: 0 0 0 3px;
  color: #fff;
  border: solid 1px #91498e;
  display: inline-block;
  position: relative;
}
.checkbox input:checked + span {
  background: #91498e;
}

.right {
  width: 50%;
  float: right;
}
input[type="text"],input[type="number"] {
  border: solid 1px #ffcccc;
  border-radius: 5px;
  width: 100%;
  padding: 5px;
  line-height: 35px;
}

.item {
  padding: 10px 0px;
  font-size: 22px;
}
.item .label {
  width: 120px;
  font-size: 22px;
  line-height: 45px;
  float: left;
  color: #91498e;
}
.item .input {
  margin-left: 120px;
  min-height: 45px;
  line-height: 45px;
}
.sendCode {
  border: 0;
  font-size: 18px;
  color: #fff;
  background: #91498e;
  padding: 10px 10px;
  border-radius: 5px;
}
.sendCode.disabled{
  background: #a59ca5;
}
.submit {
  background: #ef7f92;
  font-size: 24px;
  padding: 5px 20px;
  border-radius: 5px;
  color: #fff;
  border: none;
  margin: 20px auto;
  display: block;
}

@media (max-width: 767px) {
  .p_nav li {
    width: 33.33%;
  }
  .left {
    width: 100%;
    padding-right: 0px;
  }
  .right {
    width: 100%;
    float: none;
  }
}
</style>
