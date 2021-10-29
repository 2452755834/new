<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <el-upload :http-request="upload"  action="">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <div style="height:500px">
     <!-- <code-diff outputFormat="side-by-side" :old-string="oldStr" :new-string="newStr" :context="10" /> -->
      <iframe id="testIframe" src="https://das.base.shuju.aliyun.com/token3rd/dashboard/view/pc.htm?pageId=aa7175dc-318b-40e1-9c0b-4811dfa5e149&accessToken=d08bc0c53dd6777461f520876beaf5ca"
      scrolling="no" 
      frameborder="0" 
      width="100%" 
     
      ></iframe>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import $ from 'jquery'
const jsDiff = require('diff');
// import HelloWorld from './components/HelloWorld.vue'
import CodeDiff from 'vue-code-diff'
import serviceApi from './service/home'
export default {
  name: 'App',
  components: {
    CodeDiff
    // HelloWorld
  },
  mounted() {
//     $.ajax({
//     url: 'https://das.base.shuju.aliyun.com/api/ac3rdservice/token.json?accessId=a03cb6ec-ce20-4c4d-a03a-514de3f169d8&accessKey=73089f80-0a4b-4e81-894e-f50076e2e771&aliyunId=阿li云datav&validityTime=60',
//     type: 'get',
//     dataType: 'jsonp',  // 请求方式为jsonp
//     jsonpCallback: "handleCallback",    // 自定义回调函数名
//     data: {}
// });
      const quickBIURL = ['https://das.base.shuju.aliyun.com', 'https://bi.aliyun.com'];
      function messageListener(event) {
        if (quickBIURL.includes(event.origin)) {
          document.getElementById('testIframe').height= event.data.height
          // 使用postMessage传出的高度
          console.log('Quick BI Dashboard Height:', event.data.height);
          // 使用postMessage传出的仪表板页面ID
          console.log('Quick BI Dashboard Id:', event.data.pageId);
         
        }
      }
      // 在仪表板加载之前进行监听
      window.addEventListener('message', messageListener);
  },
  methods: {
    async aaa() {
      return new Promise(() => {
        setTimeout(() => {
          return 1
        }, 1000)
      })
    },
    getData(){
      console.log(serviceApi.getUserInfo);
      serviceApi.getUserInfo({zzz:123})
      // const xhr=new XMLHttpRequest()
      // xhr.open('get','http://localhost:8080/service/getInfo')
      // xhr.send()
    },
     /*
      *@Description: 上传文件
      *@author: 卢少川 
      *@Date: 2021-09-27 11:03:03
      */
     upload(data){
       const formData=new FormData()
       formData.append('file',data.file)
        // const loading = this.$loading({
        //   lock: true,
        //   text: 'Loading',
        //   spinner: 'el-icon-loading',
        //   background: 'rgba(0, 0, 0, 0.7)'
        // });
       serviceApi.commonUpload(formData).then(res=>{
         console.log(res);
          // loading.close()

       })
       console.log(data,11);
     }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
