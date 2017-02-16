/**
 * Created by Gatsby on 2017/2/15.
 */
var MyTest=require('../lib/mongo').MyTest

module.exports={
    insertFun:function(req,res,next){
        var userName=req.body.userName
        var password=req.body.password
        jsonInfo={
            status:0,
            info:'操作失败！'
        }
        try{
            if(userName==''&&password==''){
                throw new Error('用户名或密码不能为空')
            }
            if(!(userName.length>=1 && userName.length<=10)){
                throw new Error('名字请限制在1-10个字符')
            }
            if(password.length<6){
                throw new Error('密码至少6个字符')
            }
        }catch(e){
            jsonInfo.info= e.message;
            return res.json(jsonInfo)
        }

        var user={userName:userName,password:password}

            MyTest.create(user)
                .then(function(result){
                    jsonInfo.status=1
                    jsonInfo.info='注册成功！'
                    res.json(jsonInfo)
                })
                .catch(function(e){
                    if(e.message.match('E11000 duplicate key')){
                        jsonInfo.status=0
                        jsonInfo.info='用户名已被占用'
                        res.json(jsonInfo)
                    }
                })
        }
}