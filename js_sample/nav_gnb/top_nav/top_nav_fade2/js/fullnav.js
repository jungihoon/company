// JavaScript Document

$(document).ready(function() {
    //$('ul.dropdownmenu li ul').hide();

    $('ul.dropdownmenu li.menu').hover(
       function() { 
                $('ul', this).fadeIn('normal',function(){$(this).stop();}); //서브를 열어라
                $('a.depth1', this).css('color','#fff').css('background','#f00');  
                $('#headerArea').animate({height:120},'fast').clearQueue();
       },function() {
                $('ul', this).fadeOut('fast');
                $('a.depth1', this).css('color','#333').css('background','none');
                $('#headerArea').animate({height:57},'fast').clearQueue();
     });

    
     //키보드 tab처리
     //포커스'focus' 이벤트는 포커스를 받을 수 있는 태그만 써야한다
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {   //1depth a태그가 포커스를 받을때     
        $(this).parents('.menu').find('ul').fadeIn('fast'); //자신의 1depth에 있는 서브(ul)만 열어라
        $(this).parents('.menu').siblings().find('ul').fadeOut('fast'); //자신을 제외한 나머지 모든 1depth에 있는 서브(ul)를 닫아라
        $('#headerArea').animate({height:120},'fast').clearQueue();
      });

    $('ul.dropdownmenu li.m6 li:last a').on('blur', function () {    //1depth a태그가 포커스를 잃을때     
         $('ul.dropdownmenu li.m6 ul').fadeOut('fast');  // 가장 마지막에 위치한 1depth에 서브메뉴를 닫아라
         $('#headerArea').animate({height:57},'fast').clearQueue();
    });
});