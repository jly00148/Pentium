;(function($){
	var $todoInput = $('#todo-input')
	var $todoItem = $('.todo-item')
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
				console.log(result)
					if(result.code == 1){
						var todoWrap = document.getElementsByClassName('todo-wrap')[0]
						var li = document.createElement('li')
						var $li = $(li)
						$li.addClass('todo-item').data('id', result.id).val('text')
						var domLi = $li[0]
						todoWrap.appendChild(domLi)
				}
			}
		})
	})

	//删除操作
	$('.todo-wrap').on('click','li',function(){
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