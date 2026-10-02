import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  Truck, 
  ShieldCheck, 
  CreditCard, 
  Sparkles, 
  CheckCircle, 
  ArrowLeft,
  Globe,
  Tag
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem, CurrencyCode, UserProfile, PageId } from '../types';
import { formatPrice } from '../utils/currency';

interface CheckoutPageProps {
  items: CartItem[];
  currency: CurrencyCode;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onNavigate: (page: PageId) => void;
  currentUser: UserProfile | null;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  items,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigate,
  currentUser,
}) => {
  const [shippingRegion, setShippingRegion] = useState<'pakistan' | 'international'>('pakistan');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoInput, setPromoInput] = useState('');
  const [promoMsg, setPromoMsg] = useState<{ text: string; isError: boolean } | null>(null);

  // Form State
  const [name, setName] = useState(currentUser?.name || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [address, setAddress] = useState(currentUser?.address || '');
  const [city, setCity] = useState(currentUser?.city || 'Quetta');
  const [country, setCountry] = useState(shippingRegion === 'pakistan' ? 'Pakistan' : 'United Arab Emirates');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card' | 'bank' | 'easypaisa'>('cod');
  
  // Custom Tailoring measurements
  const [chest, setChest] = useState('38');
  const [length, setLength] = useState('44');
  const [notes, setNotes] = useState('');

  const [loading, setLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState('');

  // Calculations:
  // Subtotal in USD & PKR
  const subtotalUSD = items.reduce((sum, i) => sum + i.product.priceUSD * i.quantity, 0);
  const subtotalPKR = items.reduce((sum, i) => sum + i.product.pricePKR * i.quantity, 0);

  // Shipping rules (User requirement 9: Pakistan COD + International Shipping $15)
  const shippingUSD = shippingRegion === 'pakistan' ? 0 : 15;
  const shippingPKR = shippingRegion === 'pakistan' ? 0 : 4200; // $15 USD in PKR

  const discountAmountUSD = subtotalUSD * (discountPercent / 100);
  const discountAmountPKR = subtotalPKR * (discountPercent / 100);

  const totalUSD = subtotalUSD - discountAmountUSD + shippingUSD;
  const totalPKR = subtotalPKR - discountAmountPKR + shippingPKR;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim().toUpperCase() === 'HERITAGE10') {
      setDiscountPercent(10);
      setPromoMsg({ text: 'Code HERITAGE10 applied: 10% Off!', isError: false });
    } else {
      setPromoMsg({ text: 'Invalid promo code. Try "HERITAGE10"', isError: true });
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const newId = 'DOCH-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmedOrderId(newId);
      setOrderComplete(true);

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#d4a326', '#f7df94', '#911f2d', '#ffffff']
        });
      } catch {
        // Safe fallback
      }

      onClearCart();
    }, 1000);
  };

  if (orderComplete) {
    return (
      <div className="py-20 bg-[#110306] min-h-screen text-[#f5ede0]">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-[#1b3d1b] border-2 border-emerald-400 text-emerald-300 flex items-center justify-center mx-auto shadow-2xl">
            <CheckCircle className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-bold text-[#d4a326] tracking-widest uppercase">
              TASHAKOR • ORDER CONFIRMED
            </span>
            <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white mt-2">
              Your Baloch Heirloom is Being Prepared
            </h1>
            <p className="text-xs sm:text-sm text-[#b89f97] max-w-md mx-auto mt-2">
              Thank you for championing our master artisan women. Your order has entered our Quetta dispatch center.
            </p>
          </div>

          <div className="bg-[#180509] border border-[#380e16] rounded-2xl p-6 text-left space-y-3 text-xs max-w-md mx-auto">
            <div className="flex justify-between">
              <span className="text-[#8a6e6b]">Order Reference:</span>
              <span className="font-mono text-[#f7df94] font-bold">{confirmedOrderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8a6e6b]">Recipient:</span>
              <span className="text-white font-semibold">{name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8a6e6b]">Destination:</span>
              <span className="text-white">{city}, {country}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8a6e6b]">Delivery Type:</span>
              <span className="text-[#73cf60] font-semibold">
                {shippingRegion === 'pakistan' ? 'Pakistan Express COD (Free)' : 'International DHL Courier ($15 USD)'}
              </span>
            </div>
            <div className="flex justify-between border-t border-[#2d0a10] pt-2 text-sm font-bold text-[#f7df94]">
              <span>Total Paid / Due:</span>
              <span>${totalUSD} USD / Rs. {totalPKR.toLocaleString()} PKR</span>
            </div>
          </div>

          <p className="text-xs text-[#a38c82]">
            Detailed tracking & artisan certificate details sent to <strong className="text-white">{email}</strong>.
          </p>

          <button
            onClick={() => onNavigate('shop')}
            className="px-8 py-3.5 bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-xl"
          >
            Continue Browsing Atelier
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#110306] min-h-screen text-[#f5ede0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.25em] text-[#d4a326] uppercase">
            PAGE 9 • CART & SECURE CHECKOUT FLOW
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white mt-1">
            Order Review & Worldwide Delivery
          </h1>
          <p className="text-xs sm:text-sm text-[#b89f97] mt-1">
            Pakistan COD Free Delivery • International Insured Courier $15 USD
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-[#160408] rounded-3xl border border-[#380e16] max-w-xl mx-auto p-8">
            <ShoppingBag className="w-16 h-16 text-[#d4a326]/60 mx-auto mb-4" />
            <h3 className="font-serif-luxury text-xl font-bold text-white mb-2">Your Keepsakes Bag is Empty</h3>
            <p className="text-xs text-[#b89f97] mb-6">Explore our curated collections of authentic Balochi Doch dresses.</p>
            <button
              onClick={() => onNavigate('shop')}
              className="px-6 py-3 bg-[#d4a326] text-[#140407] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg"
            >
              Explore Shop
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Cart Items & Sizing Form */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Items Card */}
              <div className="bg-[#160408] border border-[#380e16] rounded-2xl p-6 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#d4a326] flex items-center justify-between">
                  <span>Selected Keepsakes ({items.reduce((s, i) => s + i.quantity, 0)})</span>
                  <span className="text-[11px] text-[#8a6e6b]">Slow-Fashion Certified</span>
                </h3>

                <div className="divide-y divide-[#2d0a10]">
                  {items.map((item) => (
                    <div key={item.id} className="py-4 flex gap-4 items-center">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-16 h-20 object-cover object-top rounded-lg border border-[#3b0e16]"
                      />
                      <div className="flex-1">
                        <h4 className="font-serif-luxury text-sm font-bold text-white">{item.product.title}</h4>
                        <p className="text-xs text-[#cfb687]">{item.product.subtitle}</p>
                        <p className="text-[11px] text-[#d4a326] mt-1">Size: <strong>{item.size}</strong></p>
                      </div>

                      <div className="flex items-center gap-2 border border-[#3b0e16] rounded-lg px-2 py-1 bg-[#100305]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="text-[#b89f97] hover:text-[#d4a326] text-xs px-1"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="text-[#b89f97] hover:text-[#d4a326] text-xs px-1"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-bold text-[#f7df94]">
                          ${item.product.priceUSD * item.quantity} USD
                        </span>
                        <p className="text-[10px] text-[#8a6e6b]">
                          Rs. {(item.product.pricePKR * item.quantity).toLocaleString()}
                        </p>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-red-400 hover:text-red-300 text-[11px] mt-1 flex items-center gap-0.5 ml-auto"
                        >
                          <Trash2 className="w-3 h-3" /> Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bespoke Measurements & Tailoring Notes */}
              <div className="bg-[#160408] border border-[#380e16] rounded-2xl p-6 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#d4a326]">
                  Optional Custom Measurements (Inches)
                </h3>
                <p className="text-xs text-[#b89f97]">
                  If you selected "Custom" size, provide your chest and desired shirt length. Our master cutter will confirm via WhatsApp.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[11px] text-[#cfb687] mb-1">Chest / Bust (Inches)</label>
                    <input
                      type="number"
                      value={chest}
                      onChange={(e) => setChest(e.target.value)}
                      className="w-full bg-[#100305] border border-[#3b0e16] rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#cfb687] mb-1">Shirt Length (Inches)</label>
                    <input
                      type="number"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="w-full bg-[#100305] border border-[#3b0e16] rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Checkout Form & Pricing Rules */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Shipping Destination Rule (Pakistan vs International $15) */}
              <div className="bg-[#160408] border border-[#380e16] rounded-2xl p-5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#d4a326] block">
                  Select Delivery Zone
                </span>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      setShippingRegion('pakistan');
                      setCountry('Pakistan');
                    }}
                    className={`p-3 rounded-xl border text-left transition ${
                      shippingRegion === 'pakistan'
                        ? 'bg-[#290a10] border-[#d4a326] text-[#f7df94]'
                        : 'bg-[#100305] border-[#3b0e16] text-[#b89f97]'
                    }`}
                  >
                    <p className="font-bold text-white">Pakistan (All Cities)</p>
                    <p className="text-[11px] text-[#73cf60] mt-0.5">FREE Delivery + COD</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setShippingRegion('international');
                      setCountry('United Arab Emirates');
                    }}
                    className={`p-3 rounded-xl border text-left transition ${
                      shippingRegion === 'international'
                        ? 'bg-[#290a10] border-[#d4a326] text-[#f7df94]'
                        : 'bg-[#100305] border-[#3b0e16] text-[#b89f97]'
                    }`}
                  >
                    <p className="font-bold text-white">International Express</p>
                    <p className="text-[11px] text-[#f7df94] mt-0.5">Flat $15 USD (DHL)</p>
                  </button>
                </div>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handlePlaceOrder} className="bg-[#160408] border border-[#380e16] rounded-2xl p-6 space-y-4 text-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#d4a326]">
                  Delivery Address & Payment
                </h3>

                <div>
                  <label className="block text-[#cfb687] font-semibold mb-1">Full Recipient Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Faiza Baloch"
                    className="w-full bg-[#100305] border border-[#3b0e16] rounded-xl px-3 py-2 text-white focus:border-[#d4a326] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[#cfb687] font-semibold mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="faiza@example.com"
                      className="w-full bg-[#100305] border border-[#3b0e16] rounded-xl px-3 py-2 text-white focus:border-[#d4a326] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#cfb687] font-semibold mb-1">WhatsApp Phone *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 300 0000000"
                      className="w-full bg-[#100305] border border-[#3b0e16] rounded-xl px-3 py-2 text-white focus:border-[#d4a326] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#cfb687] font-semibold mb-1">Street Address *</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="House 14, Street 5, Cantt"
                    className="w-full bg-[#100305] border border-[#3b0e16] rounded-xl px-3 py-2 text-white focus:border-[#d4a326] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[#cfb687] font-semibold mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Quetta"
                      className="w-full bg-[#100305] border border-[#3b0e16] rounded-xl px-3 py-2 text-white focus:border-[#d4a326] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#cfb687] font-semibold mb-1">Country *</label>
                    <input
                      type="text"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Pakistan"
                      className="w-full bg-[#100305] border border-[#3b0e16] rounded-xl px-3 py-2 text-white focus:border-[#d4a326] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Promo Code Input */}
                <div className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="Coupon Code (HERITAGE10)"
                      className="flex-1 bg-[#100305] border border-[#3b0e16] rounded-lg px-3 py-1.5 text-xs text-white uppercase placeholder-[#7d6360]"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="px-3 py-1.5 bg-[#2b0a11] hover:bg-[#d4a326] text-[#f7df94] hover:text-[#120305] rounded-lg font-bold border border-[#d4a326]/40"
                    >
                      Apply
                    </button>
                  </div>
                  {promoMsg && (
                    <p className={`text-[11px] mt-1 ${promoMsg.isError ? 'text-red-400' : 'text-emerald-400'}`}>
                      {promoMsg.text}
                    </p>
                  )}
                </div>

                {/* Totals Summary */}
                <div className="pt-4 border-t border-[#2d0a10] space-y-2 text-xs">
                  <div className="flex justify-between text-[#b89f97]">
                    <span>Items Subtotal:</span>
                    <span className="text-white">${subtotalUSD} USD / Rs. {subtotalPKR.toLocaleString()} PKR</span>
                  </div>
                  {discountPercent > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Heritage Privilege ({discountPercent}%):</span>
                      <span>-${discountAmountUSD.toFixed(0)} USD</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#b89f97]">
                    <span>Shipping ({shippingRegion === 'pakistan' ? 'Pakistan Insured' : 'International DHL Courier'}):</span>
                    <span className={shippingUSD === 0 ? 'text-[#73cf60] font-bold' : 'text-white'}>
                      {shippingUSD === 0 ? 'FREE (Included)' : '$15 USD / Rs. 4,200 PKR'}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#2d0a10] text-base font-bold text-[#f7df94]">
                    <span>Total Due:</span>
                    <span>${totalUSD} USD / Rs. {totalPKR.toLocaleString()} PKR</span>
                  </div>
                </div>

                {/* Submit Order */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-xl flex items-center justify-center gap-2 mt-4"
                >
                  <Sparkles className="w-4 h-4 text-[#140407]" />
                  <span>{loading ? 'CONFIRMING ORDER...' : 'PLACE BESPOKE ORDER'}</span>
                </button>

                <p className="text-[10px] text-center text-[#8a6e6b]">
                  Payment method: {shippingRegion === 'pakistan' ? 'Cash on Delivery (COD) / Bank Transfer' : 'International Card / Wire'}.
                </p>
              </form>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
