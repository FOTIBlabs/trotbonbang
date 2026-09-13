// 트롯본방 HTML 렌더 함수 모음 (DOM에 직접 손대지 않는 순수 함수만). index.html과 build-pages.js가 공유.
// data.js가 먼저 로드되어 있어야 함 (PROGRAMS/POSTS/byId 등을 참조).
  function esc(s){
    return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){
      return ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"})[c];
    });
  }

  function statusPill(p){
    return '<span class="status-pill tone-'+p.statusTone+'">'+esc(p.statusLabel)+'</span>';
  }

  function scheduleText(p){
    if(p.airDay === "미정") return "방영 일정 추후 공개";
    if(!p.airTime || p.airTime === "-") return p.airDay;
    return p.airDay + ' ' + p.airTime;
  }

  var AVATAR_PALETTE = ["#7B2C8F","#9E2E6B","#D9467F","#C77B2E","#5B3A8C","#A8447A","#4F2A66","#B6772A"];
  function avatarColor(name){
    var sum = 0;
    for(var i=0;i<name.length;i++){ sum += name.charCodeAt(i); }
    return AVATAR_PALETTE[sum % AVATAR_PALETTE.length];
  }
  function avatarHtml(name){
    var ch = name ? name.charAt(0) : "?";
    return '<span class="avatar" style="background:'+avatarColor(name)+'" aria-hidden="true">'+esc(ch)+'</span>';
  }

  var TYPE_ICONS = {
    competition:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 8h20v9a10 10 0 0 1-20 0V8z"/><path d="M14 11H8a1 1 0 0 0-1 1c0 4.5 3.2 8 8 8.6"/><path d="M34 11h6a1 1 0 0 1 1 1c0 4.5-3.2 8-8 8.6"/><path d="M24 27v6"/><path d="M17 39h14"/><path d="M19 39l1-6h8l1 6"/></svg>',
    variety:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6c8 0 14 6.2 14 14 0 10-14 22-14 22S10 30 10 20C10 12.2 16 6 24 6z"/><path d="M23.5 21.5V12l5-1.6"/><circle cx="21" cy="21.5" r="2.6" fill="currentColor" stroke="none"/></svg>',
    stage:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="18" y="6" width="12" height="18" rx="6"/><path d="M13 20a11 11 0 0 0 22 0"/><path d="M24 31v9"/><path d="M17 40h14"/></svg>'
  };
  function typeIconHtml(type, cls){
    var svg = TYPE_ICONS[type] || TYPE_ICONS.competition;
    return '<span class="type-icon '+cls+'" aria-hidden="true">'+svg+'</span>';
  }

  function cardHtml(p){
    return ''+
    '<a class="prog-card" href="/programs/'+p.id+'/" data-id="'+p.id+'" aria-label="'+esc(p.title)+' 상세보기">'+
      '<div class="prog-thumb" style="--acc:'+p.accent+';--acc-dark:'+p.accentDark+'">'+
        typeIconHtml(p.type, "type-icon-thumb")+
        '<div class="prog-badges">'+
          '<span class="chip">'+esc(p.broadcaster)+'</span>'+
          statusPill(p)+
        '</div>'+
        '<h3 class="prog-title">'+esc(p.title)+'</h3>'+
      '</div>'+
      '<div class="prog-meta">'+
        '<p class="prog-tagline">'+esc(p.tagline)+'</p>'+
        '<p class="prog-schedule">'+esc(scheduleText(p))+'</p>'+
      '</div>'+
    '</a>';
  }

  function schedChip(p){
    return '<button class="sched-chip" style="--acc:'+p.accent+'" data-id="'+p.id+'">'+
      '<span class="time">'+esc(p.airTime)+'</span>'+
      '<span class="name">'+esc(p.title)+'</span>'+
      '<span class="bc">'+esc(p.broadcaster)+'</span>'+
    '</button>';
  }

  function endedCardHtml(p){
    var topBadge = p.finalTopLabel ? '<span class="past-season-top">최종 '+esc(p.finalTopLabel)+'</span>' : '';
    var body = '<p class="past-season-summary">'+esc(p.mission || p.statusLabel)+'</p>';
    if(p.finalRoster && p.finalRoster.length){
      body += '<div class="history-roster">'+ p.finalRoster.map(rosterCardHtml).join("") +'</div>';
    } else if(p.lineupNote){
      body += '<p class="past-season-note">'+esc(p.lineupNote)+'</p>';
    }
    if(p.finalNote){
      body += '<p class="past-season-note">'+esc(p.finalNote)+'</p>';
    }
    return '<div class="past-season-card">'+
      '<div class="past-season-head">'+
        '<span class="type-icon type-icon-mini" style="color:'+p.accent+'" aria-hidden="true">'+(TYPE_ICONS[p.type]||TYPE_ICONS.competition)+'</span>'+
        '<span class="chip">'+esc(p.broadcaster)+'</span>'+
        '<span class="past-season-title">'+esc(p.title)+'</span>'+
        topBadge+
        '<a class="past-season-link" href="/programs/'+p.id+'/">전체 정보 보기 →</a>'+
      '</div>'+
      '<div class="past-season-body">'+ body +'</div>'+
    '</div>';
  }

  function postCardHtml(post){
    var prog = byId[post.programId];
    return '<a class="post-card" href="/posts/'+post.slug+'/">'+
      '<div class="post-card-meta">'+
        '<span class="post-tag">'+esc(post.broadcaster)+(prog ? ' · '+esc(prog.title) : '')+'</span>'+
        '<span class="post-date">'+esc(post.date)+'</span>'+
      '</div>'+
      '<div class="post-card-title">'+esc(post.title)+'</div>'+
      '<p class="post-card-excerpt">'+esc(post.excerpt)+'</p>'+
    '</a>';
  }

  function videoLinkCardHtml(post){
    return '<div class="post-video-card">'+
      '<span class="post-video-icon" aria-hidden="true">▶</span>'+
      '<div class="post-video-body">'+
        '<div class="post-video-label">공식 영상 찾아보기</div>'+
        '<div class="post-video-note">유튜브에서 <b>'+esc(post.youtubeQuery)+'</b>로 검색하면 방송사·가수 공식 채널의 무대 영상을 확인할 수 있어요. (영상을 직접 올리거나 퍼가지 않고, 검색으로 안내만 해요)</div>'+
      '</div>'+
      '<a class="post-video-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/results?search_query='+encodeURIComponent(post.youtubeQuery)+'">유튜브에서 검색 →</a>'+
    '</div>';
  }

  function postDetailHtml(post){
    var prog = byId[post.programId];
    var factsHtml = ''+
      '<span>곡 <b>'+esc(post.songTitle)+'</b></span>'+
      '<span>원곡 <b>'+esc(post.originalArtist)+'</b></span>'+
      '<span>이번 무대 <b>'+esc(post.performer)+'</b></span>'+
      '<span>방송 <b>'+esc(post.episodeInfo)+'</b></span>';
    return ''+
    '<div class="post-detail-head">'+
      '<span class="post-tag">'+esc(post.broadcaster)+' · '+esc(post.date)+'</span>'+
      '<h1 class="post-detail-title">'+esc(post.title)+'</h1>'+
      '<div class="post-song-facts">'+factsHtml+'</div>'+
      (prog ? '<a class="post-program-link" href="/programs/'+prog.id+'/">'+esc(prog.title)+' 프로그램 정보 보기 →</a>' : '')+
    '</div>'+
    '<div class="post-body">'+ post.body.map(function(para){ return '<p>'+esc(para)+'</p>'; }).join("") +'</div>'+
    videoLinkCardHtml(post)+
    '<p class="data-note">※ 가사는 저작권 문제로 싣지 않았어요. 곡 정보는 공개된 자료를 조사해 직접 정리했습니다.</p>';
  }

  function relatedPostsHtml(programId){
    var list = POSTS.filter(function(post){ return post.programId === programId; });
    if(!list.length) return "";
    return '<div class="detail-section">'+
      '<h2>관련 곡 이야기</h2>'+
      '<div class="related-posts">'+
        list.map(function(post){
          return '<a class="related-post-link" href="/posts/'+post.slug+'/">'+esc(post.title)+
            '<span>'+esc(post.songTitle)+' · 원곡 '+esc(post.originalArtist)+'</span></a>';
        }).join("")+
      '</div>'+
    '</div>';
  }

  function factCard(label, value){
    return '<div class="fact-card"><span class="label">'+esc(label)+'</span><span class="value">'+esc(value)+'</span></div>';
  }

  function lineupHtml(p){
    if(!p.lineup.length){
      return '<p class="empty-note">'+esc(p.lineupNote || "정보가 아직 없습니다.")+'</p>';
    }
    var chips = p.lineup.map(function(m){
      return '<span class="lineup-chip">'+(m.rank ? '<span class="rank">'+m.rank+'</span>' : '')+esc(m.name)+'</span>';
    }).join("");
    return '<div class="lineup-list">'+chips+'</div>'+
      (p.lineupNote ? '<p class="data-note">'+esc(p.lineupNote)+'</p>' : '');
  }

  function rosterCardHtml(m){
    return '<div class="roster-card">'+
      avatarHtml(m.name)+
      '<div class="roster-body">'+
        '<div class="roster-name-row">'+
          '<span class="roster-name">'+esc(m.name)+'</span>'+
          '<span class="rtag rtag-'+m.resultTone+'">'+esc(m.resultTag)+'</span>'+
        '</div>'+
        (m.detail ? '<div class="roster-detail">'+esc(m.detail)+'</div>' : '')+
      '</div>'+
    '</div>';
  }

  function historyHtml(p, progId){
    var rows = p.history.map(function(h, i){
      var panelId = "hist-" + progId + "-" + i;
      var toggle = h.roster ? (
        '<button class="history-toggle" data-toggle="'+panelId+'" aria-expanded="false">'+
          '<span class="toggle-label">자세히 보기</span><span class="chevron">▾</span>'+
        '</button>'
      ) : "";
      var panel = h.roster ? (
        '<div class="history-roster" id="'+panelId+'" hidden>'+
          h.roster.map(rosterCardHtml).join("")+
          '<div class="roster-note">※ 실제 프로필 사진 대신 예시 아바타로 표시했어요. 곡 정보는 공개된 회차 기록을 조사해 정리했습니다.</div>'+
        '</div>'
      ) : "";
      return '<div class="history-stage">'+
        '<div class="history-stage-head">'+
          '<span class="history-stage-name">'+esc(h.stage)+'</span>'+
          '<span class="history-stage-result">'+esc(h.result)+'</span>'+
          toggle+
        '</div>'+
        panel+
      '</div>';
    }).join("");
    return '<div class="history-list">'+rows+'</div>';
  }

  function detailHtml(p){
    var factsRow = ''+
      factCard("방영", scheduleText(p)) +
      factCard("시즌 정보", p.seasonInfo) +
      (p.participantsTotal ? factCard("참가 규모", p.participantsTotal+"명/팀") : "") +
      (p.prize && p.prize !== "-" ? factCard("상금/혜택", p.prize) : "");

    return ''+
    '<div class="detail-hero" style="--acc:'+p.accent+';--acc-dark:'+p.accentDark+'">'+
      typeIconHtml(p.type, "type-icon-hero")+
      '<div class="detail-hero-top">'+
        '<span class="chip">'+esc(p.broadcaster)+'</span>'+
        statusPill(p)+
      '</div>'+
      '<h1 class="detail-title">'+esc(p.title)+'</h1>'+
      '<p class="detail-tagline">'+esc(p.tagline)+'</p>'+
      (p.airNote ? '<p class="detail-tagline" style="margin-top:8px;font-size:0.8rem;opacity:0.85;">ℹ️ '+esc(p.airNote)+'</p>' : '')+
    '</div>'+

    '<div class="facts-row">'+factsRow+'</div>'+

    '<div class="detail-section">'+
      '<h2>'+esc(p.missionLabel || "현재 진행상황")+'</h2>'+
      '<p>'+esc(p.mission)+'</p>'+
    '</div>'+

    '<div class="detail-section">'+
      '<h2>'+esc(p.lineupLabel || "참가자")+'</h2>'+
      lineupHtml(p)+
    '</div>'+

    '<div class="detail-section">'+
      '<h2>진행 이력</h2>'+
      historyHtml(p, p.id)+
    '</div>'+

    '<div class="detail-section">'+
      '<h2>투표 방법</h2>'+
      '<div class="vote-box">'+
        '<div class="vote-item"><span class="label">문자 투표</span><span class="value">'+esc(p.voting.sms)+'</span></div>'+
        '<div class="vote-item"><span class="label">앱/웹 투표</span><span class="value">'+esc(p.voting.app)+'</span></div>'+
        '<div class="vote-note">'+esc(p.voting.note)+'</div>'+
      '</div>'+
    '</div>'+

    relatedPostsHtml(p.id);
  }

if(typeof module !== "undefined" && module.exports){
  module.exports = { esc: esc, statusPill: statusPill, scheduleText: scheduleText, avatarHtml: avatarHtml, TYPE_ICONS: TYPE_ICONS, typeIconHtml: typeIconHtml, cardHtml: cardHtml, schedChip: schedChip, endedCardHtml: endedCardHtml, postCardHtml: postCardHtml, videoLinkCardHtml: videoLinkCardHtml, postDetailHtml: postDetailHtml, relatedPostsHtml: relatedPostsHtml, factCard: factCard, lineupHtml: lineupHtml, rosterCardHtml: rosterCardHtml, historyHtml: historyHtml, detailHtml: detailHtml };
}
