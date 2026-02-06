"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, UserCheck, Package, FileText, 
  Repeat, Truck, Gavel, CreditCard, Settings, HelpCircle, Store,
  Home, Wallet, MoreHorizontal, X
} from 'lucide-react';

const merchantMenuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/vendor/merchant/dashboard' },
  { icon: UserCheck, label: 'Business Profile & KYC', href: '/vendor/merchant/business-profile' },
  { icon: Package, label: 'Products / Services', href: '/vendor/merchant/products' },
  { icon: FileText, label: 'Invoices & Orders', href: '/vendor/merchant/orders' },
  { icon: Repeat, label: 'Transactions & Escrow', href: '/vendor/merchant/transactions' },
  { icon: Truck, label: 'Delivery Partners', href: '/vendor/merchant/delivery' },
  { icon: Gavel, label: 'Disputes', href: '/vendor/merchant/disputes' },
  { icon: CreditCard, label: 'Subscription & Billing', href: '/vendor/merchant/billing' },
  { icon: Settings, label: 'Settings', href: '/vendor/merchant/settings' },
];

const mobileNavItems = [
  { icon: Home, label: 'Home', href: '/vendor/merchant/dashboard' },
  { icon: FileText, label: 'Orders', href: '/vendor/merchant/orders' },
  { icon: Wallet, label: 'Transactions', href: '/vendor/merchant/transactions' },
  { icon: Package, label: 'Products', href: '/vendor/merchant/products' },
];

export function MerchantSidebar() {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* --- DESKTOP SIDEBAR --- */}
      <aside className="hidden lg:flex sticky top-0 left-0 z-[55] w-[260px] h-screen bg-[#19246a] flex-col">
        <div className="h-20 flex items-center px-6 bg-white shrink-0">
          <div className="relative w-full h-8">
            <Image src="/images/logo.png" alt="Vendor Ventory" fill className="object-contain object-left" priority />
          </div>
        </div>
        
        <div className="px-4 mt-6 mb-4 shrink-0">
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-100 shrink-0">
                 <Store size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-bold text-white truncate">Adebayo Fashion</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  <p className="text-[10px] text-red-400 font-bold uppercase tracking-tight">KYC: Not Started</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-0.5 mt-2">
          {merchantMenuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.label} href={item.href} className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13px] font-medium transition-colors ${isActive ? 'bg-white text-[#19246a]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                <item.icon size={17} className={isActive ? "text-[#19246a]" : "text-slate-400"} />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5 shrink-0 mt-auto">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all text-[13px] font-medium leading-none">
            <HelpCircle size={17} />
            Help & Support
          </button>
        </div>
      </aside>

      {/* --- MOBILE "MORE" OVERLAY --- */}
      {showMore && (
        <div className="lg:hidden fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 p-4 flex flex-col justify-end">
          <div className="bg-white rounded-[32px] p-6 pb-8 animate-in slide-in-from-bottom-10 duration-300 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-[#19246a] text-lg">Menu</h3>
              <button onClick={() => setShowMore(false)} className="p-2 bg-slate-100 rounded-full text-slate-500 active:scale-90 transition-transform">
                <X size={20} />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-y-6 gap-x-2">
              {merchantMenuItems.map((item) => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setShowMore(false)}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${pathname === item.href ? 'bg-[#19246a] text-white' : 'bg-slate-50 text-slate-400 group-active:bg-slate-100'}`}>
                    <item.icon size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-center text-slate-600 leading-tight px-1">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- FLOATING PILL MOBILE NAV --- */}
      <div className="lg:hidden fixed bottom-6 left-0 right-0 px-4 z-[100]">
        <nav className="max-w-md mx-auto bg-white/90 backdrop-blur-md border border-white/20 flex justify-around items-center py-3 px-2 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
          {mobileNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.label} href={item.href} className="flex flex-col items-center gap-1 flex-1 transition-transform active:scale-90">
                <div className={`p-1 transition-colors ${isActive ? 'text-[#19246a]' : 'text-slate-400'}`}>
                  <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={`text-[9px] font-black uppercase tracking-tighter ${isActive ? "text-[#19246a]" : "text-slate-400"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
          
          <button 
            onClick={() => setShowMore(true)}
            className="flex flex-col items-center gap-1 flex-1 transition-transform active:scale-90"
          >
            <div className={`p-1 transition-colors ${showMore ? 'text-[#19246a]' : 'text-slate-400'}`}>
              <MoreHorizontal size={20} strokeWidth={showMore ? 2.5 : 2} />
            </div>
            <span className={`text-[9px] font-black uppercase tracking-tighter ${showMore ? "text-[#19246a]" : "text-slate-400"}`}>
              More
            </span>
          </button>
        </nav>
      </div>
    </>
  );
}