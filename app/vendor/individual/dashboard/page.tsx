"use client";

import { 
  AlertCircle, 
  Info, 
  Lock, 
  Wallet, 
  History, 
  Plus, 
  FilePlus, 
  ArrowRightLeft, 
  Crown, 
  CheckCircle2, 
  User,
  Gavel,
  Star
} from "lucide-react";

export default function IndividualDashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-slate-50 min-h-screen">
      {/* Header Area */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-[#1e293b]">Welcome back, Adebayo! 👋</h1>
          <p className="text-slate-500">Here's your business summary for today</p>
        </div>
      </div>

      {/* Primary KYC Alert */}
      <div className="bg-[#fff1f2] border border-red-100 p-4 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <AlertCircle className="text-red-500" size={20} />
          <p className="text-red-800 text-sm font-medium">Complete KYC verification to unlock payouts and access full platform features</p>
        </div>
        <button className="bg-[#ef4444] hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors">
          Complete KYC
        </button>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Business Status Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <User size={18} className="text-indigo-600" />
            <h3 className="font-bold text-[#1e293b]">Business Status</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Business Name</p>
              <p className="text-sm font-bold text-slate-800">Adebayo Ogunlesi</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Vendor Type</p>
              <p className="text-sm font-bold text-slate-800">Individual</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">KYC Status</p>
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100 mt-1">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                <span className="text-[11px] font-bold uppercase">Not Started</span>
              </div>
            </div>
            <div className="pt-2">
               <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-2">Payout Status</p>
               <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-2 rounded-lg border border-slate-200">
                  <Lock size={14} />
                  <span className="text-xs font-bold">Locked</span>
               </div>
            </div>
            <button className="w-full bg-[#22c55e] hover:bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm mt-2 transition-colors">
              Complete KYC Verification
            </button>
          </div>
        </div>

        {/* Financial Column */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-[calc(50%-12px)]">
            <div className="flex items-center gap-2 text-slate-500 mb-4">
               <History size={16} className="text-indigo-500" />
               <p className="text-sm font-medium">Total Revenue</p>
            </div>
            <h2 className="text-3xl font-extrabold text-[#1e293b]">₦0.45M</h2>
            <p className="text-xs text-slate-400 mt-2">All-time earnings</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-[calc(50%-12px)] flex flex-col justify-center items-center text-center">
             <div className="bg-slate-50 p-4 rounded-xl mb-3 border border-slate-100">
               <Lock className="text-slate-400" size={28} />
             </div>
             <p className="text-sm font-bold text-slate-800 uppercase tracking-tight">KYC Required</p>
             <p className="text-[11px] text-slate-400 mt-1">Complete verification to unlock payouts</p>
          </div>
        </div>

        {/* Balance Column */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-[calc(50%-12px)]">
            <div className="flex items-center gap-2 text-slate-500 mb-4">
               <Wallet size={16} className="text-orange-400" />
               <p className="text-sm font-medium">Escrow Balance</p>
            </div>
            <h2 className="text-3xl font-extrabold text-[#f97316]">₦85K</h2>
            <p className="text-xs text-slate-400 mt-2">Funds held in escrow</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-[calc(50%-12px)]">
            <div className="flex items-center gap-2 text-slate-500 mb-4">
               <ArrowRightLeft size={16} className="text-indigo-400" />
               <p className="text-sm font-medium">Pending Transactions</p>
            </div>
            <h2 className="text-3xl font-extrabold text-[#1e293b]">2</h2>
            <p className="text-xs text-slate-400 mt-2">Awaiting confirmation</p>
          </div>
        </div>
      </div>

      {/* Activity Summary */}
      <h3 className="font-bold text-[#1e293b] mb-4">Orders & Activity Summary</h3>
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="grid grid-cols-3 divide-x divide-slate-100 text-center">
          <div><p className="text-2xl font-bold text-slate-800">3</p><p className="text-xs text-slate-400 font-medium mt-1">Active Orders</p></div>
          <div><p className="text-2xl font-bold text-slate-800">12</p><p className="text-xs text-slate-400 font-medium mt-1">Completed Orders</p></div>
          <div><p className="text-2xl font-bold text-red-500">0</p><p className="text-xs text-slate-400 font-medium mt-1">Disputed Orders</p></div>
        </div>
      </div>

      {/* Individual Account Limits */}
      <div className="bg-[#f0f7ff] border border-blue-100 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-600 p-2 rounded-full text-white shadow-md shadow-blue-200">
            <Info size={18} />
          </div>
          <h3 className="font-bold text-[#1e293b]">Individual Account Limits</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-blue-200/50 shadow-sm">
            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Per Transaction Limit</p>
            <p className="text-2xl font-extrabold text-slate-800 tracking-tight">₦500K</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-blue-200/50 shadow-sm">
            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Monthly Limit</p>
            <p className="text-2xl font-extrabold text-slate-800 tracking-tight">₦2.0M</p>
          </div>
        </div>
        <p className="text-center text-[12px] text-slate-500 mt-6 leading-relaxed">
          As an Individual vendor, you have lower transaction limits. Upgrade to Merchant for higher limits and advanced features.
        </p>
      </div>

      {/* Quick Actions Grid */}
      <h3 className="font-bold text-[#1e293b] mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Complete KYC', icon: Lock, color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { label: 'Create Invoice', icon: FilePlus, color: 'text-indigo-500', bg: 'bg-indigo-50' },
          { label: 'Add Product', icon: Plus, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'View Transactions', icon: History, color: 'text-slate-500', bg: 'bg-slate-100' },
          { label: 'Customer Help', icon: Info, color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { label: 'Inventory', icon: FilePlus, color: 'text-indigo-500', bg: 'bg-indigo-50' },
          { label: 'Disputed', icon: Gavel, color: 'text-red-500', bg: 'bg-red-50' },
          { label: 'Priority', icon: Star, color: 'text-pink-500', bg: 'bg-pink-50' },
        ].map((action, idx) => (
          <button key={idx} className="bg-white border border-slate-100 hover:border-indigo-500 p-6 rounded-2xl group transition-all shadow-sm text-center">
            <div className={`w-12 h-12 ${action.bg} rounded-xl mx-auto mb-3 flex items-center justify-center`}>
              <action.icon className={action.color} size={24} />
            </div>
            <p className="font-bold text-[13px] text-slate-700">{action.label}</p>
          </button>
        ))}
      </div>

      {/* Upgrade Call to Action */}
      <div className="bg-[#fef2f2] border border-pink-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
        <div className="bg-[#1e293b] p-5 rounded-3xl shadow-xl text-yellow-400">
          <Crown size={40} />
        </div>
        <div className="flex-1 space-y-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-extrabold text-[#1e293b]">Upgrade to Merchant Account</h3>
            <p className="text-sm text-slate-600 mt-1 max-w-lg">
              Unlock powerful features and grow your business with higher transaction limits, advanced analytics, custom branding, and priority support.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
            {["Higher Limits", "Analytics", "Custom Branding", "Priority Support"].map(f => (
              <div key={f} className="flex items-center gap-2 text-[12px] font-bold text-slate-700">
                <CheckCircle2 className="text-emerald-500" size={16} /> {f}
              </div>
            ))}
          </div>
          <div className="flex gap-4 pt-4 justify-center md:justify-start">
            <button className="bg-[#1e293b] text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-indigo-900 transition-all shadow-md active:scale-95">
              <Crown size={16} className="text-yellow-400" /> Upgrade Now
            </button>
            <button className="bg-white border border-slate-300 text-slate-700 px-8 py-3 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all active:scale-95">
              Compare Features
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}