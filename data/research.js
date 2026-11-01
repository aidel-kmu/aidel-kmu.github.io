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
      ko: "소셜 네트워크, 인용 관계, 분자 구조, 지식 그래프처럼 현실의 많은 데이터는 서로 연결되어 있습니다. 저희는 노드의 속성뿐 아니라 연결 구조까지 함께 학습하는 그래프 신경망과 그래프 마이닝 알고리즘을 개발합니다. 이를 통해 대규모 그래프에서 노드 분류 및 그래프 분류 등을 정확하고 효율적으로 수행하는 그래프 딥러닝 아키텍처를 연구합니다.",
      en: "Much of the world's data — social networks, citation graphs, molecules, and knowledge bases — is inherently connected. We develop graph neural networks and graph mining algorithms that learn from both structure and attributes. Building on this, we design graph deep learning architectures that perform node classification, graph classification, and related tasks accurately and efficiently on large real-world graphs."
    },
    keywords: ["Graph Neural Networks", "Node Classification", "Graph Classification", "Graph Transformer"],
    image: "assets/img/research/graph-mining.svg"
  },
  {
    id: "qct-lung",
    title: { ko: "QCT-AI 기반 국소 폐 이상 분석", en: "QCT-AI based Local Lung Abnormality Analysis" },
    summary: {
      ko: "정량적 컴퓨터 단층촬영(QCT)은 흡기·호기 CT로부터 폐의 국소 환기, 변형, 움직임과 기도 구조를 정밀하게 측정합니다. 하지만 건강한 폐에서도 국소 기능은 위치에 따라 달라 측정값만으로는 어느 부위가 비정상인지 판단하기 어렵습니다. 저희는 건강인 CT로 학습한 기계학습 모델로 환자의 폐가 건강했다면 보였을 국소 기능을 예측하는 '정상 기준 디지털 트윈 폐'를 만들고, 실제 QCT와 비교해 기능이 과도하거나(hyper) 저하된(hypo) 국소 영역을 찾아냅니다. 이를 통해 만성폐쇄성폐질환(COPD), 천식 등 만성 폐질환의 기류 제한을 설명하고, 조기 선별과 진행 예측을 연구합니다.",
      en: "Quantitative CT (QCT) measures regional ventilation, deformation, motion, and airway structure from inspiratory and expiratory scans. Yet even in healthy lungs, regional function varies with location, so a raw measurement alone cannot tell which region is abnormal. We build a healthy-reference digital twin lung — a machine-learning model trained on healthy CTs that predicts the function each region of a patient's lung would have if it were healthy — and compare it against the patient's actual QCT to locate hyper- and hypo-functioning regions. This helps explain airflow obstruction and supports early screening and progression prediction in chronic lung diseases such as COPD and asthma."
    },
    keywords: ["Quantitative CT", "Medical Imaging AI", "Local Regional Lung Function", "COPD", "Asthma", "Digital Twin"],
    image: "assets/img/research/lung-qct.svg"
  },
  {
    id: "recsys",
    title: { ko: "추천 시스템", en: "Recommender Systems" },
    summary: {
      ko: "추천 시스템은 넘쳐나는 선택지 속에서 사용자에게 꼭 필요한 정보를 찾아 줍니다. 저희는 희소한 사용자-아이템 상호작용 데이터로부터 선호를 학습하는 그래프 기반 협업 필터링, 추천 시스템 언러닝 등의 모델을 연구합니다. 정확도와 함께 강건성과 공정성까지 고려한 신뢰할 수 있는 추천 기술을 지향합니다.",
      en: "Recommender systems help people find what matters among an overwhelming number of choices. We study models that learn user preferences from sparse user–item interactions, including graph-based collaborative filtering and recommendation unlearning. We aim for recommendations that are not only accurate but also robust and fair."
    },
    keywords: ["Collaborative Filtering", "Graph-based Recommendation", "Recommendation Unlearning"],
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
