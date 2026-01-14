'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, Store, Truck, Users, CreditCard, 
  FileText, ShieldCheck, Settings, Bell, Search, ChevronDown, 
  Menu, X, Eye, DollarSign, ShoppingCart, Scale, 
  Clock, CheckCircle2, XCircle
} from 'lucide-react';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

// --- Mock Data ---
const kycSubmissions = [
  { id: 1, name: 'Fashion Hub Lagos', email: 'info@fashionhub.com', type: 'Merchant', docs: '3 files', status: 'Pending Review', date: 'Dec 29, 2024', initial: 'F', color: 'bg-[#152570]' },
  { id: 2, name: 'Electronics Hub Africa', email: 'contact@electronicshub.africa', type: 'Merchant', docs: '4 files', status: 'Pending Review', date: 'Dec 28, 2024', initial: 'E', color: 'bg-[#152570]' },
  { id: 3, name: 'TechMart Solutions', email: 'contact@techmart.ng', type: 'Merchant', docs: '4 files', status: 'Completed', date: 'Dec 15, 2024', initial: 'T', color: 'bg-[#152570]' },
  { id: 4, name: 'QuickSell Store', email: 'support@quicksell.ng', type: 'Individual', docs: '2 files', status: 'Rejected', date: 'Dec 1, 2024', initial: 'Q', color: 'bg-[#152570]' },
  { id: 5, name: 'African Crafts Marketplace', email: 'hello@africancrafts.com', type: 'Individual', docs: '3 files', status: 'Completed', date: 'Dec 10, 2024', initial: 'A', color: 'bg-[#152570]' },
  { id: 6, name: 'Mobile Accessories NG', email: 'sales@mobileaccessories.ng', type: 'Merchant', docs: '4 files', status: 'Completed', date: 'Dec 18, 2024', initial: 'M', color: 'bg-[#152570]' },
];

const stats = [
  { label: 'Pending Review', value: '2', icon: <Clock size={20} className="text-orange-500" />, bg: 'bg-white', border: 'border-l-4 border-orange-500' },
  { label: 'Approved', value: '3', icon: <CheckCircle2 size={20} className="text-green-500" />, bg: 'bg-white', border: 'border-l-4 border-green-500' },
  { label: 'Rejected', value: '1', icon: <XCircle size={20} className="text-red-500" />, bg: 'bg-white', border: 'border-l-4 border-red-500' },
];

// --- Helper Components ---
const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'Completed': 'bg-green-50 text-green-700 border-green-200',
    'Pending Review': 'bg-orange-50 text-orange-600 border-orange-200',
    'Rejected': 'bg-red-50 text-red-600 border-red-200',
  };

  const icons: Record<string, React.ReactNode> = {
    'Completed': <CheckCircle2 size={12} />,
    'Pending Review': <Clock size={12} />,
    'Rejected': <XCircle size={12} />,
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles[status] || 'bg-gray-100'}`}>
      {icons[status]}
      {status}
    </span>
  );
};

export default function KycPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Default to true so the user sees the active sub-link immediately
  const [isVendorsMenuOpen, setIsVendorsMenuOpen] = useState(true);

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
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
             <ShieldCheck className="text-[#22c55e]" size={24} />
             Vendor Ventory
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
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium bg-white/10 text-white transition-colors"
            >
              <div className="flex items-center gap-3">
                <Store size={20} /> Vendors
              </div>
              <ChevronDown size={16} className={`transition-transform ${isVendorsMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isVendorsMenuOpen && (
              <div className="mt-1 space-y-1 border-l border-[#1f3a8a] ml-3 pl-3">
                {/* All Vendors Link */}
                <Link href="/admin/vendors" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-blue-200 hover:text-white hover:bg-white/5">
                  <Users size={18} /> All Vendors
                </Link>
                
                {/* KYC Link (Active State) */}
                <Link href="/admin/kyc" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-white bg-[#1f3a8a] border-l-2 border-[#22c55e]">
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
          
          {/* Title Area */}
          <div>
            <h2 className="text-2xl font-bold text-[#152570]">KYC & Verification</h2>
            <p className="text-slate-500 text-sm mt-1">Review and manage vendor verification submissions</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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

          {/* Filters & Table Section */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm mt-8">
            
            {/* Toolbar */}
            <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search KYC submissions..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#152570]/20 transition-all"
                />
              </div>

              {/* Dropdown */}
              <div className="w-full md:w-auto">
                 <select className="w-full md:w-auto px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-[#152570] cursor-pointer min-w-[180px]">
                    <option>All KYC Status</option>
                    <option>Pending Review</option>
                    <option>Completed</option>
                    <option>Rejected</option>
                 </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 text-left">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Vendor Name</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Documents</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date Submitted</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {kycSubmissions.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center text-white font-bold shrink-0`}>
                            {item.initial}
                          </div>
                          <div>
                            <p className="font-medium text-[#152570] text-sm">{item.name}</p>
                            <p className="text-xs text-slate-500">{item.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">{item.type}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{item.docs}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={item.status} />
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{item.date}</td>
                      <td className="px-6 py-4 text-right">
                        <Link href={`/admin/vendors/${item.id}`} className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#152570] text-[#152570] rounded-lg text-xs font-bold hover:bg-[#152570] hover:text-white transition-all">
                          <Eye size={14} /> Review
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Simple Pagination Footer */}
             <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
              <p className="text-sm text-slate-500">Showing 6 of 6 submissions</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 disabled:opacity-50 hover:bg-slate-50" disabled>Previous</button>
                <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50" disabled>Next</button>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}