import React, { useState, useEffect } from 'react';
import { CurrencyCode, Product, CartItem, UserProfile, CustomMeasurements, PageId } from './types';
import { HERO_PRODUCT, PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { SearchModal } from './components/SearchModal';
import { CartDrawer } from './components/CartDrawer';
import { CustomMeasurementModal } from './components/CustomMeasurementModal';

// 10 Distinct Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CollectionPage } from './pages/CollectionPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CraftPage } from './pages/CraftPage';
import { AboutPage } from './pages/AboutPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { CustomerCarePage } from './pages/CustomerCarePage';

export default function App() {
  // Page Routing State (10 Pages Structure)
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(HERO_PRODUCT);

  // Currency State (USD $ or PKR Rs. as shown in screenshot)
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  // Shopping Cart State (Pre-loaded with 1 keepsake item matching the '1' cart badge in screenshot)
  const [cart, setCart] = useState<CartItem[]>(() => {
    return [
      {
        id: 'initial_heirloom_cart',
        product: HERO_PRODUCT,
        size: 'Custom',
        quantity: 1,
      }
    ];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  // Wishlist State
  const [wishlistIds, setWishlistIds] = useState<string[]>(['danko-doch-3pc-unstitched']);

  // Modals
  const [customMeasurementProduct, setCustomMeasurementProduct] = useState<Product | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authInitialTab, setAuthInitialTab] = useState<'login' | 'signup'>('login');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // User State
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    try {
      const stored = localStorage.getItem('doch_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('doch_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('doch_user');
    }
  }, [currentUser]);

  // Scroll to top on page navigate
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product, size: string, quantity: number, customMeasurements?: CustomMeasurements) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.product.id === product.id && i.size === size);
      if (idx > -1) {
        const next = [...prev];
        next[idx].quantity += quantity;
        if (customMeasurements) next[idx].customMeasurements = customMeasurements;
        return next;
      }
      return [
        ...prev,
        {
          id: `${product.id}-${size}-${Date.now()}`,
          product,
          size,
          quantity,
          customMeasurements,
        }
      ];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  const handleOpenAuth = (tab: 'login' | 'signup' = 'login') => {
    setAuthInitialTab(tab);
    setIsAuthOpen(true);
  };

  const totalCartCount = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className="min-h-screen bg-[#110306] text-[#f5ede0] flex flex-col selection:bg-[#d4a326] selection:text-[#110306]">
      
      {/* 
        Header with:
        - Pure authentic announcement banner (ZERO download zip button!)
        - Logo & diamond emblem
        - 10-page navigation links
        - Currency toggle (USD $ / PKR Rs.)
        - Search button
        - Login / Sign Up button
        - Cart badge with live count
      */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        currency={currency}
        onCurrencyChange={setCurrency}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={handleOpenAuth}
        currentUser={currentUser}
        onLogout={() => setCurrentUser(null)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main 10-Page Viewport Container */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            heroProduct={HERO_PRODUCT}
            currency={currency}
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage
            products={PRODUCTS}
            currency={currency}
            onSelectProduct={handleSelectProduct}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {currentPage === 'collection' && (
          <CollectionPage
            products={PRODUCTS}
            currency={currency}
            onSelectProduct={handleSelectProduct}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentPage === 'product-detail' && (
          <ProductDetailPage
            product={selectedProduct}
            currency={currency}
            onAddToCart={handleAddToCart}
            onNavigate={handleNavigate}
            isWishlisted={wishlistIds.includes(selectedProduct.id)}
            onToggleWishlist={handleToggleWishlist}
            onOpenCustomMeasurement={(p) => setCustomMeasurementProduct(p)}
          />
        )}

        {currentPage === 'craft' && <CraftPage />}

        {currentPage === 'about' && <AboutPage />}

        {currentPage === 'journal' && <JournalPage />}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'checkout' && (
          <CheckoutPage
            items={cart}
            currency={currency}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            onNavigate={handleNavigate}
            currentUser={currentUser}
          />
        )}

        {currentPage === 'care' && <CustomerCarePage />}
      </main>

      {/* Luxury Footer with links to all pages */}
      <Footer
        onNavigateSection={(id) => {
          if (id === 'shop') handleNavigate('shop');
          else if (id === 'craft') handleNavigate('craft');
          else if (id === 'about') handleNavigate('about');
          else if (id === 'journal') handleNavigate('journal');
          else if (id === 'contact') handleNavigate('contact');
          else handleNavigate('home');
        }}
        onOpenAuth={handleOpenAuth}
      />

      {/* Interactive Cart Slide-over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          handleNavigate('checkout');
        }}
        discountPercentage={discountPercentage}
        onApplyPromo={(code) => {
          if (code.toUpperCase() === 'HERITAGE10') {
            setDiscountPercentage(10);
            return true;
          }
          return false;
        }}
      />

      {/* Bespoke Tailor Measurement Modal */}
      <CustomMeasurementModal
        product={customMeasurementProduct}
        isOpen={Boolean(customMeasurementProduct)}
        onClose={() => setCustomMeasurementProduct(null)}
        onSaveMeasurements={(measurements) => {
          if (customMeasurementProduct) {
            handleAddToCart(customMeasurementProduct, 'Custom', 1, measurements);
            setIsCartOpen(true);
          }
        }}
      />

      {/* Auth Modal (Login / Sign Up) */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialTab={authInitialTab}
        onLoginSuccess={(user) => setCurrentUser(user)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        currency={currency}
        onSelectProduct={handleSelectProduct}
      />

    </div>
  );
}
