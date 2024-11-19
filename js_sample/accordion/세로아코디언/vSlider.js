// JavaScript Document
$(document).ready(function(){
    var timeonoff;
    var imageCount=5;  
    var cnt=1;		
	
   function move_gallery(){
	     cnt++;
	  
	  if(cnt==1){
		 $('.enjoy_content .enjoy_img02').animate({top:[160,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img03').animate({top:[190,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img04').animate({top:[220,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img05').animate({top:[250,'easeOutQuad']},250).clearQueue();
	  }else if(cnt==2){
		 $('.enjoy_content .enjoy_img02').animate({top:[30,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img03').animate({top:[190,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img04').animate({top:[220,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img05').animate({top:[250,'easeOutQuad']},250).clearQueue();
	  }else if(cnt==3){
		 $('.enjoy_content .enjoy_img02').animate({top:[30,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img03').animate({top:[60,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img04').animate({top:[220,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img05').animate({top:[250,'easeOutQuad']},250).clearQueue();
	  }else if(cnt==4){
		 $('.enjoy_content .enjoy_img02').animate({top:[30,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img03').animate({top:[60,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img04').animate({top:[90,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img05').animate({top:[250,'easeOutQuad']},250).clearQueue();
		  	   
	  }else if(cnt==5){
		  $('.enjoy_content .enjoy_img02').animate({top:[30,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img03').animate({top:[60,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img04').animate({top:[90,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img05').animate({top:[120,'easeOutQuad']},250).clearQueue();
		  	   
	  }
	  
	   if(cnt==imageCount)cnt=0;
       }
	
      timeonoff= setInterval(move_gallery, 4000);
 


  $('.enjoy_content ul li span').mouseenter(function(event){
      var $target=$(event.target);
	   clearInterval(timeonoff);
	   
	 if($target.is('.enjoy_content .enjoy_t1')){
		 $('.enjoy_content .enjoy_img02').animate({top:[160,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img03').animate({top:[190,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img04').animate({top:[220,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img05').animate({top:[250,'easeOutQuad']},250).clearQueue();
	     cnt=1;
	 }else if($target.is('.enjoy_content .enjoy_t2')){
		 $('.enjoy_content .enjoy_img02').animate({top:[30,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img03').animate({top:[190,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img04').animate({top:[220,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img05').animate({top:[250,'easeOutQuad']},250).clearQueue();
	      cnt=2;
	 }else if($target.is('.enjoy_content .enjoy_t3')){
		 $('.enjoy_content .enjoy_img02').animate({top:[30,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img03').animate({top:[60,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img04').animate({top:[220,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img05').animate({top:[250,'easeOutQuad']},250).clearQueue();
	      cnt=3;
	 }else if($target.is('.enjoy_content .enjoy_t4')){
		 $('.enjoy_content .enjoy_img02').animate({top:[30,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img03').animate({top:[60,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img04').animate({top:[90,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img05').animate({top:[250,'easeOutQuad']},250).clearQueue();
	      cnt=4;
	 }else if($target.is('.enjoy_content .enjoy_t5')){
		 $('.enjoy_content .enjoy_img02').animate({top:[30,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img03').animate({top:[60,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img04').animate({top:[90,'easeOutQuad']},250).clearQueue();
		 $('.enjoy_content .enjoy_img05').animate({top:[120,'easeOutQuad']},250).clearQueue();
	      cnt=0;
	 }
	 timeonoff= setInterval(move_gallery, 4000);
 });
});