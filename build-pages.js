// build-pages.js
// data.js에 있는 프로그램/곡 이야기 데이터로 실제 검색엔진이 색인할 수 있는
// 정적 HTML 페이지(/posts/<slug>/index.html, /programs/<id>/index.html)와
// sitemap.xml을 생성합니다.
//
// index.html은 해시 라우팅(#post/slug, #program/id) 기반 SPA라서 자바스크립트가
// 렌더링하는 해시 프래그먼트는 검색엔진이 별도 페이지로 색인하지 못합니다.
// 이 스크립트가 만드는 파일들은 진짜 URL 경로를 가진, 자바스크립트 없이도
// 내용이 그대로 보이는 완전한 정적 HTML이라 구글 등에 정상적으로 색인됩니다.
//
// 사용법: data.js를 수정한 뒤 `node build-pages.js`를 다시 실행하면
// posts/ · programs/ · sitemap.xml이 최신 데이터로 다시 생성됩니다.
// (Cloudflare Pages에는 빌드 커맨드를 따로 설정하지 않고, 생성된 결과물을
//  index.html 등과 함께 그대로 GitHub 저장소에 커밋해서 올리면 됩니다.)

"use strict";
var vm = require("vm");
var fs = require("fs");
var path = require("path");

var ROOT = __dirname;
var SITE_URL = "https://trotbonbang.com";
var BUILD_DATE = "2026-09-13"; // index.html의 "최근 업데이트" 배지와 함께 수동으로 갱신

// data.js + templates.js를 같은 전역 스코프에서 실행해서 PROGRAMS/POSTS/cardHtml 등을 확보
var sandbox = {};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, "data.js"), "utf8"), sandbox, { filename: "data.js" });
vm.runInContext(fs.readFileSync(path.join(ROOT, "templates.js"), "utf8"), sandbox, { filename: "templates.js" });

var PROGRAMS = sandbox.PROGRAMS;
var POSTS = sandbox.POSTS;
var esc = sandbox.esc;
var postDetailHtml = sandbox.postDetailHtml;
var detailHtml = sandbox.detailHtml;
var scheduleText = sandbox.scheduleText;

function siteChrome(bodyHtml){
  return ''+
  '<header class="site-header">'+
    '<div class="wrap">'+
      '<div class="brand">'+
        '<a href="/" style="text-decoration:none;color:inherit;"><span class="brand-mark">🎤 트롯본방</span></a>'+
        '<span class="brand-tagline">본방사수 필수 — 트로트 편성표 &amp; 진행상황</span>'+
      '</div>'+
      '<nav class="site-nav">'+
        '<a class="nav-btn" href="/">홈</a>'+
        '<a class="nav-btn" href="/#schedule">편성표 보기</a>'+
        '<a class="nav-btn" href="/#ended">종영 프로그램</a>'+
        '<a class="nav-btn" href="/#posts">곡 이야기</a>'+
      '</nav>'+
    '</div>'+
  '</header>'+
  '<div class="demo-strip">'+
    '<div class="wrap">'+
      '<span class="msg">🔔 데모 버전입니다 · 방송사·편성 정보는 실제 보도자료를 참고했으며, 사진은 저작권 문제로 예시 아바타로 표시했습니다</span>'+
      '<span class="updated">🕓 최근 업데이트 '+BUILD_DATE.replace(/-/g, ".")+'</span>'+
    '</div>'+
  '</div>'+
  '<main><section><div class="wrap">'+
    bodyHtml+
  '</div></section></main>'+
  '<footer>ⓒ 2026 트롯본방 (데모) · 문의 privacy@fotiblabs.com</footer>';
}

function pageShell(opts){
  return ''+
  '<!DOCTYPE html>\n'+
  '<html lang="ko">\n'+
  '<head>\n'+
  '<meta charset="UTF-8">\n'+
  '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n'+
  '<title>'+esc(opts.title)+'</title>\n'+
  '<meta name="description" content="'+esc(opts.description)+'">\n'+
  '<link rel="canonical" href="'+opts.url+'">\n'+
  '<meta property="og:title" content="'+esc(opts.title)+'">\n'+
  '<meta property="og:description" content="'+esc(opts.description)+'">\n'+
  '<meta property="og:type" content="'+opts.ogType+'">\n'+
  '<meta property="og:locale" content="ko_KR">\n'+
  '<meta property="og:url" content="'+opts.url+'">\n'+
  '<link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%20100%20100\'%3E%3Ctext%20y=\'.9em\'%20font-size=\'90\'%3E%F0%9F%8E%A4%3C/text%3E%3C/svg%3E">\n'+
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500;700;900&display=swap">\n'+
  '<link rel="stylesheet" href="/style.css">\n'+
  '</head>\n'+
  '<body>\n'+
  siteChrome(opts.body)+
  '\n</body>\n</html>\n';
}

function writeFile(relPath, content){
  var full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf8");
  return full;
}

var sitemapUrls = [
  { loc: SITE_URL + "/", priority: "1.0" }
];

// ---- 곡 이야기 정적 페이지 ----
POSTS.forEach(function(post){
  var url = SITE_URL + "/posts/" + post.slug + "/";
  var html = pageShell({
    title: post.title + " - 트롯본방",
    description: post.excerpt,
    url: url,
    ogType: "article",
    body: '<a class="back-btn" href="/#posts">← 곡 이야기 목록으로</a>' + postDetailHtml(post)
  });
  var out = writeFile("posts/" + post.slug + "/index.html", html);
  sitemapUrls.push({ loc: url, priority: "0.8" });
  console.log("wrote", path.relative(ROOT, out));
});

// ---- 프로그램 정적 페이지 ----
PROGRAMS.forEach(function(p){
  var desc = p.tagline + " — " + scheduleText(p) + " · " + (p.mission || "");
  if(desc.length > 155) desc = desc.slice(0, 152) + "...";
  var url = SITE_URL + "/programs/" + p.id + "/";
  var html = pageShell({
    title: p.title + " - 트롯본방 (편성표·진행상황)",
    description: desc,
    url: url,
    ogType: "website",
    body: '<a class="back-btn" href="/">← 홈으로</a>' + detailHtml(p)
  });
  var out = writeFile("programs/" + p.id + "/index.html", html);
  sitemapUrls.push({ loc: url, priority: p.statusTone === "ended" ? "0.5" : "0.9" });
  console.log("wrote", path.relative(ROOT, out));
});

// ---- sitemap.xml ----
var sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n'+
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+
  sitemapUrls.map(function(u){
    return '  <url>\n'+
      '    <loc>'+u.loc+'</loc>\n'+
      '    <lastmod>'+BUILD_DATE+'</lastmod>\n'+
      '    <priority>'+u.priority+'</priority>\n'+
      '  </url>\n';
  }).join("")+
  '</urlset>\n';
writeFile("sitemap.xml", sitemapXml);
console.log("wrote sitemap.xml (" + sitemapUrls.length + " urls)");
