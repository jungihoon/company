$(document).ready(function () {
  var timeonoff;
  var imageCount = $("eventSlideMenu ul li").size();
  var cnt = 1;

  function move_gallery() {
    cnt++;

    $(".eventSlideMenu ul li").removeClass("current");
    $(".eventSlideMenu ul li:eq(" + (cnt - 1) + ")").addClass("current");

    if (cnt == 1) {
      $(".eventSlideMenu .img02")
        .animate({ left: [350, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".eventSlideMenu .img03")
        .animate({ left: [400, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".eventSlideMenu .img04")
        .animate({ left: [450, "easeOutQuad"] }, 450)
        .clearQueue();
    } else if (cnt == 2) {
      $(".eventSlideMenu .img02")
        .animate({ left: [50, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".eventSlideMenu .img03")
        .animate({ left: [400, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".eventSlideMenu .img04")
        .animate({ left: [450, "easeOutQuad"] }, 450)
        .clearQueue();
    } else if (cnt == 3) {
      $(".eventSlideMenu .img02")
        .animate({ left: [50, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".eventSlideMenu .img03")
        .animate({ left: [100, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".eventSlideMenu .img04")
        .animate({ left: [450, "easeOutQuad"] }, 450)
        .clearQueue();
    } else if (cnt == 4) {
      $(".eventSlideMenu .img02")
        .animate({ left: [50, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".eventSlideMenu .img03")
        .animate({ left: [100, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".eventSlideMenu .img04")
        .animate({ left: [150, "easeOutQuad"] }, 450)
        .clearQueue();
    }

    if (cnt == imageCount) cnt = 0;
  }

  timeonoff = setInterval(move_gallery, 4000);

  $(".eventSlideMenu ul li:eq(0)").addClass("current");

  $(".eventSlideMenu ul li span").mouseenter(function (event) {
    var $target = $(event.target); // var $target = $(this)

    clearInterval(timeonoff);
    $(".eventSlideMenu ul li").removeClass("current");
    $(this).parent().addClass("current");

    if ($target.is(".buttonMenu01")) {
      //첫번째 버튼에 마우스 오버되면
      $(".eventSlideMenu .img02")
        .animate({ left: [350, "easeOutQuad"] }, 450)
        .clearQueue();
      //$('.eventSlideMenu .img02').animate({left:350},450,'easeOutQuad').clearQueue();
      $(".eventSlideMenu .img03")
        .animate({ left: [400, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".eventSlideMenu .img04")
        .animate({ left: [450, "easeOutQuad"] }, 450)
        .clearQueue();
      cnt = 1;
    } else if ($target.is(".buttonMenu02")) {
      //두번째 버튼에 마우스 오버되면
      $(".eventSlideMenu .img02")
        .animate({ left: [50, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".eventSlideMenu .img03")
        .animate({ left: [400, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".eventSlideMenu .img04")
        .animate({ left: [450, "easeOutQuad"] }, 450)
        .clearQueue();
      cnt = 2;
    } else if ($target.is(".buttonMenu03")) {
      $(".eventSlideMenu .img02")
        .animate({ left: [50, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".eventSlideMenu .img03")
        .animate({ left: [100, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".eventSlideMenu .img04")
        .animate({ left: [450, "easeOutQuad"] }, 450)
        .clearQueue();
      cnt = 3;
    } else if ($target.is(".buttonMenu04")) {
      $(".eventSlideMenu .img02")
        .animate({ left: [50, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".eventSlideMenu .img03")
        .animate({ left: [100, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".eventSlideMenu .img04")
        .animate({ left: [150, "easeOutQuad"] }, 450)
        .clearQueue();
      cnt = 0;
    }

    //timeonoff= setInterval(move_gallery, 4000);  //부활~~
  });
});
