import React, { useState } from 'react';
import { Sparkles, Eye, ShoppingBag, Heart, Search, Filter, RotateCcw } from 'lucide-react';
import { Product, CurrencyCode, DochColor, PageId } from '../types';
import { formatPrice } from '../utils/currency';

interface ShopPageProps {
  products: Product[];
  currency: CurrencyCode;
  onSelectProduct: (p: Product) => void;
  onNavigate: (page: PageId) => void;
  onAddToCart: (p: Product, size: string, q: number) => void;
  wishlistIds: string[];
  onToggleWishlist: (p: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  currency,
  onSelectProduct,
  onNavigate,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
}) => {
  const [selectedStitch, setSelectedStitch] = useState<string>('all');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [selectedFabric, setSelectedFabric] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  const stitchOptions = [
    { label: 'All Stitches', value: 'all' },
    { label: 'Danko Doch', value: 'Danko Doch' },
    { label: 'Quetta Doch', value: 'Quetta Doch' },
    { label: 'Mehrgarh Doch', value: 'Mehrgarh Doch' },
    { label: 'Mosom Doch', value: 'Mosom Doch' },
    { label: 'Jalarr & Sheesha', value: 'Jalarr & Sheesha' },
  ];

  const colorOptions: { label: string; value: DochColor | 'all'; bg: string }[] = [
    { label: 'All Colors', value: 'all', bg: '#3a0f16' },
    { label: 'Maroon', value: 'maroon', bg: '#671424' },
    { label: 'Black', value: 'black', bg: '#111111' },
    { label: 'Gold / Tan', value: 'tan', bg: '#bfa168' },
    { label: 'Emerald Green', value: 'green', bg: '#144c2a' },
    { label: 'Royal Navy', value: 'navy', bg: '#10224b' },
    { label: 'White', value: 'white', bg: '#ececec' },
  ];

  const fabricOptions = [
    { label: 'All Fabrics', value: 'all' },
    { label: 'Premium Cotton', value: 'Premium Cotton' },
    { label: 'Pure Raw Silk', value: 'Pure Raw Silk' },
    { label: 'Silk Velvet', value: 'Silk Velvet' },
    { label: 'Handloom Khaddar', value: 'Handloom Khaddar' },
    { label: 'Crinkle Chiffon', value: 'Crinkle Chiffon' },
  ];

  // Filtering
  const filtered = products.filter((p) => {
    const matchStitch = selectedStitch === 'all' || p.stitchStyle === selectedStitch;
    const matchColor = selectedColor === 'all' || p.color === selectedColor;
    const matchFabric = selectedFabric === 'all' || p.fabric === selectedFabric;
    const matchSearch = searchTerm === '' || 
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.stitchStyle.toLowerCase().includes(searchTerm.toLowerCase());

    let matchPrice = true;
    if (priceRange === 'under100') matchPrice = p.priceUSD < 100;
    else if (priceRange === '100to140') matchPrice = p.priceUSD >= 100 && p.priceUSD <= 140;
    else if (priceRange === 'over140') matchPrice = p.priceUSD > 140;

    return matchStitch && matchColor && matchFabric && matchSearch && matchPrice;
  });

  // Sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
    if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
    if (sortBy === 'rating') return b.rating - a.rating;
    return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
  });

  const resetFilters = () => {
    setSelectedStitch('all');
    setSelectedColor('all');
    setSelectedFabric('all');
    setPriceRange('all');
    setSearchTerm('');
  };

  return (
    <div className="py-12 bg-[#110306] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.25em] text-[#d4a326] uppercase">
            PAGE 2 • THE COMPLETE ATELIER
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-1">
            Shop All Doch Pieces
          </h1>
          <p className="text-xs sm:text-sm text-[#b89f97] mt-2 font-light">
            Filter authentic hand-stitched garments by ancestral stitch, imperial colorways, and pure organic fabrics.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#180509] border border-[#380e16] rounded-2xl p-5 mb-8 space-y-4">
          
          {/* Top row: Stitch Style tabs & Search */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-4 border-b border-[#2d0a10]">
            
            {/* Stitch Style Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {stitchOptions.map((st) => (
                <button
                  key={st.value}
                  onClick={() => setSelectedStitch(st.value)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap transition ${
                    selectedStitch === st.value
                      ? 'bg-[#d4a326] text-[#140407] font-bold shadow-md'
                      : 'bg-[#100305] text-[#b89f97] border border-[#3b0e16] hover:text-[#f7df94]'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-64">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Quetta, Danko, Silk..."
                className="w-full bg-[#100305] border border-[#3b0e16] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-[#7d6360] focus:border-[#d4a326] focus:outline-none"
              />
              <Search className="w-3.5 h-3.5 text-[#d4a326] absolute left-3 top-3" />
            </div>
          </div>

          {/* Bottom row: Color, Fabric, Price Range, and Sort dropdowns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            
            {/* Color Filter */}
            <div>
              <label className="block text-[11px] text-[#b89f97] mb-1 font-medium">Filter by Color:</label>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full bg-[#100305] border border-[#3b0e16] text-[#f7df94] rounded-lg px-2.5 py-2 focus:outline-none focus:border-[#d4a326]"
              >
                {colorOptions.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>

            {/* Fabric Filter */}
            <div>
              <label className="block text-[11px] text-[#b89f97] mb-1 font-medium">Filter by Fabric:</label>
              <select
                value={selectedFabric}
                onChange={(e) => setSelectedFabric(e.target.value)}
                className="w-full bg-[#100305] border border-[#3b0e16] text-[#f7df94] rounded-lg px-2.5 py-2 focus:outline-none focus:border-[#d4a326]"
              >
                {fabricOptions.map((f) => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-[11px] text-[#b89f97] mb-1 font-medium">Price Range:</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full bg-[#100305] border border-[#3b0e16] text-[#f7df94] rounded-lg px-2.5 py-2 focus:outline-none focus:border-[#d4a326]"
              >
                <option value="all">All Prices</option>
                <option value="under100">Under $100 / Rs. 27,000</option>
                <option value="100to140">$100 - $140 (~Rs. 35,000)</option>
                <option value="over140">Over $140 / Rs. 38,000+</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-[11px] text-[#b89f97] mb-1 font-medium">Sort Order:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-[#100305] border border-[#3b0e16] text-[#f7df94] rounded-lg px-2.5 py-2 focus:outline-none focus:border-[#d4a326]"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

          </div>

          {/* Reset Filters trigger */}
          {(selectedStitch !== 'all' || selectedColor !== 'all' || selectedFabric !== 'all' || priceRange !== 'all' || searchTerm !== '') && (
            <div className="flex items-center justify-between pt-2 text-xs">
              <span className="text-[#a38c82]">Showing {sorted.length} filtered results</span>
              <button
                onClick={resetFilters}
                className="text-[#d4a326] hover:text-white flex items-center gap-1 font-semibold"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          )}

        </div>

        {/* Product Grid */}
        {sorted.length === 0 ? (
          <div className="text-center py-20 bg-[#160408] rounded-2xl border border-[#380e16]">
            <p className="text-lg font-serif-luxury text-white">No heirloom pieces matched this filter combination</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-6 py-2.5 bg-[#d4a326] text-[#120305] font-bold text-xs rounded-xl uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sorted.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="bg-[#160408] border border-[#380e16] rounded-2xl overflow-hidden hover:border-[#d4a326]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#100305]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#110306]/90 border border-[#d4a326]/40 text-[#f7df94] text-[10px] font-semibold">
                      {product.stitchStyle}
                    </div>

                    <button
                      onClick={() => onToggleWishlist(product)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-[#110306]/80 border border-[#4a151f] text-white hover:text-[#d4a326] transition"
                      aria-label="Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#d4a326] text-[#d4a326]' : ''}`} />
                    </button>

                    <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button
                        onClick={() => {
                          onSelectProduct(product);
                          onNavigate('product-detail');
                        }}
                        className="w-full py-2.5 bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] font-bold text-xs uppercase tracking-wider rounded-lg shadow-xl flex items-center justify-center gap-2"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Product Detail</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-[10px] text-[#b89f97] mb-1">
                        <span className="uppercase tracking-widest text-[#d4a326] font-semibold">
                          {product.fabric}
                        </span>
                        <span className="text-[#f7df94]">★ {product.rating}</span>
                      </div>

                      <h3
                        onClick={() => {
                          onSelectProduct(product);
                          onNavigate('product-detail');
                        }}
                        className="font-serif-luxury text-base font-bold text-white hover:text-[#f7df94] transition cursor-pointer line-clamp-1"
                      >
                        {product.title}
                      </h3>
                      <p className="text-[11px] text-[#8a6e6b] mt-0.5 line-clamp-1">{product.subtitle}</p>
                    </div>

                    <div className="pt-3 border-t border-[#2d0a10] flex items-center justify-between">
                      <div>
                        <span className="text-base font-bold text-[#f7df94]">
                          ${product.priceUSD} USD
                        </span>
                        <p className="text-[10px] text-[#8a6e6b]">
                          Rs. {product.pricePKR.toLocaleString()} PKR
                        </p>
                      </div>

                      <button
                        onClick={() => onAddToCart(product, 'Custom', 1)}
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
    </div>
  );
};
