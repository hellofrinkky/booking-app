import Link from 'next/link';

const shops = [
  {
    id: '1',
    name: 'Woodlands Hills Salon',
    tags: 'FOR MEN & WOMEN',
    services: 'Haircut, Spa, Massage',
    rating: 4.1,
    distance: '5.0 Kms',
    price: '$$',
    address: 'Keira throughway',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    name: 'Style Lounge Salon',
    tags: 'FOR WOMEN',
    services: 'Haircut, Color, Spa',
    rating: 4.5,
    distance: '3.8 Kms',
    price: '$$$',
    address: 'Ranchview',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    name: 'Modern Cut Barbershop',
    tags: 'FOR MEN',
    services: 'Haircut, Beard, Shave',
    rating: 4.8,
    distance: '0.8 Kms',
    price: '$',
    address: 'Sukhumvit Rd',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop',
  },
  {
    id: '4',
    name: 'Zen Spa & Wellness',
    tags: 'FOR WOMEN',
    services: 'Thai Massage, Facial, Body Scrub',
    rating: 4.7,
    distance: '2.0 Kms',
    price: '$$$',
    address: 'Silom Rd',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
  },
  {
    id: '5',
    name: 'Nail Art Studio',
    tags: 'FOR WOMEN',
    services: 'Manicure, Pedicure, Nail Art',
    rating: 4.9,
    distance: '1.2 Kms',
    price: '$$',
    address: 'Thonglor',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop',
  },
  {
    id: '6',
    name: 'Glow Beauty Clinic',
    tags: 'FOR MEN & WOMEN',
    services: 'Skin Care, Laser, Botox',
    rating: 4.6,
    distance: '3.5 Kms',
    price: '$$$$',
    address: 'Asok',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop',
  },
  {
    id: '7',
    name: 'The Barber Club',
    tags: 'FOR MEN',
    services: 'Haircut, Hot Towel Shave, Beard',
    rating: 4.7,
    distance: '1.5 Kms',
    price: '$$',
    address: 'Ekkamai',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop',
  },
  {
    id: '8',
    name: 'Lash & Brow Studio',
    tags: 'FOR WOMEN',
    services: 'Lash Lift, Brow Lamination, Tint',
    rating: 4.9,
    distance: '0.5 Kms',
    price: '$$',
    address: 'Phrom Phong',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop',
  },
  {
    id: '9',
    name: 'Aura Hair Salon',
    tags: 'FOR MEN & WOMEN',
    services: 'Color, Perm, Treatment',
    rating: 4.5,
    distance: '2.3 Kms',
    price: '$$$',
    address: 'On Nut',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
  },
  {
    id: '10',
    name: 'Thai Herb Massage',
    tags: 'FOR MEN & WOMEN',
    services: 'Thai Massage, Herbal Ball, Foot',
    rating: 4.8,
    distance: '4.1 Kms',
    price: '$',
    address: 'Lat Phrao',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=300&fit=crop',
  },
  {
    id: '11',
    name: 'Skin Lab Bangkok',
    tags: 'FOR WOMEN',
    services: 'Facial, Whitening, Acne Treatment',
    rating: 4.6,
    distance: '1.8 Kms',
    price: '$$$',
    address: 'Ari',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=300&fit=crop',
  },
  {
    id: '12',
    name: 'Gentleman\'s Den',
    tags: 'FOR MEN',
    services: 'Haircut, Facial, Grooming',
    rating: 4.4,
    distance: '3.0 Kms',
    price: '$$',
    address: 'Ratchada',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop',
  },
  {
    id: '13',
    name: 'Pink Petal Nails',
    tags: 'FOR WOMEN',
    services: 'Gel Nails, Nail Art, Pedicure',
    rating: 4.8,
    distance: '0.9 Kms',
    price: '$$',
    address: 'Bearing',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop&crop=right',
  },
  {
    id: '14',
    name: 'Serenity Wellness Spa',
    tags: 'FOR MEN & WOMEN',
    services: 'Aromatherapy, Hot Stone, Couple',
    rating: 4.9,
    distance: '5.5 Kms',
    price: '$$$$',
    address: 'Sathorn',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop',
  },
];

export default function PopularShops() {
  return (
    <div className="py-4">
      <div className="flex items-center justify-between px-4 mb-4">
        <h2 className="text-lg font-bold text-white">Popular near you</h2>
        <button className="text-sm text-[#7C6AF7] font-medium flex items-center gap-1">
          See all <span>›</span>
        </button>
      </div>
      <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar">
        {shops.map((shop) => (
          <Link
            key={shop.id}
            href={`/shop/${shop.id}`}
            className="flex-shrink-0 w-64 rounded-2xl overflow-hidden bg-[#1E1B2E] border border-[#2E2A45] hover:border-[#7C6AF7]/50 transition-colors"
          >
            <div className="relative h-44">
              <img src={shop.image} alt={shop.name} className="w-full h-full object-cover" />
              {/* Price badge */}
              <span className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {shop.price}
              </span>
              {/* Distance badge */}
              <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {shop.distance}
              </span>
            </div>
            <div className="p-3">
              {/* Name + verified */}
              <div className="flex items-center gap-1.5 mb-1">
                <h3 className="font-bold text-white text-sm leading-tight truncate">{shop.name}</h3>
                <svg className="w-4 h-4 text-[#7C6AF7] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xs text-[#5C5878] mb-2">{shop.services}</p>
              {/* Rating row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-semibold text-white">{shop.rating}</span>
                </div>
                <span className="text-xs text-[#5C5878]">{shop.tags}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
