import  request  from "./request.js";
const  service={
  getUserInfo(data){
    return request({url:'getInfo',data})
  },
  commonUpload(data){
    return request({url:'commonUpload',responseType:'stream',data:data})

  }
}
export default service