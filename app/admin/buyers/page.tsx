'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LayoutDashboard, Store, Truck, Users, CreditCard, 
  FileText, ShieldCheck, Settings, Bell, Search, ChevronDown, 
  Menu, X, Eye, DollarSign, ShoppingCart, Scale, 
  CheckCircle2, Ban, AlertCircle, ShoppingBag
} from 'lucide-react';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

// --- Mock Data (Matches Screenshot) ---
const buyers = [
  { id: 'BYR-40245', email: 'john.doe@example.com', phone: '+234 808 123 4567', txns: 15, spent: '₦245,000', disputes: 1, status: 'Active', lastActive: 'Dec 29, 2024' },
  { id: 'BYR-90190', email: 'sarah.williams@example.com', phone: '+234 809 234 5678', txns: 23, spent: '₦580,000', disputes: 2, status: 'Active', lastActive: 'Dec 26, 2024' },
  { id: 'BYR-60312', email: 'michael.okoro@example.com', phone: '+234 807 345 6789', txns: 8, spent: '₦125,000', disputes: 1, status: 'Active', lastActive: 'Dec 25, 2024' },
  { id: 'BYR-80889', email: 'ada.nwezu@example.com', phone: '+234 806 456 7890', txns: 42, spent: '₦1,250,000', disputes: 0, status: 'Active', lastActive: 'Dec 28, 2024' },
  { id: 'BYR-80421', email: 'chidi.obi@example.com', phone: '+234 810 567 8901', txns: 5, spent: '₦78,000', disputes: 0, status: 'Banned', lastActive: 'Dec 20, 2024' },
  { id: 'BYR-90376', email: 'fatima.bello@example.com', phone: '+234 811 678 9012', txns: 19, spent: '₦385,000', disputes: 1, status: 'Active', lastActive: 'Jan 2, 2025' },
];

const stats = [
  { label: 'Total Buyers', value: '6', icon: <ShoppingCart size={20} className="text-[#152570]" />, border: 'border-l-4 border-[#152570]' },
  { label: 'Active Buyers', value: '5', icon: <CheckCircle2 size={20} className="text-green-500" />, border: 'border-l-4 border-green-500' },
  { label: 'Total Transactions', value: '112', icon: <ShoppingBag size={20} className="text-[#152570]" />, border: 'border-l-4 border-[#152570]' },
  { label: 'Total Value', value: '₦2.7M', icon: <ShoppingCart size={20} className="text-green-500" />, border: 'border-l-4 border-green-500' },
];

// --- Helper Components ---
const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'Active': 'bg-green-50 text-green-700 border-green-200',
    'Banned': 'bg-red-50 text-red-600 border-red-200',
  };

  const icons: Record<string, React.ReactNode> = {
    'Active': <CheckCircle2 size={12} />,
    'Banned': <Ban size={12} />,
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles[status] || 'bg-gray-100'}`}>
      {icons[status]}
      {status}
    </span>
  );
};

const DisputeBadge = ({ count }: { count: number }) => {
    if (count === 0) return <span className="text-slate-400">0</span>;
    return <span className="font-bold text-orange-500">{count}</span>;
};

export default function BuyersPage() {
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
          
          {/* Header & Subtitle */}
          <div>
            <h2 className="text-2xl font-bold text-[#152570]">Buyers</h2>
            <p className="text-slate-500 text-sm mt-1">View-only access to buyer activity for auditing, trust monitoring, and dispute resolution</p>
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
            <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row gap-4">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search buyers by ID, email, or phone..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#152570]/20 transition-all"
                />
              </div>
              {/* Optional Filters Placeholders */}
              <div className="flex-1"></div>
              <div className="flex gap-2">
                 <div className="w-32 h-10 bg-slate-50 rounded-lg border border-slate-200"></div>
                 <div className="w-32 h-10 bg-slate-50 rounded-lg border border-slate-200"></div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 text-left">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Buyer ID</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Email / Phone Number</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Total Transactions</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Total Amount Spent</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Disputes Involved</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Account Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Last Activity Date</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {buyers.map((buyer) => (
                    <tr key={buyer.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-[#152570]">{buyer.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                           <span className="text-sm text-slate-600">{buyer.email}</span>
                           <span className="text-xs text-slate-400">{buyer.phone}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 pl-12">{buyer.txns}</td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-700">{buyer.spent}</td>
                      <td className="px-6 py-4 text-sm pl-12"><DisputeBadge count={buyer.disputes} /></td>
                      <td className="px-6 py-4">
                        <StatusBadge status={buyer.status} />
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{buyer.lastActive}</td>
                      <td className="px-6 py-4 text-right">
                        <Link href={`/admin/buyers/${buyer.id}`} className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#152570] text-[#152570] rounded-lg text-xs font-bold hover:bg-[#152570] hover:text-white transition-all">
                          <Eye size={14} /> View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
          </div>

        </main>
      </div>
    </div>
  );
}