// // JavaScript Document

$(document).ready(function () {
  var timeonoff; //타이머 처리  홍길동 정보
  var imageCount = $('.gallery ul li').size(); //이미지 총개수 5
  var cnt = 1; //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
  var onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때

  $('.btn1').css('background', '#fff'); //첫번째 불켜
  $('.btn1').css('width', '30px'); // 버튼의 너비 증가

  $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
  $('.gallery .link1 span').delay(1500).animate({ top: 170, opacity: 1 }, 'slow');

  function gallery_change() {
    $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.
    $('.gallery .link' + cnt).fadeIn('slow'); //자기 자신만 이미지가 보인다

    // for(var i=1;i<=imageCount;i++){
    //   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
    //   $('.btn'+i).css('width','16');
    // }
    $('.mbutton').css('background', '#333'); //버튼 모두불꺼
    $('.mbutton').css('width', '16px');
    $('.btn' + cnt).css('background', '#fff'); //자신 버튼만 불켜
    $('.btn' + cnt).css('width', '30px');

    $('.gallery li span').css('top', 210).css('opacity', 0);
    $('.gallery .link' + cnt)
      .find('span')
      .delay(1000)
      .animate({ top: 170, opacity: 1 }, 'slow');
  }

  function moveg() {
    if (cnt == imageCount + 1) cnt = 1;
    if (cnt == imageCount) cnt = 0; //카운트 초기화

    cnt++; //카운트 1씩 증가.. 5가되면 다시 초기화
    //1 2 3 4 5   1 2 3 4 5..
    gallery_change();

    if (cnt == imageCount) cnt = 0; //카운트의 초기화 0
  }

  timeonoff = setInterval(moveg, 4000); // 타이머를 동작 1~5이미지를 순서대로 자동 처리
  //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
  //clearInterval(변수); -> 살인마/사이코패스/살인청부업자

  $('.mbutton').click(function (event) {
    //각각의 버튼 클릭시
    var $target = $(event.target); //클릭한 버튼 $target == $(this)
    clearInterval(timeonoff); //타이머 중지

    if ($target.is('.btn1')) {
      //첫번째 버튼 클릭??
      cnt = 1; //클릭한 해당 카운트를 담아놓는다
    } else if ($target.is('.btn2')) {
      //두번째 버튼 클릭??
      cnt = 2;
    } else if ($target.is('.btn3')) {
      cnt = 3;
    } else if ($target.is('.btn4')) {
      cnt = 4;
    } else if ($target.is('.btn5')) {
      cnt = 5;
    }

    gallery_change();

    if (cnt == imageCount) cnt = 0; //카운트 초기화

    timeonoff = setInterval(moveg, 4000); //타이머의 부활!!!

    if (onoff == false) {
      //중지상태냐??
      onoff = true; //동작~~
      $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
    }
  });

  //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function () {
    if (onoff == true) {
      // 타이머가 동작 중이냐??
      clearInterval(timeonoff); //살인마 고용 stop버튼 클릭시
      $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
      onoff = false;
    } else {
      // false 타이머가 중지 상태냐??
      timeonoff = setInterval(moveg, 4000); //play버튼 클릭시  부활
      $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
      onoff = true;
    }
  });

  //왼쪽/오른쪽 버튼 처리
  $('.visual .btn').click(function () {
    clearInterval(timeonoff); //살인마

    if ($(this).is('.btnRight')) {
      // 오른쪽 버튼 클릭
      if (cnt == imageCount) cnt = 0; //카운트가 마지막 번호(5)라면 초기화 0
      //if(cnt==imageCount+1)cnt=1;
      cnt++; //카운트 1씩증가
    } else if ($(this).is('.btnLeft')) {
      //왼쪽 버튼 클릭
      if (cnt == 1) cnt = imageCount + 1; // 1->6  최초..
      if (cnt == 0) cnt = imageCount;
      cnt--; //카운트 감소
    }

    // for(var i=1;i<=imageCount;i++){
    //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    // }
    $('.gallery li').hide(); //모든 이미지를 보이지 않게.
    $('.gallery .link' + cnt).fadeIn('slow'); //자신만 이미지가 보인다..

    $('.mbutton').css('background', '#333'); //버튼 모두불꺼
    $('.mbutton').css('width', '16');
    $('.btn' + cnt).css('background', '#fff'); //자신 버튼만 불켜
    $('.btn' + cnt).css('width', '30px');

    $('.gallery li span').css('top', 210).css('opacity', 0);
    $('.gallery .link' + cnt)
      .find('span')
      .delay(1000)
      .animate({ top: 170, opacity: 1 }, 'slow');

    // if($(this).is('.btnRight')){
    //   if(cnt==imageCount)cnt=0;
    // }else if($(this).is('.btnLeft')){
    //   if(cnt==1)cnt=imageCount+1;
    // }

    timeonoff = setInterval(moveg, 4000); //부활

    if (onoff == false) {
      onoff = true;
      $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
    }
  });
});

// // swiper

// console.log(progressCircle);
window.addEventListener('DOMContentLoaded', function () {
  const progressCircle = document.querySelector('#mainVisual .autoplay-progress svg');
  const progressContent = document.querySelector('#mainVisual .autoplay-progress span');
  var mainSwiper = new Swiper('.main_slide', {
    loop: true,
    speed: 1200,
    parallax: true,
    slideActiveClass: 'on',
    autoplay: {
      delay: 3200,
      disableOnInteraction: false,
    },
    pagination: {
      el: '#mainVisual .pager',
      type: 'fraction',
    },
    navigation: {
      nextEl: '#mainVisual .next',
      prevEl: '#mainVisual .prev',
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty('--progress', 1 - progress);
      },
    },
  });
  $('#mainVisual .swiper-pause').click(function () {
    mainSwiper.autoplay.stop();
  });
  $('#mainVisual .swiper-play').click(function () {
    mainSwiper.autoplay.start();
  });
  $(function () {
    $('#mainVisual .play').click(function () {
      $(this).toggleClass('on');
    });
  });
});

//사업소개

var origin = 450; //li의 원래 너비값
var min_width = 310; ////작아졌을때 사이즈
var max_width = 730; //li에 마우스 엔터 되었을때

// $(".business_box li").hover(
//   //마우스 엔터 시
//   function () {
//     $(".business_box .business_content li").animate({ width: min_width }, 300).clearQueue();
//     $(this).animate({ width: max_width }, 300).clearQueue();
//     // $(this).find("dt").css({ "margin-top": "100px", color: "orange", "font-size": "1.8em" });
//     // $(this).find("dd").css({ opacity: "1", transition: "all .3s", "transition-delay": ".3s" });
//     // $(this).find("dl").css("background", "rgba(0,0,0,.6)");
//   },
//   function () {
//     // 마우스 리브 시
//     $(".business_box .business_content li").animate({ width: origin }, 300).clearQueue();
//     // $(this).find("dt").css({ "margin-top": "200px", color: "#fff", "font-size": "1.5em" });
//     // $(this).find("dd").css({ opacity: "0", transition: "none" });
//     // $(this).find("dl").css("background", "none");
//   }
// );

$(function () {
  const $businessItems = $('.business_box .business_content li');
  const $businessContainer = $('.business_box .business_content');

  $businessContainer.on('mouseenter', 'li', function () {
    $businessItems.removeClass('active inactive');
    $(this).addClass('active');
    $businessItems.not(this).addClass('inactive');
    console.log('mouseenter on li:', $(this).index() + 1);
  });

  $businessContainer.on('mouseleave', function () {
    $businessItems.removeClass('active inactive');
    console.log('mouseleave from all li');
  });
});
