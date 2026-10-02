import React, { useState } from 'react';
import { Sparkles, Eye, ShoppingBag, Layers, Scissors, ShieldCheck, ArrowRight } from 'lucide-react';
import { Product, CurrencyCode, DochCategory, PageId } from '../types';
import { formatPrice } from '../utils/currency';

interface CollectionPageProps {
  products: Product[];
  currency: CurrencyCode;
  onSelectProduct: (p: Product) => void;
  onNavigate: (page: PageId) => void;
  onAddToCart: (p: Product, size: string, q: number) => void;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({
  products,
  currency,
  onSelectProduct,
  onNavigate,
  onAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState<DochCategory | 'all'>('unstitched');

  const tabs: { label: string; value: DochCategory | 'all'; desc: string }[] = [
    { 
      label: 'Unstitched 3-Piece', 
      value: 'unstitched', 
      desc: 'Complete 3-piece luxury sets including pre-embroidered shirt panel, sleeves, trouser border, and pure dupatta in our rigid black keepsake gift box.' 
    },
    { 
      label: 'Kurta Collection', 
      value: 'kurta', 
      desc: 'Signature stitched kurtas featuring traditional Balochi collars, side slits, and iconic geometric chest embroidery on breathable organic cotton.' 
    },
    { 
      label: 'Heavy Embroidery', 
      value: 'heavy-embroidery', 
      desc: 'Museum-grade royal bridal and festive ensembles hand-stitched over 60 to 90 days with pure gold tilla wire and hundreds of micro mirrors.' 
    },
    { 
      label: 'Ceremonial Chadors', 
      value: 'chador', 
      desc: 'Grand 3-meter ceremonial wraps framed with tiers of micro-stitched mirrors and delicate gold fringe tassels.' 
    },
  ];

  const currentTabInfo = tabs.find((t) => t.value === activeTab) || tabs[0];
  const displayedProducts = products.filter((p) => p.category === activeTab);

  return (
    <div className="py-12 bg-[#110306] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.25em] text-[#d4a326] uppercase">
            PAGE 3 • ATELIER SILHOUETTES
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-1">
            The Doch Collection
          </h1>
          <p className="text-xs sm:text-sm text-[#b89f97] mt-2">
            Explore our curated creations grouped by form: Unstitched luxury suits for custom tailoring, ready-to-wear kurtas, and heavy bridal masterpieces.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 no-scrollbar mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 whitespace-nowrap border ${
                activeTab === tab.value
                  ? 'bg-[#d4a326] text-[#140407] border-[#d4a326] shadow-[0_0_15px_rgba(212,163,38,0.3)]'
                  : 'bg-[#180509] text-[#b89f97] border-[#3b0e16] hover:text-[#f7df94]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Category Banner Description */}
        <div className="bg-[#1a050a] border border-[#d4a326]/40 rounded-2xl p-6 sm:p-8 mb-10 text-center max-w-4xl mx-auto">
          <h2 className="font-serif-luxury text-2xl font-bold text-[#f5ede0] mb-2">
            {currentTabInfo.label}
          </h2>
          <p className="text-xs sm:text-sm text-[#cfb687] leading-relaxed max-w-2xl mx-auto">
            {currentTabInfo.desc}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#d4a326]">
            <span>• 100% Hand-Embroidered</span>
            <span>• Direct Baloch Artisan Wages</span>
            <span>• Free Insured Delivery</span>
          </div>
        </div>

        {/* Product Cards for this Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
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

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#110306]/90 border border-[#d4a326]/50 text-[#f7df94] text-[10px] font-semibold">
                  {product.stitchStyle}
                </div>

                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    onClick={() => {
                      onSelectProduct(product);
                      onNavigate('product-detail');
                    }}
                    className="w-full py-2.5 bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] font-bold text-xs uppercase tracking-wider rounded-lg shadow-xl flex items-center justify-center gap-2"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Specifications</span>
                  </button>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-[10px] text-[#b89f97] mb-1">
                    <span className="uppercase tracking-widest text-[#d4a326] font-semibold">
                      {product.originRegion}
                    </span>
                    <span className="text-[#f7df94]">★ {product.rating}</span>
                  </div>

                  <h3
                    onClick={() => {
                      onSelectProduct(product);
                      onNavigate('product-detail');
                    }}
                    className="font-serif-luxury text-base font-bold text-white hover:text-[#f7df94] transition cursor-pointer"
                  >
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#8a6e6b] mt-1">{product.subtitle}</p>
                </div>

                <div className="p-3 bg-[#110305] rounded-xl border border-[#2d0a10] text-[11px] text-[#b89f97] space-y-1">
                  <p><strong className="text-white">Fabric:</strong> {product.fabric}</p>
                  <p><strong className="text-white">Craft Time:</strong> {product.timeToCraft}</p>
                </div>

                <div className="pt-2 border-t border-[#2d0a10] flex items-center justify-between">
                  <div>
                    <span className="text-base font-bold text-[#f7df94]">
                      ${product.priceUSD} USD
                    </span>
                    <span className="text-xs text-[#8a6e6b] ml-1.5">
                      / Rs. {product.pricePKR.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => onAddToCart(product, 'Custom', 1)}
                    className="px-4 py-2 rounded-xl bg-[#25090e] border border-[#d4a326]/40 hover:bg-[#d4a326] text-[#f7df94] hover:text-[#120305] text-xs font-bold transition flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
