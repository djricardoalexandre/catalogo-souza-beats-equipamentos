// ====================================================================
//  SOUZA BEATS EQUIPAMENTOS — Produtos Reais (Biquad Broadcast)
// ====================================================================
//  Dados reais extraídos do catálogo Biquad Broadcast
// --------------------------------------------------------------------

import type { Product, ProductSpec } from './catalog';

const DEFAULT_FEATURES = [
  'Alta qualidade de áudio profissional',
  'Construção robusta para uso contínuo',
  'Compatível com padrões de broadcast',
  'Interface intuitiva para operação rápida',
];

const DEFAULT_APPLICATIONS = [
  'Estúdios de rádio AM/FM',
  'Cabines de locução',
  'Centros de transmissão',
  'Produção de conteúdo audiovisual',
];

const DEFAULT_SPECS: ProductSpec[] = [
  { label: 'Tipo', value: 'Equipamento profissional' },
  { label: 'Conexões', value: 'A definir conforme modelo' },
  { label: 'Dimensões', value: 'A definir conforme modelo' },
  { label: 'Peso', value: 'A definir conforme modelo' },
  { label: 'Alimentação', value: 'A definir conforme modelo' },
  { label: 'Garantia', value: 'Consultar condições' },
];

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

// --------------------------------------------------------------------
//  Definição de produtos por subcategoria
//  Cada entrada: [slug, name, description, brand?, specs?]
// --------------------------------------------------------------------

type ProductDef = [string, string, string, string?];
type ProductDefWithSpecs = [string, string, string, string?, ProductSpec[]?];

// ENCODER RDS (3)
const ENCODER_RDS: ProductDefWithSpecs[] = [
  ['acadia', 'ACADIA - Encoder RDS/RBDS', 'Encoder RDS/RBDS ACADIA para rádio FM com interface Web, TCP/IP, USB e display OLED. Solução completa para emissoras que buscam transmitir mensagens de texto e comandos diretamente para receptores compatíveis. Suporta tanto o padrão europeu RDS quanto o americano RBDS.', undefined, [
    { label: 'Interface', value: 'Web, TCP/IP, USB' },
    { label: 'Display', value: 'OLED' },
    { label: 'Padrões', value: 'RDS (Europa) e RBDS (EUA)' },
    { label: 'Alimentação', value: 'Full Range 90-240V AC' },
    { label: 'Montagem', value: 'Rack 19"' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['acadia-nano', 'ACADIA NANO - Encoder RDS/RBDS', 'Encoder RDS/RBDS compacto para emissoras FM, com configuração via web, display OLED e integração com automação de rádio. Versão econômica do encoder ACADIA com página web de controle simplificada em gabinete reduzido padrão linha modular.', undefined, [
    { label: 'Interface', value: 'Web, TCP/IP' },
    { label: 'Display', value: 'OLED' },
    { label: 'Padrões', value: 'RDS (Europa) e RBDS (EUA)' },
    { label: 'Montagem', value: 'Linha modular / Rack' },
    { label: 'Alimentação', value: 'Full Range' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['acadia-nano-rack', 'ACADIA NANO RACK - Encoder RDS/RBDS', 'Versão rack com uma unidade do ACADIA NANO montada no painel adaptador padrão rack 19". Encoder RDS/RBDS para emissoras FM com configuração via web e display OLED.', undefined, [
    { label: 'Interface', value: 'Web, TCP/IP' },
    { label: 'Display', value: 'OLED' },
    { label: 'Montagem', value: 'Rack 19"' },
    { label: 'Alimentação', value: 'Full Range' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
];

// HÍBRIDAS TELEFÔNICAS (5)
const HIBRIDAS_TELEFONE: ProductDefWithSpecs[] = [
  ['alo-3', 'ALO 3 - Híbrida Telefônica', 'Interface telefônica analógica de 3 linhas para estúdios, com híbridas independentes, áudio balanceado e cancelamento de eco. Permite conectar até três ouvintes simultaneamente em programas de rádio ao vivo.', undefined, [
    { label: 'Linhas', value: '3 linhas analógicas' },
    { label: 'Tipo', value: 'Híbrida telefônica passiva' },
    { label: 'Áudio', value: 'Balanceado' },
    { label: 'Cancelamento', value: 'Eco independente por linha' },
    { label: 'Alimentação', value: 'Full Range' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['alo-nano', 'ALO NANO - Híbrida Telefônica', 'Híbrida telefônica compacta da linha modular para integração de chamadas em programas de rádio. Ideal para estúdios com espaço reduzido.', undefined, DEFAULT_SPECS],
  ['hello-1', 'HELLO 1 - Híbrida Telefônica IP', 'Híbrida telefônica IP Telos HELLO 1 para integração de chamadas via SIP em programas de rádio com qualidade de áudio profissional.', 'TELOS', DEFAULT_SPECS],
  ['hello-2', 'HELLO 2 - Híbrida Telefônica IP', 'Híbrida telefônica IP Telos HELLO 2 com dupla linha SIP para integração de chamadas em programas de rádio.', 'TELOS', DEFAULT_SPECS],
  ['hello-3', 'HELLO 3 - Híbrida Telefônica IP', 'Híbrida telefônica IP Telos HELLO 3 com múltiplas linhas SIP e recursos avançados para programas de rádio com participação de ouvintes.', 'TELOS', DEFAULT_SPECS],
];

// CONSOLES (8)
const CONSOLES: ProductDefWithSpecs[] = [
  ['axia-desq', 'Axia DESQ', 'Console broadcast AoIP desktop Axia DESQ com surface e mix engine integrados. Design compacto para estúdios de rádio modernos com tecnologia AES67.', 'AXIA', [
    { label: 'Tecnologia', value: 'AoIP / AES67' },
    { label: 'Tipo', value: 'Desktop console' },
    { label: 'Faders', value: 'Múltiplos faders motorizados' },
    { label: 'Compatibilidade', value: 'Livewire+ AES67' },
    { label: 'Alimentação', value: 'PoE / DC' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['axia-iq', 'Axia iQ', 'Console broadcast AoIP Axia iQ com surface e mix engine integrados para estúdios de rádio. Compatível com redes Livewire+ e AES67.', 'AXIA', [
    { label: 'Tecnologia', value: 'AoIP / AES67' },
    { label: 'Tipo', value: 'Console broadcast' },
    { label: 'Faders', value: 'Faders motorizados' },
    { label: 'Compatibilidade', value: 'Livewire+ AES67' },
    { label: 'Alimentação', value: 'PoE / DC' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['axia-radius', 'Axia Radius', 'Console broadcast AoIP Axia Radius com 8 faders para estúdios de rádio. Compatível com AES67 e redes Livewire+.', 'AXIA', [
    { label: 'Tecnologia', value: 'AoIP / AES67' },
    { label: 'Faders', value: '8 faders' },
    { label: 'Compatibilidade', value: 'Livewire+ AES67' },
    { label: 'Alimentação', value: 'PoE / DC' },
    { label: 'Montagem', value: 'Desktop' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['axia-iqx', 'Axia iQx', 'Console broadcast AoIP Axia iQx com surface e mix engine integrados, compatível com AES67. Ideal para estúdios de rádio modernos e redes IP profissionais.', 'AXIA', [
    { label: 'Tecnologia', value: 'AoIP / AES67' },
    { label: 'Tipo', value: 'Console broadcast' },
    { label: 'Faders', value: 'Faders motorizados' },
    { label: 'Compatibilidade', value: 'Livewire+ AES67' },
    { label: 'Alimentação', value: 'PoE / DC' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['dsx-01', 'DSX-01 - Mixer Digital', 'Mixer de produção digital com 8 entradas de microfone, 4 entradas de linha, faders deslizantes e conexão USB. Processamento DSP profissional para estúdio de rádio.', undefined, [
    { label: 'Canais', value: '8 MIC + 4 LINE' },
    { label: 'Faders', value: 'Deslizantes' },
    { label: 'USB', value: 'Sim' },
    { label: 'Processamento', value: 'DSP' },
    { label: 'Saída', value: 'XLR balanceada' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['dsx-02', 'DSX-02 - Mixer Digital', 'Mixer de produção digital com 12 entradas de microfone, 16 entradas de linha, faders deslizantes e conexão USB. Processamento DSP profissional para estúdio de rádio.', undefined, [
    { label: 'Canais', value: '12 MIC + 16 LINE' },
    { label: 'Faders', value: 'Deslizantes' },
    { label: 'USB', value: 'Sim' },
    { label: 'Processamento', value: 'DSP' },
    { label: 'Saída', value: 'XLR balanceada' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['dsx-03', 'DSX-03 - Mixer Digital', 'Mixer de produção digital com 8 canais MIC/LINE, 4 estéreo, faders deslizantes, USB e processador integrado para estúdio de rádio.', undefined, [
    { label: 'Canais', value: '8 MIC/LINE + 4 ST' },
    { label: 'Faders', value: 'Deslizantes' },
    { label: 'USB', value: 'Sim' },
    { label: 'Processamento', value: 'DSP + Processador' },
    { label: 'Saída', value: 'XLR balanceada' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['dsx-04', 'DSX-04 - Mixer Digital', 'Mixer de produção digital com 32 canais MIC/LINE, 1 estéreo, faders deslizantes, USB e processador integrado para estúdio de rádio profissional.', undefined, [
    { label: 'Canais', value: '32 MIC/LINE + 1 ST' },
    { label: 'Faders', value: 'Deslizantes' },
    { label: 'USB', value: 'Sim' },
    { label: 'Processamento', value: 'DSP + Processador' },
    { label: 'Saída', value: 'XLR balanceada' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
];

// MIXERS (3 - analógicos)
const MIXERS: ProductDefWithSpecs[] = [
  ['bq10mx', 'BQ10MX - Mixer Analógico', 'Mixer de produção analógico com 4 entradas de microfone, 3 estéreo, fader rotativo, USB e efeitos DSP SPX com 24 programas. Ideal para estúdios e eventos ao vivo.', undefined, [
    { label: 'Canais', value: '4 MIC + 3 ST' },
    { label: 'Faders', value: 'Rotativos' },
    { label: 'USB', value: '24-bit / 192kHz' },
    { label: 'Efeitos', value: 'SPX 24 programas' },
    { label: 'Alimentação', value: 'Full Range interna' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['bq12mx', 'BQ12MX - Mixer Analógico', 'Mixer de produção analógico com 4 entradas de microfone, 4 estéreo, 11 faders deslizantes, USB e efeitos DSP SPX. Pré-amplificadores com circuito Darlington para som quente.', undefined, [
    { label: 'Canais', value: '4 MIC + 4 ST (11 canais)' },
    { label: 'Faders', value: '11 deslizantes' },
    { label: 'USB', value: '24-bit / 192kHz' },
    { label: 'Efeitos', value: 'SPX 24 programas' },
    { label: 'Alimentação', value: 'Full Range interna' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['bq16mx', 'BQ16MX - Mixer Analógico', 'Mixer de produção analógico versátil e robusto com 8 entradas de microfone, 4 entradas estéreo, 16 faders deslizantes e efeitos DSP SPX com 24 programas. Controle preciso e qualidade sonora profissional.', undefined, [
    { label: 'Canais', value: '8 MIC + 4 ST (16 canais)' },
    { label: 'Faders', value: '16 deslizantes' },
    { label: 'USB', value: '24-bit / 192kHz' },
    { label: 'Efeitos', value: 'SPX 24 programas' },
    { label: 'Alimentação', value: 'Full Range interna' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
];

// FONES (4)
const FONES: ProductDefWithSpecs[] = [
  ['hp1', 'HP1 - Fone de Monitoração', 'Fone de ouvido profissional de monitoração para estúdio de rádio e broadcast com resposta de frequência precisa e isolamento acústico.', undefined, DEFAULT_SPECS],
  ['hp-600', 'HP-600 - Fone de Monitoração', 'Fone de ouvido profissional de alta qualidade para monitoração em estúdios de rádio e broadcast.', undefined, DEFAULT_SPECS],
  ['hp600-mp', 'HP600-MP - Fone de Monitoração', 'Fone de ouvido profissional para monitoração em estúdios de rádio com construção robusta e conforto para uso prolongado.', undefined, DEFAULT_SPECS],
  ['mdr-7506', 'Sony MDR-7506', 'Fone de ouvido profissional Sony MDR-7506 de referência para monitoração em estúdios de rádio, broadcast e produção audiovisual.', 'SONY', [
    { label: 'Tipo', value: 'Fechado dinâmico' },
    { label: 'Resposta', value: '10Hz - 20kHz' },
    { label: 'Impedância', value: '63 ohms' },
    { label: 'Sensibilidade', value: '106 dB/mW' },
    { label: 'Driver', value: '40mm' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
];

// MONITORES (4)
const MONITORES: ProductDefWithSpecs[] = [
  ['monitores-01', 'Monitor de Áudio 01', 'Monitor de áudio de referência para estúdio com resposta de frequência precisa e construção robusta.', undefined, DEFAULT_SPECS],
  ['monitores-02', 'Monitor de Áudio 02', 'Monitor de áudio profissional para estúdio de rádio com alta fidelidade sonora.', undefined, DEFAULT_SPECS],
  ['monitores-03', 'Monitor de Áudio 03', 'Monitor de áudio de referência para broadcast com resposta plana e detalhada.', undefined, DEFAULT_SPECS],
  ['monitores-04', 'Monitor de Áudio 04', 'Monitor de áudio profissional para estúdio com amplificação integrada.', undefined, DEFAULT_SPECS],
];

// PROCESSADOR DE MICROFONE (3)
const PROCESSADOR_MICROFONE: ProductDefWithSpecs[] = [
  ['tiger-dpr88tg', 'Tiger DPR88TG - Processador de Microfone Dante', 'Processador digital de microfones com Dante, controle de dinâmica, equalização e efeitos para locução profissional em estúdios de rádio.', undefined, [
    { label: 'Tecnologia', value: 'Dante / AoIP' },
    { label: 'Processamento', value: 'Digital' },
    { label: 'Funções', value: 'Compressão, Gate, EQ' },
    { label: 'Canais', value: 'Múltiplos canais' },
    { label: 'Alimentação', value: 'PoE' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['punch-s', 'PUNCH S - Processador de Microfone', 'Processador de microfone com controle de dinâmica, equalização e processamento de sinal para locução profissional em estúdios de rádio.', 'BIQUAD', DEFAULT_SPECS],
  ['mpx-2', 'MPX-2 - Processador de Microfone', 'Processador de microfone profissional para otimização de voz em estúdios de rádio e broadcast.', undefined, DEFAULT_SPECS],
];

// PROCESSADORES DE ÁUDIO (10)
const PROCESSADORES_AUDIO: ProductDefWithSpecs[] = [
  ['apg-02', 'APG 02 - Processador de Áudio FM', 'Processador de áudio FM analógico 3 bandas com gerador estéreo e clipper MPX. Tecnologia Plug & Play para emissoras de rádio. AGC wideband, compressão multibanda de 3 frequências independentes e separação de canais superior a 60 dB.', 'BIQUAD', [
    { label: 'Topologia', value: 'Analógica On-Air FM' },
    { label: 'Bandas', value: '3 bandas independentes' },
    { label: 'AGC', value: 'Wideband' },
    { label: 'Gerador Estéreo', value: 'Separação > 60 dB @ 1kHz' },
    { label: 'Alimentação', value: 'Full Range 90-240V AC' },
    { label: 'Montagem', value: 'Rack 19" 1U' },
  ]],
  ['dap4-fm', 'DAP4 FM - Processador de Áudio', 'Processador de áudio digital FM Biquad DAP4 com processamento multibanda avançado, gerador estéreo e clipper MPX para emissoras de rádio FM.', 'BIQUAD', DEFAULT_SPECS],
  ['dap4-am', 'DAP4 AM - Processador de Áudio', 'Processador de áudio digital AM Biquad DAP4 otimizado para emissoras de rádio AM com processamento específico para a banda de AM.', 'BIQUAD', DEFAULT_SPECS],
  ['dap4-tv', 'DAP4 TV - Processador de Áudio', 'Processador de áudio digital TV Biquad DAP4 para emissoras de televisão com processamento multibanda e controle de loudness.', 'BIQUAD', DEFAULT_SPECS],
  ['omnia-9', 'Omnia 9 - Processador de Áudio', 'Processador de áudio Omnia 9 com processamento multibanda de altíssima qualidade para FM, AM e streaming. Referência em processamento de áudio para broadcast.', undefined, DEFAULT_SPECS],
  ['omnia-11', 'Omnia 11 - Processador de Áudio', 'Processador de áudio Omnia 11 com processamento multibanda avançado e gerador estéreo de alta fidelidade para emissoras de FM.', undefined, DEFAULT_SPECS],
  ['omnia-volt', 'Omnia VOLT - Processador de Áudio', 'Processador de áudio Omnia VOLT com processamento multibanda versátil para FM, AM, streaming e HD Radio. Solução compacta e poderosa.', undefined, DEFAULT_SPECS],
  ['omnia-xii', 'Omnia XII - Processador de Áudio', 'Processador de áudio Omnia XII de referência com 12 bandas de processamento para máxima qualidade sonora em emissoras de FM.', undefined, DEFAULT_SPECS],
  ['omnia-mpx-node', 'Omnia MPX Node', 'Omnia MPX Node para transporte de sinal MPX sobre IP com alta precisão e baixa latência. Permite distribuir o sinal composto MPX via rede.', undefined, DEFAULT_SPECS],
  ['punch-full', 'PUNCH FULL - Processador de Áudio', 'Processador de áudio Biquad PUNCH FULL com processamento multibanda completo para emissoras de rádio FM que buscam presença marcante no ar.', 'BIQUAD', DEFAULT_SPECS],
];

// SUPORTES DE MICROFONES (3)
const SUPORTES_MICROFONES: ProductDefWithSpecs[] = [
  ['top-arm', 'TOP ARM - Suporte de Microfone', 'Suporte para microfone TOP ARM com LED ON-AIR integrado, ideal para estúdios profissionais. Oferece ergonomia, organização e sinalização eficiente.', undefined, [
    { label: 'LED', value: 'ON-AIR integrado' },
    { label: 'Tipo', value: 'Braço articulado' },
    { label: 'Fixação', value: 'Morsa de mesa' },
    { label: 'Compatibilidade', value: 'Universal' },
    { label: 'Material', value: 'Metal reforçado' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['nano-arm', 'NANO ARM - Suporte de Microfone', 'Suporte para microfone NANO ARM compacto para estúdios com espaço reduzido. Ergonomia e organização em formato compacto.', undefined, DEFAULT_SPECS],
  ['move-arm', 'MOVE ARM - Suporte de Microfone', 'Suporte para microfone MOVE ARM com articulação suave e fixação segura para estúdios profissionais de rádio.', undefined, DEFAULT_SPECS],
];

// TRANSMISSORES E RF (2)
const TRANSMISSORES_RF: ProductDefWithSpecs[] = [
  ['thesla-tx-1k', 'THESLA TX 1K - Transmissor RF', 'Transmissor de RF Thesla TX 1K com 1.000W de potência para radiodifusão FM. Alta estabilidade e eficiência energética.', undefined, [
    { label: 'Potência', value: '1.000W' },
    { label: 'Banda', value: 'FM 88-108 MHz' },
    { label: 'Estabilidade', value: 'Alta' },
    { label: 'Refrigeração', value: 'Forçada' },
    { label: 'Alimentação', value: 'AC 220V' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['thesla-tx-35k', 'THESLA TX 35K - Transmissor RF', 'Transmissor de RF Thesla TX 35K com 35.000W de potência para radiodifusão FM de alta potência. Construção robusta para operação contínua.', undefined, [
    { label: 'Potência', value: '35.000W' },
    { label: 'Banda', value: 'FM 88-108 MHz' },
    { label: 'Estabilidade', value: 'Alta' },
    { label: 'Refrigeração', value: 'Forçada' },
    { label: 'Alimentação', value: 'AC trifásico' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
];

// LINKS STL (1)
const LINKS_STL: ProductDefWithSpecs[] = [
  ['thesla-link-950', 'THESLA LINK 950 TX/RX - Link STL', 'Link de transmissão STL Thesla Link 950 TX/RX para conexão entre estúdio e transmissor. Operação em 950 MHz com alta confiabilidade.', undefined, [
    { label: 'Frequência', value: '950 MHz' },
    { label: 'Tipo', value: 'TX/RX link STL' },
    { label: 'Latência', value: 'Baixa' },
    { label: 'Alimentação', value: 'DC / AC' },
    { label: 'Montagem', value: 'Rack 19"' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
];

// RECEPTORES (2)
const RECEPTORES: ProductDefWithSpecs[] = [
  ['tuner-m1', 'TUNER M1 - Receptor de Rádio', 'Receptor de rádio TUNER M1 profissional para monitoração e recepção de sinais AM/FM em estúdios e centros de transmissão.', undefined, [
    { label: 'Bandas', value: 'AM/FM' },
    { label: 'Tipo', value: 'Receptor sintonizador' },
    { label: 'Saídas', value: 'XLR balanceada' },
    { label: 'Alimentação', value: 'AC 110/220V' },
    { label: 'Montagem', value: 'Rack 19"' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['tuner-m2', 'TUNER M2 - Receptor de Rádio', 'Receptor de rádio TUNER M2 profissional para monitoração e recepção de sinais AM/FM com recursos avançados de sintonia.', undefined, [
    { label: 'Bandas', value: 'AM/FM' },
    { label: 'Tipo', value: 'Receptor sintonizador' },
    { label: 'Saídas', value: 'XLR balanceada' },
    { label: 'Alimentação', value: 'AC 110/220V' },
    { label: 'Montagem', value: 'Rack 19"' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
];

// DISTRIBUIDORES (4)
const DISTRIBUIDORES: ProductDefWithSpecs[] = [
  ['dist-28', 'DIST-28 - Distribuidor de Áudio', 'Distribuidor de áudio para rádios DIST-28 com 1 entrada e 8 saídas balanceadas para distribuição de sinais de áudio em estúdios e centros de transmissão.', undefined, [
    { label: 'Entradas', value: '1' },
    { label: 'Saídas', value: '8 balanceadas' },
    { label: 'Tipo', value: 'Distribuidor de áudio' },
    { label: 'Alimentação', value: 'AC 110/220V' },
    { label: 'Montagem', value: 'Rack 19"' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['thesla-amp-5k', 'THESLA AMP 5K - Amplificador', 'Amplificador de RF Thesla AMP 5K com 5.000W para radiodifusão FM. Alta eficiência e estabilidade para operação contínua.', undefined, [
    { label: 'Potência', value: '5.000W' },
    { label: 'Tipo', value: 'Amplificador de RF' },
    { label: 'Banda', value: 'FM 88-108 MHz' },
    { label: 'Refrigeração', value: 'Forçada' },
    { label: 'Alimentação', value: 'AC 220V' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['thesla-amp-6k', 'THESLA AMP 6K - Amplificador', 'Amplificador de RF Thesla AMP 6K com 6.000W para radiodifusão FM. Construção robusta para operação contínua em emissoras de alta potência.', undefined, [
    { label: 'Potência', value: '6.000W' },
    { label: 'Tipo', value: 'Amplificador de RF' },
    { label: 'Banda', value: 'FM 88-108 MHz' },
    { label: 'Refrigeração', value: 'Forçada' },
    { label: 'Alimentação', value: 'AC 220V' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['dist-04', 'THESLA TX 1K - Transmissor FM', 'Transmissor FM Thesla TX 1K com potência ajustável de 10W a 1000W, operação em 87-108 MHz com MPX, analógico L/R e stereo coder. Construção robusta para operação contínua em emissoras de rádio.', undefined, [
    { label: 'Potência', value: '10W - 1.000W ajustável' },
    { label: 'Tipo', value: 'Transmissor FM' },
    { label: 'Frequência', value: '87-108 MHz' },
    { label: 'Modulação', value: 'MPX / Analógico L/R / Stereo Coder' },
    { label: 'Alimentação', value: 'AC 220V' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
];

// INTERFACE AOIP (5)
const INTERFACE_AOIP: ProductDefWithSpecs[] = [
  ['dbox44a', 'DBox44A - Interface Dante 4 Analógico', 'Interface de áudio Dante DBox44A com 4 entradas/saídas analógicas para conversão entre analógico e rede Dante. Baixa latência e alta qualidade.', undefined, [
    { label: 'Tecnologia', value: 'Dante / AoIP' },
    { label: 'Canais', value: '4 analógicos' },
    { label: 'Latência', value: 'Baixa' },
    { label: 'Alimentação', value: 'PoE' },
    { label: 'Montagem', value: 'Compacto' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['dbox1616a', 'DBox1616A - Interface Dante 16 Analógico', 'Interface de áudio Dante DBox1616A com 16 entradas/saídas analógicas para conversão entre analógico e rede Dante em sistemas profissionais.', undefined, [
    { label: 'Tecnologia', value: 'Dante / AoIP' },
    { label: 'Canais', value: '16 analógicos' },
    { label: 'Latência', value: 'Baixa' },
    { label: 'Alimentação', value: 'PoE' },
    { label: 'Montagem', value: 'Rack 19"' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['dp22', 'DP22 - Interface Dante 2 Mic', 'Interface de áudio Dante DP22 com 2 entradas de microfone e saídas analógicas para conexão de microfones em rede Dante.', undefined, [
    { label: 'Tecnologia', value: 'Dante / AoIP' },
    { label: 'Entradas', value: '2 microfone' },
    { label: 'Phantom', value: '+48V' },
    { label: 'Alimentação', value: 'PoE' },
    { label: 'Montagem', value: 'Compacto' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['usb22', 'USB22 - Interface Dante USB', 'Interface de áudio Dante USB22 bidirecional com PoE para conexão USB I/O x Dante I/O. Ideal para gravação e reprodução via rede Dante.', undefined, [
    { label: 'Tecnologia', value: 'Dante / AoIP' },
    { label: 'Conexão', value: 'USB bidirecional' },
    { label: 'Alimentação', value: 'PoE' },
    { label: 'Latência', value: 'Baixa' },
    { label: 'Compatibilidade', value: 'Windows/Mac' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['dpr84ad', 'DPR84AD - Processador Dante', 'Processador de áudio Dante DPR84AD com processamento multibanda em rede para estúdios de rádio com tecnologia AoIP.', undefined, [
    { label: 'Tecnologia', value: 'Dante / AoIP' },
    { label: 'Processamento', value: 'Multibanda digital' },
    { label: 'Canais', value: 'Múltiplos' },
    { label: 'Alimentação', value: 'PoE / DC' },
    { label: 'Montagem', value: 'Rack 19"' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
];

// SOLUÇÕES DANTE (13)
const SOLUCOES_DANTE: ProductDefWithSpecs[] = [
  ['dbox44a-d', 'DBox44A - Interface Dante 4 Analógico', 'Interface de áudio Dante DBox44A com 4 canais analógicos para conversão entre analógico e rede Dante.', undefined, DEFAULT_SPECS],
  ['dbox1616a-d', 'DBox1616A - Interface Dante 16 Analógico', 'Interface de áudio Dante DBox1616A com 16 canais analógicos para sistemas Dante profissionais.', undefined, DEFAULT_SPECS],
  ['dp22-d', 'DP22 - Interface Dante 2 Mic', 'Interface de áudio Dante DP22 com 2 entradas de microfone para rede Dante.', undefined, DEFAULT_SPECS],
  ['ad22', 'AD22 - Adaptador Dante RJ45 x 2 XLR Fêmea', 'Adaptador de áudio Dante AD22 com conector RJ45 e 2 saídas XLR fêmea para conexão de dispositivos analógicos em rede Dante.', undefined, DEFAULT_SPECS],
  ['da22', 'DA22 - Adaptador Dante RJ45 x 2 XLR Macho', 'Adaptador de áudio Dante DA22 com conector RJ45 e 2 entradas XLR macho para conexão de sinais analógicos em rede Dante.', undefined, DEFAULT_SPECS],
  ['usb22-d', 'USB22 - Interface Dante USB', 'Interface Dante USB22 bidirecional com PoE para gravação e reprodução via rede Dante.', undefined, DEFAULT_SPECS],
  ['dpr84ad-d', 'DPR84AD - Processador de Áudio Dante', 'Processador de áudio Dante DPR84AD com processamento multibanda em rede.', undefined, DEFAULT_SPECS],
  ['2xlrf-rj45f', 'Adaptador 2XLR-F x RJ45-F', 'Adaptador 2 XLR fêmea para RJ45 fêmea para infraestrutura Dante.', undefined, DEFAULT_SPECS],
  ['2xlrf-rj45m', 'Adaptador 2XLR-F x RJ45-M', 'Adaptador 2 XLR fêmea para RJ45 macho para infraestrutura Dante.', undefined, DEFAULT_SPECS],
  ['2xlrm-rj45f', 'Adaptador 2XLR-M x RJ45-F', 'Adaptador 2 XLR macho para RJ45 fêmea para infraestrutura Dante.', undefined, DEFAULT_SPECS],
  ['2xlrm-rj45m', 'Adaptador 2XLR-M x RJ45-M', 'Adaptador 2 XLR macho para RJ45 macho para infraestrutura Dante.', undefined, DEFAULT_SPECS],
  ['tiger-dpr88tg-d', 'Tiger DPR88TG - Processador de Microfone Dante', 'Processador digital de microfones com Dante para controle de dinâmica e processamento de voz.', undefined, DEFAULT_SPECS],
  ['dpr84ad-d2', 'DPR84AD - Processador Dante', 'Processador de áudio Dante para estúdios com tecnologia AoIP.', undefined, DEFAULT_SPECS],
];

// AXIA TELOS (4)
const AXIA_TELOS: ProductDefWithSpecs[] = [
  ['axia-desq-at', 'Axia DESQ', 'Console broadcast AoIP Axia DESQ desktop com surface e mix engine integrados, compatível com AES67.', 'AXIA', DEFAULT_SPECS],
  ['axia-iq-at', 'Axia iQ', 'Console broadcast AoIP Axia iQ com surface e mix engine integrados para estúdios de rádio.', 'AXIA', DEFAULT_SPECS],
  ['axia-radius-at', 'Axia Radius', 'Console broadcast AoIP Axia Radius com 8 faders para estúdios de rádio.', 'AXIA', DEFAULT_SPECS],
  ['axia-iqx-at', 'Axia iQx', 'Console broadcast AoIP Axia iQx com surface e mix engine integrados, compatível com AES67.', 'AXIA', DEFAULT_SPECS],
];

// CODEC (3)
const CODEC: ProductDefWithSpecs[] = [
  ['codec-mx2200', 'Codec IP Solidyne MX2200', 'Codec IP portátil Solidyne MX2200 com mixer integrado, transmissão estéreo e híbrido telefônico. Ideal para transmissões externas com qualidade profissional.', 'SOLIDYNE', [
    { label: 'Tipo', value: 'Codec IP portátil' },
    { label: 'Mixer', value: 'Integrado' },
    { label: 'Transmissão', value: 'Estéreo IP' },
    { label: 'Híbrido', value: 'Telefônico integrado' },
    { label: 'Alimentação', value: 'Bateria / DC' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['aeq-phoenix-mercury', 'AEQ Phoenix Mercury', 'Codec de áudio AEQ Phoenix Mercury para transmissão e recepção de alta qualidade sobre IP com múltiplos protocolos.', undefined, DEFAULT_SPECS],
  ['codec-mx2200-2', 'Codec IP Solidyne MX2200', 'Codec IP portátil Solidyne MX2200 com mixer integrado e híbrido telefônico para transmissões externas.', 'SOLIDYNE', DEFAULT_SPECS],
];

// TELOS (4)
const TELOS: ProductDefWithSpecs[] = [
  ['hello-1-t', 'HELLO 1 - Híbrida Telos', 'Híbrida telefônica IP Telos HELLO 1 para integração de chamadas via SIP em programas de rádio.', 'TELOS', DEFAULT_SPECS],
  ['hello-2-t', 'HELLO 2 - Híbrida Telos', 'Híbrida telefônica IP Telos HELLO 2 com dupla linha SIP para programas de rádio.', 'TELOS', DEFAULT_SPECS],
  ['hello-3-t', 'HELLO 3 - Híbrida Telos', 'Híbrida telefônica IP Telos HELLO 3 com múltiplas linhas SIP para programas de rádio.', 'TELOS', DEFAULT_SPECS],
  ['hello-nano-t', 'HELLO NANO - Híbrida Telos', 'Híbrida telefônica IP Telos HELLO NANO compacta da linha modular para integração de chamadas em programas de rádio.', 'TELOS', DEFAULT_SPECS],
];

// LINHA MODULAR (6)
const LINHA_MODULAR: ProductDefWithSpecs[] = [
  ['alo-nano-lm', 'ALO NANO - Módulo Modular', 'Híbrida telefônica compacta da linha modular ALO NANO para estúdios com espaço reduzido.', undefined, DEFAULT_SPECS],
  ['hello-nano-lm', 'HELLO NANO - Módulo Modular', 'Híbrida telefônica IP compacta da linha modular HELLO NANO para integração de chamadas via SIP.', 'TELOS', DEFAULT_SPECS],
  ['hello-1-lm', 'HELLO 1 - Módulo Modular', 'Híbrida telefônica IP da linha modular HELLO 1 para programas de rádio.', 'TELOS', DEFAULT_SPECS],
  ['hello-2-lm', 'HELLO 2 - Módulo Modular', 'Híbrida telefônica IP da linha modular HELLO 2 com dupla linha SIP.', 'TELOS', DEFAULT_SPECS],
  ['hello-3-lm', 'HELLO 3 - Módulo Modular', 'Híbrida telefônica IP da linha modular HELLO 3 com múltiplas linhas SIP.', 'TELOS', DEFAULT_SPECS],
  ['alo-3-lm', 'ALO 3 - Módulo Modular', 'Interface telefônica analógica de 3 linhas da linha modular para estúdios de rádio.', undefined, DEFAULT_SPECS],
];

// AVISO LUMINOSO (2)
const AVISO_LUMINOSO: ProductDefWithSpecs[] = [
  ['aviso-no-ar', 'Aviso Luminoso NO AR', 'Aviso luminoso "NO AR" para sinalização de estúdio em operação. Construção robusta com LED de alta visibilidade para sinalização profissional de broadcast.', undefined, [
    { label: 'Sinalização', value: 'NO AR (On Air)' },
    { label: 'LED', value: 'Alta visibilidade' },
    { label: 'Alimentação', value: 'DC / AC' },
    { label: 'Montagem', value: 'Parede / Mesa / Teto' },
    { label: 'Material', value: 'Metal / Acrílico' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
  ['aviso-gravando', 'Aviso Luminoso GRAVANDO', 'Aviso luminoso "GRAVANDO" para sinalização de estúdio em gravação. Construção robusta com LED de alta visibilidade.', undefined, [
    { label: 'Sinalização', value: 'GRAVANDO' },
    { label: 'LED', value: 'Alta visibilidade' },
    { label: 'Alimentação', value: 'DC / AC' },
    { label: 'Montagem', value: 'Parede / Mesa / Teto' },
    { label: 'Material', value: 'Metal / Acrílico' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
];

// ACESSÓRIOS (2)
const ACESSORIOS: ProductDefWithSpecs[] = [
  ['top-arm-acc', 'TOP ARM - Suporte de Microfone', 'Suporte para microfone TOP ARM com LED ON-AIR integrado para estúdios profissionais.', undefined, DEFAULT_SPECS],
  ['nano-arm-acc', 'NANO ARM - Suporte de Microfone', 'Suporte para microfone NANO ARM compacto para estúdios com espaço reduzido.', undefined, DEFAULT_SPECS],
];

// SOLUÇÕES DE VÍDEO (14)
const SOLUCOES_VIDEO: ProductDefWithSpecs[] = [
  ['kt-hd91an', 'Câmera PTZ KT-HD91AN-BQ Full HD', 'Câmera PTZ KT-HD91AN-BQ Full HD 1080p60 com zoom óptico 20x, rastreamento por IA, Auto Framing, NDI HX2, PoE e saídas HDMI, SDI, USB e IP.', undefined, [
    { label: 'Resolução', value: 'Full HD 1080p60' },
    { label: 'Zoom', value: '20x óptico' },
    { label: 'IA', value: 'Rastreamento + Auto Framing' },
    { label: 'NDI', value: 'HX2' },
    { label: 'Saídas', value: 'HDMI, SDI, USB, IP' },
    { label: 'Alimentação', value: 'PoE / DC' },
  ]],
  ['kt-a40', 'Câmera USB 4K KT-A40-BQ', 'Câmera USB 4K KT-A40-BQ para videoconferência e streaming com alta qualidade de imagem.', undefined, DEFAULT_SPECS],
  ['kt-hd86a', 'Câmera PTZ KT-HD86A', 'Câmera PTZ KT-HD86A para produção de vídeo profissional com zoom óptico e múltiplas saídas.', undefined, DEFAULT_SPECS],
  ['kt-kd52n', 'Câmera 4K KT-KD52N-BQ', 'Câmera 4K KT-KD52N-BQ com controladora PTZ integrada e NDI HX para produção de vídeo profissional.', undefined, DEFAULT_SPECS],
  ['kt-s10dh', 'Câmera PTZ KT-S10DH', 'Câmera PTZ KT-S10DH para produção de vídeo profissional com zoom óptico 10x.', undefined, DEFAULT_SPECS],
  ['kt-s10ms', 'Câmera PTZ KT-S10MS Full HD', 'Câmera PTZ KT-S10MS Full HD 1080p60 com zoom óptico 10x e foco TOF para produção de vídeo profissional.', undefined, DEFAULT_SPECS],
  ['kt-uh40mf', 'Câmera PTZ KT-UH40MF', 'Câmera PTZ KT-UH40MF para produção de vídeo profissional com alta definição.', undefined, DEFAULT_SPECS],
  ['kt-uh4500', 'Câmera 4K KT-UH4500-20-BQ', 'Câmera 4K KT-UH4500-20-BQ com IA Free-D e zoom óptico 20x para produção de vídeo profissional.', undefined, DEFAULT_SPECS],
  ['kt-uh7000', 'Câmera 4K KT-UH7000-25N-BQ', 'Câmera 4K KT-UH7000-25N-BQ com timecode, NDI HX3 e Free-D para produção de vídeo profissional.', undefined, DEFAULT_SPECS],
  ['kt-uh71dtn', 'Câmera PTZ KT-UH71DTN', 'Câmera PTZ KT-UH71DTN para produção de vídeo profissional com alta definição.', undefined, DEFAULT_SPECS],
  ['kt-uh71ktn', 'Câmera PTZ KT-UH71KTN', 'Câmera PTZ KT-UH71KTN para produção de vídeo profissional com alta definição.', undefined, DEFAULT_SPECS],
  ['kt-uh86dhsn', 'Câmera 4K UHD KT-UH86DHSN-BQ', 'Câmera 4K UHD KT-UH86DHSN-BQ com zoom óptico 20x para produção de vídeo profissional.', undefined, DEFAULT_SPECS],
  ['kc10n', 'Controlador PTZ KC10N-BQ', 'Controlador PTZ KC10N-BQ com joystick 4D, monitor preview 4K integrado, suporte NDI HX3, ONVIF e controle de até 1000 câmeras IP.', undefined, [
    { label: 'Joystick', value: '4D' },
    { label: 'Preview', value: 'Monitor 4K integrado' },
    { label: 'NDI', value: 'HX3' },
    { label: 'Protocolos', value: 'VISCA, ONVIF, NDI' },
    { label: 'Capacidade', value: 'Até 1000 câmeras' },
    { label: 'Alimentação', value: 'PoE / DC' },
  ]],
  ['kc20-pro', 'Controlador PTZ KC20 Pro', 'Controlador PTZ KC20 Pro com joystick 4D, preview em tempo real via HDMI, suporte a PoE, protocolos VISCA, ONVIF e NDI HX2 opcional.', undefined, [
    { label: 'Joystick', value: '4D' },
    { label: 'Preview', value: 'HDMI em tempo real' },
    { label: 'Protocolos', value: 'VISCA, ONVIF, NDI HX2' },
    { label: 'Alimentação', value: 'PoE' },
    { label: 'Conexões', value: 'HDMI, RJ45, RS-422' },
    { label: 'Garantia', value: 'Consultar condições' },
  ]],
];

// MICROFONES (5)
const MICROFONES: ProductDefWithSpecs[] = [
  ['mic-01', 'Microfone Profissional 01', 'Microfone profissional de alta qualidade para estúdio de rádio e locução.', undefined, DEFAULT_SPECS],
  ['mic-02', 'Microfone Profissional 02', 'Microfone profissional para estúdio de rádio com resposta de frequência extendida.', undefined, DEFAULT_SPECS],
  ['mic-03', 'Microfone Profissional 03', 'Microfone profissional dinâmico para locução em estúdios de rádio.', undefined, DEFAULT_SPECS],
  ['mic-04', 'Microfone Profissional 04', 'Microfone profissional condensador para estúdio de rádio e broadcast.', undefined, DEFAULT_SPECS],
  ['mic-05', 'Microfone Profissional 05', 'Microfone profissional para estúdio de rádio com padrão cardióide.', undefined, DEFAULT_SPECS],
];

// MARCAS - BIQUAD (6)
const BIQUAD_PROD: ProductDefWithSpecs[] = [
  ['apg-02-bq', 'APG 02 - Processador Biquad', 'Processador de áudio FM analógico 3 bandas com gerador estéreo e clipper MPX. Tecnologia Plug & Play.', 'BIQUAD', DEFAULT_SPECS],
  ['dap4-fm-bq', 'DAP4 FM - Processador Biquad', 'Processador de áudio digital FM com processamento multibanda avançado.', 'BIQUAD', DEFAULT_SPECS],
  ['dap4-am-bq', 'DAP4 AM - Processador Biquad', 'Processador de áudio digital AM otimizado para emissoras de rádio AM.', 'BIQUAD', DEFAULT_SPECS],
  ['dap4-tv-bq', 'DAP4 TV - Processador Biquad', 'Processador de áudio digital TV para emissoras de televisão.', 'BIQUAD', DEFAULT_SPECS],
  ['punch-full-bq', 'PUNCH FULL - Processador Biquad', 'Processador de áudio multibanda completo para emissoras de rádio FM.', 'BIQUAD', DEFAULT_SPECS],
  ['punch-s-bq', 'PUNCH S - Processador Biquad', 'Processador de microfone com controle de dinâmica e equalização.', 'BIQUAD', DEFAULT_SPECS],
];

// MARCAS - SHURE (3)
const SHURE_PROD: ProductDefWithSpecs[] = [
  ['shure-01', 'Shure SM7B', 'Microfone dinâmico profissional Shure SM7B para locução em estúdios de rádio e broadcast.', 'SHURE', DEFAULT_SPECS],
  ['shure-02', 'Shure SM58', 'Microfone dinâmico profissional Shure SM58 para uso em estúdio e ao vivo.', 'SHURE', DEFAULT_SPECS],
  ['shure-03', 'Shure BETA 58A', 'Microfone dinâmico profissional Shure BETA 58A para vocais em estúdio e ao vivo.', 'SHURE', DEFAULT_SPECS],
];

// MARCAS - SOLIDYNE (4)
const SOLIDYNE_PROD: ProductDefWithSpecs[] = [
  ['solidyne-mx2200', 'Codec IP Solidyne MX2200', 'Codec IP portátil com mixer integrado para transmissões externas.', 'SOLIDYNE', DEFAULT_SPECS],
  ['solidyne-02', 'Solidyne 2300', 'Processador de áudio Solidyne 2300 para emissoras de rádio FM.', 'SOLIDYNE', DEFAULT_SPECS],
  ['solidyne-03', 'Solidyne 7000B', 'Console de mixagem Solidyne 7000B para estúdios de rádio.', 'SOLIDYNE', DEFAULT_SPECS],
  ['solidyne-04', 'Solidyne NexGen', 'Sistema de automação Solidyne NexGen para rádio.', 'SOLIDYNE', DEFAULT_SPECS],
];

// MARCAS - SONY (1)
const SONY_PROD: ProductDefWithSpecs[] = [
  ['sony-mdr7506', 'Sony MDR-7506', 'Fone de ouvido profissional Sony MDR-7506 de referência para monitoração em estúdios.', 'SONY', DEFAULT_SPECS],
];

// DESCONTINUADOS (5)
const DESCONTINUADOS: ProductDefWithSpecs[] = [
  ['kt-kd10', 'KT-KD10 Controlador PTZ', 'Switcher de vídeo ao vivo com 4 entradas HDMI, tela LCD FHD 5", controle PTZ, transmissão RTMP/RTMPS, gravação em MP4 e efeitos de transição.', undefined, DEFAULT_SPECS],
  ['swvm4', 'SWVM4 Switcher de Vídeo', 'Switcher de vídeo Full HD 1080p para live streaming com 4 entradas HDMI.', undefined, DEFAULT_SPECS],
  ['alo-1-disc', 'Híbrida Telefônica ALO 1', 'Híbrida telefônica analógica ALO 1 descontinuada - sujeita a disponibilidade de estoque.', undefined, DEFAULT_SPECS],
  ['alo-2-disc', 'Híbrida Telefônica ALO 2', 'Híbrida telefônica analógica ALO 2 descontinuada - sujeita a disponibilidade de estoque.', undefined, DEFAULT_SPECS],
  ['kt-kd51', 'Controlador PTZ KT-KD51', 'Controlador PTZ KT-KD51 descontinuado - sujeito a disponibilidade de estoque.', undefined, DEFAULT_SPECS],
];

// --------------------------------------------------------------------
//  Mapa de subcategorias para produtos
// --------------------------------------------------------------------

const SUBCAT_MAP: Record<string, ProductDefWithSpecs[]> = {
  'encoder-rds': ENCODER_RDS,
  'hibridas-telefone': HIBRIDAS_TELEFONE,
  'consoles': CONSOLES,
  'mixers': MIXERS,
  'fones': FONES,
  'monitores': MONITORES,
  'processador-microfone': PROCESSADOR_MICROFONE,
  'processadores-audio': PROCESSADORES_AUDIO,
  'suportes-microfones': SUPORTES_MICROFONES,
  'transmissores-rf': TRANSMISSORES_RF,
  'links-stl': LINKS_STL,
  'receptores': RECEPTORES,
  'distribuidores': DISTRIBUIDORES,
  'interface-aoip': INTERFACE_AOIP,
  'solucoes-dante': SOLUCOES_DANTE,
  'axia-telos': AXIA_TELOS,
  'codec': CODEC,
  'telos': TELOS,
  'linha-modular': LINHA_MODULAR,
  'aviso-luminoso': AVISO_LUMINOSO,
  'acessorios': ACESSORIOS,
  'solucoes-video': SOLUCOES_VIDEO,
  'microfones': MICROFONES,
  'biquad-prod': BIQUAD_PROD,
  'shure-prod': SHURE_PROD,
  'solidyne-prod': SOLIDYNE_PROD,
  'sony-prod': SONY_PROD,
  'descontinuados': DESCONTINUADOS,
};

// --------------------------------------------------------------------
//  Gerar produtos
// --------------------------------------------------------------------

export function generateRealProducts(
  subcategories: { id: string; categoryId: string }[]
): Product[] {
  const products: Product[] = [];

  for (const sub of subcategories) {
    const defs = SUBCAT_MAP[sub.id];
    if (!defs) continue;

    const isDiscontinued = sub.categoryId === 'descontinuados';

    for (let i = 0; i < defs.length; i++) {
      const [slug, name, description, brand, specs] = defs[i];
      const id = `${sub.id}-${pad(i + 1)}`;
      products.push({
        id,
        name,
        subcategoryId: sub.id,
        categoryId: sub.categoryId,
        brand,
        description,
        features: DEFAULT_FEATURES,
        applications: DEFAULT_APPLICATIONS,
        specs: specs || DEFAULT_SPECS,
        discontinued: isDiscontinued || undefined,
        slug,
      } as Product & { slug: string });
    }
  }

  return products;
}

// Slug to ID mapping for image lookup
export function buildSlugToIdMap(
  subcategories: { id: string }[]
): Record<string, string> {
  const map: Record<string, string> = {};
  for (const sub of subcategories) {
    const defs = SUBCAT_MAP[sub.id];
    if (!defs) continue;
    for (let i = 0; i < defs.length; i++) {
      const slug = defs[i][0];
      const id = `${sub.id}-${pad(i + 1)}`;
      map[slug] = id;
    }
  }
  return map;
}
