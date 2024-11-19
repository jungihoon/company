// JavaScript Document

$(document).ready(function() {
   var position=0;  //최초위치(left목적지)
   var movesize=6; //이동 크기(속도)
   var timeonoff; //자동기능
   
   $('.partnerBox ul').after($('.partnerBox ul').clone()); //복재
   // $('가져다 놓을 태그').after('기준태그');
   
   function partnerMove(){
        position-=movesize;  // 2씩 감소
    	$('.partnerBox').css('left',position);
		
		 if(position < -1575){
			   $('.partnerBox').css('left',-315);
			   position=-315;
		 } 
		
   };

     timeonoff= setInterval(partnerMove, 100);
    
   	$('.partnerBox').hover(function(){
		clearInterval(timeonoff);
	},function(){
		timeonoff= setInterval(partnerMove, 100);	
	});
	
    
 });