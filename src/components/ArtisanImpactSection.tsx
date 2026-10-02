import React from 'react';
import { HeartHandshake, Award, Globe2, Sparkles, Check } from 'lucide-react';
import { ARTISAN_STATS } from '../data/products';
import { getAssetUrl } from '../utils/assets';

const craftImage = getAssetUrl('images/artisan_craft_hands.jpg');



export const ArtisanImpactSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#120305] border-b border-[#3b0e16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {ARTISAN_STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="p-6 bg-[#1a0509] border border-[#3b0e16] rounded-2xl text-center hover:border-[#d4a326]/50 transition"
            >
              <div className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-[#f7df94] mb-1">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-[#b89f97] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#d4a326]/50 bg-[#24080e] text-[#f7df94] text-xs font-bold tracking-[0.25em] uppercase">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>THE ARTISAN PLEDGE</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#f5ede0] leading-tight">
              Honoring the Matriarchs of Balochistan
            </h2>

            <p className="text-sm text-[#cfb687] leading-relaxed">
              In the quiet courtyards of Turbat, Kalat, and Gwadar, women gather after twilight. With needles finer than eyelashes, they count microscopic warp strands, stitching stories of rain, desert rose, stars, and bravery into pure silks.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#2e0c13] text-[#d4a326] mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">100% Direct Fair Wages</h4>
                  <p className="text-xs text-[#a38c82]">Eliminating predatory middlemen. Every needleworker receives direct payments that support families, schooling, and healthcare.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#2e0c13] text-[#d4a326] mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Slow Sustainable Couture</h4>
                  <p className="text-xs text-[#a38c82]">No factories, no mass machines. Each garment takes 1 to 3 months of deliberate human hands.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#2e0c13] text-[#d4a326] mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Signed Certificate of Authenticity</h4>
                  <p className="text-xs text-[#a38c82]">Every dress includes a sealed heirloom document bearing the name of the artisan craftswoman and her ancestral village.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4a326]/40 shadow-2xl">
              <img
                src={craftImage}
                alt="Baloch Artisan Hands"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#110306] via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#140407]/90 border border-[#4a151f] backdrop-blur-md">
                <p className="text-xs italic text-[#f7df94] font-serif-luxury">
                  "Our grandmother taught our mothers, and our mothers taught us. When someone wears our Doch across the ocean, our songs travel with it."
                </p>
                <p className="text-[10px] text-[#b89f97] mt-1 font-semibold uppercase tracking-wider">
                  — Bibi Mahnaz, Master Needleworker, Turbat District
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
