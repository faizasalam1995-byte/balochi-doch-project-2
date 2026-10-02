import React, { useState } from 'react';
import { X, Heart, ShieldCheck, Sparkles, Scissors, Clock, MapPin, Check } from 'lucide-react';
import { Product, CurrencyCode } from '../types';
import { formatPrice } from '../utils/currency';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyCode;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
  onInstantBuy: (product: Product, size: string, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onOpenCustomMeasurement: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  currency,
  onAddToCart,
  onInstantBuy,
  isWishlisted,
  onToggleWishlist,
  onOpenCustomMeasurement,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImg, setSelectedImg] = useState<string>('');
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!isOpen || !product) return null;

  const currentImage = selectedImg || product.image;
  const gallery = [product.image, ...(product.additionalImages || [])];

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-4xl bg-[#170509] border border-[#d4a326]/60 rounded-2xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Gold Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#911f2d] via-[#d4a326] to-[#911f2d]"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#b89f97] hover:text-white hover:bg-[#2b0a11] rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-5 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left Column: Image & Thumbnails */}
            <div className="md:col-span-6 space-y-3">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[#4a151f] bg-[#120305]">
                <img
                  src={currentImage}
                  alt={product.title}
                  className="w-full h-full object-cover object-top transition duration-500"
                />
                
                {/* Floating Artisan Needlework Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#110306]/90 border border-[#d4a326]/60 text-[#f7df94] text-[11px] font-semibold flex items-center gap-1.5 shadow-md">
                  <Clock className="w-3.5 h-3.5 text-[#d4a326]" />
                  <span>{product.timeToCraft}</span>
                </div>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-[#110306]/80 border border-[#d4a326]/50 text-[#f5ede0] hover:text-[#d4a326] transition shadow-md"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#d4a326] text-[#d4a326]' : ''}`} />
                </button>
              </div>

              {/* Thumbnails */}
              {gallery.length > 1 && (
                <div className="flex gap-2">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImg(img)}
                      className={`relative w-16 h-20 rounded-lg overflow-hidden border-2 transition ${
                        currentImage === img ? 'border-[#d4a326]' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Product Narrative & Actions */}
            <div className="md:col-span-6 flex flex-col space-y-4 text-left">
              <div>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] font-bold text-[#d4a326] uppercase">
                  <MapPin className="w-3 h-3" />
                  <span>{product.originRegion}</span>
                </div>
                
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f5ede0] mt-1">
                  {product.title}
                </h2>
                
                <p className="font-serif-luxury text-sm text-[#f7df94]/80 italic mt-0.5" dir="rtl">
                  {product.balochiTitle}
                </p>

                <div className="flex items-center gap-3 mt-3">
                  <span className="text-2xl font-bold text-[#f7df94]">
                    {formatPrice(product.pricePKR, currency)}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#2e0c13] text-[#d4a326] text-xs font-semibold border border-[#d4a326]/30">
                    {product.stitchStyle}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#d6c4ba] leading-relaxed">
                {product.description}
              </p>

              {/* Fabric & Authenticity */}
              <div className="p-3 bg-[#130306] rounded-xl border border-[#3b0e16] text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[#8a6e6b]">Fabric:</span>
                  <span className="text-white font-medium">{product.fabric}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8a6e6b]">Artisan Guild:</span>
                  <span className="text-[#f7df94] font-medium">{product.originRegion}</span>
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-[#f5ede0] uppercase tracking-wider">
                    Select Size
                  </label>
                  <button
                    type="button"
                    onClick={() => onOpenCustomMeasurement(product)}
                    className="text-xs text-[#d4a326] hover:text-[#f7df94] flex items-center gap-1 font-semibold underline"
                  >
                    <Scissors className="w-3.5 h-3.5" />
                    <span>Custom Made-to-Measure Guide</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3.5 py-2 text-xs font-bold rounded-lg border transition ${
                        selectedSize === sz
                          ? 'border-[#d4a326] bg-[#d4a326] text-[#140407]'
                          : 'border-[#4a151f] bg-[#1a0509] text-[#d6c4ba] hover:border-[#d4a326]/60'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & CTA Buttons */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#4a151f] rounded-xl bg-[#130306] px-2 py-1.5">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2 text-sm text-[#b89f97] hover:text-[#d4a326]"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-bold text-white">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2 text-sm text-[#b89f97] hover:text-[#d4a326]"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAdd}
                    className={`flex-1 py-3 px-4 font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-lg flex items-center justify-center gap-2 ${
                      addedAnimation 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-[#2e0c13] hover:bg-[#3d0f1a] text-[#f7df94] border border-[#d4a326]/60'
                    }`}
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Keepsakes!</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-[#d4a326]" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  onClick={() => onInstantBuy(product, selectedSize, quantity)}
                  className="w-full py-3.5 bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-[0_0_20px_rgba(212,163,38,0.3)] flex items-center justify-center gap-2"
                >
                  <span>BUY NOW WITH BESPOKE TAILORING</span>
                </button>
              </div>

              {/* Key Features */}
              <div className="pt-2 border-t border-[#3b0e16]">
                <p className="text-[11px] font-bold text-[#d4a326] uppercase tracking-wider mb-2">
                  Artisan Stitch Signature:
                </p>
                <ul className="space-y-1 text-xs text-[#a38c82]">
                  {product.craftDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#d4a326] mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
