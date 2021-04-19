;(function($){
	var $todoInput = $('#todo-input')
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
})(jQuery)