'use client';

import { useState } from 'react';

const categories = [
  { id: '1',  name: 'Haircut Men',     image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=200&h=200&fit=crop' },
  { id: '2',  name: 'Shave & Beard',   image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=200&h=200&fit=crop' },
  { id: '3',  name: 'Facial',          image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&h=200&fit=crop' },
  { id: '4',  name: 'Hair Color',      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop' },
  { id: '5',  name: 'Manicure',        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&h=200&fit=crop' },
  { id: '6',  name: 'Skin Care',       image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=200&h=200&fit=crop' },
  { id: '7',  name: 'Thai Massage',    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=200&h=200&fit=crop' },
  { id: '8',  name: 'Pedicure',        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&h=200&fit=crop&crop=bottom' },
  { id: '9',  name: 'Lash & Brow',     image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=200&h=200&fit=crop' },
  { id: '10', name: 'Spa',             image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&h=200&fit=crop' },
  { id: '11', name: 'Waxing',          image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200&h=200&fit=crop' },
  { id: '12', name: 'Nail Art',        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&h=200&fit=crop&crop=left' },
];

const INITIAL_SHOW = 8;

export default function Categories() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? categories : categories.slice(0, INITIAL_SHOW);

  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white">Beauty services</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-[#7C6AF7] font-medium flex items-center gap-1"
        >
          {showAll ? 'Show less' : 'See all'} <span>{showAll ? '‹' : '›'}</span>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {visible.map((cat) => (
          <button key={cat.id} className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#2E2A45] hover:border-[#7C6AF7] transition-colors">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs text-[#9B97B2] text-center leading-tight">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
