/* Linguagem LED da apresentação: transição por matriz de pontos e letreiro do encerramento. */
window.Led = (function () {
  var wipeCv, wipeCtx, seeds, running = false;
  var COLS = 96, ROWS = 54, CELL = 20;

  function initWipe(canvas) {
    wipeCv = canvas; wipeCv.width = COLS * CELL / 2; wipeCv.height = ROWS * CELL / 2;
    wipeCtx = wipeCv.getContext('2d');
    seeds = new Float32Array(COLS * ROWS);
    for (var i = 0; i < seeds.length; i++) seeds[i] = Math.random();
  }

  /* cobre a tela em onda de pontos, troca o slide no meio e descobre na mesma direção */
  function wipe(dir, swap, done) {
    if (running) { swap(); if (done) done(); return; }
    running = true;
    var T = 640, t0 = performance.now(), swapped = false, c = wipeCtx, s = CELL / 2;
    wipeCv.style.display = 'block';
    function frame(now) {
      var t = Math.min(1, (now - t0) / T);
      c.clearRect(0, 0, wipeCv.width, wipeCv.height);
      var inP = Math.min(1, t * 2), outP = Math.max(0, t * 2 - 1);
      for (var y = 0; y < ROWS; y++) {
        for (var x = 0; x < COLS; x++) {
          var u = (dir > 0 ? x : COLS - 1 - x) / COLS * 0.72 + seeds[y * COLS + x] * 0.28;
          var on = inP * 1.02 > u, off = outP * 1.02 > u;
          if (!on || off) continue;
          var edge = (inP * 1.02 - u < 0.05 && inP < 1) || (outP > 0 && u - outP * 1.02 < 0.05);
          c.fillStyle = edge ? '#3B7BF5' : '#020308';
          c.fillRect(x * s, y * s, s, s);
        }
      }
      if (!swapped && t >= 0.5) { swapped = true; swap(); }
      if (t < 1) requestAnimationFrame(frame);
      else { c.clearRect(0, 0, wipeCv.width, wipeCv.height); wipeCv.style.display = 'none'; running = false; if (done) done(); }
    }
    requestAnimationFrame(frame);
  }

  /* ---------- Letreiro de pontos ---------- */
  function Board(canvas, draw, opt) {
    this.cv = canvas; this.ctx = canvas.getContext('2d'); this.draw = draw;
    this.pitch = opt.pitch || 10; this.r = opt.r || 3.6;
    this.base = document.createElement('canvas'); this.base.width = canvas.width; this.base.height = canvas.height;
    this.mx = -9999; this.my = -9999; this.raf = 0; this.built = false;
    var self = this;
    canvas.addEventListener('mousemove', function (e) {
      var b = canvas.getBoundingClientRect();
      self.mx = (e.clientX - b.left) / b.width * canvas.width; self.my = (e.clientY - b.top) / b.height * canvas.height;
    });
    canvas.addEventListener('mouseleave', function () { self.mx = self.my = -9999; });
  }
  Board.prototype.build = function () {
    var w = this.cv.width, h = this.cv.height, p = this.pitch, r = this.r;
    var off = document.createElement('canvas'); off.width = w; off.height = h;
    var o = off.getContext('2d', { willReadFrequently: true });
    this.draw(o, w, h);
    var data = o.getImageData(0, 0, w, h).data, g = this.base.getContext('2d');
    g.clearRect(0, 0, w, h);
    for (var y = p / 2; y < h; y += p) {
      for (var x = p / 2; x < w; x += p) {
        var i = ((y | 0) * w + (x | 0)) * 4, a = data[i + 3];
        var lit = a > 90; g.shadowBlur = lit ? 16 : 0; g.shadowColor = lit ? 'rgb(' + data[i] + ',' + data[i + 1] + ',' + data[i + 2] + ')' : 'transparent'; g.beginPath(); g.arc(x, y, lit ? r : r * 0.62, 0, 6.2832);
        g.fillStyle = a > 90 ? 'rgb(' + data[i] + ',' + data[i + 1] + ',' + data[i + 2] + ')' : 'rgba(59,123,245,.13)';
        g.fill();
      }
    }
    this.built = true;
  };
  Board.prototype.paint = function (reveal, shimmer) {
    var c = this.ctx, w = this.cv.width, h = this.cv.height;
    c.clearRect(0, 0, w, h);
    c.save(); c.beginPath(); c.rect(0, 0, w * reveal, h); c.clip(); c.drawImage(this.base, 0, 0); c.restore();
    c.save(); c.globalCompositeOperation = 'source-atop';
    if (reveal < 1) { var hx = w * reveal; var g0 = c.createLinearGradient(hx - 140, 0, hx, 0); g0.addColorStop(0, 'rgba(255,255,255,0)'); g0.addColorStop(1, 'rgba(255,255,255,.95)'); c.fillStyle = g0; c.fillRect(hx - 140, 0, 140, h); }
    if (shimmer >= 0) { var sx = shimmer * (w + 600) - 300; var g1 = c.createLinearGradient(sx - 220, 0, sx + 220, 0); g1.addColorStop(0, 'rgba(255,255,255,0)'); g1.addColorStop(.5, 'rgba(255,255,255,.42)'); g1.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = g1; c.fillRect(0, 0, w, h); }
    if (this.mx > -999) { var g2 = c.createRadialGradient(this.mx, this.my, 0, this.mx, this.my, 240); g2.addColorStop(0, 'rgba(255,255,255,.9)'); g2.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = g2; c.fillRect(0, 0, w, h); }
    c.restore();
  };
  Board.prototype.start = function (still) {
    var self = this; if (!this.built) this.build();
    cancelAnimationFrame(this.raf);
    if (still) { this.paint(1, -1); return; }
    var t0 = performance.now(), DUR = 1700, CYCLE = 5200;
    (function loop(now) {
      var e = now - t0, rev = Math.min(1, e / DUR);
      var sh = e > DUR ? ((e - DUR) % CYCLE) / 1800 : -1;
      self.paint(1 - Math.pow(1 - rev, 2), sh >= 0 && sh <= 1 ? sh : -1);
      self.raf = requestAnimationFrame(loop);
    })(t0);
  };
  Board.prototype.stop = function () { cancelAnimationFrame(this.raf); };

  return { initWipe: initWipe, wipe: wipe, Board: Board };
})();
