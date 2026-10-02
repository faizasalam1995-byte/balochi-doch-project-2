import React, { useState } from 'react';
import { Truck, RotateCcw, HelpCircle, Scissors, ChevronDown, ChevronUp, ShieldCheck, Mail, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/products';

export const CustomerCarePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCareTab, setActiveCareTab] = useState<'shipping' | 'sizing' | 'faqs'>('shipping');

  return (
    <div className="py-12 bg-[#110306] min-h-screen text-[#f5ede0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.25em] text-[#d4a326] uppercase">
            PAGE 10 • CLIENT SERVICES & CARE
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-1">
            Customer Care & Sizing Atelier
          </h1>
          <p className="text-sm text-[#b89f97] mt-2">
            Everything you need to know about our slow-fashion shipping, bespoke Balochi Pashk sizing, and heirloom guarantees.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveCareTab('shipping')}
            className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition border flex items-center gap-2 ${
              activeCareTab === 'shipping'
                ? 'bg-[#d4a326] text-[#140407] border-[#d4a326] shadow-lg'
                : 'bg-[#180509] text-[#b89f97] border-[#3b0e16] hover:text-[#f7df94]'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Shipping & Returns</span>
          </button>

          <button
            onClick={() => setActiveCareTab('sizing')}
            className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition border flex items-center gap-2 ${
              activeCareTab === 'sizing'
                ? 'bg-[#d4a326] text-[#140407] border-[#d4a326] shadow-lg'
                : 'bg-[#180509] text-[#b89f97] border-[#3b0e16] hover:text-[#f7df94]'
            }`}
          >
            <Scissors className="w-4 h-4" />
            <span>Balochi Sizing Guide</span>
          </button>

          <button
            onClick={() => setActiveCareTab('faqs')}
            className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition border flex items-center gap-2 ${
              activeCareTab === 'faqs'
                ? 'bg-[#d4a326] text-[#140407] border-[#d4a326] shadow-lg'
                : 'bg-[#180509] text-[#b89f97] border-[#3b0e16] hover:text-[#f7df94]'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </button>
        </div>

        {/* Tab 1: Shipping & Returns */}
        {activeCareTab === 'shipping' && (
          <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Pakistan Shipping */}
              <div className="p-6 bg-[#160408] border border-[#380e16] rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#2e0c13] text-[#d4a326] flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="font-serif-luxury text-xl font-bold text-white">Domestic Delivery (Pakistan)</h3>
                <ul className="text-xs text-[#cfb687] space-y-2">
                  <li>• <strong>Cost:</strong> 100% FREE on all orders across Pakistan.</li>
                  <li>• <strong>Payment:</strong> Cash on Delivery (COD) or Direct Bank Wire.</li>
                  <li>• <strong>Transit Time:</strong> 3 to 5 business days via TCS / Leopard Express.</li>
                  <li>• <strong>Packaging:</strong> Sealed tamper-proof heirloom presentation box.</li>
                </ul>
              </div>

              {/* International Shipping */}
              <div className="p-6 bg-[#160408] border border-[#380e16] rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#2e0c13] text-[#d4a326] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif-luxury text-xl font-bold text-white">International Express (Global)</h3>
                <ul className="text-xs text-[#cfb687] space-y-2">
                  <li>• <strong>Cost:</strong> Flat $15 USD (Rs. 4,200 PKR) worldwide shipping.</li>
                  <li>• <strong>Free Threshold:</strong> Orders over $150 USD ship FREE automatically.</li>
                  <li>• <strong>Courier Partner:</strong> DHL Express / FedEx Priority with door-to-door tracking.</li>
                  <li>• <strong>Transit Time:</strong> 4 to 7 business days to UK, USA, UAE, Europe & Canada.</li>
                </ul>
              </div>
            </div>

            {/* Returns & Exchange Policy */}
            <div className="p-8 bg-[#180509] border border-[#380e16] rounded-3xl space-y-4">
              <div className="flex items-center gap-3">
                <RotateCcw className="w-6 h-6 text-[#d4a326]" />
                <h3 className="font-serif-luxury text-2xl font-bold text-white">14-Day Artisan Exchange Privilege</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#cfb687] leading-relaxed">
                Because each dress involves hundreds of hours of manual labor, we want you to be completely enthralled by your keepsake. If the size or fit is not ideal, you may exchange unworn pieces with tags intact within 14 calendar days of delivery.
              </p>
              <p className="text-xs text-[#b89f97]">
                For bespoke custom-commissioned bridal ensembles made to your unique body measurements, our master tailor will perform any necessary adjustments free of charge.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Sizing Guide */}
        {activeCareTab === 'sizing' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in">
            <div className="bg-[#160408] border border-[#380e16] rounded-3xl p-6 sm:p-8">
              <h3 className="font-serif-luxury text-2xl font-bold text-white mb-2">
                Traditional Balochi Pashk Size Chart
              </h3>
              <p className="text-xs text-[#b89f97] mb-6">
                All measurements are in inches. Traditional Balochi attire has a relaxed, royal drape with ample ease.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#3b0e16] text-[#d4a326]">
                      <th className="py-3 px-4 font-bold uppercase tracking-wider">Size</th>
                      <th className="py-3 px-4 font-bold uppercase tracking-wider">Chest / Bust</th>
                      <th className="py-3 px-4 font-bold uppercase tracking-wider">Shirt Length</th>
                      <th className="py-3 px-4 font-bold uppercase tracking-wider">Shoulder</th>
                      <th className="py-3 px-4 font-bold uppercase tracking-wider">Sleeve</th>
                      <th className="py-3 px-4 font-bold uppercase tracking-wider">Trouser Length</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2d0a10] text-[#cfb687]">
                    <tr>
                      <td className="py-3 px-4 font-bold text-white">XS (Extra Small)</td>
                      <td className="py-3 px-4">34"</td>
                      <td className="py-3 px-4">42"</td>
                      <td className="py-3 px-4">14"</td>
                      <td className="py-3 px-4">20.5"</td>
                      <td className="py-3 px-4">37"</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-white">S (Small)</td>
                      <td className="py-3 px-4">36"</td>
                      <td className="py-3 px-4">43"</td>
                      <td className="py-3 px-4">14.5"</td>
                      <td className="py-3 px-4">21"</td>
                      <td className="py-3 px-4">37.5"</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-white">M (Medium)</td>
                      <td className="py-3 px-4">39"</td>
                      <td className="py-3 px-4">44"</td>
                      <td className="py-3 px-4">15"</td>
                      <td className="py-3 px-4">21.5"</td>
                      <td className="py-3 px-4">38"</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-white">L (Large)</td>
                      <td className="py-3 px-4">42"</td>
                      <td className="py-3 px-4">45"</td>
                      <td className="py-3 px-4">15.5"</td>
                      <td className="py-3 px-4">22"</td>
                      <td className="py-3 px-4">39"</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-white">XL (Extra Large)</td>
                      <td className="py-3 px-4">46"</td>
                      <td className="py-3 px-4">46"</td>
                      <td className="py-3 px-4">16.5"</td>
                      <td className="py-3 px-4">22.5"</td>
                      <td className="py-3 px-4">40"</td>
                    </tr>
                    <tr className="bg-[#24080e]/60">
                      <td className="py-3 px-4 font-bold text-[#f7df94]">Custom Bespoke</td>
                      <td colSpan={5} className="py-3 px-4 text-[#f7df94] font-semibold">
                        Stitched to your exact body measurements upon checkout or via WhatsApp
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: FAQs */}
        {activeCareTab === 'faqs' && (
          <div className="max-w-3xl mx-auto space-y-4 animate-in fade-in">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#160408] border border-[#380e16] rounded-2xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-serif-luxury text-base font-bold text-white">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#d4a326] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#b89f97] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#cfb687] leading-relaxed border-t border-[#2d0a10] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Need Help CTA */}
        <div className="mt-16 p-8 bg-[#180509] border border-[#d4a326]/40 rounded-3xl text-center max-w-2xl mx-auto">
          <h3 className="font-serif-luxury text-2xl font-bold text-white">Have a Specific Custom Inquiry?</h3>
          <p className="text-xs text-[#b89f97] mt-1 mb-5">
            Our atelier bridal coordinators are available around the clock to assist you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] text-[#0d2e16] font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +92 300 1234567</span>
            </a>
            <a
              href="mailto:faizasalam1995@gmail.com"
              className="px-6 py-3 bg-[#2b0a11] border border-[#d4a326]/50 text-[#f7df94] font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Concierge</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
