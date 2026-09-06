import { useState } from 'react';
import { ArrowLeft, ChevronRight, MessageCircle, Check } from 'lucide-react';
import {
  getProductById,
  getSubcategoryById,
  getCategoryById,
  getProductsBySubcategory,
} from '@/data/catalog';
import { getProductImage, getProductGallery } from '@/lib/images';
import { whatsappProductUrl } from '@/lib/whatsapp';
import ProductCard from '@/components/ProductCard';
import type { NavigateFn } from '@/lib/types';

interface ProductDetailPageProps {
  navigate: NavigateFn;
  productId: string;
}

export default function ProductDetailPage({ navigate, productId }: ProductDetailPageProps) {
  const product = getProductById(productId);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="container-x py-20 text-center">
        <p className="text-gray-400 mb-4">Produto não encontrado.</p>
        <button onClick={() => navigate('/equipamentos')} className="text-brand-400 hover:text-brand-300">
          Ver todos os equipamentos
        </button>
      </div>
    );
  }

  const sub = getSubcategoryById(product.subcategoryId);
  const cat = getCategoryById(product.categoryId);
  const gallery = getProductGallery(product.id, product.subcategoryId, 0);
  const mainImage = gallery[activeImage] || getProductImage(product.id, product.subcategoryId, 0);

  // Related products (same subcategory, excluding current)
  const related = getProductsBySubcategory(product.subcategoryId)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="animate-fade-in">
      <div className="container-x py-8 lg:py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-6 flex-wrap">
          <button onClick={() => navigate('/')} className="hover:text-brand-400">Início</button>
          <span>/</span>
          <button onClick={() => navigate('/equipamentos')} className="hover:text-brand-400">Equipamentos</button>
          {cat && (
            <>
              <span>/</span>
              <button onClick={() => navigate(`/categoria/${cat.id}`)} className="hover:text-brand-400">{cat.name}</button>
            </>
          )}
          {sub && (
            <>
              <span>/</span>
              <span className="text-gray-300">{sub.name}</span>
            </>
          )}
        </div>

        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>

        {/* Product main section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Image gallery */}
          <div>
            <div className="relative aspect-square rounded-xl overflow-hidden bg-ink-900 border border-ink-700/60 mb-4">
              <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
              {product.brand && (
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-md bg-ink-950/80 backdrop-blur-sm border border-ink-700/50">
                  <span className="text-xs font-700 text-brand-400 tracking-wider">{product.brand}</span>
                </div>
              )}
              {product.discontinued && (
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-md bg-warning-600/90 backdrop-blur-sm">
                  <span className="text-xs font-700 text-white tracking-wider">DESCONTINUADO</span>
                </div>
              )}
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-[5/3] rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === i ? 'border-brand-600' : 'border-ink-700/60 hover:border-ink-600'
                  }`}
                >
                  <img src={img} alt={`${product.name} - imagem ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            {/* Category */}
            <div className="text-xs font-700 text-brand-400 uppercase tracking-widest mb-2">
              {sub?.name}{cat ? ` · ${cat.name}` : ''}
            </div>

            {/* Name */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-800 text-white tracking-tight mb-3">
              {product.name}
            </h1>

            {/* Brand */}
            {product.brand && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-ink-800 border border-ink-700 mb-4">
                <span className="text-xs text-gray-500">Marca:</span>
                <span className="text-sm font-700 text-white">{product.brand}</span>
              </div>
            )}

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* WhatsApp CTA */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-success-600/10 to-success-700/5 border border-success-600/20 mb-6">
              <p className="text-sm text-gray-300 mb-3">
                Interessado neste equipamento? Solicite um orçamento pelo WhatsApp.
              </p>
              <a
                href={whatsappProductUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-success-600 hover:bg-success-500 text-white font-600 text-sm transition-colors shadow-lg shadow-success-600/25 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                SOLICITAR ORÇAMENTO PELO WHATSAPP
              </a>
            </div>

            {/* Features */}
            {product.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-700 text-white uppercase tracking-wider mb-3">Principais Características</h3>
                <ul className="space-y-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Applications & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Applications */}
          <div className="p-6 rounded-xl bg-ink-900 border border-ink-700/60">
            <h3 className="text-lg font-700 text-white mb-4">Aplicações</h3>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, i) => (
                <div
                  key={i}
                  className="px-3 py-2 rounded-lg bg-ink-800 border border-ink-700 text-sm text-gray-300"
                >
                  {app}
                </div>
              ))}
            </div>
          </div>

          {/* Specs */}
          <div className="p-6 rounded-xl bg-ink-900 border border-ink-700/60">
            <h3 className="text-lg font-700 text-white mb-4">Especificações Técnicas</h3>
            <div className="text-xs text-gray-500 mb-3 italic">
              Especificações provisórias — substitua pelos dados oficiais do produto.
            </div>
            <dl className="space-y-3">
              {product.specs.map((spec, i) => (
                <div key={i} className="flex justify-between gap-4 pb-3 border-b border-ink-700/40 last:border-0">
                  <dt className="text-sm text-gray-400 font-500">{spec.label}</dt>
                  <dd className="text-sm text-white font-600 text-right">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-700 text-white">Equipamentos Relacionados</h3>
              <button
                onClick={() => navigate(`/equipamentos?sub=${product.subcategoryId}`)}
                className="flex items-center gap-1 text-xs font-600 text-brand-400 hover:text-brand-300"
              >
                Ver todos
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} navigate={navigate} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
