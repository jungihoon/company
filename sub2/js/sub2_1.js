document.addEventListener("DOMContentLoaded", () => {
  // 메뉴 항목과 아이템 섹션의 각 div 선택
  const items = document.querySelectorAll(".con_nav li a "); //탭
  const images = document.querySelectorAll(".con_img li a img"); //이미지

  //처음 화면ㅇㅔ 보이는거
  items[0].classList.add("on");
  images[0].classList.add("on");

  //items를 누르면  menus가 바뀌게

  items.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      //모든 아이템들 활성화 제거
      images.forEach((img) => {
        img.classList.remove("on");
      });

      items.forEach((item) => {
        item.classList.remove("on");
      });

      //클릭한 메뉴 내용 동작
      items[index].classList.add("on");
      images[index].classList.add("on");
    });
  });
});
