'use client';

import { useState } from 'react';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

interface Booking {
  id: string;
  service: string;
  shop: string;
  date: string;
  time: string;
  status: 'upcoming' | 'past' | 'cancelled';
  image: string;
  price: number;
}

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const bookings: Booking[] = [
    {
      id: '1',
      service: 'Haircut & Styling',
      shop: 'Modern Cut Barbershop',
      date: '2026-05-01',
      time: '14:00',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=200&h=200&fit=crop',
      price: 350,
    },
    {
      id: '2',
      service: 'Manicure & Pedicure',
      shop: 'Nail Art Studio',
      date: '2026-05-05',
      time: '10:30',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&h=200&fit=crop',
      price: 500,
    },
    {
      id: '3',
      service: 'Thai Massage',
      shop: 'Zen Spa & Wellness',
      date: '2026-04-15',
      time: '16:00',
      status: 'past',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&h=200&fit=crop',
      price: 800,
    },
    {
      id: '4',
      service: 'Hair Color',
      shop: 'Beauty Salon',
      date: '2026-04-10',
      time: '11:00',
      status: 'past',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200&h=200&fit=crop',
      price: 1200,
    },
  ];

  const filteredBookings = bookings.filter((b) => b.status === activeTab);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-[#13111C] pb-24">
      {/* Header */}
      <div className="bg-[#1E1B2E] sticky top-0 z-50 bg-[#13111C] border-b border-[#2E2A45]">
        <div className="max-w-480 mx-auto px-4 h-14 flex items-center justify-center">
          <h1 className="text-lg font-bold text-white">My Bookings</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-[#1E1B2E] px-4 py-3 border-b border-[#2E2A45]">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeTab === 'upcoming'
                ? 'bg-[#7C6AF7] text-white'
                : 'bg-[#252236] text-[#9B97B2] hover:bg-[#2E2A45]'
            }`}
          >
            Upcoming ({bookings.filter(b => b.status === 'upcoming').length})
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeTab === 'past'
                ? 'bg-[#7C6AF7] text-white'
                : 'bg-[#252236] text-[#9B97B2] hover:bg-[#2E2A45]'
            }`}
          >
            Past ({bookings.filter(b => b.status === 'past').length})
          </button>
        </div>
      </div>

      {/* Booking List */}
      <div className="p-4">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-[#252236] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-[#5C5878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-[#5C5878] mb-4">No {activeTab} bookings</p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-[#7C6AF7] text-white rounded-xl font-medium hover:bg-[#6B59E8] transition-colors"
            >
              Book a Service
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredBookings.map((booking) => (
              <div key={booking.id} className="bg-[#1E1B2E] rounded-xl overflow-hidden shadow-sm">
                <div className="flex">
                  <img
                    src={booking.image}
                    alt={booking.service}
                    className="w-28 h-28 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 p-4">
                    <h3 className="font-semibold text-white">{booking.service}</h3>
                    <p className="text-sm text-[#5C5878] mt-1">{booking.shop}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-[#9B97B2]">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-[#5C5878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{formatDate(booking.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-[#5C5878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{booking.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4 flex items-center justify-between border-t border-[#2E2A45] pt-3 mt-2">
                  <span className="text-lg font-bold text-[#7C6AF7]">฿{booking.price}</span>
                  {activeTab === 'upcoming' ? (
                    <div className="flex gap-2">
                      <button className="px-4 py-2 text-sm text-[#9B97B2] hover:bg-[#252236] rounded-lg transition-colors">
                        Reschedule
                      </button>
                      <button className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button className="px-4 py-2 text-sm text-[#7C6AF7] hover:bg-[#7C6AF7]/10 rounded-lg transition-colors">
                      Book Again
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
