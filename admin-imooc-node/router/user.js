const express = require('express')
const router = express.Router()
router.get('/info',(req,res,next)=>{
    res.json('user info...')
next()
})
module.exports=router