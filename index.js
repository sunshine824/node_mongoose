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

//����ģ��Ŀ¼
app.set('views',path.join(__dirname,'views'))
//����ģ������Ϊejs
app.set('view engine','ejs');
//���þ�̬�ļ�Ŀ¼
app.use(express.static(path.join(__dirname,'public')));

//·��
routes(app)

app.listen(8080)