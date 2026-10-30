// 구성원 목록.
// 새 구성원을 추가하려면 window.MEMBERS 배열에 객체 하나를 추가하세요. 같은 그룹 안에서는 이 파일의 순서대로 표시됩니다.
//   group     : "pi" | "phd" | "ms" | "undergrad" | "alumni"
//   name      : { ko: "홍길동", en: "Gildong Hong" }
//   role      : { ko: "석사과정", en: "M.S. Student" }
//   photo     : 사진 경로 (예: "assets/img/members/gildong.jpg"). 없으면 placeholder.svg 를 쓰세요.
//   email     : (선택) 이메일
//   interests : (선택) { ko, en } 관심 연구 분야
//   bio       : (선택) { ko, en } 짧은 소개
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
    role: { ko: "조교수 · 계명대학교 컴퓨터공학과", en: "Assistant Professor · Dept. of Computer Engineering, Keimyung University" },
    email: "yhlee@kmu.ac.kr",
    photo: "assets/img/members/placeholder.svg",
    interests: {
      ko: "인공지능, 기계학습, 데이터 공학, 그래프 데이터 마이닝, 정량적 CT(QCT) 기반 AI 폐 분석, 추천 시스템",
      en: "Artificial Intelligence, Machine Learning, Data Engineering, Graph Data Mining, QCT-based AI Lung Analysis, Recommender Systems"
    },
    bio: {
      ko: "계명대학교 컴퓨터공학과 조교수로 인공지능 및 데이터 공학 연구실(AIDEL)을 이끌고 있습니다. 대규모 데이터를 효율적으로 다루는 데이터 공학 기술과 그래프 신경망을 비롯한 기계학습 방법론을 연구하며, 이를 정량적 CT 영상 기반 폐 기능 분석, 금융·행정 데이터 예측, 추천 시스템 등 실제 문제에 적용하고 있습니다.",
      en: "Yonghyun Lee is an Assistant Professor in the Department of Computer Engineering at Keimyung University, where he leads the Artificial Intelligence and Data Engineering Lab (AIDEL). His research spans data engineering for large-scale data and machine learning methods such as graph neural networks, with applications to quantitative CT-based lung function analysis, financial and administrative prediction, and recommender systems."
    },
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
