"use client";

import { 
  AlertCircle, 
  Lock, 
  Wallet, 
  History, 
  Plus, 
  FilePlus, 
  ArrowRightLeft, 
  Crown, 
  CheckCircle2, 
  User,
  ShoppingBag,
  TrendingUp,
  LayoutDashboard,
  Info,
  ChevronRight
} from "lucide-react";
import Link from 'next/link';

export default function IndividualDashboard() {
  return (
    <div className="max-w-7xl mx-auto md:p-8 space-y-6 md:space-y-8 bg-slate-50 min-h-screen pb-24">
      
      {/* HEADER AREA WITH MOBILE CARD BACKGROUND */}
      <div className="lg:hidden bg-[#19246a] p-6 pb-12 rounded-b-[40px] shadow-lg space-y-6">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              Welcome back, Adebayo! <TrendingUp size={20} className="text-indigo-300" />
            </h1>
            <p className="text-[11px] text-indigo-200 font-medium tracking-tight">Here's your business summary for today</p>
          </div>
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
            <LayoutDashboard size={20} />
          </div>
        </div>

        {/* Quick Stats Row for Mobile */}
        <div className="flex justify-between items-center bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
          <div className="text-center flex-1">
            <p className="text-[9px] uppercase font-bold text-indigo-200">Revenue</p>
            <p className="text-sm font-black text-white mt-0.5">₦0.45M</p>
          </div>
          <div className="text-center flex-1 border-x border-white/10">
            <p className="text-[9px] uppercase font-bold text-indigo-200">Escrow</p>
            <p className="text-sm font-black text-orange-400 mt-0.5">₦85K</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-[9px] uppercase font-bold text-indigo-200">Orders</p>
            <p className="text-sm font-black text-emerald-400 mt-0.5">3</p>
          </div>
        </div>
      </div>

      {/* Desktop Header Area (Hidden on mobile) */}
      <div className="hidden lg:block">
        <h1 className="text-2xl font-bold text-[#1e293b] flex items-center gap-2">
          Welcome back, Adebayo! <TrendingUp size={24} className="text-indigo-600" />
        </h1>
        <p className="text-slate-500 mt-1">Here's your business summary for today</p>
      </div>

      {/* Offset wrapper to pull content over the mobile header curve */}
      <div className="px-4 md:px-0 space-y-6 md:space-y-8 -mt-6 lg:mt-0 relative z-10">
        
        {/* KYC ALERT BANNER (Kept in DOM but hidden per request) */}
        <div className="hidden bg-[#fff1f2] border border-red-100 p-4 rounded-xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <AlertCircle className="text-red-500" size={18} />
            <p className="text-red-800 text-[13px] font-medium leading-none">Complete KYC verification to unlock payouts and access full platform features</p>
          </div>
          <button className="bg-[#ef4444] text-white px-5 py-2 rounded-lg text-sm font-bold">
            Complete KYC
          </button>
        </div>

        {/* MAIN STATS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* Business Status Card */}
          <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6 uppercase tracking-widest">
              <User size={18} className="text-indigo-600" />
              <h3 className="font-black text-[10px] text-[#1e293b]">Business Status</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl">
                <p className="text-[10px] uppercase text-slate-400 font-black tracking-widest mb-1">Business Name</p>
                <p className="text-sm font-black text-[#19246a]">Adebayo Ogunlesi</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl">
                <p className="text-[10px] uppercase text-slate-400 font-black tracking-widest mb-1">Vendor Type</p>
                <p className="text-sm font-black text-[#19246a]">Individual</p>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                <p className="text-[10px] uppercase text-slate-400 font-black tracking-widest">KYC Status</p>
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  <span className="text-[9px] font-black uppercase">Not Started</span>
                </div>
              </div>
              <button className="w-full bg-[#22c55e] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-wider mt-2 active:scale-95 transition-all shadow-lg shadow-emerald-100">
                Complete KYC Verification
              </button>
            </div>
          </div>

          {/* Financial Columns */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm h-[calc(50%-8px)] lg:h-[calc(50%-12px)] flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Total Revenue</p>
                <h2 className="text-3xl font-black text-[#19246a]">₦0.45M</h2>
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">All-time earnings</p>
            </div>
            
            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm h-[calc(50%-8px)] lg:h-[calc(50%-12px)] flex flex-col justify-center items-center text-center">
              <div className="bg-slate-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-3 border border-slate-100">
                <Lock className="text-slate-300" size={24} />
              </div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">AVAILABLE FOR PAYOUT</p>
              <p className="text-sm font-black text-[#1e293b] mt-1 uppercase tracking-tighter">KYC REQUIRED</p>
            </div>
          </div>

          {/* Balance Columns */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm h-[calc(50%-8px)] lg:h-[calc(50%-12px)] flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Escrow Balance</p>
                <h2 className="text-3xl font-black text-[#f97316]">₦85K</h2>
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Funds held in escrow</p>
            </div>

            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm h-[calc(50%-8px)] lg:h-[calc(50%-12px)] flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1 leading-none">Pending Transactions</p>
                <h2 className="text-3xl font-black text-[#1e293b] mt-2">2</h2>
              </div>
              <div className="flex justify-end">
                <ChevronRight size={16} className="text-slate-200" />
              </div>
            </div>
          </div>
        </div>

        {/* ACTIVITY SUMMARY */}
        <div className="space-y-4">
          <h3 className="font-black text-[#1e293b] uppercase text-[10px] tracking-widest px-2">Orders & Activity Summary</h3>
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm grid grid-cols-3 text-center divide-x divide-slate-50">
            <div className="space-y-1">
              <p className="text-3xl font-black text-[#19246a]">3</p>
              <p className="text-[9px] text-slate-400 font-black uppercase tracking-tighter">Active Orders</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-[#19246a]">12</p>
              <p className="text-[9px] text-slate-400 font-black uppercase tracking-tighter">Completed Orders</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-red-500">0</p>
              <p className="text-[9px] text-slate-400 font-black uppercase tracking-tighter">Disputed Orders</p>
            </div>
          </div>
        </div>

        {/* QUICK ACTIONS GRID */}
        <div className="space-y-4">
          <h3 className="font-black text-[#1e293b] uppercase text-[10px] tracking-widest px-2">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Complete KYC', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
              { label: 'Create Invoice', icon: FilePlus, color: 'text-indigo-500', bg: 'bg-slate-50' },
              { label: 'Add Product', icon: Plus, color: 'text-blue-500', bg: 'bg-slate-50' },
              { label: 'View Transactions', icon: History, color: 'text-slate-500', bg: 'bg-slate-100' },
            ].map((action, idx) => (
              <button key={idx} className="bg-white border-transparent hover:border-indigo-500 p-6 md:p-8 rounded-[32px] border shadow-sm text-center transition-all group active:scale-95">
                <div className={`w-12 h-12 ${action.bg} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <action.icon className={action.color} size={24} />
                </div>
                <p className="font-black text-xs text-slate-700 uppercase tracking-tighter">{action.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* ACCOUNT LIMITS INFO CARD */}
        <div className="bg-[#1e293b] rounded-[40px] p-6 md:p-10 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Info size={180} />
          </div>
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
              <Info size={20} />
            </div>
            <h3 className="font-black text-xs uppercase tracking-[0.2em]">Individual Account Limits</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-2">
              <p className="text-[9px] uppercase tracking-[0.2em] text-indigo-200 font-black">Per Transaction Limit</p>
              <p className="text-4xl font-black tracking-tight">₦500K</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-2">
              <p className="text-[9px] uppercase tracking-[0.2em] text-indigo-200 font-black">Monthly Limit</p>
              <p className="text-4xl font-black tracking-tight">₦2.0M</p>
            </div>
          </div>
          <p className="text-[11px] text-slate-400 mt-8 leading-relaxed font-medium relative z-10 max-w-2xl">
            As an Individual vendor, you have lower transaction limits. Upgrade to Merchant for higher limits and advanced features.
          </p>
        </div>

        {/* UPGRADE CALL TO ACTION */}
        <div className="bg-[#fff1f2] border border-pink-100 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden shadow-sm">
          <div className="bg-[#19246a] w-24 h-24 rounded-[32px] shadow-2xl flex items-center justify-center text-yellow-400 shrink-0">
            <Crown size={48} strokeWidth={1.5} />
          </div>
          <div className="flex-1 space-y-6">
            <div className="text-center md:text-left space-y-2">
              <h3 className="text-2xl font-black text-[#1e293b] tracking-tight">Upgrade to Merchant Account</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
                Unlock powerful features and grow your business with higher transaction limits, advanced analytics, custom branding, and priority support.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center md:justify-start">
              {["Higher Limits", "Analytics", "Custom Branding", "Priority Support"].map(f => (
                <div key={f} className="flex items-center gap-2 text-[10px] font-black text-[#19246a] uppercase tracking-widest">
                  <CheckCircle2 className="text-emerald-500" size={16} /> {f}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
  <Link href="/vendor/individual/upgrade">
    <button className="bg-[#19246a] text-white px-12 py-5 rounded-[24px] font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-indigo-900 transition-all shadow-xl shadow-indigo-200 active:scale-95 w-full sm:w-auto">
      <ArrowRightLeft size={18} /> Upgrade Now
    </button>
  </Link>
  
  <button className="bg-white border border-slate-200 text-[#19246a] px-12 py-5 rounded-[24px] font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
    Compare Features
  </button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}