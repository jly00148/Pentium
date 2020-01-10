;(function($){

    //生成随机函数
    function getRandom(min,max){
        return parseInt(Math.round(min + (max-min)*Math.random()));
    }

    //设置卡片拖动
    let $wish = $('.wish');
    let $wall = $('.wall');
    $wish.pep({constrainTo:'.wall'});//限制卡片拖动在wall范围之内

    //获取容器和元素wish自身的高度和宽度
    let wishWidth = $wish.width();
    let wishHeight = $wish.height();
    let wallhWidth = $wall.width();
    let wallHeight = $wall.height();

    $wish.each(function(){
        //console.log(this);
        //获取随机数
        let x = getRandom(0,wallhWidth-wishWidth);
        let y = getRandom(0,wallHeight-wishHeight);
        //console.log(x,y)

        $(this).css({
            transform:"matrix("+"1,0,0,1,"+x+","+y+")"//字符串拼接,matrix是一个字符串
        })
    })

})(jQuery);