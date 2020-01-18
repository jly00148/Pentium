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
    //获取容器和元素wish自身的高度和宽度
    let wishWidth = target.width();
    let wishHeight = target.height();
    let wallhWidth = $wall.width();
    let wallHeight = $wall.height();

    target.each(function(){
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

    }
    drop($wish);


    
    
    let $btn = $('.sub-btn');


    $btn.on('click',()=>{
        if($('#content').val() == '' || $('#content').val() == ' '){
            alert('请输入愿望');
            return
        }else{
            $.ajax({
                url:'Wish/add',
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
        }

    })



    $wall.on('click','.close',function(){
       // console.log(this); a标签
        //console.log(this.id)
        let $this = $(this);
        $.ajax({
            url:'Wish/del/'+ $this.data('id'),
            dataType:'json'
            // data:'id='+$this.data('id')
        })
        .done(function(result){
            if(result.status == 1){
                //console.log(result);
                //console.log(this); a标签的

            this.parentNode.remove();// js语法

                $()

            }else{
               // console.log(result.message);
            }
        }.bind(this))
    })

})(jQuery);