'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LayoutDashboard, Store, Truck, Users, CreditCard, 
  FileText, ShieldCheck, Settings, Bell, Search, ChevronDown, 
  Menu, X, Eye, DollarSign, ShoppingCart, Scale, 
  Plus, CheckCircle2, AlertCircle, Ban, Info
} from 'lucide-react';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

// --- Mock Data ---
const agents = [
  { id: 1, name: 'Chioma Adeyemi', email: 'chioma.adeyemi@vendorventory.com', status: 'Active', assigned: 12, rate: 94, time: '2.3 days', initial: 'CA', color: 'bg-[#152570]' },
  { id: 2, name: 'Ibrahim Musa', email: 'ibrahim.musa@vendorventory.com', status: 'Active', assigned: 8, rate: 89, time: '3.1 days', initial: 'IM', color: 'bg-[#152570]' },
  { id: 3, name: 'Funke Okafor', email: 'funke.okafor@vendorventory.com', status: 'Active', assigned: 15, rate: 92, time: '2.7 days', initial: 'FO', color: 'bg-[#152570]' },
  { id: 4, name: 'Oluwaseun Balogun', email: 'oluwaseun.balogun@vendorventory.com', status: 'Suspended', assigned: 0, rate: 73, time: '4.2 days', initial: 'OB', color: 'bg-[#152570]' },
];

const stats = [
  { label: 'Total Agents', value: '4', icon: <Users size={20} className="text-[#152570]" />, border: 'border-l-4 border-[#152570]' },
  { label: 'Active Agents', value: '3', icon: <CheckCircle2 size={20} className="text-green-500" />, border: 'border-l-4 border-green-500' },
  { label: 'Active Disputes', value: '35', icon: <AlertCircle size={20} className="text-orange-500" />, border: 'border-l-4 border-orange-500' },
  { label: 'Avg Resolution Rate', value: '87%', icon: <CheckCircle2 size={20} className="text-green-500" />, border: 'border-l-4 border-green-500' },
];

// --- Helper Components ---
const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'Active': 'bg-green-50 text-green-700 border-green-200',
    'Suspended': 'bg-red-50 text-red-600 border-red-200',
  };

  const icons: Record<string, React.ReactNode> = {
    'Active': <CheckCircle2 size={12} />,
    'Suspended': <Ban size={12} />,
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles[status] || 'bg-gray-100'}`}>
      {icons[status]}
      {status}
    </span>
  );
};

const RateText = ({ rate }: { rate: number }) => {
    let colorClass = 'text-green-600';
    if (rate < 80) colorClass = 'text-red-600';
    else if (rate < 90) colorClass = 'text-orange-500';

    return <span className={`font-bold ${colorClass}`}>{rate}%</span>;
};

export default function DisputesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVendorsMenuOpen, setIsVendorsMenuOpen] = useState(false);
  
  // Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-[#F8FAFC] flex ${arimo.variable} ${arimo.className}`}>
      
      {/* --- Add Agent Modal --- */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsAddModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <h3 className="text-lg font-bold text-[#152570]">Add Dispute Resolution Agent</h3>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Full Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="e.g., Adebayo Ogunlesi"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#152570]/20 focus:border-[#152570] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email Address <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  placeholder="agent@vendorventory.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#152570]/20 focus:border-[#152570] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Role</label>
                <input 
                  type="text" 
                  value="Dispute Resolution Agent"
                  disabled
                  className="w-full px-4 py-3 bg-slate-100 border border-slate-200 text-slate-500 rounded-xl text-sm cursor-not-allowed"
                />
              </div>

              {/* Info Note */}
              <div className="flex gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                 <Info size={18} className="text-blue-600 shrink-0 mt-0.5" />
                 <p className="text-xs text-blue-700 leading-relaxed">
                    Agents will receive login credentials via email and can only access assigned disputes.
                 </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex gap-3 justify-end">
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="flex-1 px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-white transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 px-6 py-3 rounded-xl bg-[#22c55e] hover:bg-green-600 text-white font-bold text-sm shadow-sm shadow-green-500/20 transition-all">
                Create Agent
              </button>
            </div>

          </div>
        </div>
      )}

      {/* --- Mobile Sidebar Overlay --- */}
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
          
          {/* Active Link */}
          <Link href="/admin/disputes" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-white bg-white/10 border-l-4 border-[#22c55e] transition-colors">
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
          
          {/* Header & Action */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
                <h2 className="text-2xl font-bold text-[#152570]">Dispute Resolution Agents</h2>
                <p className="text-slate-500 text-sm mt-1">Manage agents who handle dispute resolution and maintain platform neutrality</p>
            </div>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 bg-[#22c55e] hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all"
            >
              <Plus size={18} /> Add Dispute Resolution Agent
            </button>
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
            <div className="p-5 border-b border-slate-100">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search agents..." 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#152570]/20 transition-all"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 text-left">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Agent Name</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Assigned Disputes</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Resolution Rate</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Avg Resolution Time</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {agents.map((agent) => (
                    <tr key={agent.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full ${agent.color} flex items-center justify-center text-white font-bold shrink-0`}>
                            {agent.initial}
                          </div>
                          <div>
                            <p className="font-medium text-[#152570] text-sm">{agent.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{agent.email}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={agent.status} />
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 pl-10">{agent.assigned}</td>
                      <td className="px-6 py-4 text-sm"><RateText rate={agent.rate} /></td>
                      <td className="px-6 py-4 text-sm text-slate-500">{agent.time}</td>
                      <td className="px-6 py-4 text-right">
                        {/* UPDATED: Link to Agent Details */}
                        <Link 
                          href={`/admin/disputes/${agent.id}`}
                          className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#152570] text-[#152570] rounded-lg text-xs font-bold hover:bg-[#152570] hover:text-white transition-all"
                        >
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