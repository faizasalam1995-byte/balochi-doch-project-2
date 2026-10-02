import React, { useState } from 'react';
import { X, Search, Sparkles, ArrowRight } from 'lucide-react';
import { Product, CurrencyCode } from '../types';
import { formatPrice } from '../utils/currency';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  currency: CurrencyCode;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  currency,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const quickTags = ['Bridal Doch', 'Siah-Doch', 'Pure Silk', 'Mosom', 'Mokash Chador', 'Batwa'];

  const results = query.trim() === '' ? [] : products.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.stitchStyle.toLowerCase().includes(q) ||
      p.fabric.toLowerCase().includes(q) ||
      p.originRegion.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-2xl bg-[#170509] border border-[#d4a326]/60 rounded-2xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#3b0e16] flex items-center gap-3 bg-[#110306]">
          <Search className="w-5 h-5 text-[#d4a326]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Balochi Doch by fabric, stitch style, bridal, region..."
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-[#7d6360] focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-[#b89f97] hover:text-white"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-[#b89f97] hover:text-white hover:bg-[#2b0a11] rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Tags */}
        <div className="px-5 py-3 bg-[#1e070c] border-b border-[#380e16] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[#8a6e6b] shrink-0">Popular:</span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-full bg-[#110306] border border-[#4a151f] text-[#cfb687] hover:text-[#f7df94] hover:border-[#d4a326] transition whitespace-nowrap text-[11px]"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-[#8a6e6b] text-xs">
              <Sparkles className="w-5 h-5 text-[#d4a326] mx-auto mb-2 opacity-60" />
              Type a stitch name, fabric, or city (e.g., "Makran", "Velvet", "Mosom")
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8 text-[#8a6e6b] text-xs">
              No matching heirloom needlework found for "{query}".
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="flex items-center gap-4 p-3 rounded-xl bg-[#110306] border border-[#380e16] hover:border-[#d4a326] transition cursor-pointer group"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-14 h-16 object-cover object-top rounded-lg border border-[#4a151f]"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif-luxury text-sm font-bold text-white group-hover:text-[#f7df94] transition">
                      {product.title}
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#2b0a11] text-[#d4a326] border border-[#d4a326]/30">
                      {product.originRegion.split(' ')[0]}
                    </span>
                  </div>
                  <p className="text-xs text-[#b89f97] mt-0.5 line-clamp-1">{product.subtitle}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#f7df94]">
                    {formatPrice(product.pricePKR, currency)}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#8a6e6b] group-hover:text-[#d4a326] transition group-hover:translate-x-1 mt-1 ml-auto" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
