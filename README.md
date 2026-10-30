# AIDEL Lab Homepage

계명대학교 컴퓨터공학과 **인공지능 및 데이터 공학 연구실 (AIDEL)** 홈페이지입니다.
빌드 과정이 없는 순수 HTML/CSS/JS 사이트이며, GitHub Pages(`aidel-kmu.github.io`)로 배포합니다.

## 미리보기

`index.html`을 브라우저로 더블클릭해서 열면 됩니다. (별도 서버 불필요)

## 내용 수정하기

대부분의 내용은 `data/` 폴더의 파일만 고치면 됩니다. 텍스트는 `{ ko: "...", en: "..." }` 형태로 한/영을 함께 적습니다.

| 파일 | 내용 |
|---|---|
| `data/site.js` | 연구실 이름, 소속, 주소, 이메일 |
| `data/news.js` | 뉴스 (위에 추가할수록 최신) |
| `data/research.js` | 연구 주제 |
| `data/members.js` | 구성원 |
| `data/publications.js` | 논문 |

- 구성원 사진: `assets/img/members/`에 이미지를 넣고 `data/members.js`의 `photo` 경로를 바꿉니다.
- 메뉴·푸터 같은 고정 문구: `assets/js/i18n.js`

## 배포 (GitHub Pages)

1. GitHub에서 Organization `aidel-kmu`를 만들고, 저장소 이름을 `aidel-kmu.github.io`로 생성합니다.
2. 이 폴더의 파일을 해당 저장소에 push 합니다.
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/aidel-kmu/aidel-kmu.github.io.git
   git push -u origin main
   ```
3. 저장소 Settings → Pages에서 Source를 `main` 브랜치 / root로 설정합니다.
4. 몇 분 후 https://aidel-kmu.github.io 에서 확인할 수 있습니다.

이후에는 파일을 수정하고 push만 하면 자동으로 반영됩니다. GitHub 웹에서 파일을 직접 편집해도 됩니다.
