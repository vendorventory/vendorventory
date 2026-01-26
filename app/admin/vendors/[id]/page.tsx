'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation'; // Added to read the URL ID
import { 
  LayoutDashboard, Store, Truck, Users, CreditCard, 
  FileText, ShieldCheck, Settings, Bell, Search, ChevronDown, 
  Menu, X, ArrowLeft, Mail, Phone, MapPin, Building2, 
  Ban, CheckCircle2, File, Download, Circle, Scale, DollarSign, ShoppingCart,
  Clock, AlertCircle, XCircle // Added icons for status badges
} from 'lucide-react';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

// --- HELPER: Status Badge Component ---
// This handles the visual logic for "Completed" vs "In Progress" vs "Pending"
const StatusBadge = ({ status }: { status: string }) => {
    const styles: Record<string, string> = {
      'Verified': 'bg-green-100 text-green-700',
      'Completed': 'border-green-200 text-green-700', // For the outline button style
      'Active Account': 'bg-green-50 text-green-700 border-green-200',
      'In Progress': 'border-orange-200 text-orange-600',
      'Pending': 'bg-orange-50 text-orange-600',
    };
  
    const icons: Record<string, React.ReactNode> = {
      'Verified': null, 
      'Completed': <CheckCircle2 size={14} />,
      'Active Account': <CheckCircle2 size={12} />,
      'In Progress': <Clock size={14} />,
      'Pending': null,
    };
  
    // Determine if it's an outlined badge (KYC header) or filled badge (Doc status)
    const isOutline = status === 'Completed' || status === 'In Progress';
    
    return (
      <span className={`px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1 shadow-sm 
        ${isOutline ? 'bg-white border' : ''} 
        ${styles[status] || 'bg-slate-100 text-slate-500'}`}>
        {icons[status]} {status}
      </span>
    );
};

// --- MOCK DATABASE (Matches your IDs) ---
const vendorsDatabase: Record<number, any> = {
  1: {
    id: 1,
    name: 'TechMart Solutions',
    initial: 'T',
    type: 'Merchant Vendor',
    status: 'Active Account',
    joinedDate: 'December 15, 2024',
    email: 'contact@techmart.ng',
    phone: '+234 801 234 5678',
    country: 'Nigeria',
    address: '123 Allen Avenue, Ikeja, Lagos',
    regNo: 'RC-123456',
    kycStatus: 'Completed',
    performance: { transactions: 150, revenue: '₦15.0M', completed: 147, pending: 3 },
    bank: { name: 'GTBank', number: '****5678', accountName: 'TechMart Solutions Ltd' },
    documents: [
      { name: 'Government ID', file: 'drivers-license.pdf', status: 'Verified', date: '12/15/2024' },
      { name: 'Business Registration', file: 'cac-certificate.pdf', status: 'Verified', date: '12/15/2024' },
      { name: 'Bank Statement', file: 'bank-statement.pdf', status: 'Verified', date: '12/15/2024' },
      { name: 'Utility Bill', file: 'utility-bill.pdf', status: 'Verified', date: '12/15/2024' },
    ],
    history: [
      { title: 'KYC Approved', date: 'Dec 16, 2024 • Adebayo Ogunlesi', active: true },
      { title: 'Documents Submitted', date: 'Dec 15, 2024 • System', active: false },
      { title: 'Vendor Invited', date: 'Dec 10, 2024 • Adebayo Ogunlesi', active: false },
    ]
  },
  2: {
    id: 2,
    name: 'Fashion Hub Lagos',
    initial: 'F',
    type: 'Merchant Vendor',
    status: 'Active Account',
    joinedDate: 'December 20, 2024',
    email: 'info@fashionhub.com',
    phone: '+234 802 345 6789',
    country: 'Nigeria',
    address: '45 Admiralty Way, Lekki, Lagos',
    regNo: 'RC-789012',
    kycStatus: 'In Progress', // Specific to Fashion Hub
    performance: { transactions: 0, revenue: '₦0.0M', completed: 0, pending: 0 }, // Specific to Fashion Hub
    bank: { name: 'Access Bank', number: '****3456', accountName: 'Fashion Hub Lagos' },
    documents: [
      { name: 'Government ID', file: 'national-id.pdf', status: 'Pending', date: '12/29/2024' },
      { name: 'Business Registration', file: 'cac-docs.pdf', status: 'Pending', date: '12/29/2024' },
      { name: 'Bank Statement', file: 'bank-docs.pdf', status: 'Pending', date: '12/29/2024' },
    ],
    history: [
      { title: 'KYC Documents Submitted', date: 'Dec 28, 2024 • System', active: true },
      { title: 'Account Activated', date: 'Dec 21, 2024 • System', active: false },
      { title: 'Vendor Joined', date: 'Dec 20, 2024 • System', active: false },
    ]
  }
};


export default function VendorDetailsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVendorsMenuOpen, setIsVendorsMenuOpen] = useState(true);
  
  // Get the ID from the URL (e.g. /admin/vendors/2)
  const params = useParams();
  const id = Number(params.id);
  
  // Find the vendor, or fallback to TechMart if ID not found
  const vendorData = vendorsDatabase[id] || vendorsDatabase[1];

  return (
    <div className={`min-h-screen bg-[#F8FAFC] flex ${arimo.variable} ${arimo.className}`}>
      
      {/* --- Mobile Overlay --- */}
      {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity" />
      )}

      {/* --- Sidebar (Same as before) --- */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#152570] text-white transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 shadow-2xl lg:shadow-none flex flex-col`}>
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

          <div className="pt-2 pb-2">
            <button onClick={() => setIsVendorsMenuOpen(!isVendorsMenuOpen)} className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium bg-white/10 text-white transition-colors">
              <div className="flex items-center gap-3"><Store size={20} /> Vendors</div>
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
          {/* ... Rest of Sidebar Links (Delivery, Disputes, etc) ... */}
          <Link href="/admin/delivery-partners" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><Truck size={20} /> Delivery Partners</Link>
          <Link href="/admin/disputes" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><Scale size={20} /> Dispute Resolution Agents</Link>
          <Link href="/admin/buyers" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><ShoppingCart size={20} /> Buyers</Link>
          <Link href="/admin/transactions" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><CreditCard size={20} /> Transactions</Link>
          <Link href="/admin/compliance" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><FileText size={20} /> Compliance & Reports</Link>
          <Link href="/admin/billing" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><DollarSign size={20} /> Subscription & Billing</Link>
          <div className="pt-4 mt-4 border-t border-[#1f3a8a]">
            <Link href="/admin/settings" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><Settings size={20} /> Settings</Link>
          </div>
        </nav>
      </aside>

      {/* --- Main Content (Right) --- */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen">
        
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-16 shrink-0 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500 hover:text-[#152570] p-1 rounded-md"><Menu size={24} /></button>
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
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          
          <Link href="/admin/vendors" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#152570] text-sm font-medium mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to All Vendors
          </Link>

          {/* 1. Header Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl bg-[#152570] flex items-center justify-center text-white text-3xl font-bold">
                {vendorData.initial}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#152570] mb-2">{vendorData.name}</h2>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wide">
                    {vendorData.type}
                  </span>
                  <StatusBadge status={vendorData.status} />
                </div>
                <p className="text-slate-500 text-sm">Member since {vendorData.joinedDate}</p>
              </div>
            </div>
            
            <button className="flex items-center gap-2 bg-[#ea580c] hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all">
              <Ban size={18} /> Suspend Account
            </button>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Left Column (Details) */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Vendor Overview Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-[#152570] mb-6">Vendor Overview</h3>
                <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2"><Mail size={14}/> Email</p>
                      <p className="text-[#152570] font-medium">{vendorData.email}</p>
                   </div>
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2"><Phone size={14}/> Phone</p>
                      <p className="text-[#152570] font-medium">{vendorData.phone}</p>
                   </div>
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2"><MapPin size={14}/> Country</p>
                      <p className="text-[#152570] font-medium">{vendorData.country}</p>
                   </div>
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2"><MapPin size={14}/> Business Address</p>
                      <p className="text-[#152570] font-medium">{vendorData.address}</p>
                   </div>
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2"><Building2 size={14}/> Business Reg. No.</p>
                      <p className="text-[#152570] font-medium uppercase">{vendorData.regNo}</p>
                   </div>
                </div>
              </div>

              {/* KYC & Verification Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-[#152570]">KYC & Verification</h3>
                    <StatusBadge status={vendorData.kycStatus} />
                 </div>

                 {/* Documents Grid */}
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Uploaded Documents</p>
                 <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {vendorData.documents.map((doc: any, i: number) => (
                      <div key={i} className="flex items-start gap-3 p-4 border border-slate-100 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors group">
                         <div className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500">
                            <FileText size={20} />
                         </div>
                         <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-[#152570] mb-0.5">{doc.name}</p>
                            <p className="text-xs text-slate-400 truncate mb-2">{doc.file}</p>
                            <div className="flex items-center gap-2">
                               <StatusBadge status={doc.status} />
                               <span className="text-[10px] text-slate-400">{doc.date}</span>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>

                 {/* ACTION BUTTONS (Only for Fashion Hub / In Progress) */}
                 {vendorData.kycStatus === 'In Progress' && (
                    <div className="flex gap-4 border-t border-slate-100 pt-6 mb-8">
                        <button className="flex-1 bg-[#22c55e] hover:bg-green-600 text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors">
                            <CheckCircle2 size={18} /> Approve KYC
                        </button>
                        <button className="flex-1 bg-[#dc2626] hover:bg-red-700 text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors">
                            <XCircle size={18} /> Reject KYC
                        </button>
                    </div>
                 )}

                 {/* History Timeline */}
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Verification History</p>
                 <div className="space-y-6 relative pl-2">
                    <div className="absolute top-2 bottom-2 left-[19px] w-0.5 bg-slate-100"></div>
                    {vendorData.history.map((step: any, i: number) => (
                       <div key={i} className="flex gap-4 relative">
                          <div className={`relative z-10 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center shrink-0 
                             ${step.active ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                             {step.active ? <CheckCircle2 size={16} /> : <FileText size={16} />}
                          </div>
                          <div className="pt-1">
                             <p className="text-sm font-bold text-[#152570]">{step.title}</p>
                             <p className="text-xs text-slate-500">{step.date}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

            </div>

            {/* Right Column (Stats) */}
            <div className="space-y-6">
               
               {/* Performance Card */}
               <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-[#152570] mb-6">Performance</h3>
                  
                  <div className="p-4 bg-slate-50 rounded-xl mb-4">
                     <p className="text-xs font-bold text-slate-500 mb-1">Total Transactions</p>
                     <p className="text-2xl font-bold text-[#152570]">{vendorData.performance.transactions}</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl mb-6">
                     <p className="text-xs font-bold text-slate-500 mb-1">Total Revenue</p>
                     <p className="text-2xl font-bold text-[#22c55e]">{vendorData.performance.revenue}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-3 bg-green-50 rounded-xl">
                        <p className="text-[10px] font-bold text-green-600 uppercase mb-1">Completed</p>
                        <p className="text-xl font-bold text-[#152570]">{vendorData.performance.completed}</p>
                     </div>
                     <div className="p-3 bg-orange-50 rounded-xl">
                        <p className="text-[10px] font-bold text-orange-600 uppercase mb-1">Pending</p>
                        <p className="text-xl font-bold text-[#152570]">{vendorData.performance.pending}</p>
                     </div>
                  </div>
               </div>

               {/* Bank Details Card */}
               <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-[#152570] mb-6">Bank Details</h3>
                  <div className="space-y-4">
                     <div>
                        <p className="text-xs font-bold text-slate-400 mb-1">Bank Name</p>
                        <p className="text-sm font-bold text-[#152570]">{vendorData.bank.name}</p>
                     </div>
                     <div>
                        <p className="text-xs font-bold text-slate-400 mb-1">Account Number</p>
                        <p className="text-sm font-medium text-slate-600 tracking-wider">{vendorData.bank.number}</p>
                     </div>
                     <div>
                        <p className="text-xs font-bold text-slate-400 mb-1">Account Name</p>
                        <p className="text-sm font-medium text-slate-600">{vendorData.bank.accountName}</p>
                     </div>
                  </div>
               </div>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}