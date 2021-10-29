
// // 定时器形式
// const throttle=(fun,wait)=>{
//   let timer=null
//   return function(){
//     const _this=this
//     let arg=arguments
//     if(!timer){
//       timer=setTimeout(() => {
//         timer=null
//         fun.apply(_this,arg)
//       }, wait);
//     }
//   }
// }
// 时间戳形式
const throttle=(fun,wait)=>{
  let previous=0
  return function(){
    const _this=this
    let arg=arguments
    const now=+new Date()
    if(now - previous > wait){
      fun.apply(_this,arg)
      previous=now
    }
  }
}
document.getElementById('test').onmousemove =throttle(print,1000,true)
function print(e){
  console.log(e);
  console.log(11111);
}

