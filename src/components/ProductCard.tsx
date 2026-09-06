import { MessageCircle, Eye } from 'lucide-react';
import type { Product } from '@/data/catalog';
import { getSubcategoryById } from '@/data/catalog';
import { getProductImage } from '@/lib/images';
import { whatsappProductUrl } from '@/lib/whatsapp';

interface ProductCardProps {
  product: Product;
  index: number;
  navigate: (path: string) => void;
}

export default function ProductCard({ product, index, navigate }: ProductCardProps) {
  const sub = getSubcategoryById(product.subcategoryId);
  const image = getProductImage(product.id, product.subcategoryId, index);

  return (
    <div className="group bg-ink-900 border border-ink-700/60 rounded-xl overflow-hidden hover:border-brand-600/40 transition-all duration-300 hover:shadow-xl hover:shadow-brand-600/10 flex flex-col">
      {/* Image */}
      <button
        onClick={() => navigate(`/produto/${product.id}`)}
        className="relative aspect-[5/3] overflow-hidden bg-ink-800"
      >
        <img
          src={image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
        {product.brand && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-ink-950/80 backdrop-blur-sm border border-ink-700/50">
            <span className="text-[10px] font-700 text-brand-400 tracking-wider">{product.brand}</span>
          </div>
        )}
        {product.discontinued && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-warning-600/80 backdrop-blur-sm">
            <span className="text-[10px] font-700 text-white tracking-wider">DESCONTINUADO</span>
          </div>
        )}
      </button>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <div className="text-[10px] text-brand-400 font-600 uppercase tracking-wider mb-1.5">
          {sub?.name}
        </div>
        <button
          onClick={() => navigate(`/produto/${product.id}`)}
          className="text-base font-700 text-white hover:text-brand-400 transition-colors text-left mb-2"
        >
          {product.name}
        </button>
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => navigate(`/produto/${product.id}`)}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-ink-800 hover:bg-ink-700 text-gray-300 hover:text-white text-xs font-600 transition-colors border border-ink-700"
          >
            <Eye className="w-3.5 h-3.5" />
            Ver Produto
          </button>
          <a
            href={whatsappProductUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-success-600 hover:bg-success-500 text-white text-xs font-600 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Orçamento
          </a>
        </div>
      </div>
    </div>
  );
}
