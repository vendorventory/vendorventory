'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LayoutDashboard, Store, Truck, Users, CreditCard, 
  FileText, ShieldCheck, Settings, Bell, Search, ChevronDown, 
  Menu, X, ArrowLeft, Mail, Phone, Calendar, Ban, CheckCircle2, 
  ShoppingCart, Scale, DollarSign, Info, ShoppingBag, RotateCcw, 
  Package, Clock, Lock, AlertTriangle, FileClock, ChevronRight,
  Check, AlertCircle
} from 'lucide-react';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

// --- Mock Data (Matched to Image) ---
const transactionData = {
  id: 'TXN-2025-0112',
  status: 'Disputed',
  details: 'Transaction Details (Read-Only)',
  
  overview: {
    transactionId: 'TXN - 2025 - 0112',
    invoiceId: 'INV-00878',
    amount: '₦385,000',
    paymentMethod: 'Bank Transfer',
    date: 'Jan 5, 2025 - 14:32:15'
  },

  parties: {
    vendor: {
      name: 'Emeka Wholesale',
      role: 'Merchant',
      id: 'VDR-00234'
    },
    buyer: {
      name: 'BYR-00312',
      email: 'michael.okon@example.com'
    },
    partner: {
      name: 'SwiftLogistics Nigeria',
      id: 'SWF - TRK - 892341'
    }
  },

  timeline: [
    { status: 'Invoice Created', date: 'Jan 5, 2025 - 14:32', state: 'completed' },
    { status: 'Payment Received', date: 'Jan 5, 2025 - 14:45', state: 'completed' },
    { status: 'Funds Held in Escrow', date: 'Jan 5, 2025 - 14:46', state: 'completed' },
    { status: 'Delivery Marked', date: 'Jan 8, 2025 - 10:20', state: 'completed' },
    { status: 'Dispute Raised by Buyer', date: 'Jan 9, 2025 - 16:15', state: 'active' }, // Blue/Active state
    { status: 'Funds Released', date: 'Pending resolution', state: 'pending' },
  ],

  delivery: {
    status: 'Delivered',
    tracking: 'SWF - TRK - 892341',
    proof: 'Signature: M. Okon - Jan 8, 2025'
  },

  dispute: {
    status: 'Open',
    agent: 'Chioma Adeyemi',
    outcome: 'Under Investigation',
    filedDate: 'Jan 9, 2025'
  },

  notes: [
    { text: 'High-value transaction flagged for additional review', date: 'Jan 5, 2025 - 14:50' },
    { text: 'Buyer reported item quality issues', date: 'Jan 9, 2025 - 16:20' }
  ]
};

// --- Helper Components ---
const StatusBadge = ({ status, className = "" }: { status: string, className?: string }) => {
  const styles: Record<string, string> = {
    'Delivered': 'bg-green-100 text-green-700 border-green-200',
    'Open': 'bg-red-50 text-red-600 border-red-200',
    'Disputed': 'bg-red-50 text-red-600 border-red-200',
  };

  const icons: Record<string, React.ReactNode> = {
    'Delivered': <CheckCircle2 size={14} />,
    'Open': <AlertTriangle size={14} />,
    'Disputed': <AlertCircle size={14} />,
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles[status] || 'bg-gray-100'} ${className}`}>
      {icons[status]}
      {status}
    </span>
  );
};

export default function TransactionDetailsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVendorsMenuOpen, setIsVendorsMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-[#F8FAFC] flex ${arimo.variable} ${arimo.className}`}>
      
      {/* --- Sidebar (Left) --- */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#152570] text-white transition-transform duration-300 ease-in-out 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:relative lg:translate-x-0 shadow-2xl lg:shadow-none flex flex-col`}
      >
        <div className="p-5 border-b border-[#1f3a8a] flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <LayoutDashboard className="text-white" /> Vendor Ventory
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white/70 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          <Link href="#" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <LayoutDashboard size={18} /> Dashboard
          </Link>

          {/* Vendors Dropdown */}
          <div>
            <button 
              onClick={() => setIsVendorsMenuOpen(!isVendorsMenuOpen)}
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-3">
                <Store size={18} /> Vendors
              </div>
              <ChevronDown size={16} className={`transition-transform ${isVendorsMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isVendorsMenuOpen && (
              <div className="mt-1 space-y-1">
                <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-blue-200 hover:text-white hover:bg-white/5 ml-4">
                  <Users size={16} /> All Vendors
                </Link>
                <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-blue-200 hover:text-white hover:bg-white/5 ml-4">
                  <ShieldCheck size={16} /> KYC & Verification
                </Link>
              </div>
            )}
          </div>

          <Link href="#" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <Truck size={18} /> Delivery Partners
          </Link>
          <Link href="#" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <Scale size={18} /> Dispute Resolution Agents
          </Link>
          <Link href="#" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <ShoppingCart size={18} /> Buyers
          </Link>
          
          {/* Active Link */}
          <Link href="#" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-white bg-white/10 transition-colors">
            <CreditCard size={18} /> Transactions
            <ChevronRight size={16} className="ml-auto" />
          </Link>
          
          <Link href="#" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <FileText size={18} /> Compliance & Reports
          </Link>
          <Link href="#" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <DollarSign size={18} /> Subscription & Billing
          </Link>
          <div className="pt-4 mt-4 border-t border-[#1f3a8a]">
            <Link href="#" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
              <Settings size={18} /> Settings
            </Link>
          </div>
        </nav>
      </aside>

      {/* --- Main Content (Right) --- */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen bg-slate-50">
        
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 h-16 shrink-0 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500">
              <Menu size={24} />
            </button>
            <h1 className="text-xl text-[#152570] font-medium">Super Admin Dashboard</h1>
          </div>

          <div className="flex items-center gap-6">
             <div className="relative">
                <Bell size={20} className="text-slate-400" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
             </div>
             <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
               <div className="w-9 h-9 bg-[#152570] rounded-full flex items-center justify-center text-white font-bold text-sm">AO</div>
               <div className="hidden lg:block leading-tight">
                 <p className="text-sm font-bold text-[#152570]">Adebayo Ogunlesi</p>
                 <p className="text-xs text-slate-500">Super Admin</p>
               </div>
               <ChevronDown size={16} className="text-slate-400 hidden lg:block" />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-6">
          
          {/* Back Button */}
          <Link href="/admin/transactions" className="inline-flex items-center gap-2 text-[#152570] hover:underline text-sm font-medium mb-1">
            <ArrowLeft size={16} /> Back to Transactions
          </Link>

          {/* Title Section */}
          <div>
            <div className="flex items-center gap-4 mb-1">
              <h2 className="text-3xl font-medium text-[#152570]">{transactionData.id}</h2>
              <StatusBadge status={transactionData.status} />
            </div>
            <p className="text-slate-500 text-sm">{transactionData.details}</p>
          </div>

          {/* 1. Transaction Overview */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg text-[#152570] font-medium mb-6">Transaction Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <p className="text-slate-400 text-xs font-medium uppercase mb-2 flex items-center gap-2">
                   <ShoppingCart size={14}/> Transaction ID
                </p>
                <p className="text-[#152570] font-medium">{transactionData.overview.transactionId}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium uppercase mb-2 flex items-center gap-2">
                   <FileText size={14}/> Invoice ID
                </p>
                <p className="text-[#152570] font-medium">{transactionData.overview.invoiceId}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium uppercase mb-2 flex items-center gap-2">
                   <DollarSign size={14}/> Amount
                </p>
                <p className="text-[#152570] font-medium">{transactionData.overview.amount}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium uppercase mb-2 flex items-center gap-2">
                   <Calendar size={14}/> Date & Time
                </p>
                <p className="text-[#152570] font-medium">
                  <span className="block text-sm text-slate-600 font-normal">Payment Method</span>
                  {transactionData.overview.paymentMethod}
                  <span className="block text-sm text-slate-500 font-normal mt-1">{transactionData.overview.date}</span>
                </p>
              </div>
            </div>
          </div>

          {/* 2. Parties Involved */}
          <div className="space-y-4">
            <h3 className="text-lg text-[#152570] font-medium">Parties Involved</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Vendor Card */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 text-[#152570] rounded-lg flex items-center justify-center shrink-0">
                  <ShoppingCart size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Vendor</p>
                  <p className="text-[#152570] font-medium">{transactionData.parties.vendor.name}</p>
                  <p className="text-xs text-slate-400 mt-1">{transactionData.parties.vendor.role}</p>
                  <p className="text-xs text-slate-300 font-mono mt-0.5">{transactionData.parties.vendor.id}</p>
                </div>
              </div>

              {/* Buyer Card */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Buyer</p>
                  <p className="text-blue-600 font-medium">{transactionData.parties.buyer.name}</p>
                  <p className="text-xs text-slate-400 mt-1">{transactionData.parties.buyer.email}</p>
                </div>
              </div>

              {/* Delivery Partner Card */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center shrink-0">
                  <Truck size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Delivery Partner</p>
                  <p className="text-[#152570] font-medium">{transactionData.parties.partner.name}</p>
                  <p className="text-xs text-slate-400 mt-1">{transactionData.parties.partner.id}</p>
                </div>
              </div>

            </div>
          </div>

          {/* 3. Escrow Timeline */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg text-[#152570] font-medium mb-6">Escrow Timeline</h3>
            <div className="relative pl-2 space-y-8">
               {/* Vertical Line */}
               <div className="absolute top-2 bottom-6 left-[19px] w-[2px] bg-slate-100 z-0"></div>

               {transactionData.timeline.map((item, idx) => (
                 <div key={idx} className="relative z-10 flex gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 
                      ${item.state === 'completed' ? 'bg-green-100 text-green-600' : 
                        item.state === 'active' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                        {item.state === 'completed' ? <Check size={18} strokeWidth={3} /> : <Clock size={18} />}
                    </div>
                    <div className="pt-1">
                      <p className="text-[#152570] font-medium text-sm">{item.status}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{item.date}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* 4. Delivery Information */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg text-[#152570] font-medium mb-6">Delivery Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div>
                  <p className="text-slate-400 text-xs font-medium uppercase mb-2 flex items-center gap-2">
                    <Package size={14} /> Delivery Status
                  </p>
                  <StatusBadge status={transactionData.delivery.status} />
               </div>
               <div>
                  <p className="text-slate-400 text-xs font-medium uppercase mb-2 flex items-center gap-2">
                    <Truck size={14} /> Tracking Number
                  </p>
                  <p className="text-[#152570] text-sm font-medium">{transactionData.delivery.tracking}</p>
               </div>
               <div className="col-span-1 md:col-span-2 pt-4 border-t border-slate-100">
                  <p className="text-slate-400 text-xs font-medium uppercase mb-2 flex items-center gap-2">
                    <CheckCircle2 size={14} /> Proof of Delivery
                  </p>
                  <p className="text-[#152570] text-sm">{transactionData.delivery.proof}</p>
               </div>
            </div>
          </div>

           {/* 5. Dispute Information */}
           <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg text-[#152570] font-medium mb-6">Dispute Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div>
                  <p className="text-slate-400 text-xs font-medium uppercase mb-2 flex items-center gap-2">
                    <Scale size={14} /> Dispute Status
                  </p>
                  <StatusBadge status={transactionData.dispute.status} />
               </div>
               <div>
                  <p className="text-slate-400 text-xs font-medium uppercase mb-2 flex items-center gap-2">
                    <Users size={14} /> Assigned Agent
                  </p>
                  <p className="text-[#152570] text-sm font-medium">{transactionData.dispute.agent}</p>
               </div>
               <div>
                  <p className="text-slate-400 text-xs font-medium uppercase mb-2 flex items-center gap-2">
                    <FileText size={14} /> Outcome
                  </p>
                  <p className="text-[#152570] text-sm font-medium">{transactionData.dispute.outcome}</p>
               </div>
               <div className="col-span-3 pt-4 border-t border-slate-100">
                  <p className="text-slate-400 text-xs font-medium uppercase mb-2 flex items-center gap-2">
                    <Calendar size={14} /> Filed Date
                  </p>
                  <p className="text-[#152570] text-sm">{transactionData.dispute.filedDate}</p>
               </div>
            </div>
          </div>

          {/* 6. Admin Notes */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg text-[#152570] font-medium mb-6">Admin Notes</h3>
            <div className="space-y-4">
              {transactionData.notes.map((note, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-[#152570] text-sm">{note.text}</p>
                  <p className="text-xs text-slate-400 mt-2">{note.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Info Box */}
          <div className="bg-[#E2E8F0] border border-slate-300 rounded-lg p-4 flex items-start gap-3">
             <Info size={20} className="text-[#152570] shrink-0 mt-0.5" />
             <div>
               <p className="text-[#152570] font-bold text-sm">Read-Only Transaction View</p>
               <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                 This is a complete audit trail of the transaction. All escrow operations are automated and logged. Manual intervention requires dispute resolution procedures.
               </p>
             </div>
          </div>

        </main>
      </div>
    </div>
  );
}