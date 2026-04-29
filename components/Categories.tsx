const categories = [
  { id: '1', name: 'Haircut for men', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=200&h=200&fit=crop' },
  { id: '2', name: 'Shave for men', image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=200&h=200&fit=crop' },
  { id: '3', name: 'Facial for women', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&h=200&fit=crop' },
  { id: '4', name: 'Bleach for women', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop' },
  { id: '5', name: 'Waxing for women', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&h=200&fit=crop' },
  { id: '6', name: 'Facial for women', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=200&h=200&fit=crop' },
];

export default function Categories() {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white">Beauty services</h2>
        <button className="text-sm text-[#7C6AF7] font-medium flex items-center gap-1">
          see all <span>›</span>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((cat) => (
          <button key={cat.id} className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#2E2A45]">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs text-[#9B97B2] text-center leading-tight">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
