$(document).ready(function () {
  //2depth 열기/닫기
  $("ul.dropdownmenu").hover(
    function () {
      $("ul.dropdownmenu li.menu ul").fadeIn("normal", function () {
        $(this).stop();
      }); //모든 서브를 다 열어라
      $("#headerArea").animate({ height: 200 }, "fast").clearQueue();
    },
    function () {
      $("ul.dropdownmenu li.menu ul").fadeOut("fast"); //모든 서브를 다 닫아라
      $("#headerArea").animate({ height: 50 }, "normal").clearQueue();
    }
  );

  //1depth 효과
  $("ul.dropdownmenu li.menu").hover(
    //각각의 1depth 메뉴에 엔터/리브
    function () {
      $(".depth1", this).css("color", "#fff").css("background", "red");
    },
    function () {
      $(".depth1", this).css("color", "#333").css("background", "pink");
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
      //"blur"= 포커스를 잃을 때
      $("ul.dropdownmenu li.menu ul").slideUp("fast");
      $("#headerArea").animate({ height: 50 }, "normal").clearQueue();
    });
});
