import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#13111C] pb-8">
      {/* Header */}
      <div className="bg-[#1E1B2E] sticky top-0 z-50 bg-[#13111C] border-b border-[#2E2A45]">
        <div className="max-w-480 mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/account" className="flex items-center">
            <svg className="w-6 h-6 text-[#9B97B2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-lg font-bold text-white">Privacy Policy</h1>
        </div>
      </div>

      <div className="max-w-480 mx-auto p-4 space-y-4">
        <div className="bg-[#1E1B2E] rounded-xl p-5 shadow-sm">
          <p className="text-xs text-[#5C5878] mb-4">Last updated: April 2026</p>

          {[
            {
              title: '1. Information We Collect',
              content:
                'We collect information you provide directly to us, such as your name, email address, phone number, and payment information when you create an account or make a booking.',
            },
            {
              title: '2. How We Use Your Information',
              content:
                'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.',
            },
            {
              title: '3. Information Sharing',
              content:
                'We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to provide our services, comply with the law, or protect our rights.',
            },
            {
              title: '4. Data Security',
              content:
                'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
            },
            {
              title: '5. Cookies',
              content:
                'We use cookies and similar tracking technologies to track activity on our service and hold certain information to improve your experience.',
            },
            {
              title: '6. Your Rights',
              content:
                'You have the right to access, update, or delete your personal information at any time. You may also opt out of receiving promotional communications from us.',
            },
            {
              title: '7. Contact Us',
              content:
                'If you have any questions about this Privacy Policy, please contact us at privacy@bookingapp.com.',
            },
          ].map((section) => (
            <div key={section.title} className="mb-5 last:mb-0">
              <h2 className="font-bold text-white mb-2">{section.title}</h2>
              <p className="text-sm text-[#9B97B2] leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
