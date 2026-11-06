/* Conteúdo da apresentação — fonte: Apresentação-OUTDOOR_02.psd (camadas de texto) conferido com APRESENTAÇÃO_OUTDOOR_LED_.pdf.
   A grafia é preservada exatamente como no roteiro, inclusive pontos marcados em docs/REVISAO_DE_COPY.md. Não corrigir aqui sem aprovação. */
window.DECK = (function () {
  var INTRO = {
    br: 'Presente no DF e entorno há mais de 30 anos, a br Painéis é destaque no mercado de mídia Out Of Home (OOH) da Capital Federal, disponibilizando espaços publicitários em Brasília, cidades satélites, principais cidades do entorno (que também movimentam a economia do DF) e rodovias interestaduais de acesso a Capital Federal.',
    vis: 'A Visuplac Projetos e Mídias Urbanas Ltda é uma empresa brasileira especializada em publicidade exterior (Out of Home – OOH), com *30 anos de presença consolidada em Brasília e no Distrito Federal. A Visuplac desenvolve, gerencia e opera soluções de mídia urbana em grande escala, com foco em impacto visual e alcance de público, incluindo: Mobiliário urbano, Relógios OOH e DOOH, Painéis de grande formato (Frontlight, Front Led, Highline) Painéis pedestres e mídia interna (como telas em elevadores) Todos esses ativos estão localizados em áreas estratégicas do DF, garantindo visibilidade diária de grande número de pessoas.',
    up: 'Upiano une tecnologia e cultura para transformar a comunicação nas ruas de Brasília. Com mais de 40 anos de atuação nos dois ramos, a Upiano surgiu da fusão de duas empresas que atuavam no entretenimento e no segmento de comunicação urbana de forma complementar. Dessa união nasceu a Upiano Entretenimento e DOOH (Digital Out of Home), consolidando um novo momento para a marca, agora voltada à convergência entre mídia digital externa e experiências culturais.'
  };

  /* name: [parte leve, parte forte] · foco cx/cy: centro do recorte usado no slide original (px da foto) */
  function P(slide, op, name, code, format, size, loc, imp, vei, img, W, H, cx, cy, extra) {
    var o = { slide: slide, op: op, name: name, code: code, format: format, size: size, loc: loc, imp: imp, vei: vei, img: img, W: W, H: H, cx: cx, cy: cy };
    if (extra) for (var k in extra) o[k] = extra[k];
    return o;
  }

  var points = [
    P(6, 'BR PAINÉIS', ['TAGUATINGA', 'NORTE'], 'O-1120', 'OUTDOOR', '9 X 3 MTS', 'AV. HÉLIO PRATES, PROXIMO A FEIRA DOS GOIANOS', '250.000', '150.000', 'o-1120-taguatinga', 554, 310, 393, 158),
    P(6, 'BR PAINÉIS', ['TAGUATINGA', 'NORTE'], 'O-1136', 'OUTDOOR', '9 X 3 MTS', 'TAGUATINGA, VIA M NORTE', '250.000', '150.000', 'o-1136', 804, 452, 554, 251),
    P(6, 'BR PAINÉIS', ['CEILÂNDIA', 'CENTRO'], 'O-1014', 'OUTDOOR', '9 X 3 MTS', 'CEILÂNDIA CENTRO, APÓS O ATACADÃO ASSAÍ', '400.000', '200.000', 'o-1014', 803, 450, 572, 213),
    P(6, 'BR PAINÉIS', ['CEILÂNDIA', 'SUL'], 'O-1015', 'OUTDOOR', '9 X 3 MTS', 'CEILÂNDIA SUL, FRENTE A CAMPEÃO DA CONSTRUÇÃO', '400.000', '200.000', 'o-1015', 604, 339, 395, 145),

    P(7, 'BR PAINÉIS', ['GUARÁ', '1'], 'O-1120', 'FRONT LIGHT', '6 X 2.40 M', 'GUARÁ I, EM FRENTE AO SESC', '170.000', '130.000', 'o-1120-guara', 808, 448, 213, 223),
    P(7, 'BR PAINÉIS', ['ÁGUAS', 'CLARAS'], 'F-433', 'FRONT LIGHT', '9 X 3.6 M', 'TÁGUAS CLARAS, ACESSO PELA EPTG', '170.000', '150.000', 'f-433', 902, 499, 585, 207),
    P(7, 'BR PAINÉIS', ['CEILÂNDIA', 'NORTE'], 'F-759', 'FRONT LIGHT', '9 X 3.6 M', 'CEILÂNDIA NORTE, PRÓXIMO AO SESC', '400.000', '200.000', 'f-759', 795, 453, 500, 201),
    P(7, 'BR PAINÉIS', ['ÁGUAS', 'CLARAS'], 'F-449', 'FRONT LIGHT', '9 X 3.6 M', 'ÁGUAS CLARAS, PISTA NOVA, SENTIDO RUA DAS CARNAÚBAS', '80.000', '30.000', 'f-449', 802, 449, 237, 209),

    P(8, 'VISUPLAC', ['EP', 'IA'], 'PAINEL 85A', 'FRONT LIGHT', '6 X 3.6 M', 'Acesso a entrada Sul / Park Way', null, '277.514', '85a', 818, 454, 494, 206),
    P(8, 'VISUPLAC', ['EP', 'GU'], 'PAINEL 67A', 'FRONT LIGHT', '9 X 3.6 M', 'Após o zoológico', null, '330.675', '67a', 795, 447, 386, 242),
    P(8, 'VISUPLAC', ['AERO', 'PORTO'], 'PAINEL 58A', 'FRONT LIGHT', '9 X 3.6 M', 'DF 047 próximo à entrada do túnel de acesso ao Aeroporto', null, '72.675', '58a', 549, 308, 277, 144),
    P(8, 'VISUPLAC', ['EP', 'IA'], 'F-96', 'FRONT LIGHT', '9 X 3.6 M', 'Cruzeiro', null, '126.000', 'f-96', 1500, 936, 793, 471),
    P(8, 'VISUPLAC', ['ESTRU', 'TURAL'], 'I-83', 'FRONT LIGHT', '9 X 3.6 M', 'Sentido Plano Piloto', null, '100.000', 'i-83', 799, 499, 493, 174),

    P(9, 'VISUPLAC', ['ÁGUAS', 'CLARAS'], 'I-111 (LED)', 'LED', '864 x 288 px', 'Águas Claras / Park Way', null, '61.000', 'i-111', 921, 608, 583, 270, { vt: '15 Segundos' }),
    P(9, 'VISUPLAC', ['ÁGUAS', 'CLARAS'], 'K-04', 'FRONT LIGHT', '9 X 3.6 M', 'Águas Claras/EPTG', null, '61.000', 'k-04', 1143, 727, 653, 321),
    P(9, 'VISUPLAC', ['ÁGUAS', 'CLARAS'], 'R-128', 'RELÓGIO', '1,32 x 1,93 m', 'Balão de entrada em Águas Claras pela EPTG, próximo a Unieuro.', null, '150.000', 'r-128', 832, 537, 300, 199),
    P(9, 'VISUPLAC', ['EP', 'TG'], 'F-46', 'FRONT LIGHT', '9 X 3.6 M', 'EPTG. Próximo a entrada do Lúcio Costa.', null, '135.000', 'f-46', 707, 448, 388, 203),
    P(9, 'VISUPLAC', ['EP', 'TG'], 'K-95', 'FRONT LIGHT', '9 X 3.6 M', 'DF 085. Acesso a saída do Guará para o SIA.', null, '135.000', 'k-95', 828, 533, 562, 224),

    P(10, 'U’PIANO', ['EPTG', 'SIA'], 'F-225', 'FRONT LIGH', '9,00 x 3,60 m', 'Sia Trecho 01 Lado Brasal Sentido Taguatinga, Face Plano Piloto', null, '120.000', 'f-225', 1040, 667, 560, 303, { fmtKey: 'FRONT LIGHT' }),
    P(10, 'VISUPLAC', ['ESTRU', 'TURAL'], 'F-80', 'FRONT LIGHT', '9 X 3.6 M', 'Via Estrutural sentido Taguatinga lado direito após Viaduto Airton Senna', null, '120.000', 'f-80', 727, 428, 380, 183, { tag: true }),
    P(10, 'U’PIANO', ['ESTRU', 'TURAL'], 'F- 158', 'RELÓGIO', '9x3.6 M', 'Via Estrutural sentido Plano lado esquerdo antes Viaduto Airton Senna', null, '120.000', 'f-158', 808, 513, 531, 211),
    P(10, 'U’PIANO', ['EP', 'IA'], 'F- 91', 'FRONT LIGHT', '9 X 3.6 M', 'Após Viaduto Airton Senna, Sentido Eixo Monumental, Face Viaduto/Cruzeiro', null, '80.000', 'f-91', 835, 489, 517, 192),
    P(10, 'U’PIANO', ['LAGO', 'SUL'], 'L-2', 'LED', '1080X360 P', 'LAGO SUL QL 06 FRENTE CENTRO COMERCIAL GILBERTO SALOMÃO SENT. AEROPORTO', null, '60.000', 'l-2', 663, 428, 468, 143),

    P(11, 'U’PIANO', ['EP', 'TG'], 'L-3', 'LED', '1080X360 P', 'VIA EPTG SENT. TAGUATINGA ANTES CONJUNTO HABITACIONAL LÚCIO COSTA', null, '120.000', 'l-3', 536, 343, 365, 138),
    P(11, 'U’PIANO', ['ULYSSES', 'GUIMARÃES'], 'L-4', 'LED', '1536X576 P', 'CENTRO DE CONVENÇÕES ULYSSES GUIMARÃES', null, '80.000', 'l-4', 435, 281, 160, 137),
    P(11, 'U’PIANO', ['COSTA', 'SILVA'], 'L-7', 'LED', '1152X576 P', 'ACESSO A PONTE COSTA SILVA SENTIDO PONTÃO LAGO SUL', null, '80.000', 'l-7', 1012, 649, 822, 349),
    P(11, 'U’PIANO', ['LAGO', 'SUL'], 'L-8', 'LED', '956X360 P', 'AV. DAS NAÇÕES - SETOR DE CLUBES ESPORTIVO NORTE, IATE CLUBE DE BSB, FACE PISTA', null, '80.000', 'l-8', 1084, 692, 924, 229),
    P(11, 'U’PIANO', ['ULYSSES', 'GUIMARÃES'], 'L-5', 'LED', '1536X576 P', 'CENTRO DE CONVENÇÕES ULYSSES GUIMARÃES, SENTIDO GINÁSIO NILSON NELSON', null, '80.000', 'l-5', 463, 297, 168, 143)
  ];
  points.forEach(function (p, i) {
    p.id = i;
    p.veiN = parseInt(p.vei.replace(/\./g, ''), 10);
    p.impN = p.imp ? parseInt(p.imp.replace(/\./g, ''), 10) : 0;
    p.fmt = p.fmtKey || p.format;
  });

  return {
    intro: INTRO,
    points: points,
    maxVei: 330675,   /* maior Veiculo/dia do roteiro (PAINEL 67A) */
    maxImp: 400000,   /* maior Impacto/dia do roteiro */
    regions: [
      { label: 'Asa Sul', hl: ['Asa Sul'] }, { label: 'Asa Norte', hl: ['Asa Norte'] },
      { label: 'Sudoeste / Octogonal', hl: ['Sudoeste', 'Octogonal'], wide: true },
      { label: 'Cruzeiro', hl: ['Cruzeiro'] }, { label: 'Águas Claras', hl: ['Águas Claras'] },
      { label: 'Guará', hl: ['Guará'] }, { label: 'Taguatinga', hl: ['Taguatinga'] },
      { label: 'Ceilândia / Samambaia', hl: ['Ceilândia'], wide: true }
    ],
    vias: [
      ['Plano Piloto (Asas)', 'Plano Piloto'], ['Eixo Monumental', 'Eixo Monumental'], ['Eixo Leste/Oeste'], ['SHTN/SHSN'], ['Sudoeste'], ['Octogonal'], ['Via S1'], ['EPIA Sul', 'EPIA'], ['EPIA Norte', 'EPIA'],
      ['EPNB'], ['Cruzeiro', 'Cruzeiro'], ['L2 Norte/Sul'], ['Águas Claras', 'Águas Claras'], ['EPTG,', 'EPTG'], ['DF-095'], ['BR-060'], ['BR-040']
    ],
    prices: [
      { t: ['Outdoor', 'tradicional'], min: 2200, max: 3500, a: '2.200', b: '3.500',
        v: 'Locais mais centrais e avenidas principais custam mais.', i: 'Campanhas de fixação e ampla visibilidade.' },
      { t: ['Front', 'Light'], min: 2500, max: 4500, a: '2.500', b: '4.500', inline: true,
        v: 'Depende da via, iluminação e fluxo noturno.', i: 'Campanhas de fixação e ampla visibilidade.' },
      { t: ['Painéis de', 'LED digital'], min: 3500, max: 8000, a: '3.500', b: '8.000',
        v: 'Depende do tempo de exibição diário (ex: 15s a cada 60s) e da tecnologia da tela.', i: 'Mensagens dinâmicas, branding e campanhas de alto impacto.' }
    ],
    plan: [
      { emp: 'U’PIANO', code: 'L-03', tipo: 'LED', tempo: '60 DIAS', mes: 'R$ 3.432', lona: '–', inst: '–', total: '6.864', n: 6864, img: 'l-3' },
      { emp: 'U’PIANO', code: 'F-225', tipo: 'Front Light', tempo: '60 DIAS', mes: 'R$ 3.432', lona: 'R$ 650,00', inst: '–', total: '7.514', n: 7514, img: 'f-225' },
      { emp: 'VISUPLAC', code: 'F-80', tipo: 'Front Light', tempo: '60 DIAS', mes: 'R$ 2.640', lona: 'R$ 650,00', inst: '–', total: '5.930', n: 5930, img: 'f-80' },
      { emp: 'GB MIDIA', code: 'REF-189', tipo: 'EMPENA', tempo: '30 DIAS', data: 'MARÇO', mes: 'R$ 25.000', lona: 'R$ 1.500', inst: 'R$ 900', total: '27.400', n: 27400, img: 'ref-189' }
    ],
    planTotal: '47.708',
    nav: [
      { head: 'Tutory por Brasília', items: [[1, 'Reforçar a nossa marca em Brasília!'], [2, 'Visibilidade Inteligente nos Pontos Mais Estratégicos de Brasília']] },
      { head: 'Curiosidades', items: [[3, 'Curiosidades Importantes de Brasília...'], [4, 'Dados de pesquisas sobre moradia X emprego'], [5, 'Região e Vias principais de carro']] },
      { head: 'Propostas', items: [[6, 'Propostas Outdoor BR PAINÉIS'], [7, 'Propostas Front Light BR PAINÉIS'], [8, 'Propostas Front Light VISUPLAC'], [9, 'Propostas LED e Front Light VISUPLAC'], [10, 'Propostas LED e Front Light U’PIANO'], [11, 'Propostas LED e Front Light U’PIANO']] },
      { head: 'Variações de Valores', items: [[12, 'Variações de Valores'], [13, 'Plano fechado']] },
      { head: 'Encerramento', items: [[14, 'Tutory por Brasília!']] }
    ]
  };
})();
