import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import FilterChips from '@/components/FilterChips';
import Categories from '@/components/Categories';
import PopularShops from '@/components/PopularShops';
import BottomNav from '@/components/BottomNav';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#13111C] pb-20">
      <Header />
      <HeroBanner />
      <FilterChips />
      <Categories />
      <PopularShops />
      <BottomNav />
    </div>
  );
}
