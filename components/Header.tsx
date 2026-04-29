export default function Header() {
  return (
    <header className="bg-[#13111C] sticky top-0 z-50">
      <div className="mobile-container max-w-480 mx-auto px-4 py-3">
        <button className="flex items-center gap-2 text-left">
          <svg className="w-5 h-5 text-[#7C6AF7]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-lg font-semibold text-white">Munich Center</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
