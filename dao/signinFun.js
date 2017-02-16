/**
 * Created by Gatsby on 2017/2/15.
 */
var MyTest=require('../lib/mongo').MyTest

module.exports={
    selFun:function(req,res,next){
        var userName=req.body.userName;
        var password=req.body.password;
        jsonInfo={
            status:1,
            info:'登陆成功!'
        }
        try{
            if(userName=='' || password==''){
                throw new Error('用户名或密码不能空')
            }
            if(!(userName.length>=1 && userName.length<=10)){
                throw new Error('名字请限制在1-10个字符')
            }
            if(password.length<6){
                throw new Error('密码不能少于6位')
            }
        }catch(e){
            jsonInfo.status=0;
            jsonInfo.info=e.message;
            return res.json(jsonInfo)
        }

        var user={userName:userName,password:password}
        MyTest.find({userName:userName})
            .then(function(result){
                if(result[0].password==password){
                    console.log('登录成功')
                    res.json(jsonInfo)
                }
                else{
                    jsonInfo.status=0;
                    jsonInfo.info='用户名或密码错误';
                    res.json(jsonInfo)
                }
            })
            .catch(function(e){
                if(e.message.match('Cannot read property')){
                    jsonInfo.status=0;
                    jsonInfo.info='没有此用户，请先注册'
                    res.json(jsonInfo)
                }
            })
    }
}