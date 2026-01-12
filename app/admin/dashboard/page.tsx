'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Store, Truck, ShieldAlert, Users, CreditCard, 
  FileText, ShieldCheck, Settings, Bell, Search, ChevronDown, 
  Menu, X, Clock, Wallet, AlertCircle
} from 'lucide-react';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

// --- Route Configuration ---
const navItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
  { name: 'Vendors', href: '/admin/vendors', icon: <Store size={20} /> },
  { name: 'Delivery Partners', href: '/admin/delivery-partners', icon: <Truck size={20} /> },
  { name: 'Dispute Resolution', href: '/admin/disputes', icon: <ShieldAlert size={20} /> },
  { name: 'Buyers', href: '/admin/buyers', icon: <Users size={20} /> },
  { name: 'Transactions', href: '/admin/transactions', icon: <CreditCard size={20} /> },
  { name: 'Compliance & Reports', href: '/admin/compliance', icon: <FileText size={20} /> },
  { name: 'Subscription & Billing', href: '/admin/billing', icon: <Wallet size={20} /> },
  { name: 'Settings', href: '/admin/settings', icon: <Settings size={20} /> },
];

// --- Mock Data ---
const stats = {
  vendors: [
    { label: 'Total Vendors', value: '847', change: '+12.3%', trend: 'up', icon: <Store size={20} className="text-[#152570]" />, bg: 'bg-blue-50' },
    { label: 'Active Vendors', value: '762', change: '+8.1%', trend: 'up', icon: <Users size={20} className="text-green-600" />, bg: 'bg-green-50' },
    { label: 'Pending Invites', value: '43', change: '-5.2%', trend: 'down', icon: <Clock size={20} className="text-blue-600" />, bg: 'bg-blue-50' },
    { label: 'Suspended Vendors', value: '12', change: '+2', trend: 'bad', icon: <AlertCircle size={20} className="text-red-600" />, bg: 'bg-red-50' },
  ],
  kyc: [
    { label: 'Completed KYC', value: '198', sub: '79.8%', icon: <ShieldCheck size={20} className="text-green-600" />, bg: 'bg-green-50', status: 'success' },
    { label: 'Pending KYC', value: '32', sub: '12.9%', icon: <ShieldAlert size={20} className="text-orange-600" />, bg: 'bg-orange-50', status: 'warning' },
    { label: 'Failed KYC', value: '18', sub: '7.3%', icon: <ShieldAlert size={20} className="text-red-600" />, bg: 'bg-red-50', status: 'danger' },
  ],
  escrow: [
    { label: 'Total Transactions', value: '1,247', sub: 'N24.8M total value', icon: <FileText size={20} className="text-[#152570]" />, bg: 'bg-slate-100' },
    { label: 'Funds in Escrow', value: '₦3.2M', sub: '18 active transactions', icon: <Wallet size={20} className="text-green-600" />, bg: 'bg-green-50' },
    { label: 'Disputed Transactions', value: '7', sub: 'Requires review', icon: <AlertCircle size={20} className="text-red-600" />, bg: 'bg-red-50' },
  ]
};

const recentActivity = [
  { id: 1, text: 'Fashion Hub Lagos submitted KYC documents', time: '5 minutes ago', type: 'Review' },
  { id: 2, text: 'New vendor invitation sent to TechMart Solutions', time: '23 minutes ago', type: 'View' },
  { id: 3, text: 'Escrow activated: ₦125,000 transaction', time: '1 hour ago', type: 'View' },
  { id: 4, text: 'QuickSell Store suspended for policy violation', time: '2 hours ago', type: 'Review' },
  { id: 5, text: 'African Crafts Marketplace KYC approved', time: '3 hours ago', type: 'View' },
];

export default function SuperAdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

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
        lg:relative lg:translate-x-0 shadow-2xl lg:shadow-none`}
      >
        <div className="h-full flex flex-col">
          {/* Logo Area */}
          <div className="p-6 border-b border-[#1f3a8a] flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
               <ShieldCheck className="text-[#22c55e]" size={24} />
               Vendor Ventory
            </div>
            {/* Close button for mobile */}
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white/70 hover:text-white">
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar on click (mobile)
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-white/10 text-white border-l-4 border-[#22c55e]' 
                      : 'text-blue-100 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User Profile (Mobile Sidebar Footer) */}
          <div className="p-4 border-t border-[#1f3a8a] lg:hidden">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold">AO</div>
               <div>
                  <p className="font-bold">Adebayo Ogunlesi</p>
                  <p className="text-xs text-blue-200">Super Admin</p>
               </div>
             </div>
          </div>
        </div>
      </aside>

      {/* --- Main Content (Right) --- */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen">
        
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 h-16 shrink-0 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)} 
              className="lg:hidden text-slate-500 hover:text-[#152570] p-1 rounded-md hover:bg-slate-100"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg sm:text-xl font-bold text-[#152570] truncate">Super Admin Dashboard</h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative hidden md:block">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
               <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#152570]/20 w-64" />
            </div>
            
            <button className="relative text-slate-500 hover:text-[#152570]">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            
            <div className="hidden sm:flex items-center gap-3 pl-6 border-l border-slate-200">
               <div className="w-9 h-9 bg-[#152570] rounded-full flex items-center justify-center text-white font-bold text-sm">
                 AO
               </div>
               <div className="hidden lg:block">
                 <p className="text-sm font-bold text-[#152570]">Adebayo Ogunlesi</p>
                 <p className="text-xs text-slate-500">Super Admin</p>
               </div>
               <ChevronDown size={16} className="text-slate-400 hidden lg:block" />
            </div>
          </div>
        </header>

        {/* Dashboard Content Scroll Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 pb-20">
          
          {/* 1. Hero Welcome Card */}
          <div className="bg-[#152570] rounded-2xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl">
             <div className="relative z-10">
                <p className="text-blue-200 text-sm mb-2">Good evening,</p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Welcome back, Mr. Adebayo 👋</h2>
                <p className="text-blue-100 max-w-xl text-sm mb-8">Your platform is running smoothly. Here's what's happening today across Vendor Ventory.</p>
                
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 border-t border-white/10 pt-6">
                   <div>
                      <p className="text-blue-200 text-xs uppercase tracking-wider mb-1">Active Today</p>
                      <p className="text-2xl font-bold">342 vendors</p>
                   </div>
                   <div>
                      <p className="text-blue-200 text-xs uppercase tracking-wider mb-1">This Week</p>
                      <p className="text-2xl font-bold">₦2.4M in transactions</p>
                   </div>
                   <div>
                      <p className="text-blue-200 text-xs uppercase tracking-wider mb-1">Platform Health</p>
                      <div className="flex items-center gap-2">
                         <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse"></span>
                         <p className="text-lg font-bold">Excellent</p>
                      </div>
                   </div>
                </div>
             </div>
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 h-full w-1/3 opacity-10 pointer-events-none">
                <ShieldCheck size={300} />
             </div>
          </div>

          {/* 2. Vendor Overview Grid */}
          <div>
            <h3 className="text-lg font-bold text-[#152570] mb-4">Vendor Overview</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
               {stats.vendors.map((stat, i) => (
                 <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-4">
                       <div className={`p-2 rounded-lg ${stat.bg}`}>{stat.icon}</div>
                       <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          stat.trend === 'up' ? 'text-green-600 bg-green-50' : 
                          stat.trend === 'down' ? 'text-red-600 bg-red-50' : 'text-slate-600 bg-slate-100'
                       }`}>
                          {stat.change}
                       </span>
                    </div>
                    <div className="text-2xl font-bold text-[#152570]">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                 </div>
               ))}
            </div>
          </div>

          {/* 3. KYC & Escrow Row */}
          <div className="grid lg:grid-cols-2 gap-8">
             {/* KYC Status */}
             <div>
                <h3 className="text-lg font-bold text-[#152570] mb-4">KYC & Verification Status</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                   {stats.kyc.map((stat, i) => (
                      <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-4 sm:gap-0">
                         <div className={`w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mb-0 sm:mb-3 ${stat.bg}`}>{stat.icon}</div>
                         <div className="text-right sm:text-left">
                            <div className={`text-2xl font-bold ${
                                stat.status === 'success' ? 'text-green-600' : 
                                stat.status === 'warning' ? 'text-orange-500' : 'text-red-600'
                            }`}>{stat.value}</div>
                            <div className="text-xs text-slate-400 mb-1">{stat.sub}</div>
                            <div className="text-sm font-medium text-[#152570]">{stat.label}</div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             {/* Escrow Overview */}
             <div>
                <h3 className="text-lg font-bold text-[#152570] mb-4">Escrow Overview</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                   {stats.escrow.map((stat, i) => (
                      <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-4 sm:gap-0">
                         <div className={`w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mb-0 sm:mb-3 ${stat.bg}`}>{stat.icon}</div>
                         <div className="text-right sm:text-left">
                           <div className="text-2xl font-bold text-[#152570]">{stat.value}</div>
                           <div className="text-xs text-slate-400 mb-1">{stat.sub}</div>
                           <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          {/* 4. Recent Activity List */}
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
             <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-[#152570]">Recent Activity</h3>
                <button className="text-sm text-blue-600 hover:underline">View all</button>
             </div>
             <div className="divide-y divide-slate-100">
                {recentActivity.map((activity) => (
                   <div key={activity.id} className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-slate-50 transition-colors gap-3 sm:gap-0">
                      <div>
                         <p className="text-sm font-medium text-[#152570]">{activity.text}</p>
                         <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                      </div>
                      <button className="self-start sm:self-auto px-4 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-[#152570] hover:bg-[#152570] hover:text-white transition-all">
                         {activity.type}
                      </button>
                   </div>
                ))}
             </div>
          </div>

        </main>
      </div>
    </div>
  );
}