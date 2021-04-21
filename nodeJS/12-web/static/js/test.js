;(function($){
	var $todoInput = $('#todo-input')
	var $todoItem = $('.todo-item')
	var $todoWrap = $('.todo-wrap')
	var $btn = $('#btn')



	$btn.on('click',function(){
		$.ajax({
			url:'/add',
			type:'POST',
			data:JSON.stringify({
				task:$todoInput.val()
			}),
			dataType:'json',
			success:function(result){
					if(result.code == 1){
						var li = document.createElement('li')
						var $li = $(li)
						$li.val(result.task)
						var domLi = $li.get(0)
						console.log(domLi)
						$todoWrap.append('<div></div>')
				}
			}
		})
	})

	//删除操作
	$('.todo-warp').on('click','li',function(){
		var $this = $(this)
		$.ajax({
			url:'/del',
			type:'GET',
			data:{
				id:$this.data('id')
			},
			dataType:'json',
			success:function(result){
				if(result.code == 1){
					$this.remove()
				}
			}
		})
	})
})(jQuery)