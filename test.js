// const http=require('http')
// const url=require('url')
// const {MongoClient}=require('mongodb')
// const client=new MongoClient('mongodb://127.0.0.1:27017')

// http.createServer((req,res)=>{
//   client.connect(err=>{
//     if(err){
//       console.log(err);
//       return
//     }
//     const db=client.db('lscTest')
//     db.collection('user').find({}).toArray((err,data)=>{
//       // res.write(data)
//       console.log(data);
//       client.close()
//     })

//   })
//   // const path=url.parse(req.url)
//   // if(path==='/favicon.ico'){
//   //   return
//   // }else{
//   //   // res.write('111')
//   // }
//   res.end()
// }).listen(9999) 
const express=require('express')
const app=express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.post('/backend/commonUpload',(req,res)=>{
  console.log(req.body);
    res.end()

})
app.post('/backend/getInfo',(req,res)=>{
  console.log(req.body);
  res.append('content-type','application/json; charset=utf-8')
  res.send(JSON.stringify({
    status:200,
    message:'请求成功',
    data:{
      aaa:2
    }
  })).status(201)
    res.end()
})
app.get('*',(req,res)=>{
  res.json({
    status:404,
    message:'没找到方法'
  }).status(404)
})
app.post('*',(req,res)=>{
  res.writeHead(404)
  res.json({
    status:404,
    message:'没找到方法'
  })
})
app.listen(9999)