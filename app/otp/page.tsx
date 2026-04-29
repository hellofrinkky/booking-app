'use client';

import { useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function OTPPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get('phone') || '0XXXXXXXXX';
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [countdown, setCountdown] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown for resend
  useState(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setResendDisabled(false);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  });

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(0, 1);

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);

    if (/^\d+$/.test(pastedData)) {
      const newOtp = [...otp];
      for (let i = 0; i < pastedData.length && i < 6; i++) {
        newOtp[i] = pastedData[i];
      }
      setOtp(newOtp);

      const nextIndex = Math.min(pastedData.length, 5);
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join('');

    if (otpCode.length !== 6) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    router.push('/account');
    setIsLoading(false);
  };

  const handleResend = () => {
    setResendDisabled(true);
    setCountdown(30);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
    // Simulate resend OTP
    console.log('Resending OTP to', phone);
  };

  return (
    <div className="min-h-screen bg-[#13111C] flex flex-col">
      {/* Header */}
      <div className="p-4">
        <Link href="/signup" className="inline-flex items-center">
          <svg className="w-6 h-6 text-[#9B97B2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-6">
        <div className="mb-8 text-center">
          {/* OTP Icon */}
          <div className="w-20 h-20 bg-[#7C6AF7]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#7C6AF7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">Verification Code</h1>
          <p className="text-[#5C5878]">
            Enter the 6-digit code sent to<br />
            <span className="font-semibold text-[#9B97B2]">{phone}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OTP Inputs */}
          <div className="flex justify-center gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => { inputRefs.current[index] = el; }}
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-12 h-14 text-center text-xl font-semibold border-2 border-[#2E2A45] rounded-xl focus:outline-none focus:border-[#7C6AF7] focus:ring-2 focus:ring-[#7C6AF7]/20 transition-all bg-[#13111C]"
              />
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || otp.join('').length !== 6}
            className="w-full h-14 bg-[#7C6AF7] text-white rounded-xl font-semibold hover:bg-[#6B59E8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Verifying...' : 'Verify'}
          </button>
        </form>

        {/* Resend Code */}
        <div className="text-center mt-6">
          <p className="text-[#9B97B2]">
            Didn't receive the code?{' '}
            {resendDisabled ? (
              <span className="text-[#5C5878]">
                Resend in <span className="font-medium text-[#7C6AF7]">{countdown}s</span>
              </span>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="text-[#7C6AF7] font-semibold hover:underline"
              >
                Resend
              </button>
            )}
          </p>
        </div>

        {/* Change Number */}
        <p className="text-center mt-4 text-sm text-[#5C5878]">
          Wrong number?{' '}
          <Link href="/signup" className="text-[#7C6AF7] font-medium hover:underline">
            Change
          </Link>
        </p>
      </div>
    </div>
  );
}
