import React, { useState } from 'react';
import { X, Lock, Mail, User, Phone, Eye, EyeOff, Sparkles, CheckCircle2 } from 'lucide-react';
import { UserProfile } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'login' | 'signup';
  onLoginSuccess: (user: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'login',
  onLoginSuccess,
}) => {
  const [tab, setTab] = useState<'login' | 'signup'>(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  
  // Login fields
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup fields
  const [name, setName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!loginEmail || !loginPassword) {
      setError('Please provide your email and password');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const user: UserProfile = {
        id: 'usr_' + Date.now(),
        name: loginEmail.split('@')[0].replace('.', ' '),
        email: loginEmail,
        orderCount: 1,
      };
      onLoginSuccess(user);
      onClose();
    }, 600);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name || !signupEmail || !signupPassword) {
      setError('Please fill in all required fields');
      return;
    }

    if (signupPassword.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const user: UserProfile = {
        id: 'usr_' + Date.now(),
        name: name,
        email: signupEmail,
        phone: phone,
        city: city || 'Karachi',
        country: 'Pakistan',
        orderCount: 0,
      };
      onLoginSuccess(user);
      onClose();
    }, 600);
  };

  const handleDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const demoUser: UserProfile = {
        id: 'usr_demo_baloch',
        name: 'Faiza Salam',
        email: 'faizasalam1995@gmail.com',
        phone: '+92 300 1234567',
        city: 'Quetta',
        country: 'Pakistan',
        address: 'Hali Road, Quetta Cantonment',
        orderCount: 2,
      };
      onLoginSuccess(demoUser);
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-[#180509] border border-[#d4a326]/50 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Gold Geometric Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#911f2d] via-[#d4a326] to-[#911f2d]"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#b89f97] hover:text-white hover:bg-[#2b0a11] rounded-full transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="px-6 pt-6 pb-2 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2f0b12] border border-[#d4a326]/50 mb-3 shadow-[0_0_15px_rgba(212,163,38,0.2)]">
            <User className="w-6 h-6 text-[#d4a326]" />
          </div>
          <h2 className="font-serif-luxury text-2xl font-bold text-[#f5ede0]">
            {tab === 'login' ? 'Welcome Back' : 'Join Our Atelier'}
          </h2>
          <p className="text-xs text-[#b89f97] mt-1">
            {tab === 'login' 
              ? 'Access your orders, bespoke measurements & wishlist' 
              : 'Create an account to preserve heirloom Balochi needlecraft'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-4">
          <div className="grid grid-cols-2 p-1 bg-[#100305] border border-[#3b0e16] rounded-xl text-xs font-semibold">
            <button
              onClick={() => { setTab('login'); setError(null); }}
              className={`py-2 rounded-lg transition ${
                tab === 'login' 
                  ? 'bg-[#d4a326] text-[#140407] font-bold shadow-md' 
                  : 'text-[#d6c4ba] hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => { setTab('signup'); setError(null); }}
              className={`py-2 rounded-lg transition ${
                tab === 'signup' 
                  ? 'bg-[#d4a326] text-[#140407] font-bold shadow-md' 
                  : 'text-[#d6c4ba] hover:text-white'
              }`}
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-950/60 border border-red-700/60 text-xs text-red-200">
              {error}
            </div>
          )}

          {tab === 'login' ? (
            /* Login Form */
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#f5ede0] mb-1.5">
                  Email Address or Mobile
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="faiza@example.com"
                    className="w-full bg-[#100305] border border-[#4a151f] rounded-xl px-4 py-2.5 pl-10 text-sm text-[#f5ede0] focus:border-[#d4a326] focus:outline-none transition"
                    required
                  />
                  <Mail className="w-4 h-4 text-[#8a6e6b] absolute left-3.5 top-3" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-[#f5ede0]">
                    Password
                  </label>
                  <button 
                    type="button" 
                    onClick={() => alert("Password reset link will be sent to your email.")}
                    className="text-[11px] text-[#d4a326] hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#100305] border border-[#4a151f] rounded-xl px-4 py-2.5 pl-10 pr-10 text-sm text-[#f5ede0] focus:border-[#d4a326] focus:outline-none transition"
                    required
                  />
                  <Lock className="w-4 h-4 text-[#8a6e6b] absolute left-3.5 top-3" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3 text-[#8a6e6b] hover:text-[#d4a326]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="remember"
                  defaultChecked
                  className="rounded border-[#4a151f] bg-[#100305] text-[#d4a326] focus:ring-0"
                />
                <label htmlFor="remember" className="text-xs text-[#b89f97] cursor-pointer">
                  Remember me on this device
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-lg mt-2 flex items-center justify-center gap-2"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>
          ) : (
            /* Signup Form */
            <form onSubmit={handleSignupSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#f5ede0] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Faiza Baloch"
                    className="w-full bg-[#100305] border border-[#4a151f] rounded-xl px-4 py-2 pl-10 text-sm text-[#f5ede0] focus:border-[#d4a326] focus:outline-none transition"
                    required
                  />
                  <User className="w-4 h-4 text-[#8a6e6b] absolute left-3.5 top-2.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#f5ede0] mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-[#100305] border border-[#4a151f] rounded-xl px-4 py-2 pl-10 text-sm text-[#f5ede0] focus:border-[#d4a326] focus:outline-none transition"
                    required
                  />
                  <Mail className="w-4 h-4 text-[#8a6e6b] absolute left-3.5 top-2.5" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-[#f5ede0] mb-1">
                    Phone / WhatsApp
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 300 0000000"
                      className="w-full bg-[#100305] border border-[#4a151f] rounded-xl px-3 py-2 text-xs text-[#f5ede0] focus:border-[#d4a326] focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#f5ede0] mb-1">
                    City / Country
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Quetta / London"
                    className="w-full bg-[#100305] border border-[#4a151f] rounded-xl px-3 py-2 text-xs text-[#f5ede0] focus:border-[#d4a326] focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#f5ede0] mb-1">
                  Create Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    placeholder="Minimum 6 characters"
                    className="w-full bg-[#100305] border border-[#4a151f] rounded-xl px-4 py-2 pl-10 pr-10 text-sm text-[#f5ede0] focus:border-[#d4a326] focus:outline-none transition"
                    required
                  />
                  <Lock className="w-4 h-4 text-[#8a6e6b] absolute left-3.5 top-2.5" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-2.5 text-[#8a6e6b] hover:text-[#d4a326]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#d4a326] hover:bg-[#f7df94] text-[#140407] font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-lg mt-3 flex items-center justify-center gap-2"
              >
                {loading ? 'Creating Account...' : 'Create Account & Join'}
              </button>
            </form>
          )}

          {/* Quick Demo Login Option */}
          <div className="mt-5 pt-4 border-t border-[#3b0e16] text-center">
            <button
              onClick={handleDemoLogin}
              className="w-full py-2.5 px-4 rounded-xl border border-[#d4a326]/50 bg-[#25090e] hover:bg-[#340c14] text-xs font-semibold text-[#f7df94] transition flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4a326]" />
              <span>One-Click Fast Demo Login</span>
            </button>
            <p className="text-[10px] text-[#8a6e6b] mt-2">
              Protected by 256-bit encryption. Hand-stitched with love in Balochistan.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
