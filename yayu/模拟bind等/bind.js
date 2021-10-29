 /*
  *@Description: 
  思路：
  bar.call(foo)
  1.call改变了this指向，指向foo
  2.bar函数被执行
  因此可以将foo修改为
  foo={
    bar:function(){}
  }
  执行foo.bar
  进阶：{
    call可以传参
    this 参数可以传 null，当为 null 的时候，视为指向 window
  }
  之后删除方法
  *@author: 卢少川 
  *@Date: 2021-10-14 11:03:03
  */
var value=5
Function.prototype.myCall=function(context){
  const _context=context||window
  _context.fn=this
  _context.fn(...[...arguments].slice(1))
  delete _context.fn
}
function bar(a){
  console.log(this.value,a);
}
const foo={
  value:1
}
bar.myCall(null,2)



 /*
  *@Description: 
  bind 函数的两个特点：{
    返回一个函数
    可以传入参数
  }
  *@author: 卢少川 
  *@Date: 2021-10-14 11:49:12
  */
 Function.prototype.myBind=function(context){
   const self=this
   const arg=Array.prototype.slice.call(arguments,1)
    return function(){
      const _arg=[...arguments]
      self.apply(context,arg.concat(_arg))
    }
 }