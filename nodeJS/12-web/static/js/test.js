;(function($){
	var $todoInput = $('#todo-input')
	var $todoItem = $('.todo-item')

	$todoInput.on('keydown',function(ev){
		if(ev.keyCode == 13){
			$.ajax({
				url:'/add?text=123',
				type:'POST',
				data:{
					task:$todoInput.val()
				},
				dataType:'json',
				success:function(result){
					console.log(result)
				}
			})
		}
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