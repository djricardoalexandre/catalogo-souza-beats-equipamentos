import { useState, useEffect, useRef } from 'react';
import {
  Search,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  Radio,
} from 'lucide-react';
import { CATEGORIES } from '@/data/catalog';
import { searchProducts, getSubcategoryById } from '@/data/catalog';
import { whatsappGenericUrl } from '@/lib/whatsapp';
import { parseRoute } from '@/lib/router';

interface HeaderProps {
  navigate: (path: string) => void;
}

const NAV_ITEMS = [
  { label: 'INÍCIO', path: '/' },
  { label: 'EQUIPAMENTOS', path: '/equipamentos' },
  { label: 'ÁUDIO E ESTÚDIO', path: '/categoria/audio-estudio' },
  { label: 'TRANSMISSÃO E RF', path: '/categoria/transmissao-rf' },
  { label: 'ÁUDIO SOBRE IP', path: '/categoria/audio-ip' },
  { label: 'RÁDIO', path: '/categoria/radio-sistemas' },
  { label: 'VÍDEO', path: '/categoria/video' },
  { label: 'MARCAS', path: '/marcas' },
  { label: 'CONTATO', path: '/contato' },
];

export default function Header({ navigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ReturnType<typeof searchProducts>>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      setSearchResults(searchProducts(searchQuery).slice(0, 6));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const currentHash = window.location.hash;
  const isActive = (path: string) => {
    if (path === '/') return currentHash === '' || currentHash === '#/' || currentHash === '#';
    return currentHash.startsWith('#' + path);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileOpen(false);
    setSearchOpen(false);
    setSearchQuery('');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/equipamentos?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
      setMobileOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ink-950/95 backdrop-blur-md border-b border-ink-700/50 shadow-lg shadow-black/20'
            : 'bg-gradient-to-b from-ink-950/80 to-transparent'
        }`}
      >
        <div className="container-x">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavigate('/')}
              className="flex items-center gap-3 group"
              aria-label="SOUZA BEATS EQUIPAMENTOS - Início"
            >
              <div className="relative">
                <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-lg bg-gradient-to-br from-brand-600 to-accent-600 flex items-center justify-center shadow-lg shadow-brand-600/20 group-hover:shadow-brand-600/40 transition-shadow">
                  <Radio className="w-5 h-5 lg:w-6 lg:h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-success-500 border-2 border-ink-950 animate-pulse-slow" />
              </div>
              <div className="text-left">
                <div className="text-sm lg:text-base font-800 tracking-tight text-white leading-none">
                  SOUZA BEATS
                </div>
                <div className="text-[10px] lg:text-xs text-brand-400 font-500 tracking-wider leading-none mt-1">
                  EQUIPAMENTOS
                </div>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`px-3 py-2 text-xs font-600 rounded-md transition-all whitespace-nowrap ${
                    isActive(item.path)
                      ? 'text-white bg-brand-600/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div ref={searchRef} className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="Buscar equipamentos"
                >
                  {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
                </button>

                {searchOpen && (
                  <div className="absolute right-0 top-12 w-80 sm:w-96 bg-ink-900 border border-ink-700 rounded-xl shadow-2xl shadow-black/40 overflow-hidden animate-slide-down">
                    <form onSubmit={handleSearchSubmit} className="p-3 border-b border-ink-700">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Pesquisar equipamento..."
                          className="w-full pl-10 pr-4 py-2.5 bg-ink-800 border border-ink-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-600"
                        />
                      </div>
                    </form>
                    {searchResults.length > 0 && (
                      <div className="max-h-80 overflow-y-auto scrollbar-thin">
                        {searchResults.map((p) => {
                          const sub = getSubcategoryById(p.subcategoryId);
                          return (
                            <button
                              key={p.id}
                              onClick={() => handleNavigate(`/produto/${p.id}`)}
                              className="w-full px-4 py-3 flex items-center justify-between hover:bg-ink-800 transition-colors text-left border-b border-ink-800 last:border-0"
                            >
                              <div>
                                <div className="text-sm font-600 text-white">{p.name}</div>
                                <div className="text-xs text-gray-500">{sub?.name}{p.brand ? ` · ${p.brand}` : ''}</div>
                              </div>
                              <ChevronDown className="w-4 h-4 text-gray-600 -rotate-90" />
                            </button>
                          );
                        })}
                      </div>
                    )}
                    {searchQuery.trim().length >= 2 && searchResults.length === 0 && (
                      <div className="px-4 py-6 text-center text-sm text-gray-500">
                        Nenhum equipamento encontrado para "{searchQuery}"
                      </div>
                    )}
                    {searchQuery.trim().length < 2 && (
                      <div className="px-4 py-6 text-center text-sm text-gray-500">
                        Digite pelo menos 2 caracteres para buscar
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* WhatsApp button */}
              <a
                href={whatsappGenericUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-lg bg-success-600 hover:bg-success-500 text-white text-sm font-600 transition-colors shadow-lg shadow-success-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden lg:inline">Orçamento</span>
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden w-10 h-10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-ink-950/98 backdrop-blur-md border-t border-ink-700/50 animate-slide-down">
            <nav className="container-x py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`px-4 py-3 text-sm font-600 rounded-lg transition-all text-left ${
                    isActive(item.path)
                      ? 'text-white bg-brand-600/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <form onSubmit={handleSearchSubmit} className="mt-2 px-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Pesquisar equipamento..."
                    className="w-full pl-10 pr-4 py-2.5 bg-ink-800 border border-ink-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-600"
                  />
                </div>
              </form>
              <a
                href={whatsappGenericUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 mx-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-success-600 text-white text-sm font-600"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento
              </a>
            </nav>
          </div>
        )}
      </header>
      <div className="h-16 lg:h-20" />
    </>
  );
}
