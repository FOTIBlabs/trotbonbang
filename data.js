// 트롯본방 데이터 (프로그램 · 곡 이야기). index.html(브라우저)과 build-pages.js(Node)가 함께 씀.
// var/function 선언만 사용 — 브라우저 전역 스코프와 Node vm 컨텍스트 양쪽에서 그대로 전역으로 붙도록 하기 위함.
  var MISTROT4_TOP10 = [
    {name:"허찬미", detail:"김연자 '당신은 얄미운 나비' · 마스터 점수 1,498점", resultTag:"결승 진출", resultTone:"advance"},
    {name:"이소나", detail:"최진희 '가버린 당신'", resultTag:"결승 진출", resultTone:"advance"},
    {name:"홍성윤", detail:"김수희 '고독한 연인'", resultTag:"결승 진출", resultTone:"advance"},
    {name:"길려원", detail:"김용임 '사랑여행'", resultTag:"결승 진출", resultTone:"advance"},
    {name:"윤태화", detail:"'참회'", resultTag:"결승 진출", resultTone:"advance"},
    {name:"김산하", detail:"김수희 '멍에' · 마스터 점수 1,492점 (15위에서 급상승)", resultTag:"탈락", resultTone:"eliminated"},
    {name:"유미", detail:"설운도 '잃어버린 30년' · 마스터 점수 1,503점", resultTag:"탈락", resultTone:"eliminated"},
    {name:"이엘리야", detail:"최진희 '우린 너무 쉽게 헤어졌어요'", resultTag:"탈락", resultTone:"eliminated"},
    {name:"윤윤서", detail:"'오래오래 살아주세요'", resultTag:"탈락", resultTone:"eliminated"},
    {name:"염유리", detail:"곡 정보 확인 안됨", resultTag:"탈락", resultTone:"eliminated"}
  ];
  var MISTROT4_TOP5 = [
    {name:"이소나", detail:"패티김 '사랑은 생명의 꽃' · 문자투표 256,310표(27.98%)로 역전 우승", resultTag:"진 · 1위 우승", resultTone:"win"},
    {name:"허찬미", detail:"남진 '나야 나' (프로듀스101 하이라이트 포함)", resultTag:"선 · 2위", resultTone:"final"},
    {name:"홍성윤", detail:"이선희 '인연'", resultTag:"미 · 3위", resultTone:"final"},
    {name:"길려원", detail:"주현미 '대왕의 길'", resultTag:"4위", resultTone:"final"},
    {name:"윤태화", detail:"이미자 '노래는 나의 인생'", resultTag:"5위", resultTone:"final"}
  ];
  var MUMYEONG_TOP7 = [
    {name:"성리", detail:"신유 '애가' (어머니를 향한 사모곡) · 종합 2,784점, 전 부문 1위", resultTag:"우승", resultTone:"win"},
    {name:"하루", detail:"종합 2,607점 · 곡 정보 확인 안됨", resultTag:"2위", resultTone:"final"},
    {name:"장한별", detail:"종합 2,631점 · 곡 정보 확인 안됨", resultTag:"3위", resultTone:"final"},
    {name:"이루네", detail:"곡 정보 확인 안됨", resultTag:"4위", resultTone:"final"},
    {name:"황윤성", detail:"곡 정보 확인 안됨", resultTag:"5위", resultTone:"final"},
    {name:"정연호", detail:"곡 정보 확인 안됨", resultTag:"6위", resultTone:"final"},
    {name:"이창민", detail:"곡 정보 확인 안됨", resultTag:"7위", resultTone:"final"}
  ];
  var HYEONYEOK_TOP3 = [
    {name:"전유진", detail:"결승 무대 곡 정보 확인 안됨 · 득표율 1위(마이진과 0.7%p 차)", resultTag:"우승", resultTone:"win"},
    {name:"마이진", detail:"결승 무대 곡 정보 확인 안됨", resultTag:"2위", resultTone:"final"},
    {name:"김다현", detail:"결승 무대 곡 정보 확인 안됨", resultTag:"3위", resultTone:"final"}
  ];
  var MISTERTROT3_TOP7 = [
    {name:"김용빈", detail:"국민투표 1위 · 결승 무대 곡 정보 확인 안됨", resultTag:"진 · 1위 우승", resultTone:"win"},
    {name:"손빈아", detail:"결승 무대 곡 정보 확인 안됨", resultTag:"선 · 2위", resultTone:"final"},
    {name:"천록담", detail:"결승 무대 곡 정보 확인 안됨", resultTag:"미 · 3위", resultTone:"final"},
    {name:"춘길", detail:"결승 무대 곡 정보 확인 안됨", resultTag:"4위", resultTone:"final"},
    {name:"최재명", detail:"결승 무대 곡 정보 확인 안됨", resultTag:"5위", resultTone:"final"},
    {name:"남승민", detail:"결승 무대 곡 정보 확인 안됨", resultTag:"6위", resultTone:"final"},
    {name:"추혁진", detail:"결승 무대 곡 정보 확인 안됨", resultTag:"7위", resultTone:"final"}
  ];
  var HYEONYEOK2_TOP7 = [
    {name:"박서진", detail:"신곡 '남도 가는 길' 무대 · 제2대 현역가왕 등극", resultTag:"1위 우승", resultTone:"win"},
    {name:"진해성", detail:"신곡 '불나방' 무대", resultTag:"2위", resultTone:"final"},
    {name:"에녹", detail:"신곡 '대전역 부르스' 무대", resultTag:"3위", resultTone:"final"},
    {name:"신승태", detail:"신곡 '증거' 무대", resultTag:"4위", resultTone:"final"},
    {name:"김준수", detail:"신곡 '싹 다 잊고 한잔' 무대", resultTag:"5위", resultTone:"final"},
    {name:"최수호", detail:"신곡 '너 T야' 무대", resultTag:"6위", resultTone:"final"},
    {name:"강문경", detail:"신곡 '팽이' 무대", resultTag:"7위", resultTone:"final"}
  ];

  var PROGRAMS = [
    {
      id:"mistrot4", broadcaster:"TV조선", accent:"#7B2C8F", accentDark:"#4A1A57",
      title:"미스트롯4", tagline:"대한민국 여성 트로트 오디션 시즌4",
      type:"competition",
      statusLabel:"종영 · 진 이소나", statusTone:"ended",
      airDay:"종영", airTime:"22:00", airNote:"방영 당시 매주 목요일 · 결승 방송은 21:30 시작",
      seasonInfo:"시즌4 · 전 12부작 · 2025.12.18 ~ 2026.03.05",
      participantsTotal:88,
      missionLabel:"현재 상태", mission:"시즌 종영 — 최종 우승(진) 이소나, 준우승(선) 허찬미, 3위(미) 홍성윤",
      lineupLabel:"최종 순위 (TOP5)",
      lineup:[{rank:"진",name:"이소나"},{rank:"선",name:"허찬미"},{rank:"미",name:"홍성윤"},{rank:4,name:"길려원"},{rank:5,name:"윤태화"}],
      lineupNote:"※ 2026.03.05 결승 방송 기준 공식 최종 순위",
      finalTopLabel:"TOP5", finalRoster:MISTROT4_TOP5,
      history:[
        {stage:"예선", result:"88팀 참가 중 45팀 통과"},
        {stage:"본선 1~4차전", result:"TOP20 → TOP10으로 압축"},
        {stage:"준결승 (TOP10)", result:"TOP10 중 TOP5 확정 (최고 시청률 17.7%)", roster:MISTROT4_TOP10},
        {stage:"결승 (TOP5)", result:"실시간 문자투표로 최종 순위 발표 — 우승 이소나(진)", roster:MISTROT4_TOP5}
      ],
      prize:"우승 상금 3억원 + 유럽여행 이용권 + 척추관리 의료기기",
      voting:{sms:"#4560 + 참가자 번호 문자 전송 (종영 · 투표 종료)", app:"네이버 응원투표 — 1일 1회, 최대 7명 중복 선택 가능 (종영 · 투표 종료)", note:"방영 당시 결승 생방송 종료 전까지 집계되어 방송 중 실시간 반영됐습니다."}
    },
    {
      id:"mistertrot4", broadcaster:"TV조선", accent:"#7B2C8F", accentDark:"#4A1A57",
      title:"미스터트롯4", tagline:"대한민국 남성 트로트 오디션 시즌4",
      type:"competition",
      statusLabel:"참가자 모집중", statusTone:"upcoming",
      airDay:"12월 예정", airTime:"목 22:00", airNote:"2026.12.17(목) 첫 방송 예정",
      seasonInfo:"시즌4 · 2026.12.17 첫 방송 예정",
      participantsTotal:null,
      missionLabel:"진행 단계", mission:"2차 참가자 모집 진행 중 (1차 7.20~8.31 마감, 2차 9.1~ 접수)",
      lineupLabel:"출연진",
      lineup:[],
      lineupNote:"출연진 미공개 — 방영 시작 전 예시 화면입니다.",
      history:[
        {stage:"참가자 모집", result:"1차 모집(2026.07.20~08.31) 종료 · 2차 모집(2026.09.01~) 진행 중"},
        {stage:"방영 예정", result:"2026.12.17(목) 오후 10시 첫 방송 예정"}
      ],
      prize:"추후 공개",
      voting:{sms:"추후 공개", app:"추후 공개", note:"방영이 시작되면 투표 채널이 이 페이지에 공개될 예정입니다."}
    },
    {
      id:"mistertrot3", broadcaster:"TV조선", accent:"#7B2C8F", accentDark:"#4A1A57",
      title:"미스터트롯3", tagline:"대한민국 남성 트로트 오디션 시즌3",
      type:"competition",
      statusLabel:"종영 · 진 김용빈", statusTone:"ended",
      airDay:"종영", airTime:"-", airNote:"정확한 방영 요일 정보 확인 안됨",
      seasonInfo:"시즌3 · 2024.12.01 ~ 2025.03.13",
      participantsTotal:null,
      missionLabel:"현재 상태", mission:"시즌 종영 — 최종 우승(진) 김용빈, 준우승(선) 손빈아, 3위(미) 천록담",
      lineupLabel:"최종 순위 (TOP7)",
      lineup:[{rank:"진",name:"김용빈"},{rank:"선",name:"손빈아"},{rank:"미",name:"천록담"},{rank:4,name:"춘길"},{rank:5,name:"최재명"},{rank:6,name:"남승민"},{rank:7,name:"추혁진"}],
      lineupNote:"※ 2025.03.13 결승 방송 기준 공식 최종 순위",
      finalTopLabel:"TOP7", finalRoster:MISTERTROT3_TOP7,
      history:[
        {stage:"예선~본선", result:"전국 참가자 대상 예선·본선 진행 (참가 규모 정보 확인 안됨)"},
        {stage:"결승 (TOP7)", result:"2025.03.13 방송 — 국민투표로 최종 순위 발표, 우승 김용빈(진)", roster:MISTERTROT3_TOP7}
      ],
      prize:"정보 확인 안됨",
      voting:{sms:"종영 프로그램 · 투표 종료", app:"-", note:"방영 당시 국민투표로 순위가 공개됐어요. 세부 투표 방식 정보 확인 안됨."}
    },
    {
      id:"mumyeongjeonseol", broadcaster:"MBN", accent:"#9E2E6B", accentDark:"#5E1B40",
      title:"무명전설", tagline:"트롯 사내들의 서열전쟁",
      type:"competition",
      statusLabel:"종영 · 우승 성리", statusTone:"ended",
      airDay:"종영", airTime:"21:40", airNote:"방영 당시 매주 수요일",
      seasonInfo:"2026.02.25 ~ 05.13 · 전 12부작",
      participantsTotal:99,
      missionLabel:"현재 상태", mission:"시즌 종영 — 우승 성리, 상금 1억원 + 영화 제작 + 제주 세컨하우스",
      lineupLabel:"진출자",
      lineup:[],
      lineupNote:"※ 결승 진출자(TOP7)는 아래 '진행 이력 → 결승' 자세히 보기에서 확인할 수 있어요.",
      finalTopLabel:"TOP7", finalRoster:MUMYEONG_TOP7,
      history:[
        {stage:"예선", result:"99명 참가, 1차 예선 진행"},
        {stage:"결승 (TOP7)", result:"2026.05.13 방송 — 우승 성리 (종합 2,784점, 전 부문 1위)", roster:MUMYEONG_TOP7}
      ],
      prize:"우승 상금 1억원 + 영화 제작 + 제주도 세컨드 하우스",
      voting:{sms:"종영 프로그램 · 투표 종료", app:"-", note:"방영 당시 회차별 투표 방식이 방송 중 안내됐습니다."}
    },
    {
      id:"hyeonyeokgawang", broadcaster:"MBN", accent:"#9E2E6B", accentDark:"#5E1B40",
      title:"현역가왕", tagline:"현역 여성 트롯 가수 TOP7 서바이벌",
      type:"competition",
      statusLabel:"시즌 종료", statusTone:"ended",
      airDay:"종영", airTime:"21:10", airNote:"방영 당시 매주 화요일",
      seasonInfo:"시즌1 · 전 12부작 · 2023.11.28 ~ 2024.02.13",
      participantsTotal:34,
      missionLabel:"현재 상태", mission:"시즌 종영 — 우승 전유진 (시즌2는 '현역가왕2'로 방영 후 종영)",
      lineupLabel:"최종 순위",
      lineup:[{rank:1,name:"전유진"},{rank:2,name:"마이진"},{rank:3,name:"김다현"}],
      lineupNote:"※ 1~3위만 공식 확인됨 (4~7위는 매체마다 명단이 달라 정확한 확인이 어려워 생략했어요)",
      finalTopLabel:"TOP7", finalRoster:HYEONYEOK_TOP3,
      finalNote:"※ 공식 TOP7 중 1~3위만 신뢰 가능한 소스로 확인됐어요. 4~7위는 보도마다 명단이 달라 표시하지 않았습니다.",
      history:[
        {stage:"예선", result:"현역 여성 트롯 가수 34명 참가"},
        {stage:"본선 1~3차전 · 준결승", result:"단계별 순위 공개 방식으로 진행"},
        {stage:"결승 (TOP7)", result:"우승 전유진 · 2위 마이진 · 3위 김다현 (득표율 1~2위 0.7%p 차이)", roster:HYEONYEOK_TOP3}
      ],
      prize:"2024 한일 트롯 가왕전 출전권",
      voting:{sms:"종영 프로그램 · 투표 종료", app:"-", note:"방영 당시 대국민 응원 투표로 주간 순위를 공개했습니다."}
    },
    {
      id:"hyeonyeokgawang2", broadcaster:"MBN", accent:"#9E2E6B", accentDark:"#5E1B40",
      title:"현역가왕2", tagline:"현역 트롯 가수 TOP7 서바이벌 시즌2",
      type:"competition",
      statusLabel:"종영 · 우승 박서진", statusTone:"ended",
      airDay:"종영", airTime:"-", airNote:"정확한 방영 요일 정보 확인 안됨",
      seasonInfo:"시즌2 · 전 13부작 · 2024.11.26 ~ 2025.02.25",
      participantsTotal:null,
      missionLabel:"현재 상태", mission:"시즌 종영 — 우승 박서진 (제2대 현역가왕 등극)",
      lineupLabel:"최종 순위 (TOP7)",
      lineup:[{rank:1,name:"박서진"},{rank:2,name:"진해성"},{rank:3,name:"에녹"},{rank:4,name:"신승태"},{rank:5,name:"김준수"},{rank:6,name:"최수호"},{rank:7,name:"강문경"}],
      lineupNote:"※ 결승 최종 발표 기준 공식 TOP7 순위",
      finalTopLabel:"TOP7", finalRoster:HYEONYEOK2_TOP7,
      history:[
        {stage:"예선~준결승", result:"현역 트롯 가수 다수 참가, 단계별 라운드로 TOP7 압축 (참가 규모 정보 확인 안됨)"},
        {stage:"결승 (TOP7)", result:"신곡 미션 포함 최종 라운드 — 우승 박서진 · 2위 진해성 · 3위 에녹", roster:HYEONYEOK2_TOP7}
      ],
      prize:"2025 한일가왕전 출전권",
      voting:{sms:"종영 프로그램 · 투표 종료", app:"-", note:"방영 당시 대국민 투표 방식으로 순위가 공개됐습니다. 세부 방식 정보 확인 안됨."}
    },
    {
      id:"thetrotshow", broadcaster:"SBS", accent:"#E0407F", accentDark:"#93244F",
      title:"더트롯쇼", tagline:"매주 신곡으로 순위를 겨루는 트롯 전용 차트쇼",
      type:"variety",
      statusLabel:"비정기 방영 · 결방 중", statusTone:"live",
      airDay:"월", airTime:"20:00", airNote:"2026년부터 한 달에 1회꼴로 비정기 녹화 · 2026.09.07 이후 결방 중",
      seasonInfo:"2025.03.24~ 월요일 편성 (2026년 비정기 녹화 체제로 전환)",
      participantsTotal:null,
      missionLabel:"현재 상태", mission:"재정적 이슈로 2026년부터 녹화 주기가 크게 줄어 한 달에 1회 정도만 녹화되고 있어요 · 2026.09.07 방송분부터 결방 중이에요.",
      lineupLabel:"출연진",
      lineup:[],
      lineupNote:"매주 신곡 발매곡을 대상으로 순위를 매기는 차트 방식이라 고정 출연진이 없어요.",
      history:[
        {stage:"포맷", result:"매주 'The Trot Show 차트'를 집계해 트롯 신곡 1위를 가리는 순위 프로그램 · 1위가 3회 연속 우승하면 '명예의 전당'에 올라 집계 대상에서 제외돼요"}
      ],
      prize:"주간 1위 타이틀 (3회 연속 우승 시 명예의 전당 등재)",
      voting:{sms:"-", app:"-", note:"시청자 문자·앱 투표가 아닌 자체 차트 집계 방식이에요. 세부 집계 기준은 정보 확인 안됨."}
    },
    {
      id:"trotminjok", broadcaster:"MBC", accent:"#C77B2E", accentDark:"#8A5310",
      title:"트로트의 민족", tagline:"전국 팔도 '진짜 트로트 왕' 경연",
      type:"competition",
      statusLabel:"시즌 종료(2020~21)", statusTone:"ended",
      airDay:"종영", airTime:"-", airNote:"현재 MBC에는 정규 편성 중인 트로트 프로그램이 없어요",
      seasonInfo:"2020.10.16 ~ 2021.01.08 방영",
      participantsTotal:null,
      missionLabel:"현재 상태", mission:"MBC 정규 편성 트로트 프로그램 부재 — 최근 방영작을 대신 보여드려요",
      lineupLabel:"진출자",
      lineup:[],
      lineupNote:"종영한 지 오래된 시즌이라 진출자 데이터는 표시하지 않았어요.",
      history:[
        {stage:"포맷", result:"전국 팔도에서 트로트를 가장 잘 부르는 '진짜 트로트 왕'을 뽑는 경연 버라이어티"}
      ],
      prize:"비공개",
      voting:{sms:"종영 프로그램 · 투표 종료", app:"-", note:"현재 MBC에 신규 편성된 트로트 프로그램이 생기면 이 자리에 업데이트할게요."}
    },
    {
      id:"gayomudae", broadcaster:"KBS1", accent:"#4F2A66", accentDark:"#2E1740",
      title:"가요무대", tagline:"대한민국 최장수 정통 가요 무대",
      type:"stage",
      statusLabel:"정규 방영중", statusTone:"live",
      airDay:"월", airTime:"22:00", airNote:"",
      seasonInfo:"1985년 첫 방송 · 40년 이상 방영중",
      participantsTotal:null,
      missionLabel:"이번 주 특집", mission:"원로 가수 초청 무대",
      lineupLabel:"이번 주 출연 가수",
      lineup:[],
      lineupNote:"경연이 아닌 정통 라이브 무대로, 매회 출연진이 바뀝니다.",
      history:[
        {stage:"포맷", result:"순위 없는 정통 가요 라이브 무대 프로그램"}
      ],
      prize:"-",
      voting:{sms:"-", app:"-", note:"경연 프로그램이 아니라 시청자 투표가 없습니다."}
    }
  ];

  var BROADCASTER_ORDER = ["TV조선","MBN","SBS","MBC","KBS1"];
  var DAY_ORDER = ["월","화","수","목","금","토","일"];
  var byId = {};
  PROGRAMS.forEach(function(p){ byId[p.id] = p; });

  var POSTS = [
    {
      slug:"goehyangyeok-imyoungwoong",
      title:"가요무대에서 다시 울린 '고향역', 임영웅이 그려낸 나훈아의 향수",
      programId:"gayomudae", broadcaster:"KBS1",
      date:"2026.08.03",
      episodeInfo:"가요무대 1959회 · '스타의 그 때 그 시절' 특집 (12번째 순서)",
      songTitle:"고향역", originalArtist:"나훈아 (1972)", performer:"임영웅",
      excerpt:"1972년 나훈아가 부른 '고향역'을 임영웅이 가요무대 무대에 다시 세웠어요. 반세기 가까이 된 곡이 어떻게 만들어졌고, 왜 지금도 다시 불리는지 정리했어요.",
      youtubeQuery:"가요무대 임영웅 고향역",
      body:[
        "'고향역'은 나훈아가 1972년 6월에 발표한 곡으로, 작사·작곡을 맡은 임종수가 자신의 고향 근처에 있던 황등역에서 아이디어를 얻어 만든 곡으로 알려져 있다. 원래 같은 멜로디가 1970년에 다른 제목으로 먼저 발매됐지만 큰 반응을 얻지 못했고, 제목과 가사, 편곡을 다시 손봐 '고향역'이라는 이름으로 재발매하면서 나훈아를 대표하는 곡 중 하나로 자리잡았다. 타향에서 고향을 그리워하는 마음을 담고 있어, 명절 특집 무대에서 특히 자주 다시 불리는 곡이다.",
        "2026년 8월 3일 방송된 가요무대 1959회는 '스타의 그 때 그 시절'이라는 제목으로, 후배 가수들이 원로 가수의 대표곡을 자신의 스타일로 다시 부르는 특집으로 꾸며졌다. 이 회차에서 임영웅은 12번째 순서로 무대에 올라 '고향역'을 불렀다. 나훈아 특유의 굵은 저음 대신 자신의 음색으로 곡을 풀어내며, 원곡과는 결이 다른 담백한 무대를 선보였다는 평가를 받았다.",
        "같은 회차에서는 주현미가 이미자의 곡을, 송가인이 황정자의 곡을 잇달아 불러 세대를 넘나드는 '커버 무대' 특집의 성격을 뚜렷하게 보여줬다."
      ]
    },
    {
      slug:"nangrang18se-jangyoonjeong",
      title:"1949년 곡을 2026년 무대에, 장윤정이 다시 부른 '낭랑 18세'",
      programId:"gayomudae", broadcaster:"KBS1",
      date:"2026.08.03",
      episodeInfo:"가요무대 1959회 · '스타의 그 때 그 시절' 특집 (5번째 순서)",
      songTitle:"낭랑 18세", originalArtist:"백난아 (1949)", performer:"장윤정",
      excerpt:"박시춘 작곡, 유호 작사로 1949년에 나온 '낭랑 18세'를 장윤정이 가요무대에서 다시 불렀어요. 77년 가까이 이어져 온 이 곡의 배경을 정리했어요.",
      youtubeQuery:"가요무대 장윤정 낭랑 18세",
      body:[
        "'낭랑 18세'는 1949년 발표된 곡으로, 박시춘이 곡을 쓰고 유호가 노랫말을 붙였으며 백난아가 처음 불렀다. 소쩍새 울음소리에 그리움과 기다림을 빗댄 서정적인 가사로 잘 알려져 있으며, 한국 트로트 초창기를 대표하는 곡 중 하나로 꼽힌다. 발표 이후에도 여러 가수들에 의해 새로운 편곡으로 꾸준히 다시 불렸고, 2004년에는 같은 제목의 드라마 엔딩곡으로 쓰이는 등 세대를 넘어 이어지고 있다.",
        "2026년 8월 3일 가요무대 1959회 '스타의 그 때 그 시절' 특집에서 장윤정은 다섯 번째 순서로 이 곡을 불렀다. 원곡이 발표된 지 77년이 지난 곡을 트로트 장르에서 오랫동안 활동해 온 장윤정이 다시 무대에 올리면서, 세대를 잇는 무대라는 의미가 더해졌다.",
        "이 회차는 가수 자신의 히트곡뿐 아니라 원로 가수들의 명곡을 후배 세대가 재해석하는 구성으로 꾸며져, 오래된 곡들이 방송을 통해 어떻게 다시 조명받는지 보여준 무대였다."
      ]
    }
  ];
  var postBySlug = {};
  POSTS.forEach(function(post){ postBySlug[post.slug] = post; });

if(typeof module !== "undefined" && module.exports){
  module.exports = { PROGRAMS: PROGRAMS, POSTS: POSTS, BROADCASTER_ORDER: BROADCASTER_ORDER, DAY_ORDER: DAY_ORDER, byId: byId, postBySlug: postBySlug };
}
