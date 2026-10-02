import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { CartItem, CurrencyCode } from '../types';
import { formatPrice } from '../utils/currency';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: CurrencyCode;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
  discountPercentage: number;
  onApplyPromo: (code: string) => boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  discountPercentage,
  onApplyPromo,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);

  if (!isOpen) return null;

  // Subtotal in PKR
  const subtotalPKR = items.reduce((sum, item) => sum + item.product.pricePKR * item.quantity, 0);
  const discountPKR = subtotalPKR * (discountPercentage / 100);
  
  // Free shipping threshold: $150 USD equivalent in PKR (~41,500 PKR)
  const freeShippingThresholdPKR = 41500;
  const isFreeShipping = subtotalPKR >= freeShippingThresholdPKR;
  const shippingPKR = items.length === 0 || isFreeShipping ? 0 : 3500;
  
  const totalPKR = subtotalPKR - discountPKR + shippingPKR;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;

    const success = onApplyPromo(promoInput.trim());
    if (success) {
      setPromoMessage({ text: 'Promo HERITAGE10 applied: 10% OFF!', isError: false });
    } else {
      setPromoMessage({ text: 'Invalid promo code. Try "HERITAGE10"', isError: true });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6">
        <div className="w-screen max-w-md bg-[#160408] border-l border-[#4a151f] shadow-2xl flex flex-col">
          
          {/* Cart Header */}
          <div className="px-5 py-5 border-b border-[#380e16] flex items-center justify-between bg-[#110306]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#d4a326]" />
              <h2 className="font-serif-luxury text-lg font-bold text-[#f5ede0]">
                Your Doch Keepsakes ({items.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#b89f97] hover:text-white hover:bg-[#2b0a11] rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-[#22070c] border-b border-[#380e16] text-xs">
            {isFreeShipping ? (
              <div className="flex items-center gap-2 text-[#9fe88d] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#73cf60]" />
                <span>You have unlocked FREE Worldwide Insured Shipping!</span>
              </div>
            ) : (
              <div>
                <p className="text-[#f7df94] mb-1.5 font-medium">
                  Add {formatPrice(freeShippingThresholdPKR - subtotalPKR, currency)} more for FREE worldwide delivery
                </p>
                <div className="w-full bg-[#110306] rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-[#d4a326] to-[#f7df94] h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotalPKR / freeShippingThresholdPKR) * 100)}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#24080e] border border-[#d4a326]/40 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-[#d4a326]/60" />
                </div>
                <h3 className="font-serif-luxury text-lg text-[#f5ede0] font-semibold mb-1">
                  Your cart is empty
                </h3>
                <p className="text-xs text-[#b89f97] max-w-xs mb-6">
                  Experience the ancient artistry of Balochistan. Each piece takes 30 to 90 days to hand-embroider.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] font-bold text-xs uppercase tracking-wider rounded-lg transition"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div 
                  key={item.id} 
                  className="flex gap-4 p-3.5 bg-[#1f060b] border border-[#3b0f16] rounded-xl hover:border-[#d4a326]/50 transition"
                >
                  {/* Item Image */}
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-20 h-24 object-cover object-top rounded-lg border border-[#4a151f] shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif-luxury text-xs font-bold text-[#f5ede0] line-clamp-1">
                          {item.product.title}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#967c76] hover:text-red-400 transition"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#d4a326] mt-0.5">
                        Size: <span className="font-semibold">{item.size}</span>
                        {item.customMeasurements && ' (Bespoke Sizing)'}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#310b12]">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#4a151f] rounded-lg bg-[#140306]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 hover:text-[#d4a326] text-[#b89f97] transition"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 hover:text-[#d4a326] text-[#b89f97] transition"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="text-xs font-bold text-[#f7df94]">
                        {formatPrice(item.product.pricePKR * item.quantity, currency)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="p-5 bg-[#110306] border-t border-[#380e16] space-y-4">
              
              {/* Promo code field */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Enter code (HERITAGE10)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="w-full bg-[#1b0509] border border-[#4a151f] rounded-lg px-3 py-2 text-xs text-white uppercase placeholder-[#7d6360] focus:border-[#d4a326] focus:outline-none"
                  />
                  <Tag className="w-3.5 h-3.5 text-[#d4a326] absolute right-3 top-2.5" />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#2d0b13] hover:bg-[#d4a326] text-[#f7df94] hover:text-[#120305] border border-[#d4a326]/50 rounded-lg text-xs font-bold transition"
                >
                  Apply
                </button>
              </form>

              {promoMessage && (
                <p className={`text-[11px] ${promoMessage.isError ? 'text-red-400' : 'text-emerald-400'}`}>
                  {promoMessage.text}
                </p>
              )}

              {/* Order Calculations */}
              <div className="space-y-1.5 text-xs text-[#b89f97]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">{formatPrice(subtotalPKR, currency)}</span>
                </div>
                {discountPercentage > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Atelier Heritage Discount ({discountPercentage}%)</span>
                    <span>-{formatPrice(discountPKR, currency)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Worldwide Courier</span>
                  <span className={shippingPKR === 0 ? 'text-[#73cf60] font-semibold' : 'text-white'}>
                    {shippingPKR === 0 ? 'FREE' : formatPrice(shippingPKR, currency)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#f5ede0] pt-2 border-t border-[#290a10]">
                  <span>Total Due</span>
                  <span className="text-[#f7df94] text-base">{formatPrice(totalPKR, currency)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={onProceedToCheckout}
                className="w-full py-3.5 bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-[0_0_20px_rgba(212,163,38,0.25)] flex items-center justify-center gap-2"
              >
                <span>PROCEED TO SECURE CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-[#7d6360]">
                Authenticity Certificate & Master Needlecraft Guarantee included with every piece.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
