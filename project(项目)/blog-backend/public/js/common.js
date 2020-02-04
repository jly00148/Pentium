;(function($){
    let $login = $('#login');
    let $register = $('#register');
    let $goRegister = $('#go-register');
    let $goLogin = $('#go-login');
    let $subRegister = $('#sub-register');
    let $textDanger = $('.err');
    let $loginerr = $('.loginerr');
    let $subLogin = $('#sub-login');
    let $userInfo = $('#user-info');
    let $logOut = $('#logout');

    //切换注册页面
    function toLogin(){
        $login.show();
        $register.hide();
        
    }
    function toRegister(){
        $login.hide();
        $register.show();
    }
    function userInfo(){
        $userInfo.show();
        $login.hide();
    }
    function logOut(){
        $userInfo.hide();
        $login.show();
    }

    $goRegister.on('click',function(){
        $textDanger.html('');
        toRegister();
    })
    $goLogin.on('click',function(){
        $textDanger.html('');
        toLogin();
    })
    $logOut.on('click',function(){
        logOut();
        $textDanger.html('');
    })

    //注册验证逻辑
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
                if(result.status == '1'){
                    $textDanger.html(result.msg);
                }else if(result.status == '2'){
                    $textDanger.html(result.msg);
                    toLogin();

                }
            })
            .fail(function(err){
                $textDanger.html('请求失败,请稍后再试！');
            })
        }
    })


    //登录逻辑
    $subLogin.on('click',function(){
        var username = $register.find('[name="username"]').val();
        var password = $register.find('[name="password"]').val();
        // console.log(username);
        // console.log(password);

        //验证用户名和密码和重复密码
        var errMsg = '';
        if(!/^[a-z][0-9a-z]{3,6}$/i.test(username)){
            errMsg = '以首字母开头，共4-7位';
            $loginerr.html(errMsg);
        }
        else if(!/^\w{3,6}$/i.test(password)){
            errMsg = '密码3-6位';
            $loginerr.html(errMsg);
        }else{
            $.ajax({
                url:'/user/login',
                type:'post',
                dataType:'json',
                data:{
                    username:username,
                    password:password
                }
            })
            .done(function(result){
                if(result.status == 1){
                    $loginerr.html(result.msg);
                }else if(result.status == 2){
                    $loginerr.html(result.msg);
                    userInfo();
                }
            })
            .fail(function(err){
                $textDanger.html('请求失败,请稍后再试！');
            })
        }
    })
})(jQuery);