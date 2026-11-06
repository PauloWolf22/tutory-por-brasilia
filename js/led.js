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

  /* ---------- Letreiro corrido de pontos ---------- */
  function Ticker(canvas, opt) {
    this.cv = canvas; this.ctx = canvas.getContext('2d'); this.opt = opt;
    this.pitch = opt.pitch; this.r = opt.r; this.speed = opt.speed;
    this.mx = -9999; this.my = -9999; this.raf = 0; this.built = false;
    var self = this;
    canvas.addEventListener('mousemove', function (e) {
      var b = canvas.getBoundingClientRect();
      self.mx = (e.clientX - b.left) / b.width * canvas.width; self.my = (e.clientY - b.top) / b.height * canvas.height;
    });
    canvas.addEventListener('mouseleave', function () { self.mx = self.my = -9999; });
    canvas.addEventListener('click', function () { self.paused = !self.paused; });
  }
  Ticker.prototype.measure = function (c, size) {
    var total = 0;
    this.opt.parts.forEach(function (t) { c.font = t.w + ' ' + size + 'px Gilroy'; total += c.measureText(t.t).width; });
    return total;
  };
  /* still: frase inteira na largura do letreiro, para PDF e movimento reduzido */
  Ticker.prototype.build = function (still) {
    var W = this.cv.width, H = this.cv.height, p = this.pitch, r = this.r, self = this;
    var probe = document.createElement('canvas').getContext('2d');
    var size = still ? this.opt.size * (W * 0.95) / this.measure(probe, this.opt.size) : this.opt.size;
    var textW = this.measure(probe, size);
    var S = still ? W : Math.ceil((textW + size * 1.1) / p) * p;
    var off = document.createElement('canvas'); off.width = S; off.height = H;
    var o = off.getContext('2d', { willReadFrequently: true });
    var x = still ? (W - textW) / 2 : 0, base = Math.round(H / 2 + size * 0.36);
    o.textBaseline = 'alphabetic';
    this.opt.parts.forEach(function (t) {
      o.font = t.w + ' ' + size + 'px Gilroy'; o.fillStyle = o.strokeStyle = t.c; o.fillText(t.t, x, base);
      if (t.w < 500) { o.lineWidth = size * 0.022; o.strokeText(t.t, x, base); }
      x += o.measureText(t.t).width;
    });
    var data = o.getImageData(0, 0, S, H).data;
    this.strip = document.createElement('canvas'); this.strip.width = S; this.strip.height = H;
    var g = this.strip.getContext('2d');
    for (var y = p / 2; y < H; y += p) {
      for (var cx = p / 2; cx < S; cx += p) {
        var i = ((y | 0) * S + (cx | 0)) * 4;
        if (data[i + 3] <= 90) continue;
        var col = 'rgb(' + data[i] + ',' + data[i + 1] + ',' + data[i + 2] + ')';
        g.shadowBlur = 10; g.shadowColor = col; g.fillStyle = col;
        g.beginPath(); g.arc(cx, y, r, 0, 6.2832); g.fill();
      }
    }
    /* pontos apagados do painel */
    var tile = document.createElement('canvas'); tile.width = tile.height = p;
    var tc = tile.getContext('2d'); tc.fillStyle = 'rgba(126,168,250,.1)'; tc.beginPath(); tc.arc(p / 2, p / 2, r * 0.6, 0, 6.2832); tc.fill();
    this.base = document.createElement('canvas'); this.base.width = W; this.base.height = H;
    var bc = this.base.getContext('2d'); bc.fillStyle = bc.createPattern(tile, 'repeat'); bc.fillRect(0, 0, W, H);
    this.S = S; this.built = still ? 'still' : 'live';
  };
  Ticker.prototype.paint = function (offset) {
    var c = this.ctx, W = this.cv.width, H = this.cv.height, S = this.S;
    c.clearRect(0, 0, W, H);
    c.drawImage(this.base, 0, 0);
    var x = -offset; if (offset >= 0) x = -(offset % S);
    for (; x < W; x += S) c.drawImage(this.strip, x, 0);
    if (this.mx > -999) {
      c.save(); c.globalCompositeOperation = 'source-atop';
      var g = c.createRadialGradient(this.mx, this.my, 0, this.mx, this.my, 220);
      g.addColorStop(0, 'rgba(255,255,255,.85)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      c.fillStyle = g; c.fillRect(0, 0, W, H); c.restore();
    }
  };
  Ticker.prototype.start = function (still) {
    var self = this, want = still ? 'still' : 'live';
    if (this.built !== want) this.build(still);
    cancelAnimationFrame(this.raf);
    if (still) { this.paint(0); return; }
    /* entra pela direita e anda de ponto em ponto, como um painel real */
    var t0 = performance.now(), W = this.cv.width, p = this.pitch;
    (function loop(now) {
      if (self.paused) { t0 += now - (self.lastT || now); }
      self.lastT = now;
      var o = (now - t0) / 1000 * self.speed - W;
      self.paint(Math.floor(o / p) * p);
      self.raf = requestAnimationFrame(loop);
    })(t0);
  };
  Ticker.prototype.stop = function () { cancelAnimationFrame(this.raf); };

  return { initWipe: initWipe, wipe: wipe, Ticker: Ticker };
})();
