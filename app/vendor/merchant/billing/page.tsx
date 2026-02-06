"use client";

import React, { useState } from 'react';
import { 
  CreditCard, CheckCircle2, Zap, Download, 
  Search, Package, ShoppingCart, ArrowRightLeft, 
  HardDrive, Calendar, RefreshCw, X, Check, Crown, ChevronRight
} from 'lucide-react';

const billingHistory = [
  { id: 'INV-2025-0082', plan: 'Standard Plan', amount: '₦15,000', period: 'Feb 2025', method: 'Debit Card ****4532', status: 'Paid', date: '5 Feb 2025' },
  { id: 'INV-2025-0061', plan: 'Standard Plan', amount: '₦15,000', period: 'Jan 2025', method: 'Debit Card ****4532', status: 'Paid', date: '5 Jan 2025' },
  { id: 'INV-2024-0012', plan: 'Standard Plan', amount: '₦15,000', period: 'Dec 2024', method: 'Debit Card ****4532', status: 'Paid', date: '5 Dec 2024' },
  { id: 'INV-2024-0011', plan: 'Basic Plan', amount: '₦5,000', period: 'Nov 2024', method: 'Bank Transfer', status: 'Paid', date: '5 Nov 2024' },
  { id: 'INV-2024-0010', plan: 'Basic Plan', amount: '₦5,000', period: 'Oct 2024', method: 'Bank Transfer', status: 'Paid', date: '5 Oct 2024' },
];

const usageLimits = [
  { label: 'Products Listed', current: 45, max: 100, icon: Package, color: 'bg-emerald-500' },
  { label: 'Orders This Month', current: 123, max: 500, icon: ShoppingCart, color: 'bg-emerald-500' },
  { label: 'Active Transactions', current: 8, max: 50, icon: ArrowRightLeft, color: 'bg-emerald-500' },
  { label: 'Storage Used', current: 2.4, max: 10, unit: 'GB', icon: HardDrive, color: 'bg-emerald-500' },
];

export default function MerchantBilling() {
  const [isCycleModalOpen, setIsCycleModalOpen] = useState(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [selectedCycle, setSelectedCycle] = useState('monthly');
  const [selectedTier, setSelectedTier] = useState('standard');

  const tiers = [
    { id: 'basic', name: 'Basic', price: '₦5,000', icon: Package, features: ['Up to 50 products', '200 orders/month', '5GB storage'], buttonText: 'Select Plan', isCurrent: false },
    { id: 'standard', name: 'Standard', price: '₦15,000', icon: Zap, features: ['Up to 100 products', '500 orders/month', '10GB storage', 'Priority support'], buttonText: 'Current Plan', isCurrent: true },
    { id: 'premium', name: 'Premium', price: '₦35,000', icon: Crown, features: ['Unlimited products', 'Unlimited orders', '50GB storage', '24/7 dedicated support', 'Advanced analytics'], buttonText: 'Upgrade Now', isCurrent: false },
  ];

  return (
    <main className="min-h-screen bg-slate-50 md:bg-transparent pb-24 lg:pb-8 relative overflow-x-hidden">
      
      {/* --- MOBILE BLUE CARD HEADER --- */}
      <div className="lg:hidden bg-[#19246a] pt-12 pb-24 px-4 rounded-b-[40px] mb-[-80px] relative z-0">
        <h1 className="text-2xl font-bold text-white tracking-tight">Subscription</h1>
        <p className="text-blue-200/70 text-xs font-medium mt-1">Manage your plan and billing history</p>
      </div>

      <div className="p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 relative z-10">
        
        {/* --- DESKTOP HEADER (Hidden on Mobile) --- */}
        <div className="hidden lg:block">
          <h1 className="text-2xl font-bold text-[#1e293b]">Subscription & Billing</h1>
          <p className="text-sm text-slate-500 font-medium">Manage your plan, invoices, and billing history.</p>
        </div>

        {/* --- CURRENT SUBSCRIPTION CARD --- */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-[#1e293b] hidden lg:block">Current Subscription</h3>
          <div className="bg-white p-6 rounded-[28px] md:rounded-2xl border border-slate-200 shadow-xl shadow-blue-900/5 md:shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Zap size={28} fill="currentColor" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-[#1e293b]">Standard Plan</h2>
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[10px] font-bold uppercase tracking-wider">Active</span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">Monthly billing • ₦15,000/month</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => setIsCycleModalOpen(true)}
                  className="px-4 py-3 md:py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors order-2 sm:order-1"
                >
                  Change Cycle
                </button>
                <button 
                  onClick={() => setIsUpgradeModalOpen(true)}
                  className="px-4 py-3 md:py-2 bg-[#22c55e] hover:bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all order-1 sm:order-2 shadow-lg shadow-emerald-100"
                >
                  <Zap size={14} fill="currentColor" /> Upgrade Plan
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-slate-50">
              <div className="space-y-1">
                <p className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5"><Calendar size={12} /> Start Date</p>
                <p className="text-sm font-bold text-[#1e293b]">5 Dec 2024</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5"><RefreshCw size={12} /> Next Renewal</p>
                <p className="text-sm font-bold text-[#1e293b]">5 Mar 2025</p>
              </div>
              <div className="space-y-1 col-span-2 md:col-span-1">
                <p className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5"><CreditCard size={12} /> Billing Cycle</p>
                <p className="text-sm font-bold text-[#1e293b]">Monthly</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- USAGE & LIMITS --- */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-[#1e293b]">Usage & Limits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {usageLimits.map((limit) => {
              const percentage = (limit.current / limit.max) * 100;
              return (
                <div key={limit.label} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-50 text-slate-400 rounded-lg flex items-center justify-center"><limit.icon size={18} /></div>
                      <div>
                        <p className="text-xs font-bold text-[#1e293b]">{limit.label}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{limit.current}{limit.unit || ''} / {limit.max}{limit.unit || ''}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-500">{Math.round(percentage)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`${limit.color} h-full rounded-full transition-all duration-500`} style={{ width: `${percentage}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- BILLING HISTORY (Responsive Table) --- */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-[#1e293b]">Billing History</h3>
          <div className="bg-white rounded-[24px] md:rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100">
              <div className="relative w-full md:max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                <input 
                  type="text" 
                  placeholder="Search invoices..." 
                  className="w-full pl-9 pr-4 py-2.5 md:py-2 border border-slate-100 rounded-xl text-xs outline-none bg-slate-50/50" 
                />
              </div>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50/50 border-b border-slate-100">
                  <tr>
                    {['Invoice ID', 'Plan', 'Amount', 'Status', 'Date', 'Action'].map((h) => (
                      <th key={h} className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {billingHistory.map((inv) => (
                    <tr key={inv.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-xs text-[#1e293b]">{inv.id}</td>
                      <td className="px-6 py-4 text-xs font-medium text-slate-600">{inv.plan}</td>
                      <td className="px-6 py-4 text-xs font-bold text-[#1e293b]">{inv.amount}</td>
                      <td className="px-6 py-4"><span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[10px] font-bold">Paid</span></td>
                      <td className="px-6 py-4 text-xs font-medium text-slate-400">{inv.date}</td>
                      <td className="px-6 py-4">
                        <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                          <Download size={12} /> Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card-List View */}
            <div className="md:hidden divide-y divide-slate-100">
              {billingHistory.map((inv) => (
                <div key={inv.id} className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-[#19246a]">{inv.id}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-medium text-slate-500">{inv.date}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <span className="text-[10px] font-bold text-[#22c55e]">Paid</span>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-3">
                    <div className="space-y-0.5">
                      <p className="text-xs font-black text-[#1e293b]">{inv.amount}</p>
                      <p className="text-[9px] font-medium text-slate-400">{inv.plan}</p>
                    </div>
                    <ChevronRight size={16} className="text-slate-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* --- CHANGE BILLING CYCLE MODAL (Mobile Bottom-Sheet) --- */}
      {isCycleModalOpen && (
        <div className="fixed inset-0 z-[500] flex items-end md:items-center justify-center">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsCycleModalOpen(false)} />
          <div className="relative bg-white w-full max-w-2xl rounded-t-[32px] md:rounded-[32px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom md:zoom-in duration-300">
            <div className="p-6 md:p-8 flex items-center justify-between">
              <div>
                <h2 className="text-lg md:text-xl font-black text-[#1e293b]">Billing Cycle</h2>
                <p className="text-xs font-bold text-slate-400 mt-1">Select your preferred frequency</p>
              </div>
              <button onClick={() => setIsCycleModalOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-400"><X size={20} /></button>
            </div>

            <div className="p-6 md:p-8 pt-0 grid grid-cols-1 md:grid-cols-2 gap-4">
              {['monthly', 'yearly'].map((cycle) => (
                <div 
                  key={cycle}
                  onClick={() => setSelectedCycle(cycle)}
                  className={`p-5 rounded-[20px] border-2 cursor-pointer transition-all ${
                    selectedCycle === cycle ? 'border-indigo-600 bg-indigo-50/20' : 'border-slate-100'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedCycle === cycle ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-400'}`}>
                      <Calendar size={20} />
                    </div>
                    {cycle === 'yearly' && <span className="bg-emerald-100 text-emerald-600 text-[8px] font-black px-2 py-1 rounded-md uppercase tracking-wider">Save 20%</span>}
                  </div>
                  <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{cycle}</h3>
                  <p className="text-xl font-black text-[#19246a] mt-1">{cycle === 'monthly' ? '₦15,000' : '₦144,000'}</p>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-slate-50 flex flex-col md:flex-row gap-3 justify-end">
              <button onClick={() => setIsCycleModalOpen(false)} className="px-6 py-3 font-bold text-slate-400 text-xs uppercase order-2 md:order-1">Cancel</button>
              <button className="px-8 py-3 bg-[#19246a] text-white rounded-xl font-black text-xs uppercase shadow-lg shadow-indigo-200 order-1 md:order-2 active:scale-95 transition-transform">Confirm Change</button>
            </div>
          </div>
        </div>
      )}

      {/* --- UPGRADE PLAN MODAL (Mobile Full-Height Sheet) --- */}
      {isUpgradeModalOpen && (
        <div className="fixed inset-0 z-[600] flex items-end md:items-center justify-center">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsUpgradeModalOpen(false)} />
          <div className="relative bg-white w-full h-[92vh] md:h-auto md:max-w-5xl rounded-t-[40px] md:rounded-[32px] shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom duration-300">
            <div className="sticky top-0 bg-white p-6 md:p-8 border-b border-slate-100 flex items-center justify-between z-10">
              <div>
                <h2 className="text-xl font-black text-[#1e293b]">Scale Your Business</h2>
                <p className="text-xs font-bold text-slate-400 mt-1">Upgrade your plan to unlock more features</p>
              </div>
              <button onClick={() => setIsUpgradeModalOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-400"><X size={20} /></button>
            </div>

            <div className="p-6 md:p-12 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tiers.map((tier) => (
                  <div 
                    key={tier.id}
                    onClick={() => !tier.isCurrent && setSelectedTier(tier.id)}
                    className={`relative p-6 rounded-[32px] md:rounded-[24px] border-2 flex flex-col transition-all ${
                      tier.isCurrent 
                        ? 'border-blue-600 bg-white' 
                        : selectedTier === tier.id ? 'border-indigo-600 ring-4 ring-indigo-50' : 'border-slate-100'
                    }`}
                  >
                    {tier.isCurrent && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white rounded-full text-[8px] font-black uppercase tracking-widest">
                        Your Current Plan
                      </div>
                    )}
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${tier.id === 'premium' ? 'bg-amber-50 text-amber-500' : 'bg-slate-50 text-slate-400'}`}>
                        <tier.icon size={28} />
                      </div>
                      <h3 className="text-xs font-black text-[#1e293b] uppercase tracking-widest">{tier.name}</h3>
                      <div className="mt-2">
                        <span className="text-2xl font-black text-[#19246a]">{tier.price}</span>
                        <span className="text-[10px] font-bold text-slate-400 ml-1">/ mo</span>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {tier.features.map((f) => (
                        <li key={f} className="flex gap-3 text-[11px] font-bold text-slate-600">
                          <Check size={14} className="text-emerald-500 shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <button 
                      disabled={tier.isCurrent} 
                      className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
                        tier.isCurrent 
                          ? 'bg-slate-100 text-slate-400' 
                          : 'bg-[#19246a] text-white shadow-lg active:scale-95'
                      }`}
                    >
                      {tier.buttonText}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}