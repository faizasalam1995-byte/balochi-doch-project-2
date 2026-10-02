import React, { useState } from 'react';
import { Sparkles, Shield, Compass, BookOpen, Layers } from 'lucide-react';
import { CRAFT_STITCHES } from '../data/products';
import { getAssetUrl } from '../utils/assets';

const craftDetailImg = getAssetUrl('images/artisan_craft_hands.jpg');



export const CraftHeritageSection: React.FC = () => {
  const [selectedStitch, setSelectedStitch] = useState(CRAFT_STITCHES[0]);

  return (
    <section id="craft" className="py-20 bg-[#160408] border-b border-[#3b0e16] doch-pattern-fine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#d4a326]/50 bg-[#24080e] text-[#f7df94] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <span>ANCESTRAL GEOMETRY</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5ede0]">
            The 6 Sacred Stitches of Doch
          </h2>
          <p className="text-sm text-[#b89f97] mt-3">
            Balochi Doch is not merely embroidery — it is an unwritten language. Women embroiderers count every individual silk strand by eye, passing generational stories from mothers to daughters without blueprints.
          </p>
        </div>

        {/* Interactive Craft Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Stitch Selection List */}
          <div className="lg:col-span-5 space-y-3">
            {CRAFT_STITCHES.map((stitch) => {
              const isSelected = selectedStitch.name === stitch.name;
              return (
                <div
                  key={stitch.name}
                  onClick={() => setSelectedStitch(stitch)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#290a10] border-[#d4a326] shadow-[0_0_15px_rgba(212,163,38,0.2)]'
                      : 'bg-[#1a0509] border-[#380e16] hover:border-[#d4a326]/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="font-serif-luxury text-base font-bold text-white">
                        {stitch.name}
                      </h4>
                      <span className="text-xs text-[#d4a326] font-serif-luxury" dir="rtl">
                        {stitch.urdu}
                      </span>
                    </div>
                    <p className="text-xs text-[#b89f97] mt-1 line-clamp-1">
                      {stitch.desc}
                    </p>
                  </div>

                  <span className="text-[10px] tracking-wider uppercase font-semibold px-2 py-1 rounded bg-[#100305] text-[#f7df94] border border-[#4a151f] shrink-0 ml-3">
                    {stitch.origin}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Deep Dive on Selected Stitch */}
          <div className="lg:col-span-7 bg-[#1c050a] border border-[#d4a326]/50 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              
              {/* Macro Stitch Photograph */}
              <div className="relative aspect-square rounded-xl overflow-hidden border border-[#4a151f]">
                <img
                  src={craftDetailImg}
                  alt={selectedStitch.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white">
                  <span className="text-[10px] uppercase font-bold text-[#d4a326] block">
                    Macro Needlework Specimen
                  </span>
                  Hand-stitched silk floss & micro mirrors
                </div>
              </div>

              {/* Stitch Narrative */}
              <div className="space-y-4 text-left">
                <div className="inline-flex items-center gap-2 text-[10px] tracking-widest text-[#d4a326] uppercase font-bold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Mastery Level: {selectedStitch.difficulty}</span>
                </div>

                <h3 className="font-serif-luxury text-2xl font-bold text-[#f5ede0]">
                  {selectedStitch.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#d6c4ba] leading-relaxed">
                  {selectedStitch.desc}
                </p>

                <div className="pt-4 border-t border-[#3b0e16] space-y-2 text-xs">
                  <div className="flex justify-between text-[#b89f97]">
                    <span>Geographic Origin:</span>
                    <span className="text-white font-medium">{selectedStitch.origin}</span>
                  </div>
                  <div className="flex justify-between text-[#b89f97]">
                    <span>Tradition:</span>
                    <span className="text-[#f7df94] font-medium">800+ Years Oral Blueprint</span>
                  </div>
                  <div className="flex justify-between text-[#b89f97]">
                    <span>Thread Medium:</span>
                    <span className="text-white font-medium">100% Pure Silk & Gold Zari Wire</span>
                  </div>
                </div>

                <div className="p-3 bg-[#110305] rounded-xl border border-[#3b0e16] text-[11px] text-[#cfb687]">
                  "Each geometric triangle represents a mountain, each mirror represents a spring of water in the Makran desert."
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
