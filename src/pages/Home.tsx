import { ArrowRight, MessageCircle, ChevronRight, Radio, Cpu, Zap, ShieldCheck } from 'lucide-react';
import { CATEGORIES, RADIO_BUILD_SECTIONS, BRANDS, getSubcategoriesByCategory, getProductsBySubcategory, getSubcategoryById } from '@/data/catalog';
import { getIcon } from '@/components/IconMap';
import { HERO_IMAGE } from '@/data/images';
import { whatsappGenericUrl, whatsappContactUrl } from '@/lib/whatsapp';
import { getProductImage } from '@/lib/images';
import SectionHeader from '@/components/SectionHeader';
import type { NavigateFn } from '@/lib/types';

export default function Home({ navigate }: { navigate: NavigateFn }) {
  return (
    <div className="animate-fade-in">
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Estúdio de rádio profissional" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30" />
        </div>

        <div className="relative container-x py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-600/15 border border-brand-600/30 mb-6 animate-fade-up">
              <Radio className="w-3.5 h-3.5 text-brand-400" />
              <span className="text-xs font-600 text-brand-300 tracking-wide">EQUIPAMENTOS PROFISSIONAIS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-900 text-white tracking-tight leading-[1.05] mb-5 text-balance animate-fade-up">
              EQUIPAMENTOS PROFISSIONAIS PARA RÁDIO
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl animate-fade-up">
              Tecnologia, qualidade e soluções para emissoras de rádio, estúdios e sistemas de radiodifusão.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up">
              <button
                onClick={() => navigate('/equipamentos')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-600 text-sm transition-colors shadow-lg shadow-brand-600/25 group"
              >
                VER EQUIPAMENTOS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href={whatsappGenericUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-success-600 hover:bg-success-500 text-white font-600 text-sm transition-colors shadow-lg shadow-success-600/25"
              >
                <MessageCircle className="w-4 h-4" />
                SOLICITAR ORÇAMENTO
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* QUICK ACCESS BLOCKS */}
      <section className="container-x py-16 lg:py-24">
        <SectionHeader
          eyebrow="ACESSO RÁPIDO"
          title="Soluções por Categoria"
          description="Encontre rapidamente os equipamentos para cada área da sua emissora."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => {
            const Icon = getIcon(cat.iconName);
            const subcats = getSubcategoriesByCategory(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => navigate(`/categoria/${cat.id}`)}
                className="group text-left p-6 rounded-xl bg-ink-900 border border-ink-700/60 hover:border-brand-600/40 transition-all duration-300 hover:shadow-xl hover:shadow-brand-600/10 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-600/20 to-accent-600/10 border border-brand-600/20 flex items-center justify-center mb-4 group-hover:from-brand-600/30 group-hover:to-accent-600/20 transition-all">
                  <Icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-lg font-700 text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">{cat.description}</p>
                <div className="flex items-center gap-1 text-xs font-600 text-brand-400">
                  Ver equipamentos
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            );
          })}

          {/* Monte Sua Rádio card */}
          <button
            onClick={() => navigate('/monte-sua-radio')}
            className="group text-left p-6 rounded-xl bg-gradient-to-br from-brand-600/15 to-accent-600/10 border border-brand-600/30 hover:border-brand-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-600/15 animate-fade-up"
            style={{ animationDelay: `${CATEGORIES.length * 80}ms` }}
          >
            <div className="w-12 h-12 rounded-lg bg-brand-600/20 border border-brand-600/30 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-brand-300" />
            </div>
            <h3 className="text-lg font-700 text-white mb-2">Monte Sua Rádio</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              Encontre os equipamentos necessários para montar, atualizar ou modernizar sua emissora.
            </p>
            <div className="flex items-center gap-1 text-xs font-600 text-brand-300">
              Começar agora
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </section>

      {/* MONTE SUA RÁDIO section */}
      <section className="bg-ink-900/50 border-y border-ink-700/40">
        <div className="container-x py-16 lg:py-24">
          <SectionHeader
            eyebrow="SOLUÇÃO COMPLETA"
            title="MONTE SUA RÁDIO"
            description="Encontre os equipamentos necessários para montar, atualizar ou modernizar sua emissora."
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {RADIO_BUILD_SECTIONS.map((section, i) => {
              const Icon = getIcon(section.iconName);
              return (
                <div
                  key={section.id}
                  className="p-5 rounded-xl bg-ink-900 border border-ink-700/60 hover:border-brand-600/30 transition-all animate-fade-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-600/15 border border-brand-600/20 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <h4 className="text-sm font-700 text-white mb-3">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j}>
                        <button
                          onClick={() => navigate(`/equipamentos?sub=${item.subcategoryId}`)}
                          className="text-xs text-gray-400 hover:text-brand-400 transition-colors flex items-center gap-1"
                        >
                          <ChevronRight className="w-3 h-3 text-brand-600" />
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container-x py-16 lg:py-24">
        <SectionHeader
          eyebrow="DESTAQUES"
          title="Equipamentos em Destaque"
          description="Uma seleção dos equipamentos profissionais disponíveis para sua emissora."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { sub: 'consoles', cat: 'audio-estudio' },
            { sub: 'transmissores-rf', cat: 'transmissao-rf' },
            { sub: 'solucoes-dante', cat: 'audio-ip' },
            { sub: 'encoder-rds', cat: 'radio-sistemas' },
          ].map(({ sub, cat }) => {
            const products = getProductsBySubcategory(sub);
            const p = products[0];
            if (!p) return null;
            return (
              <button
                key={p.id}
                onClick={() => navigate(`/produto/${p.id}`)}
                className="group text-left bg-ink-900 border border-ink-700/60 rounded-xl overflow-hidden hover:border-brand-600/40 transition-all"
              >
                <ProductImageThumb productId={p.id} subcategoryId={p.subcategoryId} index={0} />
                <div className="p-4">
                  <div className="text-[10px] text-brand-400 font-600 uppercase tracking-wider mb-1">
                    {getSubcategoryById(p.subcategoryId)?.name}
                  </div>
                  <div className="text-sm font-700 text-white group-hover:text-brand-400 transition-colors">
                    {p.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/equipamentos')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-ink-800 hover:bg-ink-700 border border-ink-700 text-white font-600 text-sm transition-colors group"
          >
            Ver Todos os Equipamentos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </section>

      {/* BRANDS */}
      <section className="bg-ink-900/50 border-y border-ink-700/40">
        <div className="container-x py-16 lg:py-24">
          <SectionHeader
            eyebrow="PARCERIAS"
            title="Marcas e Tecnologias"
            description="Trabalhamos com as principais marcas de equipamentos de radiodifusão do mercado."
            center
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {BRANDS.map((brand, i) => {
              const Icon = getIcon(brand.iconName);
              return (
                <button
                  key={brand.id}
                  onClick={() => navigate('/marcas')}
                  className="group flex flex-col items-center p-6 rounded-xl bg-ink-900 border border-ink-700/60 hover:border-brand-600/40 transition-all animate-fade-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ink-800 to-ink-700 border border-ink-700 flex items-center justify-center mb-3 group-hover:border-brand-600/40 transition-colors">
                    <Icon className="w-7 h-7 text-brand-400" />
                  </div>
                  <div className="text-sm font-700 text-white group-hover:text-brand-400 transition-colors">
                    {brand.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-x py-16 lg:py-24">
        <SectionHeader
          eyebrow="DIFERENCIAIS"
          title="Por que a Souza Beats Equipamentos?"
          description="Especialização em radiodifusão, atendimento técnico e soluções completas para sua emissora."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Cpu, title: 'Tecnologia', desc: 'Equipamentos de última geração para áudio, RF, AoIP e vídeo.' },
            { icon: ShieldCheck, title: 'Confiança', desc: 'Marcas reconhecidas e suporte técnico especializado em radiodifusão.' },
            { icon: Zap, title: 'Especialização', desc: 'Foco total em rádio e broadcast, com soluções para cada parte da emissora.' },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-ink-900 border border-ink-700/60 text-center animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-brand-600/15 border border-brand-600/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-brand-400" />
              </div>
              <h3 className="text-lg font-700 text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA CONTACT */}
      <section className="container-x pb-16 lg:pb-24">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-900 via-ink-900 to-ink-950 border border-brand-800/40 p-8 lg:p-14 text-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-800 text-white mb-4 text-balance">
              FALE COM A SOUZA BEATS EQUIPAMENTOS
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl mx-auto text-balance">
              Precisa de ajuda para escolher o equipamento ideal para sua rádio? Entre em contato conosco e solicite uma cotação.
            </p>
            <a
              href={whatsappContactUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-success-600 hover:bg-success-500 text-white font-600 text-sm transition-colors shadow-lg shadow-success-600/25"
            >
              <MessageCircle className="w-5 h-5" />
              FALAR PELO WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Inline thumbnail component
function ProductImageThumb({ productId, subcategoryId, index }: { productId: string; subcategoryId: string; index: number }) {
  const img = getProductImage(productId, subcategoryId, index);
  return (
    <div className="aspect-[5/3] overflow-hidden bg-ink-800">
      <img src={img} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
  );
}
