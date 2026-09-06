import { ChevronRight, MessageCircle } from 'lucide-react';
import { BRANDS, BRAND_SUBCATEGORIES, getProductsBySubcategory, getSubcategoryById } from '@/data/catalog';
import { getIcon } from '@/components/IconMap';
import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import { whatsappGenericUrl } from '@/lib/whatsapp';
import type { NavigateFn } from '@/lib/types';

export default function BrandsPage({ navigate }: { navigate: NavigateFn }) {
  // Map brand IDs to their product subcategory
  const BRAND_MAP: Record<string, string> = {
    biquad: 'biquad-prod',
    shure: 'shure-prod',
    solidyne: 'solidyne-prod',
    sony: 'sony-prod',
  };

  // Axia and Telos map to existing subcategories
  const BRAND_EXTRA: Record<string, string[]> = {
    axia: ['axia-telos'],
    telos: ['telos', 'axia-telos'],
  };

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-ink-900 to-ink-950 border-b border-ink-700/40">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 70% 50%, #06b6d4 0%, transparent 50%)'
        }} />
        <div className="relative container-x py-10 lg:py-14">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-5">
            <button onClick={() => navigate('/')} className="hover:text-brand-400">Início</button>
            <span>/</span>
            <span className="text-gray-300">Marcas</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-800 text-white tracking-tight mb-2">
            Marcas e Tecnologias
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            Trabalhamos com as principais marcas de equipamentos profissionais para radiodifusão.
          </p>
        </div>
      </div>

      {/* Brand cards */}
      <div className="container-x py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {BRANDS.map((brand, i) => {
            const Icon = getIcon(brand.iconName);
            return (
              <div
                key={brand.id}
                className="group p-6 rounded-xl bg-ink-900 border border-ink-700/60 hover:border-brand-600/40 transition-all animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ink-800 to-ink-700 border border-ink-700 flex items-center justify-center group-hover:border-brand-600/40 transition-colors">
                    <Icon className="w-7 h-7 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-800 text-white">{brand.name}</h3>
                    <div className="text-xs text-brand-400 font-600 uppercase tracking-wider">Tecnologia</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{brand.description}</p>
                {BRAND_MAP[brand.id] && (
                  <button
                    onClick={() => navigate(`/equipamentos?sub=${BRAND_MAP[brand.id]}`)}
                    className="flex items-center gap-1 text-xs font-600 text-brand-400 hover:text-brand-300"
                  >
                    Ver equipamentos
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
                {BRAND_EXTRA[brand.id] && (
                  <div className="flex flex-wrap gap-2">
                    {BRAND_EXTRA[brand.id].map((subId) => (
                      <button
                        key={subId}
                        onClick={() => navigate(`/equipamentos?sub=${subId}`)}
                        className="flex items-center gap-1 text-xs font-600 text-brand-400 hover:text-brand-300"
                      >
                        {getSubcategoryById(subId)?.name}
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Products by brand */}
        {BRAND_SUBCATEGORIES.map((sub) => {
          const products = getProductsBySubcategory(sub.id);
          if (products.length === 0) return null;

          return (
            <div key={sub.id} className="mb-12">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-700 text-white">{sub.name}</h2>
                <span className="px-2.5 py-0.5 rounded-full bg-ink-800 border border-ink-700 text-xs font-600 text-gray-400">
                  {products.length} produtos
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {products.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} navigate={navigate} />
                ))}
              </div>
            </div>
          );
        })}

        {/* CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-900 via-ink-900 to-ink-950 border border-brand-800/40 p-8 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl font-800 text-white mb-3">
            Não encontrou o equipamento que procura?
          </h2>
          <p className="text-sm text-gray-300 mb-5 max-w-xl mx-auto">
            Entre em contato e nossa equipe vai ajudar você a encontrar o equipamento ideal para sua emissora.
          </p>
          <a
            href={whatsappGenericUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-success-600 hover:bg-success-500 text-white font-600 text-sm transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      </div>
    </div>
  );
}
