const boxes = document.querySelectorAll(".box");

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

// 스크롤 이벤트에 함수 연결
window.addEventListener("scroll", checkBoxes);

// 페이지 처음 로드 시에도 체크
checkBoxes();
