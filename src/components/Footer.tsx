import { Radio, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { CATEGORIES } from '@/data/catalog';
import { whatsappContactUrl, WHATSAPP_DISPLAY } from '@/lib/whatsapp';

interface FooterProps {
  navigate: (path: string) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const handleNav = (path: string) => navigate(path);

  return (
    <footer className="bg-ink-900 border-t border-ink-700/50 mt-20">
      <div className="container-x py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-600 to-accent-600 flex items-center justify-center">
                <Radio className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-sm font-800 text-white leading-none">SOUZA BEATS</div>
                <div className="text-[10px] text-brand-400 font-500 tracking-wider mt-1">EQUIPAMENTOS</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Equipamentos profissionais para rádio, estúdio e radiodifusão.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={whatsappContactUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-ink-800 hover:bg-success-600 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
              <a
                href="mailto:contato@souzabeats.com.br"
                className="w-9 h-9 rounded-lg bg-ink-800 hover:bg-brand-600 flex items-center justify-center transition-colors"
                aria-label="E-mail"
              >
                <Mail className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-700 text-white uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Início', path: '/' },
                { label: 'Equipamentos', path: '/equipamentos' },
                { label: 'Monte Sua Rádio', path: '/monte-sua-radio' },
                { label: 'Marcas', path: '/marcas' },
                { label: 'Contato', path: '/contato' },
                { label: 'Descontinuados', path: '/descontinuados' },
              ].map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNav(link.path)}
                    className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-700 text-white uppercase tracking-wider mb-4">Categorias</h4>
            <ul className="space-y-2.5">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleNav(`/categoria/${cat.id}`)}
                    className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-700 text-white uppercase tracking-wider mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappContactUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-success-500 transition-colors"
                >
                  <Phone className="w-4 h-4 text-success-500" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@souzabeats.com.br"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-400" />
                  djricardofm@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-accent-400" />
                Rio Espera - MG, Brasil
              </li>
            </ul>
            <a
              href={whatsappContactUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2.5 rounded-lg bg-success-600 hover:bg-success-500 text-white text-sm font-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ink-700/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} SOUZA BEATS EQUIPAMENTOS. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600">
            Equipamentos profissionais para rádio, estúdio e radiodifusão.
          </p>
        </div>
      </div>
    </footer>
  );
}
