'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Shield,
  ArrowLeft,
  Mail,
  Check,
  RotateCw
} from 'lucide-react';
import { Arimo } from 'next/font/google';

// Typography setup
const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

export default function VerifyEmailPage() {
  // Timer state for the "Resend" button
  const [countdown, setCountdown] = useState(53);
  const [canResend, setCanResend] = useState(false);

  // Countdown logic
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleResend = () => {
    if (!canResend) return;
    // Add resend logic here
    setCountdown(60);
    setCanResend(false);
  };

  return (
    <div className={`min-h-screen flex ${arimo.variable} ${arimo.className}`}>
      
      {/* --- Left Side: Branding (Identical layout to Signup) --- */}
      <div className="hidden lg:flex w-1/2 relative bg-[#152570] flex-col justify-between p-16 overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#152570]/90 z-10" /> 
          <Image 
            src="/images/vendors.jpg" 
            alt="Vendor Background" 
            fill 
            className="object-cover opacity-50 mix-blend-overlay"
            priority
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-20 h-full flex flex-col">
          <div className="flex items-center gap-3 text-white mb-16">
            <Shield size={32} strokeWidth={2.5} />
            <span className="text-2xl font-bold tracking-tight">Vendor Ventory</span>
          </div>

          <div className="mt-auto mb-16">
            <h1 className="text-5xl font-medium text-white mb-6 leading-tight">
              Welcome back to your <br /> dashboard
            </h1>
            <p className="text-blue-100 text-lg mb-12 max-w-md">
              Join thousands of vendors across Africa using escrow-protected payments
            </p>

            <div className="space-y-8">
              {[
                { 
                  icon: <ShieldCheck className="text-white" size={24} />, 
                  title: "Get paid securely", 
                  desc: "Your funds are protected until every transaction is successfully completed." 
                },
                { 
                  icon: <TrendingUp className="text-white" size={24} />, 
                  title: "Growing network of verified vendors", 
                  desc: "Join a fast-expanding community of vetted sellers across multiple markets." 
                },
                { 
                  icon: <Users className="text-white" size={24} />, 
                  title: "Trusted by vendors across Africa", 
                  desc: "Thousands of vendors rely on Vendor Ventory to sell, get paid, and grow confidently." 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-12 h-12 bg-[#22c55e] rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-green-900/20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-blue-200 text-sm leading-relaxed max-w-md font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Right Side: Email Confirmation Content --- */}
      <div className="w-full lg:w-1/2 bg-[#F8FAFC] flex flex-col p-6 md:p-12 relative">
        
        {/* Back Link */}
        <Link 
            href="/signup" 
            className="hidden md:inline-flex items-center gap-2 text-[#4A5565] hover:text-[#152570] font-medium transition-colors w-fit mb-8"
        >
            <ArrowLeft size={20} /> Back to sign up
        </Link>

        {/* Center Card Container */}
        <div className="flex-grow flex items-center justify-center">
            <div className="w-full max-w-[520px] bg-white rounded-[20px] shadow-xl shadow-slate-200/60 p-8 md:p-12 text-center">
            
            {/* Icon Group */}
            <div className="relative inline-block mb-8">
                <div className="w-24 h-24 bg-[#152570] rounded-full flex items-center justify-center text-white shadow-lg">
                    <Mail size={40} strokeWidth={1.5} />
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center border-4 border-white text-white">
                    <Check size={16} strokeWidth={4} />
                </div>
            </div>

            <h2 className="text-3xl font-medium text-[#152570] mb-3">Confirm your email</h2>
            <p className="text-[#4A5565] mb-8">
                We've sent a confirmation link to <br/>
                <span className="font-bold text-[#152570]">vendor@email.com</span>
            </p>

            {/* Next Steps Box */}
            <div className="bg-slate-50 rounded-xl p-6 text-left mb-8 border border-slate-100">
                <p className="text-[#152570] font-bold text-sm mb-4">Next steps:</p>
                <ul className="space-y-4">
                    {[
                        "Check your inbox for our confirmation email",
                        "Click the confirmation link in the email",
                        "Return here to log in to your vendor account"
                    ].map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#22c55e] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                {i + 1}
                            </div>
                            <span className="text-[#4A5565] text-sm">{step}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Resend Section */}
            <div className="mb-8">
                <p className="text-sm text-[#4A5565] mb-3">Didn't receive the email?</p>
                <button 
                    onClick={handleResend}
                    disabled={!canResend}
                    className={`
                        inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border font-medium text-sm transition-all
                        ${canResend 
                            ? 'border-[#152570] text-[#152570] hover:bg-blue-50 cursor-pointer' 
                            : 'border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed'}
                    `}
                >
                    <RotateCw size={16} className={!canResend ? 'animate-spin-slow' : ''} /> 
                    {canResend ? 'Resend Email' : `Resend in ${countdown}s`}
                </button>
            </div>

            {/* Footer Note */}
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                Check your spam folder if you don't see the email in your inbox. Need help? Contact <a href="mailto:support@vendorventory.com" className="text-[#152570] underline">support@vendorventory.com</a>
            </p>

            </div>
        </div>
      </div>
    </div>
  );
}