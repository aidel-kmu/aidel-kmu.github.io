/* =========================================================
   AIDEL — Members page. Renders window.MEMBERS grouped by window.MEMBER_GROUPS.
   ========================================================= */
(function () {
  var A = window.AIDEL;
  var esc = A.escapeHtml;
  var PLACEHOLDER = "assets/img/members/placeholder.svg";

  var ICONS = {
    email: '<path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m3.5 7 8.5 6 8.5-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
    scholar: '<path d="M12 3 1.5 9 12 15l8.5-4.86V16h2V9z" fill="currentColor"/><path d="M5.5 12.6v3.6c0 1.9 2.9 3.8 6.5 3.8s6.5-1.9 6.5-3.8v-3.6L12 16.3z" fill="currentColor"/>',
    homepage: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" fill="none" stroke="currentColor" stroke-width="1.8"/>',
    github: '<path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/>',
    linkedin: '<path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>',
    plus: '<path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
  };
  var LINK_ORDER = ["email", "homepage", "scholar", "github", "linkedin"];
  var LINK_LABEL = { email: "Email", homepage: "Homepage", scholar: "Google Scholar", github: "GitHub", linkedin: "LinkedIn" };

  function icon(name) {
    return '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">' + ICONS[name] + '</svg>';
  }

  function linkIcons(m) {
    var links = m.links || {};
    var html = LINK_ORDER.map(function (k) {
      var url = k === "email" ? (m.email ? "mailto:" + m.email : "") : links[k];
      if (!url) return "";
      var ext = k === "email" ? "" : ' target="_blank" rel="noopener"';
      return '<a class="m-icon" href="' + esc(url) + '"' + ext + ' aria-label="' + LINK_LABEL[k] + '" title="' + LINK_LABEL[k] + '">' + icon(k) + '</a>';
    }).join("");
    return html ? '<div class="m-links">' + html + '</div>' : "";
  }

  function photo(m, cls) {
    return '<img class="' + cls + '" src="' + esc(m.photo || PLACEHOLDER) + '" alt="' + esc(A.t(m.name)) + '" loading="lazy" ' +
      'onerror="this.onerror=null;this.src=\'' + PLACEHOLDER + '\'">';
  }

  // Education / Career lists are English-only, so their labels stay English in both languages.
  function timeline(label, rows) {
    if (!rows || !rows.length) return "";
    return '<div class="pi-tl"><span class="pi-label">' + label + '</span><ul>' +
      rows.map(function (r) { return '<li><span class="pi-yr">' + esc(r[0]) + '</span><span>' + esc(r[1]) + '</span></li>'; }).join("") +
    '</ul></div>';
  }

  function piCard(m) {
    var alt = m.name && m.name[A.lang === "ko" ? "en" : "ko"];
    var history = timeline("Education", m.education) + timeline("Career", m.career);
    return '<article class="card pi-card reveal">' +
      photo(m, "pi-photo") +
      '<div class="pi-info">' +
        '<h3 class="pi-name">' + esc(A.t(m.name)) +
          (alt ? ' <span class="pi-name-sub">' + esc(alt) + '</span>' : "") + '</h3>' +
        '<div class="pi-role">' + esc(A.t(m.role)) + '</div>' +
        (m.bio ? '<p class="pi-bio">' + esc(A.t(m.bio)) + '</p>' : "") +
        linkIcons(m) +
      '</div>' +
      (history ? '<div class="pi-history">' + history + '</div>' : "") +
    '</article>';
  }

  function memberCard(m) {
    var interests = A.t(m.interests);
    return '<article class="card m-card reveal">' +
      '<div class="m-photo-wrap">' + photo(m, "m-photo") + '</div>' +
      '<div class="m-body">' +
        '<h3 class="m-name">' + esc(A.t(m.name)) + '</h3>' +
        '<div class="m-role">' + esc(A.t(m.role)) + '</div>' +
        (interests ? '<div class="m-interests">' + esc(interests) + '</div>' : "") +
        (m.bio ? '<p class="m-bio">' + esc(A.t(m.bio)) + '</p>' : "") +
        linkIcons(m) +
      '</div>' +
    '</article>';
  }

  function placeholderCard(p) {
    var tagName = p.href ? "a" : "div";
    return '<' + tagName + ' class="m-card m-placeholder reveal"' + (p.href ? ' href="' + esc(p.href) + '"' : "") + '>' +
      '<div class="m-ph-icon">' + icon("plus") + '</div>' +
      '<div class="m-name">' + esc(A.t(p.title)) + '</div>' +
      (p.text ? '<p class="m-ph-text">' + esc(A.t(p.text)) + '</p>' : "") +
      (p.cta ? '<span class="m-ph-cta">' + esc(A.t(p.cta)) + ' →</span>' : "") +
    '</' + tagName + '>';
  }

  function render() {
    var root = document.getElementById("members-root");
    if (!root) return;
    var members = window.MEMBERS || [];
    var groups = window.MEMBER_GROUPS || [
      { key: "pi", title: { ko: "지도교수", en: "Principal Investigator" } },
      { key: "phd", title: { ko: "박사과정", en: "Ph.D. Students" } },
      { key: "ms", title: { ko: "석사과정", en: "M.S. Students" } },
      { key: "undergrad", title: { ko: "학부연구생", en: "Undergraduate Research Interns" } },
      { key: "alumni", title: { ko: "졸업생", en: "Alumni" } }
    ];

    root.innerHTML = groups.map(function (g) {
      var list = members.filter(function (m) { return m.group === g.key; });
      var showPh = !list.length && g.placeholder && g.key !== "alumni";
      if (!list.length && !showPh) return "";
      var body;
      if (g.key === "pi") body = '<div class="pi-list">' + list.map(piCard).join("") + '</div>';
      else body = '<div class="m-grid">' + (showPh ? placeholderCard(g.placeholder) : list.map(memberCard).join("")) + '</div>';
      return '<section class="m-section" id="group-' + esc(g.key) + '">' +
        '<div class="m-section-head"><h2>' + esc(A.t(g.title)) + '</h2>' +
          (list.length && g.key !== "pi" ? '<span class="m-count">' + list.length + '</span>' : "") + '</div>' +
        body +
      '</section>';
    }).join("");

    A.observeReveal(root);
  }

  function init() { A.onLangChange(render); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
