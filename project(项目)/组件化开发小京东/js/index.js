;(function($){
	$('.dropdown').hover(function(){
		$(this).addClass('dropdown-active');
	},function(){
		$(this).removeClass('dropdown-active');
	});
})(jQuery)