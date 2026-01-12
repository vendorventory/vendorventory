'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { register } from "@/actions/register"; 
import { 
  ShieldCheck, 
  Store, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Users, 
  Shield,
  ArrowRight,
  AlertCircle,
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

// Google Icon Component
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
      <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
      <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
      <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.734 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
      <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
    </g>
  </svg>
);

export default function SignupPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Feedback State
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    startTransition(() => {
      register(formData).then((data) => {
        if (data.error) {
          setError(data.error);
        }
        if (data.success) {
          setSuccess(data.success);
          // Optional: Clear form or redirect immediately
          setTimeout(() => router.push("/login"), 2000);
        }
      });
    });
  };

  return (
    <div className={`min-h-screen flex flex-col lg:flex-row ${arimo.variable} ${arimo.className} bg-[#F8FAFC]`}>
      
      {/* --- Left Side: Branding --- */}
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
          <Link href="/">
             {/* UPDATED: Replaced Icon+Text with local logo image */}
            <div className="mb-12 cursor-pointer">
              <Image 
                src="/images/logo.png" 
                alt="Vendor Ventory" 
                width={200} 
                height={60} 
                className="h-14 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          <div className="mt-auto mb-12">
            <h1 className="text-4xl xl:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Start selling with <br /> <span className="text-[#22c55e]">confidence</span>
            </h1>
            <p className="text-blue-100 text-lg mb-12 max-w-md font-light leading-relaxed">
              Join thousands of vendors across Africa using our protected payment infrastructure.
            </p>

            <div className="space-y-8">
              {[
                { 
                  icon: <ShieldCheck className="text-white" size={24} />, 
                  title: "Secure Payments", 
                  desc: "Funds protected until delivery." 
                },
                { 
                  icon: <Users className="text-white" size={24} />, 
                  title: "Verified Community", 
                  desc: "Join trusted African sellers." 
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

      {/* --- Right Side: Sign Up Form --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 overflow-y-auto">
        <div className="w-full max-w-lg">
          
          {/* UPDATED: Mobile Logo - Replaced Icon+Text with local logo image */}
          <div className="lg:hidden mb-8">
            <Link href="/">
              <Image 
                src="/images/logo.png" 
                alt="Vendor Ventory" 
                width={160} 
                height={48} 
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#152570] mb-2">Create Account</h2>
            <p className="text-slate-500">Sign up to start receiving secure payments.</p>
          </div>

          {/* Google Login Button */}
          <button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 hover:bg-slate-50 text-[#152570] font-semibold h-14 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md mb-6 group">
            <GoogleIcon />
            <span>Sign up with Google</span>
          </button>

          {/* Divider */}
          <div className="relative flex py-2 items-center mb-6">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium">Or continue with email</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Business Name */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#152570] block">Business Name</label>
              <div className="relative group">
                <Store className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#152570] transition-colors" size={20} />
                <input 
                  name="name"
                  type="text" 
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isPending}
                  placeholder="e.g. Lagos Fashion Hub"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-[#152570] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#152570]/20 focus:border-[#152570] transition-all disabled:opacity-50"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#152570] block">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#152570] transition-colors" size={20} />
                <input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isPending}
                  placeholder="vendor@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-[#152570] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#152570]/20 focus:border-[#152570] transition-all disabled:opacity-50"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#152570] block">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#152570] transition-colors" size={20} />
                <input 
                  name="password"
                  type={showPassword ? "text" : "password"} 
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isPending}
                  placeholder="Min. 8 characters"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-12 text-[#152570] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#152570]/20 focus:border-[#152570] transition-all disabled:opacity-50"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#152570] focus:outline-none transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#152570] block">Confirm Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#152570] transition-colors" size={20} />
                <input 
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"} 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  disabled={isPending}
                  placeholder="Re-enter password"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-12 text-[#152570] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#152570]/20 focus:border-[#152570] transition-all disabled:opacity-50"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#152570] focus:outline-none transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Error / Success Messages */}
            {error && (
              <div className="p-3 bg-red-50 text-red-500 rounded-xl text-sm flex items-center gap-2 border border-red-100">
                <AlertCircle size={16} /> {error}
              </div>
            )}
            {success && (
              <div className="p-3 bg-green-50 text-green-600 rounded-xl text-sm flex items-center gap-2 border border-green-100">
                <CheckCircle2 size={16} /> {success}
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isPending}
              className="w-full bg-[#22c55e] hover:bg-green-500 text-white font-bold h-14 rounded-xl shadow-lg shadow-green-500/20 transition-all hover:scale-[1.01] active:scale-[0.98] mt-4 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isPending ? "Creating Account..." : "Create Vendor Account"} 
              {!isPending && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
            </button>

            {/* Footer Links */}
            <div className="text-center pt-4">
              <p className="text-slate-500">
                Already have an account? <Link href="/login" className="text-[#152570] font-bold hover:underline">Log in</Link>
              </p>
            </div>

          </form>
          
          <div className="mt-10 pt-6 border-t border-slate-100 text-center">
             <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400 mb-2">
                <Lock size={12} className="text-[#22c55e]" /> Bank-grade security encryption
             </div>
            <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
              By creating an account, you agree to our <a href="#" className="underline hover:text-[#152570]">Terms</a> and <a href="#" className="underline hover:text-[#152570]">Privacy Policy</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}