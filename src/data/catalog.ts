// ====================================================================
//  SOUZA BEATS EQUIPAMENTOS — Catálogo de Produtos
// ====================================================================
//  Para substituir as IMAGENS dos produtos por fotos oficiais,
//  edite o arquivo:  src/data/images.ts
//  Cada produto possui um ID único (ex: "consoles-01") que corresponde
//  a uma entrada no arquivo de imagens.
// --------------------------------------------------------------------

export interface Category {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
  productCount: number;
}

export interface Brand {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  subcategoryId: string;
  categoryId: string;
  brand?: string;
  description: string;
  features: string[];
  applications: string[];
  specs: ProductSpec[];
  discontinued?: boolean;
  slug?: string;
}

// --------------------------------------------------------------------
//  CATEGORIAS PRINCIPAIS
// --------------------------------------------------------------------

export const CATEGORIES: Category[] = [
  {
    id: 'audio-estudio',
    name: 'Áudio e Estúdio',
    description: 'Consoles, mixers, microfones, fones, monitores e processadores para estúdios de rádio.',
    iconName: 'SlidersHorizontal',
  },
  {
    id: 'transmissao-rf',
    name: 'Transmissão e RF',
    description: 'Transmissores, amplificadores, links STL e receptores para radiodifusão.',
    iconName: 'Radio',
  },
  {
    id: 'audio-ip',
    name: 'Áudio sobre IP',
    description: 'AoIP, Dante, Axia, Telos e codecs para áudio em rede.',
    iconName: 'Network',
  },
  {
    id: 'radio-sistemas',
    name: 'Rádio e Sistemas',
    description: 'RDS, híbridas telefônicas, linha modular, avisos luminosos e acessórios.',
    iconName: 'PhoneCall',
  },
  {
    id: 'video',
    name: 'Vídeo',
    description: 'Soluções profissionais de vídeo para broadcast.',
    iconName: 'Video',
  },
];

// --------------------------------------------------------------------
//  SUBCATEGORIAS (tipos de equipamento)
//  productCount = quantidade exata de produtos conforme especificação
// --------------------------------------------------------------------

export const SUBCATEGORIES: Subcategory[] = [
  // Áudio e Estúdio
  { id: 'consoles', name: 'Consoles', categoryId: 'audio-estudio', productCount: 8 },
  { id: 'mixers', name: 'Mixers', categoryId: 'audio-estudio', productCount: 3 },
  { id: 'microfones', name: 'Microfones', categoryId: 'audio-estudio', productCount: 5 },
  { id: 'fones', name: 'Fones', categoryId: 'audio-estudio', productCount: 4 },
  { id: 'monitores', name: 'Monitores de Áudio', categoryId: 'audio-estudio', productCount: 4 },
  { id: 'processador-microfone', name: 'Processador de Microfone', categoryId: 'audio-estudio', productCount: 3 },
  { id: 'processadores-audio', name: 'Processadores de Áudio', categoryId: 'audio-estudio', productCount: 10 },
  { id: 'suportes-microfones', name: 'Suportes de Microfones', categoryId: 'audio-estudio', productCount: 3 },
  // Transmissão e RF
  { id: 'transmissores-rf', name: 'Transmissores e Amplificadores de RF', categoryId: 'transmissao-rf', productCount: 2 },
  { id: 'links-stl', name: 'Links de Transmissão STL', categoryId: 'transmissao-rf', productCount: 1 },
  { id: 'receptores', name: 'Receptores de Rádio', categoryId: 'transmissao-rf', productCount: 2 },
  { id: 'distribuidores', name: 'Distribuidores de Sinais', categoryId: 'transmissao-rf', productCount: 4 },
  // Áudio sobre IP
  { id: 'interface-aoip', name: 'Interface AoIP', categoryId: 'audio-ip', productCount: 5 },
  { id: 'solucoes-dante', name: 'Soluções Dante', categoryId: 'audio-ip', productCount: 13 },
  { id: 'axia-telos', name: 'Axia Telos', categoryId: 'audio-ip', productCount: 4 },
  { id: 'codec', name: 'Codec', categoryId: 'audio-ip', productCount: 3 },
  { id: 'telos', name: 'Telos', categoryId: 'audio-ip', productCount: 4 },
  // Rádio e Sistemas
  { id: 'encoder-rds', name: 'Encoder RDS', categoryId: 'radio-sistemas', productCount: 3 },
  { id: 'hibridas-telefone', name: 'Híbridas Telefônicas', categoryId: 'radio-sistemas', productCount: 5 },
  { id: 'linha-modular', name: 'Linha Modular', categoryId: 'radio-sistemas', productCount: 6 },
  { id: 'aviso-luminoso', name: 'Aviso Luminoso', categoryId: 'radio-sistemas', productCount: 2 },
  { id: 'acessorios', name: 'Acessórios', categoryId: 'radio-sistemas', productCount: 2 },
  // Vídeo
  { id: 'solucoes-video', name: 'Soluções de Vídeo', categoryId: 'video', productCount: 14 },
];

// --------------------------------------------------------------------
//  MARCAS / TECNOLOGIAS
// --------------------------------------------------------------------

export const BRANDS: Brand[] = [
  { id: 'biquad', name: 'BIQUAD', description: 'Processadores de áudio e tecnologia de radiodifusão.', iconName: 'Cpu' },
  { id: 'axia', name: 'AXIA', description: 'Líder em tecnologia AoIP para estúdios de rádio.', iconName: 'Network' },
  { id: 'telos', name: 'TELOS', description: 'Híbridas telefônicas e soluções de codec para broadcast.', iconName: 'PhoneCall' },
  { id: 'shure', name: 'SHURE', description: 'Microfones profissionais de alta qualidade para estúdio.', iconName: 'Mic' },
  { id: 'solidyne', name: 'SOLIDYNE', description: 'Processadores de áudio e consoles para radiodifusão.', iconName: 'SlidersHorizontal' },
  { id: 'sony', name: 'SONY', description: 'Equipamentos profissionais de vídeo e áudio para broadcast.', iconName: 'Video' },
];

// --------------------------------------------------------------------
//  Categorias de marca (produtos exibidos na seção MARCAS)
// --------------------------------------------------------------------

export const BRAND_SUBCATEGORIES: Subcategory[] = [
  { id: 'biquad-prod', name: 'Biquad Processador', categoryId: 'marcas', productCount: 6 },
  { id: 'shure-prod', name: 'Shure', categoryId: 'marcas', productCount: 3 },
  { id: 'solidyne-prod', name: 'Solidyne', categoryId: 'marcas', productCount: 4 },
  { id: 'sony-prod', name: 'Sony', categoryId: 'marcas', productCount: 1 },
];

// --------------------------------------------------------------------
//  Descontinuados (seção separada, sem destaque comercial)
// --------------------------------------------------------------------

export const DISCONTINUED_SUBCATEGORY: Subcategory = {
  id: 'descontinuados',
  name: 'Descontinuados',
  categoryId: 'descontinuados',
  productCount: 5,
};

import { generateRealProducts } from './products';

export const PRODUCTS: Product[] = generateRealProducts([
  ...SUBCATEGORIES,
  ...BRAND_SUBCATEGORIES,
  DISCONTINUED_SUBCATEGORY,
]);

// --------------------------------------------------------------------
//  Helpers
// --------------------------------------------------------------------

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getSubcategoryById(id: string): Subcategory | undefined {
  return [...SUBCATEGORIES, ...BRAND_SUBCATEGORIES, DISCONTINUED_SUBCATEGORY].find((s) => s.id === id);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return PRODUCTS.filter((p) => p.categoryId === categoryId);
}

export function getProductsBySubcategory(subcategoryId: string): Product[] {
  return PRODUCTS.filter((p) => p.subcategoryId === subcategoryId);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByBrand(brandName: string): Product[] {
  return PRODUCTS.filter((p) => p.brand === brandName);
}

export function getSubcategoriesByCategory(categoryId: string): Subcategory[] {
  return SUBCATEGORIES.filter((s) => s.categoryId === categoryId);
}

export function getAllBrands(): string[] {
  return Array.from(new Set(PRODUCTS.map((p) => p.brand).filter(Boolean))) as string[];
}

export function getAllApplications(): string[] {
  return Array.from(new Set(PRODUCTS.flatMap((p) => p.applications)));
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return PRODUCTS;
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.subcategoryId.toLowerCase().includes(q) ||
      p.brand?.toLowerCase().includes(q) ||
      getSubcategoryById(p.subcategoryId)?.name.toLowerCase().includes(q)
  );
}

// --------------------------------------------------------------------
//  Configuração "Monte Sua Rádio"
// --------------------------------------------------------------------

export interface RadioBuildSection {
  id: string;
  title: string;
  iconName: string;
  items: { label: string; subcategoryId: string }[];
}

export const RADIO_BUILD_SECTIONS: RadioBuildSection[] = [
  {
    id: 'estudio',
    title: 'Estúdio de Rádio',
    iconName: 'SlidersHorizontal',
    items: [
      { label: 'Console', subcategoryId: 'consoles' },
      { label: 'Microfone', subcategoryId: 'microfones' },
      { label: 'Fones', subcategoryId: 'fones' },
      { label: 'Monitores', subcategoryId: 'monitores' },
      { label: 'Processador de Microfone', subcategoryId: 'processador-microfone' },
    ],
  },
  {
    id: 'processamento',
    title: 'Processamento de Áudio',
    iconName: 'Cpu',
    items: [
      { label: 'Processadores de Áudio', subcategoryId: 'processadores-audio' },
      { label: 'Processadores de Microfone', subcategoryId: 'processador-microfone' },
      { label: 'Monitores', subcategoryId: 'monitores' },
    ],
  },
  {
    id: 'transmissao',
    title: 'Transmissão',
    iconName: 'Radio',
    items: [
      { label: 'Transmissores', subcategoryId: 'transmissores-rf' },
      { label: 'Amplificadores de RF', subcategoryId: 'transmissores-rf' },
      { label: 'Links STL', subcategoryId: 'links-stl' },
      { label: 'Receptores', subcategoryId: 'receptores' },
    ],
  },
  {
    id: 'aoip',
    title: 'Áudio sobre IP',
    iconName: 'Network',
    items: [
      { label: 'Interfaces AoIP', subcategoryId: 'interface-aoip' },
      { label: 'Dante', subcategoryId: 'solucoes-dante' },
      { label: 'Axia', subcategoryId: 'axia-telos' },
      { label: 'Telos', subcategoryId: 'telos' },
      { label: 'Codec', subcategoryId: 'codec' },
    ],
  },
  {
    id: 'rds',
    title: 'RDS',
    iconName: 'RadioTower',
    items: [
      { label: 'Encoder RDS', subcategoryId: 'encoder-rds' },
    ],
  },
];
