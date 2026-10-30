/* =========================================================
   AIDEL — shared header, footer and language switching.
   Each page includes:
     <body data-page="home|members|publications|news">
     <header id="site-header"></header> ... <footer id="site-footer"></footer>
   Page scripts render dynamic content via AIDEL.onLangChange(render).
   ========================================================= */
(function () {
  var LANG_KEY = "aidel-lang";
  var listeners = [];

  function initialLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved === "ko" || saved === "en") return saved;
    } catch (e) {}
    return (navigator.language || "").toLowerCase().indexOf("ko") === 0 ? "ko" : "en";
  }

  var lang = initialLang();

  // Pick the current-language value from a { ko, en } object; plain strings pass through.
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] != null ? v[lang] : (v.en != null ? v.en : v.ko);
  }

  function ui(key) {
    var dict = (window.I18N && window.I18N[lang]) || {};
    return dict[key] != null ? dict[key] : key;
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  var NAV = [
    { key: "home", href: "index.html" },
    { key: "members", href: "members.html" },
    { key: "publications", href: "publications.html" },
    { key: "news", href: "news.html" }
  ];

  function renderHeader() {
    var el = document.getElementById("site-header");
    if (!el) return;
    var site = window.SITE || {};
    var page = document.body.getAttribute("data-page");
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.key === page ? ' class="active" aria-current="page"' : "") +
        ' data-i18n="nav.' + n.key + '"></a>';
    }).join("");
    el.className = "site-header";
    el.innerHTML =
      '<a class="skip-link" href="#main" data-i18n="skip"></a>' +
      '<div class="container">' +
        '<a class="brand" href="index.html">' +
          '<span class="brand-mark">AI</span>' +
          '<span class="brand-text"><span class="brand-name">' + escapeHtml(site.shortName || "AIDEL") + '</span>' +
          '<span class="brand-sub" data-site="affiliation"></span></span>' +
        '</a>' +
        '<nav class="nav" id="site-nav" aria-label="Main">' + links + '</nav>' +
        '<div class="header-right">' +
          '<div class="lang-toggle" role="group" aria-label="Language">' +
            '<button type="button" data-lang="ko">KO</button>' +
            '<button type="button" data-lang="en">EN</button>' +
          '</div>' +
          '<button class="menu-btn" type="button" aria-label="Menu" aria-controls="site-nav" aria-expanded="false"><span></span></button>' +
        '</div>' +
      '</div>';

    el.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });
    var btn = el.querySelector(".menu-btn");
    var nav = el.querySelector(".nav");
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function renderFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;
    var site = window.SITE || {};
    el.className = "site-footer";
    el.innerHTML =
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div>' +
            '<div class="footer-brand">' + escapeHtml(site.shortName || "AIDEL") + ' · <span data-site="name"></span></div>' +
            '<div data-site="affiliation"></div>' +
            '<div data-site="address"></div>' +
          '</div>' +
          '<div class="footer-links">' +
            NAV.map(function (n) { return '<a href="' + n.href + '" data-i18n="nav.' + n.key + '"></a>'; }).join("") +
            (site.links && site.links.scholar ? '<a href="' + site.links.scholar + '" target="_blank" rel="noopener">Google Scholar ↗</a>' : "") +
          '</div>' +
        '</div>' +
        '<div class="footer-copy">© ' + new Date().getFullYear() + ' ' +
          escapeHtml(site.shortName || "AIDEL") + ', <span data-site="affiliation"></span>. <span data-i18n="footer.rights"></span></div>' +
      '</div>';
  }

  // Fill data-i18n (UI strings) and data-site (SITE fields) placeholders.
  function applyStatic() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = ui(n.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-site]").forEach(function (n) { n.textContent = t((window.SITE || {})[n.getAttribute("data-site")]); });
    // Inline bilingual text: <span data-ko="..." data-en="...">
    document.querySelectorAll("[data-ko],[data-en]").forEach(function (n) {
      var v = n.getAttribute("data-" + lang);
      if (v != null) n.textContent = v;
    });
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
  }

  function setLang(next) {
    if (next !== "ko" && next !== "en" || next === lang) return;
    lang = next;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    applyStatic();
    listeners.forEach(function (fn) { fn(lang); });
  }

  // Register a render function; it runs now and on every language change.
  function onLangChange(fn) {
    listeners.push(fn);
    fn(lang);
    applyStatic();
  }

  // Fade-in on scroll for elements with .reveal (call again after dynamic rendering).
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 }) : null;
  function observeReveal(root) {
    (root || document).querySelectorAll(".reveal:not(.in)").forEach(function (n) {
      if (io) io.observe(n); else n.classList.add("in");
    });
  }

  window.AIDEL = {
    get lang() { return lang; },
    t: t, ui: ui, escapeHtml: escapeHtml, setLang: setLang, onLangChange: onLangChange, observeReveal: observeReveal
  };

  function init() {
    renderHeader();
    renderFooter();
    applyStatic();
    observeReveal();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
