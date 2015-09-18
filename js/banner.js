/**
 * banner
 * @authors Your Name (you@example.org)
 * @date    2015-09-16 10:31:52
 * @version $Id$
 */
var swicher=function(){
	var init,
	    count=0,
	    cuts=document.querySelectorAll(".swhich"),
	    picts=document.querySelectorAll(".image"),
	    lists=document.querySelectorAll(".Banner .tag li");
	for(var i=0; i<lists.length;i++){
		foo(lists[i],picts[i],i);
	}
	function auto(){
		if(count==lists.lenght-1)
			count=-1;
		count++;
		for (var i = 0; i < lists.length; i++) {
			picts[i].style.z-index=("-1");
		};
        picts[count].style.z-index=("1001");
	}
    function manaul_side(cuts){
    	cuts[0].addEventListener("click",function(){ 
    	    for (var i = 0; i < lists.length;i++) {
        	    picts[i].style.z-index=("-1");
            };
            if(count==0)
            	count=lists.lenght-1;
            picts[--count].style.z-index=("1001");
/*          if(count==lists.lenght-1)
            	count=-1;
            if(count==0)
            	count=lists.lenght-1;
            cuts[0]?picts[--count].style.z-index=("1001"):picts[++count].style.z-index=("1001");
*/
    	})
    	cuts[1].addEventListener("click",function(){ 
    	    for (var i = 0; i < lists.length;i++) {
        	    picts[i].style.z-index=("-1");
            };
            if(count==lists.lenght-1)
            	count=-1;
            picts[++count].style.z-index=("1001");
    	})
        
    }
	function manaul (list,pic,i){
		list.addEventListener("click",function(){
			pic.style.z-index=("1002");
			count=i;
		})
	}
	init=window.setInterval('auto()',3000);
	function clear(){
		window.clearTimeout(init);
	}
	window.onunload=clear;
}();
swicher();