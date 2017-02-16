/**
 * Created by Gatsby on 2017/2/15.
 */
module.exports=function(app){
    app.get('/',function(req,res){
        res.redirect('../signin')
    });
    app.use('/signin',require('./signin'));
    app.use('/signup',require('./signup'));
}