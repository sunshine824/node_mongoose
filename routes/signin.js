/**
 * Created by Gatsby on 2017/2/15.
 */
var express=require('express');
var path=require('path')
var router=express.Router();
var signupFun=require('../dao/signinFun')


router.get('/',function(req,res,next){
    res.render('login')
})

router.post('/',function(req,res,next){
    signupFun.selFun(req,res,next)
})

module.exports=router;