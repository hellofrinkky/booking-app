'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface SearchResult {
  id: string;
  type: 'shop' | 'service';
  name: string;
  category: string;
  rating: number;
  reviews: number;
  distance: string;
  image: string;
  price?: number;
}

export default function SearchPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: '1', name: 'Haircut', icon: '💇' },
    { id: '2', name: 'Nails', icon: '💅' },
    { id: '3', name: 'Spa', icon: '🧖' },
    { id: '4', name: 'Massage', icon: '💆' },
    { id: '5', name: 'Beauty', icon: '✨' },
    { id: '6', name: 'Barber', icon: '✂️' },
  ];

  const recentSearches = ['Haircut near me', 'Nail salon', 'Thai massage'];

  const searchResults: SearchResult[] = [
    {
      id: '1',
      type: 'shop',
      name: 'Modern Cut Barbershop',
      category: 'Barber',
      rating: 4.8,
      reviews: 234,
      distance: '0.8 km',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=200&h=200&fit=crop',
      price: 350,
    },
    {
      id: '2',
      type: 'shop',
      name: 'Nail Art Studio',
      category: 'Nails',
      rating: 4.9,
      reviews: 189,
      distance: '1.2 km',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&h=200&fit=crop',
      price: 500,
    },
    {
      id: '3',
      type: 'service',
      name: 'Haircut & Styling',
      category: 'Modern Cut Barbershop',
      rating: 4.8,
      reviews: 234,
      distance: '0.8 km',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=200&h=200&fit=crop',
      price: 350,
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setIsSearching(true);
      setTimeout(() => {
        setIsSearching(false);
        setShowResults(true);
      }, 500);
    } else {
      setShowResults(false);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-[#13111C] pb-24">
      {/* Header with Search */}
      <div className="bg-[#13111C] sticky top-0 z-50 border-b border-[#2E2A45]">
        <div className="max-w-480 mx-auto px-4 py-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search services, shops..."
              className="w-full h-12 pl-12 pr-10 bg-[#252236] rounded-xl text-sm text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:bg-[#1E1B2E] transition-all"
              autoFocus
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5C5878]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5C5878] hover:text-[#9B97B2]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {!showResults ? (
        <>
          {/* Recent Searches */}
          <div className="bg-[#1E1B2E] mt-2 p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-white">Recent Searches</h2>
              <button className="text-sm text-[#7C6AF7] font-medium">Clear All</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(search)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#252236] rounded-full text-sm text-[#9B97B2] hover:bg-[#2E2A45] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#5C5878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-[#1E1B2E] mt-2 p-4">
            <h2 className="font-bold text-white mb-4">Browse by Category</h2>
            <div className="grid grid-cols-3 gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    handleSearch(category.name);
                  }}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${
                    selectedCategory === category.id
                      ? 'bg-[#7C6AF7] text-white'
                      : 'bg-[#252236] hover:bg-[#2E2A45]'
                  }`}
                >
                  <span className="text-3xl">{category.icon}</span>
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Popular Near You */}
          <div className="bg-[#1E1B2E] mt-2 p-4">
            <h2 className="font-bold text-white mb-4">Popular Near You</h2>
            <div className="space-y-3">
              {searchResults.slice(0, 2).map((result) => (
                <Link
                  key={result.id}
                  href={`/shop/${result.id}`}
                  className="flex gap-3 p-2 rounded-xl hover:bg-[#13111C] transition-colors"
                >
                  <img
                    src={result.image}
                    alt={result.name}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{result.name}</h3>
                    <p className="text-sm text-[#5C5878] mt-0.5">{result.category}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium">{result.rating}</span>
                      </div>
                      <span className="text-xs text-[#5C5878]">({result.reviews})</span>
                      <span className="text-xs text-[#5C5878]">•</span>
                      <span className="text-xs text-[#5C5878]">{result.distance}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Search Results */
        <div className="p-4">
          {isSearching ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 border-4 border-[#7C6AF7]/30 border-t-[#FF6B6B] rounded-full animate-spin mx-auto mb-4" />
              <p className="text-[#5C5878]">Searching...</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-[#5C5878] mb-4">
                Found {searchResults.length} results for "{searchQuery}"
              </p>
              <div className="space-y-3">
                {searchResults.map((result) => (
                  <Link
                    key={result.id}
                    href={`/shop/${result.id}`}
                    className="flex gap-3 bg-[#1E1B2E] p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={result.image}
                      alt={result.name}
                      className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <span className="text-xs text-[#5C5878] uppercase">{result.type}</span>
                      <h3 className="font-semibold text-white">{result.name}</h3>
                      <p className="text-sm text-[#5C5878] mt-0.5">{result.category}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm font-medium">{result.rating}</span>
                        </div>
                        <span className="text-xs text-[#5C5878]">({result.reviews})</span>
                        <span className="text-xs text-[#5C5878]">•</span>
                        <span className="text-xs text-[#5C5878]">{result.distance}</span>
                      </div>
                      {result.price && (
                        <p className="text-[#7C6AF7] font-bold mt-1">฿{result.price}<span className="text-[#5C5878] font-normal text-xs"> start</span></p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNav />
      </div>
    </div>
  );
}

// Import BottomNav dynamically to avoid SSR issues
import BottomNav from '@/components/BottomNav';
