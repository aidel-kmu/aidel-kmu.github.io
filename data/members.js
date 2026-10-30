// 구성원 목록.
// 새 구성원을 추가하려면 window.MEMBERS 배열에 객체 하나를 추가하세요. 같은 그룹 안에서는 이 파일의 순서대로 표시됩니다.
//   group     : "pi" | "phd" | "ms" | "undergrad" | "alumni"
//   name      : { ko: "홍길동", en: "Gildong Hong" }
//   role      : { ko: "석사과정", en: "M.S. Student" }
//   photo     : 사진 경로 (예: "assets/img/members/gildong.jpg"). 없으면 placeholder.svg 를 쓰세요.
//   email     : (선택) 이메일
//   interests : (선택) { ko, en } 관심 연구 분야
//   bio       : (선택) { ko, en } 짧은 소개
//   career, education : (선택, 지도교수용) [["연도", "내용"], ...] — 영어로만 적습니다.
//   links     : (선택) { homepage, scholar, github, linkedin } — 있는 것만 적으면 아이콘이 표시됩니다.
// 석사과정(ms)에 실제 구성원을 추가하면 "합류 예정" 안내 카드는 자동으로 사라집니다.
// 졸업생은 group 을 "alumni" 로 바꾸고 role 에 졸업 정보(예: "석사 2028 → ○○전자")를 적으면 됩니다.
window.MEMBER_GROUPS = [
  { key: "pi", title: { ko: "지도교수", en: "Principal Investigator" } },
  { key: "phd", title: { ko: "박사과정", en: "Ph.D. Students" } },
  {
    key: "ms",
    title: { ko: "석사과정", en: "M.S. Students" },
    placeholder: {
      title: { ko: "곧 합류 예정", en: "Coming Soon" }
    }
  },
  { key: "undergrad", title: { ko: "학부연구생", en: "Undergraduate Research Interns" } },
  { key: "alumni", title: { ko: "졸업생", en: "Alumni" } }
];

window.MEMBERS = [
  {
    group: "pi",
    name: { ko: "이용현", en: "Yonghyun Lee" },
    // 지도교수 카드는 사진 아래 좁은 칸에 표시되므로, 배열의 각 항목이 한 줄로 나옵니다.
    role: {
      ko: ["조교수", "계명대학교 컴퓨터공학과"],
      en: ["Assistant Professor", "Dept. of Computer Engineering,", "Keimyung University"]
    },
    email: "yhlee@kmu.ac.kr",
    photo: "assets/img/members/placeholder.svg",
    // 경력·학력은 한/영 화면 모두 영어로 표시합니다. [연도, 내용] 형태이며 최신 순으로 적습니다.
    career: [
      ["2026–Present", "Assistant Professor, Dept. of Computer Engineering, Keimyung University"],
      ["2026", "Research Professor, Medical Research Center, Seoul National University"],
      ["2025", "Researcher, Biomedical Research Institute, Jeonbuk National University Hospital"],
      ["2021–2025", "Visiting Researcher, Biomedical Research Institute, Seoul National University Hospital"]
    ],
    education: [
      ["2025", "Ph.D. in Computer Science and Engineering (Integrated M.S.–Ph.D.), Seoul National University"],
      ["2015", "B.S. in Computer Engineering, Sungkyunkwan University"]
    ],
    links: {
      scholar: "https://scholar.google.com/citations?user=bUV0eBcAAAAJ"
    }
  },
  {
    group: "undergrad",
    name: { ko: "이소민", en: "Somin Lee" },
    role: { ko: "학부연구생 · 2026.07 –", en: "Undergraduate Research Intern · Jul. 2026 –" },
    photo: "assets/img/members/placeholder.svg",
    interests: { ko: "기계학습, 데이터 분석", en: "Machine Learning, Data Analysis" }
  },
  {
    group: "undergrad",
    name: { ko: "김보슬", en: "Boseul Kim" },
    role: { ko: "학부연구생 · 2026.07 –", en: "Undergraduate Research Intern · Jul. 2026 –" },
    photo: "assets/img/members/placeholder.svg",
    interests: { ko: "기계학습, 데이터 분석", en: "Machine Learning, Data Analysis" }
  },
  {
    group: "undergrad",
    name: { ko: "장윤영", en: "Yunyoung Jang" },
    role: { ko: "학부연구생 · 2026.07 –", en: "Undergraduate Research Intern · Jul. 2026 –" },
    photo: "assets/img/members/placeholder.svg",
    interests: { ko: "기계학습, 데이터 분석", en: "Machine Learning, Data Analysis" }
  }
];
