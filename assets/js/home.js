/* =========================================================
   AIDEL — home page: latest news, key figures, research carousel, join.
   ========================================================= */
(function () {
  var A = window.AIDEL;
  var esc = A.escapeHtml;
  var NEWS = Array.isArray(window.NEWS) ? window.NEWS : [];
  var RESEARCH = Array.isArray(window.RESEARCH) ? window.RESEARCH : [];
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Latest news ---------- */
  function renderNews() {
    var el = document.getElementById("home-news-list");
    if (!el) return;
    var items = NEWS.slice(0, 5);
    if (!items.length) {
      el.innerHTML = '<li class="news-empty">' + esc(A.t({ ko: "아직 등록된 소식이 없습니다.", en: "No news yet." })) + "</li>";
      return;
    }
    el.innerHTML = items.map(function (n) {
      return '<li class="news-item">' +
        '<time class="news-date" datetime="' + esc(String(n.date).replace(/\./g, "-")) + '">' + esc(n.date) + "</time>" +
        '<div class="news-main">' +
          (n.tag ? '<span class="tag">' + esc(A.t(n.tag)) + "</span>" : "") +
          '<p class="news-title">' + esc(A.t(n.title)) + "</p>" +
        "</div>" +
      "</li>";
    }).join("");
  }

  /* ---------- Key figures ---------- */
  function countMembers() {
    if (!Array.isArray(window.MEMBERS)) return null;
    return window.MEMBERS.filter(function (m) { return m && m.group !== "alumni"; }).length;
  }
  function countPubs() {
    return Array.isArray(window.PUBLICATIONS) ? window.PUBLICATIONS.length : null;
  }

  // fixed: true → shown as-is without the count-up animation (e.g. a year).
  var STATS = [
    { value: countPubs, label: "Research Works", href: "publications.html" },
    { value: countMembers, label: "Current Members", href: "students.html" },
    { value: function () { return 2026; }, label: "Established at KMU", fixed: true }
  ];
  var statsCounted = false;

  function renderStats() {
    var el = document.getElementById("home-stats");
    if (!el) return;
    el.innerHTML = STATS.map(function (s) {
      var v = s.value();
      var shown = v == null ? "–" : (s.fixed || statsCounted || reduced ? v : 0);
      var tag = s.href ? "a" : "div";
      return "<" + tag + ' class="stat"' + (s.href ? ' href="' + s.href + '"' : "") + ">" +
        '<span class="stat-num" data-target="' + (v == null || s.fixed ? "" : v) + '">' + shown + "</span>" +
        '<span class="stat-label">' + esc(A.t(s.label)) + "</span>" +
      "</" + tag + ">";
    }).join("");
  }

  function countUp() {
    if (statsCounted) return;
    statsCounted = true;
    var nums = document.querySelectorAll("#home-stats .stat-num");
    var start = null, dur = 1400;
    function tick(ts) {
      if (start == null) start = ts;
      var p = Math.min(1, (ts - start) / dur), e = 1 - Math.pow(1 - p, 3);
      nums.forEach(function (n) {
        var t = n.getAttribute("data-target");
        if (t !== "") n.textContent = Math.round(Number(t) * e);
      });
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function watchStats() {
    var el = document.getElementById("home-stats");
    if (!el) return;
    if (reduced || !("IntersectionObserver" in window)) { statsCounted = true; renderStats(); return; }
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { io.disconnect(); countUp(); }
    }, { threshold: 0.4 });
    io.observe(el);
  }

  /* ---------- Research carousel ---------- */
  var current = 0, timer = null, paused = reduced, hoverHold = false;
  var AUTO_MS = 7000;

  function renderResearch() {
    var track = document.getElementById("research-track");
    var dots = document.getElementById("research-dots");
    if (!track) return;
    if (!RESEARCH.length) {
      document.getElementById("research-carousel").hidden = true;
      return;
    }
    track.innerHTML = RESEARCH.map(function (r, i) {
      return '<article class="slide" role="group" aria-roledescription="slide" id="research-' + esc(r.id || i) + '"' +
        ' aria-label="' + (i + 1) + " / " + RESEARCH.length + '">' +
        '<div class="slide-media">' +
          (r.image ? '<img src="' + esc(r.image) + '" alt="" loading="lazy" width="480" height="360">' : "") +
        "</div>" +
        '<div class="slide-body">' +
          '<span class="slide-index">' + (i < 9 ? "0" : "") + (i + 1) + "</span>" +
          '<h3 class="slide-title">' + esc(A.t(r.title)) + "</h3>" +
          '<p class="slide-summary">' + esc(A.t(r.summary)) + "</p>" +
          '<div class="slide-tags">' + (r.keywords || []).map(function (k) {
            return '<span class="tag">' + esc(A.t(k)) + "</span>";
          }).join("") + "</div>" +
        "</div>" +
      "</article>";
    }).join("");
    dots.innerHTML = RESEARCH.map(function (r, i) {
      return '<button type="button" class="dot" data-i="' + i + '" aria-label="' +
        esc(A.t(r.title)) + '"></button>';
    }).join("");
    goTo(current, true);
    updatePauseBtn();
  }

  function goTo(i, instant) {
    var n = RESEARCH.length;
    if (!n) return;
    current = (i + n) % n;
    var track = document.getElementById("research-track");
    if (instant) track.style.transition = "none";
    track.style.transform = "translateX(" + (-100 * current) + "%)";
    if (instant) { track.offsetWidth; track.style.transition = ""; }
    fitHeight();
    track.querySelectorAll(".slide").forEach(function (s, k) {
      s.setAttribute("aria-hidden", k === current ? "false" : "true");
      if ("inert" in s) s.inert = k !== current;
    });
    document.querySelectorAll("#research-dots .dot").forEach(function (d, k) {
      d.setAttribute("aria-current", k === current ? "true" : "false");
    });
    var pos = document.getElementById("research-pos");
    if (pos) pos.textContent = (current + 1) + " / " + n;
  }

  // On narrow screens slides keep their own height; size the viewport to the visible one.
  function fitHeight() {
    var track = document.getElementById("research-track");
    var s = track && track.children[current];
    if (s) track.parentNode.style.height = s.offsetHeight + "px";
  }

  function restartTimer() {
    clearInterval(timer);
    timer = null;
    if (!paused && !hoverHold && RESEARCH.length > 1) {
      timer = setInterval(function () { if (!document.hidden) goTo(current + 1); }, AUTO_MS);
    }
  }

  function updatePauseBtn() {
    var b = document.getElementById("research-pause");
    if (!b) return;
    b.setAttribute("aria-pressed", paused ? "true" : "false");
    b.setAttribute("aria-label", A.t(paused ? { ko: "자동 넘김 재생", en: "Play auto-advance" } : { ko: "자동 넘김 일시정지", en: "Pause auto-advance" }));
    b.classList.toggle("is-paused", paused);
  }

  function bindCarousel() {
    var root = document.getElementById("research-carousel");
    if (!root) return;
    document.getElementById("research-prev").addEventListener("click", function () { goTo(current - 1); restartTimer(); });
    document.getElementById("research-next").addEventListener("click", function () { goTo(current + 1); restartTimer(); });
    document.getElementById("research-pause").addEventListener("click", function () {
      paused = !paused; updatePauseBtn(); restartTimer();
    });
    document.getElementById("research-dots").addEventListener("click", function (e) {
      var d = e.target.closest(".dot");
      if (d) { goTo(Number(d.getAttribute("data-i"))); restartTimer(); }
    });
    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { goTo(current - 1); restartTimer(); }
      if (e.key === "ArrowRight") { goTo(current + 1); restartTimer(); }
    });
    // Hold auto-advance while the user is hovering or focused inside.
    function hold(v) { hoverHold = v; restartTimer(); }
    root.addEventListener("mouseenter", function () { hold(true); });
    root.addEventListener("mouseleave", function () { hold(false); });
    root.addEventListener("focusin", function () { hold(true); });
    root.addEventListener("focusout", function (e) { if (!root.contains(e.relatedTarget)) hold(false); });

    // Swipe on touch devices.
    var vp = root.querySelector(".carousel-viewport"), sx = null, sy = 0;
    vp.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    vp.addEventListener("touchend", function (e) {
      if (sx == null) return;
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) { goTo(current + (dx < 0 ? 1 : -1)); restartTimer(); }
      sx = null;
    }, { passive: true });

    window.addEventListener("resize", fitHeight);
    window.addEventListener("load", fitHeight);
    restartTimer();
  }

  /* ---------- Join ---------- */
  function renderJoin() {
    var a = document.getElementById("join-mail");
    var email = (window.SITE && window.SITE.email) || "";
    if (!a) return;
    if (!email) { a.hidden = true; return; }
    a.href = "mailto:" + email;
  }

  function render() {
    renderNews();
    renderStats();
    renderResearch();
  }

  function init() {
    A.onLangChange(render);
    renderJoin();
    bindCarousel();
    watchStats();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
