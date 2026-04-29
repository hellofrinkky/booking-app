'use client';

import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();

  return (
    <div className="px-4 py-3">
      <button onClick={() => router.push('/search')} className="w-full relative">
        <div className="w-full h-12 pl-12 pr-4 bg-[#252236] rounded-2xl text-sm text-[#5C5878] flex items-center border border-[#2E2A45] hover:border-[#7C6AF7] transition-colors">
          Shop name or service
        </div>
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7C6AF7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  );
}
