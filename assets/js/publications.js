/* =========================================================
   AIDEL — Publications page. Renders window.PUBLICATIONS grouped by year,
   with a type filter and a text search.
   ========================================================= */
(function () {
  var A = window.AIDEL;
  var esc = A.escapeHtml;

  var TYPES = [
    { key: "intl-journal", label: "International Journal" },
    { key: "intl-conf", label: "International Conference" },
    { key: "dom-journal", label: "Domestic Journal" },
    { key: "dom-conf", label: "Domestic Conference" },
    { key: "preprint", label: "Preprint", optional: true }
  ];
  var TYPE_LABEL = {};
  TYPES.forEach(function (t) { TYPE_LABEL[t.key] = t.label; });

  var PI_NAMES = ["yonghyun lee", "y lee", "yh lee", "y. lee", "y.h. lee", "y. h. lee", "이용현"];
  // `doi` and `abstract` take either a bare DOI ("10.xxxx/...") or a full URL.
  var LINKS = [
    { key: "paper", label: "Paper" },
    { key: "doi", label: "Paper" },
    { key: "abstract", label: "Abstract" },
    { key: "code", label: "Code" },
    { key: "project", label: "Project" }
  ];

  var state = { type: "all", q: "" };
  var pubs = (window.PUBLICATIONS || []).map(function (p, i) { return { p: p, i: i }; });

  function isPI(name) {
    return PI_NAMES.indexOf(String(name).replace(/[*†‡]/g, "").replace(/\s+/g, " ").trim().toLowerCase()) !== -1;
  }

  function authorsHtml(p) {
    var equal = p.equal || [];
    return (p.authors || []).map(function (a, i) {
      var name = isPI(a) ? '<strong class="pub-pi">' + esc(a) + '</strong>' : esc(a);
      return equal.indexOf(i) !== -1 ? name + '<sup class="pub-eq">*</sup>' : name;
    }).join(", ");
  }

  // Note line under an entry: custom `note`, or the default equal-contribution note.
  function noteText(p) {
    if (p.note) return p.note;
    return p.equal && p.equal.length ? "* These authors contributed equally." : "";
  }

  function linkUrl(key, v) {
    if ((key === "doi" || key === "abstract") && !/^https?:/i.test(v)) return "https://doi.org/" + v;
    return v;
  }

  function linksHtml(links) {
    if (!links) return "";
    var html = LINKS.map(function (l) {
      var v = links[l.key];
      if (!v) return "";
      return '<a class="btn-sm" href="' + esc(linkUrl(l.key, v)) + '" target="_blank" rel="noopener">' + l.label + '</a>';
    }).join("");
    return html ? '<div class="pub-links">' + html + '</div>' : "";
  }

  function haystack(p) {
    return [p.title, (p.authors || []).join(" "), p.venue, p.year, A.t(TYPE_LABEL[p.type])].join(" ").toLowerCase();
  }

  function filtered() {
    var q = state.q.trim().toLowerCase();
    var terms = q ? q.split(/\s+/) : [];
    return pubs.filter(function (x) {
      if (state.type !== "all" && x.p.type !== state.type) return false;
      if (!terms.length) return true;
      var h = haystack(x.p);
      return terms.every(function (t) { return h.indexOf(t) !== -1; });
    });
  }

  function renderFilters() {
    var bar = document.getElementById("pub-filters");
    if (!bar) return;
    var counts = { all: pubs.length };
    pubs.forEach(function (x) { counts[x.p.type] = (counts[x.p.type] || 0) + 1; });
    var items = [{ key: "all", label: "All" }].concat(TYPES.filter(function (t) {
      return !t.optional || counts[t.key];
    }));
    bar.innerHTML = items.map(function (t) {
      var n = counts[t.key] || 0;
      return '<button type="button" class="pub-filter' + (state.type === t.key ? " active" : "") + '" data-type="' + t.key + '"' +
        ' aria-pressed="' + (state.type === t.key) + '"' + (n ? "" : " disabled") + '>' +
        '<span>' + esc(A.t(t.label)) + '</span><span class="pub-filter-n">' + n + '</span></button>';
    }).join("");
    var input = document.getElementById("pub-search");
    if (input) input.placeholder = A.lang === "ko" ? "제목, 저자, 학술지 검색" : "Search title, author, venue";
  }

  function renderList() {
    var root = document.getElementById("pub-list");
    if (!root) return;
    var list = filtered();
    var status = document.getElementById("pub-status");
    if (status) {
      status.textContent = A.lang === "ko" ? "총 " + list.length + "편" : list.length + (list.length === 1 ? " publication" : " publications");
    }
    if (!list.length) {
      root.innerHTML = '<div class="pub-empty">' + (A.lang === "ko" ? "조건에 맞는 논문이 없습니다." : "No publications match your filter.") + '</div>';
      return;
    }
    var byYear = {};
    list.forEach(function (x) { (byYear[x.p.year] = byYear[x.p.year] || []).push(x); });
    var years = Object.keys(byYear).sort(function (a, b) { return b - a; });

    root.innerHTML = years.map(function (y) {
      var items = byYear[y].sort(function (a, b) { return a.i - b.i; });
      return '<section class="pub-year">' +
        '<h2 class="pub-year-title"><span>' + esc(y) + '</span><span class="pub-year-n">' +
          (A.lang === "ko" ? items.length + "편" : items.length + (items.length === 1 ? " publication" : " publications")) + '</span></h2>' +
        '<ol class="pub-items">' + items.map(function (x) {
          var p = x.p;
          return '<li class="pub-item">' +
            '<div class="pub-meta"><span class="tag pub-type pub-type-' + esc(p.type) + '">' + esc(A.t(TYPE_LABEL[p.type]) || p.type) + '</span></div>' +
            '<h3 class="pub-title">' + esc(p.title) + '</h3>' +
            '<div class="pub-authors">' + authorsHtml(p) + '</div>' +
            '<div class="pub-venue">' + esc(p.venue) + (p.venue && String(p.venue).indexOf(String(p.year)) === -1 ? ", " + esc(p.year) : "") + '</div>' +
            (noteText(p) ? '<div class="pub-note">' + esc(noteText(p)) + '</div>' : "") +
            linksHtml(p.links) +
          '</li>';
        }).join("") + '</ol>' +
      '</section>';
    }).join("");
  }

  function render() {
    renderFilters();
    renderList();
  }

  function init() {
    var bar = document.getElementById("pub-filters");
    if (bar) bar.addEventListener("click", function (e) {
      var b = e.target.closest(".pub-filter");
      if (!b || b.disabled) return;
      state.type = b.getAttribute("data-type");
      render();
    });
    var input = document.getElementById("pub-search");
    if (input) input.addEventListener("input", function () {
      state.q = input.value;
      renderList();
    });
    A.onLangChange(render);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
