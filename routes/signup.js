/**
 * Created by Gatsby on 2017/2/15.
 */
var path=require('path')
var express=require('express')
var router=express.Router()

var signupFun=require('../dao/signupFun')

router.get('/',function(req,res,next){
    res.render('reg')
})

router.post('/',function(req,res,next){
    signupFun.insertFun(req,res,next)
})

module.exports=router;