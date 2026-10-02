export type CurrencyCode = 'PKR' | 'USD' | 'AED' | 'GBP' | 'EUR';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateFromPKR: number; // 1 PKR in this currency
  label: string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  PKR: { code: 'PKR', symbol: 'PKR Rs.', rateFromPKR: 1, label: 'PKR Rs.' },
  USD: { code: 'USD', symbol: '$', rateFromPKR: 0.00365, label: 'USD ($)' }, // ~ Rs. 35,000 = $128 USD
  AED: { code: 'AED', symbol: 'AED', rateFromPKR: 0.0132, label: 'AED' },
  GBP: { code: 'GBP', symbol: '£', rateFromPKR: 0.0028, label: 'GBP (£)' },
  EUR: { code: 'EUR', symbol: '€', rateFromPKR: 0.0033, label: 'EUR (€)' },
};

export type PageId = 
  | 'home' 
  | 'shop' 
  | 'collection' 
  | 'product-detail' 
  | 'craft' 
  | 'about' 
  | 'journal' 
  | 'contact' 
  | 'checkout' 
  | 'care';

export type DochCategory = 'unstitched' | 'kurta' | 'heavy-embroidery' | 'bridal' | 'luxury-formal' | 'classic' | 'chador' | 'accessories';
export type ProductCategory = DochCategory | 'all';

export type DochColor = 'maroon' | 'black' | 'gold' | 'green' | 'navy' | 'white' | 'tan';

export interface Product {
  id: string;
  title: string;
  balochiTitle: string;
  subtitle: string;
  description: string;
  pricePKR: number; // e.g. 35000 PKR (~$128 USD)
  priceUSD: number; // 128
  category: DochCategory;
  stitchStyle: 'Danko Doch' | 'Quetta Doch' | 'Mehrgarh Doch' | 'Mosom Doch' | 'Siah-Doch' | 'Haft-Rang' | 'Jalarr & Sheesha';
  color: DochColor;
  fabric: 'Premium Cotton' | 'Pure Raw Silk' | 'Silk Velvet' | 'Handloom Khaddar' | 'Crinkle Chiffon' | 'Organza';
  timeToCraft: string;
  image: string;
  additionalImages?: string[];
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL' | 'Custom')[];
  inStock: boolean;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  rating: number;
  reviewsCount: number;
  originRegion: string;
  craftDetails: string[];
  specs: {
    embroidery: string;
    fabricDetail: string;
    mirrorWork: string;
    pieces: string;
    washCare: string;
  };
}

export interface CustomMeasurements {
  chest: string;
  shirtLength: string;
  shoulder: string;
  sleeveLength: string;
  waist: string;
  hip: string;
  trouserLength: string;
  notes?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  size: string;
  quantity: number;
  customMeasurements?: CustomMeasurements;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  country?: string;
  address?: string;
  orderCount?: number;
  wishlistIds?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  readTime: string;
  date: string;
  image: string;
  category: string;
  excerpt: string;
  content: string[];
}
