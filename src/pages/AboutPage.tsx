import React from 'react';
import { HeartHandshake, ShieldCheck, Globe2, Sparkles, Award, Users } from 'lucide-react';
import { ARTISAN_STATS } from '../data/products';
import { getAssetUrl } from '../utils/assets';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 bg-[#110306] min-h-screen text-[#f5ede0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#d4a326] uppercase">
            PAGE 6 • ABOUT THE ATELIER
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Heirloom Heritage & Artisan Mission
          </h1>
          <p className="text-sm text-[#b89f97] mt-3">
            Balochi Doch was founded with a singular sacred purpose: to bring the uncompromised beauty of ancestral Baloch needlework to the global stage while directly empowering the women artisans who preserve it.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {ARTISAN_STATS.map((s, i) => (
            <div key={i} className="p-6 bg-[#180509] border border-[#380e16] rounded-2xl text-center hover:border-[#d4a326]/50 transition">
              <span className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-[#f7df94] block mb-1">
                {s.value}
              </span>
              <p className="text-xs text-[#b89f97] font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Story Section 1: The Heritage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 bg-[#160408] border border-[#3b0e16] rounded-3xl p-8 sm:p-12">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#d4a326] uppercase">
              PRESERVING CULTURAL GENETICS
            </span>
            <h2 className="font-serif-luxury text-3xl font-bold text-white">
              An 800-Year Legacy Under Threat of Industrialization
            </h2>
            <p className="text-xs sm:text-sm text-[#cfb687] leading-relaxed">
              In recent decades, cheap synthetic digital prints and machine-replicated embroidery have flooded commercial markets, threatening to erase one of humanity's finest slow-craft needlework traditions.
            </p>
            <p className="text-xs sm:text-sm text-[#cfb687] leading-relaxed">
              When master Baloch embroiderers were forced to sell their museum-grade needlework to exploitative middlemen for pennies, centuries of specialized knowledge was in danger of disappearing. Balochi Doch Atelier was created to break this cycle.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#d4a326]/40 shadow-xl">
              <img
                src={getAssetUrl('images/tan_unstitched_box.jpg')}
                alt="Balochi Doch Luxury Unstitched Box"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Story Section 2: Our Ethical Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-[#180509] border border-[#380e16] rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2b0a11] text-[#d4a326] flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-lg font-bold text-white">Direct Ethical Remuneration</h3>
            <p className="text-xs text-[#b89f97] leading-relaxed">
              70% of dress proceeds go directly to the artisan craftswoman and her household. By cutting out 4 to 5 layers of intermediaries, our needleworkers earn up to 4x higher income than conventional bazaar rates.
            </p>
          </div>

          <div className="p-6 bg-[#180509] border border-[#380e16] rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2b0a11] text-[#d4a326] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-lg font-bold text-white">Zero Compromise on Authenticity</h3>
            <p className="text-xs text-[#b89f97] leading-relaxed">
              Every garment in our catalog is rigorously audited for counted-thread accuracy, pure metallic gold tilla wire, and genuine convex mirrors. We do not manufacture—we curate human patience.
            </p>
          </div>

          <div className="p-6 bg-[#180509] border border-[#380e16] rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2b0a11] text-[#d4a326] flex items-center justify-center">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-lg font-bold text-white">Global Diaspora Connection</h3>
            <p className="text-xs text-[#b89f97] leading-relaxed">
              We connect women in remote rural villages across Turbat, Panjgur, and Kalat with patrons across London, Toronto, Dubai, and Dallas, shipping insured slow-fashion keepsakes worldwide.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
