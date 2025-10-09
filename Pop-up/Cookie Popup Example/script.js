const popupContainer = document.getElementById("popupContainer");
const closePopup = document.getElementById("closePopup");
const acceptCookies = document.getElementById("acceptCookies");

// 페이지 로드 후 1초 뒤 팝업 표시
window.addEventListener("load", () => {
  setTimeout(() => {
    popupContainer.classList.add("show");
  }, 1000);
});

// 닫기 버튼
closePopup.addEventListener("click", () => {
  popupContainer.classList.remove("show");
});

// 'That's fine!' 버튼 클릭 시 닫기
acceptCookies.addEventListener("click", () => {
  popupContainer.classList.remove("show");
  // 실제 프로젝트라면 localStorage 등을 이용해
  // 쿠키 수락 여부를 저장하는 로직 추가 가능
});
