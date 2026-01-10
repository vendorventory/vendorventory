'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Shield, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  CheckCircle2,
  X
} from 'lucide-react';
import { Arimo } from 'next/font/google';

// Typography setup
const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(true); // Shows the confirmation toast by default

  // Auto-dismiss the toast after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowToast(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen flex ${arimo.variable} ${arimo.className} relative`}>
      
      {/* --- Toast Notification (Matches image_510f6c.png) --- */}
      {showToast && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-5 fade-in duration-300 w-auto">
            <div className="bg-white text-slate-700 px-4 py-3 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 flex items-center gap-3 whitespace-nowrap">
                <div className="bg-black rounded-full p-0.5">
                   <CheckCircle2 size={14} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium">Email confirmed successfully! You can now log in.</span>
                <button onClick={() => setShowToast(false)} className="ml-2 text-slate-400 hover:text-slate-600">
                    <X size={16} />
                </button>
            </div>
        </div>
      )}

      {/* --- Left Side: Branding (Standard across Auth pages) --- */}
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

      {/* --- Right Side: Login Form --- */}
      <div className="w-full lg:w-1/2 bg-[#F8FAFC] flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-[520px] bg-white rounded-[20px] shadow-xl shadow-slate-200/60 p-8 md:p-12">
          
          <div className="mb-10">
            <h2 className="text-3xl font-medium text-[#152570] mb-2">Welcome back</h2>
            <p className="text-[#4A5565]">Log in to manage your invoices and payments.</p>
          </div>

          <form className="space-y-6">
            
            {/* Email Address - Pre-filled & Verified Style */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#152570] block">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="email" 
                  defaultValue="vendor@email.com" 
                  className="w-full bg-slate-50 border border-[#22c55e] rounded-lg py-3.5 pl-12 pr-12 text-[#4A5565] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/10 transition-all"
                />
                {/* Green Checkmark for Verified State */}
                <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 text-[#22c55e]" size={20} />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-[#152570]">Password</label>
                <Link href="/forgot-password" className="text-xs font-bold text-[#152570] hover:underline">
                    Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3.5 pl-12 pr-12 text-[#4A5565] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#152570]/10 focus:border-[#152570] transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#22c55e] hover:bg-green-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-green-500/20 transition-all hover:-translate-y-0.5 mt-8">
              Log In
            </button>

            {/* Footer Links */}
            <div className="text-center space-y-4 pt-4">
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <Lock size={14} className="text-[#22c55e]" /> Secure payments & delivery confirmation
              </div>
              
              <p className="text-[#4A5565]">
                Don't have an account? <Link href="/signup" className="text-[#152570] font-bold hover:underline">Sign up</Link>
              </p>
            </div>

          </form>
          
          <div className="mt-12 text-center">
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              By creating an account, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}