/**
 * Created by Gatsby on 2017/2/15.
 */
var path=require('path')
var express=require('express');
var routes=require('./routes/router')
var bodyParser=require('body-parser')
var app=express()

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//设置模板目录
app.set('views',path.join(__dirname,'views'))
//设置模板引擎为ejs
app.set('view engine','ejs');
//设置静态文件目录
app.use(express.static(path.join(__dirname,'public')));

//路由
routes(app)

app.listen(8080)