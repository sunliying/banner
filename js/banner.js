/**
 * banner
 * @authors Your Name (you@example.org)
 * @date    2015-09-16 10:31:52
 * @version $Id$
 */
var warpper = (function(){
	//获取元素，设置初值；
	var init,
	    count=0,
	    cuts=document.querySelectorAll(".swhich"),
	    picts=document.querySelectorAll(".banner .image"),
	    lists=document.querySelectorAll(".banner .tag li");
	var change=true;
	picts[count].className+=" image_current ";
	lists[count].style.backgroundColor=("blue");
	//设置初始化
	function reset(){
		for (var i = 0; i < picts.length; i++) {
			picts[i].className="image";
			lists[i].style.backgroundColor=("#fff");	                                                
	}
	}
	//在动画进行时加入了一个classname，用来控制按钮
    for(var i=0; i<picts.length;i++){  //直接用i的话不行，必须传入参数，好像i不是固定的
    	(function(j){
    		picts[j].addEventListener("webkitAnimationStart",function(){
				picts[j].className+=" ison ";
			}) ; 
			picts[j].addEventListener("webkitAnimationEnd",function(){
				picts[j].className=picts[j].className.replace(/ison/," ");
			}) ;
    	})(i)
    	      
		manaul(lists[i],picts[i],i);

	}
	//手动操作
	function manaul (list,pic,j){
		list.addEventListener("click",function(){

			if(!(/ison/.test(picts[count].className))){
				window.clearInterval(init);
    			reset();
    			list.style.backgroundColor=("blue");
			    if(j>count){
					picts[count].className+=" image_current_next ";
					pic.className+=" image_next ";	
				}
				else if(j<count){
					picts[count].className+=" image_current_pre ";
					pic.className+=" image_pre ";	
				}else{
				picts[count].className+=" image_current ";
				lists[count].style.backgroundColor=("blue");	
				}
				count=j;
				init=window.setInterval(auto,5000);
    		}
		})
	}
	//设置自动切换
	function auto(){
		if(!(/ison/.test(picts[count].className))){
			reset();
	        picts[count].className+=" image_current_next ";
	        if(++count == picts.length){
	        	count=0;
	        }
	        picts[count].className+=" image_next ";
	        lists[count].style.backgroundColor=("blue");
	       }
	}
	init=window.setInterval(auto,5000);
	//左右两侧的切换
	
	cuts[0].addEventListener("click",function(){ 
		if(!(/ison/.test(picts[count].className))){
				window.clearInterval(init);
    			reset();
    			picts[count].className+=" image_current_pre ";
	            if(--count==-1)
	            	{count=lists.length-1;}
	        	picts[count].className+=" image_pre ";
	            lists[count].style.backgroundColor=("blue");
	            init=window.setInterval(auto,5000);
    	}

	})
	
    cuts[1].addEventListener("click",function(){ 
    	if(!(/ison/.test(picts[count].className))){
    		window.clearInterval(init);
    	    reset();
    	    
    			picts[count].className+=" image_current_next ";
	            if(++count==lists.length)
	            	{count=0;}
	        	picts[count].className+=" image_next ";
	            lists[count].style.backgroundColor=("blue");
				init=window.setInterval(auto,5000);    		
          }  
    	})
    
	//清空自动切换
	function clear(){
		window.clearTimeout(init);
	}
	window.onunload=clear;
})();

