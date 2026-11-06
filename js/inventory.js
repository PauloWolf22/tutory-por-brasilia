/* "Todas as propostas": os 28 pontos do roteiro, filtráveis e ordenáveis. Nenhum dado novo; só reorganiza js/data.js. */
window.Inventory = (function () {
  var D = window.DECK, st = { op: 'all', fmt: 'all', q: '', sort: 'vei' }, list = [];
  var norm = function (s) { return (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); };
  var hay = function (p) { return norm(p.name.join('') + ' ' + p.name.join(' ') + ' ' + p.code + ' ' + p.loc); };
  function match(q) { var n = norm(q); return D.points.filter(function (p) { return hay(p).indexOf(n) >= 0; }); }

  function apply() {
    list = D.points.filter(function (p) {
      return (st.op === 'all' || p.op === st.op) && (st.fmt === 'all' || p.fmt === st.fmt) && (!st.q || hay(p).indexOf(norm(st.q)) >= 0);
    }).slice().sort(function (a, b) { return st.sort === 'imp' ? (b.impN - a.impN) || (b.veiN - a.veiN) : (b.veiN - a.veiN); });
    var el = document.getElementById('invRows');
    el.innerHTML = list.length ? list.map(function (p, i) {
      return '<button class="inv-row" data-i="' + i + '" style="--r:' + Math.min(i, 12) + '">' +
        '<span class="th"><img src="assets/img/pontos/' + p.img + '.jpg" alt="" loading="lazy"></span>' +
        '<span class="nm">' + p.name[0] + (p.name[0] === 'EP' || p.name[0] === 'AERO' || p.name[0] === 'ESTRU' ? '' : ' ') + '<b>' + p.name[1] + '</b><small>' + p.loc + '</small></span>' +
        '<span class="cd">' + p.code + '</span><span class="fm">' + p.format + '</span><span class="sz">' + p.size + '</span><span class="op">' + p.op + '</span>' +
        '<span class="vl">' + (p.imp || '–') + '</span>' +
        '<span class="vl v"><b>' + p.vei + '</b><span class="m"><i style="--w:' + (p.veiN / D.maxVei * 100).toFixed(1) + '%"></i></span></span></button>';
    }).join('') : '<p class="inv-empty">Nenhum ponto com esse filtro.</p>';
    document.getElementById('invCount').textContent = list.length + (list.length === 1 ? ' ponto' : ' pontos');
    document.querySelectorAll('#inv [data-f]').forEach(function (b) { b.classList.toggle('on', st[b.dataset.f] === b.dataset.v); });
    document.getElementById('invQ').value = st.q;
  }
  function chips(key, vals) {
    return vals.map(function (v) { return '<button data-f="' + key + '" data-v="' + v[0] + '">' + v[1] + '</button>'; }).join('');
  }

  function init() {
    document.getElementById('fOp').innerHTML = chips('op', [['all', 'Todos'], ['BR PAINÉIS', 'BR PAINÉIS'], ['VISUPLAC', 'VISUPLAC'], ['U’PIANO', 'U’PIANO']]);
    document.getElementById('fFmt').innerHTML = chips('fmt', [['all', 'Todos'], ['OUTDOOR', 'OUTDOOR'], ['FRONT LIGHT', 'FRONT LIGHT'], ['LED', 'LED'], ['RELÓGIO', 'RELÓGIO']]);
    document.getElementById('fSort').innerHTML = chips('sort', [['vei', 'Veiculo/dia'], ['imp', 'Impacto/dia']]);
    var inv = document.getElementById('inv');
    inv.addEventListener('click', function (e) {
      var f = e.target.closest('[data-f]'); if (f) { st[f.dataset.f] = f.dataset.v; apply(); return; }
      var r = e.target.closest('.inv-row'); if (r) window.Interactions.openDetail(list, +r.dataset.i);
    });
    document.getElementById('invQ').addEventListener('input', function (e) { st.q = e.target.value; apply(); });
    window.Interactions.lateInit();
    apply();
  }

  function open(o) {
    st.op = 'all'; st.fmt = 'all'; st.q = (o && o.q) || ''; apply();
    window.Deck.openOverlay('inv');
  }
  return { init: init, open: open, match: match };
})();
