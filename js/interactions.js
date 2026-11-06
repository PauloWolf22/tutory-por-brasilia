/* Interações por slide: regiões (4), vias (5), detalhe de ponto (6-11), letreiro LED (14), tilt (2), acionamento do outdoor (1). */
window.Interactions = (function () {
  var D = window.DECK, detailList = [], detailPos = 0, board = null;

  function regions() {
    var sl = document.querySelector('.s4'); if (!sl) return;
    var set = function (terms, on) {
      sl.querySelectorAll('[data-r]').forEach(function (b) { b.classList.toggle('lit', on && terms.indexOf(b.dataset.r) >= 0); });
    };
    sl.querySelectorAll('.chip').forEach(function (c) {
      var terms = c.dataset.hl.split('|');
      c.addEventListener('mouseenter', function () { set(terms, true); });
      c.addEventListener('mouseleave', function () { if (!c.classList.contains('pinned')) set(terms, false); });
      c.addEventListener('focus', function () { set(terms, true); });
      c.addEventListener('click', function () {
        var was = c.classList.contains('pinned');
        sl.querySelectorAll('.chip').forEach(function (o) { o.classList.remove('pinned'); });
        set([], false);
        if (!was) { c.classList.add('pinned'); set(terms, true); }
      });
    });
  }

  function vias() {
    document.querySelectorAll('.s5 .via[data-q]').forEach(function (b) {
      var n = window.Inventory.match(b.dataset.q).length;
      if (!n) { b.disabled = true; var s = b.querySelector('small'); if (s) s.remove(); return; }
      b.title = 'Ver propostas: ' + b.dataset.q;
      b.addEventListener('click', function () { window.Inventory.open({ q: b.dataset.q }); });
    });
  }

  function tilt() {
    document.querySelectorAll('[data-tilt]').forEach(function (el) {
      var im = el.querySelector('img');
      el.addEventListener('mousemove', function (e) {
        var b = el.getBoundingClientRect();
        var x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5;
        im.style.transform = 'scale(1.07) translate(' + (-x * 22).toFixed(1) + 'px,' + (-y * 22).toFixed(1) + 'px)';
      });
      el.addEventListener('mouseleave', function () { im.style.transform = ''; });
    });
  }

  /* ---------- Detalhe do ponto ---------- */
  function renderDetail() {
    var p = detailList[detailPos], host = document.getElementById('detailBody');
    host.innerHTML =
      '<div class="d-photo"><img src="assets/img/pontos/' + p.img + '.jpg" alt="Painel ' + p.code + '"></div>' +
      '<div class="d-info"><span class="d-op">' + p.op + '</span>' +
      '<h3>' + p.name[0] + (p.name[0] === 'EP' || p.name[0] === 'AERO' || p.name[0] === 'ESTRU' ? '' : ' ') + '<b>' + p.name[1] + '</b></h3>' +
      '<div class="d-specs">' + window.Slides.specs(p) + '</div>' +
      '<div class="d-nav"><button data-step="-1" aria-label="Ponto anterior"><svg class="ic" aria-hidden="true"><use href="#i-prev"/></svg></button>' +
      '<span>' + (detailPos + 1) + ' / ' + detailList.length + '</span>' +
      '<button data-step="1" aria-label="Próximo ponto"><svg class="ic" aria-hidden="true"><use href="#i-next"/></svg></button></div></div>';
  }
  function openDetail(list, pos) {
    detailList = list; detailPos = pos; renderDetail();
    var o = document.getElementById('detail'); o.classList.add('open'); o.setAttribute('aria-hidden', 'false');
  }
  function detailStep(d) {
    if (!detailList.length) return;
    detailPos = (detailPos + d + detailList.length) % detailList.length; renderDetail();
  }

  function points() {
    document.addEventListener('click', function (e) {
      var s = e.target.closest('[data-step]'); if (s) { detailStep(+s.dataset.step); return; }
      var hit = e.target.closest('.card-hit'); if (!hit) return;
      var p = D.points[+hit.dataset.point];
      var list = D.points.filter(function (x) { return x.slide === p.slide; });
      openDetail(list, list.indexOf(p));
    });
  }

  /* ---------- Letreiro final ---------- */
  function final() {
    var cv = document.getElementById('ledFinal'); if (!cv) return;
    board = new window.Led.Board(cv, function (c, w, h) {
      c.textBaseline = 'alphabetic'; c.textAlign = 'left';
      var f = function (wt, sz) { return wt + ' ' + sz + 'px Gilroy'; };
      var sz = 400;
      c.font = f(800, sz); var a = c.measureText('Tutory').width; c.font = f(300, sz); var sp = c.measureText(' ').width, b = c.measureText('por').width;
      var x = (w - (a + sp + b)) / 2;
      c.font = f(800, sz); c.fillStyle = '#3B7BF5'; c.fillText('Tutory', x, 400);
      c.font = f(300, sz); c.lineWidth = 7; c.strokeStyle = c.fillStyle = '#ffffff'; c.fillText('por', x + a + sp, 400); c.strokeText('por', x + a + sp, 400);
      c.font = f(300, 430); var br = c.measureText('Brasília!').width; c.lineWidth = 8;
      c.fillText('Brasília!', (w - br) / 2, 860); c.strokeText('Brasília!', (w - br) / 2, 860);
    }, { pitch: 11, r: 4.3 });
    window.Deck.hooks.enter.push(function (n) { if (n === 14) board.start(window.Deck.isStatic()); else board.stop(); });
  }

  return {
    init: function () { regions(); tilt(); points(); final(); },
    lateInit: vias, openDetail: openDetail, detailStep: detailStep
  };
})();
