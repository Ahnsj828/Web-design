const boxes = document.querySelectorAll(".box");

// 왼쪽/오른쪽 번갈아가며 클래스 지정
boxes.forEach((box, idx) => {
  if (idx % 2 === 0) {
    box.classList.add("left"); // 짝수 index → 왼쪽
  } else {
    box.classList.add("right"); // 홀수 index → 오른쪽
  }
});

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

window.addEventListener("scroll", checkBoxes);
checkBoxes();
