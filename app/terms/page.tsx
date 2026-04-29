'use client';

import Link from 'next/link';

export default function TermsPage() {
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
          <h1 className="text-lg font-bold text-white flex-1 text-center pr-6">Terms of Service</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="bg-[#1E1B2E] rounded-xl p-6 space-y-6">
          <section>
            <h2 className="font-bold text-white text-lg mb-3">1. Acceptance of Terms</h2>
            <p className="text-[#9B97B2] text-sm leading-relaxed">
              By accessing and using Booking App, you accept and agree to be bound by the terms
              and provision of this agreement. If you do not agree to abide by these terms,
              please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-white text-lg mb-3">2. Services</h2>
            <p className="text-[#9B97B2] text-sm leading-relaxed">
              Booking App provides a platform for users to discover and book appointments with
              various service providers including but not limited to barbershops, nail salons,
              spas, and massage centers. We are not the service provider itself and do not
              control the quality of services provided.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-white text-lg mb-3">3. Booking and Cancellation</h2>
            <p className="text-[#9B97B2] text-sm leading-relaxed">
              Users can book appointments through our platform. Cancellation policies vary by
              service provider. Please review the specific cancellation policy before making
              a booking. Late cancellations or no-shows may result in fees charged by the
              service provider.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-white text-lg mb-3">4. Payment</h2>
            <p className="text-[#9B97B2] text-sm leading-relaxed">
              Payments are processed securely through our payment partners. Prices displayed
              on the platform are in Thai Baht (THB). Some services may require payment at
              the time of booking, while others allow payment at the service provider.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-white text-lg mb-3">5. User Conduct</h2>
            <p className="text-[#9B97B2] text-sm leading-relaxed">
              Users agree to use the platform in good faith. This includes making genuine
              bookings, showing up for appointments, and treating service providers with
              respect. Abuse of the platform may result in account suspension.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-white text-lg mb-3">6. Limitation of Liability</h2>
            <p className="text-[#9B97B2] text-sm leading-relaxed">
              Booking App is not liable for any damages, injuries, or losses that may occur
              during or as a result of services provided by third-party service providers.
              Users book services at their own risk.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-white text-lg mb-3">7. Modifications to Terms</h2>
            <p className="text-[#9B97B2] text-sm leading-relaxed">
              We reserve the right to modify these terms at any time. Users will be notified
              of significant changes. Continued use of the platform after modifications
              constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-white text-lg mb-3">8. Contact Information</h2>
            <p className="text-[#9B97B2] text-sm leading-relaxed">
              For questions about these Terms of Service, please contact us at
              legal@bookingapp.com or call 02-123-4567.
            </p>
          </section>

          <div className="pt-4 border-t border-[#2E2A45]">
            <p className="text-sm text-[#5C5878] text-center">
              Last updated: January 1, 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
