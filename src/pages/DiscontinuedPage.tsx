import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { DISCONTINUED_SUBCATEGORY, getProductsBySubcategory } from '@/data/catalog';
import ProductCard from '@/components/ProductCard';
import type { NavigateFn } from '@/lib/types';

export default function DiscontinuedPage({ navigate }: { navigate: NavigateFn }) {
  const products = getProductsBySubcategory(DISCONTINUED_SUBCATEGORY.id);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-ink-900 to-ink-950 border-b border-ink-700/40">
        <div className="relative container-x py-10 lg:py-14">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-5">
            <button onClick={() => navigate('/')} className="hover:text-brand-400">Início</button>
            <span>/</span>
            <span className="text-gray-300">Descontinuados</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-warning-600/15 border border-warning-600/30 flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-warning-500" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-800 text-white tracking-tight mb-2">
                Produtos Descontinuados
              </h1>
              <p className="text-sm text-gray-400 max-w-2xl">
                Equipamentos com produção encerrada — sujeitos a disponibilidade de estoque.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container-x py-10 lg:py-14">
        {products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {products.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} navigate={navigate} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-400 py-20">Nenhum produto descontinuado disponível.</p>
        )}

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
