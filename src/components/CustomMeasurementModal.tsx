import React, { useState } from 'react';
import { X, Scissors, CheckCircle, Info } from 'lucide-react';
import { Product, CustomMeasurements } from '../types';

interface CustomMeasurementModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onSaveMeasurements: (measurements: CustomMeasurements) => void;
}

export const CustomMeasurementModal: React.FC<CustomMeasurementModalProps> = ({
  isOpen,
  onClose,
  product,
  onSaveMeasurements,
}) => {
  const [chest, setChest] = useState('38');
  const [shirtLength, setShirtLength] = useState('44');
  const [shoulder, setShoulder] = useState('15');
  const [sleeveLength, setSleeveLength] = useState('22');
  const [waist, setWaist] = useState('34');
  const [hip, setHip] = useState('42');
  const [trouserLength, setTrouserLength] = useState('38');
  const [notes, setNotes] = useState('Traditional loose Balochi silhouette with classic Pandol pocket placement.');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveMeasurements({
      chest,
      shirtLength,
      shoulder,
      sleeveLength,
      waist,
      hip,
      trouserLength,
      notes,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-lg bg-[#180509] border border-[#d4a326]/60 rounded-2xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#911f2d] via-[#d4a326] to-[#911f2d]"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#b89f97] hover:text-white hover:bg-[#2b0a11] rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#d4a326] uppercase tracking-wider mb-1">
            <Scissors className="w-4 h-4 text-[#d4a326]" />
            <span>Master Tailor Consultation</span>
          </div>

          <h2 className="font-serif-luxury text-2xl font-bold text-white">
            Bespoke Balochi Sizing
          </h2>
          <p className="text-xs text-[#b89f97] mt-1">
            Balochi Doch dresses are traditionally cut with generous ease and royal drape. Enter your preferred measurements in inches.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#f5ede0] mb-1">
                  Chest / Bust (Inches)
                </label>
                <input
                  type="number"
                  value={chest}
                  onChange={(e) => setChest(e.target.value)}
                  className="w-full bg-[#100305] border border-[#4a151f] rounded-lg px-3 py-2 text-xs text-white focus:border-[#d4a326] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#f5ede0] mb-1">
                  Shirt Length (Inches)
                </label>
                <input
                  type="number"
                  value={shirtLength}
                  onChange={(e) => setShirtLength(e.target.value)}
                  className="w-full bg-[#100305] border border-[#4a151f] rounded-lg px-3 py-2 text-xs text-white focus:border-[#d4a326] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#f5ede0] mb-1">
                  Shoulder Width (Inches)
                </label>
                <input
                  type="number"
                  value={shoulder}
                  onChange={(e) => setShoulder(e.target.value)}
                  className="w-full bg-[#100305] border border-[#4a151f] rounded-lg px-3 py-2 text-xs text-white focus:border-[#d4a326] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#f5ede0] mb-1">
                  Sleeve Length (Inches)
                </label>
                <input
                  type="number"
                  value={sleeveLength}
                  onChange={(e) => setSleeveLength(e.target.value)}
                  className="w-full bg-[#100305] border border-[#4a151f] rounded-lg px-3 py-2 text-xs text-white focus:border-[#d4a326] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#f5ede0] mb-1">
                  Waist (Inches)
                </label>
                <input
                  type="number"
                  value={waist}
                  onChange={(e) => setWaist(e.target.value)}
                  className="w-full bg-[#100305] border border-[#4a151f] rounded-lg px-3 py-2 text-xs text-white focus:border-[#d4a326] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#f5ede0] mb-1">
                  Trouser / Shalwar Length
                </label>
                <input
                  type="number"
                  value={trouserLength}
                  onChange={(e) => setTrouserLength(e.target.value)}
                  className="w-full bg-[#100305] border border-[#4a151f] rounded-lg px-3 py-2 text-xs text-white focus:border-[#d4a326] focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#f5ede0] mb-1">
                Custom Tailoring Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#100305] border border-[#4a151f] rounded-lg px-3 py-2 text-xs text-white focus:border-[#d4a326] focus:outline-none"
              />
            </div>

            <div className="p-3 bg-[#110305] rounded-xl border border-[#3b0e16] flex items-center gap-2 text-[11px] text-[#cfb687]">
              <Info className="w-4 h-4 text-[#d4a326] shrink-0" />
              <span>Our master cutter will review your dimensions and contact you via WhatsApp for confirmation.</span>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-lg flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Save Bespoke Measurements</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
