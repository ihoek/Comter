let elem = document.querySelector(".flip_1");
let elem2 = document.querySelector(".flip_2");
let elem3 = document.querySelector(".flip_3");

let num = [1, 2, 3, 4];
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

const menuBody = document.getElementById("menu_body");
const content = document.getElementById("menu_header_content");

// 메뉴 데이터 정의
const menuItems = [
  { id: "menu_ai", text: "AI" },
  { id: "menu_product", text: "제품" },
  { id: "menu_service", text: "서비스" },
  { id: "menu_support", text: "지원" },
];
const menuItem_product_title = ["오피스", "SDK", "솔루션"];
const menuItem_service_title = [
  "컴터독스",
  "컴터타자",
  "컴터싸인",
  "컴터디벨로퍼",
];
const menuItem_support_title = ["지원센터", "자주 묻는 질문", "다운로드 센터"];
//top btn 구현
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

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
  let num = Number(document.getElementById("main_num").innerText);
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
    document.getElementById("main_num").innerText = 1;
    document.getElementById("main01_title").innerText = title[0];
    document.getElementById("main01_sub01").innerText = sub01[0];
    document.getElementById("main01_sub02").innerText = sub02[0];
    document.getElementById("main_right_img").src = rightimg[0];
    document.getElementById("main_container").style.backgroundColor =
      bdclist[0];
  } else if (number === 2) {
    document.getElementById("main_num").innerText = 2;
    document.getElementById("main01_title").innerText = title[1];
    document.getElementById("main01_sub01").innerText = sub01[1];
    document.getElementById("main01_sub02").innerText = sub02[1];
    document.getElementById("main_right_img").src = rightimg[1];
    document.getElementById("main_container").style.backgroundColor =
      bdclist[1];
  } else if (number === 3) {
    document.getElementById("main_num").innerText = 3;
    document.getElementById("main01_title").innerText = title[2];
    document.getElementById("main01_sub01").innerText = sub01[2];
    document.getElementById("main01_sub02").innerText = sub02[2];
    document.getElementById("main_right_img").src = rightimg[2];
    document.getElementById("main_container").style.backgroundColor =
      bdclist[2];
  } else if (number === 4) {
    document.getElementById("main_num").innerText = 4;
    document.getElementById("main_right_img").src = rightimg[3];
    document.getElementById("main01_title").innerText = title[3];
    document.getElementById("main01_sub01").innerText = sub01[3];
    document.getElementById("main01_sub02").innerText = sub02[3];
    document.getElementById("main_container").style.backgroundColor =
      bdclist[3];
  }
};

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

//swiper api
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  loop: true, // 루프 기능
  autoplay: {
    delay: 5000, // 5초마다 자동 재생
  },
});

//swiper index 탐색 후 해당으로 이동
swiper.on("transitionEnd", function () {
  if (swiper.realIndex === 0) {
    changeMainContent(1);
  } else if (swiper.realIndex === 1) {
    changeMainContent(2);
  } else if (swiper.realIndex === 2) {
    changeMainContent(3);
  } else if (swiper.realIndex === 3) {
    changeMainContent(4);
  }
});

// burger 메뉴
document.addEventListener("DOMContentLoaded", () => {
  const burgerIcon = document.getElementById("burger_icon");
  const slideMenu = document.getElementById("slide_menu");
  const closeMenu = document.getElementById("close_menu");
  const closeMenuAll = document.getElementById("close_menu_all");
  const menuBody = document.getElementById("menu_body");
  const content = document.getElementById("menu_header_content");

  let menuState = 1; // 현재 메뉴 상태 (1: 메인 메뉴, 2: 하위 메뉴)

  // 메뉴 데이터
  const menuItems = [
    { id: "menu_ai", text: "AI" },
    { id: "menu_product", text: "제품" },
    { id: "menu_service", text: "서비스" },
    { id: "menu_support", text: "지원" },
  ];

  const menuItem_ai_title = ["컴터AI", "한컴얼라이언스", "COMTER AI"]; // COMTER AI 추가
  const menuItem_ai_content = [
    ["컴터어시스턴스", "컴터피디아"],
    ["컴터AI뉴스", "컴터AI뉴스 히스토리"],
  ];
  const menuItem_product_content = [
    ["Window", "macOS", "Android", "iOS", "컴터오피스 Web", "컴터오피스 뷰어"],
    [
      "컴터오피스 SDk",
      "컴터 SDK",
      "컴셀 SDK",
      "컴PDF SDK",
      "컴터 AI SDK",
      "컴터 오스 SDK",
    ],
    ["컴터 데이터 로더"],
  ];
  const menuItem_service_content = [];
  const menuItem_support_content = [
    ["문의하기", "제품별 지원 현황", "온라인 견적 시청", "공지사항"],
    ["자주 묻는 질문", "제품 구매처", "제품 등록 안내", "정품인증 안내"],
    ["다운로드", "공공 컴터", "HWP/OWPML 형식", "컴터폰트"],
  ];
  // 초기 메뉴 생성
  function initializeMenu() {
    menuState = 1; // 메뉴 상태 초기화
    menuBody.innerHTML = ""; // 기존 메뉴 제거
    content.innerText = ""; // 헤더 내용 초기화

    menuItems.forEach((item) => {
      const menuDiv = document.createElement("div");
      menuDiv.classList.add("menu_body_style");
      menuDiv.id = item.id;
      menuDiv.innerText = item.text;

      // 클릭 이벤트 추가 - 하위 메뉴 표시
      menuDiv.addEventListener("click", () => {
        content.innerText = item.text;
        if (item.id === "menu_ai") {
          updateMenuBody(menuItem_ai_title, menuItem_ai_content);
        } else if (item.id === "menu_product") {
          updateMenuBody(menuItem_product_title, menuItem_product_content);
        } else if (item.id === "menu_service") {
          updateMenuBody(menuItem_service_title, menuItem_service_content);
        } else if (item.id === "menu_support") {
          updateMenuBody(menuItem_support_title, menuItem_support_content);
        }
        menuState = 2; // 상태를 2단계로 변경
      });

      menuBody.appendChild(menuDiv);
    });
  }

  // 서브 메뉴 생성
  function updateMenuBody(subMenuItems, subContentItems) {
    menuBody.innerHTML = ""; // 기존 메뉴 제거

    subMenuItems.forEach((subItem, index) => {
      const subMenuDiv = document.createElement("div");
      subMenuDiv.classList.add("menu_body_style");
      subMenuDiv.innerText = subItem;

      if (
        subItem === "COMTER AI" ||
        subItem === "컴터독스" ||
        subItem === "컴터타자" ||
        subItem === "컴터싸인" ||
        subItem === "컴터디벨로퍼"
      ) {
        // add/minus 없이 단순 텍스트 추가
        menuBody.appendChild(subMenuDiv);
      } else {
        // add/minus 아이콘과 드롭박스 추가
        const addIcon = document.createElement("img");
        addIcon.src = "./Img/add.png"; // add 이미지 경로
        addIcon.alt = "Add";
        addIcon.classList.add("icon_style");
        let isExpanded = false;

        // 드롭박스 내용 컨테이너
        const dropBox = document.createElement("div");
        dropBox.classList.add("dropbox_style");
        dropBox.style.display = "none"; // 초기에는 숨김

        // 드롭박스 내용 리스트 생성
        subContentItems[index]?.forEach((contentItem) => {
          const contentDiv = document.createElement("div");
          contentDiv.classList.add("dropbox_item_style");
          contentDiv.innerText = contentItem;
          dropBox.appendChild(contentDiv);
        });

        // addIcon 클릭 이벤트
        addIcon.addEventListener("click", () => {
          isExpanded = !isExpanded;
          if (isExpanded) {
            addIcon.src = "./Img/minus.png"; // minus 이미지 경로
            dropBox.style.display = "block"; // 드롭박스 표시
          } else {
            addIcon.src = "./Img/add.png"; // add 이미지 경로
            dropBox.style.display = "none"; // 드롭박스 숨김
          }
        });

        // subMenuDiv에 addIcon과 dropBox 추가
        subMenuDiv.appendChild(addIcon);
        menuBody.appendChild(subMenuDiv);
        menuBody.appendChild(dropBox);
      }
    });
  }

  // 슬라이드 메뉴 열기
  burgerIcon.addEventListener("click", () => {
    slideMenu.classList.add("open");
    initializeMenu(); // 초기 메뉴 설정
  });

  // 슬라이드 메뉴 닫기
  closeMenu.addEventListener("click", () => {
    if (menuState === 2) {
      initializeMenu(); // 메인 메뉴로 돌아가기
    } else {
      slideMenu.classList.remove("open"); // 메뉴 닫기
    }
  });

  closeMenuAll.addEventListener("click", () => {
    slideMenu.classList.remove("open");
  });

  // 초기 메뉴 설정
  initializeMenu();
});

//footer image 삽입
document.addEventListener("DOMContentLoaded", () => {
  //footer 01
  const footer_img = document.getElementById("footer_title");
  const footer_img02 = document.getElementById("footer_title02");
  const img = new Image();
  img.src = "./Img/downarrow.png";
  img.classList.add("footer_img_responsive");
  img.id = "footer_under_img";
  footer_img.appendChild(img);

  const img02 = new Image();
  img02.src = "./Img/downarrow.png";
  img02.classList.add("footer_img_responsive");
  img02.id = "footer_under_img";
  footer_img02.appendChild(img02);

  //down arrow 이미지 클릭시 - 드롭다운 메뉴 활성화
  //column01
  const footer_title01 = document.getElementById("footer_col1_title");
  const footer_content01 = document.getElementById("footer_col1");

  footer_content01.classList.add("footer_content_res");
  //column02
  const footer_title02 = document.getElementById("footer_col2_title");
  const footer_content02 = document.getElementById("footer_col2");

  footer_content02.classList.add("footer_content_res");

  //버튼 클릭 시 하단 메뉴 등장 및 삭제
  let cnt01 = 0;
  footer_title01.addEventListener("click", () => {
    if (cnt01 === 0) {
      img.src = "./Img/uparrow.png";
      footer_content01.style.display = "flex";
      cnt01 = 1;
    } else {
      img.src = "./Img/downarrow.png";
      footer_content01.style.display = "none";
      cnt01 = 0;
    }
  });
  //버튼 클릭 시 하단 메뉴 등장 및 삭제
  let cnt02 = 0;
  footer_title02.addEventListener("click", () => {
    if (cnt02 === 0) {
      img02.src = "./Img/uparrow.png";
      footer_content02.style.display = "flex";
      cnt02 = 1;
    } else {
      img02.src = "./Img/downarrow.png";
      footer_content02.style.display = "none";
      cnt02 = 0;
    }
  });
});
