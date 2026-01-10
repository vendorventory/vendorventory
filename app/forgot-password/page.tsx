'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Mail, 
  Shield, 
  ArrowRight,
  ArrowLeft,
  Lock,
  CheckCircle2
} from 'lucide-react';
import { Arimo } from 'next/font/google';

// Typography setup
const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
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
              Account <br /> <span className="text-[#22c55e]">Recovery</span>
            </h1>
            <p className="text-blue-100 text-lg mb-12 max-w-md font-light leading-relaxed">
              Don't worry, it happens to the best of us. We'll help you get back to selling in no time.
            </p>

            {/* Feature List */}
            <div className="space-y-8">
              {[
                { 
                  icon: <Lock className="text-white" size={24} />, 
                  title: "Secure Reset", 
                  desc: "Password reset links expire in 1 hour." 
                },
                { 
                  icon: <ShieldCheck className="text-white" size={24} />, 
                  title: "Identity Protection", 
                  desc: "We verify it's really you before changes." 
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

      {/* --- Right Side: Form Area --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 overflow-y-auto">
        <div className="w-full max-w-lg">
          
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 text-[#152570] mb-8">
            <Shield size={28} strokeWidth={2.5} className="text-[#152570]" />
            <span className="text-xl font-bold tracking-tight">Vendor Ventory</span>
          </div>

          {/* Conditional Rendering: Form vs Success State */}
          {!isSubmitted ? (
            <>
              <div className="mb-8">
                <Link href="/login" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-[#152570] transition-colors mb-6 group">
                   <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Login
                </Link>
                <h2 className="text-3xl font-bold text-[#152570] mb-2">Forgot Password?</h2>
                <p className="text-slate-500">Enter your email and we'll send you instructions to reset your password.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Email Input */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#152570] block">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#152570] transition-colors" size={20} />
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vendor@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-[#152570] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#152570]/20 focus:border-[#152570] transition-all"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-[#22c55e] hover:bg-green-500 text-white font-bold h-14 rounded-xl shadow-lg shadow-green-500/20 transition-all hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-2 group">
                  Send Reset Link <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

              </form>
            </>
          ) : (
            /* --- Success State --- */
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-[#22c55e]" />
               </div>
               <h2 className="text-3xl font-bold text-[#152570] mb-4">Check your email</h2>
               <p className="text-slate-500 mb-8 leading-relaxed">
                 We have sent a password reset link to <br/>
                 <span className="font-bold text-[#152570]">{email}</span>
               </p>

               <div className="space-y-4">
                 <button className="w-full bg-white border border-slate-200 text-[#152570] font-bold h-14 rounded-xl hover:bg-slate-50 transition-all">
                    Open Email App
                 </button>
                 
                 <p className="text-sm text-slate-400">
                   Didn't receive the email? <button onClick={() => setIsSubmitted(false)} className="text-[#22c55e] font-bold hover:underline">Click to resend</button>
                 </p>

                 <div className="pt-6">
                    <Link href="/login" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-[#152570] transition-colors group">
                      <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Login
                    </Link>
                 </div>
               </div>
            </div>
          )}
          
          {/* Footer Security Note */}
          <div className="mt-10 pt-6 border-t border-slate-100 text-center">
             <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
                <Lock size={12} className="text-[#22c55e]" /> Secure Account Recovery
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}