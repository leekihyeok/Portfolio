import port01 from "../assets/img/port01.png";
import port02 from "../assets/img/port02.png";
import port03 from "../assets/img/port03.png";
import port04 from "../assets/img/port04.png";
import port05 from "../assets/img/port05.png";

export const headerNav = [
  {
    title: "intro",
    url: "#intro",
  },
  {
    title: "skill",
    url: "#skill",
  },
  {
    title: "site",
    url: "#site",
  },
  {
    title: "portfolio",
    url: "#port",
  },
  {
    title: "contact",
    url: "#contact",
  },
];

export const introText = {
  title: " developer",
  desc: ["Let's see", "My Portfolio and", "My Effort"],
};

export const skillText = [
  {
    title: "My Info - 내 정보",
    desc: `Name) Lee Gi Hyeok
    Adress) Seoul, South Korea
    TEL) 010-7195-9428
    Email) 789rlgur@naver.com`,
  },
  {
    title: "About Me - 자기 소개",
    desc: "저를 한 단어로 표현하면 `맥가이버`라고 생각합니다. 왜냐하면, 지난 2년의 과정을 대기 환경 교육을 진행하였고 바리스타, 캐드 공부를 1년, 그리고 1년은 백엔드 교육과 2년의 프론트엔드 교육과 웹 디자인을 진행하여 여러 역량을 쌓아왔습니다. 앞으로도 계속해서 여러 과정을 배우며 나아갈 것이기 때문입니다.",
  },
  {
    title: "Education - 내가 들은 교육",
    desc: `- 경북대학교 건설환경공학과 2016.03 ~ 2023.02 
    - 경북대학교 글로벌 SW 융합 전공 2019.09 ~ 2023.02  
    - 그린 컴퓨터 아트 학원 2022.05 ~ 2022.09  
    - SeSAC 취업사관학교 2023.12 ~ 2024.07`,
  },
];

export const siteText = [
  {
    text: ["make", "My Portfolio with", "React.js"],
    title: "리액트를 이용해 포트폴리오 제작",
    code: "https://github.com/webstoryboy/port2023-vite",
    view: "https://port2023-vite.netlify.app",
    info: [
      "site coding",
      "production period : two days",
      "use stack : React, Sass, Javascript",
    ],
  },
  {
    text: ["make", "site compliant with", "react.js"],
    title: "리액트를 이용한 사이트 제작",
    code: "https://github.com/webstoryboy/port2023-react",
    view: "https://port2023-react.netlify.app",
    info: [
      "site coding",
      "production period : two days",
      "use stack : HTML5/CSS3, CSS Variable, react",
    ],
  },
];

export const portText = [
  {
    num: "01",
    title: "수어 통역 프로젝트",
    desc: `농아인들을 위한 의료용 수어통역 서비스
           Google Cloud 에서 지원해주는 머신러닝 기능을 이용하여 수어 통역을 가능하게 하는 사이트 구축
           
           내 역할
           (1) 머신러닝에 필요한 수어 데이터 수집
           (2) Bootstrap을 사용하여 실제 이용 가능한 사이트로 제
           `,
    img: port01,
    code: "https://github.com/erifejams/SW-Convergence-Design-Team4",
    view: "https://github.com/erifejams/SW-Convergence-Design-Team4",
    name: "수어 통역 프로젝트",
  },
  {
    num: "02",
    title: "Karrier - 멘토링 플랫폼",
    desc: `사회문제적으로 진로에 고민이 있는 고등학생들을 대상으로, 대학생들이 멘토가 되어 청소년들에게 학업 및 진로에 관한 다양한 정보들을 멘토링 프로그램을 통해 제공해주는 웹 서비스입니다. 또한, 멘토링 프로그램 이후에도 멘토는 질의응답, 수강후기와 같은 기능을 통해 멘티(고등학생)들을 지속적으로 관리해줍니다. 즉, KARRIER 웹 서비스는 현재 고등학생이 겪는 진학 고민, 학업 및 진로에 대한 스트레스를 멘토링 프로그램을 통해 해결해주는 서비스입니다.`,
    img: port02,
    code: "https://github.com/Karrier-Team",
    view: "https://github.com/Karrier-Team",
    name: "Karrier - 멘토링 플랫폼",
  },
  {
    num: "03",
    title: "What Was Today - 날씨 데이트 코스",
    desc: `저희 ready4는 일반적인 블로그와 차별화를 두기 위해 날씨를 이용한 SNS입니다.
    날씨와 위치 API를 이용하여 현재 위치의 날씨를 파악하고, 게시글들을 날씨(맑음, 흐림, 비, 눈)로 분류하였습니다. 또한, 지도 API를 이용하여 각 위치를 연결하여 하나의 코스를 만들어 사용자들에게 보여줍니다.
    위와 같이 “What Was Today”는 날씨에 맞는 데이트 코스를 공유하는 SNS입니다. img: port03`,
    img: port03,
    code: "https://github.com/CHUSUEYEON/WWT",
    view: "https://github.com/CHUSUEYEON/WWT",
    name: "What Was Today - 날씨 데이트 코스",
  },
  {
    num: "04",
    title: "Hand Chatter - 수어 강사 플랫폼",
    desc: `수어 API와 WebRTC 기술을 활용한 청각 장애인 일자리 창출
    시간과 장소에 구애받지 않는 온라인 1:1 수화 학습 및 강의 플랫폼

    서비스 타겟
  (1) 취미 생활 또는 일자리가 필요한 청각 장애인
  (2) 수화를 배우고 싶은 사람
  (3) 평소 수화에 관심이 있던 사람`,
    img: port04,
    code: "https://github.com/purple11-11/HandChatter",
    view: "https://hoongportfolio-next.netlify.app/",
    name: "Hand Chatter - 수어 강사 플랫폼",
  },
  {
    num: "05",
    title: "Debug Talks - 한국 코딩 커뮤니티",
    desc: `국내 개발자들을 위한 코드 공유가 가능하고 개발자들과의 실시간 질답이 가능한 Q & A 커뮤니티`,
    img: port05,
    code: "https://github.com/sesac-this-way-and-that",
    view: "https://junseungpark.github.io/portfolio/index3.html",
    name: "Debug Talks - 한국 코딩 커뮤니티",
  },
];

export const contactText = [
  {
    link: "mailto:789rlgur@naver.com",
    title: "mail : 789rlgur@naver.com",
  },
];

export const footerText = [
  {
    title: "github",
    desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
    link: "https://github.com/leekihyeok",
  },
];
