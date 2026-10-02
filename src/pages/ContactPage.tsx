import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Custom Bridal Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-[#110306] min-h-screen text-[#f5ede0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#d4a326] uppercase">
            PAGE 8 • CONCIERGE & ATELIER LOCATIONS
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Connect With Our Atelier
          </h1>
          <p className="text-sm text-[#b89f97] mt-3">
            Schedule a bespoke bridal consultation, visit our Quetta and Karachi studios, or order directly via WhatsApp.
          </p>
        </div>

        {/* Top Fast WhatsApp Banner */}
        <div className="mb-12 p-6 bg-gradient-to-r from-[#0d2e16] via-[#123e1e] to-[#0d2e16] border border-[#25D366]/40 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#25D366] text-[#0d2e16] flex items-center justify-center font-bold">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Instant WhatsApp Concierge</h3>
              <p className="text-xs text-[#a3e5b7]">Connect directly with our master tailor & craft coordinator: +92 300 1234567</p>
            </div>
          </div>
          <a
            href="https://wa.me/923001234567?text=Hello%20Balochi%20Doch,%20I%20would%20like%20to%20inquire%20about%20a%20dress."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#25D366] hover:bg-[#20b858] text-[#0c2413] font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shrink-0 flex items-center gap-2"
          >
            <span>Start WhatsApp Chat</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-6 bg-[#160408] border border-[#380e16] rounded-3xl p-6 sm:p-8">
            <h3 className="font-serif-luxury text-xl font-bold text-white mb-1">
              Send an Atelier Inquiry
            </h3>
            <p className="text-xs text-[#b89f97] mb-6">
              Fill out your requirements below and our senior consultant will respond within 4 business hours.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#73cf60] mx-auto" />
                <h4 className="font-serif-luxury text-xl text-white">Inquiry Received</h4>
                <p className="text-xs text-[#b89f97] max-w-sm mx-auto">
                  Thank you, {name}. Our atelier manager will get in touch via WhatsApp / Email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 bg-[#d4a326] text-[#140407] font-bold text-xs rounded-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-[#cfb687] font-semibold mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Faiza Baloch"
                    className="w-full bg-[#100305] border border-[#3b0e16] rounded-xl px-4 py-2.5 text-white focus:border-[#d4a326] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#cfb687] font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="faiza@example.com"
                      className="w-full bg-[#100305] border border-[#3b0e16] rounded-xl px-4 py-2.5 text-white focus:border-[#d4a326] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#cfb687] font-semibold mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 300 0000000"
                      className="w-full bg-[#100305] border border-[#3b0e16] rounded-xl px-4 py-2.5 text-white focus:border-[#d4a326] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#cfb687] font-semibold mb-1">Inquiry Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#100305] border border-[#3b0e16] text-[#f7df94] rounded-xl px-3 py-2.5 focus:border-[#d4a326] focus:outline-none"
                  >
                    <option value="Custom Bridal Inquiry">Custom Bridal Inquiry (90-Day Commission)</option>
                    <option value="Size Consultation">Size & Sizing Assistance</option>
                    <option value="International Delivery">International Delivery to UK/USA/UAE</option>
                    <option value="Wholesale / Boutique">Boutique & Museum Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#cfb687] font-semibold mb-1">Your Message / Bespoke Notes *</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your desired colors, event dates, or specific stitch style..."
                    className="w-full bg-[#100305] border border-[#3b0e16] rounded-xl px-4 py-2.5 text-white focus:border-[#d4a326] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Quetta & Karachi Store Locations */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quetta Flagship Store */}
            <div className="p-6 bg-[#160408] border border-[#3b0e16] rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-widest text-[#d4a326] font-bold uppercase">
                  FLAGSHIP ATELIER
                </span>
                <span className="px-2 py-0.5 rounded bg-[#2a0b12] text-[#f7df94] text-[10px] font-bold border border-[#4a151f]">
                  Balochistan
                </span>
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-white">
                Quetta Heritage Boutique
              </h3>
              <p className="text-xs text-[#cfb687] leading-relaxed">
                Suite 4B, Gulistan Road, Cantt Commercial Plaza, Quetta, Balochistan.
              </p>
              <div className="pt-2 text-xs space-y-1 text-[#b89f97]">
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#d4a326]" />
                  <span>Mon – Sat: 11:00 AM – 8:30 PM (Closed Friday Prayer)</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#d4a326]" />
                  <span>Phone: +92 81 2839102</span>
                </p>
              </div>
            </div>

            {/* Karachi Studio */}
            <div className="p-6 bg-[#160408] border border-[#3b0e16] rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-widest text-[#d4a326] font-bold uppercase">
                  DESIGN SUITE & PRIVATE BRIDAL APPOINTMENTS
                </span>
                <span className="px-2 py-0.5 rounded bg-[#2a0b12] text-[#f7df94] text-[10px] font-bold border border-[#4a151f]">
                  Sindh
                </span>
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-white">
                Karachi Zamzama Design Studio
              </h3>
              <p className="text-xs text-[#cfb687] leading-relaxed">
                4th Commercial Lane, Zamzama Boulevard, Phase 5, DHA, Karachi.
              </p>
              <div className="pt-2 text-xs space-y-1 text-[#b89f97]">
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#d4a326]" />
                  <span>Mon – Sat: 12:00 PM – 9:00 PM</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#d4a326]" />
                  <span>Phone: +92 21 35820194</span>
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
