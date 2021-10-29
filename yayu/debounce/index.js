
const debounce=(fun,wait,immediate)=>{
  var timer=null;
    let firstPerform=true

  return function(){
    const _this=this
    const args=arguments
    clearTimeout(timer)
    // 立即执行
    if(immediate&&firstPerform){
      fun.call(_this,...args)
      firstPerform=false
    }else{
      timer=setTimeout(() => {
      fun.call(_this,...args)
    }, wait);
    }


  }

}
document.getElementById('test').onmousemove =debounce(print,1000,true)
function print(e){
  console.log(e);
  console.log(11111);
}