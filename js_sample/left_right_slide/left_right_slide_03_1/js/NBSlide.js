// JavaScript Document
$(document).ready(function() {
    var position=0;  //최초위치
    //var movesize=150; //이미지 하나의 너비
    var movesize=$('.slide_gallery ul li').width();
    //console.log(movesize);
    var timeonoff;
    var cnt=2;
    //$('.slide_gallery ul').after($('.slide_gallery ul').clone());
 
    function moveG() {
        cnt++;
         $('.slide_gallery ul li').removeClass();
         $('.slide_gallery ul li:eq('+ cnt +')').addClass('big');

        position-=movesize;  // 150씩 감소
        $('.slide_gallery').animate({left:position}, 'fast',
            function(){							
            if(position<=-750){
                $('.slide_gallery').css('left',0);
                position=0;
                cnt=2;
                $('.slide_gallery ul li').removeClass();
                $('.slide_gallery ul li:eq('+ cnt +')').addClass('big');
            }
        }).clearQueue();
    }

   timeonoff= setInterval(moveG, 3000);
  
    
        //슬라이드 겔러리를 한번 복제

  $('.button').click(function(e){
     e.preventDefault();

    clearInterval(timeonoff);
     
     if($(this).is('.m1')){  //이전버튼 클릭
        
         cnt++;
         $('.slide_gallery ul li').removeClass();
         $('.slide_gallery ul li:eq('+ cnt +')').addClass('big');

          position-=movesize;  // 150씩 감소
         $('.slide_gallery').animate({left:position}, 'fast',function(){
            if(position<=-750){
                position=0;
                $('.slide_gallery').css('left',0);
                cnt=2;
                $('.slide_gallery ul li').removeClass();
                $('.slide_gallery ul li:eq('+ cnt +')').addClass('big');
             }
         }).clearQueue();  
        

     }else if($(this).is('.m2')){  //다음버튼 클릭
           if(position>=0){
                $('.slide_gallery').css('left',-750);
                position=-750;
                cnt=7;
                $('.slide_gallery ul li').removeClass();
                $('.slide_gallery ul li:eq('+ cnt +')').addClass('big');
            }

            cnt--;
           $('.slide_gallery ul li').removeClass();
           $('.slide_gallery ul li:eq('+ cnt +')').addClass('big');
 
            position+=movesize; // 150씩 증가
            $('.slide_gallery').animate({left:position}, 'fast',
                function(){							
                    if(position>=0){
                        $('.slide_gallery').css('left',-750);
                        position=-750;

                        cnt=7;
                        $('.slide_gallery ul li').removeClass();
                        $('.slide_gallery ul li:eq('+ cnt +')').addClass('big');
                    }
                }).clearQueue();
  
      }
   });
});

