/* =========================================================
   AIDEL — news page: all items as a timeline grouped by year.
   ========================================================= */
(function () {
  var A = window.AIDEL;
  var esc = A.escapeHtml;
  var NEWS = Array.isArray(window.NEWS) ? window.NEWS : [];

  // Group by the year part of "YYYY.MM", keeping the data's newest-first order.
  function groupByYear(list) {
    var groups = [], byYear = {};
    list.forEach(function (n) {
      var y = String(n.date || "").split(".")[0] || "—";
      if (!byYear[y]) { byYear[y] = { year: y, items: [] }; groups.push(byYear[y]); }
      byYear[y].items.push(n);
    });
    return groups;
  }

  function render() {
    var el = document.getElementById("news-timeline");
    if (!el) return;
    if (!NEWS.length) {
      el.innerHTML = '<p class="timeline-empty">' + esc(A.t({ ko: "아직 등록된 소식이 없습니다.", en: "No news yet." })) + "</p>";
      return;
    }
    el.innerHTML = groupByYear(NEWS).map(function (g) {
      return '<section class="tl-year">' +
        '<h2 class="tl-year-label">' + esc(g.year) + "</h2>" +
        '<ol class="tl-list">' + g.items.map(function (n) {
          return '<li class="tl-item">' +
            '<span class="tl-dot" aria-hidden="true"></span>' +
            '<div class="tl-card">' +
              '<div class="tl-meta">' +
                '<time class="tl-date">' + esc(n.date) + "</time>" +
                (n.tag ? '<span class="tag">' + esc(A.t(n.tag)) + "</span>" : "") +
              "</div>" +
              '<h3 class="tl-title">' + esc(A.t(n.title)) + "</h3>" +
              (n.body ? '<p class="tl-body">' + esc(A.t(n.body)) + "</p>" : "") +
            "</div>" +
          "</li>";
        }).join("") + "</ol>" +
      "</section>";
    }).join("");
  }

  function init() { A.onLangChange(render); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
