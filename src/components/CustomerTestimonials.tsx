import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

export const CustomerTestimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Samina Khan-Durrani',
      city: 'London, United Kingdom',
      occasion: 'Bridal Pashk & Mokash Chador',
      text: 'Words cannot describe opening the cedar box. The Aina mirrorwork and Mosom tilla embroidery are museum grade. Everyone at my wedding in Mayfair asked where this antique masterpiece was made.',
      rating: 5,
      date: 'Purchased August 2026'
    },
    {
      name: 'Dr. Zubaida Baloch',
      city: 'Karachi, Pakistan',
      occasion: 'Siah-Doch Silk Ensemble',
      text: 'As someone born in Makran living in Karachi, finding authentic slow-crafted Doch with true geometric proportions is nearly impossible now. This is 100% genuine heirloom craft. May Allah bless the artisan hands.',
      rating: 5,
      date: 'Purchased July 2026'
    },
    {
      name: 'Nadia & Faraz R.',
      city: 'Dubai, UAE',
      occasion: 'Emerald Dera Bugti Dress',
      text: 'Shipped to our Dubai apartment in 4 days with DHL Express. Custom measurements fit flawlessly without a single alteration needed. The weight of the pure silk and gold thread is pure royal luxury.',
      rating: 5,
      date: 'Purchased September 2026'
    }
  ];

  return (
    <section className="py-20 bg-[#160408] border-b border-[#3b0e16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#d4a326] uppercase mb-2">
            <span>PATRONS OF THE ATELIER</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#f5ede0]">
            Stories of Heirloom Pride
          </h2>
          <p className="text-xs sm:text-sm text-[#b89f97] mt-2">
            Worn by brides, dignitaries, and collectors across 34 countries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#1b050a] border border-[#3b0e16] rounded-2xl flex flex-col justify-between hover:border-[#d4a326]/50 transition shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#d4a326]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4a326]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#4a151f]" />
                </div>

                <p className="text-xs sm:text-sm text-[#cfb687] leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#2d0a10]">
                <h4 className="font-serif-luxury text-sm font-bold text-white">
                  {rev.name}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-[#d4a326] mt-0.5">
                  <MapPin className="w-3 h-3" />
                  <span>{rev.city}</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-[#8a6e6b] mt-2">
                  <span>{rev.occasion}</span>
                  <span>{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
