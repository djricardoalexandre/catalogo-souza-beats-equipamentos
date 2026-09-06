// Placeholder SVG generator for product images.
// Generates professional-looking broadcast equipment silhouettes.
// Each product gets a unique-looking placeholder based on its type and index.

type EquipType =
  | 'console' | 'mixer' | 'microphone' | 'headphone' | 'monitor'
  | 'processor' | 'transmitter' | 'stl' | 'receiver' | 'splitter'
  | 'network' | 'rack' | 'codec' | 'rds' | 'hybrid' | 'modular'
  | 'onair' | 'accessory' | 'video' | 'stand' | 'generic';

const TYPE_MAP: Record<string, EquipType> = {
  consoles: 'console',
  mixers: 'mixer',
  microfones: 'microphone',
  fones: 'headphone',
  monitores: 'monitor',
  'processador-microfone': 'processor',
  'processadores-audio': 'processor',
  'suportes-microfones': 'stand',
  'transmissores-rf': 'transmitter',
  'links-stl': 'stl',
  receptores: 'receiver',
  distribuidores: 'splitter',
  'interface-aoip': 'network',
  'solucoes-dante': 'network',
  'axia-telos': 'rack',
  codec: 'codec',
  telos: 'rack',
  'encoder-rds': 'rds',
  'hibridas-telefone': 'hybrid',
  'linha-modular': 'modular',
  'aviso-luminoso': 'onair',
  acessorios: 'accessory',
  'solucoes-video': 'video',
  biquad: 'processor',
  shure: 'microphone',
  solidyne: 'processor',
  sony: 'video',
  descontinuados: 'generic',
};

// Color palettes for visual variety
const PALETTES = [
  { bg1: '#0f172a', bg2: '#1e293b', accent: '#3b82f6' },
  { bg1: '#0c1929', bg2: '#1a2a3e', accent: '#06b6d4' },
  { bg1: '#111827', bg2: '#1f2937', accent: '#2563eb' },
  { bg1: '#0a1628', bg2: '#162032', accent: '#0891b2' },
  { bg1: '#0d1117', bg2: '#161b22', accent: '#1d4ed8' },
  { bg1: '#0f172a', bg2: '#1e293b', accent: '#22d3ee' },
  { bg1: '#0b1120', bg2: '#1a2740', accent: '#3b82f6' },
  { bg1: '#0c1424', bg2: '#1a2b40', accent: '#06b6d4' },
];

function getEquipType(subcategoryId: string): EquipType {
  return TYPE_MAP[subcategoryId] || 'generic';
}

function drawEquipment(type: EquipType, accent: string): string {
  const c = accent;
  switch (type) {
    case 'console':
      return `
        <rect x="30" y="120" width="540" height="180" rx="6" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <rect x="30" y="120" width="540" height="30" rx="6" fill="#0f1a2a" opacity="0.8"/>
        <circle cx="55" cy="135" r="5" fill="${c}" opacity="0.8"/>
        <text x="70" y="139" font-size="9" fill="${c}" opacity="0.6" font-family="sans-serif">POWER</text>
        ${Array.from({ length: 8 }, (_, i) => `
          <rect x="${60 + i * 60}" y="165" width="40" height="120" rx="3" fill="#0a1420" opacity="0.7"/>
          <rect x="${70 + i * 60}" y="175" width="20" height="6" rx="1" fill="${c}" opacity="0.7"/>
          <rect x="${70 + i * 60}" y="190" width="20" height="6" rx="1" fill="${c}" opacity="0.5"/>
          <rect x="${75 + i * 60}" y="210" width="10" height="60" rx="1" fill="#162030"/>
          <rect x="${77 + i * 60}" y="225" width="6" height="8" rx="1" fill="${c}" opacity="0.8"/>
        `).join('')}
      `;
    case 'mixer':
      return `
        <rect x="50" y="140" width="500" height="140" rx="8" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <rect x="50" y="140" width="500" height="25" rx="8" fill="#0f1a2a" opacity="0.8"/>
        ${Array.from({ length: 6 }, (_, i) => `
          <circle cx="${100 + i * 70}" cy="220" r="18" fill="#0a1420" stroke="${c}" stroke-width="1" opacity="0.7"/>
          <circle cx="${100 + i * 70}" cy="220" r="6" fill="${c}" opacity="0.6"/>
          <line x1="${100 + i * 70}" y1="200" x2="${100 + i * 70}" y2="240" stroke="${c}" stroke-width="1" opacity="0.4"/>
        `).join('')}
        ${Array.from({ length: 5 }, (_, i) => `
          <rect x="${85 + i * 70}" y="265" width="30" height="4" rx="1" fill="${c}" opacity="0.5"/>
        `).join('')}
      `;
    case 'microphone':
      return `
        <rect x="265" y="90" width="70" height="120" rx="35" fill="#1a2a3e" stroke="${c}" stroke-width="2" opacity="0.9"/>
        <rect x="275" y="100" width="50" height="80" rx="25" fill="#0a1420" opacity="0.7"/>
        ${Array.from({ length: 4 }, (_, i) => `
          <line x1="275" y1="${110 + i * 18}" x2="325" y2="${110 + i * 18}" stroke="${c}" stroke-width="1" opacity="0.4"/>
        `).join('')}
        <rect x="290" y="210" width="20" height="50" rx="3" fill="#1a2a3e" opacity="0.9"/>
        <rect x="270" y="260" width="60" height="8" rx="4" fill="#1a2a3e" opacity="0.9"/>
        <rect x="280" y="268" width="40" height="40" rx="2" fill="#1a2a3e" opacity="0.8"/>
      `;
    case 'headphone':
      return `
        <path d="M 200 130 Q 300 60 400 130" fill="none" stroke="#1a2a3e" stroke-width="8" opacity="0.9"/>
        <path d="M 200 130 Q 300 60 400 130" fill="none" stroke="${c}" stroke-width="2" opacity="0.5"/>
        <ellipse cx="210" cy="170" rx="40" ry="50" rx="35" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <ellipse cx="390" cy="170" rx="40" ry="50" rx="35" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <ellipse cx="210" cy="170" rx="28" ry="38" fill="#0a1420" opacity="0.7"/>
        <ellipse cx="390" cy="170" rx="28" ry="38" fill="#0a1420" opacity="0.7"/>
        <circle cx="210" cy="170" r="8" fill="${c}" opacity="0.5"/>
        <circle cx="390" cy="170" r="8" fill="${c}" opacity="0.5"/>
      `;
    case 'monitor':
      return `
        <rect x="180" y="100" width="240" height="180" rx="6" fill="#1a2a3e" stroke="${c}" stroke-width="2" opacity="0.9"/>
        <rect x="190" y="110" width="220" height="140" rx="3" fill="#050a14" opacity="0.8"/>
        <circle cx="260" cy="180" r="35" fill="none" stroke="${c}" stroke-width="2" opacity="0.6"/>
        <circle cx="260" cy="180" r="20" fill="none" stroke="${c}" stroke-width="1" opacity="0.4"/>
        <circle cx="340" cy="180" r="35" fill="none" stroke="${c}" stroke-width="2" opacity="0.6"/>
        <circle cx="340" cy="180" r="20" fill="none" stroke="${c}" stroke-width="1" opacity="0.4"/>
        <rect x="270" y="265" width="60" height="15" rx="2" fill="#1a2a3e" opacity="0.9"/>
        <rect x="250" y="280" width="100" height="6" rx="3" fill="#1a2a3e" opacity="0.9"/>
      `;
    case 'processor':
      return `
        <rect x="80" y="100" width="440" height="180" rx="4" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <rect x="80" y="100" width="440" height="25" rx="4" fill="#0f1a2a" opacity="0.8"/>
        <text x="100" y="117" font-size="10" fill="${c}" opacity="0.6" font-family="sans-serif">PROCESSOR</text>
        ${Array.from({ length: 6 }, (_, i) => `
          <circle cx="${130 + i * 65}" cy="160" r="15" fill="#0a1420" stroke="${c}" stroke-width="1" opacity="0.7"/>
          <line x1="${130 + i * 65}" y1="148" x2="${130 + i * 65}" y2="172" stroke="${c}" stroke-width="1.5" opacity="0.8"/>
        `).join('')}
        <rect x="110" y="195" width="380" height="60" rx="3" fill="#050a14" opacity="0.7"/>
        ${Array.from({ length: 12 }, (_, i) => `
          <rect x="${120 + i * 30}" y="205" width="4" height="${20 + (i % 4) * 10}" rx="1" fill="${c}" opacity="${0.4 + (i % 3) * 0.2}"/>
        `).join('')}
      `;
    case 'transmitter':
      return `
        <rect x="200" y="80" width="200" height="240" rx="4" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <rect x="200" y="80" width="200" height="25" rx="4" fill="#0f1a2a" opacity="0.8"/>
        <text x="220" y="97" font-size="10" fill="${c}" opacity="0.6" font-family="sans-serif">TRANSMITTER</text>
        <rect x="220" y="120" width="160" height="50" rx="3" fill="#050a14" opacity="0.8"/>
        <text x="240" y="150" font-size="24" fill="${c}" opacity="0.7" font-family="sans-serif" font-weight="bold">FM</text>
        ${Array.from({ length: 4 }, (_, i) => `
          <circle cx="${240 + i * 35}" cy="200" r="8" fill="#0a1420" stroke="${c}" stroke-width="1" opacity="0.7"/>
        `).join('')}
        <rect x="220" y="220" width="160" height="80" rx="3" fill="#0a1420" opacity="0.6"/>
        ${Array.from({ length: 6 }, (_, i) => `
          <rect x="${230 + (i % 3) * 50}" y="${230 + Math.floor(i / 3) * 30}" width="40" height="20" rx="2" fill="${c}" opacity="0.3"/>
        `).join('')}
        <line x1="300" y1="80" x2="300" y2="40" stroke="${c}" stroke-width="2" opacity="0.6"/>
        <circle cx="300" cy="35" r="6" fill="${c}" opacity="0.5"/>
      `;
    case 'stl':
      return `
        <rect x="250" y="220" width="100" height="80" rx="4" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <ellipse cx="300" cy="160" rx="90" ry="40" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.8"/>
        <ellipse cx="300" cy="160" rx="70" ry="30" fill="#0a1420" opacity="0.7"/>
        <ellipse cx="300" cy="160" rx="50" ry="20" fill="none" stroke="${c}" stroke-width="1" opacity="0.4"/>
        <ellipse cx="300" cy="160" rx="30" ry="12" fill="none" stroke="${c}" stroke-width="1" opacity="0.4"/>
        <circle cx="300" cy="160" r="6" fill="${c}" opacity="0.6"/>
        <line x1="300" y1="200" x2="300" y2="220" stroke="#1a2a3e" stroke-width="4" opacity="0.9"/>
      `;
    case 'receiver':
      return `
        <rect x="120" y="130" width="360" height="120" rx="4" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <rect x="120" y="130" width="360" height="25" rx="4" fill="#0f1a2a" opacity="0.8"/>
        <text x="140" y="147" font-size="10" fill="${c}" opacity="0.6" font-family="sans-serif">RECEIVER</text>
        <rect x="140" y="170" width="180" height="60" rx="3" fill="#050a14" opacity="0.8"/>
        <text x="160" y="205" font-size="20" fill="${c}" opacity="0.7" font-family="sans-serif" font-weight="bold">98.5</text>
        ${Array.from({ length: 5 }, (_, i) => `
          <circle cx="${350 + i * 22}" cy="185" r="6" fill="#0a1420" stroke="${c}" stroke-width="1" opacity="0.6"/>
        `).join('')}
        ${Array.from({ length: 5 }, (_, i) => `
          <rect x="${350 + i * 22}" y="210" width="14" height="4" rx="1" fill="${c}" opacity="0.4"/>
        `).join('')}
      `;
    case 'splitter':
      return `
        <rect x="100" y="130" width="400" height="120" rx="4" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <rect x="100" y="130" width="400" height="25" rx="4" fill="#0f1a2a" opacity="0.8"/>
        <text x="120" y="147" font-size="10" fill="${c}" opacity="0.6" font-family="sans-serif">DISTRIBUTION</text>
        ${Array.from({ length: 8 }, (_, i) => `
          <rect x="${130 + i * 42}" y="175" width="28" height="50" rx="2" fill="#0a1420" stroke="${c}" stroke-width="0.5" opacity="0.6"/>
          <circle cx="${144 + i * 42}" cy="190" r="5" fill="${c}" opacity="${0.3 + (i % 3) * 0.2}"/>
          <rect x="${134 + i * 42}" y="205" width="20" height="3" rx="1" fill="${c}" opacity="0.3"/>
        `).join('')}
      `;
    case 'network':
      return `
        <rect x="80" y="110" width="440" height="160" rx="4" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <rect x="80" y="110" width="440" height="25" rx="4" fill="#0f1a2a" opacity="0.8"/>
        <text x="100" y="127" font-size="10" fill="${c}" opacity="0.6" font-family="sans-serif">AoIP NETWORK</text>
        ${Array.from({ length: 8 }, (_, i) => `
          <rect x="${110 + i * 50}" y="155" width="35" height="20" rx="2" fill="#0a1420" stroke="${c}" stroke-width="0.5" opacity="0.6"/>
        `).join('')}
        ${Array.from({ length: 8 }, (_, i) => `
          <rect x="${110 + i * 50}" y="190" width="35" height="20" rx="2" fill="#0a1420" stroke="${c}" stroke-width="0.5" opacity="0.6"/>
        `).join('')}
        <circle cx="490" cy="240" r="5" fill="${c}" opacity="0.7"/>
        <circle cx="470" cy="240" r="5" fill="${c}" opacity="0.4"/>
      `;
    case 'rack':
      return `
        <rect x="100" y="100" width="400" height="180" rx="4" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <rect x="100" y="100" width="400" height="25" rx="4" fill="#0f1a2a" opacity="0.8"/>
        <text x="120" y="117" font-size="10" fill="${c}" opacity="0.6" font-family="sans-serif">RACK UNIT</text>
        <rect x="120" y="140" width="360" height="50" rx="3" fill="#050a14" opacity="0.7"/>
        <rect x="130" y="150" width="200" height="30" rx="2" fill="#0a1420" opacity="0.6"/>
        <text x="145" y="170" font-size="12" fill="${c}" opacity="0.5" font-family="sans-serif">STATUS: ACTIVE</text>
        ${Array.from({ length: 6 }, (_, i) => `
          <circle cx="${340 + i * 22}" cy="165" r="6" fill="#0a1420" stroke="${c}" stroke-width="1" opacity="0.6"/>
        `).join('')}
        ${Array.from({ length: 4 }, (_, i) => `
          <rect x="${130 + i * 90}" y="205" width="70" height="50" rx="3" fill="#0a1420" stroke="${c}" stroke-width="0.5" opacity="0.5"/>
          <circle cx="${145 + i * 90}" cy="220" r="5" fill="${c}" opacity="${0.3 + (i % 2) * 0.3}"/>
          <rect x="${135 + i * 90}" y="235" width="50" height="3" rx="1" fill="${c}" opacity="0.3"/>
        `).join('')}
      `;
    case 'codec':
      return `
        <rect x="120" y="120" width="360" height="140" rx="4" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <rect x="120" y="120" width="360" height="25" rx="4" fill="#0f1a2a" opacity="0.8"/>
        <text x="140" y="137" font-size="10" fill="${c}" opacity="0.6" font-family="sans-serif">CODEC</text>
        <rect x="140" y="160" width="160" height="40" rx="3" fill="#050a14" opacity="0.7"/>
        <text x="160" y="185" font-size="14" fill="${c}" opacity="0.6" font-family="sans-serif">AAC+ MP3</text>
        ${Array.from({ length: 4 }, (_, i) => `
          <rect x="${320 + i * 35}" y="160" width="25" height="40" rx="2" fill="#0a1420" stroke="${c}" stroke-width="0.5" opacity="0.6"/>
        `).join('')}
        ${Array.from({ length: 6 }, (_, i) => `
          <circle cx="${150 + i * 55}" cy="230" r="8" fill="#0a1420" stroke="${c}" stroke-width="1" opacity="0.6"/>
        `).join('')}
      `;
    case 'rds':
      return `
        <rect x="150" y="130" width="300" height="120" rx="4" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <rect x="150" y="130" width="300" height="25" rx="4" fill="#0f1a2a" opacity="0.8"/>
        <text x="170" y="147" font-size="10" fill="${c}" opacity="0.6" font-family="sans-serif">RDS ENCODER</text>
        <rect x="170" y="170" width="260" height="40" rx="3" fill="#050a14" opacity="0.8"/>
        <text x="185" y="195" font-size="16" fill="${c}" opacity="0.7" font-family="sans-serif" font-weight="bold">SOUZA BEATS</text>
        ${Array.from({ length: 4 }, (_, i) => `
          <rect x="${180 + i * 60}" y="220" width="50" height="18" rx="2" fill="#0a1420" stroke="${c}" stroke-width="0.5" opacity="0.5"/>
        `).join('')}
      `;
    case 'hybrid':
      return `
        <rect x="100" y="110" width="400" height="160" rx="4" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <rect x="100" y="110" width="400" height="25" rx="4" fill="#0f1a2a" opacity="0.8"/>
        <text x="120" y="127" font-size="10" fill="${c}" opacity="0.6" font-family="sans-serif">TELEPHONE HYBRID</text>
        <rect x="130" y="150" width="140" height="100" rx="4" fill="#0a1420" opacity="0.7"/>
        <rect x="145" y="165" width="110" height="40" rx="2" fill="#050a14" opacity="0.8"/>
        <text x="165" y="190" font-size="14" fill="${c}" opacity="0.5" font-family="sans-serif">LINE 1</text>
        ${Array.from({ length: 9 }, (_, i) => `
          <circle cx="${155 + (i % 3) * 45}" cy="${215 + Math.floor(i / 3) * 18}" r="5" fill="#0a1420" stroke="${c}" stroke-width="0.5" opacity="0.6"/>
        `).join('')}
        ${Array.from({ length: 4 }, (_, i) => `
          <rect x="${300 + i * 40}" y="160" width="30" height="90" rx="2" fill="#0a1420" stroke="${c}" stroke-width="0.5" opacity="0.5"/>
          <circle cx="${315 + i * 40}" cy="175" r="4" fill="${c}" opacity="${0.3 + (i % 2) * 0.3}"/>
        `).join('')}
      `;
    case 'modular':
      return `
        <rect x="80" y="100" width="440" height="180" rx="4" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <rect x="80" y="100" width="440" height="25" rx="4" fill="#0f1a2a" opacity="0.8"/>
        <text x="100" y="117" font-size="10" fill="${c}" opacity="0.6" font-family="sans-serif">MODULAR SYSTEM</text>
        ${Array.from({ length: 10 }, (_, i) => `
          <rect x="${100 + i * 42}" y="140" width="35" height="120" rx="2" fill="#0a1420" stroke="${c}" stroke-width="0.5" opacity="0.6"/>
          <circle cx="${117 + i * 42}" cy="155" r="5" fill="${c}" opacity="${0.3 + (i % 3) * 0.2}"/>
          <rect x="${105 + i * 42}" y="170" width="25" height="3" rx="1" fill="${c}" opacity="0.4"/>
          <rect x="${105 + i * 42}" y="180" width="25" height="3" rx="1" fill="${c}" opacity="0.3"/>
          <rect x="${110 + i * 42}" y="200" width="15" height="40" rx="1" fill="${c}" opacity="0.3"/>
        `).join('')}
      `;
    case 'onair':
      return `
        <rect x="120" y="130" width="360" height="120" rx="8" fill="#0a0a0a" stroke="${c}" stroke-width="2" opacity="0.95"/>
        <rect x="120" y="130" width="360" height="120" rx="8" fill="none" stroke="${c}" stroke-width="1" opacity="0.4"/>
        <text x="300" y="205" font-size="48" fill="${c}" opacity="0.8" font-family="sans-serif" font-weight="bold" text-anchor="middle">ON AIR</text>
        <circle cx="150" cy="155" r="6" fill="${c}" opacity="0.7"/>
        <circle cx="450" cy="155" r="6" fill="${c}" opacity="0.7"/>
      `;
    case 'accessory':
      return `
        <rect x="180" y="120" width="240" height="160" rx="6" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <rect x="200" y="140" width="200" height="100" rx="4" fill="#0a1420" opacity="0.6"/>
        ${Array.from({ length: 6 }, (_, i) => `
          <circle cx="${220 + (i % 3) * 60}" cy="${160 + Math.floor(i / 3) * 50}" r="10" fill="#050a14" stroke="${c}" stroke-width="1" opacity="0.6"/>
        `).join('')}
        <rect x="240" y="250" width="120" height="6" rx="3" fill="${c}" opacity="0.4"/>
      `;
    case 'video':
      return `
        <rect x="120" y="100" width="360" height="200" rx="4" fill="#1a2a3e" stroke="${c}" stroke-width="2" opacity="0.9"/>
        <rect x="130" y="110" width="340" height="160" rx="2" fill="#050a14" opacity="0.8"/>
        <rect x="140" y="120" width="320" height="140" rx="2" fill="none" stroke="${c}" stroke-width="1" opacity="0.3"/>
        <text x="300" y="200" font-size="24" fill="${c}" opacity="0.5" font-family="sans-serif" font-weight="bold" text-anchor="middle">VIDEO</text>
        <rect x="260" y="275" width="80" height="15" rx="2" fill="#1a2a3e" opacity="0.9"/>
        <circle cx="300" cy="282" r="3" fill="${c}" opacity="0.6"/>
      `;
    case 'stand':
      return `
        <rect x="280" y="250" width="40" height="10" rx="2" fill="#1a2a3e" opacity="0.9"/>
        <rect x="295" y="100" width="10" height="150" fill="#1a2a3e" opacity="0.8"/>
        <rect x="270" y="220" width="60" height="30" rx="4" fill="#1a2a3e" stroke="${c}" stroke-width="1" opacity="0.8"/>
        <circle cx="300" cy="90" r="12" fill="#0a1420" stroke="${c}" stroke-width="1.5" opacity="0.7"/>
        <line x1="290" y1="85" x2="310" y2="95" stroke="${c}" stroke-width="1" opacity="0.4"/>
        <line x1="290" y1="95" x2="310" y2="85" stroke="${c}" stroke-width="1" opacity="0.4"/>
      `;
    case 'generic':
    default:
      return `
        <rect x="120" y="120" width="360" height="140" rx="6" fill="#1a2a3e" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
        <rect x="120" y="120" width="360" height="25" rx="6" fill="#0f1a2a" opacity="0.8"/>
        <rect x="140" y="160" width="320" height="80" rx="3" fill="#0a1420" opacity="0.6"/>
        ${Array.from({ length: 4 }, (_, i) => `
          <circle cx="${170 + i * 80}" cy="200" r="12" fill="#050a14" stroke="${c}" stroke-width="1" opacity="0.5"/>
        `).join('')}
        <text x="300" y="260" font-size="9" fill="${c}" opacity="0.4" font-family="sans-serif" text-anchor="middle">DISCONTINUED</text>
      `;
  }
}

export function generatePlaceholder(subcategoryId: string, index: number, label: string): string {
  const type = getEquipType(subcategoryId);
  const palette = PALETTES[index % PALETTES.length];
  const equipSvg = drawEquipment(type, palette.accent);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="360" viewBox="0 0 600 360">
    <defs>
      <linearGradient id="bg${index}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${palette.bg1}"/>
        <stop offset="100%" stop-color="${palette.bg2}"/>
      </linearGradient>
      <linearGradient id="overlay${index}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${palette.accent}" stop-opacity="0.06"/>
        <stop offset="100%" stop-color="${palette.accent}" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="600" height="360" fill="url(#bg${index})"/>
    <rect width="600" height="360" fill="url(#overlay${index})"/>
    ${equipSvg}
    <rect x="0" y="320" width="600" height="40" fill="#050a14" opacity="0.6"/>
    <text x="30" y="345" font-size="14" fill="${palette.accent}" opacity="0.7" font-family="sans-serif" font-weight="600">${label}</text>
    <text x="570" y="345" font-size="10" fill="${palette.accent}" opacity="0.4" font-family="sans-serif" text-anchor="end">SOUZA BEATS</text>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
