import { useMemo } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import {
  getCategoryById,
  getSubcategoriesByCategory,
  getProductsBySubcategory,
} from '@/data/catalog';
import { getIcon } from '@/components/IconMap';
import ProductCard from '@/components/ProductCard';
import type { NavigateFn } from '@/lib/types';

interface CategoryPageProps {
  navigate: NavigateFn;
  categoryId: string;
}

export default function CategoryPage({ navigate, categoryId }: CategoryPageProps) {
  const category = getCategoryById(categoryId);
  const subcats = useMemo(() => getSubcategoriesByCategory(categoryId), [categoryId]);

  if (!category) {
    return (
      <div className="container-x py-20 text-center">
        <p className="text-gray-400 mb-4">Categoria não encontrada.</p>
        <button onClick={() => navigate('/equipamentos')} className="text-brand-400 hover:text-brand-300">
          Ver todos os equipamentos
        </button>
      </div>
    );
  }

  const Icon = getIcon(category.iconName);
  const allProducts = subcats.flatMap((s) => getProductsBySubcategory(s.id));
  const totalProducts = allProducts.length;

  return (
    <div className="animate-fade-in">
      {/* Hero header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-ink-900 to-ink-950 border-b border-ink-700/40">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 50%, #06b6d4 0%, transparent 50%)'
        }} />
        <div className="relative container-x py-10 lg:py-14">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-5">
            <button onClick={() => navigate('/')} className="hover:text-brand-400">Início</button>
            <span>/</span>
            <button onClick={() => navigate('/equipamentos')} className="hover:text-brand-400">Equipamentos</button>
            <span>/</span>
            <span className="text-gray-300">{category.name}</span>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-brand-600/20 to-accent-600/10 border border-brand-600/30 flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-brand-400" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-800 text-white tracking-tight mb-2">
                {category.name}
              </h1>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl">
                {category.description}
              </p>
              <div className="mt-3 text-xs text-gray-500">
                {totalProducts} {totalProducts === 1 ? 'equipamento' : 'equipamentos'} · {subcats.length} {subcats.length === 1 ? 'tipo' : 'tipos'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products by subcategory */}
      <div className="container-x py-10 lg:py-14 space-y-12">
        {subcats.map((sub) => {
          const products = getProductsBySubcategory(sub.id);
          if (products.length === 0) return null;

          return (
            <div key={sub.id}>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-700 text-white">{sub.name}</h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-ink-800 border border-ink-700 text-xs font-600 text-gray-400">
                    {products.length}
                  </span>
                </div>
                <button
                  onClick={() => navigate(`/equipamentos?sub=${sub.id}`)}
                  className="flex items-center gap-1 text-xs font-600 text-brand-400 hover:text-brand-300"
                >
                  Ver todos
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {products.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} navigate={navigate} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Back link */}
      <div className="container-x pb-12">
        <button
          onClick={() => navigate('/equipamentos')}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Todos os Equipamentos
        </button>
      </div>
    </div>
  );
}
