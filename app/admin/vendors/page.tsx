'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Store, Truck, Users, CreditCard, 
  FileText, ShieldCheck, Settings, Bell, Search, ChevronDown, 
  Menu, X, Eye, DollarSign, ShoppingCart, Scale
} from 'lucide-react';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

// --- Mock Data ---
const vendors = [
  { id: 1, name: 'TechMart Solutions', email: 'contact@techmart.ng', type: 'Merchant', kyc: 'Completed', status: 'Active', date: 'Dec 15, 2024', initial: 'T', color: 'bg-[#152570]' },
  { id: 2, name: 'Fashion Hub Lagos', email: 'info@fashionhub.com', type: 'Merchant', kyc: 'In Progress', status: 'Active', date: 'Dec 20, 2024', initial: 'F', color: 'bg-[#152570]' },
  { id: 3, name: 'African Crafts Marketplace', email: 'hello@africancrafts.com', type: 'Individual', kyc: 'Completed', status: 'Active', date: 'Dec 10, 2024', initial: 'A', color: 'bg-[#152570]' },
  { id: 4, name: 'QuickSell Store', email: 'support@quicksell.ng', type: 'Individual', kyc: 'Failed', status: 'Suspended', date: 'Nov 28, 2024', initial: 'Q', color: 'bg-[#152570]' },
  { id: 5, name: 'Mobile Accessories NG', email: 'sales@mobileaccessories.ng', type: 'Merchant', kyc: 'Completed', status: 'Active', date: 'Dec 18, 2024', initial: 'M', color: 'bg-[#152570]' },
  { id: 6, name: 'Beauty Products Direct', email: 'orders@beautydirect.com', type: 'Individual', kyc: 'Not Started', status: 'Active', date: 'Dec 22, 2024', initial: 'B', color: 'bg-[#152570]' },
  { id: 7, name: 'Electronics Hub Africa', email: 'contact@electronicshub.africa', type: 'Merchant', kyc: 'In Progress', status: 'Active', date: 'Dec 19, 2024', initial: 'E', color: 'bg-[#152570]' },
  { id: 8, name: 'Home & Kitchen Essentials', email: 'info@homekitchen.ng', type: 'Individual', kyc: 'Completed', status: 'Active', date: 'Dec 8, 2024', initial: 'H', color: 'bg-[#152570]' },
];

const stats = [
  { label: 'Total Vendors', value: '8' },
  { label: 'Individual', value: '4' },
  { label: 'Merchant', value: '4' },
  { label: 'KYC Completed', value: '4', textClass: 'text-green-600' },
];

// --- Helper Components ---
const StatusBadge = ({ status, type }: { status: string, type: 'kyc' | 'account' }) => {
  const styles: Record<string, string> = {
    'Completed': 'bg-green-50 text-green-700 border-green-200',
    'In Progress': 'bg-orange-50 text-orange-700 border-orange-200',
    'Failed': 'bg-red-50 text-red-700 border-red-200',
    'Not Started': 'bg-slate-100 text-slate-600 border-slate-200',
    'Active': 'bg-green-50 text-green-700 border-green-200',
    'Suspended': 'bg-red-50 text-red-700 border-red-200',
  };

  const icons: Record<string, React.ReactNode> = {
    'Completed': <ShieldCheck size={12} />,
    'In Progress': <ClockIcon size={12} />,
    'Failed': <ShieldAlertIcon size={12} />,
    'Not Started': <AlertCircleIcon size={12} />,
    'Active': <CheckCircleIcon size={12} />,
    'Suspended': <XCircleIcon size={12} />,
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles[status] || 'bg-gray-100 text-gray-600'}`}>
      {icons[status]}
      {status}
    </span>
  );
};

// Simple Icons
const ClockIcon = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const CheckCircleIcon = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>;
const XCircleIcon = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>;
const AlertCircleIcon = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
const ShieldAlertIcon = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;

export default function VendorsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
          
          {/* Close button for mobile */}
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white/70 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {/* Dashboard */}
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
              <div className="mt-1 space-y-1">
                <Link href="/admin/vendors" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-white bg-[#1f3a8a] ml-4">
                  <Users size={18} /> All Vendors
                </Link>
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link href="/admin/kyc" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <ShieldCheck size={20} /> KYC & Verification
          </Link>

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
            <h2 className="text-2xl font-bold text-[#152570]">Vendors Management</h2>
            <p className="text-slate-500 text-sm mt-1">Manage all onboarded vendors and their accounts</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-2">{stat.label}</p>
                <p className={`text-3xl font-bold ${stat.textClass || 'text-[#152570]'}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Filters & Table Section */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm">
            
            {/* Toolbar */}
            <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search by business name or email..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#152570]/20 transition-all"
                />
              </div>

              {/* Dropdowns */}
              <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                 <select className="px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-[#152570] cursor-pointer min-w-[140px]">
                    <option>All Types</option>
                    <option>Merchant</option>
                    <option>Individual</option>
                 </select>
                 <select className="px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-[#152570] cursor-pointer min-w-[140px]">
                    <option>All KYC Status</option>
                    <option>Completed</option>
                    <option>Pending</option>
                 </select>
                 <select className="px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-[#152570] cursor-pointer min-w-[140px]">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Suspended</option>
                 </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 text-left">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Vendor Name</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Vendor Type</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">KYC Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Account Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date Joined</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {vendors.map((vendor) => (
                    <tr key={vendor.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg ${vendor.color} flex items-center justify-center text-white font-bold shrink-0`}>
                            {vendor.initial}
                          </div>
                          <div>
                            <p className="font-medium text-[#152570] text-sm">{vendor.name}</p>
                            <p className="text-xs text-slate-500">{vendor.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">{vendor.type}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={vendor.kyc} type="kyc" />
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={vendor.status} type="account" />
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{vendor.date}</td>
                      <td className="px-6 py-4 text-right">
                        {/* UPDATED: Link to the details page using ID */}
                        <Link href={`/admin/vendors/${vendor.id}`} className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#152570] text-[#152570] rounded-lg text-xs font-bold hover:bg-[#152570] hover:text-white transition-all">
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
              <p className="text-sm text-slate-500">Showing 8 of 8 vendors</p>
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