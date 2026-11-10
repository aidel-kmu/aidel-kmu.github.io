// 연구실 소식(News) 데이터. 홈 화면에는 최신 5개, news.html 에는 전체가 연도별로 표시됩니다.
// 새 소식 추가 방법:
//   1) 아래 배열의 "맨 위"에 항목을 추가합니다. (최신 소식이 위로 오도록 유지)
//   2) date 는 "YYYY.MM" 형식으로 작성합니다. 예: "2026.09"
//   3) title 은 필수, body(상세 설명)와 tag(분류 라벨)는 선택입니다. 모두 { ko, en } 형태로 작성합니다.
//   예)
//   {
//     date: "2026.09",
//     tag: { ko: "논문", en: "Paper" },
//     title: { ko: "OOO 논문이 XXX 2026에 게재 승인되었습니다.", en: "Our paper OOO was accepted to XXX 2026." },
//     body: { ko: "추가 설명(선택)", en: "Optional details" }
//   },
window.NEWS = [
  {
    date: "2026.07",
    tag: { ko: "구성원", en: "Members" },
    title: {
      ko: "이소민, 김보슬, 장윤영 학생이 학부연구생으로 AIDEL에 합류했습니다.",
      en: "Somin Lee, Boseul Kim, and Yunyeong Jang joined AIDEL as undergraduate research interns."
    },
    body: {
      ko: "새로운 구성원들을 환영합니다!",
      en: "Welcome to the lab!"
    }
  }
];
