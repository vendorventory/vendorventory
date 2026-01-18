'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LayoutDashboard, Store, Truck, Users, CreditCard, 
  FileText, ShieldCheck, Settings, Bell, Search, ChevronDown, 
  Menu, X, Eye, DollarSign, ShoppingCart, Scale, 
  CheckCircle2, Clock, AlertCircle, RefreshCcw
} from 'lucide-react';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

// Simple Icon Wrappers
const LockIcon = ({ size, className }: { size: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);

// --- Mock Data ---
const transactions = [
  { id: 'TXN-90210', vendor: 'TechMart Solutions', amount: '₦125,000', status: 'Completed', date: 'Dec 29, 2024', type: 'Product Sale' },
  { id: 'TXN-90211', vendor: 'Fashion Hub Lagos', amount: '₦45,000', status: 'Pending', date: 'Dec 29, 2024', type: 'Product Sale' },
  { id: 'TXN-90212', vendor: 'Mobile Accessories NG', amount: '₦12,500', status: 'In Escrow', date: 'Dec 28, 2024', type: 'Product Sale' },
  { id: 'TXN-90213', vendor: 'QuickSell Store', amount: '₦8,000', status: 'Disputed', date: 'Dec 28, 2024', type: 'Product Sale' },
  { id: 'TXN-90214', vendor: 'African Crafts Marketplace', amount: '₦32,000', status: 'Completed', date: 'Dec 27, 2024', type: 'Product Sale' },
  { id: 'TXN-90215', vendor: 'Home & Kitchen Essentials', amount: '₦60,000', status: 'Refunded', date: 'Dec 26, 2024', type: 'Product Sale' },
  { id: 'TXN-90216', vendor: 'Beauty Products Direct', amount: '₦15,000', status: 'Completed', date: 'Dec 25, 2024', type: 'Product Sale' },
  { id: 'TXN-90217', vendor: 'Electronics Hub Africa', amount: '₦210,000', status: 'In Escrow', date: 'Dec 24, 2024', type: 'Product Sale' },
];

const stats = [
  { label: 'Total Volume', value: '₦24.8M', icon: <DollarSign size={20} className="text-[#152570]" />, border: 'border-l-4 border-[#152570]' },
  { label: 'In Escrow', value: '₦3.2M', icon: <LockIcon size={20} className="text-blue-500" />, border: 'border-l-4 border-blue-500' },
  { label: 'Completed', value: '1,142', icon: <CheckCircle2 size={20} className="text-green-500" />, border: 'border-l-4 border-green-500' },
  { label: 'Disputed', value: '7', icon: <AlertCircle size={20} className="text-red-500" />, border: 'border-l-4 border-red-500' },
];

// --- Helper Components ---
const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'Completed': 'bg-green-50 text-green-700 border-green-200',
    'Pending': 'bg-orange-50 text-orange-600 border-orange-200',
    'In Escrow': 'bg-blue-50 text-blue-600 border-blue-200',
    'Disputed': 'bg-red-50 text-red-600 border-red-200',
    'Refunded': 'bg-purple-50 text-purple-600 border-purple-200',
  };

  const icons: Record<string, React.ReactNode> = {
    'Completed': <CheckCircle2 size={12} />,
    'Pending': <Clock size={12} />,
    'In Escrow': <LockIcon size={12} />,
    'Disputed': <AlertCircle size={12} />,
    'Refunded': <RefreshCcw size={12} />,
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles[status] || 'bg-gray-100'}`}>
      {icons[status]}
      {status}
    </span>
  );
};

export default function TransactionsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVendorsMenuOpen, setIsVendorsMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-[#F8FAFC] flex ${arimo.variable} ${arimo.className}`}>
      
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
               src="/images/logo-white.png" 
               alt="Vendor Ventory" 
               fill
               className="object-contain object-left"
               priority
             />
          </div>
          
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
          <Link href="/admin/buyers" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <ShoppingCart size={20} /> Buyers
          </Link>
          
          {/* Active Link */}
          <Link href="/admin/transactions" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-white bg-white/10 border-l-4 border-[#22c55e] transition-colors">
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
          
          {/* Header & Subtitle */}
          <div>
            <h2 className="text-2xl font-bold text-[#152570]">Transactions</h2>
            <p className="text-slate-500 text-sm mt-1">Monitor all platform transactions, escrow status, and settlements</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className={`bg-white p-6 rounded-xl shadow-sm border border-slate-100 ${stat.border}`}>
                <div className="flex items-center gap-3 mb-2">
                   {stat.icon}
                   <span className="text-sm font-medium text-slate-500">{stat.label}</span>
                </div>
                <p className="text-3xl font-bold text-[#152570] pl-8">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Table Section */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm mt-8">
            
            {/* Toolbar */}
            <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search by ID or Vendor..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#152570]/20 transition-all"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                  <button className="px-4 py-2.5 bg-[#152570] text-white text-sm font-medium rounded-lg">All</button>
                  <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-50">Escrow</button>
                  <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-50">Completed</button>
                  <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-50">Disputed</button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 text-left">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Transaction ID</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Vendor</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {transactions.map((txn) => (
                    <tr key={txn.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-[#152570]">{txn.id}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{txn.vendor}</td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-700">{txn.amount}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={txn.status} />
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{txn.date}</td>
                      <td className="px-6 py-4 text-right">
                        {/* UPDATED HERE: 
                            Changed <button> to <Link> for navigation 
                        */}
                        <Link 
                          href={`/admin/transactions/${txn.id}`} 
                          className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#152570] text-[#152570] rounded-lg text-xs font-bold hover:bg-[#152570] hover:text-white transition-all"
                        >
                          <Eye size={14} /> View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
              <p className="text-sm text-slate-500">Showing 8 of 1,142 transactions</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 disabled:opacity-50 hover:bg-slate-50" disabled>Previous</button>
                <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">Next</button>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}