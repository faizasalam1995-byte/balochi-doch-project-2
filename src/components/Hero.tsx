import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Eye, ShieldCheck, Heart } from 'lucide-react';
import { Product, CurrencyCode } from '../types';
import { formatPrice } from '../utils/currency';

interface HeroProps {
  heroProduct: Product;
  currency: CurrencyCode;
  onShopClick: () => void;
  onExploreCraft: () => void;
  onQuickView: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const Hero: React.FC<HeroProps> = ({
  heroProduct,
  currency,
  onShopClick,
  onExploreCraft,
  onQuickView,
  isWishlisted,
  onToggleWishlist,
}) => {
  return (
    <section id="hero" className="relative w-full doch-pattern-bg overflow-hidden border-b border-[#3a0e16] py-10 lg:py-16">
      {/* Subtle ambient luxury light glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#8b1e2e]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d4a326]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heritage Typography & Call to Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-[#d4a326]/60 bg-[#25080e]/90 text-[#f7df94] text-xs font-bold tracking-[0.25em] uppercase w-fit mb-6 shadow-sm">
              <span>HERITAGE</span>
              <span className="text-[#d4a326]">•</span>
              <span>CULTURE</span>
              <span className="text-[#d4a326]">•</span>
              <span>CRAFT</span>
            </div>

            {/* Regal Main Title */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#f5ede0] leading-[1.08] mb-4">
              BALOCHI DOCH
              <span className="block text-[#f5ede0] tracking-wide mt-1">
                EMBROIDERY
              </span>
            </h1>

            {/* Golden Italic Subtitle */}
            <p className="font-italic-accent text-xl sm:text-2xl lg:text-3xl text-[#d4af37] font-normal mb-6">
              Handcrafted Traditional Balochi Dresses
            </p>

            {/* Narrative Description */}
            <p className="text-sm sm:text-base text-[#cfb687] leading-relaxed max-w-xl font-light mb-8">
              Discover authentic Doch embroidery — centuries-old art, meticulously hand-stitched on premium fabrics. Each piece celebrates Baloch heritage, woven with gold thread on deep maroon & black, telling stories through timeless geometric patterns.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onShopClick}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,163,38,0.3)] hover:shadow-[0_0_30px_rgba(212,163,38,0.5)] group rounded-sm"
              >
                <span>SHOP THE COLLECTION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreCraft}
                className="inline-flex items-center justify-center px-7 py-4 bg-[#1e070c]/80 hover:bg-[#2f0c13] text-[#f5ede0] border border-[#d4a326]/70 hover:border-[#f7df94] font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 rounded-sm"
              >
                EXPLORE OUR CRAFT
              </button>
            </div>

            {/* Craft Authenticity Bullet Points */}
            <div className="pt-6 border-t border-[#380e16]/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#d6c4ba]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4a326]"></span>
                <span className="font-medium">Handmade in Balochistan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4a326]"></span>
                <span className="font-medium">100% Authentic Needlework</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4a326]"></span>
                <span className="font-medium">Ethically Crafted by Artisans</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Masterpiece Frame with Architectural Gold Accents */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            
            {/* Yellow / Gold Architectural Framing L-corners matching screenshot */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-[#d4a326] z-20 pointer-events-none"></div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-[#d4a326] z-20 pointer-events-none"></div>

            {/* Main Portrait Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#4a151f] bg-[#1a0509] group">
              
              {/* Product Image */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden">
                <img
                  src={heroProduct.image}
                  alt={heroProduct.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle dark gradient overlay at top and bottom for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#110306] via-transparent to-black/25"></div>

                {/* Wishlist Button floating top right */}
                <button
                  onClick={() => onToggleWishlist(heroProduct)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#160408]/80 backdrop-blur-md border border-[#d4a326]/40 text-[#f5ede0] hover:text-[#d4a326] transition shadow-lg"
                  aria-label="Save to wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#d4a326] text-[#d4a326]' : ''}`} />
                </button>

                {/* Craft Days Floating Badge */}
                <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#110306]/85 backdrop-blur-md border border-[#d4a326]/50 text-[#f7df94] text-[11px] font-semibold tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4a326]" />
                  <span>{heroProduct.timeToCraft}</span>
                </div>

                {/* Bottom Overlay Badge matching the screenshot */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-[#140407] via-[#140407]/95 to-transparent z-20">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <div className="text-[10px] tracking-[0.25em] font-bold text-[#d4a326] uppercase mb-1">
                        HERITAGE MASTERPIECE
                      </div>
                      <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-white leading-snug">
                        {heroProduct.title.toUpperCase()} — {heroProduct.subtitle.toUpperCase()}
                      </h3>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-lg font-bold text-[#f7df94]">
                          {formatPrice(heroProduct.pricePKR, currency)}
                        </span>
                        <span className="text-xs text-[#a38c82] hidden sm:inline">
                          • {heroProduct.stitchStyle}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onQuickView(heroProduct)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#d4a326] hover:bg-[#f7df94] text-[#120305] text-xs font-bold tracking-wider uppercase rounded-sm transition shadow-lg shrink-0"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>VIEW PIECE</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
