$(document).ready(function(){
   /*  자동기능....

       var timeonoff;
        var imageCount=4;  
        var cnt=1;		
	
        function move_gallery(){
	     cnt++;
	  
	  if(cnt==1){
		   $('.eventSlideMenu .img02').animate({left:[350,'easeOutQuad']},450).clearQueue();
	       $('.eventSlideMenu .img03').animate({left:[400,'easeOutQuad']},450).clearQueue();
	       $('.eventSlideMenu .img04').animate({left:[450,'easeOutQuad']},450).clearQueue(); 
	  }else if(cnt==2){
		  $('.eventSlideMenu .img02').animate({left:[50,'easeOutQuad']},450).clearQueue();
	       $('.eventSlideMenu .img03').animate({left:[400,'easeOutQuad']},450).clearQueue();
	       $('.eventSlideMenu .img04').animate({left:[450,'easeOutQuad']},450).clearQueue();
	  }else if(cnt==3){
		         $('.eventSlideMenu .img02').animate({left:[50,'easeOutQuad']},450).clearQueue();
	       $('.eventSlideMenu .img03').animate({left:[100,'easeOutQuad']},450).clearQueue();
	       $('.eventSlideMenu .img04').animate({left:[450,'easeOutQuad']},450).clearQueue();
	  }else if(cnt==4){
		  	       $('.eventSlideMenu .img02').animate({left:[50,'easeOutQuad']},450).clearQueue();
	       $('.eventSlideMenu .img03').animate({left:[100,'easeOutQuad']},450).clearQueue();
	       $('.eventSlideMenu .img04').animate({left:[150,'easeOutQuad']},450).clearQueue();
	  }
	  
	   if(cnt==imageCount)cnt=0;
       }
	
      timeonoff= setInterval(move_gallery, 4000);
   */
    $('.eventSlideMenu ul li span').mouseenter(function(event){
       var $target=$(event.target);

      // clearInterval(timeonoff);

        if($target.is('.eventSlideMenu .buttonMenu01')){
            $('.eventSlideMenu .img02').animate({left:[350,'easeOutQuad']},450).clearQueue();
            $('.eventSlideMenu .img03').animate({left:[400,'easeOutQuad']},450).clearQueue();
            $('.eventSlideMenu .img04').animate({left:[450,'easeOutQuad']},450).clearQueue();
            cnt=1;
        }else if($target.is('.buttonMenu02')){
            $('.eventSlideMenu .img02').animate({left:[50,'easeOutQuad']},450).clearQueue();
            $('.eventSlideMenu .img03').animate({left:[400,'easeOutQuad']},450).clearQueue();
            $('.eventSlideMenu .img04').animate({left:[450,'easeOutQuad']},450).clearQueue();
            cnt=2;
        }else if($target.is('.buttonMenu03')){
            $('.eventSlideMenu .img02').animate({left:[50,'easeOutQuad']},450).clearQueue();
            $('.eventSlideMenu .img03').animate({left:[100,'easeOutQuad']},450).clearQueue();
            $('.eventSlideMenu .img04').animate({left:[450,'easeOutQuad']},450).clearQueue();
            cnt=3;
        }else if($target.is('.buttonMenu04')){
            $('.eventSlideMenu .img02').animate({left:[50,'easeOutQuad']},450).clearQueue();
            $('.eventSlideMenu .img03').animate({left:[100,'easeOutQuad']},450).clearQueue();
            $('.eventSlideMenu .img04').animate({left:[150,'easeOutQuad']},450).clearQueue();
            cnt=0;
        }

       // timeonoff= setInterval(move_gallery, 4000);  //부활~~
    });
 });