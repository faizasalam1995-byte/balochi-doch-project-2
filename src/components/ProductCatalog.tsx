import React, { useState } from 'react';
import { Sparkles, Eye, ShoppingBag, Heart, Search, Filter, Clock, MapPin } from 'lucide-react';
import { Product, CurrencyCode, ProductCategory } from '../types';
import { formatPrice } from '../utils/currency';

interface ProductCatalogProps {
  products: Product[];
  currency: CurrencyCode;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  currency,
  onQuickView,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  searchQuery,
  onSearchChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories: { label: string; value: ProductCategory }[] = [
    { label: 'ALL HEIRLOOMS', value: 'all' },
    { label: 'ROYAL BRIDAL', value: 'bridal' },
    { label: 'LUXURY FORMAL', value: 'luxury-formal' },
    { label: 'CLASSIC KURTI', value: 'classic' },
    { label: 'CHADOR & WRAPS', value: 'chador' },
    { label: 'ACCESSORIES & BATWA', value: 'accessories' },
  ];

  // Filtering
  const filteredProducts = products.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.stitchStyle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.originRegion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fabric.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.pricePKR - b.pricePKR;
    if (sortBy === 'price-desc') return b.pricePKR - a.pricePKR;
    if (sortBy === 'rating') return b.rating - a.rating;
    return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
  });

  return (
    <section id="shop" className="py-16 bg-[#110306] border-b border-[#3b0e16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.25em] text-[#d4a326] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE CURATED ATELIER</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5ede0]">
            The Doch Collection
          </h2>
          <p className="text-sm text-[#b89f97] mt-3 font-light">
            Every garment is a slow-crafted masterpiece. Hand-embroidered by women master artisans across Makran, Kalat, Quetta, and Dera Bugti.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#2d0a10]">
          
          {/* Category Tabs (Horizontal Scrollable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition ${
                  selectedCategory === cat.value
                    ? 'bg-[#d4a326] text-[#140407] shadow-md'
                    : 'bg-[#1b0509] text-[#b89f97] border border-[#380e16] hover:text-[#f7df94] hover:border-[#d4a326]/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort Selector & Search */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-56">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search stitches, fabrics..."
                className="w-full bg-[#1b0509] border border-[#380e16] rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-[#7d6360] focus:border-[#d4a326] focus:outline-none"
              />
              <Search className="w-3.5 h-3.5 text-[#d4a326] absolute left-2.5 top-2.5" />
            </div>

            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="bg-[#1b0509] border border-[#380e16] text-[#f7df94] text-xs font-semibold rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#d4a326] cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#160408] rounded-2xl border border-[#380e16]">
            <p className="text-lg font-serif-luxury text-white">No heirloom pieces matched your search</p>
            <p className="text-xs text-[#8a6e6b] mt-1">Try resetting the filter or searching for "Silk", "Mosom", or "Bridal"</p>
            <button
              onClick={() => { setSelectedCategory('all'); onSearchChange(''); }}
              className="mt-4 px-5 py-2 bg-[#d4a326] text-[#120305] font-bold text-xs rounded-lg uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {sortedProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="group bg-[#160408] border border-[#380e16] rounded-2xl overflow-hidden hover:border-[#d4a326]/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  {/* Top Image Container */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#100305]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140407] via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity"></div>

                    {/* Craft Time Tag */}
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-[#110306]/90 border border-[#d4a326]/40 text-[#f7df94] text-[10px] font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#d4a326]" />
                      <span>{product.timeToCraft}</span>
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => onToggleWishlist(product)}
                      className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#110306]/80 border border-[#4a151f] text-white hover:text-[#d4a326] transition"
                      aria-label="Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#d4a326] text-[#d4a326]' : ''}`} />
                    </button>

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-x-4 bottom-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button
                        onClick={() => onQuickView(product)}
                        className="w-full py-2.5 bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] font-bold text-xs uppercase tracking-wider rounded-lg shadow-xl flex items-center justify-center gap-2"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>QUICK VIEW & SIZING</span>
                      </button>
                    </div>
                  </div>

                  {/* Details Card */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-[10px] text-[#b89f97] mb-1">
                        <span className="uppercase tracking-widest text-[#d4a326] font-semibold">
                          {product.originRegion}
                        </span>
                        <span className="flex items-center gap-1 text-[#f7df94]">
                          ★ {product.rating.toFixed(1)}
                        </span>
                      </div>

                      <h3 
                        onClick={() => onQuickView(product)}
                        className="font-serif-luxury text-base font-bold text-[#f5ede0] hover:text-[#f7df94] transition cursor-pointer line-clamp-1"
                      >
                        {product.title}
                      </h3>

                      <p className="font-serif-luxury text-xs text-[#a38c82] italic mt-0.5 line-clamp-1" dir="rtl">
                        {product.balochiTitle}
                      </p>

                      <p className="text-[11px] text-[#a38c82] mt-1 line-clamp-2">
                        {product.subtitle}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#2d0a10] flex items-center justify-between">
                      <div>
                        <span className="text-base font-bold text-[#f7df94]">
                          {formatPrice(product.pricePKR, currency)}
                        </span>
                        <p className="text-[10px] text-[#8a6e6b]">
                          {product.stitchStyle.split(' ')[0]} Stitch
                        </p>
                      </div>

                      <button
                        onClick={() => onAddToCart(product, product.sizes[0] || 'M', 1)}
                        className="p-2.5 rounded-xl bg-[#25090e] border border-[#d4a326]/40 hover:bg-[#d4a326] text-[#f7df94] hover:text-[#120305] transition shadow-md"
                        title="Add to Keepsakes"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
