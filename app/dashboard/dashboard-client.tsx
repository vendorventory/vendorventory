'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Package, DollarSign, ShoppingCart, List, ChevronDown, 
  LogOut, Settings, Plus, Search, Bell
} from 'lucide-react';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

// --- Dummy Data (Keep this same as before) ---
const stats = [
  { title: 'Total Sales', value: '₦1,250,000', icon: <DollarSign size={24} className="text-green-600" />, change: '+12.5% from last month', changeType: 'positive' },
  { title: 'Active Orders', value: '45', icon: <ShoppingCart size={24} className="text-blue-600" />, change: '+5 new today', changeType: 'positive' },
  { title: 'Pending Payouts', value: '₦320,000', icon: <Package size={24} className="text-orange-600" />, change: 'Due on Friday', changeType: 'neutral' },
  { title: 'Product Listings', value: '120', icon: <List size={24} className="text-purple-600" />, change: '+10 added this week', changeType: 'positive' },
];

const recentOrders = [
  { id: '#ORD-7721', customer: 'Nkechi Obi', date: 'Oct 24, 2025', amount: '₦25,000', status: 'Pending' },
  { id: '#ORD-7720', customer: 'Yusuf Ali', date: 'Oct 24, 2025', amount: '₦15,500', status: 'Shipped' },
  { id: '#ORD-7719', customer: 'Funke Akindele', date: 'Oct 23, 2025', amount: '₦42,000', status: 'Delivered' },
  { id: '#ORD-7718', customer: 'Chinedu Eze', date: 'Oct 23, 2025', amount: '₦8,000', status: 'Cancelled' },
  { id: '#ORD-7717', customer: 'Bolaji Adebayo', date: 'Oct 22, 2025', amount: '₦60,000', status: 'Pending' },
];

const statusColors: Record<string, string> = {
  Pending: 'bg-orange-100 text-orange-700',
  Shipped: 'bg-blue-100 text-blue-700',
  Delivered: 'bg-green-100 text-green-700',
  Cancelled: 'bg-red-100 text-red-700',
};

// --- Interfaces ---
interface UserProps {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export default function DashboardClient({ user }: { user: UserProps }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Get initials from name (e.g. "Jeff Bezos" -> "JB")
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <div className={`min-h-screen bg-slate-50 ${arimo.variable} ${arimo.className}`}>
      {/* --- Top Navigation Bar --- */}
      <nav className="bg-white border-b border-slate-200 px-4 py-3 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/dashboard" className="flex items-center">
              <Image src="/images/logo.png" alt="Vendor Ventory" width={160} height={48} className="object-contain h-10 w-auto md:h-12" priority />
            </Link>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="Search orders..." className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#152570]/20 bg-slate-50 w-64 lg:w-96" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-slate-500 hover:text-[#152570] relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 hover:bg-slate-50 p-1 rounded-lg transition-colors"
              >
                {/* Dynamic Avatar */}
                <div className="w-8 h-8 bg-[#152570] rounded-full flex items-center justify-center text-white font-bold text-xs">
                  {user.image ? (
                     <Image src={user.image} alt="User" width={32} height={32} className="rounded-full" />
                  ) : (
                     getInitials(user.name || "Vendor")
                  )}
                </div>
                {/* Dynamic Name */}
                <span className="font-medium text-sm text-slate-700 hidden md:block">
                  {user.name || "Vendor"}
                </span>
                <ChevronDown size={16} className="text-slate-400" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg py-2 z-50">
                  <div className="px-4 py-2 text-xs text-slate-400 border-b border-slate-50 mb-1">
                    {user.email}
                  </div>
                  <Link href="/dashboard/settings" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                    <Settings size={16} /> Settings
                  </Link>
                  {/* Note: In a real app, Log Out should be a server action or use signOut() */}
                  <Link href="/api/auth/signout" className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left">
                    <LogOut size={16} /> Log Out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* --- Main Content Area --- */}
      <main className="container mx-auto max-w-7xl pt-20 pb-12 px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#152570]">Dashboard Overview</h1>
            <p className="text-slate-500">Welcome back, <span className="font-semibold text-[#152570]">{user.name}</span>.</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
             {/* ... Buttons ... */}
             <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-medium px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
              <Package size={18} /> Manage Products
            </button>
            <button className="flex items-center gap-2 bg-[#22c55e] text-white font-medium px-4 py-2 rounded-lg hover:bg-green-600 transition-colors shadow-sm shadow-green-500/20">
              <Plus size={18} /> Add New Product
            </button>
          </div>
        </div>
        
        {/* ... Keep the rest of your Stats Grid and Table code here ... */}
        {/* I've abbreviated it to save space, but make sure you keep the stats mapping and table! */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
               <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-slate-500">{stat.title}</h3>
                <div className="p-2 bg-slate-50 rounded-lg">{stat.icon}</div>
              </div>
              <p className="text-2xl font-bold text-[#152570] mb-1">{stat.value}</p>
              <p className={`text-sm font-medium ${stat.changeType === 'positive' ? 'text-green-600' : stat.changeType === 'negative' ? 'text-red-600' : 'text-slate-500'}`}>{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#152570]">Recent Orders</h2>
             <Link href="/dashboard/orders" className="text-sm font-medium text-blue-600 hover:underline">View All Orders</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
               <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50 transition-colors cursor-pointer">
                    <td className="px-6 py-4 text-sm font-medium text-[#152570]">{order.id}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{order.customer}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{order.date}</td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-700">{order.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status] || 'bg-gray-100 text-gray-700'}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}