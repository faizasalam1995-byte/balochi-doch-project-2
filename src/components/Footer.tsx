import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, ShieldCheck, Heart, Sparkles, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenAuth: (tab: 'login' | 'signup') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenAuth }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer id="contact" className="bg-[#0c0204] text-[#cfb687] border-t border-[#310b12]">
      {/* Newsletter Bar */}
      <div className="border-b border-[#26070d] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#d4a326] uppercase">
            INVITATION TO THE HERITAGE CIRCLE
          </span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-2">
            Receive Exclusive Previews of Limited Bridal Drops
          </h3>
          <p className="text-xs sm:text-sm text-[#b89f97] mt-2 max-w-xl mx-auto">
            Because our master artisans handcraft only 8 to 12 royal bridal ensembles each month, join our private list to receive early reservation privileges.
          </p>

          <form onSubmit={handleNewsletter} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full bg-[#180509] border border-[#4a151f] rounded-xl px-4 py-3 text-xs text-white placeholder-[#7d6360] focus:border-[#d4a326] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-lg shrink-0 flex items-center justify-center gap-2"
            >
              <span>{subscribed ? 'JOINED!' : 'SUBSCRIBE'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {subscribed && (
            <p className="text-xs text-emerald-400 mt-3 font-medium">
              Thank you! Use promo code <span className="font-bold underline text-[#f7df94]">HERITAGE10</span> at checkout for 10% off your first heirloom piece.
            </p>
          )}
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#3a0f16] border border-[#d4a326] rotate-45"></div>
                <div className="relative w-2 h-2 bg-[#d4a326] rotate-45"></div>
              </div>
              <div>
                <span className="font-serif-luxury text-xl font-bold tracking-widest text-[#f5ede0]">
                  BALOCHI DOCH
                </span>
                <span className="block text-[8px] tracking-[0.25em] text-[#d4a326] font-medium uppercase">
                  AUTHENTIC NEEDLECRAFT
                </span>
              </div>
            </div>

            <p className="text-xs text-[#b89f97] leading-relaxed max-w-sm">
              Dedicated to preserving, elevating, and championing centuries of authentic Baloch needlecraft. Every stitch represents ancestral identity, mathematical geometry, and female artisan leadership.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#d4a326]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> 100% Guaranteed Handmade
              </span>
              <span>•</span>
              <span>Fair Trade Certified</span>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div>
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider mb-4">
              Atelier Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#b89f97]">
              <li>
                <button onClick={() => onNavigateSection('shop')} className="hover:text-[#f7df94] transition">
                  Royal Bridal Pashk
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('shop')} className="hover:text-[#f7df94] transition">
                  Siah-Doch Black Silk
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('shop')} className="hover:text-[#f7df94] transition">
                  Mokash Mirror Chadors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('shop')} className="hover:text-[#f7df94] transition">
                  Festive Kurti & Shalwar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('shop')} className="hover:text-[#f7df94] transition">
                  Embroidered Batwa Clutches
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Craft & Heritage */}
          <div>
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider mb-4">
              Our Heritage
            </h4>
            <ul className="space-y-2.5 text-xs text-[#b89f97]">
              <li>
                <button onClick={() => onNavigateSection('craft')} className="hover:text-[#f7df94] transition">
                  The 6 Sacred Stitches
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('about')} className="hover:text-[#f7df94] transition">
                  Meet the Artisans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('craft')} className="hover:text-[#f7df94] transition">
                  Makran & Turbat Clusters
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('about')} className="hover:text-[#f7df94] transition">
                  Slow Fashion Ethics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('craft')} className="hover:text-[#f7df94] transition">
                  Authenticity Verification
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Client Services */}
          <div>
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider mb-4">
              Concierge
            </h4>
            <ul className="space-y-2.5 text-xs text-[#b89f97]">
              <li>
                <button onClick={() => onOpenAuth('login')} className="hover:text-[#f7df94] transition">
                  Login & My Orders
                </button>
              </li>
              <li>
                <button onClick={() => onOpenAuth('signup')} className="hover:text-[#f7df94] transition">
                  Create Atelier Account
                </button>
              </li>
              <li>
                <span className="text-[#cfb687]">WhatsApp: +92 300 8921102</span>
              </li>
              <li>
                <span className="text-[#cfb687]">Email: faizasalam1995@gmail.com</span>
              </li>
              <li>
                <span className="text-[#8a6e6b]">Atelier: Quetta / Turbat, Balochistan</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-10 mt-10 border-t border-[#25080e] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8a6e6b]">
          <p>© 2026 Balochi Doch — Authentic Needlecraft. Handcrafted in Balochistan.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Heirloom Service</span>
            <span>•</span>
            <span>Worldwide Shipping</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
