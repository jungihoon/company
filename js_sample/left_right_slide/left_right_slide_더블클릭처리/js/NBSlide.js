// JavaScript Document
$(document).ready(function() {
    var position=0;  //최초위치
    //var movesize=150; //이미지 하나의 너비
    var movesize=$('.slide_gallery ul li').width();
    //console.log(movesize);
    var timeonoff;
   
    $('.slide_gallery ul').after($('.slide_gallery ul').clone());
 
    function moveG() {
        position-=movesize;  // 150씩 감소
        $('.slide_gallery').animate({left:position}, 'fast',
            function(){							
            if(position<=-1350){
                $('.slide_gallery').css('left',-300);
                position=-300;
            }
        }).clearQueue();
    }

   // timeonoff= setInterval(moveG, 3000);
  
    
        //슬라이드 겔러리를 한번 복제
  var lastClickTime = 0;      
 
  $('.button').click(function(e){
     e.preventDefault();

     var currentTime = new Date().getTime();
     //console.log(currentTime);

     var timeDiff = currentTime - lastClickTime;
     // 일정 시간(예: 500ms) 이내에 다시 클릭한 경우 이벤트를 무시
     if (timeDiff < 500) {
         e.preventDefault();
         return false;
     }

     lastClickTime = currentTime;

    // clearInterval(timeonoff);
     
     if($(this).is('.m1')){  //이전버튼 클릭
         
          position-=movesize;  // 150씩 감소
         $('.slide_gallery').animate({left:position}, 'fast',function(){
            if(position<=-1350){
                position=-300;
                $('.slide_gallery').css('left',-300);
             }
         }).clearQueue();  

     }else if($(this).is('.m2')){  //다음버튼 클릭
           if(position>=0){
                $('.slide_gallery').css('left',-1050);
                position=-1050;
            }
 
            position+=movesize; // 150씩 증가
            $('.slide_gallery').animate({left:position}, 'fast',
                function(){							
                    if(position>=0){
                        $('.slide_gallery').css('left',-1050);
                        position=-1050;
                    }
                }).clearQueue();
  
      }
   });
});

