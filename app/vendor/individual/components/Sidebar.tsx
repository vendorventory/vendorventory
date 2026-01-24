"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  ShieldCheck, 
  Package, 
  FileText, 
  Repeat, 
  Truck, 
  Scale, 
  CreditCard, 
  Settings, 
  HelpCircle, 
  User, 
  AlertCircle,
  Menu,
  X 
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/vendor/individual/dashboard' },
  { icon: ShieldCheck, label: 'Business Profile & KYC', href: '/vendor/individual/business-profile' },
  { icon: Package, label: 'Products / Services', href: '/vendor/individual/products' },
  { icon: FileText, label: 'Invoices & Orders', href: '/vendor/individual/orders' },
  { icon: Repeat, label: 'Transactions & Escrow', href: '/vendor/individual/transactions' },
  { icon: Truck, label: 'Delivery Partners', href: '/vendor/individual/delivery' },
  { icon: Scale, label: 'Disputes', href: '/vendor/individual/disputes' },
  { icon: CreditCard, label: 'Subscription & Billing', href: '/vendor/individual/billing' },
  { icon: Settings, label: 'Settings', href: '/vendor/individual/settings' },
];

export function IndividualSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button - Moved to the right */}
      <div className="lg:hidden fixed top-4 right-4 z-[60]"> 
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-[#19246a] text-white rounded-lg shadow-md"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-[50] lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar - No Scroll Design */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-[55]
        w-[260px] h-screen bg-[#19246a] flex flex-col
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Brand Header */}
        <div className="h-20 flex items-center px-6 bg-white shrink-0">
          <div className="relative w-full h-8">
            <Image 
              src="/images/logo.png" 
              alt="Vendor Ventory" 
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </div>
        
        {/* Condensed Profile Card */}
        <div className="px-4 mt-6 mb-4 shrink-0">
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-indigo-500/20 rounded-lg flex items-center justify-center text-white shrink-0">
                 <User size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-bold text-white truncate">Adebayo Ogunlesi</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  <p className="text-[10px] text-red-400 font-bold uppercase tracking-tight">KYC: Not Started</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation List - Optimized spacing for no-scroll */}
        <nav className="flex-1 px-3 space-y-0.5 mt-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.label} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  group flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all
                  ${isActive 
                    ? 'bg-white text-[#19246a] shadow-md' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'}
                `}
              >
                <item.icon 
                  size={17} 
                  className={isActive ? "text-[#19246a]" : "text-slate-400 group-hover:text-white"} 
                />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Support Section */}
        <div className="p-4 border-t border-white/5 shrink-0 mt-auto">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all text-[13px] font-medium leading-none">
            <HelpCircle size={17} />
            Help & Support
          </button>
        </div>
      </aside>
    </>
  );
}