import { Product, BlogPost } from '../types';
import { getAssetUrl } from '../utils/assets';

export const HERO_PRODUCT: Product = {
  id: 'mehrgarh-royal-crimson',
  title: 'Mehrgarh Royal Doch Pashk',
  balochiTitle: 'مہرگڑھ شاہی دوچ پوشاک',
  subtitle: 'Hand-Stitched Silk & Gold Tilla Masterpiece',
  description: 'Ancient Mehrgarh geometric iconography hand-stitched by master women artisans. Features deep crimson raw silk and velvet, adorned with hundreds of delicate mirrors (Aina Doch) and gold tilla threads in timeless tribal geometric patterns.',
  pricePKR: 35000,
  priceUSD: 128,
  category: 'heavy-embroidery',
  stitchStyle: 'Mehrgarh Doch',
  color: 'maroon',
  fabric: 'Pure Raw Silk',
  timeToCraft: '90 Days of Hand Needlework',
  image: getAssetUrl('images/hero_crimson_bridal.jpg'),
  additionalImages: [
    getAssetUrl('images/maroon_3pc_flatlay.jpg'),
    getAssetUrl('images/artisan_craft_hands.jpg'),
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom'],
  inStock: true,
  isFeatured: true,
  rating: 5.0,
  reviewsCount: 42,
  originRegion: 'Makran & Mehrgarh Heritage Guild',
  craftDetails: [
    'Hand-stitched pocket embroidery (Pandol) with ancestral talisman motifs',
    'Pure metallic gold thread (Tilla) coupled with authentic natural dyed silk floss',
    'Over 850 hand-fixed miniature convex mirrors (Sheesha work)',
    'Custom tailored to exact measurements upon request or delivered as 3-piece ensemble',
    'Accompanied by an artisan certificate signed by the Baloch craftswoman'
  ],
  specs: {
    embroidery: '100% Hand-embroidered Mehrgarh Doch needlework with Aina mirrors',
    fabricDetail: 'Pure Chanderi Silk Shirt with Pure Raw Silk Trouser & Silk Chiffon Dupatta',
    mirrorWork: 'Original glass mirrors secured with web embroidery stitch',
    pieces: '3-Piece Stitched Ensemble or Unstitched Fabric Set',
    washCare: 'Dry Clean Only. Steam iron on reverse side of embroidery.'
  }
};

export const PRODUCTS: Product[] = [
  HERO_PRODUCT,
  {
    id: 'danko-doch-3pc-unstitched',
    title: 'Danko Doch Heritage Unstitched 3-Piece',
    balochiTitle: 'دانکو دوچ روایتی سوٹ',
    subtitle: 'Vibrant Multi-Color Geometric Needlework on Natural Tan Cloth',
    description: 'The celebrated Danko Doch pattern features intricate multi-colored diamond blocks and mirror borders. Comes in an exclusive luxury presentation keepsake box, including embroidered shirt piece, sleeves, trouser border, and cotton-silk dupatta.',
    pricePKR: 35000,
    priceUSD: 128,
    category: 'unstitched',
    stitchStyle: 'Danko Doch',
    color: 'tan',
    fabric: 'Premium Cotton',
    timeToCraft: '60 Days of Needlework',
    image: getAssetUrl('images/tan_unstitched_box.jpg'),
    additionalImages: [
      getAssetUrl('images/pandol_pocket_macro.jpg'),
      getAssetUrl('images/artisan_craft_hands.jpg')
    ],
    sizes: ['Custom'],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    rating: 4.95,
    reviewsCount: 38,
    originRegion: 'Turbat Valley, Makran',
    craftDetails: [
      'Authentic Danko geometric collar, front placket, and deep Pandol',
      'Hand-loomed organic Balochistan premium cotton base',
      'Full matching sleeve motifs and trouser border applique',
      'Packaged in bespoke black & gold Balochi Doch rigid keepsake box'
    ],
    specs: {
      embroidery: 'Danko geometric counted-thread embroidery with silk and tilla',
      fabricDetail: 'Breathable organic premium cotton suitable for all seasons',
      mirrorWork: 'Multi-color thread encasing 350+ micro mirrors',
      pieces: '3-Piece Unstitched Fabric (Shirt: 3m, Trouser: 2.5m, Dupatta: 2.5m)',
      washCare: 'Gentle hand wash in cold water or dry clean.'
    }
  },
  {
    id: 'quetta-doch-crimson-kurta',
    title: 'Quetta Doch Signature Kurta',
    balochiTitle: 'کوئٹہ دوچ خاص کرتی',
    subtitle: 'Onyx Black Kurti with Deep Crimson Geometric Pandol',
    description: 'Iconic Quetta street-heritage needlework. Jet black premium cotton stitched with deep crimson geometric chest embroidery and fine silver needle accents that frame the sleeves and hemline.',
    pricePKR: 26000,
    priceUSD: 95,
    category: 'kurta',
    stitchStyle: 'Quetta Doch',
    color: 'black',
    fabric: 'Premium Cotton',
    timeToCraft: '40 Days of Needlework',
    image: getAssetUrl('images/siah_doch_black.jpg'),
    additionalImages: [
      getAssetUrl('images/white_black_doch.jpg')
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 29,
    originRegion: 'Quetta City Artisans Guild',
    craftDetails: [
      'High-density raised red threadwork on jet black cotton',
      'Heritage Quetta collar slit with covered buttons',
      'Easy everyday luxury silhouette with side slits'
    ],
    specs: {
      embroidery: 'Fine Quetta cross-stitch and geometric tilla work',
      fabricDetail: 'Pre-shrunk 100% long-staple premium cotton',
      mirrorWork: 'Subtle micro-mirror highlights along neckline',
      pieces: '1-Piece Stitched Kurta (Shirt only)',
      washCare: 'Gentle machine wash with dark colors or hand wash.'
    }
  },
  {
    id: 'danko-doch-emerald-velvet',
    title: 'Danko Doch Emerald Royalty Pashk',
    balochiTitle: 'زمردی دانکو دوچ شاہی جوڑا',
    subtitle: 'Plush Emerald Silk Velvet with Gold Tilla & Mirror Work',
    description: 'A masterpiece created for weddings and formal royalty. Vivid emerald green velvet embellished with heavy Danko Doch geometric borders, double fringe tassels, and traditional coin-inspired neckwork.',
    pricePKR: 39500,
    priceUSD: 145,
    category: 'heavy-embroidery',
    stitchStyle: 'Danko Doch',
    color: 'green',
    fabric: 'Silk Velvet',
    timeToCraft: '75 Days of Needlework',
    image: getAssetUrl('images/emerald_doch_green.jpg'),
    additionalImages: [
      getAssetUrl('images/artisan_craft_hands.jpg'),
      getAssetUrl('images/pandol_pocket_macro.jpg')
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom'],
    inStock: true,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 47,
    originRegion: 'Kalat & Mastung Valley',
    craftDetails: [
      'Heavy Danko stitch along sleeves with delicate golden metallic hanging fringe',
      'Over 900 hand-sewn mirrors on front yoke and hem',
      'Comes with full sheer embroidered chiffon dupatta'
    ],
    specs: {
      embroidery: 'Heavy Danko geometric mirrorwork with antique gold tilla cord',
      fabricDetail: 'Micro-velvet silk blend with pure raw silk inner lining',
      mirrorWork: 'Convex glass mirrors that catch ambient candlelight',
      pieces: '3-Piece Stitched Velvet Ensemble',
      washCare: 'Professional dry clean only.'
    }
  },
  {
    id: 'mehrgarh-white-onyx-kurti',
    title: 'Mehrgarh White & Onyx Tribal Kurti',
    balochiTitle: 'مہرگڑھ سفید و سیاہ کرتی',
    subtitle: 'Pure White Handloom Khaddar with Geometric Black Kashida',
    description: 'A striking minimalist monochromatic expression of 7,000-year-old Mehrgarh pottery motifs translated into black threadwork on pristine white handwoven khaddar.',
    pricePKR: 30000,
    priceUSD: 110,
    category: 'kurta',
    stitchStyle: 'Mehrgarh Doch',
    color: 'white',
    fabric: 'Handloom Khaddar',
    timeToCraft: '45 Days of Needlework',
    image: getAssetUrl('images/white_black_doch.jpg'),
    additionalImages: [
      getAssetUrl('images/siah_doch_black.jpg')
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom'],
    inStock: true,
    isNewArrival: true,
    rating: 4.88,
    reviewsCount: 22,
    originRegion: 'Bolan & Sibi Plains',
    craftDetails: [
      'Black geometric borders mirroring archaeological Mehrgarh artifacts',
      'Breathable organic handloom khaddar cotton',
      'Matching white cotton shalwar with hand-worked hemline'
    ],
    specs: {
      embroidery: 'Pure cotton black embroidery thread counted by hand',
      fabricDetail: 'Handspun khaddar cotton fabric made on traditional pit-looms',
      mirrorWork: 'Accented with black oxidized mirror casing',
      pieces: '2-Piece Kurti & Shalwar Set',
      washCare: 'Cold water hand wash, hang dry in shade.'
    }
  },
  {
    id: 'navy-velvet-mehrgarh-jora',
    title: 'Royal Navy Velvet Mehrgarh Jora',
    balochiTitle: 'شاہی نیوی مخمل مہرگڑھ جوڑا',
    subtitle: 'Midnight Blue Velvet with Antique Gold Tilla & Sheesha',
    description: 'Rich royal navy silk velvet embroidered with intricate Mehrgarh diamond shields and golden tilla wire. Features bell sleeves with multi-tiered geometric cuffs and full front pocket.',
    pricePKR: 35000,
    priceUSD: 128,
    category: 'heavy-embroidery',
    stitchStyle: 'Mehrgarh Doch',
    color: 'navy',
    fabric: 'Silk Velvet',
    timeToCraft: '80 Days of Needlework',
    image: getAssetUrl('images/navy_velvet_doch.jpg'),
    additionalImages: [
      getAssetUrl('images/white_black_doch.jpg')
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom'],
    inStock: true,
    isFeatured: true,
    rating: 4.95,
    reviewsCount: 31,
    originRegion: 'Gwadar & Makran Coast',
    craftDetails: [
      'Antique gold tilla cord hand-laid in concentric diamond patterns',
      'Lined with breathable soft mulmul cotton for comfort',
      'Includes navy organza dupatta with gold tilla borders'
    ],
    specs: {
      embroidery: 'Mehrgarh sacred geometry with pure zari gold cord',
      fabricDetail: 'Deep midnight blue premium velvet fabric',
      mirrorWork: 'Over 650 hand-placed shimmering mirrors',
      pieces: '3-Piece Stitched Velvet Ensemble',
      washCare: 'Dry Clean Only.'
    }
  },
  {
    id: 'maroon-flatlay-doch-3pc',
    title: 'Heirloom Maroon Doch 3-Piece Ensemble',
    balochiTitle: 'شاہی سرخ دوچ تھری پیس',
    subtitle: 'Classic Crimson Raw Silk with Symmetrical Tribal Yoke',
    description: 'An authentic Baloch bride\'s pride. Handcrafted over 70 days using ruby, gold, and turquoise silk thread on crimson silk with matching trousers and four-sided mirrorwork dupatta.',
    pricePKR: 35000,
    priceUSD: 128,
    category: 'unstitched',
    stitchStyle: 'Mosom Doch',
    color: 'maroon',
    fabric: 'Pure Raw Silk',
    timeToCraft: '70 Days of Needlework',
    image: getAssetUrl('images/maroon_3pc_flatlay.jpg'),
    additionalImages: [
      getAssetUrl('images/tan_unstitched_box.jpg'),
      getAssetUrl('images/artisan_craft_hands.jpg')
    ],
    sizes: ['Custom'],
    inStock: true,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 35,
    originRegion: 'Kalat & Khuzdar',
    craftDetails: [
      'Traditional rectangular Pandol chest panel with protection talismans',
      'Complete 3-piece unstitched silk dress with pre-embroidered panels',
      'Colorfast threads dyed naturally using traditional pomegranates and indigo'
    ],
    specs: {
      embroidery: 'Mosom geometric microscopic counted needlework',
      fabricDetail: 'Pure raw silk shirt and trouser fabric with matching pure silk dupatta',
      mirrorWork: '700+ hand-encased circular mirrors',
      pieces: '3-Piece Unstitched Silk Set',
      washCare: 'Dry Clean Only.'
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'history-of-balochi-embroidery',
    title: 'History of Balochi Embroidery: 800 Years of Sacred Geometry',
    subtitle: 'How an ancient craft of pastoral nomad women became South Asia’s most revered needlework',
    readTime: '6 min read',
    date: 'October 2026',
    // UNIQUE IMAGE FOR BLOG 1:
    image: getAssetUrl('images/artisan_craft_hands.jpg'),
    category: 'Heritage & History',
    excerpt: 'Balochi Doch embroidery is among the oldest living needlecraft traditions in the world. Originating across the arid mountain passes of Balochistan, each motif is woven from memory without blueprints.',
    content: [
      'In the arid valleys of Balochistan—from the coastal cliffs of Gwadar to the rugged peaks of Kalat—embroidery is not merely decoration; it is an oral language and historical document.',
      'Unlike royal Mughal needlecraft, which relied on traced stencils and workshop courts, Balochi Doch has always been an art of the home, preserved and advanced entirely by women.',
      'Every young girl in traditional Baloch households learns Doch by sitting beside her mother and grandmother. There are no paper patterns or grid graphs; the craftswoman counts the microscopic threads of the warp and weft by eye, creating intricate mathematical symmetry through instinctive memory.',
      'The geometric shapes seen today in Mehrgarh Doch, Danko Doch, and Quetta Doch carry deep tribal symbolism: the diamond represents defensive protection, the triangles symbolize the protective mountains of the homeland, and the inlaid mirrors (Aina) were originally believed to reflect evil eyes away from the heart.'
    ]
  },
  {
    id: 'how-to-style-doch',
    title: 'How to Style Doch for Weddings & Modern Occasions',
    subtitle: 'From ceremonial grandeur to contemporary fusion, mastering the Doch silhouette',
    readTime: '5 min read',
    date: 'September 2026',
    // UNIQUE IMAGE FOR BLOG 2:
    image: getAssetUrl('images/styling_editorial_doch.jpg'),
    category: 'Style & Couture',
    excerpt: 'Whether attending a royal winter wedding in Lahore, London, or Dubai, an authentic Balochi Doch ensemble is an instant showstopper.',
    content: [
      'A Balochi Doch dress carries its own regal weight and does not require overwhelming ornamentation. When styling a heavy piece like the Crimson Bridal Ensemble or the Emerald Royalty Pashk, allow the embroidery to remain the undisputed protagonist.',
      '1. Jewelry Pairings: Opt for antique matte gold, traditional tribal coins, or unpolished polki choker pieces. Avoid modern shiny silver, which can clash with the warm antique luster of gold tilla.',
      '2. Footwear: Traditional handcrafted Balochi juttis or minimalist metallic gold block heels provide comfort while allowing the heavy embroidered trouser hem to fall gracefully.',
      '3. Modern Fusion Styling: A shorter Quetta Doch kurti pairs effortlessly with tailored black cigarette trousers, raw silk culottes, or even dark wash denim for a striking high-low heritage fusion look.'
    ]
  },
  {
    id: 'tale-of-the-pandol-pocket',
    title: 'The Tale of the Pandol: Why the Baloch Chest Pocket Protects the Heart',
    subtitle: 'The architectural genius behind the iconic elongated chest pocket in Balochi Pashk',
    readTime: '4 min read',
    date: 'August 2026',
    // UNIQUE IMAGE FOR BLOG 3:
    image: getAssetUrl('images/pandol_pocket_macro.jpg'),
    category: 'Craft Secrets',
    excerpt: 'Why does traditional Balochi dress have that large, ornate rectangular panel reaching down from the chest? Discover the functional and spiritual origins of the Pandol.',
    content: [
      'The most unmistakable hallmark of traditional Balochi women\'s dress is the "Pandol"—a large, elongated vertical pocket hand-stitched into the front of the tunic (Pashk), stretching from below the yoke down to the hem.',
      'Historically, pastoral women traveled through the mountains and plains. The Pandol served both practical and sacred functions: it was large enough to carry precious family keepsakes, dry fruits, medicinal herbs, and heirloom jewelry securely close to the body.',
      'Spiritually, the dense geometric embroidery covering the Pandol acts as a symbolic breastplate, shielding the wearer\'s heart with ancestral blessing motifs and reflective mirrors.'
    ]
  }
];

export const CRAFT_STITCHES = [
  {
    name: 'Mosom Doch',
    urdu: 'موسم دوچ',
    desc: 'The queen of Baloch stitches. Microscopic geometric diamond grids requiring months of counting warp and weft threads without any traced stencil.',
    difficulty: 'Master Artisan',
    origin: 'Makran & Turbat'
  },
  {
    name: 'Kanta & Pandol',
    urdu: 'کانٹا اور پانڈول',
    desc: 'The iconic high-density raised needlework framing the large chest pocket (Pandol) traditionally designed to protect the heart.',
    difficulty: 'Heirloom Grade',
    origin: 'Kalat & Mastung'
  },
  {
    name: 'Sheesha / Aina Doch',
    urdu: 'آئینہ دوچ',
    desc: 'Hundreds of real convex mirrors hand-fixed with intricate web stitches that reflect negative energy and bring good fortune.',
    difficulty: 'High Precision',
    origin: 'Panjgur & Sibi'
  },
  {
    name: 'Haft-Rang',
    urdu: 'ہفت رنگ',
    desc: 'Seven harmonious silk floss colors woven together symbolizing unity, spring blooms, and tribal celebration.',
    difficulty: 'Traditional',
    origin: 'Quetta & Dera Bugti'
  },
  {
    name: 'Jalarr Wave',
    urdu: 'جالار دوچ',
    desc: 'Flowing wavy geometric border stitch that frames cuffs, hem, and necklines with continuous rhythmic beauty.',
    difficulty: 'Delicate',
    origin: 'Nushki & Kharan'
  },
  {
    name: 'Periwand',
    urdu: 'پریوند دوچ',
    desc: 'Feather-like interlocking leaf stitches that create shimmering textures along bridal chadors and formal sleeves.',
    difficulty: 'Fine Craft',
    origin: 'Chagai & Khuzdar'
  }
];

export const ARTISAN_STATS = [
  { label: 'Master Baloch Artisans', value: '450+' },
  { label: 'Rural Women Empowered', value: '100%' },
  { label: 'Average Days Per Dress', value: '65 Days' },
  { label: 'Centuries of Preserved Heritage', value: '800+ Yrs' },
];

export const FAQS = [
  {
    q: 'How long does each Balochi Doch piece take to handcraft?',
    a: 'Depending on the density of the stitch style, a single ensemble takes between 40 and 90 continuous days of master hand needlework. Each stitch is counted strand by strand by our Baloch women artisans.'
  },
  {
    q: 'What is the shipping cost to Pakistan and internationally?',
    a: 'We offer FREE insured delivery across Pakistan with Cash on Delivery (COD). For international orders, express courier delivery (DHL/FedEx) is just $15 USD (flat rate) with delivery in 4 to 7 business days.'
  },
  {
    q: 'Can I order custom sizes or unstitched fabric?',
    a: 'Yes! We offer standard sizes (XS to XL), bespoke Made-to-Measure stitching (where you provide your exact measurements), as well as Unstitched 3-Piece presentation boxes so you can have it tailored locally.'
  },
  {
    q: 'Can I order directly on WhatsApp?',
    a: 'Absolutely. Every product page has an "Order on WhatsApp" button that instantly connects you with our atelier concierge (+92 300 1234567) to confirm fabric, colors, and measurements.'
  },
  {
    q: 'How do I care for my hand-embroidered Doch dress?',
    a: 'Because authentic Doch incorporates pure silk floss, metallic gold tilla, and real glass mirrors, we strictly recommend Dry Cleaning only. Never machine wash heavy embroidery.'
  },
  {
    q: 'Where are your physical boutique stores located?',
    a: 'You can visit our flagship atelier in Quetta (Cantt Commercial Area) and our design studio in Karachi (Zamzama Blvd, DHA Phase 5).'
  }
];
