/* =========================================================
   AIDEL — hero background: a slowly drifting node/edge network.
   Expects <canvas id="hero-canvas"> inside the hero section.
   ========================================================= */
(function () {
  var canvas = document.getElementById("hero-canvas");
  if (!canvas || !canvas.getContext) return;
  var hero = canvas.parentNode;
  var ctx = canvas.getContext("2d");

  var NAVY = "18,50,107", BLUE = "47,125,225";
  var reduceMq = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  var reduced = !!(reduceMq && reduceMq.matches);

  var w = 0, h = 0, dpr = 1, link = 140;
  var nodes = [];
  var mouse = { x: 0, y: 0, active: false };
  var onScreen = true, raf = 0, last = 0;

  function rand(a, b) { return a + Math.random() * (b - a); }

  function makeNode() {
    var ang = Math.random() * Math.PI * 2, sp = rand(0.06, 0.22); // px per frame @60fps
    var accent = Math.random() < 0.12;
    return {
      x: rand(0, w), y: rand(0, h),
      bvx: Math.cos(ang) * sp, bvy: Math.sin(ang) * sp,
      vx: 0, vy: 0,
      r: accent ? rand(2.4, 3.6) : rand(1.2, 2.6),
      accent: accent,
      phase: Math.random() * Math.PI * 2
    };
  }

  function resize() {
    var rect = hero.getBoundingClientRect();
    w = Math.max(1, rect.width);
    h = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Node count and link distance scale with the hero area.
    link = Math.max(100, Math.min(160, Math.sqrt(w * h) / 6));
    var target = Math.round(Math.max(26, Math.min(130, (w * h) / 10500)));
    while (nodes.length < target) nodes.push(makeNode());
    if (nodes.length > target) nodes.length = target;
    nodes.forEach(function (n) {
      if (n.x > w) n.x = Math.random() * w;
      if (n.y > h) n.y = Math.random() * h;
    });
    draw(0);
  }

  function step(dt) {
    var R = 130;
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      // Ease velocity back toward the node's own slow drift.
      n.vx += (n.bvx - n.vx) * 0.02 * dt;
      n.vy += (n.bvy - n.vy) * 0.02 * dt;
      if (mouse.active) {
        var dx = n.x - mouse.x, dy = n.y - mouse.y, d2 = dx * dx + dy * dy;
        if (d2 < R * R && d2 > 0.01) {
          var d = Math.sqrt(d2), f = (1 - d / R) * 0.06 * dt;
          n.vx += (dx / d) * f;
          n.vy += (dy / d) * f;
        }
      }
      n.x += n.vx * dt;
      n.y += n.vy * dt;
      n.phase += 0.02 * dt;
      // Soft bounce off the edges.
      if (n.x < -10) { n.x = -10; n.bvx = Math.abs(n.bvx); n.vx = Math.abs(n.vx); }
      if (n.x > w + 10) { n.x = w + 10; n.bvx = -Math.abs(n.bvx); n.vx = -Math.abs(n.vx); }
      if (n.y < -10) { n.y = -10; n.bvy = Math.abs(n.bvy); n.vy = Math.abs(n.vy); }
      if (n.y > h + 10) { n.y = h + 10; n.bvy = -Math.abs(n.bvy); n.vy = -Math.abs(n.vy); }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    var L2 = link * link, i, j, a, b, dx, dy, d2, al;

    // Edges between nearby nodes, fading with distance.
    ctx.lineWidth = 1;
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      for (j = i + 1; j < nodes.length; j++) {
        b = nodes[j];
        dx = a.x - b.x; dy = a.y - b.y; d2 = dx * dx + dy * dy;
        if (d2 > L2) continue;
        al = 1 - Math.sqrt(d2) / link;
        al = al * al * 0.42;
        ctx.strokeStyle = "rgba(" + (a.accent || b.accent ? BLUE : NAVY) + "," + al.toFixed(3) + ")";
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    }

    // Edges from the cursor to nearby nodes.
    if (mouse.active) {
      var ML = link * 1.25;
      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        dx = a.x - mouse.x; dy = a.y - mouse.y; d2 = dx * dx + dy * dy;
        if (d2 > ML * ML) continue;
        al = (1 - Math.sqrt(d2) / ML) * 0.5;
        ctx.strokeStyle = "rgba(" + BLUE + "," + al.toFixed(3) + ")";
        ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(a.x, a.y); ctx.stroke();
      }
      ctx.fillStyle = "rgba(" + BLUE + ",0.55)";
      ctx.beginPath(); ctx.arc(mouse.x, mouse.y, 2.4, 0, Math.PI * 2); ctx.fill();
    }

    // Nodes; accent nodes get a soft pulsing halo.
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      if (a.accent) {
        var pr = a.r * (3.2 + Math.sin(a.phase) * 0.8);
        ctx.fillStyle = "rgba(" + BLUE + ",0.10)";
        ctx.beginPath(); ctx.arc(a.x, a.y, pr, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "rgba(" + BLUE + ",0.9)";
      } else {
        ctx.fillStyle = "rgba(" + NAVY + "," + (0.35 + a.r * 0.12).toFixed(3) + ")";
      }
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
    }
  }

  function frame(t) {
    raf = 0;
    var dt = last ? Math.min(3, (t - last) / 16.67) : 1; // normalized to 60fps, capped after stalls
    last = t;
    step(dt);
    draw();
    schedule();
  }

  function shouldRun() { return !reduced && onScreen && !document.hidden; }
  function schedule() {
    if (!raf && shouldRun()) raf = requestAnimationFrame(frame);
  }
  function stop() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0; last = 0;
  }
  function update() { if (shouldRun()) schedule(); else stop(); }

  // Mouse interaction (ignored for touch to keep scrolling natural).
  hero.addEventListener("pointermove", function (e) {
    if (e.pointerType === "touch") return;
    var rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
    if (reduced) draw();
  });
  hero.addEventListener("pointerleave", function () {
    mouse.active = false;
    if (reduced) draw();
  });

  document.addEventListener("visibilitychange", update);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      onScreen = entries[0].isIntersecting;
      update();
    }).observe(hero);
  }
  if (reduceMq) {
    var onMq = function (e) { reduced = e.matches; update(); draw(); };
    if (reduceMq.addEventListener) reduceMq.addEventListener("change", onMq);
    else if (reduceMq.addListener) reduceMq.addListener(onMq);
  }

  var pending = false;
  function queueResize() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () { pending = false; resize(); });
  }
  if ("ResizeObserver" in window) new ResizeObserver(queueResize).observe(hero);
  else window.addEventListener("resize", queueResize);

  resize();
  update();
})();
