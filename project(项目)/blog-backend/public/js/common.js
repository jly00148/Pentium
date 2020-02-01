;(function($){
    let $login = $('#login');
    let $register = $('#register');
    let $goRegister = $('#go-register');
    let $goLogin = $('#go-login');
    let $subRegister = $('#sub-register');
    let $textDanger = $('.err');

    //切换注册页面
    $goRegister.on('click',function(){
        $login.hide();
        $register.show();
    })
    $goLogin.on('click',function(){
        $login.show();
        $register.hide();
    })


    $subRegister.on('click',function(){
        var username = $register.find('[name="username"]').val();
        var password = $register.find('[name="password"]').val();
        var repassword = $register.find('[name="repassword"]').val();
        
        //验证用户名和密码和重复密码
        var errMsg = '';
        if(!/^[a-z][0-9a-z]{3,6}$/i.test(username)){
            errMsg = '以首字母开头，共4-7位';
            $textDanger.html(errMsg);
        }
        else if(!/^\w{3,6}$/i.test(password)){
            errMsg = '密码3-6位';
            $textDanger.html(errMsg);
        }else if(repassword != password){
            errMsg = '两次密码输入不一致';
            $textDanger.html(errMsg);
            return;
        }else{
            $textDanger.html(errMsg);
            $.ajax({
                url:'/user/register',
                type:'post',
                dataType:'json',
                data:{
                    username:username,
                    password:password
                }
            })
            .done(function(result){
                // console.log(result);
                if(result.status == 1){
                    $textDanger.html(result.msg);
                }
            })
            .fail(function(err){
                $textDanger.html('请求失败,请稍后再试！');
            })
        }
    })
})(jQuery);