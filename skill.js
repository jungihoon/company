document.addEventListener("DOMContentLoaded", function () {
  // 메뉴 항목과 아이템 섹션의 각 div 선택
  const menus = document.querySelectorAll(".skill_list li a");
  const items = document.querySelectorAll(".items > div");
  const container = document.querySelector(".container");

  // 초기 설정: 첫 번째 메뉴 항목과 아이템에 active, on 클래스 추가
  menus[0].classList.add("active");
  items[0].classList.add("on");
  container.classList.add("active");

  menus.forEach((menu, index) => {
    menu.addEventListener("click", () => {
      // 모든 아이템에서 on 클래스 제거
      items.forEach((item) => item.classList.remove("on"));
      // 모든 메뉴 항목에서 active 클래스 제거
      menus.forEach((el) => el.classList.remove("active"));

      // 현재 클릭된 항목과 매칭되는 아이템에 on 클래스 추가
      items[index].classList.add("on");
      // 현재 메뉴 항목에 active 클래스 추가
      menu.classList.add("active");
      // container에 active 클래스 추가
      container.classList.add("active");
    });
  });
});
