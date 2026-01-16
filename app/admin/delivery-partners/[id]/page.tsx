'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  LayoutDashboard, Store, Truck, Users, CreditCard, 
  FileText, ShieldCheck, Settings, Bell, Search, ChevronDown, 
  Menu, X, ArrowLeft, Mail, Phone, MapPin, 
  Ban, CheckCircle2, AlertCircle, Info, Calendar, Map, HelpCircle, XCircle,
  DollarSign
} from 'lucide-react';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

// --- Mock Data ---
const partnerData = {
  id: 1,
  name: 'SwiftLogistics Nigeria',
  status: 'Active',
  addedDate: 'November 15, 2024',
  initial: 'S',
  email: 'operations@swiftlogistics.ng',
  phone: '+234 800 123 4567',
  address: '12 Murtala Mohammed Way, Yaba, Lagos State',
  coverage: 'Lagos, Abuja, Port Harcourt',
  assignedCount: 45,
  vendors: [
    { id: 1, name: 'Adebayo Fashion Store', type: 'Merchant', email: 'adebayo@fashionstore.ng', date: 'Dec 1, 2024', initial: 'A' },
    { id: 2, name: 'Chioma Electronics', type: 'Merchant', email: 'chioma@electronics.ng', date: 'Nov 28, 2024', initial: 'C' },
    { id: 3, name: 'Tunde Okafor', type: 'Individual', email: 'tunde.okafor@gmail.com', date: 'Nov 25, 2024', initial: 'T' },
    { id: 4, name: 'Blessing Beauty Supply', type: 'Merchant', email: 'blessing@beautysupply.ng', date: 'Nov 20, 2024', initial: 'B' },
    { id: 5, name: 'Emeka Wholesale', type: 'Merchant', email: 'emeka@wholesale.ng', date: 'Nov 18, 2024', initial: 'E' },
  ]
};

export default function DeliveryPartnerDetails() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVendorsMenuOpen, setIsVendorsMenuOpen] = useState(false);
  
  // --- Modal States ---
  const [isRestrictModalOpen, setIsRestrictModalOpen] = useState(false);
  const [isDisableModalOpen, setIsDisableModalOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-[#F8FAFC] flex ${arimo.variable} ${arimo.className}`}>
      
      {/* --- 1. Restrict Partner Modal (Orange) --- */}
      {isRestrictModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsRestrictModalOpen(false)}
          />
          <div className="relative bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-4">
               <HelpCircle size={24} strokeWidth={2.5} />
            </div>
            <h3 className="text-lg font-bold text-[#152570] mb-2">Restrict Delivery Partner?</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
               This partner will have limited access and may not be available to all vendors.
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
                 className="flex-1 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-sm shadow-md shadow-orange-500/20 transition-colors"
               >
                 Confirm
               </button>
            </div>
          </div>
        </div>
      )}

      {/* --- 2. Disable Partner Modal (Red) --- */}
      {isDisableModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsDisableModalOpen(false)}
          />
          <div className="relative bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 mb-4">
               <XCircle size={24} strokeWidth={2.5} />
            </div>
            <h3 className="text-lg font-bold text-[#152570] mb-2">Disable Delivery Partner?</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
               This partner will be disabled and removed from the vendor selection list.
            </p>
            <div className="flex gap-3 w-full">
               <button 
                 onClick={() => setIsDisableModalOpen(false)}
                 className="flex-1 py-2.5 border border-slate-300 rounded-xl text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
               >
                 Cancel
               </button>
               <button 
                 onClick={() => setIsDisableModalOpen(false)}
                 className="flex-1 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-sm shadow-md shadow-red-500/20 transition-colors"
               >
                 Confirm
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

          {/* Active Link */}
          <Link href="/admin/delivery-partners" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-white bg-white/10 border-l-4 border-[#22c55e] transition-colors">
            <Truck size={20} /> Delivery Partners
          </Link>

          <Link href="/admin/disputes" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <ShieldCheck size={20} /> Dispute Resolution Agents
          </Link>
          <Link href="/admin/buyers" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <Users size={20} /> Buyers
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
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          
          {/* Back Button */}
          <Link href="/admin/delivery-partners" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#152570] text-sm font-medium mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Delivery Partners
          </Link>

          {/* 1. Header Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-[#152570] text-3xl font-bold">
                <Truck size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#152570] mb-2">{partnerData.name}</h2>
                <div className="flex flex-wrap gap-3 items-center mb-1">
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full uppercase tracking-wide flex items-center gap-1">
                    <CheckCircle2 size={12} /> {partnerData.status}
                  </span>
                  <span className="text-sm text-slate-500">Added on {partnerData.addedDate}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
                <button 
                  onClick={() => setIsRestrictModalOpen(true)}
                  className="flex items-center gap-2 border border-orange-200 bg-orange-50 text-orange-600 hover:bg-orange-100 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                >
                    <AlertCircle size={18} /> Restrict Partner
                </button>
                <button 
                  onClick={() => setIsDisableModalOpen(true)}
                  className="flex items-center gap-2 border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                >
                    <Ban size={18} /> Disable Partner
                </button>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Left Column (Info) */}
            <div className="space-y-6">
              
              {/* Contact Info */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-[#152570] mb-6">Contact Information</h3>
                <div className="space-y-5">
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                         <Mail size={14}/> Email
                      </p>
                      <p className="text-[#152570] font-medium text-sm">{partnerData.email}</p>
                   </div>
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                         <Phone size={14}/> Phone
                      </p>
                      <p className="text-[#152570] font-medium text-sm">{partnerData.phone}</p>
                   </div>
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                         <MapPin size={14}/> Business Address
                      </p>
                      <p className="text-[#152570] font-medium text-sm leading-relaxed">{partnerData.address}</p>
                   </div>
                </div>
              </div>

              {/* Operational Status */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                 <h3 className="text-lg font-bold text-[#152570] mb-6">Operational Status</h3>
                 <div className="space-y-5">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Current Status</p>
                        <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full uppercase tracking-wide inline-flex items-center gap-1">
                            <CheckCircle2 size={12} /> Active
                        </span>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Coverage Areas</p>
                        <div className="flex items-start gap-2 text-[#152570] font-medium text-sm">
                            <Map size={16} className="shrink-0 mt-0.5" />
                            {partnerData.coverage}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Date Added</p>
                        <div className="flex items-center gap-2 text-[#152570] font-medium text-sm">
                            <Calendar size={16} />
                            {partnerData.addedDate}
                        </div>
                    </div>
                 </div>
              </div>

              {/* Logic Note */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                 <div className="flex gap-2">
                    <Info size={16} className="text-[#152570] shrink-0 mt-0.5" />
                    <div>
                        <p className="text-xs font-bold text-[#152570] mb-1">Assignment Logic</p>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            Delivery partners are assigned by vendors from an approved platform list. Super Admin cannot manually assign partners to vendors.
                        </p>
                    </div>
                 </div>
              </div>

            </div>

            {/* Right Column (Vendors Table) */}
            <div className="lg:col-span-2">
               <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                     <div>
                        <h3 className="text-lg font-bold text-[#152570]">Assigned Vendors</h3>
                        <p className="text-sm text-slate-500">{partnerData.assignedCount} vendors currently using this delivery partner</p>
                     </div>
                     <div className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm font-bold">
                        {partnerData.assignedCount}
                     </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50 text-left">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Vendor Name</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Vendor Type</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Assigned Date</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                        {partnerData.vendors.map((vendor) => (
                            <tr key={vendor.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs shrink-0">
                                            {vendor.initial}
                                        </div>
                                        <span className="font-medium text-[#152570] text-sm">{vendor.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                                        vendor.type === 'Merchant' ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-600'
                                    }`}>
                                        {vendor.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500">{vendor.email}</td>
                                <td className="px-6 py-4 text-sm text-slate-500 text-right">{vendor.date}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                  </div>
               </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}