$(document).ready(function () {
  $(".big").css("background", "url(./images/big1.jpg)"); //배경이미지 넣기
  $(".big").css("background-size", "800px 533px"); //이미지 크기 변경
  $(".big").hide().fadeIn("fast"); //
  $(".gallery li:eq(0) a")
    .css("border", "3px solid rgba(255,0,0,1)")
    .children()
    .css("filter", "grayscale(100%)");

  $(".gallery li a").click(function (e) {
    //각각의 버튼을 클릭하면
    e.preventDefault();
    var ind = $(this).index(".gallery li a");
    console.log(ind); // 0 1 2 3

    $(".big").css("background", "url(./images/big" + (ind + 1) + ".jpg)");
    //클릭한 버튼에 해당되는 배경이미지를 불러온다
    $(".big").css("background-size", "800px 533px");
    $(".big").hide().fadeIn("fast");

    $(".gallery li a")
      .css("border", "3px solid rgba(255,0,0,0)")
      .children()
      .css("filter", "grayscale(0)");
    $(this).css("border", "3px solid rgba(255,0,0,1)").children().css("filter", "grayscale(100%)");
  });
});
