'use client';

import Link from 'next/link';

export default function ProfilePage() {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '0812345678',
    birthday: '1990-01-15',
    gender: 'Male',
  };

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
          <h1 className="text-lg font-bold text-white flex-1 text-center pr-6">Profile</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Avatar */}
        <div className="bg-[#1E1B2E] rounded-xl p-6 text-center">
          <div className="w-24 h-24 bg-[#7C6AF7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl font-bold text-[#7C6AF7]">JD</span>
          </div>
          <button className="text-[#7C6AF7] font-medium text-sm hover:underline">
            Change Avatar
          </button>
        </div>

        {/* Form */}
        <div className="bg-[#1E1B2E] rounded-xl p-4 space-y-4">
          <h2 className="font-bold text-white mb-4">Personal Information</h2>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-[#9B97B2] mb-2">
                First Name
              </label>
              <input
                type="text"
                defaultValue={user.firstName}
                className="w-full h-12 px-4 bg-[#252236] border border-[#2E2A45] rounded-xl text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:border-[#7C6AF7]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#9B97B2] mb-2">
                Last Name
              </label>
              <input
                type="text"
                defaultValue={user.lastName}
                className="w-full h-12 px-4 bg-[#252236] border border-[#2E2A45] rounded-xl text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:border-[#7C6AF7]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#9B97B2] mb-2">
              Email
            </label>
            <input
              type="email"
              defaultValue={user.email}
              className="w-full h-12 px-4 bg-[#252236] border border-[#2E2A45] rounded-xl text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:border-[#7C6AF7]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#9B97B2] mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              defaultValue={user.phone}
              className="w-full h-12 px-4 bg-[#252236] border border-[#2E2A45] rounded-xl text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:border-[#7C6AF7]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-[#9B97B2] mb-2">
                Birthday
              </label>
              <input
                type="date"
                defaultValue={user.birthday}
                className="w-full h-12 px-4 bg-[#252236] border border-[#2E2A45] rounded-xl text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:border-[#7C6AF7]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#9B97B2] mb-2">
                Gender
              </label>
              <select
                defaultValue={user.gender}
                className="w-full h-12 px-4 bg-[#252236] border border-[#2E2A45] rounded-xl text-white placeholder-[#5C5878] focus:outline-none focus:ring-2 focus:ring-[#7C6AF7]/20 focus:border-[#7C6AF7]"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button className="w-full h-14 bg-[#7C6AF7] text-white rounded-xl font-semibold hover:bg-[#6B59E8] transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}
