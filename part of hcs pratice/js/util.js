function animate(obj,attr,target){
	var isPeed = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var current = parseFloat(getComputedStyle(obj,false)[attr]);
		if(attr == 'opacity'){
			current = current * 100;
		}
		if(current < target){
			isPeed = 5;
		}else{
			isPeed = -5;
		};
		if(Math.abs(target - current) < Math.abs(isPeed)){
			if(attr == 'opacity'){
				obj.style.opacity = target / 100;
			}else{
				obj.style[attr] = target + 'px';				
			}
			clearInterval(obj.timer);				
		}else{
			if(attr == 'opacity'){
				obj.style.opacity = (current + isPeed) / 100;
			}else{
				obj.style[attr] = current + isPeed + 'px';
			}
		}
	},10)		
}
 function getScrollTop(){
 	return window.pageYOffset || document.documentElement.scrollTop;
 }