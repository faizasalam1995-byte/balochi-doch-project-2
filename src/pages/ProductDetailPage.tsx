import React, { useState } from 'react';
import { 
  ShoppingBag, 
  MessageCircle, 
  Heart, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Scissors, 
  ArrowLeft, 
  Check, 
  Share2, 
  Truck, 
  RotateCcw, 
  ChevronRight 
} from 'lucide-react';
import { Product, CurrencyCode, PageId } from '../types';
import { formatPrice } from '../utils/currency';

interface ProductDetailPageProps {
  product: Product;
  currency: CurrencyCode;
  onAddToCart: (p: Product, size: string, q: number) => void;
  onNavigate: (page: PageId) => void;
  isWishlisted: boolean;
  onToggleWishlist: (p: Product) => void;
  onOpenCustomMeasurement: (p: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  currency,
  onAddToCart,
  onNavigate,
  isWishlisted,
  onToggleWishlist,
  onOpenCustomMeasurement,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('Custom');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImg, setSelectedImg] = useState<string>(product.image);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const images = [product.image, ...(product.additionalImages || [])];

  const handleAddToCartClick = () => {
    onAddToCart(product, selectedSize, quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  // WhatsApp prefilled message
  const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(
    `Hello Balochi Doch Atelier! I would like to order: "${product.title}" (${product.subtitle}). Price: $${product.priceUSD} USD / Rs. ${product.pricePKR.toLocaleString()} PKR. Please assist me with my order and measurements.`
  )}`;

  return (
    <div className="py-10 bg-[#110306] min-h-screen text-[#f5ede0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#b89f97] mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-[#f7df94] transition">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-[#5c1c27]" />
          <button onClick={() => onNavigate('shop')} className="hover:text-[#f7df94] transition">Shop</button>
          <ChevronRight className="w-3.5 h-3.5 text-[#5c1c27]" />
          <span className="text-[#d4a326] truncate max-w-xs">{product.title}</span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#4a151f] bg-[#160408] shadow-2xl">
              <img
                src={selectedImg}
                alt={product.title}
                className="w-full h-full object-cover object-top transition duration-500"
              />

              {/* Craft Duration Pill */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-[#110306]/90 border border-[#d4a326]/50 text-[#f7df94] text-xs font-semibold flex items-center gap-2 shadow-lg">
                <Clock className="w-4 h-4 text-[#d4a326]" />
                <span>{product.timeToCraft}</span>
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => onToggleWishlist(product)}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-[#110306]/80 border border-[#d4a326]/40 text-white hover:text-[#d4a326] transition shadow-lg"
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#d4a326] text-[#d4a326]' : ''}`} />
              </button>
            </div>

            {/* Thumbnail Carousel */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(img)}
                    className={`relative w-24 h-28 rounded-xl overflow-hidden border-2 transition shrink-0 ${
                      selectedImg === img ? 'border-[#d4a326] shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Angle thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Slow Fashion Pledge Notice */}
            <div className="p-4 bg-[#19050a] border border-[#3b0e16] rounded-xl flex items-center gap-3 text-xs text-[#cfb687]">
              <Sparkles className="w-5 h-5 text-[#d4a326] shrink-0" />
              <span>
                <strong>Heirloom Guarantee:</strong> Stitched without machines or stencils. Handcrafted by master Baloch women artisans with 100% fair trade direct compensation.
              </span>
            </div>
          </div>

          {/* Right Column: Pricing, Specs & Order Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Title & Balochi Script */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#d4a326] uppercase mb-1">
                <span>{product.originRegion}</span>
                <span>•</span>
                <span>{product.stitchStyle}</span>
              </div>

              <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white leading-tight">
                {product.title}
              </h1>

              <p className="font-serif-luxury text-base text-[#f7df94]/80 italic mt-1" dir="rtl">
                {product.balochiTitle}
              </p>

              <p className="text-xs sm:text-sm text-[#a38c82] mt-2">
                {product.subtitle}
              </p>
            </div>

            {/* Price Box matching user requirements ($128 USD / Rs. 35,000 PKR) */}
            <div className="p-5 bg-[#1a0509] border border-[#4a151f] rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs text-[#b89f97] block mb-0.5">Atelier Price:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#f7df94]">
                    ${product.priceUSD} USD
                  </span>
                  <span className="text-sm font-semibold text-[#cfb687]">
                    / Rs. {product.pricePKR.toLocaleString()} PKR
                  </span>
                </div>
              </div>

              <div className="text-right text-[11px] text-[#73cf60] font-semibold">
                <span>✓ In Stock</span>
                <p className="text-[10px] text-[#b89f97]">Free Pakistan COD</p>
              </div>
            </div>

            {/* Product Key Highlights */}
            <div className="space-y-2 text-xs text-[#cfb687] bg-[#140407] p-4 rounded-xl border border-[#2d0a10]">
              <div className="flex items-center justify-between">
                <span className="text-[#8a6e6b]">Embroidery Technique:</span>
                <span className="font-semibold text-white">Hand-embroidered ({product.stitchStyle})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8a6e6b]">Fabric Base:</span>
                <span className="font-semibold text-white">{product.fabric}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8a6e6b]">Mirror Work (Sheesha):</span>
                <span className="font-semibold text-[#f7df94]">Authentic hand-fixed glass mirrors</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8a6e6b]">Artisan Handcraft:</span>
                <span className="font-semibold text-white">{product.timeToCraft}</span>
              </div>
            </div>

            {/* Size Selector & Made-to-Measure */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Select Size
                </span>
                <button
                  type="button"
                  onClick={() => onOpenCustomMeasurement(product)}
                  className="text-xs text-[#d4a326] hover:text-[#f7df94] flex items-center gap-1 font-semibold underline"
                >
                  <Scissors className="w-3.5 h-3.5" />
                  <span>Custom Made-to-Measure Guide</span>
                </button>
              </div>

              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 text-xs font-bold rounded-lg border transition ${
                      selectedSize === sz
                        ? 'bg-[#d4a326] text-[#140407] border-[#d4a326] shadow-md'
                        : 'bg-[#1a0509] text-[#b89f97] border-[#3b0e16] hover:border-[#d4a326]/60'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-white">Quantity:</span>
              <div className="flex items-center border border-[#4a151f] rounded-xl bg-[#140407] px-3 py-1.5">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2 text-sm text-[#b89f97] hover:text-[#d4a326]"
                >
                  -
                </button>
                <span className="px-4 text-xs font-bold text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 text-sm text-[#b89f97] hover:text-[#d4a326]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Primary Action Buttons: Add to Cart + Order on WhatsApp (User Requirement 4) */}
            <div className="space-y-3 pt-2">
              
              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCartClick}
                className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center justify-center gap-2 ${
                  addedSuccess
                    ? 'bg-emerald-600 text-white shadow-emerald-900/50'
                    : 'bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] shadow-[0_0_20px_rgba(212,163,38,0.3)]'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Keepsakes Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              {/* Order on WhatsApp Button (User Requirement 4) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest bg-[#154722] hover:bg-[#1a5b2b] text-[#5ce58e] border border-[#25D366]/40 hover:border-[#25D366] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>ORDER ON WHATSAPP (+92 300 1234567)</span>
              </a>
            </div>

            {/* Specifications Detailed Table */}
            <div className="pt-4 border-t border-[#3b0e16]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#d4a326] mb-3">
                Garment Specifications
              </h3>
              <div className="divide-y divide-[#2d0a10] text-xs">
                <div className="py-2 flex justify-between">
                  <span className="text-[#8a6e6b]">Embroidery:</span>
                  <span className="text-white text-right max-w-xs">{product.specs.embroidery}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-[#8a6e6b]">Fabric Details:</span>
                  <span className="text-white text-right max-w-xs">{product.specs.fabricDetail}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-[#8a6e6b]">Mirrorwork:</span>
                  <span className="text-white text-right max-w-xs">{product.specs.mirrorWork}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-[#8a6e6b]">Suit Pieces:</span>
                  <span className="text-white text-right max-w-xs">{product.specs.pieces}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-[#8a6e6b]">Care:</span>
                  <span className="text-white text-right max-w-xs">{product.specs.washCare}</span>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] text-[#b89f97]">
              <div className="flex items-center gap-2 p-3 bg-[#160408] rounded-xl border border-[#2d0a10]">
                <Truck className="w-4 h-4 text-[#d4a326]" />
                <span>Free Pakistan COD (3-5 Days)</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#160408] rounded-xl border border-[#2d0a10]">
                <RotateCcw className="w-4 h-4 text-[#d4a326]" />
                <span>14-Day Artisan Exchange</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
