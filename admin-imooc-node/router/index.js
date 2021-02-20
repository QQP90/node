var boom = require('boom')
var express = require('express')
var userRouter = require('./user')
const {CODE_ERROR}=require('../utils/constant')
// 注册路由
const router = express.Router()
router.get('/',(req,res)=>{
    res.send('欢迎您来我家，给钱node')
})
router.use('/user',userRouter)
// router.use可以放函数
router.use((req,res,next)=>{
    next(boom.notFound('接口不存在'))
})

/* 
自定义路由异常中间件
方法参数不能少
方法的必须放在路由最后
*/
router.use((err,req,res,next)=>{
    console.log(err)
    // 信息
    const message = (err&&err.message)||'系统错误'
    // 异常状态吗
    const statusCode  = (err.output&&err.output.statusCode) || 500
    // 异常错误信息
    const errorMsg = (err.output&&err.output.playload&&err.output.playload.error) || err.message
    res.status(statusCode).json({
        code:CODE_ERROR,
        message,
        error:statusCode,
        errorMsg
    })
})
module.exports = router