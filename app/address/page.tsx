'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AddressPage() {
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('1');

  const addresses = [
    {
      id: '1',
      label: 'Home',
      address: '123 Sukhumvit Road',
      district: 'Khlong Toei',
      city: 'Bangkok',
      postalCode: '10110',
      isDefault: true,
    },
    {
      id: '2',
      label: 'Work',
      address: '456 Silom Road',
      district: 'Bang Rak',
      city: 'Bangkok',
      postalCode: '10500',
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
          <h1 className="text-lg font-bold text-white flex-1 text-center pr-6">My Addresses</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-white">Saved Addresses</h2>
          <button
            onClick={() => setShowAddAddress(true)}
            className="text-[#7C6AF7] font-medium text-sm hover:underline"
          >
            + Add New
          </button>
        </div>

        <div className="space-y-3">
          {addresses.map((address) => (
            <div
              key={address.id}
              onClick={() => setSelectedAddress(address.id)}
              className={`bg-[#1E1B2E] rounded-xl p-4 shadow-sm cursor-pointer transition-all ${
                selectedAddress === address.id
                  ? 'ring-2 ring-[#7C6AF7]'
                  : 'hover:shadow-md'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#7C6AF7]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#7C6AF7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">{address.label}</h3>
                      {address.isDefault && (
                        <span className="px-2 py-0.5 bg-[#7C6AF7]/10 text-[#7C6AF7] text-xs font-medium rounded-full">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#9B97B2] mt-1">{address.address}</p>
                    <p className="text-sm text-[#5C5878]">
                      {address.district}, {address.city} {address.postalCode}
                    </p>
                  </div>
                </div>
                {selectedAddress === address.id && (
                  <svg className="w-5 h-5 text-[#7C6AF7]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Address Modal */}
      {showAddAddress && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
          <div className="bg-[#1E1B2E] rounded-t-3xl w-full max-w-480 p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Add New Address</h3>
              <button onClick={() => setShowAddAddress(false)} className="text-[#5C5878] hover:text-[#9B97B2]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#9B97B2] mb-2">
                  Address Label
                </label>
                <input
                  type="text"
                  placeholder="Home, Work, etc."
                  className="w-full h-12 px-4 bg-[#252236] border border-[#2E2A45] rounded-xl text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:border-[#7C6AF7]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#9B97B2] mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  placeholder="123 Sukhumvit Road"
                  className="w-full h-12 px-4 bg-[#252236] border border-[#2E2A45] rounded-xl text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:border-[#7C6AF7]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-[#9B97B2] mb-2">
                    District
                  </label>
                  <input
                    type="text"
                    placeholder="Khlong Toei"
                    className="w-full h-12 px-4 bg-[#252236] border border-[#2E2A45] rounded-xl text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:border-[#7C6AF7]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#9B97B2] mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Bangkok"
                    className="w-full h-12 px-4 bg-[#252236] border border-[#2E2A45] rounded-xl text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:border-[#7C6AF7]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#9B97B2] mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  placeholder="10110"
                  className="w-full h-12 px-4 bg-[#252236] border border-[#2E2A45] rounded-xl text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:border-[#7C6AF7]"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="default"
                  className="w-4 h-4 text-[#7C6AF7] border-gray-300 rounded focus:ring-[#7C6AF7]"
                />
                <label htmlFor="default" className="text-sm text-[#9B97B2]">
                  Set as default address
                </label>
              </div>

              <button className="w-full h-14 bg-[#7C6AF7] text-white rounded-xl font-semibold hover:bg-[#6B59E8] transition-colors">
                Save Address
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
