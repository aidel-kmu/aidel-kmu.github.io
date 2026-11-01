// 논문 목록 (Google Scholar 기준, 2026-10 정리).
// 새 논문을 추가하려면 아래 배열에 객체 하나를 추가하세요. 순서는 상관없습니다(연도별로 자동 정렬, 같은 연도 안에서는 이 파일의 순서를 따릅니다).
//   title   : 논문 제목 (원문 그대로)
//   authors : 저자 문자열 배열. 교수님 이름("Yonghyun Lee", "Y Lee", "이용현" 등)은 자동으로 강조됩니다.
//   venue   : 학술지/학회명과 권(호), 페이지 등
//   year    : 출판 연도 (숫자)
//   type    : "intl-journal"(국제 학술지) | "intl-conf"(국제 학술대회) | "dom-journal"(국내 학술지)
//             | "dom-conf"(국내 학술대회) | "preprint"(프리프린트)
//   equal   : (선택) 공동 제1저자 등 동등 기여 저자의 authors 배열 인덱스(0부터). 예: equal: [0, 1]
//             → 해당 이름 뒤에 * 가 붙고 "* These authors contributed equally." 안내 문구가 자동으로 표시됩니다.
//   note    : (선택) 항목 아래에 표시할 짧은 안내 문구(문자열). equal 과 함께 쓰면 기본 문구 대신 이 문구가 표시됩니다.
//   links   : (선택) { paper, doi, code, project } — 있는 것만 적으면 해당 버튼이 표시됩니다. doi 는 "10.xxxx/..." 형태.
// 예시:
// { title: "Paper Title", authors: ["Yonghyun Lee", "Gildong Hong"], venue: "KCC 2026", year: 2026, type: "dom-conf",
//   links: { paper: "https://...", code: "https://github.com/..." } },
window.PUBLICATIONS = [
  {
    title: "Strategic Default Detection Leveraging Card Spending: Static-Feature Ensemble and Cluster-Augmented Signals for Non Time-Series Modeling",
    authors: ["Yonghyun Lee", "Jaehyuk Lee", "Eunchan Kim"],
    venue: "KSII Transactions on Internet and Information Systems, 20(1), 134",
    year: 2026,
    type: "intl-journal",
    links: { doi: "10.3837/tiis.2026.01.007" }
  },
  {
    title: "Hybrid CNN-transformer architecture for personal credit risk prediction with comparative insights into model explainability",
    authors: ["Jaehyuk Lee", "Yonghyun Lee", "Jeongmin Hong", "Yoona Chung", "Eunchan Kim"],
    equal: [0, 1],
    venue: "The Journal of Supercomputing, 82(5), 316",
    year: 2026,
    type: "intl-journal",
    links: { doi: "10.1007/s11227-026-08486-6" }
  },
  {
    title: "CT Digital Twin Lung-based Regional Functional Defects Explain Airflow Obstruction in COPD",
    authors: ["Yonghyun Lee", "Jiwoong Choi", "Asma Abdolijomoor", "Mario Castro", "ChangHoon Lee", "SoRi Kim", "Youngchan Jang", "Eunchan Kim", "KumJu Chae", "Changhyun Lee"],
    venue: "American Thoracic Society (ATS) 2026 International Conference — Am J Respir Crit Care Med 212",
    year: 2026,
    type: "intl-conf",
    links: { doi: "10.1093/ajrccm/aamag286.134" }
  },
  {
    title: "SCOPE-FE: Structured Control of Operator and Pairwise Exploration for Feature Engineering",
    authors: ["Minhee Park", "Seongyeon Son", "Yonghyun Lee", "Eunchan Kim"],
    venue: "arXiv preprint arXiv:2604.27025",
    year: 2026,
    type: "preprint",
    links: { doi: "10.48550/arXiv.2604.27025" }
  },
  {
    title: "Primary Determinants and Strategic Implications for Customer Loyalty in Pet-Related Vertical E-Commerce: A Machine Learning Approach",
    authors: ["Yonghyun Lee", "Kwangtek Na", "Jungwook Rhim", "Eunchan Kim"],
    venue: "Systems, 13(3), 175",
    year: 2025,
    type: "intl-journal",
    links: { doi: "10.3390/systems13030175" }
  },
  {
    title: "Quantitative CT and Machine Learning-derived Hyper- and Hypo- Functional Regions Associate Heterogeneous Ventilation and Reduced Deformation With PFT and Smoking in COPD",
    authors: ["Yonghyun Lee", "Jiwoong Choi", "Eunchan Kim", "KumJu Chae", "SoRi Kim", "Changhyun Lee"],
    venue: "American Thoracic Society (ATS) 2025 International Conference — Am J Respir Crit Care Med 211, A3370",
    year: 2025,
    type: "intl-conf",
    links: { doi: "10.1164/ajrccm.2025.211.Abstracts.A3370" }
  },
  {
    title: "Deep Learning-based Delinquent Taxpayer Prediction: A Scientific Administrative Approach",
    authors: ["Yonghyun Lee", "Eunchan Kim"],
    venue: "KSII Transactions on Internet and Information Systems, 18(1), 30",
    year: 2024,
    type: "intl-journal",
    links: { doi: "10.3837/tiis.2024.01.003" }
  },
  {
    title: "SICGNN: structurally informed convolutional graph neural networks for protein classification",
    authors: ["Yonghyun Lee", "Eunchan Kim", "Jiwoong Choi", "Changhyun Lee"],
    venue: "Machine Learning: Science and Technology, 5(4), 045072",
    year: 2024,
    type: "intl-journal",
    links: { doi: "10.1088/2632-2153/ad979b" }
  },
  {
    title: "Quantitative CT Imaging and Machine Learning-based Normal Reference Prediction Evaluate Acinar-scale Hyper- and Hypo-functioning in COPD",
    authors: ["Yonghyun Lee", "Eunchan Kim", "KumJu Chae", "Changhyun Lee", "GongYong Jin", "SoRi Kim", "Jiwoong Choi"],
    venue: "American Thoracic Society (ATS) 2024 International Conference — Am J Respir Crit Care Med 209, A1243",
    year: 2024,
    type: "intl-conf",
    links: { doi: "10.1164/ajrccm-conference.2024.209.1_MeetingAbstracts.A1243" }
  },
  {
    title: "Machine Learning-based Prediction of Relative Regional Air Volume Change from Healthy Human Lung CTs",
    authors: ["Eunchan Kim", "Yonghyun Lee", "Jiwoong Choi", "Byungjoon Yoo", "KumJu Chae", "Changhyun Lee"],
    equal: [0, 1],
    venue: "KSII Transactions on Internet and Information Systems, 17(2), 576",
    year: 2023,
    type: "intl-journal",
    links: { doi: "10.3837/tiis.2023.02.016" }
  },
  {
    title: "ALBERT with Knowledge Graph Encoder Utilizing Semantic Similarity for Commonsense Question Answering",
    authors: ["Byeongmin Choi", "Yonghyun Lee", "Yeunwoong Kyung", "Eunchan Kim"],
    venue: "Intelligent Automation & Soft Computing, 36(1), 71",
    year: 2023,
    type: "intl-journal",
    links: { doi: "10.32604/iasc.2023.032783" }
  },
  {
    title: "Machine Learning Predicts Computed Tomography (CT)-based Normal Regional Lung Function Distribution in Asthma and Chronic Obstructive Pulmonary Disease (COPD)",
    authors: ["Yonghyun Lee", "Eunchan Kim", "KumJu Chae", "Changhyun Lee", "GongYong Jin", "SoRi Kim", "Jiwoong Choi"],
    venue: "American Thoracic Society (ATS) 2023 International Conference — Am J Respir Crit Care Med 207, A4004",
    year: 2023,
    type: "intl-conf",
    links: { doi: "10.1164/ajrccm-conference.2023.207.1_MeetingAbstracts.A4004" }
  },
  {
    title: "Machine Learning-based Prediction of Relative Regional Air Volume Change",
    authors: ["Yonghyun Lee", "Eunchan Kim", "Jiwoong Choi", "KumJu Chae", "Changhyun Lee"],
    venue: "Asia Pacific International Conference on Information Science and Technology (APIC-IST 2022)",
    year: 2022,
    type: "intl-conf"
  },
  {
    title: "음악 유사도 비교를 위한 Siamese 네트워크 기반 그래프 임베딩의 개선",
    authors: ["송창헌", "이용현", "김형주"],
    venue: "정보과학회 컴퓨팅의 실제 논문지, 26(11), 493",
    year: 2020,
    type: "dom-journal",
    links: { doi: "10.5626/KTCP.2020.26.11.493" }
  },
  {
    title: "관계형 데이터베이스 상에서 사용하는 최단 경로 탐색 알고리즘 (ALT) 설계와 구현",
    authors: ["이용현", "임동혁", "구해모", "김형주"],
    venue: "정보과학회 컴퓨팅의 실제 논문지, 25(4), 215",
    year: 2019,
    type: "dom-journal",
    links: { doi: "10.5626/KTCP.2019.25.4.215" }
  }
];
