$(document).ready(function () {
  var smh = $(".visual").height(); //비주얼 이미지의 높이를 리턴한다   900px
  var on_off = false; //false(안오버)  true(오버) 가정법

  $("#headerArea").mouseenter(function () {
    // var scroll = $(window).scrollTop();
    $(this).css("background", "#fff");
    $(".dropdownmenu li a").css("color", "#333");

    on_off = true; //오버가 되었을때
  });

  $("#headerArea").mouseleave(function () {
    var scroll = $(window).scrollTop(); //스크롤의 거리

    if (scroll < smh - 50) {
      //비주얼 위에 있는 상태면
      $(this).css("background", "none").css("border-bottom", "none"); //헤더의 배경색을 없앰
      $(".dropdownmenu li a").css("color", "#fff"); //헤더의 글자색을을 흰색으로 바꾼다
    } else {
      //비주얼 아래에 있는 상태면
      $(this).css("background", "#fff");
      $(".dropdownmenu li a").css("color", "#333");
    }
    on_off = false; //안오버 상태
  });

  $(window).on("scroll", function () {
    //스크롤의 거리가 발생하면
    var scroll = $(window).scrollTop(); //스크롤의 거리를 리턴하는 함수
    // console.log(scroll);

    if (scroll > smh - 50) {
      //스크롤 비주얼높이 ㅡ 헤더높이 까지 내리면
      $("#headerArea").css("background", "#fff").css("border-bottom", "1px solid #ccc");
      $(".dropdownmenu li a").css("color", "#333");
    } else {
      //스크롤 내리기 전 디폴트(마우스올리지않음)
      if (on_off == false) {
        //헤더에 안오버 상태에서만
        $("#headerArea").css("background", "none").css("border-bottom", "none");
        $(".dropdownmenu li a").css("color", "#fff");
      }
    }
  });

  //2depth 열기/닫기
  $("ul.dropdownmenu").hover(
    function () {
      $("ul.dropdownmenu li.menu ul").fadeIn("normal", function () {
        $(this).stop();
      }); //모든 서브를 다 열어라
      $("#headerArea").animate({ height: 200 }, "fast").clearQueue();
    },
    function () {
      $("ul.dropdownmenu li.menu ul").hide(); //모든 서브를 다 닫아라
      $("#headerArea").animate({ height: 50 }, "fast").clearQueue();
    }
  );

  //1depth 효과
  $("ul.dropdownmenu li.menu").hover(
    function () {
      $(".depth1", this).css("color", "red");
    },
    function () {
      $(".depth1", this).css("color", "#333");
    }
  );

  //tab 처리
  $("ul.dropdownmenu li.menu .depth1").on("focus", function () {
    $("ul.dropdownmenu li.menu ul").slideDown("normal");
    $("#headerArea").animate({ height: 200 }, "fast").clearQueue();
  });

  $("ul.dropdownmenu li.m6 li:last")
    .find("a")
    .on("blur", function () {
      $("ul.dropdownmenu li.menu ul").slideUp("fast");
      $("#headerArea").animate({ height: 50 }, "normal").clearQueue();
    });
});
