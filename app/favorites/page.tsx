'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function FavoritesPage() {
  const router = useRouter();
  const [favorites, setFavorites] = useState([
    {
      id: '1',
      name: 'Modern Cut Barbershop',
      category: 'Barber',
      rating: 4.8,
      reviews: 234,
      distance: '0.8 km',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=200&h=200&fit=crop',
    },
    {
      id: '2',
      name: 'Nail Art Studio',
      category: 'Nails',
      rating: 4.9,
      reviews: 189,
      distance: '1.2 km',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&h=200&fit=crop',
    },
    {
      id: '3',
      name: 'Zen Spa & Wellness',
      category: 'Spa',
      rating: 4.7,
      reviews: 456,
      distance: '2.0 km',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&h=200&fit=crop',
    },
  ]);

  const toggleFavorite = (id: string) => {
    setFavorites(favorites.filter(f => f.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#13111C]">
      {/* Header */}
      <div className="bg-[#1E1B2E] sticky top-0 z-50 bg-[#13111C] border-b border-[#2E2A45]">
        <div className="max-w-480 mx-auto px-4 h-14 flex items-center gap-4">
          <Link href="/account" className="flex items-center">
            <svg className="w-6 h-6 text-[#9B97B2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-lg font-bold text-white flex-1 text-center pr-6">Favorites</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-[#252236] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-[#5C5878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="text-[#5C5878] mb-4">No favorites yet</p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-[#7C6AF7] text-white rounded-xl font-medium hover:bg-[#6B59E8] transition-colors"
            >
              Explore Shops
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {favorites.map((shop) => (
              <div key={shop.id} className="bg-[#1E1B2E] rounded-xl overflow-hidden shadow-sm">
                <Link href={`/shop/${shop.id}`} className="flex">
                  <img
                    src={shop.image}
                    alt={shop.name}
                    className="w-28 h-28 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 p-4">
                    <h3 className="font-semibold text-white">{shop.name}</h3>
                    <p className="text-sm text-[#5C5878] mt-1">{shop.category}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium">{shop.rating}</span>
                      </div>
                      <span className="text-xs text-[#5C5878]">({shop.reviews})</span>
                      <span className="text-xs text-[#5C5878]">•</span>
                      <span className="text-xs text-[#5C5878]">{shop.distance}</span>
                    </div>
                  </div>
                </Link>
                <div className="px-4 pb-4 pt-2 border-t border-[#2E2A45]">
                  <button
                    onClick={() => toggleFavorite(shop.id)}
                    className="text-sm text-[#7C6AF7] hover:text-red-600 transition-colors"
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
