'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LayoutDashboard, Store, Truck, Users, CreditCard, 
  FileText, ShieldCheck, Settings, Bell, Search, ChevronDown, 
  Menu, X, DollarSign, ShoppingCart, Scale, 
  CheckCircle2, Clock, XCircle, AlertCircle, FileBarChart,
  Download, Lock, AlertTriangle, RefreshCcw, Check
} from 'lucide-react';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

// --- Mock Data: Overview Stats ---
const stats = [
  { label: 'Total Vendors', value: '487', subtext: 'Registered on platform', icon: <Users size={20} />, color: 'bg-blue-50 text-[#152570]', textColor: 'text-[#152570]' },
  { label: 'Completed KYC', value: '2', subtext: 'Verified vendors', icon: <ShieldCheck size={20} />, color: 'bg-green-50 text-green-600', textColor: 'text-green-600' },
  { label: 'Pending KYC', value: '1', subtext: 'Awaiting review', icon: <Clock size={20} />, color: 'bg-orange-50 text-orange-500', textColor: 'text-orange-500' },
  { label: 'Failed KYC', value: '1', subtext: 'Require resubmission', icon: <XCircle size={20} />, color: 'bg-red-50 text-red-500', textColor: 'text-red-500' },
  { label: 'Active Escrow', value: '2', subtext: 'Funds held', icon: <DollarSign size={20} />, color: 'bg-indigo-50 text-indigo-600', textColor: 'text-indigo-600' },
  { label: 'Open Disputes', value: '1', subtext: 'Requiring resolution', icon: <Scale size={20} />, color: 'bg-red-50 text-red-600', textColor: 'text-red-600' },
];

const healthSummary = [
  { label: 'KYC Completion Rate', percentage: '0%', width: '2%', color: 'bg-green-500' },
  { label: 'Escrow Exception Rate', percentage: '50%', width: '50%', color: 'bg-orange-500' },
  { label: 'Dispute Resolution Rate', percentage: '75%', width: '75%', color: 'bg-green-500' },
];

// --- Mock Data: KYC Reports Table ---
const kycData = [
  { name: 'Adebayo Fashion Store', id: 'VEN-00245', type: 'Merchant', status: 'Completed', submitted: 'Jan 10, 2025', processed: 'Jan 12, 2025', reason: '—' },
  { name: 'Chioma Electronics', id: 'VEN-00198', type: 'Merchant', status: 'Completed', submitted: 'Jan 8, 2025', processed: 'Jan 9, 2025', reason: '—' },
  { name: 'Emeka Wholesale', id: 'VEN-00312', type: 'Merchant', status: 'Pending', submitted: 'Jan 15, 2025', processed: '—', reason: '—' },
  { name: 'Blessing Eze', id: 'VEN-00989', type: 'Individual', status: 'Failed', submitted: 'Jan 5, 2025', processed: 'Jan 7, 2025', reason: 'Document quality insufficient' },
  { name: 'Oluwaseun Crafts', id: 'VEN-00421', type: 'Individual', status: 'Not Submitted', submitted: '—', processed: '—', reason: '—' },
];

// --- Mock Data: Escrow Reports Table ---
const escrowData = [
  { id: 'TXN-2025-0124', vendor: 'Adebayo Fashion Store', buyerId: 'BYR-00245', amount: '₦125,000', status: 'Held', timeInState: '3 days', flags: [] },
  { id: 'TXN-2025-0118', vendor: 'Chioma Electronics', buyerId: 'BYR-00198', amount: '₦580,000', status: 'Released', timeInState: '7 days', flags: [] },
  { id: 'TXN-2025-0112', vendor: 'Emeka Wholesale', buyerId: 'BYR-00312', amount: '₦385,000', status: 'Disputed', timeInState: '12 days', flags: ['Disputed', 'High Value'] },
  { id: 'TXN-2025-0089', vendor: 'Oluwaseun Crafts', buyerId: 'BYR-00421', amount: '₦245,000', status: 'Held', timeInState: '15 days', flags: ['Extended Hold'] },
];

// --- Mock Data: Dispute Reports Table (NEW) ---
const disputeData = [
  { id: 'DSP-2025-0045', vendor: 'Emeka Wholesale', buyerId: 'BYR-00312', agent: 'Ngozi Okeke', outcome: 'Pending', time: '—', created: 'Jan 12, 2025' },
  { id: 'DSP-2025-0038', vendor: 'TechMart Solutions', buyerId: 'BYR-00089', agent: 'Adewale Ibrahim', outcome: 'Buyer Favor', time: '4 days', created: 'Jan 5, 2025' },
  { id: 'DSP-2025-0020', vendor: 'Blessing Beauty Supply', buyerId: 'BYR-00178', agent: 'Chidinma Okafor', outcome: 'Vendor Favor', time: '3 days', created: 'Dec 28, 2024' },
  { id: 'DSP-2025-0021', vendor: 'Fashion Hub Lagos', buyerId: 'BYR-00256', agent: 'Ngozi Okeke', outcome: 'Partial Refund', time: '6 days', created: 'Dec 20, 2024' },
];

// --- Helper Components ---
const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    // General / KYC
    'Completed': 'bg-green-50 text-green-600 border-green-200',
    'Pending': 'bg-orange-50 text-orange-600 border-orange-200',
    'Failed': 'bg-red-50 text-red-600 border-red-200',
    'Not Submitted': 'bg-slate-100 text-slate-500 border-slate-200',
    
    // Escrow
    'Held': 'bg-orange-50 text-orange-600 border-orange-200',
    'Released': 'bg-green-50 text-green-600 border-green-200',
    'Disputed': 'bg-red-50 text-red-600 border-red-200',

    // Disputes
    'Buyer Favor': 'bg-blue-50 text-blue-600 border-blue-200',
    'Vendor Favor': 'bg-green-50 text-green-600 border-green-200',
    'Partial Refund': 'bg-purple-50 text-purple-600 border-purple-200',
  };

  const icons: Record<string, React.ReactNode> = {
    'Completed': <CheckCircle2 size={12} />,
    'Released': <CheckCircle2 size={12} />,
    'Pending': <Clock size={12} />,
    'Held': <Lock size={12} />,
    'Failed': <XCircle size={12} />,
    'Disputed': <AlertCircle size={12} />,
    'Not Submitted': <AlertCircle size={12} />,
    
    // Dispute Icons
    'Buyer Favor': <CheckCircle2 size={12} />,
    'Vendor Favor': <CheckCircle2 size={12} />,
    'Partial Refund': <RefreshCcw size={12} />,
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles[status] || 'bg-slate-100 border-slate-200'}`}>
      {icons[status]}
      {status}
    </span>
  );
};

const FlagBadge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-rose-50 text-rose-600 border border-rose-100 mb-1 mr-1 last:mr-0">
    <AlertTriangle size={10} />
    {label}
  </span>
);

export default function ComplianceReportsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVendorsMenuOpen, setIsVendorsMenuOpen] = useState(false);
  
  // Defaulting to 'Dispute Reports' to match the request
  const [activeTab, setActiveTab] = useState('Dispute Reports'); 

  const tabs = [
    { id: 'Overview', icon: <FileText size={16} /> },
    { id: 'KYC Reports', icon: <ShieldCheck size={16} /> },
    { id: 'Escrow Reports', icon: <DollarSign size={16} /> },
    { id: 'Dispute Reports', icon: <Scale size={16} /> },
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
          <Link href="/admin/compliance" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-white bg-white/10 border-l-4 border-[#22c55e] transition-colors"><FileText size={20} /> Compliance & Reports</Link>
          <Link href="/admin/billing" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><DollarSign size={20} /> Subscription & Billing</Link>
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
            <h2 className="text-2xl font-bold text-[#152570]">Compliance & Reports</h2>
            <p className="text-slate-500 text-sm mt-1">Audit-ready compliance dashboards for KYC, escrow integrity, and dispute resolution oversight</p>
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

             {/* Tab Content Area */}
             <div className="p-6 bg-[#F8FAFC] flex-1 overflow-y-auto">
                
                {/* 1. OVERVIEW TAB */}
                {activeTab === 'Overview' && (
                   <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stats.map((stat, i) => (
                          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                             <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-xl ${stat.color}`}>{stat.icon}</div>
                                <div><p className="text-sm text-slate-500 mb-1">{stat.label}</p><h3 className={`text-3xl font-medium ${stat.textColor}`}>{stat.value}</h3><p className="text-xs text-slate-400 mt-1">{stat.subtext}</p></div>
                             </div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
                         <h3 className="text-lg font-bold text-[#152570] mb-8">Compliance Health Summary</h3>
                         <div className="space-y-8">
                            {healthSummary.map((item, i) => (
                              <div key={i}>
                                 <div className="flex justify-between items-end mb-2"><span className="text-sm font-medium text-slate-600">{item.label}</span><span className="text-sm font-bold text-[#152570]">{item.percentage}</span></div>
                                 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className={`h-full rounded-full ${item.color}`} style={{ width: item.width }} /></div>
                              </div>
                            ))}
                         </div>
                      </div>
                   </div>
                )}

                {/* 2. KYC REPORTS TAB */}
                {activeTab === 'KYC Reports' && (
                  <div className="space-y-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                       <div><h3 className="text-[#152570] font-bold text-sm">Export KYC Compliance Report</h3><p className="text-slate-500 text-xs mt-1">Generate audit-ready reports for regulatory compliance</p></div>
                       <div className="flex gap-3">
                          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"><FileBarChart size={16} /> Export CSV</button>
                          <button className="flex items-center gap-2 px-4 py-2 bg-[#152570] rounded-lg text-sm font-medium text-white hover:bg-[#1e3a8a] transition-colors"><Download size={16} /> Export PDF</button>
                       </div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                       <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col lg:flex-row gap-4">
                          <div className="relative flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} /><input type="text" placeholder="Search by vendor name or ID..." className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#152570]/20" /></div>
                          <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0">
                             <div className="relative min-w-[140px]">
                                <select className="w-full appearance-none pl-4 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none cursor-pointer"><option>All Vendor Types</option><option>Merchant</option><option>Individual</option></select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                             </div>
                             <div className="relative min-w-[140px]">
                                <select className="w-full appearance-none pl-4 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none cursor-pointer"><option>All KYC Status</option><option>Completed</option><option>Pending</option><option>Failed</option></select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                             </div>
                             <div className="relative min-w-[120px]">
                                <select className="w-full appearance-none pl-4 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none cursor-pointer"><option>All Time</option><option>This Month</option><option>Last Month</option></select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                             </div>
                          </div>
                       </div>
                       <div className="overflow-x-auto">
                          <table className="w-full">
                             <thead className="bg-slate-50 border-b border-slate-100">
                                <tr>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Vendor Name</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Vendor ID</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Vendor Type</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">KYC Status</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Date Submitted</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Date Processed</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Failure Reason</th>
                                </tr>
                             </thead>
                             <tbody className="divide-y divide-slate-100 bg-white">
                                {kycData.map((row, idx) => (
                                   <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                      <td className="px-6 py-4 text-sm text-[#152570] font-medium">{row.name}</td>
                                      <td className="px-6 py-4 text-sm text-[#152570] font-medium">{row.id}</td>
                                      <td className="px-6 py-4 text-sm text-slate-600">{row.type}</td>
                                      <td className="px-6 py-4"><StatusBadge status={row.status} /></td>
                                      <td className="px-6 py-4 text-sm text-slate-500">{row.submitted}</td>
                                      <td className="px-6 py-4 text-sm text-slate-500">{row.processed}</td>
                                      <td className="px-6 py-4 text-sm text-slate-400 max-w-xs truncate" title={row.reason}>{row.reason}</td>
                                   </tr>
                                ))}
                             </tbody>
                          </table>
                       </div>
                       <div className="px-6 py-4 border-t border-slate-100"><p className="text-xs text-slate-500">Showing 5 of 5 records</p></div>
                    </div>
                  </div>
                )}

                {/* 3. ESCROW REPORTS TAB */}
                {activeTab === 'Escrow Reports' && (
                  <div className="space-y-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                       <div><h3 className="text-[#152570] font-bold text-sm">Export Escrow Compliance Report</h3><p className="text-slate-500 text-xs mt-1">Generate detailed escrow transaction reports for audit trail</p></div>
                       <div className="flex gap-3">
                          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"><FileBarChart size={16} /> Export CSV</button>
                          <button className="flex items-center gap-2 px-4 py-2 bg-[#152570] rounded-lg text-sm font-medium text-white hover:bg-[#1e3a8a] transition-colors"><Download size={16} /> Export PDF</button>
                       </div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                       <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col lg:flex-row gap-4">
                          <div className="relative flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} /><input type="text" placeholder="Search by transaction ID, vendor, or buyer..." className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#152570]/20" /></div>
                          <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0">
                             <div className="relative min-w-[160px]">
                                <select className="w-full appearance-none pl-4 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none cursor-pointer"><option>All Escrow Status</option><option>Held</option><option>Released</option><option>Disputed</option></select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                             </div>
                             <div className="relative min-w-[140px]">
                                <select className="w-full appearance-none pl-4 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none cursor-pointer"><option>All Time</option><option>This Week</option><option>This Month</option></select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                             </div>
                          </div>
                       </div>
                       <div className="overflow-x-auto">
                          <table className="w-full">
                             <thead className="bg-slate-50 border-b border-slate-100">
                                <tr>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Transaction ID</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Vendor</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Buyer ID</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Amount</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Escrow Status</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Time In State</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Flags / Exceptions</th>
                                </tr>
                             </thead>
                             <tbody className="divide-y divide-slate-100 bg-white">
                                {escrowData.map((row, idx) => (
                                   <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                      <td className="px-6 py-4 text-sm text-[#152570] font-medium">{row.id}</td>
                                      <td className="px-6 py-4 text-sm text-slate-700">{row.vendor}</td>
                                      <td className="px-6 py-4 text-sm text-slate-600">{row.buyerId}</td>
                                      <td className="px-6 py-4 text-sm font-bold text-[#152570]">{row.amount}</td>
                                      <td className="px-6 py-4"><StatusBadge status={row.status} /></td>
                                      <td className="px-6 py-4 text-sm text-slate-500">{row.timeInState}</td>
                                      <td className="px-6 py-4">
                                         {row.flags.length > 0 ? (
                                            <div className="flex flex-col items-start">{row.flags.map((flag, fIdx) => (<FlagBadge key={fIdx} label={flag} />))}</div>
                                         ) : (<span className="text-slate-300 text-sm">—</span>)}
                                      </td>
                                   </tr>
                                ))}
                             </tbody>
                          </table>
                       </div>
                       <div className="px-6 py-4 border-t border-slate-100"><p className="text-xs text-slate-500">Showing 4 of 4 records</p></div>
                    </div>
                  </div>
                )}

                {/* 4. DISPUTE REPORTS TAB (Active) */}
                {activeTab === 'Dispute Reports' && (
                  <div className="space-y-6">
                    
                    {/* Header */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                       <div>
                          <h3 className="text-[#152570] font-bold text-sm">Export Dispute & Resolution Report</h3>
                          <p className="text-slate-500 text-xs mt-1">Generate comprehensive dispute resolution reports for compliance review</p>
                       </div>
                       <div className="flex gap-3">
                          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                            <FileBarChart size={16} /> Export CSV
                          </button>
                          <button className="flex items-center gap-2 px-4 py-2 bg-[#152570] rounded-lg text-sm font-medium text-white hover:bg-[#1e3a8a] transition-colors">
                            <Download size={16} /> Export PDF
                          </button>
                       </div>
                    </div>

                    {/* Table Container */}
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                       
                       {/* Filter Bar */}
                       <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col lg:flex-row gap-4">
                          <div className="relative flex-1">
                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                             <input type="text" placeholder="Search by dispute ID, vendor, or buyer..." className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#152570]/20" />
                          </div>
                          <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0">
                             <div className="relative min-w-[160px]">
                                <select className="w-full appearance-none pl-4 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none cursor-pointer">
                                   <option>All Outcomes</option>
                                   <option>Pending</option>
                                   <option>Buyer Favor</option>
                                   <option>Vendor Favor</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                             </div>
                             <div className="relative min-w-[140px]">
                                <select className="w-full appearance-none pl-4 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none cursor-pointer">
                                   <option>All Times</option>
                                   <option>This Month</option>
                                   <option>Last Quarter</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                             </div>
                          </div>
                       </div>

                       {/* Table */}
                       <div className="overflow-x-auto">
                          <table className="w-full">
                             <thead className="bg-slate-50 border-b border-slate-100">
                                <tr>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Dispute ID</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Vendor</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Buyer ID</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Assigned Agent</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Outcome</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Resolution Time</th>
                                   <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Date Created</th>
                                </tr>
                             </thead>
                             <tbody className="divide-y divide-slate-100 bg-white">
                                {disputeData.map((row, idx) => (
                                   <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                      <td className="px-6 py-4 text-sm text-[#152570] font-medium">{row.id}</td>
                                      <td className="px-6 py-4 text-sm text-slate-700">{row.vendor}</td>
                                      <td className="px-6 py-4 text-sm text-slate-600">{row.buyerId}</td>
                                      <td className="px-6 py-4 text-sm text-slate-700">{row.agent}</td>
                                      <td className="px-6 py-4"><StatusBadge status={row.outcome} /></td>
                                      <td className="px-6 py-4 text-sm text-slate-600">{row.time}</td>
                                      <td className="px-6 py-4 text-sm text-slate-500">{row.created}</td>
                                   </tr>
                                ))}
                             </tbody>
                          </table>
                       </div>

                       {/* Footer */}
                       <div className="px-6 py-4 border-t border-slate-100">
                          <p className="text-xs text-slate-500">Showing 4 of 4 records</p>
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