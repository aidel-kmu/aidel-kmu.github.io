// 연구 분야(Research) 데이터. 홈 화면의 "What we explore" 섹션에 표시됩니다.
// 수정 방법:
//   - 각 항목의 title(제목), summary(2~3문장 소개)는 { ko, en } 형태로 작성합니다.
//   - keywords 는 영어 키워드 배열입니다. (태그로 표시됨)
//   - image 는 assets/img/research/ 폴더의 이미지 경로입니다. (SVG/PNG/JPG 모두 가능, 가로:세로 = 4:3 권장)
//   - 항목을 추가/삭제하면 캐러셀 슬라이드 수가 자동으로 바뀝니다.
window.RESEARCH = [
  {
    id: "graph-mining",
    title: { ko: "그래프 데이터 마이닝", en: "Graph Data Mining" },
    summary: {
      ko: "소셜 네트워크, 인용 관계, 분자 구조, 지식 그래프처럼 현실의 많은 데이터는 서로 연결되어 있습니다. 저희는 노드의 속성뿐 아니라 연결 구조까지 함께 학습하는 그래프 신경망과 그래프 마이닝 알고리즘을 개발합니다. 이를 통해 대규모 그래프에서 노드 분류, 링크 예측, 이상 탐지를 정확하고 효율적으로 수행하는 방법을 연구합니다.",
      en: "Much of the world's data — social networks, citation graphs, molecules, and knowledge bases — is inherently connected. We develop graph neural networks and graph mining algorithms that learn from both structure and attributes. Our goal is accurate, scalable node classification, link prediction, and anomaly detection on large real-world graphs."
    },
    keywords: ["Graph Neural Networks", "Link Prediction", "Node Classification", "Anomaly Detection", "Scalable Graph Learning"],
    image: "assets/img/research/graph-mining.svg"
  },
  {
    id: "qct-lung",
    title: { ko: "QCT-AI 기반 폐 이상 분석", en: "QCT-AI based Lung Abnormality Analysis" },
    summary: {
      ko: "정량적 컴퓨터 단층촬영(QCT)은 폐의 구조와 기능을 정밀하게 보여줍니다. 저희는 QCT에서 추출한 영상 바이오마커와 딥러닝을 결합하여 국소 폐 기능과 기도·폐실질의 이상을 분석합니다. 이를 바탕으로 만성폐쇄성폐질환(COPD), 천식 등 만성 폐질환의 특성 파악, 하위 유형 분류, 진행 예측을 연구합니다.",
      en: "Quantitative computed tomography (QCT) captures lung structure and function in remarkable detail. We combine QCT-derived imaging biomarkers with deep learning to analyze regional lung function and airway and parenchymal abnormalities. This helps characterize, subtype, and predict the progression of chronic lung diseases such as COPD and asthma."
    },
    keywords: ["Quantitative CT", "Medical Imaging AI", "Regional Lung Function", "COPD", "Asthma"],
    image: "assets/img/research/lung-qct.svg"
  },
  {
    id: "recsys",
    title: { ko: "추천 시스템", en: "Recommender Systems" },
    summary: {
      ko: "추천 시스템은 넘쳐나는 선택지 속에서 사용자에게 꼭 필요한 정보를 찾아 줍니다. 저희는 희소한 사용자-아이템 상호작용 데이터로부터 선호를 학습하는 그래프 기반 협업 필터링, 순차 추천 등의 모델을 연구합니다. 정확도와 함께 강건성과 공정성까지 고려한 신뢰할 수 있는 추천 기술을 지향합니다.",
      en: "Recommender systems help people find what matters among an overwhelming number of choices. We study models that learn user preferences from sparse user–item interactions, including graph-based collaborative filtering and sequential recommendation. We aim for recommendations that are not only accurate but also robust and fair."
    },
    keywords: ["Collaborative Filtering", "Graph-based Recommendation", "Sequential Recommendation", "User Modeling"],
    image: "assets/img/research/recommender.svg"
  },
  {
    id: "multi-agent",
    title: { ko: "멀티 에이전트 시스템", en: "Multi-Agent Systems" },
    summary: {
      ko: "대규모 언어모델(LLM) 기반 에이전트들은 역할을 나누고 서로 소통하며 혼자서는 풀기 어려운 복잡한 문제를 해결할 수 있습니다. 저희는 여러 에이전트가 계획을 세우고, 도구를 활용하고, 결과를 서로 검증하며 협업하는 멀티 에이전트 프레임워크를 연구합니다. 이를 데이터 분석 자동화, 특징 공학, 의료·금융 데이터 기반 의사결정 지원 등 실제 문제에 적용하는 것을 목표로 합니다.",
      en: "Agents built on large language models can divide roles, communicate, and solve complex problems that no single model handles well alone. We study multi-agent frameworks in which agents plan, use tools, and cross-verify one another's results as they collaborate. Our goal is to apply them to real-world tasks such as automated data analysis, feature engineering, and decision support on medical and financial data."
    },
    keywords: ["LLM Agents", "Multi-Agent Collaboration", "Tool Use", "Agentic Data Analysis"],
    image: "assets/img/research/multi-agent.svg"
  }
];
