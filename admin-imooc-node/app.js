var express = require('express')
var app = express()
var router = require('./router')
// function myLogger(req,res,next){
//     console.log('中间件')
//     next()
// }
// app.use(myLogger)
// app.get('/',(req,res)=>{
//     res.send('hello node')
// })
app.use('/',router)

const serve = app.listen(5000,()=>{
    const {address,port} = serve.address()
    console.log(`HTTP 启动成功 http://${address}:${port}`)
})