handCraousel();
topAdvertise();
handInput();
cancelKeyWord();
countDown();
handListContent();
handScrollNew();
opanAndClose();
topFasten();
handTopFasten();
handPlay();
handPlayContent();
handItem();
//轮播图
function handCraousel(){
		var aImg = document.querySelectorAll('.carousel-imgs-item');
		var oLeftArrow = document.querySelector('.left-arrow');
		var oRightArrow = document.querySelector('.right-arrow');
		var aBtn = document.querySelector('.carousel-btn').children;
		var oCarousel = document.querySelector('.carousel');
		/*console.log(aImg);
		console.log(oLeftArrow);
		console.log(oRightArrow);
		console.log(aBtn);
		console.log(oCarousel);*/
		var now = -1;
		function tab(){
		 	for(var i = 0; i<aImg.length;i++){
		 		aImg[i].style.zIndex = '0';
		 		aBtn[i].className = '';
		 		aImg[i].style.opacity = '0';
		 	}
		 	aImg[now].style.zIndex = '99';
		 	aImg[now].style.opacity = '1';
		 	aBtn[now].className = 'active';	 	
		}
		oRightArrow.onclick = function(){
		 	now++;
		 	if(now >= aImg.length){
		 		now = 0;
		 	}
		 	tab();
		}
		oLeftArrow.onclick = function(){
		 	now--;
		 	if(now<0){
		 		now = aImg.length-1;
		 	}
		 	tab();
		}
		for(var i = 0;i<aBtn.length;i++){
		 	aBtn[i].index = i;
		 	aBtn[i].onmouseover = function(){
		 		now = this.index;
		 		tab();
		 	}
		}
		timer = setInterval(oRightArrow.onclick,2000);
		oCarousel.onmouseover = function(){
			oLeftArrow.style.display = 'block';
			oRightArrow.style.display = 'block';
		 	clearInterval(timer);
		}
		oCarousel.onmouseout = function(){
			oLeftArrow.style.display = 'none';
			oRightArrow.style.display = 'none';
		 	timer = setInterval(oRightArrow.onclick,2000);
		}
}
//开启关闭顶部广告
function topAdvertise(){
		var oCancel = document.querySelector('.cancel');
		var oShow = document.querySelector('.show');
		var topImg = document.querySelector('.top-img');
		/*console.log(oCancel);
		console.log(oShow);
		console.log(topImg);*/
		oCancel.onclick = function(){
			topImg.style.height = '0px';
			this.style.display = 'none';
			oShow.style.display = 'block';
		}
		oShow.onclick = function(){
			topImg.style.height = '100px';
			this.style.display = 'none';
			oCancel.style.display = 'block';
		}
}
//input框控制
function handInput(){
		var oInputBox = document.querySelector('.input-box');
		var oSearchHotWord = document.querySelector('.search-hot-words');
		var oKeyWord = document.querySelector('.keyword');
		var oCancelKeyword = document.querySelector('.cancel-keyword');
		oInputBox.addEventListener('click',function(event){
			oSearchHotWord.style.display = "none";
			oKeyWord.style.display = "block";
			this.focus();
			oCancelKeyword.style.display = "block";
			event.stopPropagation();
		},false)
		oSearchHotWord.addEventListener('click',function(event){
			this.style.display = "none";
			oInputBox.focus();
			oKeyWord.style.display = "block";
			oCancelKeyword.style.display = "block";
			event.stopPropagation();
		},false)
		document.addEventListener('click',function(event){
			oKeyWord.style.display = "none";
			oSearchHotWord.style.display = "block";
			event.stopPropagation();
		},false)
		oKeyWord.addEventListener('click',function(event){
			event.stopPropagation();
		},false);
}
//取消关键字框
function cancelKeyWord(){
	var oCancelKeyword = document.querySelector('.cancel-keyword');
	var oKeyWord = document.querySelector('.keyword');
	/*console.log(oCancelKeyword);*/
	oCancelKeyword.onclick = function(){
		this.style.display = "none";
		oKeyWord.style.display = "none";
	}
}
//倒计时
function countDown(){
	var oTimer = document.getElementById('countdown');
	var endDate = new Date('2019-2-22 20:30:56');
	var endTimes = endDate.getTime();
	var timer = 0;
	function to2Str(num){
		return num < 10 ? '0'+num : ''+num;
	}
	function handleTimer(){
		var allMinSeconds = endTimes - Date.now();
		if(allMinSeconds<= 0){
			allMinSeconds = 0;
			clearInterval(timer);
		}
		var allSeconds = parseInt(allMinSeconds/1000);
		var iHour = parseInt(allSeconds / 3600);
		var iMinute = parseInt(allSeconds % 3600 / 60);
		var iSecond = (allSeconds % 3600)%60;
		oTimer.innerHTML = '距离下场' + to2Str(iHour) + ':' + to2Str(iMinute) + ':' + to2Str(iSecond);
	}
	timer = setInterval(handleTimer,1000);
	handleTimer();
}
//选项卡
function handListContent(){
	var aBtn = document.querySelectorAll('.hot-goods .part1 .flash-sale .tab-list ul li');
	var aContent =document.querySelectorAll('.hot-goods .part1 .flash-sale .sale-box div');
	/*console.log(aBtn);
	console.log(aContent);*/
	for(var i = 0;i < aBtn.length;i++){
		aBtn[i].index = i;
		aBtn[i].onmouseover = function(){
			for(var j = 0;j < aBtn.length;j++){
				aBtn[j].className = '';
				aContent[j].style.display = 'none';
			}
			this.className = 'active';
			aContent[this.index].style.display = 'block';
		}
	}
}
//滚动新闻
function handScrollNew(){
   //document.getElementById()的最简化应用
    function $(element){
        if(arguments.length>1){
            for(var i=0,length=arguments.length,elements=[];i<length;i++){
                elements.push($(arguments[i]));
            }
            return elements;
        }
        if(typeof element=="string"){
            return document.getElementById(element);
        }else{
            return element;
        }
    }
    //类创建函数
    var Class={
        create:function(){
            return function(){
                this.initialize.apply(this,arguments);
            }
        }
    }
    //对象属性方法扩展
    Function.prototype.bind=function(object){
        var method=this;
        return function(){
            method.apply(object,arguments);
        }
    }
    var Scroll=Class.create();
    Scroll.prototype={
        //第一个参数定义要滚动的区域,第二个参数定义每次滚动的高度
        initialize:function(element,height,delay,speed){
            this.element=$(element);
            this.element.innerHTML+=this.element.innerHTML;
            this.height=height;
            this.delay=delay*1000;
            this.speed=speed;
            this.maxHeight=this.element.scrollHeight/2;
            this.counter=0;
            this.scroll();
            this.timer="";
            this.element.onmouseover=this.stop.bind(this);
            this.element.onmouseout=function(){this.timer=setTimeout(this.scroll.bind(this),1000);}.bind(this);
        },
        scroll:function(){
            if(this.element.scrollTop<this.maxHeight){
                this.element.scrollTop++;
                this.counter++;
            }else{
                this.element.scrollTop=0;
                this.counter=0;
            }
                    
            if(this.counter<this.height){
                this.timer=setTimeout(this.scroll.bind(this),this.speed);
            }else{
                this.counter=0;
                this.timer=setTimeout(this.scroll.bind(this),this.delay);
            }
        },
        stop:function(){
            clearTimeout(this.timer);
        }
    }
     new Scroll('a', 167,2,5)	
}
//打开关闭福利社
function opanAndClose(){
	var oFls = document.querySelector('.fls');
	var oOpen = document .querySelector('.fls .fls-open');
	var oClose = document .querySelector('.fls .fls-close');
	var oFlsBottom = document.querySelector('.fls-bottom');
	/*console.log(oClose);
	console.log(oFls);*/
	oOpen.onclick = function(){
		oFls.style.height = '570px';
		this.style.display = "none";
		oClose.style.display = "block";
		oFlsBottom.style.height = "500px";
	}
	oClose.onclick = function(){
		oFls.style.height = '70px';
		this.style.display = "none";
		oOpen.style.display = "block";
		oFlsBottom.style.height = "0px";
	}
}
//顶部固定样式
function topFasten(){
	var oInputBox = document.querySelector('#topFaste .topFaste-box .search-box .g-srarch .search-left .input-box');
	var oSearchHotWord = document.querySelector('#topFaste .topFaste-box .search-box .g-srarch .search-hot-words');
	var oKeyWord = document.querySelector('#topFaste .topFaste-box .search-box .g-srarch .keyword');
	var oCancelKeyword = document.querySelector('#topFaste .topFaste-box .search-box .g-srarch .keyword .keyword-right .cancel-keyword');
	oInputBox.addEventListener('click',function(event){
		oSearchHotWord.style.display = "none";
		oKeyWord.style.display = "block";
		this.focus();
		oCancelKeyword.style.display = "block";
		event.stopPropagation();
	},false)
	oSearchHotWord.addEventListener('click',function(event){
		this.style.display = "none";
		oInputBox.focus();
		oKeyWord.style.display = "block";
		oCancelKeyword.style.display = "block";
		event.stopPropagation();
	},false)
	document.addEventListener('click',function(event){
		oKeyWord.style.display = "none";
		oSearchHotWord.style.display = "block";
		event.stopPropagation();
	},false)
	oKeyWord.addEventListener('click',function(event){
		event.stopPropagation();
	},false);
	oCancelKeyword.addEventListener('click',function(){
		oKeyWord.style.display = "none";
		this.style.display = "none";
	},false)
}
//顶部固定
function handTopFasten(){
	var oTopFaste = document.getElementById('topFaste');
	/*var getScrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;*/
	/*console.log(oTopFaste);*/
	var isShow = false;
	window.onscroll = function(){
		/*alert('a');*/
		if(getScrollTop() >= 1200){
			if(!isShow){
				animate(oTopFaste,{'height':50});	
				isShow = true;
			 }
		 }else{
			 if(isShow){
				animate(oTopFaste,{'height':0});
				 isShow = false;
			 }
		 }
	}
}
//控制视频
function handPlay(){
	var oBigPlay = document.querySelector('.add-floor .add-floor-box .box-top ul .video .video-left ul li a .play');
	var oBigPlayColor = document.querySelector('.add-floor .add-floor-box .box-top ul .video .video-left ul li a .play-color');
	var oBigRightPlay = document.querySelector('.video-right div a .play');
	var oBigrightPlayColor = document.querySelector('.video-right div a .play-color');
	oBigPlay.onmouseover = function(event){
		this.style.display = "none";
		oBigPlayColor.style.display = "block";
		event.stopPropagation();
	}
	oBigPlay.onmouseout = function(event){
		this.style.display = "block";
		oBigPlayColor.style.display = "none";
		event.stopPropagation();
	}
	oBigRightPlay.onmouseover = function(event){
		this.style.display = "none";
		oBigrightPlayColor.style.display = "block";
		event.stopPropagation();
	}
	oBigRightPlay.onmouseout = function(event){
		this.style.display = "block";
		oBigrightPlayColor.style.display = "none";
		event.stopPropagation();
	}
}
//控制视频选项
function handPlayContent(){
	var aContent = document.querySelectorAll('.add-floor .add-floor-box .box-top .box-top-father .video .video-left ul li');
	var  aBtn = document.querySelectorAll('.add-floor .add-floor-box .box-top .box-top-father .video .video-right div');
	/*console.log(aBtn);
	console.log(aContent);*/
	for(var i = 0;i < aBtn.length;i++){
		aBtn[i].index = i;
		aBtn[i].onmouseover = function(){
			for(var j = 0;j < aBtn.length;j++){
				aBtn[j].className = '';
				aContent[j].style.display = 'none';
			}
			this.className = 'active';
			aContent[this.index].style.display = 'block';
		}
	}
}
//分类面板处理
function handItem(){
	var aCateItem = document.querySelectorAll('.home .home-left .left-menu ul .home-left-item');
	var oCateContent = document.querySelector('.home .home-left .home-left-content');
	var oCateBox = document.querySelector('.home .home-left .left-menu-box');
	var oWard = document.querySelectorAll('.home .home-left .left-menu ul .home-left-item a');
	/*console.log(oWard);*/
	/*console.log(aCateItem);*/
	/*console.log(oCateContent);*/
	for(var i = 0;i<aCateItem.length;i++){
		aCateItem[i].index = i;
		aCateItem[i].onmouseenter = function(){
			for(var j = 0;j<aCateItem.length;j++){
				aCateItem[j].className = 'home-left-item';
			}
			oCateContent.style.display = "block";
			this.className = 'home-left-item a active';
			loadDate(this.index);
		}
	}
	oCateBox.onmouseleave = function(){
		oCateContent.style.display = "none";
		for(var j = 0;j<aCateItem.length;j++){
			aCateItem[j].className = 'home-left-item';
		}
	}
	function loadDate(index){
		var data = aCateItemDate[index];
		/*console.log(data);*/
		var html = '<ul>';
		for(var i = 0;i<data.length;i++){
			html+='<li>';
			html+='<a href="'+data[i].url+'">';
			html+=	  '<span>'+data[i].name+'</span>';
			html+='</a>';
			html+='</li>';
		}
		html += '</ul>';
		oCateContent.innerHTML = html;
	}
}