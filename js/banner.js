/**
 * banner
 * @authors Your Name (you@example.org)
 * @date    2015-09-16 10:31:52
 * @version $Id$
 */
var warpper = (function(){

	var init,
	    count=0,
	    cuts=document.querySelectorAll(".swhich"),
	    picts=document.querySelectorAll(".banner .image"),
	    lists=document.querySelectorAll(".banner .tag li");
	for(var i=0; i<lists.length;i++){
		manaul(lists[i],picts[i],i);
	}
	function auto(){
			
		for (var i = 0; i < lists.length; i++) {
			picts[i].style.zIndex=("-1");
			lists[i].style.backgroundColor=("#fff");
		};
        picts[count].style.zIndex=("1001");
        lists[count].style.backgroundColor=("blue");
       if(count==lists.length-1){
				count=-1;
		}
		count += 1;		
	}
	cuts[0].addEventListener("click",function(){ 
    		//window.clearTimeout(auto);
    	    for (var i = 0; i < lists.length;i++) {
        	    picts[i].style.zIndex=("-1");
        	    lists[i].style.backgroundColor=("#fff");
            };
            if(count==0)
            	count=lists.length;
            picts[--count].style.zIndex=("1001");
            lists[count].style.backgroundColor=("blue");
    	})
    cuts[1].addEventListener("click",function(){ 
    		//window.clearTimeout(auto);
    	    for (var i = 0; i < lists.length;i++) {
        	    picts[i].style.zIndex=("-1");
        	    lists[i].style.backgroundColor=("#fff");
            };
            if(count==lists.length-1)
            	count=-1; 
            picts[++count].style.zIndex=("1001");
            lists[count].style.backgroundColor=("blue");
    	})
    	
	function manaul (list,pic,j){
		list.addEventListener("click",function(){
			//window.clearTimeout(auto);
			for (var i = 0; i < lists.length; i++) {
			picts[i].style.zIndex=("-1");
			lists[i].style.backgroundColor=("#fff");
		};
		    list.style.backgroundColor=("blue");
			pic.style.zIndex=("1001");
			
			count=j;
		})
	}
	init=window.setInterval(auto,3000);
	function clear(){
		window.clearTimeout(init);
	}
	window.onunload=clear;
})();

