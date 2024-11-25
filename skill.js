document.addEventListener("DOMContentLoaded", () => {
  // 메뉴 항목과 아이템 섹션의 각 div 선택
  const menus = document.querySelectorAll(".skill_link li a");
  const items = document.querySelectorAll(".items .item");
  const texts = document.querySelectorAll(".tit_items .tit_item");

  //처음 화면ㅇㅔ 보이는거
  items[0].classList.add("on");
  texts[0].classList.add("on");

  //menus를 누르면  items, texts가 바뀌게

  // for (index = 0; index <  menus.length; index++) {
  //   var menu = menus[index];
  //}

  menus.forEach((menu, index) => {
    //=>  ==  function(){
    menu.addEventListener("click", () => {
      //모든 아이템들 활성화 제거

      items.forEach((item) => {
        item.classList.remove("on");
      });

      texts.forEach((text) => {
        text.classList.remove("on");
      });

      menus.forEach((menu) => {
        menu.classList.remove("active");
      });

      //클릭한 메뉴 내용 동작
      items[index].classList.add("on");
      texts[index].classList.add("on");
      menu.classList.add("active");
    });
  });
});
