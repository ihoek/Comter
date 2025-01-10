let elem = document.querySelector(".flip_1");
let elem2 = document.querySelector(".flip_2");
let elem3 = document.querySelector(".flip_3");

let title = [
  "컴터어시스턴스 출시",
  "컴터피디아 출시",
  "컴터독스",
  "웹한글 기안기",
];
let sub01 = [
  "컴터어시스턴스는 고객의 업무 효울을 최대치로 끌어올릴 수 있는 지능형 문서 작성 도구 입니다.",
  "빠르고 정확한 문서 검색, 컴터피디아 방대한 문서 속 필요한 정보를 찾아주는 문서 데이터 검색 솔루션입니다.",
  "컴터오피스에 생성형 AI기술을 더해 스마트한 업무를  지원하는 구독형 AI 통합 문서 서비스",
  "HTML5를 지원하는 웹브라우저를 기반으로 문서를 읽고 편집할 수 있는 웹한글 기안기.",
];
let sub02 = [
  "컴터AI로 개인의 한계를 뛰어 넘는 경험을 해보세요!",
  "",
  "",
  "업무 효율성을 높이는 기업용 오피스 솔루션을 만나보세요.",
];
let rightimg = [
  "./Img/assistant.jpeg",
  "./Img/building.jpeg",
  "./Img/document.jpeg",
  "./Img/claude.jpeg",
];
let bdclist = ["#0070C0", "#886756", "#0070C0", "#000D6D"];

const main_img = document.getElementById("main_container");

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
  let scrollY = this.scrollY;
  //console.log(parseInt(scrollY));
  if (parseInt(scrollY) >= 666) {
    //스크롤이 666이상이면
    //this.document.style.marginTop = `-10px`;
  }
});

//main01 좌 버튼 클릭 시 숫자 줄어 듦
function left_btn() {
  let num = Number(document.getElementById("main_num").innerText);

  if (num <= 1) {
    document.getElementById("main_num").innerText = 4;
  } else {
    document.getElementById("main_num").innerText = num - 1;
  }
  changeMainContent(Number(document.getElementById("main_num").innerText));
}

//main01 우 버튼 클릭 시 숫자 늘어 남
function right_btn() {
  const num = Number(document.getElementById("main_num").innerText);
  if (num >= 4) {
    document.getElementById("main_num").innerText = 1;
  } else {
    document.getElementById("main_num").innerText = num + 1;
  }
  changeMainContent(Number(document.getElementById("main_num").innerText));
}

//main 숫자에 따른 내용 변경 함수
const changeMainContent = (number) => {
  if (number === 1) {
    document.getElementById("main01_title").innerText = title[0];
    document.getElementById("main01_sub01").innerText = sub01[0];
    document.getElementById("main01_sub02").innerText = sub02[0];
    document.getElementById("main_right_img").src = rightimg[0];
    document.getElementById("main_container").style.backgroundColor =
      bdclist[0];
  } else if (number === 2) {
    document.getElementById("main01_title").innerText = title[1];
    document.getElementById("main01_sub01").innerText = sub01[1];
    document.getElementById("main01_sub02").innerText = sub02[1];
    document.getElementById("main_right_img").src = rightimg[1];
    document.getElementById("main_container").style.backgroundColor =
      bdclist[1];
  } else if (number === 3) {
    document.getElementById("main01_title").innerText = title[2];
    document.getElementById("main01_sub01").innerText = sub01[2];
    document.getElementById("main01_sub02").innerText = sub02[2];
    document.getElementById("main_right_img").src = rightimg[2];
    document.getElementById("main_container").style.backgroundColor =
      bdclist[2];
  } else if (number === 4) {
    document.getElementById("main01_title").innerText = title[3];
    document.getElementById("main01_sub01").innerText = sub01[3];
    document.getElementById("main01_sub02").innerText = sub02[3];
    document.getElementById("main_right_img").src = rightimg[3];
    document.getElementById("main_container").style.backgroundColor =
      bdclist[3];
  }
};

//마우스 이동에 따른 사진 전환

let startX = 0;
let endX = 0;

// 클릭했을 때의 x좌표 기록
main_img.addEventListener("mousedown", (event) => {
  startX = event.clientX;
  console.log(`클릭한 순간의 x좌표: ${startX}`);

  // 드래그 중 x좌표 업데이트
  const handleMouseMove = (e) => {
    console.log(`드래그 중 x좌표: ${e.clientX}`);
  };

  // 드래그 중 이벤트 추가
  document.addEventListener("mousemove", handleMouseMove);

  // 마우스를 떼면 x좌표 기록 및 이벤트 제거
  const handleMouseUp = (e) => {
    endX = e.clientX;
    console.log(`떼었을 때의 x좌표: ${endX}`);

    const difference = calculateDifference(startX, endX);
    console.log(`x좌표의 차이: ${difference}`);

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  document.addEventListener("mouseup", handleMouseUp);
});

//자세히 보기 누르면 카드 뒤집기
function cardreverse(element) {
  if (element === "btn1") {
    if (elem.style.transform == "rotateY(180deg)") {
    } else {
      elem.style.transform = "rotateY(180deg)";

      elem.addEventListener("mouseleave", () => {
        elem.style.transform = "rotateY(0deg)";
        // console.log("마우스 나감");
      });
    }
  } else if (element === "btn2") {
    if (elem2.style.transform == "rotateY(180deg)") {
    } else {
      elem2.style.transform = "rotateY(180deg)";

      elem2.addEventListener("mouseleave", () => {
        elem2.style.transform = "rotateY(0deg)";
      });
    }
  } else if (element === "btn3") {
    if (elem3.style.transform == "rotateY(180deg)") {
    } else {
      elem3.style.transform = "rotateY(180deg)";

      elem3.addEventListener("mouseleave", () => {
        elem3.style.transform = "rotateY(0deg)";
      });
    }
  }
}

let group = document.getElementById("footer_btn_content");

group.addEventListener("click", () => {
  const dropdown = document.querySelector(".footer_dropdown_menu");
  dropdown.style.display = "flex";
});

group.addEventListener("blur", () => {
  const dropdown = document.querySelector(".footer_dropdown_menu");
  dropdown.style.display = "";
});
