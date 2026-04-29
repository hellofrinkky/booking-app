'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('credit');
  const [isBooking, setIsBooking] = useState(false);

  // Mock data
  const service = {
    name: 'Haircut & Styling',
    shop: 'Modern Cut Barbershop',
    duration: '45 min',
    price: 350,
  };

  const discount = promoApplied ? 175 : 0; // 50% off
  const total = service.price - discount;

  // Generate next 7 dates
  const dates = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      full: date.toISOString().split('T')[0],
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
    };
  });

  // Available time slots
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30',
  ];

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'FIRST50') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code');
      setPromoApplied(false);
    }
  };

  const handleBook = async () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select date and time');
      return;
    }

    setIsBooking(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsBooking(false);
    router.push('/booking');
  };

  return (
    <div className="min-h-screen bg-[#13111C] pb-48">
      {/* Header */}
      <div className="bg-[#1E1B2E] sticky top-0 z-50 bg-[#13111C] border-b border-[#2E2A45]">
        <div className="max-w-480 mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/shop/1" className="flex items-center gap-2">
            <svg className="w-6 h-6 text-[#9B97B2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-lg font-bold text-white">Checkout</h1>
          <div className="w-6" />
        </div>
      </div>

      <div className="max-w-480 mx-auto p-4 space-y-4">
        {/* Service Summary */}
        <div className="bg-[#1E1B2E] rounded-xl p-4 shadow-sm">
          <h2 className="font-bold text-white mb-3">Service Details</h2>
          <div className="flex gap-3">
            <div className="w-20 h-20 bg-[#252236] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-10 h-10 text-[#5C5878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m0 0l-4-4m4 4l4-4" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">{service.name}</h3>
              <p className="text-sm text-[#5C5878] mt-1">{service.shop}</p>
              <p className="text-sm text-[#5C5878]">{service.duration}</p>
            </div>
          </div>
        </div>

        {/* Select Date */}
        <div className="bg-[#1E1B2E] rounded-xl p-4 shadow-sm">
          <h2 className="font-bold text-white mb-3">Select Date</h2>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {dates.map((date) => (
              <button
                key={date.full}
                onClick={() => setSelectedDate(date.full)}
                className={`flex-shrink-0 w-16 h-20 rounded-xl flex flex-col items-center justify-center border-2 transition-all ${
                  selectedDate === date.full
                    ? 'border-[#7C6AF7] bg-[#7C6AF7] text-white'
                    : 'border-[#2E2A45] bg-[#13111C] hover:border-gray-300'
                }`}
              >
                <span className="text-xs font-medium">{date.day}</span>
                <span className="text-2xl font-bold">{date.date}</span>
                <span className="text-xs">{date.month}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Select Time */}
        <div className="bg-[#1E1B2E] rounded-xl p-4 shadow-sm">
          <h2 className="font-bold text-white mb-3">Select Time</h2>
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`h-12 rounded-lg text-sm font-medium transition-all ${
                  selectedTime === time
                    ? 'bg-[#7C6AF7] text-white'
                    : 'bg-[#252236] text-[#9B97B2] hover:bg-[#2E2A45]'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Promo Code */}
        <div className="bg-[#1E1B2E] rounded-xl p-4 shadow-sm">
          <h2 className="font-bold text-white mb-3">Promo Code</h2>
          <div className="flex gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
              placeholder="Enter promo code"
              className="flex-1 h-12 px-4 bg-[#252236] border border-[#2E2A45] rounded-xl text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:border-[#7C6AF7]"
            />
            <button
              onClick={handleApplyPromo}
              disabled={!promoCode || promoApplied}
              className="px-6 h-12 bg-[#7C6AF7] text-white rounded-xl font-medium hover:bg-[#6B59E8] transition-colors disabled:opacity-50"
            >
              {promoApplied ? 'Applied' : 'Apply'}
            </button>
          </div>
          {promoError && <p className="text-red-500 text-sm mt-2">{promoError}</p>}
          {promoApplied && (
            <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Promo code applied! 50% off
            </p>
          )}
          <p className="text-xs text-[#5C5878] mt-2">Try: FIRST50</p>
        </div>

        {/* Payment Method */}
        <div className="bg-[#1E1B2E] rounded-xl p-4 shadow-sm">
          <h2 className="font-bold text-white mb-3">Payment Method</h2>
          <div className="space-y-2">
            {[
              { id: 'credit', name: 'Credit/Debit Card', icon: '💳' },
              { id: 'promptpay', name: 'PromptPay', icon: '📱' },
              { id: 'cash', name: 'Pay at Shop', icon: '💵' },
            ].map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedPayment(method.id)}
                className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                  selectedPayment === method.id
                    ? 'border-[#7C6AF7] bg-[#7C6AF7]/5'
                    : 'border-[#2E2A45] hover:border-[#2E2A45]'
                }`}
              >
                <span className="text-2xl">{method.icon}</span>
                <span className="font-medium text-[#9B97B2]">{method.name}</span>
                {selectedPayment === method.id && (
                  <svg className="w-5 h-5 text-[#7C6AF7] ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Summary & Book Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1E1B2E] border-t border-[#2E2A45] p-4 safe-area-bottom">
        <div className="max-w-480 mx-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[#5C5878]">Subtotal</span>
            <span className="font-medium">฿{service.price}</span>
          </div>
          {promoApplied && (
            <div className="flex justify-between items-center mb-3">
              <span className="text-green-600">Discount</span>
              <span className="font-medium text-green-600">-฿{discount}</span>
            </div>
          )}
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-[#2E2A45]">
            <span className="text-white font-bold">Total</span>
            <span className="text-xl font-bold text-[#7C6AF7]">฿{total}</span>
          </div>
          <button
            onClick={handleBook}
            disabled={isBooking || !selectedDate || !selectedTime}
            className="w-full h-14 bg-[#7C6AF7] text-white rounded-xl font-semibold hover:bg-[#6B59E8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isBooking ? 'Confirming...' : `Confirm Booking - ฿${total}`}
          </button>
        </div>
      </div>
    </div>
  );
}
