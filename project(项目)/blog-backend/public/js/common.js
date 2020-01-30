;(function($){
    let $login = $('#login');
    let $register = $('#register');
    let $goRegister = $('#go-register');
    let $goLogin = $('#go-login');

    $goRegister.on('click',function(){
        $login.hide();
        $register.show();
    })

    $goLogin.on('click',function(){
        $login.show();
        $register.hide();
    })    
})(jQuery);