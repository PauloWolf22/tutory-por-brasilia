/* Monta os 25 slides a partir de js/data.js. Cada função = um layout nascido do conteúdo. */
window.Slides = (function () {
  var D = window.DECK;
  var icon = function (n, c) { return '<svg class="ic ' + (c || '') + '" aria-hidden="true"><use href="#i-' + n + '"/></svg>'; };
  var ring = '<span class="ring" aria-hidden="true">' + icon('arrow') + '</span>';
  var tag = function (i) { return '<div class="tag in" style="--i:' + i + '"><span>TUTORY POR BRASÍLIA</span>' + icon('arrow') + '<i></i></div>'; };

  function s1() {
    return '<section class="slide s1 t-dark" data-n="1" data-theme="dark" aria-label="Slide 1">' +
      '<div class="s1-bg"><img src="assets/img/hero-outdoor.jpg" alt="Outdoor com a arte Tutory por Brasília sobre a cidade ao entardecer"></div>' +
      '<div class="s1-board" aria-hidden="true"><div class="s1-dots"></div><div class="s1-off"></div></div>' +
      '<div class="s1-shade"></div>' +
      '<div class="s1-copy">' +
        '<h1><span class="in" style="--i:1">Reforçar</span><span class="in" style="--i:2">a nossa <b>marca</b></span><span class="in" style="--i:3"><b>em Brasília!</b></span></h1>' +
        '<i class="rule in" style="--i:4"></i>' +
        '<p class="in" style="--i:5">Colocar a marca da Tutory em pontos estratégicos<br>de Brasília, para reforçar a potência e importância do<br>nosso ecossistema no mercado!</p>' +
      '</div></section>';
  }

  function s2() {
    return '<section class="slide s2 t-ice" data-n="2" data-theme="ice" aria-label="Slide 2">' +
      '<svg class="ghost-sym" aria-hidden="true"><use href="#i-sym"/></svg>' +
      '<div class="s2-block in-x" style="--i:0"></div>' +
      '<div class="s2-black in-x" style="--i:1"></div>' +
      '<figure class="s2-arch in-x" style="--i:2" data-tilt><img src="assets/img/outdoor-rooftop.jpg" alt="Outdoor Tutory por Brasília no alto de um edifício"></figure>' +
      '<div class="s2-copy">' + tag(1) +
        '<h2 class="in" style="--i:2">Visibilidade Inteligente nos<br>Pontos Mais Estratégicos<br>de Brasília</h2>' +
        '<p class="in marker" style="--i:3">Exibir a <b>Tutory</b> em outdoors e painéis de LED nos pontos estratégicos de Brasília aumenta a visibilidade, <b>reforça a autoridade e posiciona nosso negócio</b> onde as oportunidades acontecem, impactando diariamente um público qualificado.</p>' +
      '</div></section>';
  }

  function s3() {
    var fact = function (cls, i, t) {
      return '<div class="fact ' + cls + '" style="--i:' + i + '"><span class="star">' + icon('star') + '</span><p>' + t + '</p></div>';
    };
    return '<section class="slide s3 t-dark" data-n="3" data-theme="dark" data-frags="1" aria-label="Slide 3">' +
      '<div class="s3-bg"><img src="assets/img/congresso.jpg" alt="Congresso Nacional, Brasília"></div><div class="s3-shade"></div>' +
      '<div class="s3-copy">' + tag(1) +
        '<h2 class="in" style="--i:2"><b>Curiosidades</b><br>Importantes de Brasília...</h2>' +
        '<div class="facts">' +
          fact('in', 3, 'O Distrito Federal abriga um dos maiores percentuais de servidores públicos do Brasil por número de habitantes, devido à concentração de órgãos federais e administrativos.') +
          fact('frag', 0, 'Muitos servidores residem em áreas distintas do centro para equilibrar custo do imóvel e qualidade de vida, optando por regiões satélites com bom transporte ou proximidade via rodovias e eixos estruturais.') +
        '</div></div></section>';
  }

  function s4() {
    var chips = D.regions.map(function (r, i) {
      return '<button class="chip' + (r.wide ? ' wide' : '') + '" data-hl="' + r.hl.join('|') + '" style="--i:' + (i + 2) + '">' + icon('play') + '<span>' + r.label + '</span></button>';
    }).join('');
    var b = function (t) { return '<b data-r="' + t + '">' + t + '</b>'; };
    return '<section class="slide s4 t-dark" data-n="4" data-theme="dark" aria-label="Slide 4">' +
      '<div class="s4-map"><img src="assets/img/pin-mapa.jpg" alt="Pino de localização azul sobre um mapa digital"><span class="pulse"></span><span class="pulse p2"></span></div>' +
      '<div class="s4-shade"></div>' +
      '<div class="s4-regions in" style="--i:1"><div class="s4-chips">' + chips + '</div><span class="ring big">' + icon('arrow') + '</span></div>' +
      '<div class="s4-copy">' +
        '<h2 class="in" style="--i:1">Dados de pesquisas <b>sobre<br>moradia X emprego</b></h2>' +
        '<p class="in" style="--i:2">Em uma pesquisa da <b>Companhia de Planejamento do DF (CODEPLAN),</b> quase <b class="hot">50%</b> <b>dos servidores que trabalham no Plano Piloto não residem no Plano Piloto,</b> ou seja, moram em áreas satélites ou mais distantes por opção de custo/qualidade de vida.</p>' +
        '<p class="in" style="--i:3">Regiões como ' + b('Asa Sul') + '<b>,</b> ' + b('Asa Norte') + '<b>,</b> ' + b('Sudoeste') + '<b>,</b> ' + b('Cruzeiro') + ' <b>e</b> ' + b('Octogonal') + ' são tradicionalmente associadas <b>a maior proporção de trabalhadores com empregos públicos</b> e renda estável, embora grande parte também viva em áreas satélites como ' + b('Águas Claras') + '<b>,</b> ' + b('Guará') + '<b>,</b> ' + b('Taguatinga') + ' <b>e</b> ' + b('Ceilândia') + '<b>.</b></p>' +
        '<button class="s4-next in" style="--i:4" data-go="5"><span>Estas vias são comuns para deslocamento de servidores entre área residencial e centro administrativo</span><i>' + icon('long') + '</i></button>' +
      '</div></section>';
  }

  function s5() {
    var rows = D.vias.map(function (v, i) {
      return '<li><button class="via in" style="--i:' + (2 + i * 0.5) + '"' + (v[1] ? ' data-q="' + v[1] + '"' : ' disabled') + '><em>-</em>' + v[0] + (v[1] ? '<small>' + icon('arrow') + '</small>' : '') + '</button></li>';
    });
    return '<section class="slide s5 t-dark" data-n="5" data-theme="dark" aria-label="Slide 5">' +
      '<div class="s5-bg"><img src="assets/img/via-noturna.jpg" alt=""></div><div class="s5-shade"></div>' +
      '<img class="s5-circle in-x" style="--i:1" src="assets/img/trafego-circulo.png" alt="Avenida congestionada à noite, vista de cima">' +
      '<img class="s5-shadow" src="assets/img/totem-sombra.png" alt="">' +
      '<figure class="s5-totem in-x" style="--i:2"><img src="assets/img/totem.png" alt="Totem digital com a marca Tutory"><span class="scan"></span></figure>' +
      '<div class="s5-copy">' + tag(1) +
        '<h2 class="in" style="--i:2">Região e <b>Vias principais<br>de carro</b></h2>' +
        '<div class="s5-vias"><ul>' + rows.slice(0, 9).join('') + '</ul><ul>' + rows.slice(9).join('') + '</ul></div>' +
      '</div></section>';
  }

  function line(label, val, cls) { return '<div class="ln ' + (cls || '') + '"><b>' + label + '</b> ' + val + '</div>'; }
  function meter(label, val, n, max) {
    return '<div class="ln mt" title="' + label + ' ' + val + '"><b>' + label + '</b> <span data-count="' + val + '">' + val + '</span><span class="m"><i style="--w:' + (n / max * 100).toFixed(1) + '%"></i></span></div>';
  }
  function specs(p, full) {
    return line('Código:', p.code) + line('Formato:', p.format) + line('Medida do painel:', p.size) + line('Localização:', p.loc) +
      (p.vt ? line('Tempo do VT:', p.vt) : '') +
      (p.imp ? meter('Impacto/dia:', p.imp, p.impN, D.maxImp) : '') +
      (p.vei ? meter('Veiculo/dia:', p.vei, p.veiN, D.maxVei) : '') +
      (p.cardExtra ? p.cardExtra.map(function (t) { return '<div class="ln">' + t.replace(/^([^:]*:)/, '<b>$1</b>') + '</div>'; }).join('') : '') +
      (full && p.more ? p.more.map(function (m) { return line(m[0], m[1]); }).join('') : '');
  }
  /* Enquadra a foto preservando o recorte do slide original, sem distorcer */
  function photo(p, w, h) {
    if (!p.W) return '<img class="fit" loading="lazy" src="assets/img/pontos/' + p.img + '.jpg" alt="Painel ' + p.code + ', ' + p.name.join(' ') + '">';
    var s = Math.max(w / 320, h / p.H, w / p.W);
    var left = Math.min(0, Math.max(w - p.W * s, w / 2 - p.cx * s));
    var top = Math.min(0, Math.max(h - p.H * s, h / 2 - p.cy * s));
    return '<img loading="lazy" src="assets/img/pontos/' + p.img + '.jpg" alt="Painel ' + p.code + ', ' + p.name.join(' ') + '" style="width:' + (p.W * s).toFixed(0) + 'px;height:' + (p.H * s).toFixed(0) + 'px;left:' + left.toFixed(0) + 'px;top:' + top.toFixed(0) + 'px">';
  }
  function card(p, i, w) {
    return '<article class="card in" style="--i:' + (i + 3) + '"><button class="card-hit" data-point="' + p.id + '" aria-label="Ampliar ' + p.code + '">' +
      '<div class="card-ph">' + photo(p, w, 300) + (p.tag ? '<span class="card-tag">' + p.op + '</span>' : '') + '</div>' +
      '<div class="card-name">' + ring + '<h3' + (p.name.join('').length >= 20 ? ' class="long"' : '') + '>' + p.name[0] + '<b>' + (p.name[0].length > 2 && p.name[0] !== 'AERO' && p.name[0] !== 'ESTRU' ? ' ' : '') + p.name[1] + '</b></h3></div></button>' +
      '<div class="card-body">' + specs(p) + '</div></article>';
  }
  function offer(n, theme, titleHtml, intro, ghost) {
    var pts = D.points.filter(function (p) { return p.slide === n; });
    var w = pts.length === 3 ? 564 : pts.length === 4 ? 417 : 332;
    return '<section class="slide offer t-' + theme + ' n' + pts.length + '" data-n="' + n + '" data-theme="' + theme.split(' ')[0] + '" aria-label="Slide ' + n + '">' +
      (ghost ? '<div class="offer-ghost"><img src="assets/img/' + ghost + '" alt=""></div>' : '') +
      '<header class="offer-head"><h2 class="in" style="--i:1">' + titleHtml + '</h2><div class="in" style="--i:2"><p>' + intro + '</p></div></header>' +
      '<div class="cards">' + pts.map(function (p, i) { return card(p, i, w); }).join('') + '</div></section>';
  }
  /* Propostas recebidas: abre o PDF original */
  function anexos() {
    return '<section class="slide offer t-dark ax" data-n="22" data-theme="dark" aria-label="Slide 22">' +
      '<header class="offer-head"><h2 class="in" style="--i:1"><b class="acc">Propostas</b><br><b>recebidas</b></h2><div class="in" style="--i:2"><p>Clique para abrir cada proposta em PDF.</p></div></header>' +
      '<div class="cards ax-grid">' + D.anexos.map(function (a, i) {
        return '<a class="card ax-card in" style="--i:' + (i + 3) + '" href="assets/anexos/' + a.file + '.pdf" target="_blank" rel="noopener">' +
          '<span class="ax-ph"><img loading="lazy" src="assets/img/anexos/' + a.file + '.jpg" alt=""></span>' +
          '<span class="ax-txt"><strong>' + a.emp + '</strong><em>' + a.doc + '</em>' + a.lines.map(function (l) { return '<small>' + l + '</small>'; }).join('') + '</span></a>';
      }).join('') + '</div></section>';
  }
  function title(fmt, op) { return '<b class="acc">Propostas</b><br><b>' + fmt + '</b><br><span class="acc">' + op + '</span>'; }

  function s12() {
    var ax = function (v) { return (v / 8000 * 100).toFixed(2) + '%'; };
    var rows = D.prices.map(function (p, i) {
      var t = p.inline ? p.t[0] + ' <b>' + p.t[1] + '</b>' : p.t[0] + '<br><b>' + p.t[1] + '</b>';
      return '<article class="price in" style="--i:' + (i + 3) + '" tabindex="0"><h3>' + t + '</h3>' +
        '<ul><li>' + icon('check') + '<span><b>Variação:</b> ' + p.v + '</span></li><li>' + icon('check') + '<span><b>Ideal para:</b> ' + p.i + '</span></li></ul>' +
        '<div class="price-v"><small>Valor médio mensal:</small><div class="pill"><sup>R$</sup>' + p.a + ' <span>a</span> <sup>R$</sup>' + p.b + '</div>' +
        '<div class="range" title="R$' + p.a + ' a R$' + p.b + '"><i style="--a:' + ax(p.min) + ';--b:' + ax(p.max) + '"></i></div></div></article>';
    }).join('');
    return '<section class="slide s12 t-ice" data-n="23" data-theme="ice" aria-label="Slide 23">' +
      '<div class="offer-ghost"><img src="assets/img/ghost-cidade.jpg" alt=""></div><svg class="ghost-sym" aria-hidden="true"><use href="#i-sym"/></svg>' +
      '<div class="s12-l"><h2 class="in" style="--i:1">Variações<br><b>de Valores</b></h2>' +
      '<p class="in" style="--i:2">Os preços de mídia exterior em Brasília variam conforme localização, formato, período de exibição e fluxo de pessoas/veículos na área. Regiões como Eixo Monumental, Setor Comercial Sul, Lago Sul, Asa Norte e principais vias de acesso ao Plano Piloto apresentam maior valor agregado devido ao alto impacto visual.</p>' +
      '<p class="lead in" style="--i:3">Aqui está uma estimativa média profissional para 30 dias de exibição:</p></div>' +
      '<div class="s12-r">' + rows + '</div></section>';
  }

  function plano() {
    var max = 27400;
    var heads = ['', 'Empresa', 'Código', 'Tipo', 'Tempo vinc.', 'Valor mês', 'Valor lona', 'Instalação', 'Total'];
    var rows = D.plan.map(function (p, i) {
      return '<article class="pl-row in" style="--i:' + (i + 4) + '" tabindex="0">' +
        '<span class="pl-ph"><img loading="lazy" src="assets/img/pontos/' + p.img + '.jpg" alt="Ponto ' + p.code + '"></span>' +
        '<span>' + p.emp + '</span><b class="pl-code">' + p.code + '</b><span>' + p.tipo + '</span>' +
        '<span>' + p.tempo + (p.data ? '<small>' + p.data + '</small>' : '') + '</span>' +
        '<span>' + p.mes + '</span><span>' + p.lona + '</span><span>' + p.inst + '</span>' +
        '<span class="pl-total" title="R$ ' + p.total + '"><b>R$ <span data-count="' + p.total + '">' + p.total + '</span></b><span class="m"><i style="--w:' + (p.n / max * 100).toFixed(1) + '%"></i></span></span>' +
        '</article>';
    }).join('');
    return '<section class="slide plano t-dark" data-n="24" data-theme="dark" aria-label="Slide 24">' +
      '<div class="pl-bg"><img src="assets/img/ghost-cidade.jpg" alt=""></div>' +
      '<header class="pl-head"><div>' + tag(1) + '<h2 class="in" style="--i:2">Plano <b>fechado</b></h2></div>' +
      '<div class="pl-sum in" style="--i:3"><small>Total</small><strong>R$ <span data-count="' + D.planTotal + '">' + D.planTotal + '</span></strong></div></header>' +
      '<div class="pl-table"><div class="pl-cols in" style="--i:3">' + heads.map(function (h) { return '<span>' + h + '</span>'; }).join('') + '</div>' + rows + '</div></section>';
  }

  function fim() {
    return '<section class="slide fim t-dark" data-n="25" data-theme="dark" aria-label="Slide 25">' +
      '<div class="fim-shade"></div><svg class="fim-sym" aria-hidden="true"><use href="#i-sym"/></svg>' +
      '<div class="fim-band"><h2 class="sr">TUTORY POR BRASÍLIA!</h2><canvas id="ledFinal" width="2880" height="540" aria-hidden="true"></canvas></div>' +
      '<div class="fim-tail in" style="--i:9"><p><b>NO MERCADO</b> DE MENTORIA <b>QUEM NÃO SE POSICIONA,</b><br><b>DESAPARECE</b> DA ESCOLHA DO MENTOR.</p>' +
      '<button class="fim-back" data-go="1" aria-label="Voltar ao início" title="Voltar ao início">' + icon('arrow') + '</button></div></section>';
  }

  return {
    specs: specs,
    render: function (host) {
      host.innerHTML = s1() + s2() + s3() + s4() + s5() +
        offer(6, 'ice', title('Outdoor', 'BR PAINÉIS'), D.intro.br, 'ghost-br1.jpg') +
        offer(7, 'ice', title('Front Light', 'BR PAINÉIS'), D.intro.br, 'ghost-br2.jpg') +
        offer(8, 'dark', title('Front Light', 'VISUPLAC'), D.intro.vis) +
        offer(9, 'dark', title('LED e Front Light', 'VISUPLAC'), D.intro.vis) +
        offer(10, 'deep', title('LED e Front Light', 'U’PIANO'), D.intro.up) +
        offer(11, 'deep', title('LED e Front Light', 'U’PIANO'), D.intro.up) +
        offer(12, 'ice', title('Front Light', 'BR PAINÉIS'), D.intro.br, 'ghost-br1.jpg') +
        offer(13, 'ice', title('Front Light', 'BR PAINÉIS'), D.intro.br, 'ghost-br2.jpg') +
        offer(14, 'dark', title('Front Light', 'VISUPLAC'), D.intro.vis) +
        offer(15, 'dark', title('Relógio', 'VISUPLAC'), D.intro.vis) +
        offer(16, 'dark', title('Relógio', 'VISUPLAC'), D.intro.vis) +
        offer(17, 'deep long', title('LED, Empena e Front Light', 'U’PIANO e SCA MÍDIA'), D.intro.up) +
        offer(18, 'ice', title('Front Light', 'RB OOH'), D.intro.rbf) +
        offer(19, 'ice', title('Front Light', 'RB OOH'), D.intro.rbf) +
        offer(20, 'ice', title('LED', 'RB OOH'), D.intro.rbl) +
        offer(21, 'ice', title('LED', 'RB OOH'), D.intro.rbl) +
        anexos() +
        s12() + plano() + fim();
    }
  };
})();
