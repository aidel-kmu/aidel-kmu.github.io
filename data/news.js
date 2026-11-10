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
    date: "2026.11",
    tag: { ko: "논문", en: "Paper" },
    title: {
      ko: "학부연구생 논문 2편, 대한전자공학회 추계학술대회 학부생 논문경진대회 포스터 발표 확정",
      en: "Two undergraduate papers accepted for poster presentation at the IEIE Fall Conference 2026 Undergraduate Paper Competition"
    },
    body: {
      ko: "학부연구생 이소민, 김보슬, 장윤영 학생의 논문 2편이 대한전자공학회 2026년도 추계학술대회(2026.11.27–28, 곤지암리조트) 학부생 논문경진대회에서 포스터 발표로 확정되었습니다. 축하합니다!",
      en: "Two papers by undergraduate research interns Somin Lee, Boseul Kim, and Yunyeong Jang were accepted for poster presentation in the Undergraduate Paper Competition track of the IEIE Fall Conference 2026 (Nov 27–28, Gonjiam Resort). Congratulations!"
    }
  },
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
