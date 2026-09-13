# 트롯본방 (trotbonbang.com)

트로트 프로그램(미스트롯, 미스터트롯, 현역가왕 등) 편성표·진행상황·투표방법을 한 곳에 모은 정보 사이트입니다.

## 구조

- `index.html` — 홈/편성표/종영 프로그램/곡 이야기 목록을 보여주는 메인 페이지(해시 라우팅 SPA). `style.css`·`data.js`·`templates.js`를 불러와서 씁니다.
- `style.css` — 사이트 전체 스타일.
- `data.js` — 프로그램·곡 이야기 데이터(전부 여기 있음). **데이터를 수정할 땐 이 파일만 고치면 됩니다.**
- `templates.js` — 카드/상세 페이지 HTML을 만드는 함수들. `index.html`(브라우저)과 `build-pages.js`(Node 빌드 스크립트) 양쪽에서 그대로 재사용됩니다.
- `build-pages.js` — `data.js`의 내용으로 검색엔진이 색인할 수 있는 **정적 HTML 페이지**를 만들어내는 Node 스크립트 (`posts/<slug>/index.html`, `programs/<id>/index.html`)와 `sitemap.xml`을 생성합니다. **데이터를 바꾼 뒤에는 `node build-pages.js`를 다시 실행해서 이 페이지들을 새로 만들어야 최신 내용이 반영됩니다.**
- `posts/`, `programs/` — 위 스크립트가 생성한 정적 페이지들 (이미 한 번 생성되어 포함돼 있음).
- `sitemap.xml` — 위 스크립트가 생성한 사이트맵.
- `robots.txt` — 검색엔진 크롤링 허용 설정 + 사이트맵 위치 안내.

외부 리소스는 Google Fonts(Gothic A1) 하나만 불러오고, 나머지 이미지·아이콘은 전부 코드 안에 SVG/CSS로 직접 만들어 넣었습니다(저작권 있는 사진·로고를 쓰지 않기 위함).

## 데이터를 수정하고 싶을 때

1. `data.js`에서 프로그램 정보나 곡 이야기 글을 고칩니다(일반 텍스트 편집기로 열면 됩니다).
2. 터미널에서 이 폴더로 이동해 `node build-pages.js`를 실행합니다 — `posts/`, `programs/`, `sitemap.xml`이 새 데이터로 다시 만들어집니다.
3. `index.html`의 `<span class="updated">` 안 날짜(최근 업데이트 표시)와 `build-pages.js` 맨 위의 `BUILD_DATE` 값도 같이 손으로 갱신해 주세요.
4. 바뀐 파일들을 GitHub에 커밋·푸시하면 Cloudflare Pages가 자동으로 다시 배포합니다.

## 배포 방법 (GitHub + Cloudflare Pages)

1. 이 폴더 내용을 GitHub 저장소에 올립니다.
2. Cloudflare 대시보드 → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**에서 방금 만든 저장소를 선택합니다.
3. 빌드 설정은 아래처럼 두면 됩니다 (정적 페이지들을 미리 만들어서 저장소에 포함해뒀기 때문에 별도 빌드 커맨드가 필요 없어요):
   - **Build command**: 비워두기
   - **Build output directory**: `/`
4. 배포가 끝나면 Cloudflare Pages가 `*.pages.dev` 주소를 하나 줍니다. 여기에 커스텀 도메인(`trotbonbang.com`)을 연결하면 실제 주소로 접속돼요.
5. 이후로는 이 저장소에 새 커밋을 푸시할 때마다 Cloudflare Pages가 자동으로 다시 배포합니다.

## 알아두면 좋은 점

- **검색엔진 색인**: `index.html`은 해시 라우팅(`#program/...`, `#post/...`) 기반 SPA라 개별 페이지가 별도로 색인되지 않지만, `posts/<slug>/`와 `programs/<id>/`는 각각 고유한 URL·`<title>`·메타 설명을 가진 진짜 정적 페이지라 구글 등에 정상적으로 색인됩니다. 홈 화면의 프로그램 카드, "종영 프로그램" 카드, "곡 이야기" 카드, 관련 글 링크가 모두 이 정적 페이지로 바로 연결되도록 되어 있고, `sitemap.xml`에도 전부 등록해뒀습니다.
- 데모 단계라 실제 인물 사진 없이 이니셜 아바타로 대체했고, 방송사 로고도 텍스트 배지로만 표기했습니다 — 저작권·초상권 문제를 피하기 위한 의도적인 선택입니다.
- `index.html`의 편성표/종영 프로그램 안에서 카드를 클릭할 때 일부(요일 편성표 칩 등)는 여전히 페이지 이동 없이 그 자리에서 상세 내용을 보여주는 방식이에요 — 빠른 미리보기 용도로 남겨뒀습니다.
