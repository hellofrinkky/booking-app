'use client';

import { useRouter } from 'next/navigation';

export default function HeroBanner() {
  const router = useRouter();

  return (
    <div className="px-4 pt-4 pb-2 space-y-3">
      {/* Main banner */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#7C6AF7] to-[#4F3FD4] p-5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
        <div className="absolute bottom-0 right-8 w-20 h-20 bg-white/5 rounded-full translate-y-6" />

        <div className="relative">
          <p className="text-white/70 text-sm font-medium mb-1">Good morning 👋</p>
          <h2 className="text-white text-xl font-bold leading-snug mb-3">
            Find & book your<br />perfect service
          </h2>

          {/* Embedded search */}
          <button
            onClick={() => router.push('/search')}
            className="w-full flex items-center gap-3 bg-white/15 hover:bg-white/20 transition-colors rounded-xl px-4 h-11 mb-3"
          >
            <svg className="w-4 h-4 text-white/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-white/60 text-sm">Shop name or service...</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1.5">
              <svg className="w-3.5 h-3.5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-white text-xs font-semibold">4.8 rated</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1.5">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-white text-xs font-semibold">200+ shops</span>
            </div>
          </div>
        </div>
      </div>

      {/* Promo strip */}
      <div className="flex items-center gap-2 bg-[#1E1B2E] border border-[#2E2A45] rounded-xl px-4 py-3">
        <span className="text-lg">🎉</span>
        <div className="flex-1 min-w-0">
          <p className="text-white text-xs font-semibold">First booking 50% off!</p>
          <p className="text-[#5C5878] text-xs truncate">Use code <span className="text-[#7C6AF7] font-bold">FIRST50</span> at checkout</p>
        </div>
        <span className="text-[#7C6AF7] text-xs font-semibold flex-shrink-0">Claim →</span>
      </div>
    </div>
  );
}
