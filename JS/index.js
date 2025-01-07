//top btn 구현
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//스크롤 y값 출력
window.addEventListener("scroll", function () {
  //스크롤 할 경우
  console.log(window.scrollTo);
});
