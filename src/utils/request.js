import axios from "axios";
const service = axios.create({
  baseURL: 'http://localhost:8080/service/',
  timeout: 10000,

})
service.interceptors.request.use(config => {
  console.log(config);
})
export default service
