const arr=[1,'1',1,'1']
const result=[]
for (let i=0; i < arr.length; i++) {
  for (let j=0; j < result.length; j++) {
    // arr[i]===result[j]?'':result.push(arr[i])
  // result.includes(arr[i])?'':result.push(arr[i])

}
  result.includes(arr[i])?'':result.push(arr[i])
    
  }
// }
console.log(result);

// // 实现a===1 a===2 a===3条件都成立
// var a ={
//   x:1,
//   valueOf(){
//     return this.x++ 
//   }
// }
// if (a == 1 && a == 2 && a == 3) {
//   console.log('hello world!');
// }