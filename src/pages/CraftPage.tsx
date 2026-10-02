import React, { useState } from 'react';
import { Sparkles, Layers, ShieldCheck, HeartHandshake, Eye, Award, Check } from 'lucide-react';
import { CRAFT_STITCHES } from '../data/products';
import { getAssetUrl } from '../utils/assets';

export const CraftPage: React.FC = () => {
  const [activeStitch, setActiveStitch] = useState(CRAFT_STITCHES[0]);

  return (
    <div className="py-12 bg-[#110306] min-h-screen text-[#f5ede0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#d4a326] uppercase">
            PAGE 5 • THE ANCESTRAL HERITAGE
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            The Sacred Art of Doch
          </h1>
          <p className="text-sm text-[#b89f97] mt-3 leading-relaxed">
            More than embroidery — Doch is the unwritten poetry of Balochistan. An ancient craft where women artisans count every warp and weft silk thread by eye, without stencils or printed patterns.
          </p>
        </div>

        {/* Narrative Feature: The Story of Baloch Women Artisans */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20 bg-[#170509] border border-[#3b0e16] rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold tracking-widest text-[#d4a326] uppercase">
              ORAL TRADITIONS OF THE COURTYARDS
            </span>
            <h2 className="font-serif-luxury text-3xl font-bold text-white leading-tight">
              Stitching Memory: The Matriarchs of Makran & Kalat
            </h2>
            <p className="text-xs sm:text-sm text-[#cfb687] leading-relaxed">
              In Baloch culture, a girl's first needle is gifted by her grandmother when she turns seven. Gathered on earthen rugs under the shade of date palms in Turbat and Panjgur, women embroider together during the afternoon heat.
            </p>
            <p className="text-xs sm:text-sm text-[#cfb687] leading-relaxed">
              Every dress takes anywhere from 40 to 90 days. Because no written patterns exist, each master craftswoman invents her own variation of ancestral geometric motifs—making every single Doch garment in our atelier a one-of-a-kind museum piece.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#d4a326]">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> 100% Counted Thread</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> Natural Botanical Dyes</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> Fair-Trade Women Guilds</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4a326]/50 shadow-2xl">
              <img
                src={getAssetUrl('images/artisan_craft_hands.jpg')}
                alt="Baloch Artisan Hands with Needle"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                <span className="text-[10px] uppercase font-bold text-[#d4a326] block">
                  Authentic Documentation
                </span>
                Bibi Zohra inserting convex mirror into Mosom web stitch, Turbat Atelier.
              </div>
            </div>
          </div>
        </div>

        {/* The Centuries-Old Geometric Patterns Story */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              The Language of Geometric Motifs
            </h3>
            <p className="text-xs text-[#b89f97] mt-1">
              Every angle, triangle, and circle in Balochi Doch has an ancestral philosophical meaning:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#160408] border border-[#3b0e16] rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#2e0c13] text-[#d4a326] flex items-center justify-center font-bold text-lg mb-3">
                ▲
              </div>
              <h4 className="font-serif-luxury text-lg font-bold text-white">The Mountain Triangle</h4>
              <p className="text-xs text-[#b89f97] mt-2 leading-relaxed">
                Represents the jagged mountain ranges of Balochistan (Koh-e-Suleiman and Makran range). In tribal belief, it symbolizes safety, shelter, and enduring dignity against harsh desert winds.
              </p>
            </div>

            <div className="p-6 bg-[#160408] border border-[#3b0e16] rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#2e0c13] text-[#d4a326] flex items-center justify-center font-bold text-lg mb-3">
                ◆
              </div>
              <h4 className="font-serif-luxury text-lg font-bold text-white">The Talisman Diamond</h4>
              <p className="text-xs text-[#b89f97] mt-2 leading-relaxed">
                The central emblem of Danko and Mehrgarh Doch. Placed symmetrically over the Pandol chest pocket, the interlocking diamond grid acts as a protective shield guarding the wearer's heart.
              </p>
            </div>

            <div className="p-6 bg-[#160408] border border-[#3b0e16] rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#2e0c13] text-[#d4a326] flex items-center justify-center font-bold text-lg mb-3">
                ◎
              </div>
              <h4 className="font-serif-luxury text-lg font-bold text-white">The Aina Mirror Circle</h4>
              <p className="text-xs text-[#b89f97] mt-2 leading-relaxed">
                Real glass mirrors hand-encased with web stitches. Nomadic tradition believed that sunlight bouncing off mirrors deflects envy and negative thoughts, ushering prosperity.
              </p>
            </div>
          </div>
        </div>

        {/* The 6 Sacred Stitches Interactive Explorer */}
        <div className="bg-[#180509] border border-[#d4a326]/40 rounded-3xl p-6 sm:p-10 mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[10px] tracking-widest text-[#d4a326] font-bold uppercase">
              INTERACTIVE SPECIMENS
            </span>
            <h3 className="font-serif-luxury text-2xl font-bold text-white mt-1">
              The 6 Stitches of the Baloch Masters
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Buttons list */}
            <div className="lg:col-span-5 space-y-2.5">
              {CRAFT_STITCHES.map((stitch) => (
                <button
                  key={stitch.name}
                  onClick={() => setActiveStitch(stitch)}
                  className={`w-full p-4 rounded-xl text-left border transition flex items-center justify-between ${
                    activeStitch.name === stitch.name
                      ? 'bg-[#2f0b12] border-[#d4a326] shadow-lg text-[#f7df94]'
                      : 'bg-[#100305] border-[#380e16] text-[#b89f97] hover:border-[#d4a326]/50'
                  }`}
                >
                  <div>
                    <h4 className="font-serif-luxury text-sm font-bold text-white">{stitch.name}</h4>
                    <p className="text-[11px] text-[#cfb687] mt-0.5">{stitch.origin}</p>
                  </div>
                  <span className="text-xs font-serif-luxury text-[#d4a326]" dir="rtl">{stitch.urdu}</span>
                </button>
              ))}
            </div>

            {/* Right: Selected details */}
            <div className="lg:col-span-7 bg-[#120305] border border-[#3b0e16] rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#2d0a10] pb-3">
                <span className="text-xs font-bold text-[#d4a326] tracking-wider uppercase">
                  Technique Profile: {activeStitch.name}
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded bg-[#2e0c13] text-[#f7df94] border border-[#4a151f]">
                  Difficulty: {activeStitch.difficulty}
                </span>
              </div>

              <p className="text-sm text-[#cfb687] leading-relaxed">
                {activeStitch.desc}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-[#190509] rounded-xl border border-[#2d0a10]">
                  <span className="text-[#8a6e6b] block text-[10px]">Originated in:</span>
                  <span className="font-semibold text-white">{activeStitch.origin}</span>
                </div>
                <div className="p-3 bg-[#190509] rounded-xl border border-[#2d0a10]">
                  <span className="text-[#8a6e6b] block text-[10px]">Transmission:</span>
                  <span className="font-semibold text-[#f7df94]">Mother to Daughter (800+ Yrs)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
