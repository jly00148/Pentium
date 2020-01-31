;(function($){
    let $login = $('#login');
    let $register = $('#register');
    let $goRegister = $('#go-register');
    let $goLogin = $('#go-login');
    let $subRegister = $('#sub-register');
    let $textDanger = $('.err');

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

        //用户名字母开头，3-6位
        
        var errMsg = '';
        if(!/^[a-z][0-9a-z]{3,6}$/i.test(username)){
            errMsg = '以首字母开头，共4-7位';
            // console.log(errMsg);
            $textDanger.html(errMsg);
        }
        if(!/^\w{3,6}$/i.test(password)){
            errMsg = '密码3-6位';
            // console.log(errMsg);
            $textDanger.html(errMsg);
        }else if(repassword != password){
            errMsg = '两次密码输入不一致';
            console.log(errMsg);
            return;
        }else{
            errMsg = '注册成功';
            $textDanger.html(errMsg);
            $.ajax({

            })
        }
    })
})(jQuery);