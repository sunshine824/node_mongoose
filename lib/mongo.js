/**
 * Created by Gatsby on 2017/2/15.
 */
var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/test')
var db=mongoose.connection

db.on('error',console.error.bind(console,'连接出错'));
db.once('open',function(){
    console.log('打开记录')
})//第一次打开记录

var MyTestSchema=new mongoose.Schema({
    userName:String,
    password:String
})

var MyTest=db.model('Mytest',MyTestSchema,'Mytest');


module.exports.MyTest=MyTest;