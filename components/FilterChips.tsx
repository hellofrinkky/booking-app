'use client';

import { useState } from 'react';

const filters = [
  { id: 'gender', label: 'Gender', hasDropdown: true },
  { id: 'price', label: 'Price', hasDropdown: true },
  { id: 'offers', label: 'Offers', icon: '✦' },
  { id: 'rating', label: 'Rating', sortIcon: true },
];

export default function FilterChips() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="flex gap-2 px-4 py-2 overflow-x-auto hide-scrollbar">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => setActive(active === f.id ? null : f.id)}
          className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
            active === f.id
              ? 'bg-[#7C6AF7] border-[#7C6AF7] text-white'
              : 'bg-transparent border-[#2E2A45] text-[#9B97B2] hover:border-[#7C6AF7]'
          }`}
        >
          {f.icon && <span className="text-xs">{f.icon}</span>}
          {f.sortIcon && (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          )}
          {f.label}
          {f.hasDropdown && (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
      ))}
    </div>
  );
}
