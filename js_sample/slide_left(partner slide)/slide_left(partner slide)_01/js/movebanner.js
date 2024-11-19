// JavaScript Document

$(document).ready(function() {
   var position=0;  //최초위치
   var movesize=2; //이동 크기
   var timeonoff;
   
   $('.partnerBox ul').after($('.partnerBox ul').clone()); //복재
   // $('가져다 놓을 태그').after('기준태그');
   
   function partnerMove(){
        position-=movesize;  // 150씩 감소
    	$('.partnerBox').css('left',position);
		
		 if(position < -945){
			   $('.partnerBox').css('left',0);
			   position=0;
		 } 
		
   };

     timeonoff= setInterval(partnerMove, 100);
    
   	$('.partnerBox').hover(function(){
		clearInterval(timeonoff);
	},function(){
		timeonoff= setInterval(partnerMove, 100);	
	});
	
    
 });