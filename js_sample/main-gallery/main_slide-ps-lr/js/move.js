// JavaScript Document

$(document).ready(function() {
  var timeonoff; //자동기능 구현
  var imageCount=$('.gallery li').size();  //이미지 개수 *** 
  var cnt=1;  //이미지 순서 1 2 3 4 5 4 3 2 1 2 3 4 5 ...
  var direct=1;  //1씩 증가(+1)/감소(-1)
  var position=0; //겔러리 무비의 left값 0 -1000 -2000 -3000 -4000
  var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    $('.btn1').css('background','#f00'); //첫번째 불켜
    $('.btn1').css('width','30');
    
    $('.gallery_text li:eq(0)').fadeIn('slow');  //첫번째 텍스트만 보여라~~~

 function moveg(){
      cnt+=direct;  //카운트가 1 2 3 4 5 4 3 2 1 2 3 4 5 ......
	     //각각의 카운트에 대한 left 좌표값을 처리
		/*
      if(cnt==1){
		   position=0;  
		}else if(cnt==2){
	       position=-1000;
		}else if(cnt==3){
		   position=-2000;
		}else if(cnt==4){
		   position=-3000;
		}else if(cnt==5){
		   position=-4000;
		}
     */
      position=-(cnt-1)*1000;
      $('.gallery').animate({left:position}, 'slow'); //겔러리 무비의 left값을 움직여라~

      $('.gallery_text li').hide(); //모든 텍스트를 안보이게...
      $('.gallery_text li:eq('+ (cnt-1) +')').fadeIn('slow'); //해당 텍스트만 보여라
                                                
	   for(var i=1;i<=imageCount;i++){
          $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
         $('.btn'+i).css('width','16'); 
      }
      $('.btn'+cnt).css('background','#f00');//자신만 불켜
      $('.btn'+cnt).css('width','30');   
                           
		
		if(cnt==imageCount)direct=-1;
      if(cnt==1)direct=1;
 }

  timeonoff= setInterval( moveg , 4000); //4초마다 자동기능 

  $('.mbutton').click(function(event){  //각각의 버튼을 클릭한다면...

	var $target=$(event.target); //$target == this =>실제 클릭한 버튼
	clearInterval(timeonoff);   //타이머를 중지!!

	for(var i=1;i<=imageCount;i++){
			  $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
           $('.btn'+i).css('width','16');
    }

	if($target.is('.btn1')){  //첫번째 버튼을 클릭했다면...
    	   $('.gallery').animate({left:0}, 'slow');
                cnt=1;
                direct=1;
	}else if($target.is('.btn2')){ //두번째 버튼을 클릭했다면...
    	   $('.gallery').animate({left:-1000}, 'slow');
                cnt=2;
	}else if($target.is('.btn3')){ //세번째 버튼을 클릭했다면...
    	   $('.gallery').animate({left:-2000}, 'slow');
                cnt=3;
	}else if($target.is('.btn4')){  //네번째 버튼을 클릭했다면...
    	   $('.gallery').animate({left:-3000}, 'slow');
                cnt=4;
	}else if($target.is('.btn5')){  //다섯번째 버튼을 클릭했다면...
    	   $('.gallery').animate({left:-4000}, 'slow');
                cnt=5;
                direct=-1;
	}
      
    $('.gallery_text li').hide();
    $('.gallery_text li:eq('+ (cnt-1) +')').fadeIn('slow');  
      
      
    $('.btn'+cnt).css('background','#f00');//자신 버튼만 불켜 
    $('.btn'+cnt).css('width','30');
      
    timeonoff= setInterval( moveg , 4000);  //타이머의 재 동작
      
    if(onoff==false){
		   onoff=true;
		   $('.ps').css('background','url(images/stop.png)');
     }  
  });
 
     //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
       if(onoff==true){
	       clearInterval(timeonoff);   // stop버튼 클릭시
		   $(this).css('background','url(images/play.png)');
           onoff=false;   
	   }else{
		  timeonoff= setInterval( moveg , 4000); //play버튼 클릭시
		   $(this).css('background','url(images/stop.png)');
		   onoff=true; 
	   }
  });	


  $('.visual .btn').click(function(){

   clearInterval(timeonoff); 

   if($(this).is('.btnRight')){
      if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
      if(cnt==imageCount+1)cnt=1;  
      cnt++; //카운트 1씩증가
  }else if($(this).is('.btnLeft')){
      if(cnt==1)cnt=imageCount+1;
      if(cnt==0)cnt=imageCount;
      cnt--; //카운트 감소
  }
   //console.log(cnt);
   $('.gallery').animate({left:(cnt-1)*-1000}, 'slow').clearQueue();  // 1->0 2->-1000 3->-2000 4->-3000 5->-4000
                        
   $('.gallery_text li').hide(); //모든 텍스트를 안보이게...
   $('.gallery_text li:eq('+ (cnt-1) +')').fadeIn('slow'); //해당 텍스트만 보여라

   for(var i=1;i<=imageCount;i++){
        $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
         $('.btn'+i).css('width','16');
   }
    $('.btn'+cnt).css('background','#f00');//자신 버튼만 불켜 
    $('.btn'+cnt).css('width','30');  

    if($(this).is('.btnRight')){
      if(cnt==imageCount){cnt=0;direct=1;}
   }else if($(this).is('.btnLeft')){
      if(cnt==1){cnt=imageCount+1;direct=-1;}
   }
   
   
   timeonoff= setInterval( moveg , 4000);

   if(onoff==false){
      onoff=true;
      $('.ps').css('background','url(images/stop.png)');
   }
   });
  
});



