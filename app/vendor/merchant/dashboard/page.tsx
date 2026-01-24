// app/vendor/merchant/dashbaord/page.tsx

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
  Store, // Ensure this is explicitly included
  LayoutDashboard
} from "lucide-react";

export default function MerchantDashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-slate-50 min-h-screen">
      {/* Header Area */}
      <div>
        <h1 className="text-2xl font-bold text-[#1e293b]">Welcome back, Adebayo! 👋</h1>
        <p className="text-slate-500">Here's your business summary for today</p>
      </div>

      {/* Alerts */}
      <div className="space-y-3">
        <div className="bg-[#fff1f2] border border-red-100 p-4 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertCircle className="text-red-500" size={20} />
            <p className="text-red-800 text-sm font-medium leading-none">Complete KYC verification to unlock payouts and access full platform features</p>
          </div>
          <button className="bg-[#ef4444] text-white px-5 py-2 rounded-lg text-sm font-semibold">Complete KYC</button>
        </div>
        
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Info className="text-blue-500" size={20} />
            <p className="text-blue-800 text-sm font-medium leading-none">You have 1 active dispute that requires your attention</p>
          </div>
          <button className="bg-[#1e293b] text-white px-5 py-2 rounded-lg text-sm font-semibold">View Dispute</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Business Status */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-[#1e293b] mb-6 flex items-center gap-2">
            <Store size={18} className="text-indigo-600" /> Business Status
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">Business Name</p>
              <p className="text-sm font-bold">Adebayo Fashion Store</p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">Vendor Type</p>
              <p className="text-sm font-bold">Merchant</p>
            </div>
            <button className="w-full bg-[#22c55e] text-white py-3 rounded-xl font-bold text-sm mt-2">Complete KYC Verification</button>
          </div>
        </div>

        {/* Financial Column */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-[calc(50%-12px)]">
            <p className="text-sm text-slate-500 mb-1">Total Revenue</p>
            <h2 className="text-3xl font-extrabold text-[#1e293b]">₦2.45M</h2>
            <p className="text-xs text-slate-400 mt-2">All-time earnings</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-[calc(50%-12px)] flex flex-col justify-center items-center">
             <div className="bg-slate-50 p-4 rounded-xl mb-2"><Lock size={24} className="text-slate-400" /></div>
             <p className="text-sm font-bold uppercase">KYC Required</p>
          </div>
        </div>

        {/* Balance Column */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-[calc(50%-12px)]">
            <p className="text-sm text-slate-500 mb-1">Escrow Balance</p>
            <h2 className="text-3xl font-extrabold text-[#f97316]">₦385K</h2>
            <p className="text-xs text-slate-400 mt-2">Funds held in escrow</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-[calc(50%-12px)]">
            <p className="text-sm text-slate-500 mb-1 leading-none">Pending Transactions</p>
            <h2 className="text-3xl font-extrabold text-[#1e293b] mt-2">3</h2>
          </div>
        </div>
      </div>

      {/* Orders Summary */}
      <h3 className="font-bold text-[#1e293b] mb-4">Orders & Activity Summary</h3>
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-3 text-center divide-x">
        <div><p className="text-2xl font-extrabold">8</p><p className="text-xs text-slate-400">Active Orders</p></div>
        <div><p className="text-2xl font-extrabold">47</p><p className="text-xs text-slate-400">Completed Orders</p></div>
        <div><p className="text-2xl font-extrabold text-red-500">1</p><p className="text-xs text-slate-400">Disputed Orders</p></div>
      </div>

      {/* Quick Actions */}
      <h3 className="font-bold text-[#1e293b] mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Complete KYC', icon: Lock, bg: 'bg-emerald-50', color: 'text-emerald-500' },
          { label: 'Create Invoice', icon: FilePlus, bg: 'bg-indigo-50', color: 'text-indigo-500' },
          { label: 'Add Product', icon: Plus, bg: 'bg-blue-50', color: 'text-blue-500' },
          { label: 'View Transactions', icon: History, bg: 'bg-slate-100', color: 'text-slate-500' },
        ].map((action) => (
          <button key={action.label} className="bg-white border hover:border-indigo-500 p-8 rounded-2xl shadow-sm text-center transition-all">
            <div className={`w-12 h-12 ${action.bg} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
              <action.icon className={action.color} size={24} />
            </div>
            <p className="font-bold text-sm text-slate-700">{action.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}