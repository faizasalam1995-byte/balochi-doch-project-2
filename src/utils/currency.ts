import { CurrencyCode, CURRENCIES } from '../types';

export function formatPrice(pricePKR: number, currency: CurrencyCode): string {
  const config = CURRENCIES[currency];
  const converted = pricePKR * config.rateFromPKR;
  
  if (currency === 'PKR') {
    return `PKR ${Math.round(converted).toLocaleString('en-PK')}`;
  } else if (currency === 'USD') {
    return `$${Math.round(converted).toLocaleString('en-US')}`;
  } else if (currency === 'AED') {
    return `AED ${Math.round(converted).toLocaleString('en-AE')}`;
  } else if (currency === 'GBP') {
    return `£${Math.round(converted).toLocaleString('en-GB')}`;
  } else if (currency === 'EUR') {
    return `€${Math.round(converted).toLocaleString('en-EU')}`;
  }
  
  return `${config.symbol} ${Math.round(converted).toLocaleString()}`;
}
