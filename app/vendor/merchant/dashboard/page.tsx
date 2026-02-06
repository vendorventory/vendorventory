// app/vendor/merchant/dashboard/page.tsx

import { 
  AlertCircle, 
  Info, 
  Lock, 
  Wallet, 
  History, 
  FilePlus, 
  Plus, 
  ArrowRightLeft, 
  Gavel,
  Store,
  LayoutDashboard,
  HandMetal, // Using Hand icon for the dynamic "Welcome"
  ShieldAlert,
  ChevronRight,
  TrendingUp,
  Receipt
} from "lucide-react";

export default function MerchantDashboard() {
  return (
    <div className="max-w-7xl mx-auto md:p-8 space-y-6 md:space-y-8 bg-slate-50 min-h-screen pb-24">
      
      {/* HEADER SECTION */}
      {/* Mobile: Blue Card Background | Desktop: Standard Header */}
      <div className="lg:hidden bg-[#19246a] p-6 pb-12 rounded-b-[40px] shadow-lg space-y-6">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              Welcome back, Adebayo! <HandMetal size={20} className="text-yellow-400 rotate-12" />
            </h1>
            <p className="text-[11px] text-indigo-200 font-medium tracking-tight">Here's your business summary for today</p>
          </div>
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
            <TrendingUp size={20} />
          </div>
        </div>

        {/* Quick Stats Overlay for Mobile */}
        <div className="flex justify-between items-center bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
          <div className="text-center flex-1">
            <p className="text-[9px] uppercase font-bold text-indigo-200">Revenue</p>
            <p className="text-sm font-black text-white mt-0.5">₦2.45M</p>
          </div>
          <div className="text-center flex-1 border-x border-white/10">
            <p className="text-[9px] uppercase font-bold text-indigo-200">Escrow</p>
            <p className="text-sm font-black text-orange-400 mt-0.5">₦385K</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-[9px] uppercase font-bold text-indigo-200">Active</p>
            <p className="text-sm font-black text-emerald-400 mt-0.5">8</p>
          </div>
        </div>
      </div>

      {/* Desktop Header Area (Hidden on mobile) */}
      <div className="hidden lg:block">
        <h1 className="text-2xl font-bold text-[#1e293b] flex items-center gap-2">
          Welcome back, Adebayo! <HandMetal size={24} className="text-yellow-400 rotate-12" />
        </h1>
        <p className="text-slate-500">Here's your business summary for today</p>
      </div>

      <div className="px-4 md:px-0 space-y-6 -mt-6 lg:mt-0 relative z-10">
        {/* Alerts Section */}
        <div className="space-y-3">
          <div className="bg-[#fff1f2] border border-red-100 p-4 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                <ShieldAlert className="text-red-600" size={18} />
              </div>
              <p className="text-red-800 text-xs md:text-sm font-bold">Complete KYC verification to unlock payouts and access full platform features</p>
            </div>
            <button className="bg-[#ef4444] text-white px-6 py-2.5 rounded-xl text-xs font-black shadow-sm active:scale-95 transition-all">Complete KYC</button>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                <Info className="text-blue-600" size={18} />
              </div>
              <p className="text-blue-800 text-xs md:text-sm font-bold">You have 1 active dispute that requires your attention</p>
            </div>
            <button className="bg-[#1e293b] text-white px-6 py-2.5 rounded-xl text-xs font-black shadow-sm active:scale-95 transition-all">View Dispute</button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Business Status Card */}
          <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
            <h3 className="font-black text-[#1e293b] mb-6 flex items-center gap-2 uppercase text-xs tracking-widest">
              <Store size={18} className="text-indigo-600" /> Business Status
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl">
                <p className="text-[10px] uppercase text-slate-400 font-black tracking-widest mb-1">Business Name</p>
                <p className="text-sm font-black text-[#19246a]">Adebayo Fashion Store</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl">
                <p className="text-[10px] uppercase text-slate-400 font-black tracking-widest mb-1">Vendor Type</p>
                <p className="text-sm font-black text-[#19246a]">Merchant</p>
              </div>
              <button className="w-full bg-[#22c55e] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-wider mt-2 shadow-lg shadow-emerald-100 active:scale-95 transition-all">Complete KYC Verification</button>
            </div>
          </div>

          {/* Financials */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm h-[calc(50%-8px)] lg:h-[calc(50%-12px)] flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase text-slate-400 font-black tracking-widest mb-1">Total Revenue</p>
                <h2 className="text-3xl font-black text-[#19246a]">₦2.45M</h2>
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">All-time earnings</p>
            </div>
            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm h-[calc(50%-8px)] lg:h-[calc(50%-12px)] flex flex-col justify-center items-center text-center">
               <div className="bg-slate-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-3">
                 <Lock size={20} className="text-slate-300" />
               </div>
               <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">KYC REQUIRED</p>
            </div>
          </div>

          {/* Escrow & Pending */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm h-[calc(50%-8px)] lg:h-[calc(50%-12px)] flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase text-slate-400 font-black tracking-widest mb-1">Escrow Balance</p>
                <h2 className="text-3xl font-black text-[#f97316]">₦385K</h2>
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Funds held in escrow</p>
            </div>
            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm h-[calc(50%-8px)] lg:h-[calc(50%-12px)] flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase text-slate-400 font-black tracking-widest leading-none">Pending Transactions</p>
                <h2 className="text-3xl font-black text-[#19246a] mt-2">3</h2>
              </div>
              <div className="flex justify-end">
                <History size={16} className="text-slate-200" />
              </div>
            </div>
          </div>
        </div>

        {/* Activity Summary */}
        <div className="space-y-4">
          <h3 className="font-black text-[#1e293b] uppercase text-xs tracking-widest px-2">Orders & Activity Summary</h3>
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm grid grid-cols-3 text-center divide-x divide-slate-50">
            <div><p className="text-2xl font-black text-[#19246a]">8</p><p className="text-[10px] font-bold text-slate-400 uppercase">Active</p></div>
            <div><p className="text-2xl font-black text-[#19246a]">47</p><p className="text-[10px] font-bold text-slate-400 uppercase">Completed</p></div>
            <div><p className="text-2xl font-black text-red-500">1</p><p className="text-[10px] font-bold text-slate-400 uppercase">Disputed</p></div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h3 className="font-black text-[#1e293b] uppercase text-xs tracking-widest px-2">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Complete KYC', icon: Lock, bg: 'bg-emerald-50', color: 'text-emerald-500' },
              { label: 'Create Invoice', icon: FilePlus, bg: 'bg-indigo-50', color: 'text-indigo-500' },
              { label: 'Add Product', icon: Plus, bg: 'bg-blue-50', color: 'text-blue-500' },
              { label: 'View Transactions', icon: Receipt, bg: 'bg-slate-100', color: 'text-slate-500' },
            ].map((action) => (
              <button key={action.label} className="bg-white border-transparent hover:border-indigo-500 p-6 md:p-8 rounded-[32px] border shadow-sm text-center transition-all group active:scale-95">
                <div className={`w-12 h-12 ${action.bg} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <action.icon className={action.color} size={24} />
                </div>
                <p className="font-black text-xs text-slate-700 uppercase tracking-tighter">{action.label}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}