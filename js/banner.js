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
	picts[count].className+=" image_current ";
	lists[count].style.backgroundColor=("blue");
	//设置初始化
	function reset(){
		for (var i = 0; i < picts.length; i++) {
			picts[i].className="image"
			lists[i].style.backgroundColor=("#fff");
		};
	}
	//设置自动切换
	function auto(){
		reset();
        picts[count].className+=" image_current_next ";
        if(count!=picts.length-1){
        	count++;
        }else{
        	count=0;
        }
        picts[count].className+=" image_next ";
        lists[count].style.backgroundColor=("blue");
	}
	init=window.setInterval(auto,3000);
	//左右两侧的切换
	cuts[0].addEventListener("click",function(){ 
    		window.clearTimeout(init);
    		reset();
			picts[count].className+=" image_current_pre ";
            if(count==0)
            	{count=lists.length-1;}
        	else{ count--;}
        	picts[count].className+=" image_pre ";
            lists[count].style.backgroundColor=("blue");
    	})
    cuts[1].addEventListener("click",function(){ 
    		window.clearTimeout(init);
    	    reset();
            picts[count].className+=" image_current_next ";
            if(count==lists.length-1)
            	{count=0;}
        	else{ count++;}
        	picts[count].className+=" image_next ";
            lists[count].style.backgroundColor=("blue");
    	})
    //手动操作
    for(var i=0; i<lists.length;i++){
		manaul(lists[i],picts[i],i);
	}
	function manaul (list,pic,j){
		list.addEventListener("click",function(){
			window.clearTimeout(init);
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
		})
	}
	//清空自动切换
	function clear(){
		window.clearTimeout(init);
	}
	window.onunload=clear;
})();

