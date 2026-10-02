import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, Banknote, Sparkles, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem, CurrencyCode, UserProfile } from '../types';
import { formatPrice } from '../utils/currency';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: CurrencyCode;
  discountPercentage: number;
  currentUser: UserProfile | null;
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  discountPercentage,
  currentUser,
  onOrderComplete,
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Form State
  const [fullName, setFullName] = useState(currentUser?.name || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [address, setAddress] = useState(currentUser?.address || '');
  const [city, setCity] = useState(currentUser?.city || 'Quetta');
  const [country, setCountry] = useState(currentUser?.country || 'Pakistan');
  const [postalCode, setPostalCode] = useState('87300');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card' | 'bank' | 'easypaisa'>('cod');
  const [specialInstructions, setSpecialInstructions] = useState('');

  if (!isOpen) return null;

  const subtotalPKR = items.reduce((sum, item) => sum + item.product.pricePKR * item.quantity, 0);
  const discountPKR = subtotalPKR * (discountPercentage / 100);
  const freeShippingThresholdPKR = 41500;
  const shippingPKR = subtotalPKR >= freeShippingThresholdPKR ? 0 : 3500;
  const totalPKR = subtotalPKR - discountPKR + shippingPKR;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const generatedId = 'DOCH-' + Math.floor(100000 + Math.random() * 900000);
      setOrderId(generatedId);
      setStep('success');

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#d4a326', '#f7df94', '#911f2d', '#ffffff']
        });
      } catch {
        // Safe fallback
      }

      onOrderComplete();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => step !== 'success' && onClose()}
      ></div>

      <div className="relative w-full max-w-2xl bg-[#170509] border border-[#d4a326]/50 rounded-2xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95">
        
        {/* Top Accent Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#911f2d] via-[#d4a326] to-[#911f2d]"></div>

        {/* Close Button */}
        {step !== 'success' && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[#b89f97] hover:text-white hover:bg-[#2b0a11] rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {step === 'details' ? (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-[10px] tracking-[0.2em] font-bold text-[#d4a326] uppercase">
                HEIRLOOM NEEDLECRAFT ATELIER
              </span>
              <h2 className="font-serif-luxury text-2xl font-bold text-white mt-0.5">
                Bespoke Checkout & Delivery
              </h2>
              <p className="text-xs text-[#b89f97] mt-1">
                Your order is hand-crafted and packaged with an official certificate of authenticity.
              </p>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-5">
              {/* Customer Contact */}
              <div className="bg-[#100305] p-4 rounded-xl border border-[#380e16] space-y-3">
                <h3 className="text-xs font-bold text-[#f7df94] uppercase tracking-wider flex items-center gap-2">
                  <span>1. Contact Information</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#b89f97] mb-1">Full Recipient Name *</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      placeholder="e.g. Faiza Baloch"
                      className="w-full bg-[#1b0509] border border-[#4a151f] rounded-lg px-3 py-2 text-xs text-white focus:border-[#d4a326] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#b89f97] mb-1">Email Address *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="faiza@example.com"
                      className="w-full bg-[#1b0509] border border-[#4a151f] rounded-lg px-3 py-2 text-xs text-white focus:border-[#d4a326] focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] text-[#b89f97] mb-1">Phone / WhatsApp (For courier dispatch) *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="+92 300 1234567"
                    className="w-full bg-[#1b0509] border border-[#4a151f] rounded-lg px-3 py-2 text-xs text-white focus:border-[#d4a326] focus:outline-none"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-[#100305] p-4 rounded-xl border border-[#380e16] space-y-3">
                <h3 className="text-xs font-bold text-[#f7df94] uppercase tracking-wider flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#d4a326]" />
                  <span>2. Delivery Address</span>
                </h3>
                <div>
                  <label className="block text-[11px] text-[#b89f97] mb-1">Street Address / House / Villa *</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    placeholder="House 12, Street 4, Cantonment"
                    className="w-full bg-[#1b0509] border border-[#4a151f] rounded-lg px-3 py-2 text-xs text-white focus:border-[#d4a326] focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[11px] text-[#b89f97] mb-1">City *</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                      placeholder="Quetta"
                      className="w-full bg-[#1b0509] border border-[#4a151f] rounded-lg px-3 py-2 text-xs text-white focus:border-[#d4a326] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#b89f97] mb-1">Country *</label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                      placeholder="Pakistan"
                      className="w-full bg-[#1b0509] border border-[#4a151f] rounded-lg px-3 py-2 text-xs text-white focus:border-[#d4a326] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#b89f97] mb-1">Postal Code</label>
                    <input
                      type="text"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="87300"
                      className="w-full bg-[#1b0509] border border-[#4a151f] rounded-lg px-3 py-2 text-xs text-white focus:border-[#d4a326] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-[#100305] p-4 rounded-xl border border-[#380e16] space-y-3">
                <h3 className="text-xs font-bold text-[#f7df94] uppercase tracking-wider flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#d4a326]" />
                  <span>3. Payment Preference</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <label 
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition ${
                      paymentMethod === 'cod' 
                        ? 'border-[#d4a326] bg-[#2d0b13] text-[#f7df94]' 
                        : 'border-[#3b0e16] bg-[#160408] text-[#b89f97]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="text-[#d4a326]"
                    />
                    <div>
                      <p className="font-bold text-white">Cash on Delivery</p>
                      <p className="text-[10px]">Pay when dress arrives safely</p>
                    </div>
                  </label>

                  <label 
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition ${
                      paymentMethod === 'card' 
                        ? 'border-[#d4a326] bg-[#2d0b13] text-[#f7df94]' 
                        : 'border-[#3b0e16] bg-[#160408] text-[#b89f97]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="text-[#d4a326]"
                    />
                    <div>
                      <p className="font-bold text-white">Card / International</p>
                      <p className="text-[10px]">Visa, Mastercard, Amex</p>
                    </div>
                  </label>

                  <label 
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition ${
                      paymentMethod === 'bank' 
                        ? 'border-[#d4a326] bg-[#2d0b13] text-[#f7df94]' 
                        : 'border-[#3b0e16] bg-[#160408] text-[#b89f97]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'bank'}
                      onChange={() => setPaymentMethod('bank')}
                      className="text-[#d4a326]"
                    />
                    <div>
                      <p className="font-bold text-white">Direct Bank Wire</p>
                      <p className="text-[10px]">HBL / Meezan Bank</p>
                    </div>
                  </label>

                  <label 
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition ${
                      paymentMethod === 'easypaisa' 
                        ? 'border-[#d4a326] bg-[#2d0b13] text-[#f7df94]' 
                        : 'border-[#3b0e16] bg-[#160408] text-[#b89f97]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'easypaisa'}
                      onChange={() => setPaymentMethod('easypaisa')}
                      className="text-[#d4a326]"
                    />
                    <div>
                      <p className="font-bold text-white">EasyPaisa / JazzCash</p>
                      <p className="text-[10px]">Mobile wallet instant transfer</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Order Final Summary */}
              <div className="flex items-center justify-between p-4 bg-[#23080e] rounded-xl border border-[#4a151f]">
                <div>
                  <span className="text-[11px] text-[#b89f97]">Total payable amount:</span>
                  <p className="text-xl font-bold text-[#f7df94]">{formatPrice(totalPKR, currency)}</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-lg flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#140407]" />
                  <span>{loading ? 'CONFIRMING...' : 'PLACE ORDER'}</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#1b3d1b] border-2 border-emerald-400 text-emerald-300 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(52,211,153,0.3)]">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs font-bold text-[#d4a326] tracking-widest uppercase">
                CONGRATULATIONS & TASHAKOR
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">
                Your Heirloom Order is Placed!
              </h2>
              <p className="text-xs text-[#b89f97] max-w-md mx-auto mt-2">
                Thank you for honoring centuries of Baloch culture and empowering our artisan women in rural Balochistan.
              </p>
            </div>

            <div className="bg-[#100305] p-4 rounded-xl border border-[#380e16] max-w-sm mx-auto text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#b89f97]">Order Reference:</span>
                <span className="font-mono text-[#f7df94] font-bold">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#b89f97]">Recipient:</span>
                <span className="text-white font-medium">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#b89f97]">Estimated Delivery:</span>
                <span className="text-emerald-400 font-medium">5-7 Business Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#b89f97]">Amount:</span>
                <span className="text-[#f7df94] font-bold">{formatPrice(totalPKR, currency)}</span>
              </div>
            </div>

            <p className="text-[11px] text-[#a38c82]">
              A courier tracking link & formal invoice have been dispatched to <span className="text-white">{email}</span>.
            </p>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-lg"
            >
              Continue Exploring Collection
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
