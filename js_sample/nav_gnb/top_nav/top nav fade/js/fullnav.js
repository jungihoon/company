// JavaScript Document

$(document).ready(function() {

        $('ul.dropdownmenu li.menu').hover(
          function() { 
             $('ul', this).fadeIn('normal',function(){$(this).stop();});
	         $('.depth1', this).animate({top:-17},'fast').clearQueue();
          },
          function() {
	         $('.depth1', this).animate({top:0},'fast').clearQueue();
	         $('ul', this).fadeOut('fast');
       });
	   
	   //tab 포커스처리코드
	   $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
			$(this).parents('.menu').find('ul').fadeIn('fast');  //클릭한 메뉴의 서브를 열어라
			$(this).parents('.menu').siblings().find('ul').fadeOut('fast'); //다른 메뉴의 서브는 몽창 닫아라
			$(this).animate({top:-17},'fast').clearQueue();
			$(this).parents('.menu').siblings().find('.depth1').animate({top:0},'fast').clearQueue();
       });

	  $('ul.dropdownmenu li.m6 li:last a').on('blur', function () {  //포커스를 잃었을때
			 $('ul.dropdownmenu li.m6 ul').fadeOut('fast');
			 $(this).parents('.menu').find('.depth1').animate({top:0},'fast').clearQueue();
	   });
	 
 });