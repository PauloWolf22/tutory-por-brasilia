/* Conteúdo da apresentação — fonte: Apresentação-OUTDOOR_02.psd (camadas de texto) conferido com APRESENTAÇÃO_OUTDOOR_LED_.pdf.
   A grafia é preservada exatamente como no roteiro, inclusive pontos marcados em docs/REVISAO_DE_COPY.md. Não corrigir aqui sem aprovação. */
window.DECK = (function () {
  var INTRO = {
    rbf: 'PROPOSTA RB26/32964. Cliente: TUTORY. Campanha: Campanha TUTORY. Período: De 10/02/2026 a 11/03/2026. Cidade: Brasília/DF. Proposta válida por 30 dias.',
    rbl: 'PROPOSTA RB26/32968. Cliente: TUTORY. Campanha: Campanha TUTORY. Período: De 10/02/2026 a 11/03/2026. Cidade: Brasília/DF. Proposta válida por 30 dias.',
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
  /* ---------- Pasta Outdoor: locais oferecidos e propostas recebidas (textos e valores como nos PDFs) ---------- */
  function N(slide, op, name, code, format, size, loc, imp, vei, img, more, extra) {
    var o = { slide: slide, op: op, name: name, code: code, format: format, size: size, loc: loc, imp: imp, vei: vei, img: img, more: more };
    if (extra) for (var k in extra) o[k] = extra[k];
    points.push(o);
  }
  function br(slide, name, code, size, loc, gps, imp, vei, tab, neg) {
    N(slide, 'BR PAINÉIS', name, code, 'FRONT LIGHT', size, loc, imp, vei, code.toLowerCase(), [['Coordenadas:', gps], ['Valor de tabela:', tab], ['Valor negociado:', neg]]);
  }
  br(12, ['LAGO', 'SUL'], 'F-122', '9,00 X 3,60 MTS', 'LAGO SUL, SUBIDA DA DOM BOSCO, - SENTIDO JARDIM BOTÂNICO', '-15.8527091,-47.8450828', '200.000', '50.000', '5.700,00', '4.560,00');
  br(12, ['LAGO', 'SUL'], 'F-135', '9X3,60 MTS', 'LAGO SUL, ERMIDA DO BOSCO, SENTIDO PONTE JK (3º PONTE) / - SENTIDO AEROPORTO JK', '-15.8083764,-47.8002552', '200.000', '50.000', '5.700,00', '4.560,00');
  br(12, ['EI', 'XÃO'], 'F-118', '9,00 x 3,60 mts', 'EIXÃO NORTE, SENTIDO EPIA DF- - 03 / GRANDE COLORADO / BR-020', '-15.7174506,-47.8981342', '180.000', '50.000', '3.500,00', '2.800,00');
  br(12, ['EP', 'GU'], 'F-320', '9.00 X 3.60 MTS', 'EPGU, EM FRENTE AO ZOOLÓGICO, - SENTIDO PARK SHOPPING / EPIA-DF03', '-15.844605,-47.9384123', '270.000', '80.000', '5.500,00', '4.400,00');
  br(12, ['EP', 'GU'], 'F-321', '9.00 X 3.60 MTS', 'EPGU, EM FRENTE AO ZOOLÓGICO, - SENTIDO AVENIDA DAS NAÇÕES / PLANO PILOTO (C)', '-15.844721,-47.9389585', '270.000', '80.000', '4.500,00', '3.600,00');
  br(13, ['EP', 'TG'], 'F-443', '9,00 X 3,60 MTS', 'EPTG - DF 085, PRÓXIMO AO VIADUTO DE ACESSO A ÁGUAS CLARAS, - SENTIDO TAGUATINGA', '-15.8299586,-48.0371153', '300.000', '170.000', '4.000,00', '3.200,00');
  br(13, ['EP', 'TG'], 'F-444', '9,00 X 3,60 MTS', 'EPTG - DF 085, PRÓXIMO AO GUARÁ, - SENTIDO PLANO PILOTO', '-15.8128539,-47.9991229', '300.000', '170.000', '4.000,00', '3.200,00');
  br(13, ['EP', 'TG'], 'F-456', '9.00 X 3.60 MTS', 'EPTG - DF 085, A 500 MTS DO SHOPPING DF PLAZA, - SENTIDO TAGUATINGA', '-15.8275788,-48.0316805', '300.000', '170.000', '4.000,00', '3.200,00');
  br(13, ['ÁGUAS', 'CLARAS'], 'F-431', '9,00 x 3,60 mts', 'ÁGUAS CLARAS, PISTA NOVA, SENTIDO RUA DAS CARNAÚBAS, - PLAZA MALL / AV. PARQUE', '-15.8257998,-48.0183578', '80.000', '30.000', '3.000,00', '2.400,00');
  br(13, ['ÁGUAS', 'CLARAS'], 'F-432', '9,00 x 3,60 mts', 'ÁGUAS CLARAS, PISTA NOVA, RUA DAS CARNAÚBA, - SENTIDO EPTG', '-15.8265798,-48.0187462', '80.000', '30.000', '3.000,00', '2.400,00');

  function visF(name, code, size, loc, vei, sentido, gps) {
    N(14, 'VISUPLAC', name, code, 'FRONT LIGHT', size, loc, null, vei, code.toLowerCase(), [['Sentido da Via:', sentido], ['Reforço:', 'Ilhós a cada 20 cm'], ['Iluminado', 'por 3 lâmpadas de 400W'], ['Código GPS:', gps]]);
  }
  visF(['ÁGUAS', 'CLARAS'], 'C-05', '6,19 x 2,55 m', 'Pista de acesso a EPVP. Em frente a Administração de Águas Claras (Colégio Ipê).', '61.000', 'Av. Castanheiras', '-15.83526, -48.00704');
  visF(['AERO', 'PORTO'], 'F-28', '10 x 4 M', 'DF 047. Entrada de acesso ao Aeroporto.', '57.000', 'Aeroporto', '-15.85792, -47.93391');
  visF(['EP', 'IA'], 'I-01', '9 x 3,60 M', 'DF 003. Próximo ao Viaduto Ayrton Senna.', '61.000', 'ParkShopping', '-15.78181, -47.94052');
  visF(['ÁGUAS', 'CLARAS'], 'I-02', '9 x 3,60 M', 'DF 079. Entrada de Águas Claras. Próximo a Igreja.', '61.000', 'EPTG', '-15.82644, -48.00897');
  visF(['EP', 'IA'], 'I-16', '9 x 3,60 M', 'DF 003. Em frente ao Makro.', '126.000', 'ParkShopping', '-15.89253, -47.96144');

  function visR(slide, name, code, loc, gps) {
    N(slide, 'VISUPLAC', name, code, 'RELÓGIO', '1,32 x 1,93 m', loc, null, null, code.toLowerCase(), [['Área útil:', '1,28 x 1,89m'], ['Utilidade pública:', 'informativo de hora, data e temperatura'], ['Material:', 'Adesivo vinílico (sem backout) aplicado em acrílico'], ['Iluminado (internamente)', 'por 8 lâmpadas de 20W'], ['Código GPS:', gps]], { cardExtra: ['Equipamento Dupla Face'] });
  }
  visR(15, ['ÁGUAS', 'CLARAS'], 'R-124', 'Av. Araucárias. Esquina próxima a Estação Águas Claras.', '-15.841554, -48.027796');
  visR(15, ['ÁGUAS', 'CLARAS'], 'R-126', 'Balão da entrada pelo SMPW. Próximo a ADM de Águas Claras.', '-15.835241, -48.007464');
  visR(15, ['ÁGUAS', 'CLARAS'], 'R-129', 'Balão de entrada em Águas Claras, sentido Taguatinga Shopping.', '-15.835790, -48.041342');
  visR(15, ['ÁGUAS', 'CLARAS'], 'R-140', 'Avenida Castanheiras, cruzamento próximo à Estação Arniqueiras.', '-15.834952, -48.017255');
  visR(15, ['CENTRO DE', 'BRASÍLIA'], 'R-29', 'SBN. Quadra 1 em frente aos Correios.', '-15.789610, -47.880609');
  visR(16, ['BRASÍLIA', 'CENTRO'], 'R-37', 'Galeria dos Estados, em frente a Estação do Metrô.', '-15.799426, -47.885454');
  visR(16, ['ASA', 'SUL'], 'R-42', 'SCS. Quadra 03/04. Próximo a Lojas Americanas.', '-15.798961, -47.888849');
  visR(16, ['ASA', 'SUL'], 'R-61', 'Cruzamento SCS / SRTVS. Próximo ao Pátio Brasil.', '-15.797435, -47.891905');
  visR(16, ['BRASÍLIA', 'CENTRO'], 'R-67', 'SCN. Quadra 1 em frente ao Central Park.', '-15.787565, -47.881773');
  visR(16, ['ASA', 'SUL'], 'R-77', 'Início da L2 sul em frente ao SAS quadra 1. Próximo ao Dataprev.', '-15.800130, -47.877800');

  N(17, 'U’PIANO', ['LAGO', 'SUL'], 'L-6', 'LED', '6,00 x 3,00m | 864x432 pixels', 'LAGO SUL QI 23, TOP 23 SENT. LAGO, FACE ESCOLA FAZENDÁRIA', null, '60.000', 'l-6', [['Área de Cobertura:', 'Lago Sul'], ['Público Alvo:', 'A / B / C'], ['Coordenadas GPS:', '-15.851464,-47.847026']]);
  N(17, 'U’PIANO', ['BR', 'ASÍLIA'], 'E-3', 'EMPENA', '15,00m x 30,00m', 'SCS CONDOMÍNIO DO EDIFÍCIO MÁRCIA, FACE EIXINHO / SBS', null, '120.000', 'e-3', [['Área de Cobertura:', 'Brasília'], ['Público Alvo:', 'A / B / C'], ['Coordenadas GPS:', '-15.797560,-47.884828']]);
  N(17, 'SCA MÍDIA', ['DF', ' 047'], 'PAINEL 59A', 'FRONT LIGHT', '9,00m x 3,60m', 'DF 047 próximo ao viaduto de acesso ao zoológico', null, '72.675', '59-a', [['Sentido:', 'Aeroporto para Asa Sul'], ['Público:', 'A/B'], ['Cobertura principal:', 'Plano Piloto, Asa Sul, Lago Sul e Park Way'], ['Cobertura completa:', 'Principal + Gama, Santa Maria, entorno Sul'], ['GPS:', '-15.848990, -47.931430']], { tag: true });
  N(17, 'SCA MÍDIA', ['EP', 'TG'], 'PAINEL 70A', 'FRONT LIGHT', '9,00m x 3,60m', 'EPTG (Estrada Parque de Taguatinga) - DF 085. Após a Residência Oficial do Governador', null, '175.174', '70-a', [['Sentido:', 'Taguatinga para Plano Piloto'], ['Público:', 'A/B/C'], ['Cobertura principal:', 'Taguatinga, Águas Claras, Guará, Plano Piloto'], ['GPS:', '-15.824853, -48.025633']], { tag: true });

  function rb(slide, fmt, name, code, size, loc, imp, pub, cpm, tab, neg, gps, tail, led) {
    var m = [['Público:', pub], ['CPM:', cpm], ['Valor de tabela:', tab], ['Desconto:', '50%'], ['Valor com desconto:', neg]];
    if (tail) m.push(['Valor impressão LONA:', tail]);
    if (led) m = [['Resolução:', led[0]], ['Horário:', led[1]], ['Inserções Diárias:', led[2]], ['Vinheta:', led[3]]].concat(m);
    m.push(['Coordenadas:', gps]);
    N(slide, 'RB OOH', name, code, fmt, size, loc, null, null, code.toLowerCase(), m, { cardExtra: ['Impactos/mês: ' + imp] });
  }
  rb(18, 'FRONT LIGHT', ['CRUZEIRO', 'NOVO'], 'NEV0016C', 'A confirmar 9,06x3,66 M', 'EM FRENTE AO CRUZEIRO NOVO, SENTIDO P/ EIXO MONUMENTAL ANTES PASSARELA DE ACESSO A FEIRA DOS IMPORTADOS - ILUMINADO', '87.587', 'MISTO', 'R$ 68,38', 'R$ 11.978,40', 'R$ 5.989,20', '-15.7972133, -47.9447925', 'R$ 1.260,06');
  rb(18, 'FRONT LIGHT', ['CRUZEIRO', 'VELHO'], 'SCA0042A', 'A confirmar 9,00x3,60 M', 'DF-003 NA ALTURA DO CRUZEIRO - SENTIDO CRUZEIRO PARA RODOFERROVIÁRIA', '87.587', 'MISTO', 'R$ 54,37', 'R$ 9.524,76', 'R$ 4.762,38', '-15.79511, -47.94443', 'R$ 1.231,20');
  rb(18, 'FRONT LIGHT', ['CRUZEIRO', 'VELHO'], 'NEV0003C', 'A confirmar 9,06x3,66 M', 'EPIA SUL, APÓS VIADUTO AYRTON SENNA, NA SAÍDA DA ESTRUTURAL PARA O EIXO MONUMENTAL - ILUMINADO', '126.438', 'MISTO', 'R$ 47,37', 'R$ 11.978,40', 'R$ 5.989,20', '-15.7823902, -47.9396616', 'R$ 1.260,06');
  rb(18, 'FRONT LIGHT', ['GU', 'ARÁ'], 'WSP0015', 'A confirmar 9,00x3,60 M', 'EPIA - ALTURA DO SIA ACESSO AO PARKSHOPPING', '4.840.000', 'MISTO', 'R$ 0,80', 'R$ 7.728,00', 'R$ 3.864,00', '-15.8063317, -47.948029', 'R$ 1.231,20');
  rb(19, 'FRONT LIGHT', ['GUARÁ', 'I'], 'FLG0120', 'A confirmar 9,00x3,60 M', 'DF-003, NA ENTRADA DO SIA - SENTIDO SIA PARA PARKSHOPPING', '139.556', 'MISTO', 'R$ 34,61', 'R$ 9.660,00', 'R$ 4.830,00', '-15.7953678, -47.9449208', 'R$ 1.231,20');
  rb(19, 'FRONT LIGHT', ['SETOR POLICIAL', 'SUL'], 'ALM0004', 'A confirmar 9,00x3,50 M', 'VIA EPIA SENTIDO SIA, PRÓXIMO À RODOVIÁRIA INTERESTADUAL', '1.605.000', 'AB', 'R$ 3,51', 'R$ 11.270,00', 'R$ 5.635,00', '-15.8276366, -47.9509634', 'R$ 1.197,00');
  rb(19, 'FRONT LIGHT', ['ZONA INDUSTRIAL', '(GUARÁ)'], 'BME2084', 'A confirmar 9,06x3,66 M', 'ESTRUTURAL- PROXIMO AO VIADUTO AYRTON SENNA SENTIDO: BRASILIA', '103.889', 'MISTO', 'R$ 34,84', 'R$ 7.240,00', 'R$ 3.620,00', '-15.7865722, -47.9438839', 'R$ 1.260,06');
  rb(19, 'FRONT LIGHT', ['ZONA INDUSTRIAL', '(GUARÁ)'], 'ALM0045', 'A confirmar 9,00x3,50 M', 'SENTIDO PLANO PILOTO / TAGUATINGA, SOBRE VIADUTO EPTG (CONTRA FLUXO)', '2.030.970', 'AB', 'R$ 2,77', 'R$ 11.270,00', 'R$ 5.635,00', '-15.8101209, -47.9493596', 'R$ 1.197,00');
  rb(20, 'LED', ['ASA', 'SUL'], 'CTM0216', 'A confirmar 3,84x1,92 M', 'SETOR HOSPITALAR ASA SUL, LOGO DEPOIS DO EDIFÍCIO MEDICAL CENTER, ATRÁS DO HOSPITAL DO CORAÇÃO.', '1.890.000', 'MISTO', 'R$ 2,30', 'R$ 8.694,00', 'R$ 4.347,00', '-15.8255422, -47.9295423', null, ['768x384px', '06:30~22:00', '512', '10"']);
  rb(20, 'LED', ['ASA', 'SUL'], 'ALM0003L', 'A confirmar 9,00x3,50 M', 'VIA L/2 SUL QD. 608, PROX PILATES TATI SCHNEIDER', '1.661.625', 'AB', 'R$ 4,84', 'R$ 16.100,00', 'R$ 8.050,00', '-15.8242778, -47.8992778', null, ['1920x700px', '05:00~01:00', '600', '15"']);
  rb(20, 'LED', ['CRUZEIRO', 'VELHO'], 'WSP0001L', 'A confirmar 8,00x4,00 M', 'EPIA ACESSO A VIA ESTRUTURAL E PARKSHOPPING', '2.030.000', 'MISTO', 'R$ 3,17', 'R$ 12.880,00', 'R$ 6.440,00', '-15.7833858, -47.9408292', null, ['864x432px', '05:00~02:00', '456', '15"']);
  rb(21, 'LED', ['GUARÁ', 'I'], 'ALM0004L', 'A confirmar 9,00x3,50 M', 'VIA EPIA ACESSO AO PARK SHOPPING, PROX MADEIRAMADEIRA', '2.407.500', 'AB', 'R$ 3,34', 'R$ 16.100,00', 'R$ 8.050,00', '-15.8274727, -47.9514514', null, ['1920x700px', '05:00~01:00', '600', '15"']);
  rb(21, 'LED', ['SETOR POLICIAL', 'SUL'], 'MJC0011', 'A confirmar 4,00x9,00 M', 'LOCALIZADO NA EPIA PRÓXIMO AO PARK SHOPPING.', '1.210.000', 'MISTO', 'R$ 4,18', 'R$ 10.113,60', 'R$ 5.056,80', '-15.8133806, -47.9486642', null, ['384x864px', '06:00~00:00', '300', '15"']);
  rb(21, 'LED', ['ZONA INDUSTRIAL', '(GUARÁ)'], 'ALM0009L', 'A confirmar 9,00x3,50 M', 'VIA EPTG, SIA , NO VIADUTO SOBRE A EPIA', '2.030.970', 'AB', 'R$ 3,96', 'R$ 16.100,00', 'R$ 8.050,00', '-15.8101682, -47.9499343', null, ['1920x700px', '05:00~01:00', '600', '15"']);

  points.forEach(function (p, i) {
    p.id = i;
    p.veiN = p.vei ? parseInt(p.vei.replace(/\./g, ''), 10) : 0;
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
    anexos: [
      { emp: 'JCDecaux', doc: 'Proposta Comercial 2026: MUB BSB OOH e DOOH', file: 'jcdecaux-mub', lines: ['80 faces pagas – Circuito Super Premium: R$46.294,38', '60 faces Digitais: R$80.015,04'] },
      { emp: 'HIGHLINE', doc: 'Empena, 15 dias', file: 'highline-15-dias', lines: ['STANDARD: R$ 31.500,00', 'MASTER: R$ 58.500,00', 'PREMIUM: R$ 96.000,00'] },
      { emp: 'HIGHLINE', doc: 'Empena, 30 dias', file: 'highline-30-dias', lines: ['STANDARD: R$ 52.500,00', 'MASTER: R$ 97.500,00', 'PREMIUM: R$ 160.000,00'] },
      { emp: 'BR PAINÉIS', doc: 'Proposta 67109780', file: 'br-paineis-proposta', lines: ['10 pontos', 'VALOR TOTAL: R$ 34.320,00'] },
      { emp: 'RB OOH', doc: 'RB26/32964: Front light', file: 'rb-front-light', lines: ['8 pontos', 'Com desconto: R$ 40.324,78/mês', 'Impressão: R$ 9.867,78'] },
      { emp: 'RB OOH', doc: 'RB26/32968: Painel de led', file: 'rb-led', lines: ['6 pontos', 'Com desconto: R$ 39.993,80/mês'] },
      { emp: 'GRUPO BRASIL MÍDIA', doc: 'Mídia Kit Painéis, Fevereiro de 2026', file: 'gb-midia-kit', lines: ['Mídia Kit completo em PDF'] },
      { emp: 'GRUPO BRASIL MÍDIA', doc: 'Mídia Kit Busdoor', file: 'gb-busdoor', lines: ['Mídia Kit completo em PDF'] }
    ],
    nav: [
      { head: 'Tutory por Brasília', items: [[1, 'Reforçar a nossa marca em Brasília!'], [2, 'Visibilidade Inteligente nos Pontos Mais Estratégicos de Brasília']] },
      { head: 'Curiosidades', items: [[3, 'Curiosidades Importantes de Brasília...'], [4, 'Dados de pesquisas sobre moradia X emprego'], [5, 'Região e Vias principais de carro']] },
      { head: 'Propostas', items: [[6, 'Propostas Outdoor BR PAINÉIS'], [7, 'Propostas Front Light BR PAINÉIS'], [8, 'Propostas Front Light VISUPLAC'], [9, 'Propostas LED e Front Light VISUPLAC'], [10, 'Propostas LED e Front Light U’PIANO'], [11, 'Propostas LED e Front Light U’PIANO']] },
      { head: 'Outros locais oferecidos', items: [[12, 'Front Light BR PAINÉIS'], [13, 'Front Light BR PAINÉIS'], [14, 'Front Light VISUPLAC'], [15, 'Relógio VISUPLAC'], [16, 'Relógio VISUPLAC'], [17, 'LED, Empena e Front Light U’PIANO e SCA MÍDIA'], [18, 'Front Light RB OOH'], [19, 'Front Light RB OOH'], [20, 'LED RB OOH'], [21, 'LED RB OOH'], [22, 'Propostas recebidas (PDF)']] },
      { head: 'Variações de Valores', items: [[23, 'Variações de Valores'], [24, 'Plano fechado']] },
      { head: 'Encerramento', items: [[25, 'Tutory por Brasília!']] }
    ]
  };
})();
