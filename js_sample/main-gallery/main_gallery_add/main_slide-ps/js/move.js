// JavaScript Document

$(document).ready(function() {
  var timeonoff; //자동기능 구현
  var imageCount=5;  //이미지 개수 *** 
  var cnt=1;  //이미지 순서 1 2 3 4 5 4 3 2 1 2 3 4 5 ...
  var direct=1;  //1씩 증가(+1)/감소(-1) 방향타
  var position=0; //겔러리 무비의 left값 0 -1000 -2000 -3000 -4000
  var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
  $('.btn1').css('background','url(images/bnt_on.png)'); //1번째 버튼 불켜!! 

 function moveg(){
      cnt+=direct;  //카운트가 1 2 3 4 5 4 3 2 1 2 3 4 5 ......    2
	     //각각의 카운트에 대한 left 좌표값을 처리 ***
		if(cnt==1){
		   position=0;  
		}else if(cnt==2){
	       position=-1000; //이미지 하나의크기
		}else if(cnt==3){
		   position=-2000;
		}else if(cnt==4){
		   position=-3000;
		}else if(cnt==5){
		   position=-4000;
		}
       /*                                         
	   for(var i=1;i<=imageCount;i++){ // i=>1 2 3 4 5
		  $('.btn'+i).css('background','url(images/bnt.png)'); //모든 버튼에 불 다꺼!!
	   }
	   */
	   $('.mbutton').css('background','url(images/bnt.png)'); //다 불꺼
	   $('.btn'+cnt).css('background','url(images/bnt_on.png)');//자기 버튼만 불켜~
                           
		$('.gallery').animate({left:position}, 'slow'); //겔러리 무비의 left값을 움직여라~
     
		if(cnt==imageCount)direct=-1; //카운트가 마지막 이미지 번호가 되면.. 방향을 -1로 감소
        if(cnt==1)direct=1; // 카운트가 1이되면 ..방향을 +1 증가
 }

  timeonoff= setInterval( moveg , 4000); //4초마다 자동기능 

  $('.mbutton').click(function(event){  //각각의 버튼을 클릭한다면...

	var $target=$(event.target); //$target = $(this) =>실제 클릭한 버튼
	clearInterval(timeonoff);   //타이머를 중지!!
    /*
	for(var i=1;i<=imageCount;i++){
		$('.btn'+i).css('background','url(images/bnt.png)'); //모든 버튼 불끈다
	}
	*/
	$('.mbutton').css('background','url(images/bnt.png)'); //다 불꺼

	if($target.is('.btn1')){  //첫번째 버튼을 클릭했다면...
    	   //$('.gallery').animate({left:0}, 'slow');
                position=0;  //목적지
                cnt=1;   //현재 카운트
                direct=1; // 방향타 증가
	}else if($target.is('.btn2')){ //두번째 버튼을 클릭했다면...
    	  // $('.gallery').animate({left:-1000}, 'slow');
                position=-1000;
                cnt=2;
	}else if($target.is('.btn3')){ //세번째 버튼을 클릭했다면...
    	  // $('.gallery').animate({left:-2000}, 'slow');
                position=-2000;
                cnt=3;
	}else if($target.is('.btn4')){  //네번째 버튼을 클릭했다면...
    	  // $('.gallery').animate({left:-3000}, 'slow');
                position=-3000;
                cnt=4;
	}else if($target.is('.btn5')){  //다섯번째 버튼을 클릭했다면...
    	  // $('.gallery').animate({left:-4000}, 'slow');
                position=-4000;
                cnt=5;
                direct=-1; //방향타 -1 감소
	}
   
    $('.gallery').animate({left:position}, 'slow'); //겔러리 해당 위치로 이동
    $('.btn'+cnt).css('background','url(images/bnt_on.png)'); //클릭한 버튼의 불켜
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
  
});




