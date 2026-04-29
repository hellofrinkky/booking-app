'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BottomNav from '@/components/BottomNav';

export default function AccountPage() {
  const router = useRouter();
  const [showLogout, setShowLogout] = useState(false);

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '0812345678',
    avatar: 'https://i.pravatar.cc/150?img=12',
  };

  const menuItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Profile',
      subtitle: 'Edit your personal info',
      href: '/profile',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Favorites',
      subtitle: 'Your saved shops and services',
      href: '/favorites',
      badge: '3',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Addresses',
      subtitle: 'Manage your saved addresses',
      href: '/address',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: 'Payment Methods',
      subtitle: 'Manage your payment options',
      href: '/payment',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Settings',
      subtitle: 'Notifications, privacy, and more',
      href: '#',
    },
  ];

  const infoItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'About',
      href: '/about',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Terms of Service',
      href: '/terms',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Privacy Policy',
      href: '/privacy',
    },
  ];

  const handleLogout = () => {
    setShowLogout(false);
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-[#13111C] pb-24">
      {/* Header */}
      <div className="bg-[#1E1B2E] sticky top-0 z-50 border-b border-[#2E2A45]">
        <div className="max-w-480 mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-white">Account</h1>
            <button className="w-10 h-10 bg-[#1E1B2E]/20 backdrop-blur rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            </button>
          </div>

          {/* User Info */}
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full border-4 border-[#2E2A45] object-cover"
            />
            <div className="flex-1 text-white">
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-[#9B97B2] text-sm mt-1">{user.email}</p>
              <p className="text-[#9B97B2] text-sm">{user.phone}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-480 mx-auto p-4 space-y-4">
        <div className="bg-[#1E1B2E] rounded-xl overflow-hidden">
          {menuItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-4 p-4 hover:bg-[#13111C] transition-colors ${
                index !== menuItems.length - 1 ? 'border-b border-[#2E2A45]' : ''
              }`}
            >
              <div className="w-12 h-12 bg-[#7C6AF7]/10 rounded-xl flex items-center justify-center text-[#7C6AF7] flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  {item.badge && (
                    <span className="px-2 py-0.5 bg-[#7C6AF7] text-white text-xs font-medium rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#5C5878]">{item.subtitle}</p>
              </div>
              <svg className="w-5 h-5 text-[#5C5878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Info Links */}
        <div className="bg-[#1E1B2E] rounded-xl overflow-hidden">
          {infoItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-4 p-4 hover:bg-[#13111C] transition-colors ${
                index !== infoItems.length - 1 ? 'border-b border-[#2E2A45]' : ''
              }`}
            >
              <div className="w-12 h-12 bg-[#252236] rounded-xl flex items-center justify-center text-[#9B97B2] flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">{item.title}</h3>
              </div>
              <svg className="w-5 h-5 text-[#5C5878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={() => setShowLogout(true)}
          className="w-full py-4 text-[#7C6AF7] font-semibold bg-[#1E1B2E] rounded-xl hover:bg-red-50 transition-colors"
        >
          Logout
        </button>

        {/* App Version */}
        <p className="text-center text-sm text-[#5C5878] py-4">Version 1.0.0</p>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogout && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
          <div className="bg-[#1E1B2E] rounded-t-3xl w-full max-w-480 p-6 animate-slide-up">
            <h3 className="text-xl font-bold text-white mb-2">Logout</h3>
            <p className="text-[#5C5878] mb-6">Are you sure you want to logout?</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogout(false)}
                className="flex-1 h-12 border border-[#2E2A45] rounded-xl font-semibold text-[#9B97B2] hover:bg-[#13111C] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 h-12 bg-[#7C6AF7] text-white rounded-xl font-semibold hover:bg-[#6B59E8] transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
