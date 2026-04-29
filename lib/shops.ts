export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  image: string;
}

export interface Shop {
  id: string;
  name: string;
  tags: string;
  rating: number;
  reviews: number;
  distance: string;
  address: string;
  image: string;
  description: string;
  hours: string;
  price: string;
  services: Service[];
}

const shopsData: Shop[] = [
  {
    id: '1',
    name: 'Woodlands Hills Salon',
    tags: 'FOR MEN & WOMEN',
    rating: 4.1,
    reviews: 312,
    distance: '5.0 km',
    address: 'Keira throughway, Bangkok',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=400&fit=crop',
    description: 'Full-service salon for men and women offering haircut, spa, and massage.',
    hours: '09:00 AM - 08:00 PM',
    price: '$$',
    services: [
      { id: 's1', name: 'Haircut', description: 'Precision cut & blow dry', duration: '45 min', price: 350, image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=200&h=200&fit=crop' },
      { id: 's2', name: 'Shave', description: 'Hot towel shave', duration: '30 min', price: 200, image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=200&h=200&fit=crop' },
      { id: 's3', name: 'Spa Treatment', description: 'Full body relaxation', duration: '90 min', price: 900, image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&h=200&fit=crop' },
      { id: 's4', name: 'Massage', description: 'Swedish or Thai massage', duration: '60 min', price: 700, image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=200&h=200&fit=crop' },
    ],
  },
  {
    id: '2',
    name: 'Style Lounge Salon',
    tags: 'FOR WOMEN',
    rating: 4.5,
    reviews: 198,
    distance: '3.8 km',
    address: 'Ranchview, Bangkok',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=400&fit=crop',
    description: 'Upscale women\'s salon specializing in color, cuts, and styling.',
    hours: '10:00 AM - 09:00 PM',
    price: '$$$',
    services: [
      { id: 's1', name: 'Haircut & Styling', description: 'Cut, blow dry & style', duration: '60 min', price: 500, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop' },
      { id: 's2', name: 'Hair Color', description: 'Full color or highlights', duration: '120 min', price: 1500, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop' },
      { id: 's3', name: 'Keratin Treatment', description: 'Smoothing & frizz control', duration: '150 min', price: 2500, image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=200&h=200&fit=crop' },
      { id: 's4', name: 'Scalp Treatment', description: 'Deep cleanse & nourish', duration: '45 min', price: 600, image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&h=200&fit=crop' },
    ],
  },
  {
    id: '3',
    name: 'Modern Cut Barbershop',
    tags: 'FOR MEN',
    rating: 4.8,
    reviews: 234,
    distance: '0.8 km',
    address: 'Sukhumvit Rd, Bangkok',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=400&fit=crop',
    description: 'Premium barbershop offering modern haircuts and traditional shaving services.',
    hours: '09:00 AM - 08:00 PM',
    price: '$',
    services: [
      { id: 's1', name: 'Haircut & Styling', description: 'Professional cut with styling', duration: '45 min', price: 350, image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=200&h=200&fit=crop' },
      { id: 's2', name: 'Beard Trim', description: 'Beard shaping and trimming', duration: '30 min', price: 200, image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=200&h=200&fit=crop' },
      { id: 's3', name: 'Hair Color', description: 'Full hair coloring service', duration: '90 min', price: 800, image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200&h=200&fit=crop' },
      { id: 's4', name: 'Head Spa', description: 'Relaxing head massage', duration: '60 min', price: 600, image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&h=200&fit=crop' },
    ],
  },
  {
    id: '4',
    name: 'Zen Spa & Wellness',
    tags: 'FOR WOMEN',
    rating: 4.7,
    reviews: 456,
    distance: '2.0 km',
    address: 'Silom Rd, Bangkok',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=400&fit=crop',
    description: 'Tranquil spa offering authentic Thai treatments and wellness therapies.',
    hours: '10:00 AM - 10:00 PM',
    price: '$$$',
    services: [
      { id: 's1', name: 'Thai Massage', description: 'Traditional full body massage', duration: '90 min', price: 800, image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=200&h=200&fit=crop' },
      { id: 's2', name: 'Facial Treatment', description: 'Deep cleansing facial', duration: '60 min', price: 1200, image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&h=200&fit=crop' },
      { id: 's3', name: 'Body Scrub', description: 'Exfoliating body treatment', duration: '60 min', price: 900, image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200&h=200&fit=crop' },
      { id: 's4', name: 'Aromatherapy', description: 'Essential oil massage', duration: '90 min', price: 1100, image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=200&h=200&fit=crop' },
    ],
  },
  {
    id: '5',
    name: 'Nail Art Studio',
    tags: 'FOR WOMEN',
    rating: 4.9,
    reviews: 189,
    distance: '1.2 km',
    address: 'Thonglor, Bangkok',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=400&fit=crop',
    description: 'Creative nail studio specializing in gel nails, nail art, and pedicures.',
    hours: '10:00 AM - 08:00 PM',
    price: '$$',
    services: [
      { id: 's1', name: 'Gel Manicure', description: 'Long-lasting gel polish', duration: '60 min', price: 500, image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&h=200&fit=crop' },
      { id: 's2', name: 'Nail Art', description: 'Custom nail designs', duration: '90 min', price: 800, image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&h=200&fit=crop&crop=right' },
      { id: 's3', name: 'Pedicure', description: 'Foot care & polish', duration: '45 min', price: 400, image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=200&h=200&fit=crop' },
      { id: 's4', name: 'Nail Extension', description: 'Acrylic or gel extensions', duration: '120 min', price: 1200, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop' },
    ],
  },
  {
    id: '6',
    name: 'Glow Beauty Clinic',
    tags: 'FOR MEN & WOMEN',
    rating: 4.6,
    reviews: 278,
    distance: '3.5 km',
    address: 'Asok, Bangkok',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=400&fit=crop',
    description: 'Medical beauty clinic offering advanced skin treatments and aesthetic procedures.',
    hours: '09:00 AM - 07:00 PM',
    price: '$$$$',
    services: [
      { id: 's1', name: 'Skin Analysis', description: 'Professional skin assessment', duration: '30 min', price: 500, image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&h=200&fit=crop' },
      { id: 's2', name: 'Laser Treatment', description: 'Skin rejuvenation laser', duration: '45 min', price: 3500, image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=200&h=200&fit=crop' },
      { id: 's3', name: 'Whitening Facial', description: 'Brightening treatment', duration: '60 min', price: 1800, image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=200&h=200&fit=crop' },
      { id: 's4', name: 'Acne Treatment', description: 'Deep pore cleansing', duration: '60 min', price: 1500, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop' },
    ],
  },
  {
    id: '7',
    name: 'The Barber Club',
    tags: 'FOR MEN',
    rating: 4.7,
    reviews: 167,
    distance: '1.5 km',
    address: 'Ekkamai, Bangkok',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=400&fit=crop',
    description: 'Classic barbershop with a modern twist. Hot towel shaves and precision cuts.',
    hours: '09:00 AM - 09:00 PM',
    price: '$$',
    services: [
      { id: 's1', name: 'Classic Haircut', description: 'Scissor or clipper cut', duration: '40 min', price: 300, image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=200&h=200&fit=crop' },
      { id: 's2', name: 'Hot Towel Shave', description: 'Traditional straight razor shave', duration: '45 min', price: 400, image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=200&h=200&fit=crop' },
      { id: 's3', name: 'Beard Styling', description: 'Shape, trim & condition', duration: '30 min', price: 250, image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=200&h=200&fit=crop' },
      { id: 's4', name: 'Cut & Shave Combo', description: 'Haircut + hot towel shave', duration: '75 min', price: 650, image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=200&h=200&fit=crop' },
    ],
  },
  {
    id: '8',
    name: 'Lash & Brow Studio',
    tags: 'FOR WOMEN',
    rating: 4.9,
    reviews: 321,
    distance: '0.5 km',
    address: 'Phrom Phong, Bangkok',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=400&fit=crop',
    description: 'Specialist studio for lash and brow treatments using premium products.',
    hours: '10:00 AM - 08:00 PM',
    price: '$$',
    services: [
      { id: 's1', name: 'Lash Lift', description: 'Natural lash curl & lift', duration: '60 min', price: 900, image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=200&h=200&fit=crop' },
      { id: 's2', name: 'Lash Tint', description: 'Darken natural lashes', duration: '30 min', price: 400, image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&h=200&fit=crop' },
      { id: 's3', name: 'Brow Lamination', description: 'Fluffy brow styling', duration: '45 min', price: 700, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop' },
      { id: 's4', name: 'Brow Tint & Shape', description: 'Color & define brows', duration: '30 min', price: 350, image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=200&h=200&fit=crop' },
    ],
  },
  {
    id: '9',
    name: 'Aura Hair Salon',
    tags: 'FOR MEN & WOMEN',
    rating: 4.5,
    reviews: 143,
    distance: '2.3 km',
    address: 'On Nut, Bangkok',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=400&fit=crop',
    description: 'Creative hair salon specializing in color, perms, and hair treatments.',
    hours: '10:00 AM - 08:00 PM',
    price: '$$$',
    services: [
      { id: 's1', name: 'Balayage', description: 'Hand-painted highlights', duration: '180 min', price: 3000, image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200&h=200&fit=crop' },
      { id: 's2', name: 'Perm', description: 'Curly or wavy perm', duration: '150 min', price: 2000, image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=200&h=200&fit=crop' },
      { id: 's3', name: 'Hair Treatment', description: 'Deep conditioning mask', duration: '60 min', price: 800, image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=200&h=200&fit=crop' },
      { id: 's4', name: 'Haircut', description: 'Cut & blow dry', duration: '45 min', price: 400, image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=200&h=200&fit=crop' },
    ],
  },
  {
    id: '10',
    name: 'Thai Herb Massage',
    tags: 'FOR MEN & WOMEN',
    rating: 4.8,
    reviews: 534,
    distance: '4.1 km',
    address: 'Lat Phrao, Bangkok',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&h=400&fit=crop',
    description: 'Authentic Thai massage using traditional herbal techniques and natural ingredients.',
    hours: '09:00 AM - 11:00 PM',
    price: '$',
    services: [
      { id: 's1', name: 'Thai Massage', description: 'Traditional stretching massage', duration: '60 min', price: 400, image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=200&h=200&fit=crop' },
      { id: 's2', name: 'Herbal Ball Massage', description: 'Hot herbal compress', duration: '90 min', price: 700, image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&h=200&fit=crop' },
      { id: 's3', name: 'Foot Massage', description: 'Reflexology foot treatment', duration: '45 min', price: 300, image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200&h=200&fit=crop' },
      { id: 's4', name: 'Oil Massage', description: 'Relaxing full body oil', duration: '60 min', price: 500, image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=200&h=200&fit=crop' },
    ],
  },
  {
    id: '11',
    name: 'Skin Lab Bangkok',
    tags: 'FOR WOMEN',
    rating: 4.6,
    reviews: 209,
    distance: '1.8 km',
    address: 'Ari, Bangkok',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=400&fit=crop',
    description: 'Science-backed skincare clinic with personalized treatment plans.',
    hours: '10:00 AM - 07:00 PM',
    price: '$$$',
    services: [
      { id: 's1', name: 'Hydra Facial', description: 'Deep hydration treatment', duration: '60 min', price: 2000, image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&h=200&fit=crop' },
      { id: 's2', name: 'Whitening Program', description: '4-step brightening', duration: '90 min', price: 2500, image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=200&h=200&fit=crop' },
      { id: 's3', name: 'Acne Clear', description: 'Targeted acne treatment', duration: '60 min', price: 1500, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop' },
      { id: 's4', name: 'Anti-Aging Facial', description: 'Firming & lifting', duration: '75 min', price: 2200, image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=200&h=200&fit=crop' },
    ],
  },
  {
    id: '12',
    name: "Gentleman's Den",
    tags: 'FOR MEN',
    rating: 4.4,
    reviews: 98,
    distance: '3.0 km',
    address: 'Ratchada, Bangkok',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=400&fit=crop',
    description: 'Premium grooming lounge for the modern gentleman.',
    hours: '10:00 AM - 09:00 PM',
    price: '$$',
    services: [
      { id: 's1', name: 'Signature Haircut', description: 'Consultation + precision cut', duration: '50 min', price: 450, image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=200&h=200&fit=crop' },
      { id: 's2', name: 'Men\'s Facial', description: 'Deep cleanse & moisturize', duration: '45 min', price: 700, image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&h=200&fit=crop' },
      { id: 's3', name: 'Scalp Treatment', description: 'Anti-dandruff & nourish', duration: '30 min', price: 400, image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=200&h=200&fit=crop' },
      { id: 's4', name: 'Full Grooming', description: 'Cut + facial + beard', duration: '90 min', price: 1200, image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=200&h=200&fit=crop' },
    ],
  },
  {
    id: '13',
    name: 'Pink Petal Nails',
    tags: 'FOR WOMEN',
    rating: 4.8,
    reviews: 267,
    distance: '0.9 km',
    address: 'Bearing, Bangkok',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=400&fit=crop&crop=right',
    description: 'Cute and creative nail studio with the latest nail art trends.',
    hours: '10:00 AM - 08:00 PM',
    price: '$$',
    services: [
      { id: 's1', name: 'Gel Nails', description: 'Soak-off gel manicure', duration: '60 min', price: 550, image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&h=200&fit=crop' },
      { id: 's2', name: 'Nail Art Design', description: 'Custom hand-painted art', duration: '90 min', price: 900, image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&h=200&fit=crop&crop=right' },
      { id: 's3', name: 'Spa Pedicure', description: 'Foot soak + massage + polish', duration: '60 min', price: 500, image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=200&h=200&fit=crop' },
      { id: 's4', name: 'Nail Removal', description: 'Safe gel/acrylic removal', duration: '30 min', price: 200, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop' },
    ],
  },
  {
    id: '14',
    name: 'Serenity Wellness Spa',
    tags: 'FOR MEN & WOMEN',
    rating: 4.9,
    reviews: 412,
    distance: '5.5 km',
    address: 'Sathorn, Bangkok',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=400&fit=crop',
    description: 'Luxury wellness spa offering couple treatments and premium aromatherapy.',
    hours: '10:00 AM - 10:00 PM',
    price: '$$$$',
    services: [
      { id: 's1', name: 'Aromatherapy Massage', description: 'Essential oil full body', duration: '90 min', price: 1500, image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200&h=200&fit=crop' },
      { id: 's2', name: 'Hot Stone Massage', description: 'Volcanic stone therapy', duration: '90 min', price: 1800, image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&h=200&fit=crop' },
      { id: 's3', name: 'Couple Spa', description: 'Side-by-side treatment', duration: '120 min', price: 3500, image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=200&h=200&fit=crop' },
      { id: 's4', name: 'Detox Body Wrap', description: 'Purifying mineral wrap', duration: '75 min', price: 1200, image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=200&h=200&fit=crop' },
    ],
  },
];

export function getShopById(id: string): Shop | undefined {
  return shopsData.find((s) => s.id === id);
}

export default shopsData;
