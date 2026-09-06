import { MessageCircle, Phone, Mail, MapPin, Radio } from 'lucide-react';
import { whatsappContactUrl, WHATSAPP_DISPLAY } from '@/lib/whatsapp';
import type { NavigateFn } from '@/lib/types';

export default function ContactPage({ navigate }: { navigate: NavigateFn }) {
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
            <span className="text-gray-300">Contato</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-800 text-white tracking-tight mb-2">
            FALE COM A SOUZA BEATS EQUIPAMENTOS
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            Precisa de ajuda para escolher o equipamento ideal para sua rádio? Entre em contato conosco e solicite uma cotação.
          </p>
        </div>
      </div>

      <div className="container-x py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact card */}
          <div className="p-8 rounded-2xl bg-ink-900 border border-ink-700/60">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 flex items-center justify-center mb-5">
              <Radio className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <h2 className="text-xl font-700 text-white mb-3">Solicite seu Orçamento</h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Entre em contato pelo WhatsApp para receber informações e cotações sobre nossos equipamentos profissionais para radiodifusão.
            </p>

            <a
              href={whatsappContactUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-success-600 hover:bg-success-500 text-white font-600 text-sm transition-colors shadow-lg shadow-success-600/25 w-full"
            >
              <MessageCircle className="w-5 h-5" />
              FALAR PELO WHATSAPP
            </a>
          </div>

          {/* Contact details */}
          <div className="space-y-4">
            <ContactItem
              icon={Phone}
              label="WhatsApp / Telefone"
              value={WHATSAPP_DISPLAY}
              href={whatsappContactUrl()}
            />
            <ContactItem
              icon={Mail}
              label="E-mail"
              value="djricardofm@gmail.com"
              href="mailto:djricardofm@gmail.com"
            />
            <ContactItem
              icon={MapPin}
              label="Localização"
              value="Rio Espera - MG, Brasil"
            />

            {/* Quick links */}
            <div className="p-5 rounded-xl bg-ink-900 border border-ink-700/60">
              <h3 className="text-sm font-700 text-white mb-3">Acesso Rápido</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => navigate('/equipamentos')}
                  className="px-3 py-2.5 rounded-lg bg-ink-800 hover:bg-ink-700 text-xs font-600 text-gray-300 hover:text-white transition-colors text-center"
                >
                  Equipamentos
                </button>
                <button
                  onClick={() => navigate('/monte-sua-radio')}
                  className="px-3 py-2.5 rounded-lg bg-ink-800 hover:bg-ink-700 text-xs font-600 text-gray-300 hover:text-white transition-colors text-center"
                >
                  Monte Sua Rádio
                </button>
                <button
                  onClick={() => navigate('/marcas')}
                  className="px-3 py-2.5 rounded-lg bg-ink-800 hover:bg-ink-700 text-xs font-600 text-gray-300 hover:text-white transition-colors text-center"
                >
                  Marcas
                </button>
                <button
                  onClick={() => navigate('/equipamentos')}
                  className="px-3 py-2.5 rounded-lg bg-ink-800 hover:bg-ink-700 text-xs font-600 text-gray-300 hover:text-white transition-colors text-center"
                >
                  Categorias
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="p-5 rounded-xl bg-ink-900 border border-ink-700/60 hover:border-brand-600/30 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-lg bg-brand-600/15 border border-brand-600/20 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-brand-400" />
        </div>
        <div>
          <div className="text-xs text-gray-500 font-600 uppercase tracking-wider mb-1">{label}</div>
          <div className="text-sm font-600 text-white">{value}</div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }
  return content;
}
