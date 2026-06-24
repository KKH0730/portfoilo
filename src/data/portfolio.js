export const personal = {
  name: '김경호',
  nameEn: 'Kyungho Kim',
  role: 'Android Developer',
  experience: '경력 5년',
  email: 'bravery712@gmail.com',
  phone: '010-3005-2677',
  github: 'https://github.com/KKH0730',
  blog: 'https://smashandroid.tistory.com',
  headline: '서비스의 성장을 함께 만드는\nAndroid Developer',
  about: [
    'Kotlin과 Clean Architecture를 기반으로 안정적이고 확장 가능한 Android 서비스를 만들어왔습니다.',
    'CI/CD 자동화, 결제 시스템 최적화, 레거시 전환 등 실제 비즈니스 성과로 이어지는 개발을 추구합니다.',
    'Claude Code, Gemini 등 AI 도구를 활용한 개발 워크플로우 자동화에 적극적으로 임하고 있습니다.',
  ],
};

export const stats = [
  { value: '5년+', label: '개발 경력' },
  { value: '9개', label: '앱 서비스 경험' },
  { value: '90%↓', label: '결제 오류 감소' },
];

export const career = [
  {
    id: 1,
    company: '미디어웹',
    period: '2026.04 ~ 재직중',
    role: 'Android Developer',
    color: '#7C6FFF',
    projects: [
      {
        title: '피카오더 주방용 앱 개발',
        period: '2025.04 ~ 2025.06',
        summary: '피카 PC방 7,000+ 매장에 도입되는 주방 주문 관리 앱 신규 개발',
        tasks: [
          'FCM 기반 실시간 푸시 알림 수신 및 주문 목록 자동 갱신 구현',
          '다양한 태블릿 해상도 대응 DPI 스케일링, DiffUtil + 커스텀 ItemAnimator로 렌더링 성능 개선',
          '계정 이중 인증 및 IMEI + 토큰 기반 OkHttp Interceptor 자동 인증 처리',
          'KAPT → KSP 마이그레이션으로 빌드 속도 개선',
        ],
        results: ['PC방 7,000+ 매장 도입 앱 단독 개발 및 운영'],
        stack: ['Kotlin', 'MVVM', 'Coroutines', 'StateFlow', 'FCM', 'Room', 'KSP', 'OkHttp3'],
      },
      {
        title: '피카오더 결제 오류 개선',
        period: '2025.06 ~ 2025.08',
        summary: '결제 자동 취소, 데이터 미연동 등 지속 발생 결제 오류 추적 및 수정',
        tasks: [
          'Firebase Crashlytics 활용 결제 추적 로그 설정 및 분석',
          '중복 결제 요청 이슈 처리',
        ],
        results: ['월간 오류 발생률 90% 감소'],
        stack: ['Kotlin', 'Firebase Crashlytics', 'EXIMPay SDK', 'Retrofit2', 'Coroutines'],
      },
      {
        title: '피카플레이 회원 계정 통합',
        period: '2026.01 ~ 2026.03',
        summary: '사내 서비스 계정을 피카플레이 계정으로 단일 통합, 소셜 로그인 연동',
        tasks: [
          'Google · Naver · Kakao · Apple OAuth 연동',
          '회원 인증 체계 일원화',
        ],
        results: ['앱 설치 수 19.3% 증가 (30만 → 35.8만)'],
        stack: ['Kotlin', 'OAuth 2.0', 'Google Login', 'Naver Login', 'Kakao Login', 'Apple Login'],
      },
      {
        title: 'CI/CD 파이프라인 구축',
        period: '2026.03 ~ 2026.04',
        summary: '피카플레이 CI/CD 자동화 - 빌드·배포·코드리뷰·모니터링 전 과정 자동화',
        tasks: [
          '브랜치 푸시 시 APK 빌드 ~ Firebase App Distribution 배포 자동화',
          'Claude Code CLI를 활용한 AI 릴리즈 노트 자동 생성',
          'Push/MR 이벤트 시 Claude AI 자동 코드 리뷰 및 GitLab 댓글 등록',
          'Firebase Crashlytics 데이터를 AI 분석하여 일간/주간 크래시 리포트 Slack 자동 발송',
        ],
        results: ['배포·코드리뷰·크래시 리포트 자동화 구축', '반복 작업 제거 및 코드 품질 체계 확립'],
        stack: ['GitLab CI/CD', 'Firebase App Distribution', 'Firebase Test Lab', 'Claude Code CLI', 'Slack'],
      },
      {
        title: 'AI 기반 Jira 이슈 자동 생성 도구',
        period: '2026.04 ~ 2026.05',
        summary: '기획서를 AI로 분석하여 Jira 이슈를 자동 생성하는 내부 개발 도구',
        tasks: [
          'PDF / Confluence URL 파싱 → Gemini Function Calling으로 구조화 이슈 데이터 생성',
          'Jira REST API로 에픽·스토리·서브태스크 계층 일괄 생성 및 담당자 자동 할당',
          'SSE 스트리밍으로 대량 이슈 생성 진행 상황 실시간 표시',
        ],
        results: ['이슈 등록 및 담당자 할당 반복 작업 제거'],
        stack: ['React 19', 'TypeScript', 'Node.js/Express', 'Gemini API', 'Jira REST API', 'SSE'],
      },
      {
        title: '멀티 에이전트 AI 협업 시스템 개발',
        period: '2026.04 ~ 2026.05',
        summary: '멀티 LLM 에이전트 시스템으로 Android 개발 전 주기 자동화 내부 플랫폼',
        tasks: [
          '개발 완료 시 테스터 에이전트 자동 연계 실행 (develop → test → report 무중단 파이프라인)',
          'Claude / Gemini 모델을 동일 인터페이스로 교체 가능하도록 설계',
          'Android 계측 테스트 자동화 (에뮬레이터 실행 → Espresso UI 테스트 → XML 파싱 → 리포트)',
        ],
        results: ['Android 개발 전 주기 자동화로 개발 생산성 향상'],
        stack: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Espresso', 'Claude Code CLI', 'Gemini AI'],
      },
    ],
  },
  {
    id: 2,
    company: '키토크에이아이 (구 마이셀럽스)',
    period: '2022.05 ~ 2024.11',
    role: 'Android Developer',
    color: '#22D3B8',
    projects: [
      {
        title: '마이무비(Maimovie) 앱 개발 및 유지보수',
        period: '2022.07 ~ 2023.05',
        summary: '영화·방송 추천 서비스의 레거시 전환 및 신규 기능 추가',
        tasks: [
          'Java → Kotlin 언어 전환',
          'MVP → Clean Architecture + MVVM 전환',
          'LLM 기반 "AI 작가" 신규 기능 추가',
          '메시지 캐싱과 데이터 압축(Gzip) 적용',
        ],
        results: ['누적 다운로드 10만+', '트래픽 30% 절감'],
        stack: ['Kotlin', 'Clean Architecture', 'MVVM', 'WebSocket', 'In-app Billing', 'Firebase'],
      },
      {
        title: '마이셀럽스 스타 앱 유지보수',
        period: '2023.09 ~ 2024.02',
        summary: '결제 오류 수정, 수익성 개선, 광고 및 소셜 로그인 기능 추가',
        tasks: [
          'Tnk 오퍼월 및 비디오 시청 광고 기능 추가',
          '정기 결제 오류 지속 트래킹 및 수정',
          'OAuth 페이스북 로그인 기능 구현 (API → OAuth 전환)',
        ],
        results: ['누적 다운로드 5만+', 'CS 인입 건수 90% 이상 감소', '월 약 100만 원 수익 증가'],
        stack: ['Kotlin', 'Hilt', 'Coroutine', 'Flow', 'In-app Billing', 'Firebase', 'Jenkins'],
      },
      {
        title: '루이스(Lewis) 앱 개발',
        period: '2024.04 ~ 2024.08',
        summary: 'LLM 기반 스토리 창작 플랫폼 하이브리드 앱 신규 개발',
        tasks: [
          '새 프로젝트 전체 구조 설계 및 개발',
          'CI/CD 환경 구성 (Jenkins + Gitlab)',
          '인앱 결제 및 정기 결제 기능 개발',
          '메타마스크 지갑 연결 기능 개발',
        ],
        results: ['누적 다운로드 1천+', '총 결제 수익의 약 6% 창출 기여'],
        stack: ['Kotlin', 'Clean Architecture', 'MVVM', 'Hilt', 'In-app Billing', 'Firebase'],
      },
      {
        title: '딥서치(Deep Search) 앱 개발',
        period: '2023.01 ~ 2023.02',
        summary: '취향에 맞는 영화·방송 추천 하이브리드 앱, Product Hunt 출품',
        tasks: [
          '새 프로젝트 전체 구조 설계 및 개발',
          'CI/CD 환경 구성 (Jenkins + Gitlab)',
        ],
        results: ['Product Hunt 일별 랭킹 4위, 월별 랭킹 11위', '일일 1.4k 팔로워 달성'],
        stack: ['Kotlin', 'MVP', 'AAC', 'Flow', 'Firebase'],
      },
      {
        title: '자동 빌드 시스템 구축',
        period: '2023.05 ~ 2023.06',
        summary: '잦은 배포로 인한 비효율 해소를 위한 CI/CD 자동화 구축',
        tasks: [
          'Mac OS Jenkins 환경 설정 및 GitLab hook 연동 자동 빌드',
          '빌드 후 Slack으로 QA 담당자에게 APK 파일 자동 전송',
          '사내 모든 Android 프로젝트에 CI/CD 적용',
        ],
        results: ['코드 오류 조기 발견', 'QA 및 배포 자동화로 개발 생산성 향상'],
        stack: ['Jenkins', 'GitLab', 'Slack'],
      },
    ],
  },
  {
    id: 3,
    company: '알파도 홀딩스',
    period: '2021.03 ~ 2022.04',
    role: 'Android Developer',
    color: '#F97316',
    projects: [
      {
        title: 'AlphaDo Pet+ 앱 개발',
        period: '2021.06 ~ 2021.08',
        summary: '반려동물 건강 스마트 관리 앱 - AI 질병 진단, 소변검사 기능',
        tasks: [
          '전체 구조 설계 및 개발',
          '소변검사 기능 개발 (카메라 ROI 추출)',
          'AI 기반 반려동물 신체 질병 진단 기능 개발',
          '중국어·영어·일본어 다국어 지원',
        ],
        results: ['누적 다운로드 5천+'],
        stack: ['Kotlin', 'MVVM', 'Hilt', 'RxJava', 'Firebase', 'Retrofit2'],
      },
      {
        title: 'e-commerce 신규 개발',
        period: '2021.09 ~ 2022.03',
        summary: '새로운 사업 분야 e-commerce를 위한 결제 및 구독 기능 개발',
        tasks: [
          'PG 연동 및 결제 기능 개발',
          '멤버십 구독 정기 결제 기능 개발',
          '결제 안정성을 위한 단위 테스트 도입',
        ],
        results: ['사료 및 멤버십 수익 창구 마련'],
        stack: ['Kotlin', 'MVVM', 'Hilt', 'RxJava', 'In-app Billing', 'Retrofit2'],
      },
      {
        title: '서비스 성능 최적화',
        period: '2022.03 ~ 2022.04',
        summary: '빌드 속도 개선 및 소변검사 기능 정확도 향상',
        tasks: [
          '빌드 캐싱, 모듈화, 프로가드 설정을 통한 최적화',
          '비동기 처리 코루틴 전환 및 네트워크 응답 캐시 적용',
          '소변검사 ROI 추출 정밀도 및 기준 색상 조정',
        ],
        results: ['빌드시간 최대 20% 단축', '소변검사 정확도 약 15% 향상'],
        stack: ['Kotlin', 'Coroutine', 'ProGuard', 'Modularization', 'Cache'],
      },
    ],
  },
];

export const featuredProjects = [
  {
    id: 1,
    title: '피카플레이 / 피카오더',
    company: '미디어웹',
    period: '2025 ~ 2026',
    category: '회사 프로젝트',
    categoryColor: '#7C6FFF',
    description: '피카 PC방 서비스의 Android 앱 개발. 7,000+ 매장 도입 주방 앱 단독 개발, 소셜 로그인 계정 통합, AI 기반 CI/CD 자동화, 결제 오류 90% 감소까지 핵심 기능 전반을 담당했습니다.',
    highlights: [
      { icon: '📱', text: '앱 설치 19.3% 증가 (30만 → 35.8만)' },
      { icon: '🏪', text: 'PC방 7,000+ 매장 주방 앱 도입' },
      { icon: '💳', text: '결제 오류 발생률 90% 감소' },
      { icon: '🤖', text: 'AI 기반 CI/CD 자동화 파이프라인 구축' },
    ],
    stack: ['Kotlin', 'MVVM', 'Coroutines', 'StateFlow', 'FCM', 'Firebase', 'OAuth 2.0', 'GitLab CI/CD', 'Claude AI'],
  },
  {
    id: 2,
    title: 'Maimovie',
    company: '키토크에이아이',
    period: '2022 ~ 2023',
    category: '회사 프로젝트',
    categoryColor: '#22D3B8',
    description: '영화·방송 추천 서비스 Android 앱 개발 및 유지보수. Java → Kotlin 전환, MVP → Clean Architecture + MVVM 전환, LLM 기반 AI 기능 추가, 트래픽 최적화까지 전반적인 품질 개선을 담당했습니다.',
    highlights: [
      { icon: '📥', text: '누적 다운로드 10만+' },
      { icon: '🔄', text: 'MVP → Clean Architecture + MVVM 전환' },
      { icon: '📉', text: '트래픽 30% 절감 (캐싱 + Gzip 압축)' },
      { icon: '🤖', text: 'LLM 기반 AI 작가 신규 기능 추가' },
    ],
    stack: ['Kotlin', 'Clean Architecture', 'MVVM', 'WebSocket', 'In-app Billing', 'Firebase', 'Jenkins', 'Gitlab'],
  },
  {
    id: 3,
    title: 'AlphaDo Pet+',
    company: '알파도 홀딩스',
    period: '2021 ~ 2022',
    category: '회사 프로젝트',
    categoryColor: '#F97316',
    description: '반려동물 건강 스마트 관리 앱 전체 개발. 소변검사 키트 카메라 ROI 추출, AI 기반 반려동물 질병 진단, Wi-Fi 내시경 카메라 연동, 중·영·일 3개 국어 지원 기능을 구현했습니다.',
    highlights: [
      { icon: '📥', text: '누적 다운로드 5천+' },
      { icon: '🔬', text: '소변검사 ROI 정확도 15% 향상' },
      { icon: '🌍', text: '중국어·영어·일본어 다국어 지원' },
      { icon: '⚡', text: '빌드시간 최대 20% 단축 최적화' },
    ],
    stack: ['Kotlin', 'MVVM', 'Hilt', 'RxJava', 'OpenCV', 'Firebase', 'Coroutine', 'Retrofit2'],
  },
];

export const additionalProjects = [
  {
    title: 'TradeWave',
    period: '2024.12 ~ 2025.02',
    type: '개인 프로젝트',
    typeColor: '#7C6FFF',
    description: '암호화폐 시세 확인 및 자동 매매 앱. WebSocket 실시간 시세, 백테스트 기능, Foreground Service 기반 자동 매매 로직 구현.',
    stack: ['Kotlin', 'Jetpack Compose', 'Clean Architecture', 'WebSocket', 'Firebase'],
    highlight: '자동 매매 수익률 10%+',
  },
  {
    title: '처음부터 울쎄라',
    period: '2024.04 ~ 2024.07',
    type: '사이드 프로젝트',
    typeColor: '#22D3B8',
    description: '피부 시술 업체 외주 앱. QR 코드 포인트 적립, 포인트 몰, FCM 알림. 5인 팀 협업 (기획·디자인·Android·iOS·백엔드).',
    stack: ['Kotlin', 'Clean Architecture', 'Hilt', 'Flow', 'FCM', 'Retrofit2'],
    highlight: '누적 다운로드 5만+',
  },
  {
    title: '마이셀럽스 스타',
    period: '2023.09 ~ 2024.02',
    type: '회사 프로젝트',
    typeColor: '#F97316',
    description: '스타 팬덤 엔터테인먼트 앱 유지보수. 결제 시스템 개선, Tnk 광고 수익 추가, OAuth 소셜 로그인 구현.',
    stack: ['Kotlin', 'Hilt', 'Coroutine', 'Flow', 'In-app Billing', 'Firebase'],
    highlight: 'CS 90% 이상 감소',
  },
  {
    title: '딥서치 (Deep Search)',
    period: '2023.01 ~ 2023.02',
    type: '회사 프로젝트',
    typeColor: '#22D3B8',
    description: '취향 기반 영화·방송 추천 하이브리드 앱. Product Hunt 출품작으로 단기간 글로벌 주목을 받은 프로젝트.',
    stack: ['Kotlin', 'MVP', 'AAC', 'Firebase', 'Jenkins', 'Gitlab'],
    highlight: 'Product Hunt 일별 4위',
  },
  {
    title: '틀린그림쏙쏙',
    period: '2022.10 ~ 2023.03',
    type: '개인 프로젝트',
    typeColor: '#7C6FFF',
    description: '두 이미지의 차이점 찾기 퍼즐 게임 앱. OpenCV로 차이점 자동 검출, Jetpack Compose 첫 적용 프로젝트.',
    stack: ['Kotlin', 'Jetpack Compose', 'OpenCV', 'Hilt', 'Firebase', 'Admob'],
    highlight: 'Jetpack Compose 첫 도입',
  },
  {
    title: '털뭉치들',
    period: '2021.02 ~ 2021.03',
    type: '개인 프로젝트',
    typeColor: '#7C6FFF',
    description: '반려동물 사진·일상 공유 SNS 앱. 커뮤니티, 채팅, 팔로잉·팔로우, FCM 전송 기능 전체를 1인 기획·개발·서버 담당.',
    stack: ['Kotlin', 'MVVM', 'Firebase', 'Firestore', 'Realtime Database', 'Koin'],
    highlight: '기획·개발·서버 1인 전담',
  },
];

export const skills = [
  {
    category: '언어',
    icon: '💻',
    items: ['Kotlin', 'Java', 'TypeScript', 'Dart', 'React Native'],
  },
  {
    category: '플랫폼',
    icon: '📱',
    items: ['Android (XML)', 'Jetpack Compose', 'Flutter'],
  },
  {
    category: '아키텍처',
    icon: '🏗️',
    items: ['Clean Architecture', 'MVVM', 'MVP', 'MVC', 'MVI'],
  },
  {
    category: 'Android 라이브러리',
    icon: '🤖',
    items: ['Coroutine', 'Flow / StateFlow', 'Hilt', 'Room', 'Paging3', 'Retrofit2', 'OkHttp3', 'Glide', 'Lottie', 'Databinding', 'AAC', 'RxJava', 'In-app Billing', 'Admob', 'OpenCV'],
  },
  {
    category: 'Firebase',
    icon: '🔥',
    items: ['Firestore', 'Realtime Database', 'Storage', 'Crashlytics', 'FCM', 'Authentication', 'App Distribution', 'Test Lab'],
  },
  {
    category: 'CI/CD & DevOps',
    icon: '⚙️',
    items: ['GitLab CI/CD', 'Jenkins', 'Firebase App Distribution', 'Firebase Test Lab', 'JUnit', 'MockK', 'Claude Code CLI'],
  },
  {
    category: '백엔드',
    icon: '🖥️',
    items: ['Spring Boot', 'Spring Data JPA', 'Spring WebFlux', 'Node.js', 'SQLite', 'MySQL'],
  },
  {
    category: '협업 도구',
    icon: '🤝',
    items: ['Jira', 'Slack', 'Figma', 'Zeplin', 'Notion', 'GitHub', 'GitLab'],
  },
];

export const aiTools = [
  {
    tool: 'Claude Code',
    role: 'Primary',
    color: '#7C6FFF',
    usages: [
      'CI/CD 자동화 파이프라인 구축',
      'AI 기반 코드 리뷰 자동화',
      'AI 릴리즈 노트 자동 생성',
      '크래시 리포트 분석 자동화',
      '멀티 에이전트 AI 협업 시스템 개발',
    ],
  },
  {
    tool: 'Gemini AI',
    role: 'Secondary',
    color: '#22D3B8',
    usages: [
      'Jira 이슈 자동 생성 (Function Calling)',
      'AI 기획서 분석 및 구조화',
      'Android 개발 에이전트 시스템',
    ],
  },
  {
    tool: 'ChatGPT',
    role: 'Research',
    color: '#F97316',
    usages: [
      '기술 조사 및 라이브러리 비교',
      '코드 로직 설계 초안',
      'API 명세 작성',
    ],
  },
];
