import { useState, useMemo, useEffect } from 'react';
import { Filter, Search, X, SlidersHorizontal } from 'lucide-react';
import {
  PRODUCTS,
  CATEGORIES,
  SUBCATEGORIES,
  BRAND_SUBCATEGORIES,
  getSubcategoryById,
  getCategoryById,
  getAllBrands,
  getAllApplications,
} from '@/data/catalog';
import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import type { NavigateFn } from '@/lib/types';

interface EquipmentPageProps {
  navigate: NavigateFn;
  query: URLSearchParams;
}

export default function EquipmentPage({ navigate, query }: EquipmentPageProps) {
  const [search, setSearch] = useState(query.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState<string>(query.get('cat') || '');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>(query.get('sub') || '');
  const [selectedBrand, setSelectedBrand] = useState<string>(query.get('brand') || '');
  const [selectedApplication, setSelectedApplication] = useState<string>(query.get('app') || '');
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(24);

  // Sync from URL query params when they change
  useEffect(() => {
    setSearch(query.get('q') || '');
    setSelectedCategory(query.get('cat') || '');
    setSelectedSubcategory(query.get('sub') || '');
    setSelectedBrand(query.get('brand') || '');
    setSelectedApplication(query.get('app') || '');
  }, [query]);

  // Available subcategories based on selected category
  const availableSubcats = useMemo(() => {
    if (!selectedCategory) return [...SUBCATEGORIES, ...BRAND_SUBCATEGORIES];
    return [...SUBCATEGORIES, ...BRAND_SUBCATEGORIES].filter((s) => s.categoryId === selectedCategory);
  }, [selectedCategory]);

  const brands = useMemo(() => getAllBrands(), []);
  const applications = useMemo(() => getAllApplications(), []);

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter((p) => !p.discontinued);

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.brand?.toLowerCase().includes(q) ||
          getSubcategoryById(p.subcategoryId)?.name.toLowerCase().includes(q)
      );
    }

    if (selectedCategory) {
      result = result.filter((p) => p.categoryId === selectedCategory);
    }

    if (selectedSubcategory) {
      result = result.filter((p) => p.subcategoryId === selectedSubcategory);
    }

    if (selectedBrand) {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    if (selectedApplication) {
      result = result.filter((p) => p.applications.includes(selectedApplication));
    }

    return result;
  }, [search, selectedCategory, selectedSubcategory, selectedBrand, selectedApplication]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;
  const activeFilters =
    (selectedCategory ? 1 : 0) +
    (selectedSubcategory ? 1 : 0) +
    (selectedBrand ? 1 : 0) +
    (selectedApplication ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedSubcategory('');
    setSelectedBrand('');
    setSelectedApplication('');
    setSearch('');
  };

  return (
    <div className="container-x py-8 lg:py-12 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
        <button onClick={() => navigate('/')} className="hover:text-brand-400">Início</button>
        <span>/</span>
        <span className="text-gray-300">Equipamentos</span>
      </div>

      <SectionHeader
        title="Equipamentos"
        description="Todos os equipamentos profissionais disponíveis para sua emissora de rádio."
      />

      {/* Search bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar equipamento..."
          className="w-full pl-12 pr-4 py-3.5 bg-ink-900 border border-ink-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-600 transition-colors"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="flex gap-6">
        {/* Filters sidebar */}
        <aside className={`${showFilters ? 'fixed inset-0 z-40 bg-ink-950/90 backdrop-blur-sm p-4 overflow-y-auto' : 'hidden'} lg:block lg:relative lg:bg-transparent lg:p-0 lg:w-64 lg:flex-shrink-0`}>
          <div className="lg:sticky lg:top-24 space-y-5">
            <div className="flex items-center justify-between lg:hidden mb-4">
              <h3 className="text-sm font-700 text-white">Filtros</h3>
              <button onClick={() => setShowFilters(false)} className="text-gray-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category filter */}
            <FilterGroup title="Categoria">
              <FilterOption
                label="Todas"
                active={!selectedCategory}
                onClick={() => { setSelectedCategory(''); setSelectedSubcategory(''); }}
              />
              {CATEGORIES.map((cat) => (
                <FilterOption
                  key={cat.id}
                  label={cat.name}
                  active={selectedCategory === cat.id}
                  onClick={() => { setSelectedCategory(cat.id); setSelectedSubcategory(''); }}
                />
              ))}
            </FilterGroup>

            {/* Subcategory filter */}
            {availableSubcats.length > 0 && (
              <FilterGroup title="Tipo de Equipamento">
                <FilterOption
                  label="Todos"
                  active={!selectedSubcategory}
                  onClick={() => setSelectedSubcategory('')}
                />
                {availableSubcats.map((sub) => (
                  <FilterOption
                    key={sub.id}
                    label={sub.name}
                    active={selectedSubcategory === sub.id}
                    onClick={() => setSelectedSubcategory(sub.id)}
                  />
                ))}
              </FilterGroup>
            )}

            {/* Brand filter */}
            <FilterGroup title="Marca">
              <FilterOption
                label="Todas"
                active={!selectedBrand}
                onClick={() => setSelectedBrand('')}
              />
              {brands.map((brand) => (
                <FilterOption
                  key={brand}
                  label={brand}
                  active={selectedBrand === brand}
                  onClick={() => setSelectedBrand(brand)}
                />
              ))}
            </FilterGroup>

            {/* Application filter */}
            <FilterGroup title="Aplicação">
              <FilterOption
                label="Todas"
                active={!selectedApplication}
                onClick={() => setSelectedApplication('')}
              />
              {applications.map((app) => (
                <FilterOption
                  key={app}
                  label={app}
                  active={selectedApplication === app}
                  onClick={() => setSelectedApplication(app)}
                />
              ))}
            </FilterGroup>

            {activeFilters > 0 && (
              <button
                onClick={clearFilters}
                className="w-full px-3 py-2.5 rounded-lg bg-ink-800 hover:bg-ink-700 text-gray-400 hover:text-white text-xs font-600 transition-colors flex items-center justify-center gap-2"
              >
                <X className="w-3.5 h-3.5" />
                Limpar Filtros ({activeFilters})
              </button>
            )}
          </div>
        </aside>

        {/* Products grid */}
        <div className="flex-1 min-w-0">
          {/* Mobile filter toggle */}
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <button
              onClick={() => setShowFilters(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-ink-900 border border-ink-700 text-sm font-600 text-white"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtros {activeFilters > 0 && `(${activeFilters})`}
            </button>
            <span className="text-xs text-gray-500">{filteredProducts.length} produtos</span>
          </div>

          {/* Result count desktop */}
          <div className="hidden lg:flex items-center justify-between mb-4">
            <span className="text-sm text-gray-400">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'equipamento' : 'equipamentos'} encontrados
            </span>
          </div>

          {/* Active filter chips */}
          {(selectedCategory || selectedSubcategory || selectedBrand || selectedApplication) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedCategory && (
                <Chip label={getCategoryById(selectedCategory)?.name || ''} onRemove={() => setSelectedCategory('')} />
              )}
              {selectedSubcategory && (
                <Chip label={getSubcategoryById(selectedSubcategory)?.name || ''} onRemove={() => setSelectedSubcategory('')} />
              )}
              {selectedBrand && <Chip label={selectedBrand} onRemove={() => setSelectedBrand('')} />}
              {selectedApplication && <Chip label={selectedApplication} onRemove={() => setSelectedApplication('')} />}
            </div>
          )}

          {/* Grid */}
          {visibleProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {visibleProducts.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} navigate={navigate} />
                ))}
              </div>
              {hasMore && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setVisibleCount((c) => c + 24)}
                    className="px-6 py-3 rounded-lg bg-ink-800 hover:bg-ink-700 border border-ink-700 text-white font-600 text-sm transition-colors"
                  >
                    Carregar Mais ({filteredProducts.length - visibleCount} restantes)
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <Filter className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <p className="text-gray-400 mb-2">Nenhum equipamento encontrado com os filtros selecionados.</p>
              <button onClick={clearFilters} className="text-brand-400 hover:text-brand-300 text-sm font-600">
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-700 text-white uppercase tracking-wider mb-2.5">{title}</h4>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function FilterOption({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors ${
        active ? 'bg-brand-600/20 text-brand-300 font-600' : 'text-gray-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {label}
    </button>
  );
}

function Chip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-600/15 border border-brand-600/30">
      <span className="text-xs font-600 text-brand-300">{label}</span>
      <button onClick={onRemove} className="text-brand-400 hover:text-white">
        <X className="w-3 h-3" />
      </button>
    </div>
  );
}
