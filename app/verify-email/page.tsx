'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  TrendingUp, 
  Shield,
  ArrowLeft,
  Mail,
  Check,
  RotateCw,
  ExternalLink,
  Lock
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
  const [countdown, setCountdown] = useState(60);
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
    <div className={`min-h-screen flex flex-col lg:flex-row ${arimo.variable} ${arimo.className} bg-[#F8FAFC]`}>
      
      {/* --- Left Side: Branding (Hidden on mobile/tablet) --- */}
      <div className="hidden lg:flex w-full lg:w-1/2 relative bg-[#152570] flex-col justify-between p-12 xl:p-20 overflow-hidden h-screen sticky top-0">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#152570]/95 via-[#152570]/80 to-[#152570]/90 z-10" /> 
          <Image 
            src="/images/vendors.jpg" 
            alt="Vendor Background" 
            fill 
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-20 h-full flex flex-col">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 text-white mb-12 cursor-pointer">
                <Shield size={32} strokeWidth={2.5} className="text-[#22c55e]" />
                <span className="text-2xl font-bold tracking-tight">Vendor Ventory</span>
            </div>
          </Link>

          {/* Main Text */}
          <div className="mt-auto mb-12">
            <h1 className="text-4xl xl:text-6xl font-bold text-white mb-6 leading-[1.1]">
              One last <br /> <span className="text-[#22c55e]">step</span>
            </h1>
            <p className="text-blue-100 text-lg mb-12 max-w-md font-light leading-relaxed">
              Verify your email address to activate your secure vendor account and start selling.
            </p>

            {/* Feature List */}
            <div className="space-y-8">
              {[
                { 
                  icon: <ShieldCheck className="text-white" size={24} />, 
                  title: "Identity Verified", 
                  desc: "Ensures only real businesses join the network." 
                },
                { 
                  icon: <TrendingUp className="text-white" size={24} />, 
                  title: "Instant Activation", 
                  desc: "Start creating invoices immediately after verification." 
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-blue-200 text-sm font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-blue-300 text-xs">
             © 2026 VendorVentory Inc.
          </div>
        </div>
      </div>

      {/* --- Right Side: Content --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 overflow-y-auto">
        <div className="w-full max-w-lg">
          
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 text-[#152570] mb-8">
            <Shield size={28} strokeWidth={2.5} className="text-[#152570]" />
            <span className="text-xl font-bold tracking-tight">Vendor Ventory</span>
          </div>

          <div className="mb-6">
            <Link href="/login" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-[#152570] transition-colors group">
               <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Login
            </Link>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-8 md:p-10 text-center border border-slate-100">
            
            {/* Animated Icon */}
            <div className="relative inline-block mb-8">
                <div className="w-20 h-20 bg-[#F0F9FF] rounded-full flex items-center justify-center text-[#152570]">
                    <Mail size={32} strokeWidth={2} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center border-4 border-white text-white shadow-sm">
                    <Check size={14} strokeWidth={4} />
                </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#152570] mb-3">Check your inbox</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
                We've sent a verification link to <br/>
                <span className="font-bold text-[#152570] text-lg">vendor@email.com</span>
            </p>

            {/* Mobile-Friendly Action Button */}
            <a href="mailto:" className="block w-full bg-[#152570] hover:bg-blue-900 text-white font-bold h-14 rounded-xl shadow-lg shadow-blue-900/10 transition-all hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-2 mb-6">
               Open Email App <ExternalLink size={18} />
            </a>

            {/* Steps */}
            <div className="bg-slate-50 rounded-xl p-5 text-left mb-8 border border-slate-100">
                <p className="text-[#152570] font-bold text-xs uppercase tracking-wide mb-3">Instructions:</p>
                <ul className="space-y-3">
                    {[
                        "Click the link in the email we sent you.",
                        "Your account will be verified instantly.",
                        "Log in to complete your profile setup."
                    ].map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-white border border-slate-200 text-[#22c55e] flex items-center justify-center text-[10px] font-bold shrink-0 shadow-sm">
                                {i + 1}
                            </div>
                            <span className="text-slate-600 text-sm font-medium">{step}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Resend Logic */}
            <div className="border-t border-slate-100 pt-6">
                <p className="text-sm text-slate-400 mb-3">Didn't receive the email?</p>
                <button 
                    onClick={handleResend}
                    disabled={!canResend}
                    className={`
                        inline-flex items-center gap-2 px-5 py-2 rounded-lg font-bold text-sm transition-all
                        ${canResend 
                            ? 'text-[#152570] hover:bg-blue-50 cursor-pointer' 
                            : 'text-slate-400 cursor-not-allowed'}
                    `}
                >
                    <RotateCw size={14} className={!canResend ? 'animate-spin' : ''} /> 
                    {canResend ? 'Click to Resend' : `Resend available in ${countdown}s`}
                </button>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center">
             <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400 mb-2">
                <Lock size={12} className="text-[#22c55e]" /> Secure Verification
             </div>
             <p className="text-xs text-slate-400">
                Wrong email? <Link href="/signup" className="underline hover:text-[#152570]">Change email address</Link>
             </p>
          </div>

        </div>
      </div>
    </div>
  );
}