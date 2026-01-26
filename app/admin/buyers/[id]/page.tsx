'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LayoutDashboard, Store, Truck, Users, CreditCard, 
  FileText, ShieldCheck, Settings, Bell, Search, ChevronDown, 
  Menu, X, ArrowLeft, Mail, Phone, Calendar, Ban, CheckCircle2, 
  ShoppingCart, Scale, DollarSign, Info, ShoppingBag, RotateCcw, Check
} from 'lucide-react';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

// --- Mock Data ---
const buyerData = {
  id: 'BYR-00198',
  name: 'Sarah Williams',
  email: 'sarah.williams@example.com',
  phone: '+234 805 234 5678',
  status: 'Active',
  firstTxn: 'August 15, 2024',
  summary: {
    totalTxns: 23,
    totalSpent: '₦580,000',
    successful: '21 (91.3%)'
  },
  disputes: [
    { id: 'DSP-2024-0092', vendor: 'Adebayo Fashion Store', outcome: 'Refund', date: 'Nov 29, 2024' },
    { id: 'DSP-2024-0654', vendor: 'Chioma Electronics', outcome: 'Vendor Paid', date: 'Sep 22, 2024' },
  ]
};

// --- Helper Components ---
const StatusBadge = ({ status }: { status: string }) => {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border bg-green-50 text-green-700 border-green-200">
      <CheckCircle2 size={12} /> {status}
    </span>
  );
};

const OutcomeBadge = ({ status }: { status: string }) => {
    const isRefund = status === 'Refund';
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
          isRefund ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-green-50 text-green-600 border-green-200'
      }`}>
        {isRefund ? <RotateCcw size={12} /> : <Check size={12} />}
        {status}
      </span>
    );
};

export default function BuyerDetailsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVendorsMenuOpen, setIsVendorsMenuOpen] = useState(false);
  
  // Modal State
  const [isRestrictModalOpen, setIsRestrictModalOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-[#F8FAFC] flex ${arimo.variable} ${arimo.className}`}>
      
      {/* --- Restrict Buyer Modal --- */}
      {isRestrictModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsRestrictModalOpen(false)}
          />
          <div className="relative bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 mb-4">
               <Ban size={24} strokeWidth={2.5} />
            </div>
            <h3 className="text-lg font-bold text-[#152570] mb-2">Restrict Buyer?</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
               This buyer will be restricted from making new transactions. Existing escrow transactions will conclude normally.
            </p>
            <div className="flex gap-3 w-full">
               <button 
                 onClick={() => setIsRestrictModalOpen(false)}
                 className="flex-1 py-2.5 border border-slate-300 rounded-xl text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
               >
                 Cancel
               </button>
               <button 
                 onClick={() => setIsRestrictModalOpen(false)}
                 className="flex-1 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-sm shadow-md shadow-red-500/20 transition-colors"
               >
                 Restrict
               </button>
            </div>
          </div>
        </div>
      )}

      {/* --- Mobile Overlay --- */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
        />
      )}

      {/* --- Sidebar (Left) --- */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#152570] text-white transition-transform duration-300 ease-in-out 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:relative lg:translate-x-0 shadow-2xl lg:shadow-none flex flex-col`}
      >
        <div className="p-6 border-b border-[#1f3a8a] flex justify-between items-center">
          {/* Logo Image */}
          <div className="relative w-40 h-10">
             <Image 
               src="/images/logo.png" 
               alt="Vendor Ventory" 
               fill
               className="object-contain object-left"
               priority
             />
          </div>
          
          {/* Close button for mobile */}
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white/70 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <Link href="/admin/dashboard" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <LayoutDashboard size={20} /> Dashboard
          </Link>

          {/* Vendors Dropdown */}
          <div className="pt-2 pb-2">
            <button 
              onClick={() => setIsVendorsMenuOpen(!isVendorsMenuOpen)}
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-3">
                <Store size={20} /> Vendors
              </div>
              <ChevronDown size={16} className={`transition-transform ${isVendorsMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isVendorsMenuOpen && (
              <div className="mt-1 space-y-1">
                <Link href="/admin/vendors" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-blue-200 hover:text-white hover:bg-white/5 ml-4">
                  <Users size={18} /> All Vendors
                </Link>
                <Link href="/admin/kyc" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-blue-200 hover:text-white hover:bg-white/5 ml-4">
                  <ShieldCheck size={18} /> KYC & Verification
                </Link>
              </div>
            )}
          </div>

          <Link href="/admin/delivery-partners" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <Truck size={20} /> Delivery Partners
          </Link>
          <Link href="/admin/disputes" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <Scale size={20} /> Dispute Resolution Agents
          </Link>
          
          {/* Active Link */}
          <Link href="/admin/buyers" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-white bg-white/10 border-l-4 border-[#22c55e] transition-colors">
            <ShoppingCart size={20} /> Buyers
          </Link>

          <Link href="/admin/transactions" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <CreditCard size={20} /> Transactions
          </Link>
          <Link href="/admin/compliance" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <FileText size={20} /> Compliance & Reports
          </Link>
          <Link href="/admin/billing" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <DollarSign size={20} /> Subscription & Billing
          </Link>
          <div className="pt-4 mt-4 border-t border-[#1f3a8a]">
            <Link href="/admin/settings" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
              <Settings size={20} /> Settings
            </Link>
          </div>
        </nav>
      </aside>

      {/* --- Main Content (Right) --- */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen">
        
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 h-16 shrink-0 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500 hover:text-[#152570] p-1 rounded-md">
              <Menu size={24} />
            </button>
            <h1 className="text-lg sm:text-xl font-medium text-slate-800 truncate">Super Admin Dashboard</h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
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

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          
          {/* Back Button */}
          <Link href="/admin/buyers" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#152570] text-sm font-medium mb-2 transition-colors">
            <ArrowLeft size={16} /> Back to Buyers
          </Link>

          {/* 1. Header Card */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
            <div>
               <h2 className="text-3xl font-bold text-[#152570] mb-1">{buyerData.id}</h2>
               <p className="text-slate-500 text-sm">Buyer Account Details</p>
            </div>
            {/* ACTION BUTTON */}
            <button 
              onClick={() => setIsRestrictModalOpen(true)}
              className="flex items-center gap-2 border border-red-200 bg-white text-red-600 hover:bg-red-50 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
            >
                <Ban size={18} /> Restrict Buyer
            </button>
          </div>

          {/* 2. Buyer Overview Card */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
             <h3 className="text-lg font-bold text-[#152570] mb-8">Buyer Overview</h3>
             
             {/* Info Grid */}
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2"><ShoppingCart size={14}/> Buyer ID</p>
                   <p className="text-[#152570] font-bold text-sm">{buyerData.id}</p>
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2"><Mail size={14}/> Email Address</p>
                   <p className="text-[#152570] font-medium text-sm">{buyerData.email}</p>
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2"><Phone size={14}/> Phone Number</p>
                   <p className="text-[#152570] font-medium text-sm">{buyerData.phone}</p>
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2"><ShieldCheck size={14}/> Account Status</p>
                   <StatusBadge status={buyerData.status} />
                </div>
             </div>

             {/* Date Row */}
             <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2"><Calendar size={14}/> Date of First Transaction</p>
                <p className="text-[#152570] font-medium text-sm">{buyerData.firstTxn}</p>
             </div>
          </div>

          {/* 3. Transaction Summary */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
             <h3 className="text-lg font-bold text-[#152570] mb-6">Transaction Summary</h3>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl">
                   <div className="flex items-center gap-2 mb-3 text-slate-500">
                      <div className="p-1.5 bg-slate-200 rounded-md"><ShoppingCart size={16} /></div>
                      <span className="text-xs font-bold uppercase tracking-wide">Total Transactions</span>
                   </div>
                   <p className="text-3xl font-bold text-[#152570]">{buyerData.summary.totalTxns}</p>
                </div>
                <div className="p-6 bg-green-50 border border-green-100 rounded-xl">
                   <div className="flex items-center gap-2 mb-3 text-green-700">
                      <div className="p-1.5 bg-green-200 rounded-md"><DollarSign size={16} /></div>
                      <span className="text-xs font-bold uppercase tracking-wide">Total Amount Spent</span>
                   </div>
                   <p className="text-3xl font-bold text-green-600">{buyerData.summary.totalSpent}</p>
                </div>
                <div className="p-6 bg-white border border-slate-200 rounded-xl">
                   <div className="flex items-center gap-2 mb-3 text-slate-500">
                      <div className="p-1.5 bg-green-100 text-green-600 rounded-md"><CheckCircle2 size={16} /></div>
                      <span className="text-xs font-bold uppercase tracking-wide">Successful Completions</span>
                   </div>
                   <p className="text-3xl font-bold text-green-600">{buyerData.summary.successful}</p>
                </div>
             </div>
          </div>

          {/* 4. Dispute History Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
             <div className="p-6 border-b border-slate-100">
                <h3 className="text-lg font-bold text-[#152570]">Dispute History</h3>
                <p className="text-sm text-slate-500 mt-1">Historical record of disputes involving this buyer</p>
             </div>
             
             <div className="overflow-x-auto">
                <table className="w-full">
                   <thead className="bg-slate-50 text-left">
                      <tr>
                         <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Dispute ID</th>
                         <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Vendor Involved</th>
                         <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Outcome</th>
                         <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Date</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-100">
                      {buyerData.disputes.map((dispute) => (
                         <tr key={dispute.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-5 text-sm font-medium text-[#152570]">{dispute.id}</td>
                            <td className="px-6 py-5 text-sm text-slate-600">{dispute.vendor}</td>
                            <td className="px-6 py-5">
                               <OutcomeBadge status={dispute.outcome} />
                            </td>
                            <td className="px-6 py-5 text-sm text-slate-500 text-right">{dispute.date}</td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>

          {/* 5. View Only Note */}
          <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl flex items-start gap-3">
             <Info size={20} className="text-[#152570] shrink-0 mt-0.5" />
             <div>
                <h4 className="text-sm font-bold text-[#152570] mb-1">View-Only Access</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-4xl">
                   Buyers are view-only entities. No KYC or document uploads required. Restrictive actions should only be taken in cases of confirmed fraudulent activity or policy violations.
                </p>
             </div>
          </div>

        </main>
      </div>
    </div>
  );
}