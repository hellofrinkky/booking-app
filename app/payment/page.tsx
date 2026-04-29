'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PaymentPage() {
  const [showAddCard, setShowAddCard] = useState(false);

  const paymentMethods = [
    {
      id: '1',
      type: 'credit',
      name: 'Visa ending in 4242',
      expiry: '12/25',
      isDefault: true,
    },
    {
      id: '2',
      type: 'promptpay',
      name: 'PromptPay',
      phoneNumber: '0812345678',
      isDefault: false,
    },
  ];

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
          <h1 className="text-lg font-bold text-white flex-1 text-center pr-6">Payment Methods</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-white">Saved Payment Methods</h2>
          <button
            onClick={() => setShowAddCard(true)}
            className="text-[#7C6AF7] font-medium text-sm hover:underline"
          >
            + Add New
          </button>
        </div>

        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="bg-[#1E1B2E] rounded-xl p-4 shadow-sm flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-[#252236] rounded-xl flex items-center justify-center flex-shrink-0">
                {method.type === 'credit' ? (
                  <span className="text-2xl">💳</span>
                ) : (
                  <span className="text-2xl">📱</span>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-white">{method.name}</h3>
                  {method.isDefault && (
                    <span className="px-2 py-0.5 bg-[#7C6AF7]/10 text-[#7C6AF7] text-xs font-medium rounded-full">
                      Default
                    </span>
                  )}
                </div>
                {method.expiry && <p className="text-sm text-[#5C5878]">Expires {method.expiry}</p>}
                {method.phoneNumber && <p className="text-sm text-[#5C5878]">{method.phoneNumber}</p>}
              </div>
              <button className="text-[#5C5878] hover:text-[#9B97B2]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add Card Modal */}
      {showAddCard && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
          <div className="bg-[#1E1B2E] rounded-t-3xl w-full max-w-480 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Add Payment Method</h3>
              <button onClick={() => setShowAddCard(false)} className="text-[#5C5878] hover:text-[#9B97B2]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#9B97B2] mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full h-12 px-4 bg-[#252236] border border-[#2E2A45] rounded-xl text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:border-[#7C6AF7]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#9B97B2] mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full h-12 px-4 bg-[#252236] border border-[#2E2A45] rounded-xl text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:border-[#7C6AF7]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-[#9B97B2] mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full h-12 px-4 bg-[#252236] border border-[#2E2A45] rounded-xl text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:border-[#7C6AF7]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#9B97B2] mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full h-12 px-4 bg-[#252236] border border-[#2E2A45] rounded-xl text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:border-[#7C6AF7]"
                  />
                </div>
              </div>

              <button className="w-full h-14 bg-[#7C6AF7] text-white rounded-xl font-semibold hover:bg-[#6B59E8] transition-colors">
                Add Card
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
