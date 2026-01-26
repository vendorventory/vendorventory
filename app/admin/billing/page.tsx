'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LayoutDashboard, Store, Truck, Users, CreditCard, 
  FileText, ShieldCheck, Settings, Bell, ChevronDown, 
  Menu, X, DollarSign, ShoppingCart, Scale, 
  TrendingUp, Zap, Code, FileClock, Activity, 
  CheckCircle2, Search, Filter, Clock, Percent, AlertCircle, Download
} from 'lucide-react';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

// --- Mock Data: Billing Stats (Overview) ---
const billingStats = [
  { label: 'Total Platform Revenue', value: '₦0.66M', subtext: 'All revenue streams combined', icon: <TrendingUp size={20} />, highlight: false },
  { label: 'Escrow Fees (Primary Revenue)', value: '₦234K', subtext: '10% fee split: 5% vendor + 5% buyer', icon: <ShieldCheck size={20} />, highlight: true },
  { label: 'Active Subscriptions', value: '4', subtext: 'Paying vendors', icon: <Users size={20} />, highlight: false, iconColor: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Faster Payout Usage', value: '2', subtext: 'Transactions this month', icon: <Zap size={20} />, highlight: false, iconColor: 'text-orange-500', bg: 'bg-orange-50' },
  { label: 'Dispute Fees Collected', value: '₦15K', subtext: 'Vendor-fault disputes only', icon: <Scale size={20} />, highlight: false, iconColor: 'text-[#152570]', bg: 'bg-indigo-50' },
  { label: 'API & Enterprise Revenue', value: '₦400K', subtext: '3 active clients', icon: <Code size={20} />, highlight: false, iconColor: 'text-[#152570]', bg: 'bg-blue-50' },
];

const revenueBreakdown = [
  { label: 'Escrow Transaction Fees', percentage: 36, color: 'bg-[#152570]' },
  { label: 'API & Enterprise', percentage: 61, color: 'bg-green-500' },
  { label: 'Usage-Based Fees', percentage: 4, color: 'bg-slate-400' },
];

// --- Mock Data: Subscription Plans ---
const subscriptionPlans = [
  { name: 'Basic', price: '₦5,000', period: 'per month', annual: '₦50,000/year', features: ['Up to 20 transactions/month', 'Basic analytics', 'Email support'], vendors: 142 },
  { name: 'Pro', price: '₦15,000', period: 'per month', annual: '₦150,000/year', features: ['Unlimited transactions', 'Advanced analytics', 'Priority support', 'Custom branding'], vendors: 78 },
  { name: 'Premium', price: '₦35,000', period: 'per month', annual: '₦350,000/year', features: ['Everything in Pro', 'API access', 'Dedicated account manager', 'Custom integrations'], vendors: 24 },
  { name: 'Enterprise', price: 'Custom Pricing', period: '', annual: '', features: ['Custom pricing', 'Full API access', 'White-label options', '24/7 support'], vendors: 8 },
];

const subscriptionTableData = [
  { name: 'Adebayo Fashion Store', id: 'VEN-00245', type: 'Merchant', plan: 'Pro', cycle: 'Monthly', status: 'Active', renewal: 'Feb 15, 2025' },
  { name: 'Chioma Electronics', id: 'VEN-00198', type: 'Merchant', plan: 'Premium', cycle: 'Annual', status: 'Active', renewal: 'Mar 1, 2025' },
  { name: 'Emeka Wholesale', id: 'VEN-00312', type: 'Merchant', plan: 'Basic', cycle: 'Monthly', status: 'Active', renewal: 'Jan 28, 2025' },
  { name: 'Blessing Eze', id: 'VEN-00989', type: 'Individual', plan: 'Basic', cycle: 'Monthly', status: 'Trial', renewal: 'Jan 25, 2025' },
  { name: 'TechMart Solutions', id: 'VEN-00421', type: 'Merchant', plan: 'Enterprise', cycle: 'Annual', status: 'Active', renewal: 'Dec 31, 2025' },
];

// --- Mock Data: Transaction Fees ---
const transactionFeeHistory = [
  { id: 'TXN-2025-0124', vendor: 'Adebayo Fashion Store', buyerId: 'BYR-00245', amount: '₦125,000', feeTotal: '₦12,500', feeVendor: '₦6,250', feeBuyer: '₦6,250', date: 'Jan 15, 2025' },
  { id: 'TXN-2025-0118', vendor: 'Chioma Electronics', buyerId: 'BYR-00198', amount: '₦580,000', feeTotal: '₦58,000', feeVendor: '₦29,000', feeBuyer: '₦29,000', date: 'Jan 14, 2025' },
  { id: 'TXN-2025-0112', vendor: 'Emeka Wholesale', buyerId: 'BYR-00312', amount: '₦385,000', feeTotal: '₦38,500', feeVendor: '₦19,250', feeBuyer: '₦19,250', date: 'Jan 13, 2025' },
  { id: 'TXN-2025-0095', vendor: 'TechMart Solutions', buyerId: 'BYR-00378', amount: '₦1,250,000', feeTotal: '₦125,000', feeVendor: '₦62,500', feeBuyer: '₦62,500', date: 'Jan 12, 2025' },
];

// --- Mock Data: Usage-Based Fees ---
const usageFeesStats = [
  { label: 'Faster Payout Fee', amount: '₦5,000', desc: 'Per transaction for instant escrow release', icon: <Zap size={24} />, bg: 'bg-orange-50', iconColor: 'text-orange-500' },
  { label: 'Dispute Resolution Fee', amount: '₦15,000', desc: 'Applied only when vendor is at fault', icon: <Scale size={24} />, bg: 'bg-red-50', iconColor: 'text-red-500' },
];

const usageFeeHistory = [
  { vendor: 'Adebayo Fashion Store', id: 'VEN-00245', type: 'Faster Payout', refId: 'TXN-2025-0124', amount: '₦5,000', date: 'Jan 15, 2025' },
  { vendor: 'Chioma Electronics', id: 'VEN-00198', type: 'Faster Payout', refId: 'TXN-2025-0118', amount: '₦5,000', date: 'Jan 14, 2025' },
  { vendor: 'Emeka Wholesale', id: 'VEN-00312', type: 'Dispute Fee', refId: 'DSP-2025-0045', amount: '₦15,000', date: 'Jan 10, 2025' },
];

// --- Mock Data: API & Enterprise Clients ---
const apiEnterpriseData = [
  { name: 'MegaMart Integration', type: 'Enterprise API', usage: 'High (12k calls/month)', amount: '₦250,000', status: 'Active', lastBilled: 'Jan 1, 2025' },
  { name: 'QuickPay Gateway', type: 'Premium API', usage: 'Medium (5k calls/month)', amount: '₦100,000', status: 'Active', lastBilled: 'Jan 1, 2025' },
  { name: 'RetailHub Platform', type: 'Standard API', usage: 'Low (1.5k calls/month)', amount: '₦50,000', status: 'Active', lastBilled: 'Jan 1, 2025' },
];

// --- Mock Data: Invoices (NEW) ---
const invoicesData = [
  { id: 'INV-2025-0234', client: 'Adebayo Fashion Store', period: 'Jan 2025', amount: '₦15,000', status: 'Paid', issued: 'Jan 1, 2025', paid: 'Jan 3, 2025' },
  { id: 'INV-2025-0198', client: 'Chioma Electronics', period: 'Jan 2025', amount: '₦35,000', status: 'Paid', issued: 'Jan 1, 2025', paid: 'Jan 2, 2025' },
  { id: 'INV-2025-0312', client: 'Emeka Wholesale', period: 'Jan 2025', amount: '₦5,000', status: 'Pending', issued: 'Jan 15, 2025', paid: '—' },
  { id: 'INV-2025-0089', client: 'MegaMart Integration', period: 'Jan 2025', amount: '₦250,000', status: 'Paid', issued: 'Jan 1, 2025', paid: 'Jan 5, 2025' },
];

// --- Helper Components ---
const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'Active': 'bg-green-50 text-green-600 border-green-200',
    'Paid': 'bg-green-50 text-green-600 border-green-200',
    'Trial': 'bg-blue-50 text-blue-600 border-blue-200',
    'Pending': 'bg-orange-50 text-orange-600 border-orange-200',
    'Expired': 'bg-red-50 text-red-600 border-red-200',
  };
  const icons: Record<string, React.ReactNode> = {
    'Active': <CheckCircle2 size={12} />,
    'Paid': <CheckCircle2 size={12} />,
    'Trial': <Clock size={12} />,
    'Pending': <Clock size={12} />,
    'Expired': <X size={12} />,
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
      {icons[status]} {status}
    </span>
  );
};

const FeeTypeBadge = ({ type }: { type: string }) => {
  const isPayout = type === 'Faster Payout';
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${isPayout ? 'bg-orange-50 text-orange-600 border-orange-200' : 'bg-red-50 text-red-600 border-red-200'}`}>
      {isPayout ? <Zap size={10} /> : <AlertCircle size={10} />}
      {type}
    </span>
  );
};

export default function SubscriptionBillingPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVendorsMenuOpen, setIsVendorsMenuOpen] = useState(false);
  
  // Set default active tab to 'Invoices & Billing History'
  const [activeTab, setActiveTab] = useState('Invoices & Billing History');

  const tabs = [
    { id: 'Overview', icon: <Activity size={16} /> },
    { id: 'Subscriptions', icon: <Users size={16} /> },
    { id: 'Escrow & Transaction Fees', icon: <ShieldCheck size={16} /> },
    { id: 'Usage-Based Fees', icon: <Zap size={16} /> },
    { id: 'API & Enterprise Billing', icon: <Code size={16} /> },
    { id: 'Invoices & Billing History', icon: <FileClock size={16} /> },
  ];

  return (
    <div className={`min-h-screen bg-[#F8FAFC] flex ${arimo.variable} ${arimo.className}`}>
      
      {/* --- Mobile Overlay --- */}
      {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity" />
      )}

      {/* --- Sidebar (Left) --- */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#152570] text-white transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 shadow-2xl lg:shadow-none flex flex-col`}>
        <div className="p-6 border-b border-[#1f3a8a] flex justify-between items-center">
          <div className="relative w-40 h-10">
             <Image src="/images/logo.png" alt="Vendor Ventory" fill className="object-contain object-left" priority />
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white/70 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <Link href="/admin/dashboard" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <div className="pt-2 pb-2">
            <button onClick={() => setIsVendorsMenuOpen(!isVendorsMenuOpen)} className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
              <div className="flex items-center gap-3"><Store size={20} /> Vendors</div>
              <ChevronDown size={16} className={`transition-transform ${isVendorsMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {isVendorsMenuOpen && (
              <div className="mt-1 space-y-1">
                <Link href="/admin/vendors" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-blue-200 hover:text-white hover:bg-white/5 ml-4"><Users size={18} /> All Vendors</Link>
                <Link href="/admin/kyc" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-blue-200 hover:text-white hover:bg-white/5 ml-4"><ShieldCheck size={18} /> KYC & Verification</Link>
              </div>
            )}
          </div>
          <Link href="/admin/delivery-partners" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><Truck size={20} /> Delivery Partners</Link>
          <Link href="/admin/disputes" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><Scale size={20} /> Dispute Resolution Agents</Link>
          <Link href="/admin/buyers" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><ShoppingCart size={20} /> Buyers</Link>
          <Link href="/admin/transactions" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><CreditCard size={20} /> Transactions</Link>
          <Link href="/admin/compliance" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><FileText size={20} /> Compliance & Reports</Link>
          <Link href="/admin/billing" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-white bg-white/10 border-l-4 border-[#22c55e] transition-colors"><DollarSign size={20} /> Subscription & Billing</Link>
          <div className="pt-4 mt-4 border-t border-[#1f3a8a]">
            <Link href="/admin/settings" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><Settings size={20} /> Settings</Link>
          </div>
        </nav>
      </aside>

      {/* --- Main Content (Right) --- */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen">
        <header className="bg-white border-b border-slate-200 h-16 shrink-0 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500 hover:text-[#152570] p-1 rounded-md"><Menu size={24} /></button>
            <h1 className="text-lg sm:text-xl font-medium text-slate-800 truncate">Super Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
             <div className="relative">
                <Bell size={20} className="text-slate-500" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">2</span>
             </div>
             <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
               <div className="w-9 h-9 bg-[#152570] rounded-full flex items-center justify-center text-white font-bold text-sm">AO</div>
               <div className="hidden lg:block">
                 <p className="text-sm font-bold text-[#152570]">Adebayo Ogunlesi</p>
                 <p className="text-xs text-slate-500">Super Admin</p>
               </div>
               <ChevronDown size={16} className="text-slate-400 hidden lg:block" />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-[#152570]">Subscription & Billing</h2>
            <p className="text-slate-500 text-sm mt-1">Comprehensive platform monetization management and revenue tracking</p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
             {/* Tab Navigation */}
             <div className="flex border-b border-slate-100 overflow-x-auto hide-scrollbar shrink-0">
                {tabs.map((tab) => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all whitespace-nowrap ${activeTab === tab.id ? 'text-[#152570] border-b-2 border-[#152570] bg-slate-50' : 'text-slate-500 hover:text-[#152570] hover:bg-slate-50'}`}>
                    {tab.icon} {tab.id}
                  </button>
                ))}
             </div>

             <div className="p-6 md:p-8 bg-[#F8FAFC] flex-1 overflow-y-auto">
                
                {/* 1. OVERVIEW TAB */}
                {activeTab === 'Overview' && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {billingStats.map((stat, i) => (
                        <div key={i} className={`bg-white p-6 rounded-xl shadow-sm transition-all ${stat.highlight ? 'border-2 border-[#152570] shadow-md relative' : 'border border-slate-200 hover:shadow-md'}`}>
                           <div className="flex items-start gap-4">
                              <div className={`p-3 rounded-xl shrink-0 ${stat.highlight ? 'bg-[#152570] text-white' : stat.bg || 'bg-slate-100 text-slate-500'} ${stat.iconColor || ''}`}>{stat.icon}</div>
                              <div><p className="text-xs font-bold text-slate-400 mb-1">{stat.label}</p><h3 className={`text-3xl font-bold ${stat.highlight ? 'text-[#152570]' : 'text-[#152570]'}`}>{stat.value}</h3><p className={`text-xs mt-1 ${stat.highlight ? 'text-slate-600 font-medium' : 'text-slate-400'}`}>{stat.subtext}</p></div>
                           </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
                       <h3 className="text-lg font-bold text-[#152570] mb-6">Revenue Stream Breakdown</h3>
                       <div className="space-y-6">
                          {revenueBreakdown.map((item, i) => (
                            <div key={i}>
                               <div className="flex justify-between items-end mb-2"><div className="flex items-center gap-2"><div className={`w-3 h-3 rounded-full ${item.color}`}></div><span className="text-sm font-medium text-[#152570]">{item.label}</span></div><span className="text-sm font-bold text-slate-600">{item.percentage}%</span></div>
                               <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden"><div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percentage}%` }} /></div>
                            </div>
                          ))}
                       </div>
                    </div>
                  </div>
                )}

                {/* 2. SUBSCRIPTIONS TAB */}
                {activeTab === 'Subscriptions' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-[#152570] font-bold text-sm mb-4">Subscription Plans</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                         {subscriptionPlans.map((plan, i) => (
                           <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                              <div className="mb-4"><h4 className="text-lg font-bold text-[#152570]">{plan.name}</h4></div>
                              <div className="mb-6"><p className="text-2xl font-bold text-[#152570]">{plan.price}</p><p className="text-xs text-slate-500">{plan.period}</p>{plan.annual && <p className="text-xs text-slate-400 mt-1 line-through decoration-slate-300">{plan.annual}</p>}</div>
                              <div className="space-y-3 mb-8 flex-1">{plan.features.map((feature, idx) => (<div key={idx} className="flex items-start gap-2"><CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" /><span className="text-xs text-slate-600">{feature}</span></div>))}</div>
                              <div className="pt-4 border-t border-slate-100 mt-auto"><p className="text-sm font-bold text-[#152570]">{plan.vendors} <span className="font-normal text-slate-500">vendors</span></p></div>
                           </div>
                         ))}
                      </div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                       <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col lg:flex-row gap-4">
                          <div className="relative flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} /><input type="text" placeholder="Search by vendor name or ID..." className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#152570]/20" /></div>
                          <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0">
                             <div className="relative min-w-[140px]"><select className="w-full appearance-none pl-4 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none cursor-pointer"><option>All Plans</option><option>Basic</option><option>Pro</option><option>Premium</option></select><ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} /></div>
                             <div className="relative min-w-[140px]"><select className="w-full appearance-none pl-4 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none cursor-pointer"><option>All Status</option><option>Active</option><option>Trial</option><option>Expired</option></select><ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} /></div>
                          </div>
                       </div>
                       <div className="overflow-x-auto">
                          <table className="w-full">
                             <thead className="bg-slate-50 border-b border-slate-100">
                                <tr>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Vendor Name</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Vendor ID</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Vendor Type</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Current Plan</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Billing Cycle</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Status</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Renewal Date</th>
                                </tr>
                             </thead>
                             <tbody className="divide-y divide-slate-100 bg-white">
                                {subscriptionTableData.map((row, idx) => (
                                   <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                      <td className="px-6 py-4 text-sm text-[#152570] font-medium">{row.name}</td>
                                      <td className="px-6 py-4 text-sm text-[#152570] font-medium">{row.id}</td>
                                      <td className="px-6 py-4 text-sm text-slate-600">{row.type}</td>
                                      <td className="px-6 py-4 text-sm font-medium text-[#152570]">{row.plan}</td>
                                      <td className="px-6 py-4 text-sm text-slate-600">{row.cycle}</td>
                                      <td className="px-6 py-4"><StatusBadge status={row.status} /></td>
                                      <td className="px-6 py-4 text-sm text-slate-500">{row.renewal}</td>
                                   </tr>
                                ))}
                             </tbody>
                          </table>
                       </div>
                       <div className="px-6 py-4 border-t border-slate-100"><p className="text-xs text-slate-500">Showing 5 of 5 subscriptions</p></div>
                    </div>
                  </div>
                )}

                {/* 3. ESCROW & TRANSACTION FEES TAB */}
                {activeTab === 'Escrow & Transaction Fees' && (
                  <div className="space-y-8">
                    <div className="bg-white border border-[#152570] rounded-xl shadow-sm overflow-hidden">
                       <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center gap-3"><div className="w-8 h-8 rounded bg-[#152570]/10 flex items-center justify-center text-[#152570]"><Percent size={18} /></div><div><h3 className="text-[#152570] font-bold text-sm">Escrow Fee Structure (Primary Revenue Stream)</h3><p className="text-slate-500 text-xs">Standard fee applied to all transactions</p></div></div>
                       <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                          <div className="p-8 text-center bg-[#F8FAFC]"><p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Standard Escrow Fee</p><h4 className="text-3xl font-bold text-[#152570]">10%</h4><p className="text-xs text-slate-500 mt-1">Of transaction amount</p></div>
                          <div className="p-8 text-center bg-white"><p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Vendor Share</p><h4 className="text-3xl font-bold text-[#152570]">5%</h4><p className="text-xs text-slate-500 mt-1">Paid by vendor</p></div>
                          <div className="p-8 text-center bg-white"><p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Buyer Share</p><h4 className="text-3xl font-bold text-[#152570]">5%</h4><p className="text-xs text-slate-500 mt-1">Paid by buyer</p></div>
                       </div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                       <div className="p-4 border-b border-slate-100"><h4 className="text-sm font-bold text-[#152570]">Transaction Fee History</h4><p className="text-xs text-slate-500 mt-1">All escrow transaction fees collected</p></div>
                       <div className="overflow-x-auto">
                          <table className="w-full">
                             <thead className="bg-slate-50 border-b border-slate-100">
                                <tr>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Transaction ID</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Vendor</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Buyer ID</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Transaction Amount</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Total Escrow Fee (10%)</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Vendor Share (5%)</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Buyer Share (5%)</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Date</th>
                                </tr>
                             </thead>
                             <tbody className="divide-y divide-slate-100 bg-white">
                                {transactionFeeHistory.map((row, idx) => (
                                   <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                      <td className="px-6 py-4 text-sm font-medium text-[#152570]">{row.id}</td>
                                      <td className="px-6 py-4 text-sm text-slate-600 max-w-[150px] truncate" title={row.vendor}>{row.vendor}</td>
                                      <td className="px-6 py-4 text-sm text-slate-500">{row.buyerId}</td>
                                      <td className="px-6 py-4 text-sm font-bold text-slate-800">{row.amount}</td>
                                      <td className="px-6 py-4 text-sm font-bold text-[#152570]">{row.feeTotal}</td>
                                      <td className="px-6 py-4 text-sm text-slate-600">{row.feeVendor}</td>
                                      <td className="px-6 py-4 text-sm text-slate-600">{row.feeBuyer}</td>
                                      <td className="px-6 py-4 text-sm text-slate-500 text-right">{row.date}</td>
                                   </tr>
                                ))}
                             </tbody>
                             <tfoot className="bg-slate-50 border-t border-slate-200">
                                <tr>
                                  <td colSpan={8} className="px-6 py-4 text-right">
                                     <span className="text-sm text-slate-500 mr-4">Total Fees Collected</span>
                                     <span className="text-xl font-bold text-[#152570]">₦234,000</span>
                                  </td>
                                </tr>
                             </tfoot>
                          </table>
                       </div>
                    </div>
                  </div>
                )}

                {/* 4. USAGE-BASED FEES TAB */}
                {activeTab === 'Usage-Based Fees' && (
                  <div className="space-y-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {usageFeesStats.map((stat, i) => (
                           <div key={i} className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex items-start gap-4">
                              <div className={`p-3 rounded-xl shrink-0 ${stat.bg} ${stat.iconColor}`}>{stat.icon}</div>
                              <div><p className="text-sm font-bold text-slate-600">{stat.label}</p><h3 className="text-2xl font-bold text-[#152570] my-1">{stat.amount}</h3><p className="text-xs text-slate-400">{stat.desc}</p></div>
                           </div>
                        ))}
                     </div>
                     <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-slate-100"><h4 className="text-sm font-bold text-[#152570]">Usage-Based Fee History</h4><p className="text-xs text-slate-500 mt-1">All non-subscription charges</p></div>
                        <div className="overflow-x-auto">
                           <table className="w-full">
                              <thead className="bg-slate-50 border-b border-slate-100">
                                 <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Vendor</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Vendor ID</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Fee Type</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Transaction / Dispute ID</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Amount</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Date</th>
                                 </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100 bg-white">
                                 {usageFeeHistory.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                       <td className="px-6 py-4 text-sm font-medium text-[#152570]">{row.vendor}</td>
                                       <td className="px-6 py-4 text-sm text-slate-500">{row.id}</td>
                                       <td className="px-6 py-4"><FeeTypeBadge type={row.type} /></td>
                                       <td className="px-6 py-4 text-sm text-slate-600">{row.refId}</td>
                                       <td className="px-6 py-4 text-sm font-bold text-[#152570]">{row.amount}</td>
                                       <td className="px-6 py-4 text-sm text-slate-500 text-right">{row.date}</td>
                                    </tr>
                                 ))}
                              </tbody>
                              <tfoot className="bg-slate-50 border-t border-slate-200">
                                <tr>
                                  <td colSpan={6} className="px-6 py-4 text-right">
                                     <span className="text-sm text-slate-500 mr-4">Total Usage Fees Collected</span>
                                     <span className="text-xl font-bold text-[#152570]">₦25,000</span>
                                  </td>
                                </tr>
                             </tfoot>
                           </table>
                        </div>
                     </div>
                  </div>
                )}

                {/* 5. API & ENTERPRISE BILLING TAB */}
                {activeTab === 'API & Enterprise Billing' && (
                  <div className="space-y-8">
                     <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-slate-100">
                           <h4 className="text-sm font-bold text-[#152570]">API & Enterprise Clients</h4>
                           <p className="text-xs text-slate-500 mt-1">Integration and enterprise billing accounts</p>
                        </div>
                        <div className="overflow-x-auto">
                           <table className="w-full">
                              <thead className="bg-slate-50 border-b border-slate-100">
                                 <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Client Name</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Subscription Type</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Usage Level</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Monthly Billing Amount</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Last Billed</th>
                                 </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100 bg-white">
                                 {apiEnterpriseData.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                       <td className="px-6 py-4 text-sm font-medium text-[#152570]">{row.name}</td>
                                       <td className="px-6 py-4 text-sm text-slate-600">{row.type}</td>
                                       <td className="px-6 py-4 text-sm text-slate-500">{row.usage}</td>
                                       <td className="px-6 py-4 text-sm font-bold text-[#152570]">{row.amount}</td>
                                       <td className="px-6 py-4"><StatusBadge status={row.status} /></td>
                                       <td className="px-6 py-4 text-sm text-slate-500 text-right">{row.lastBilled}</td>
                                    </tr>
                                 ))}
                              </tbody>
                              <tfoot className="bg-slate-50 border-t border-slate-200">
                                <tr>
                                  <td colSpan={6} className="px-6 py-4 text-right">
                                     <span className="text-sm text-slate-500 mr-4">Total Monthly API Revenue</span>
                                     <span className="text-xl font-bold text-[#152570]">₦400,000</span>
                                  </td>
                                </tr>
                             </tfoot>
                           </table>
                        </div>
                     </div>
                  </div>
                )}

                {/* 6. INVOICES & BILLING HISTORY TAB (Active View) */}
                {activeTab === 'Invoices & Billing History' && (
                  <div className="space-y-8">
                     
                     <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                        
                        {/* Header with Export */}
                        <div className="p-5 border-b border-slate-100 flex justify-between items-center">
                           <div>
                              <h4 className="text-sm font-bold text-[#152570]">Billing Ledger</h4>
                              <p className="text-xs text-slate-500 mt-1">Immutable record of all platform invoices and payments</p>
                           </div>
                           <button className="flex items-center gap-2 px-4 py-2 bg-[#152570] text-white rounded-lg text-sm font-bold hover:bg-[#1e3a8a] transition-colors">
                              <Download size={16} /> Export Ledger
                           </button>
                        </div>

                        {/* Filter Bar */}
                        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col lg:flex-row gap-4">
                           <div className="relative flex-1">
                              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                              <input 
                                type="text" 
                                placeholder="Search by invoice ID or vendor/client..." 
                                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#152570]/20" 
                              />
                           </div>
                           <div className="relative min-w-[160px]">
                              <select className="w-full appearance-none pl-4 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none cursor-pointer">
                                 <option>All Status</option>
                                 <option>Paid</option>
                                 <option>Pending</option>
                                 <option>Overdue</option>
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                           </div>
                        </div>

                        {/* Invoices Table */}
                        <div className="overflow-x-auto">
                           <table className="w-full">
                              <thead className="bg-slate-50 border-b border-slate-100">
                                 <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Invoice ID</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Vendor / Client</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Billing Period</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Amount</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Date Issued</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Date Paid</th>
                                 </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100 bg-white">
                                 {invoicesData.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                       <td className="px-6 py-4 text-sm font-medium text-[#152570]">{row.id}</td>
                                       <td className="px-6 py-4 text-sm text-slate-700">{row.client}</td>
                                       <td className="px-6 py-4 text-sm text-slate-500">{row.period}</td>
                                       <td className="px-6 py-4 text-sm font-bold text-[#152570]">{row.amount}</td>
                                       <td className="px-6 py-4"><StatusBadge status={row.status} /></td>
                                       <td className="px-6 py-4 text-sm text-slate-500 text-right">{row.issued}</td>
                                       <td className="px-6 py-4 text-sm text-slate-500 text-right">{row.paid}</td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 border-t border-slate-100">
                           <p className="text-xs text-slate-500">Showing 4 of 4 invoices</p>
                        </div>

                     </div>
                  </div>
                )}

             </div>

          </div>
        </main>
      </div>
    </div>
  );
}