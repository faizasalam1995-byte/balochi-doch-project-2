import React, { useState, useRef, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  User, 
  Heart, 
  Menu, 
  X, 
  ChevronDown, 
  LogOut, 
  Package, 
  Sparkles,
  Phone,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { CurrencyCode, CURRENCIES, UserProfile, PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  currency: CurrencyCode;
  onCurrencyChange: (c: CurrencyCode) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenAuth: (initialTab?: 'login' | 'signup') => void;
  currentUser: UserProfile | null;
  onLogout: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  currency,
  onCurrencyChange,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenAuth,
  currentUser,
  onLogout,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const currencyRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (currencyRef.current && !currencyRef.current.contains(event.target as Node)) {
        setCurrencyDropdownOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems: { label: string; page: PageId }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'SHOP', page: 'shop' },
    { label: 'DOCH COLLECTION', page: 'collection' },
    { label: 'OUR CRAFT', page: 'craft' },
    { label: 'ABOUT', page: 'about' },
    { label: 'JOURNAL', page: 'journal' },
    { label: 'CONTACT', page: 'contact' },
    { label: 'CUSTOMER CARE', page: 'care' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#140407]/95 backdrop-blur-md border-b border-[#380e15] transition-all">
      {/* Top Announcement Bar - Pure authentic banner, completely free of any Download ZIP button */}
      <div className="bg-[#0b0204] text-[#d4a326] text-xs py-2 px-3 sm:px-4 border-b border-[#25070c]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1 text-center font-medium tracking-wider">
          <div className="hidden lg:flex items-center gap-2 text-[#bfa168] text-[11px] uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a326] inline-block animate-pulse"></span>
            AUTHENTIC BALOCHI NEEDLECRAFT
          </div>

          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs">
            <span className="text-[#f7df94] font-semibold tracking-wider">
              FREE WORLDWIDE SHIPPING ON ORDERS OVER $150
            </span>
            <span className="text-[#70303b]">•</span>
            <span className="text-[#d4af37]">
              HANDCRAFTED BY BALOCH ARTISANS
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px] text-[#cfb687]">
            <a 
              href="https://wa.me/923001234567?text=Hello%20Balochi%20Doch,%20I%20would%20like%20to%20inquire%20about%20a%20dress."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:text-[#5ce58e] transition font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp: +92 300 1234567
            </a>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#d4a326]" /> 100% Certified Heirloom
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Logo */}
          <div 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none shrink-0"
          >
            {/* Traditional Geometric Doch Diamond Emblem */}
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
              <div className="absolute inset-0 bg-[#3a0f16] border border-[#d4a326] rotate-45 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_12px_rgba(212,163,38,0.25)]"></div>
              <div className="absolute w-5 h-5 sm:w-6 sm:h-6 border border-[#f7df94]/80 rotate-45"></div>
              <div className="relative w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#d4a326] rotate-45"></div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif-luxury text-base sm:text-xl lg:text-2xl font-bold tracking-wider sm:tracking-widest text-[#f5ede0] group-hover:text-[#f7df94] transition-colors leading-none">
                BALOCHI DOCH
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] text-[#d4a326] font-medium mt-0.5 sm:mt-1 uppercase">
                AUTHENTIC NEEDLECRAFT
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (Visible on large screens) */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className={`text-xs tracking-[0.14em] font-medium transition-all duration-200 py-1 relative ${
                    isActive 
                      ? 'text-[#f7df94] font-bold' 
                      : 'text-[#d6c4ba] hover:text-[#f7df94]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4a326] shadow-[0_0_8px_#d4a326]"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5 shrink-0">
            
            {/* Currency Selector (Desktop / Tablet) */}
            <div className="relative hidden md:block" ref={currencyRef}>
              <button
                type="button"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded border border-[#4a151f] bg-[#24090e]/90 text-[#f7df94] hover:border-[#d4a326] transition shadow-sm"
                aria-label="Select Currency"
              >
                <span>{currency === 'USD' ? 'USD $' : currency === 'PKR' ? 'PKR Rs.' : CURRENCIES[currency].label}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#d4a326]" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-[#1f060b] border border-[#d4a326]/40 rounded-lg shadow-2xl py-1 z-50 animate-in fade-in zoom-in-95">
                  {(Object.keys(CURRENCIES) as CurrencyCode[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        onCurrencyChange(c);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition ${
                        currency === c 
                          ? 'bg-[#3b0f16] text-[#f7df94] font-bold' 
                          : 'text-[#d6c4ba] hover:bg-[#2b0a10] hover:text-white'
                      }`}
                    >
                      <span>{CURRENCIES[c].label}</span>
                      <span className="text-[10px] text-[#b09667]">{CURRENCIES[c].symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="p-1.5 sm:p-2 text-[#d6c4ba] hover:text-[#f7df94] hover:bg-[#2a0a10] rounded-full transition"
              title="Search collection"
              aria-label="Search collection"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Auth / User Profile Button (Desktop only, mobile has it in drawer) */}
            <div className="relative hidden md:block" ref={userMenuRef}>
              {currentUser ? (
                <div>
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-full border border-[#d4a326]/40 bg-[#25090e] hover:border-[#d4a326] transition"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#d4a326] text-[#120305] flex items-center justify-center font-bold text-xs uppercase">
                      {currentUser.name.charAt(0)}
                    </div>
                    <span className="text-xs text-[#f5ede0] max-w-[80px] truncate font-medium">
                      {currentUser.name.split(' ')[0]}
                    </span>
                    <ChevronDown className="w-3 h-3 text-[#d4a326]" />
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-[#1f060b] border border-[#d4a326]/40 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in">
                      <div className="px-4 py-2 border-b border-[#3b0e16]">
                        <p className="text-xs font-semibold text-white truncate">{currentUser.name}</p>
                        <p className="text-[10px] text-[#b89f97] truncate">{currentUser.email}</p>
                      </div>
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          onNavigate('checkout');
                        }}
                        className="w-full text-left px-4 py-2 text-xs text-[#d6c4ba] hover:bg-[#2e0b12] hover:text-white flex items-center gap-2"
                      >
                        <Package className="w-3.5 h-3.5 text-[#d4a326]" />
                        <span>My Orders</span>
                      </button>
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          onLogout();
                        }}
                        className="w-full text-left px-4 py-2 text-xs text-red-300 hover:bg-red-950/40 flex items-center gap-2"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => onOpenAuth('login')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#d4a326]/60 bg-[#2b0a11]/90 hover:bg-[#d4a326] text-[#f7df94] hover:text-[#140407] transition-all duration-300 font-semibold text-xs tracking-wider group shadow-[0_0_10px_rgba(212,163,38,0.15)]"
                >
                  <User className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>LOGIN / SIGN UP</span>
                </button>
              )}
            </div>

            {/* Cart Button with Golden Badge */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-1.5 p-1.5 sm:p-2 text-[#f7df94] hover:text-white bg-[#2e0b12] hover:bg-[#3d0f18] border border-[#d4a326]/40 rounded-full transition shrink-0"
              title="Shopping Cart"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a326]" />
              <span className="w-4 h-4 sm:w-5 sm:h-5 bg-[#d4a326] text-[#140407] rounded-full text-[10px] sm:text-xs font-black flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Menu Button - Prominent, High Visibility, NEVER squeezed */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl border border-[#d4a326] bg-[#290a10] hover:bg-[#3d0f1a] text-[#f7df94] transition shadow-[0_0_10px_rgba(212,163,38,0.2)] shrink-0 flex items-center justify-center ml-1"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#f7df94]" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#f7df94]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu - Responsive for all phones & tablets */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#160408] border-b border-[#3b0f16] px-4 pt-3 pb-6 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="flex flex-col space-y-4">
            
            {/* Mobile Auth / Account Section at the top */}
            <div className="pt-1">
              {currentUser ? (
                <div className="flex items-center justify-between bg-[#24090e] p-3 rounded-xl border border-[#4a151f]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#d4a326] text-[#120305] flex items-center justify-center font-bold text-sm">
                      {currentUser.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{currentUser.name}</p>
                      <p className="text-[10px] text-[#b89f97]">{currentUser.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="text-xs text-red-300 p-2 hover:bg-red-950/40 rounded-lg flex items-center gap-1"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      onOpenAuth('login');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider rounded-xl border border-[#d4a326] text-[#f7df94] bg-[#290a10]"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      onOpenAuth('signup');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider rounded-xl bg-[#d4a326] text-[#120305] shadow-md hover:bg-[#f7df94]"
                  >
                    Create Account
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Currency Bar */}
            <div className="p-2.5 bg-[#20070c] border border-[#3b0e16] rounded-xl flex items-center justify-between">
              <span className="text-[11px] text-[#cfb687] font-semibold">Select Currency:</span>
              <div className="flex items-center gap-1.5">
                {(Object.keys(CURRENCIES) as CurrencyCode[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => onCurrencyChange(c)}
                    className={`px-2 py-1 rounded text-[11px] font-bold transition ${
                      currency === c 
                        ? 'bg-[#d4a326] text-[#120305]' 
                        : 'text-[#b89f97] hover:text-white bg-[#140306]'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="grid grid-cols-2 gap-2 py-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2.5 rounded-xl text-xs tracking-wider font-semibold transition ${
                    currentPage === item.page 
                      ? 'bg-[#3b0f16] text-[#f7df94] border border-[#d4a326]/50 shadow-sm' 
                      : 'text-[#d6c4ba] hover:bg-[#25090e] hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* WhatsApp Direct Concierge */}
            <a
              href="https://wa.me/923001234567?text=Hello%20Balochi%20Doch,%20I%20would%20like%20to%20inquire%20about%20a%20dress."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-[#0e2a15] border border-[#25D366]/40 text-[#25D366] text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Concierge (+92 300 1234567)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
