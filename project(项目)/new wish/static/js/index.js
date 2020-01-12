;(function($){

    //生成随机函数
    function getRandom(min,max){
        return parseInt(Math.round(min + (max-min)*Math.random()));
    }

    //设置卡片拖动
    let $wish = $('.wish');
    let $wall = $('.wall');

    //封装拖动函数
    function drop(target){
        target.pep({constrainTo:'.wall'});//限制卡片拖动在wall范围之内

    }
    drop($wish);

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
        $(this).hover(function(){
            //console.log(this)
            $(this).css({
                zIndex:999
            })
        },function(){
            $(this).css({
                zIndex:0
            })
        })
    })
    
    
    let $btn = $('.sub-btn');


    $btn.on('click',()=>{
        $.ajax({
            url:'/add',
            type:'post',
            dataType:'json',
            data:{
                content:$('#content').val()
            }
        })
        .done(function(result){
            /*
            console.log('result:::::',result);
            var  result = JSON.parse(result);
            if(result.status == 0){
                var $dom = $(`<div class="wish" style="background: ${result.data.color}">
                <a href="javascript:;" class="close" data-id='${result.data.id}'></a>
                ${result.data.content}
            </div>`)                
                $wall.append($dom);
                $('#content').val('');
            }else{
                alert(result.message);
            }
            */

            //console.log(result.data.length);
            var i = result.data.length;
           if(result.status == 1){
                var $dom = $(`<div class="wish" style="background: ${result.data[i-1].color}">
                <a href="javascript:;" class="close" data-id='${result.data[i-1].id}'></a>
                ${result.data[i-1].content}
                </div>`)                
                $wall.append($dom);
                $('#content').val('');
                drop($dom);

           }else{
               console.log(result.message);
           }

        })
    })

})(jQuery);