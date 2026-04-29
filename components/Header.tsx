export default function Header() {
  return (
    <header className="bg-[#13111C] sticky top-0 z-50 border-b border-[#2E2A45]">
      <div className="mobile-container max-w-480 mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#7C6AF7] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-lg font-bold text-white tracking-tight">BookEase</span>
        </div>

        {/* Location + Notification */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-sm text-[#9B97B2] hover:text-white transition-colors">
            <svg className="w-4 h-4 text-[#7C6AF7]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Munich Center</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button className="relative w-9 h-9 flex items-center justify-center rounded-full bg-[#1E1B2E] border border-[#2E2A45] hover:border-[#7C6AF7] transition-colors">
            <svg className="w-5 h-5 text-[#9B97B2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {/* Unread dot */}
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#7C6AF7] rounded-full" />
          </button>
        </div>
      </div>
    </header>
  );
}
