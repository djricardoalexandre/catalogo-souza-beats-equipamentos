import { ChevronRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { RADIO_BUILD_SECTIONS, getSubcategoryById } from '@/data/catalog';
import { getIcon } from '@/components/IconMap';
import { whatsappContactUrl } from '@/lib/whatsapp';
import type { NavigateFn } from '@/lib/types';

export default function MonteSuaRadioPage({ navigate }: { navigate: NavigateFn }) {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-900/30 via-ink-900 to-ink-950 border-b border-ink-700/40">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle at 25% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 50%, #06b6d4 0%, transparent 50%)'
        }} />
        <div className="relative container-x py-12 lg:py-16">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-5">
            <button onClick={() => navigate('/')} className="hover:text-brand-400">Início</button>
            <span>/</span>
            <span className="text-gray-300">Monte Sua Rádio</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-900 text-white tracking-tight mb-3 text-balance">
            MONTE SUA RÁDIO
          </h1>
          <p className="text-sm sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
            Encontre os equipamentos necessários para montar, atualizar ou modernizar sua emissora.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="container-x py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RADIO_BUILD_SECTIONS.map((section, i) => {
            const Icon = getIcon(section.iconName);
            return (
              <div
                key={section.id}
                className="p-6 rounded-xl bg-ink-900 border border-ink-700/60 hover:border-brand-600/30 transition-all animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-600/15 border border-brand-600/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <h2 className="text-lg font-700 text-white">{section.title}</h2>
                </div>

                <ul className="space-y-2.5">
                  {section.items.map((item, j) => {
                    const sub = getSubcategoryById(item.subcategoryId);
                    return (
                      <li key={j}>
                        <button
                          onClick={() => navigate(`/equipamentos?sub=${item.subcategoryId}`)}
                          className="group w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-ink-800 hover:bg-ink-700 transition-colors text-left"
                        >
                          <div>
                            <div className="text-sm font-600 text-white group-hover:text-brand-400 transition-colors">
                              {item.label}
                            </div>
                            {sub && (
                              <div className="text-[10px] text-gray-500 mt-0.5">
                                {sub.productCount} {sub.productCount === 1 ? 'produto' : 'produtos'}
                              </div>
                            )}
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-success-600/10 via-ink-900 to-ink-950 border border-success-600/20 p-8 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl font-800 text-white mb-3">
            Precisa de ajuda para montar sua rádio?
          </h2>
          <p className="text-sm text-gray-300 mb-5 max-w-xl mx-auto">
            Nossa equipe especializada pode ajudar você a escolher todos os equipamentos necessários para sua emissora. Fale conosco pelo WhatsApp.
          </p>
          <a
            href={whatsappContactUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-success-600 hover:bg-success-500 text-white font-600 text-sm transition-colors shadow-lg shadow-success-600/25"
          >
            <MessageCircle className="w-5 h-5" />
            FALAR COM ESPECIALISTA
          </a>
        </div>

        {/* Back */}
        <div className="mt-8">
          <button
            onClick={() => navigate('/equipamentos')}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Ver Todos os Equipamentos
          </button>
        </div>
      </div>
    </div>
  );
}
