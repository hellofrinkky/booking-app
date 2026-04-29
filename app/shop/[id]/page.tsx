'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getShopById } from '@/lib/shops';

export default function ShopDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'services' | 'reviews' | 'about'>('services');

  const shop = getShopById(params.id as string);

  if (!shop) {
    return (
      <div className="min-h-screen bg-[#13111C] flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-lg mb-4">Shop not found</p>
          <button onClick={() => router.back()} className="text-[#7C6AF7]">Go back</button>
        </div>
      </div>
    );
  }

  const reviews = [
    { id: '1', user: 'Somchai P.', avatar: 'https://i.pravatar.cc/100?img=1', rating: 5, date: '2 days ago', comment: 'Great service! Very professional staff.' },
    { id: '2', user: 'John D.', avatar: 'https://i.pravatar.cc/100?img=2', rating: 4, date: '1 week ago', comment: 'Good experience, will come back again.' },
    { id: '3', user: 'Nida K.', avatar: 'https://i.pravatar.cc/100?img=5', rating: 5, date: '2 weeks ago', comment: 'Amazing! Best in Bangkok.' },
  ];

  const handleBookNow = () => {
    if (selectedService) {
      router.push(`/checkout?service=${selectedService}&shop=${shop.id}`);
    } else {
      alert('Please select a service first');
    }
  };

  return (
    <div className="min-h-screen bg-[#13111C] pb-32">
      {/* Header Image */}
      <div className="relative h-64">
        <img src={shop.image} alt={shop.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 w-10 h-10 bg-black/40 backdrop-blur rounded-full flex items-center justify-center"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="absolute bottom-4 left-4 right-16">
          <p className="text-xs text-[#9B97B2] font-medium mb-1">{shop.tags}</p>
          <h1 className="text-2xl font-bold text-white">{shop.name}</h1>
          <p className="text-sm text-[#9B97B2] mt-1">{shop.address} • {shop.distance} • {shop.price}</p>
        </div>
        <button className="absolute bottom-4 right-4 flex flex-col items-center gap-1">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="text-xs text-white">Favourite</span>
        </button>
      </div>

      {/* Action Bar */}
      <div className="bg-[#1E1B2E] px-4 py-4 flex items-center justify-between border-b border-[#2E2A45]">
        <div className="flex gap-6">
          {[
            { label: 'Call', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
            { label: 'Directions', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
            { label: 'Share', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12' },
          ].map((action) => (
            <button key={action.label} className="flex flex-col items-center gap-1">
              <svg className="w-6 h-6 text-[#9B97B2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={action.icon} />
              </svg>
              <span className="text-xs text-[#9B97B2]">{action.label}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center border border-[#7C6AF7] rounded-xl px-3 py-2">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-[#7C6AF7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="text-[#7C6AF7] font-bold">{shop.rating}</span>
          </div>
          <span className="text-xs text-[#7C6AF7]">{shop.reviews}+ ratings</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-[#1E1B2E] px-4">
        <div className="flex border-b border-[#2E2A45]">
          {(['services', 'reviews', 'about'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium capitalize transition-colors relative ${
                activeTab === tab ? 'text-white' : 'text-[#5C5878]'
              }`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7C6AF7] rounded-full" />}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-4 py-4">
        {activeTab === 'services' && (
          <div className="space-y-3">
            {shop.services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                  selectedService === service.id
                    ? 'bg-[#7C6AF7]/10 border border-[#7C6AF7]'
                    : 'bg-[#1E1B2E] border border-transparent'
                }`}
              >
                <img src={service.image} alt={service.name} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{service.name}</h3>
                  <p className="text-sm text-[#9B97B2] mt-0.5">฿{service.price}</p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-[#5C5878]">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service.duration}
                  </div>
                </div>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                    selectedService === service.id
                      ? 'bg-[#7C6AF7] border-[#7C6AF7] text-white'
                      : 'border-[#7C6AF7] text-[#7C6AF7]'
                  }`}
                >
                  {selectedService === service.id ? 'Selected' : 'Select +'}
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="flex gap-3">
                <img src={review.avatar} alt={review.user} className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-white">{review.user}</h4>
                    <span className="text-xs text-[#5C5878]">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-[#2E2A45]'}`} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#9B97B2] mt-1">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'about' && (
          <div className="space-y-4">
            <p className="text-[#9B97B2] leading-relaxed">{shop.description}</p>
            <div className="flex items-center gap-3 text-sm text-[#9B97B2]">
              <svg className="w-5 h-5 text-[#7C6AF7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {shop.address}
            </div>
            <div className="flex items-center gap-3 text-sm text-[#9B97B2]">
              <svg className="w-5 h-5 text-[#7C6AF7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Open {shop.hours}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Book Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1E1B2E] border-t border-[#2E2A45] p-4">
        <div className="max-w-480 mx-auto flex items-center gap-4">
          <div className="flex-1">
            {selectedService && (
              <div>
                <p className="text-xs text-[#5C5878]">Selected</p>
                <p className="text-sm font-medium text-white">
                  {shop.services.find(s => s.id === selectedService)?.name} — ฿{shop.services.find(s => s.id === selectedService)?.price}
                </p>
              </div>
            )}
          </div>
          <button
            onClick={handleBookNow}
            className="px-8 h-12 bg-[#7C6AF7] text-white rounded-xl font-semibold hover:bg-[#6B59E8] transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
