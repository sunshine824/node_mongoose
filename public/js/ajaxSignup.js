/**
 * Created by Gatsby on 2017/2/15.
 */
$('#btn').click(function(){
    var userName=$('#userName').val()
    var password=$('#password').val()
    dataLsist={userName:userName,password:password}
    $.ajax({
        url:'/signup',
        type:'post',
        data:dataLsist,
        async:false,
        dataType:'json',
        success:function(data){
            console.log(data)
        }
    })
})