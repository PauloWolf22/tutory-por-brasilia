/* Motor da apresentação: palco 16:9, navegação, teclado, tela cheia, progresso, build de fragmentos. */
window.Deck = (function () {
  var TOTAL = 14, cur = 0, slides = [], fragIdx = 0;
  var params = new URLSearchParams(location.search);
  var STATIC = params.has('static');
  var REDUCED = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var overlayOpen = function () { return document.querySelector('.overlay.open'); };
  var hooks = { enter: [], leave: [] };

  function fit() {
    var s = Math.min(innerWidth / 1920, innerHeight / 1080);
    var st = $('#stage');
    st.style.transform = 'translate(' + Math.round((innerWidth - 1920 * s) / 2) + 'px,' + Math.round((innerHeight - 1080 * s) / 2) + 'px) scale(' + s + ')';
  }

  function preload(n) {
    [n - 1, n, n + 1].forEach(function (k) {
      var sl = slides[k - 1]; if (!sl) return;
      sl.querySelectorAll('img[loading=lazy]').forEach(function (im) { im.loading = 'eager'; });
    });
  }

  function setChrome(n) {
    var sl = slides[n - 1], theme = sl.dataset.theme;
    document.body.dataset.theme = theme;
    $('#chrome').className = 't-' + theme + ' c' + n + (n === 1 ? ' first' : '');
    $('#pageNow').textContent = n < 10 ? '0' + n : n;
    $('#barFill').style.width = (n / TOTAL * 100) + '%';
    $('#prev').disabled = n === 1 && fragIdx === 0;
    $('#next').disabled = n === TOTAL;
    document.title = 'Tutory por Brasília — ' + n + '/' + TOTAL;
    document.querySelectorAll('#menuList [data-go]').forEach(function (b) { b.classList.toggle('now', +b.dataset.go === n); });
  }

  function countUp(sl) {
    if (STATIC || REDUCED) return;
    sl.querySelectorAll('[data-count]').forEach(function (el) {
      var txt = el.dataset.count, end = parseInt(txt.replace(/\./g, ''), 10), t0 = performance.now(), D = 950;
      (function tick(now) {
        if (!sl.classList.contains('active')) { el.textContent = txt; return; }
        var p = Math.min(1, (now - t0 - 300) / D); if (p < 0) p = 0;
        var v = Math.round(end * (1 - Math.pow(1 - p, 3)));
        el.textContent = p >= 1 ? txt : v.toLocaleString('pt-BR');
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }

  function activate(n, backwards) {
    slides.forEach(function (s) { s.classList.remove('active'); });
    var sl = slides[n - 1];
    void sl.offsetWidth;
    sl.classList.add('active');
    cur = n;
    var frags = sl.querySelectorAll('.frag');
    fragIdx = STATIC || backwards ? frags.length : 0;
    frags.forEach(function (f, i) { f.classList.toggle('shown', i < fragIdx); });
    setChrome(n); preload(n); countUp(sl);
    if (location.hash !== '#/' + n) history.replaceState(null, '', '#/' + n);
    hooks.enter.forEach(function (f) { f(n, sl); });
  }

  function go(n, dir) {
    n = Math.max(1, Math.min(TOTAL, n));
    if (n === cur) return;
    var d = dir || (n > cur ? 1 : -1), from = cur;
    var swap = function () { hooks.leave.forEach(function (f) { f(from); }); activate(n, d < 0 && !dir ? false : d < 0); };
    if (STATIC) return swap();
    if (REDUCED) {
      var st = $('#stage'); st.classList.add('fade');
      setTimeout(function () { swap(); st.classList.remove('fade'); }, 180);
      return;
    }
    Led.wipe(d, swap);
  }

  function next() {
    var frags = slides[cur - 1].querySelectorAll('.frag');
    if (fragIdx < frags.length) { frags[fragIdx++].classList.add('shown'); setChrome(cur); return; }
    if (cur < TOTAL) go(cur + 1, 1);
  }
  function prev() {
    var frags = slides[cur - 1].querySelectorAll('.frag');
    if (fragIdx > 0 && frags.length) { frags[--fragIdx].classList.remove('shown'); setChrome(cur); return; }
    if (cur > 1) go(cur - 1, -1);
  }

  function toggleFull() {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
  }

  function closeOverlays() {
    var any = false;
    document.querySelectorAll('.overlay.open').forEach(function (o) { o.classList.remove('open'); o.setAttribute('aria-hidden', 'true'); any = true; });
    return any;
  }
  function openOverlay(id) {
    var o = document.getElementById(id); o.classList.add('open'); o.setAttribute('aria-hidden', 'false');
  }

  function onKey(e) {
    if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName) && e.key !== 'Escape') return;
    var k = e.key;
    if (k === 'Escape') {
      /* o detalhe fecha antes da lista de propostas */
      var det = document.getElementById('detail');
      if (det.classList.contains('open')) { det.classList.remove('open'); det.setAttribute('aria-hidden', 'true'); return; }
      if (closeOverlays()) return;
      if (document.fullscreenElement) document.exitFullscreen();
      return;
    }
    var det2 = document.getElementById('detail');
    if (det2.classList.contains('open')) {
      if (k === 'ArrowRight') { Interactions.detailStep(1); e.preventDefault(); }
      if (k === 'ArrowLeft') { Interactions.detailStep(-1); e.preventDefault(); }
      return;
    }
    if (k === 'f' || k === 'F') { toggleFull(); return; }
    if (k === 'm' || k === 'M') { var mo = $('#menu').classList.contains('open'); closeOverlays(); if (!mo) openOverlay('menu'); return; }
    if (k === 'i' || k === 'I') { var io = $('#inv').classList.contains('open'); closeOverlays(); if (!io) Inventory.open(); return; }
    if (k === '?') { var ho = $('#help').classList.contains('open'); closeOverlays(); if (!ho) openOverlay('help'); return; }
    if (overlayOpen()) return;
    if (k === 'ArrowRight' || k === 'PageDown') { next(); e.preventDefault(); }
    else if (k === ' ' || k === 'Spacebar') {
      /* Space avança, salvo com um controle focado */
      if (document.activeElement && /BUTTON|A/.test(document.activeElement.tagName) && document.activeElement !== document.body) { document.activeElement.blur(); }
      next(); e.preventDefault();
    }
    else if (k === 'ArrowLeft' || k === 'PageUp') { prev(); e.preventDefault(); }
    else if (k === 'Home') { go(1, -1); e.preventDefault(); }
    else if (k === 'End') { go(TOTAL, 1); e.preventDefault(); }
  }

  function idle() {
    var t; var wake = function () { document.body.classList.remove('idle'); clearTimeout(t); t = setTimeout(function () { if (!overlayOpen()) document.body.classList.add('idle'); }, 2800); };
    ['mousemove', 'mousedown', 'keydown', 'touchstart'].forEach(function (ev) { addEventListener(ev, wake, { passive: true }); });
    wake();
  }

  function touch() {
    var x0 = null, y0 = 0;
    addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    addEventListener('touchend', function (e) {
      if (x0 === null || overlayOpen()) return;
      var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) { dx < 0 ? next() : prev(); }
      x0 = null;
    }, { passive: true });
  }

  function init() {
    Slides.render($('#slides'));
    slides = [].slice.call(document.querySelectorAll('.slide'));
    if (STATIC) document.body.classList.add('static');
    if (REDUCED) document.body.classList.add('reduced');
    if (params.has('nochrome')) document.body.classList.add('nochrome');
    Led.initWipe($('#wipe'));
    fit(); addEventListener('resize', fit);
    addEventListener('keydown', onKey);

    /* menu de capítulos */
    $('#menuList').innerHTML = DECK.nav.map(function (c) {
      return '<div class="m-chap"><h4>' + c.head + '</h4>' + c.items.map(function (it) {
        return '<button data-go="' + it[0] + '"><em>' + (it[0] < 10 ? '0' : '') + it[0] + '</em><span>' + it[1] + '</span></button>';
      }).join('') + '</div>';
    }).join('');

    document.addEventListener('click', function (e) {
      var g = e.target.closest('[data-go]');
      if (g) { closeOverlays(); go(+g.dataset.go); return; }
      var a = e.target.closest('[data-act]'); if (!a) { if (e.target.classList && e.target.classList.contains('overlay')) { closeTop(e.target); } return; }
      var act = a.dataset.act;
      if (act === 'next') next(); else if (act === 'prev') prev(); else if (act === 'full') toggleFull();
      else if (act === 'menu') { closeOverlays(); openOverlay('menu'); }
      else if (act === 'help') { closeOverlays(); openOverlay('help'); }
      else if (act === 'inv') { closeOverlays(); Inventory.open(); }
      else if (act === 'close') { closeTop(a.closest('.overlay')); }
      a.blur();
    });
    function closeTop(o) { if (o) { o.classList.remove('open'); o.setAttribute('aria-hidden', 'true'); } }

    addEventListener('hashchange', function () { var n = parseInt(location.hash.replace('#/', ''), 10); if (n && n !== cur) go(n); });
    idle(); touch();

    /* clique na área do slide fora de controles não avança: evita saltos acidentais ao apresentar */
    var start = parseInt(location.hash.replace('#/', ''), 10) || 1;
    var ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    Promise.all([ready, document.fonts ? Promise.all([document.fonts.load('800 100px Gilroy'), document.fonts.load('300 100px Gilroy')]) : 0]).catch(function () {}).then(function () {
      Interactions.init(); Inventory.init();
      activate(Math.max(1, Math.min(TOTAL, start)), false);
      document.body.classList.add('ready');
    });
  }

  return { init: init, go: go, next: next, prev: prev, hooks: hooks, isStatic: function () { return STATIC || REDUCED; }, openOverlay: openOverlay, current: function () { return cur; } };
})();
document.addEventListener('DOMContentLoaded', Deck.init);
