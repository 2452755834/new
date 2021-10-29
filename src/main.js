import Vue from 'vue'
import App from './App.vue'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './utils/index'
import router from './router/index'
Vue.config.productionTip = false
Vue.use(elementUi)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
console.log(process.env, 123);
switch (process.env.VUE_APP_GLOBAL_CONFIG) {
  case 'dev':
    require('../public/sso')
    break;
  case 'test':
    require('../public/testSso')
    break;
  default:
    break;
}
// import '../public/sso'

console.log(window.syncProjectProperties);
window.aaa = process.env.VUE_APP_BASE_URL
// var text1=document.getElementById('text1')
// var text2=document.getElementById('text2')
// text1.onmousemove=function(){
//   text2.onscroll=null

//   text1.onscroll=function(){
//     text2.scrollTop=text1.scrollTop
//   }
// }
// text2.onmouseenter=function(){
//   text1.onscroll=null
//   text2.onscroll=function(){
//     text1.scrollTop=text2.scrollTop
//   }
// }

