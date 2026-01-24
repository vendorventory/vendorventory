"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, UserCheck, Package, FileText, 
  Repeat, Truck, Gavel, CreditCard, Settings, HelpCircle, Store 
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

export function MerchantSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[280px] bg-[#19246a] text-slate-300 min-h-screen flex flex-col">
      <div className="p-6 mb-2 bg-white flex items-center justify-center">
        <Image src="/images/logo-white.png" alt="Vendor Ventory" width={160} height={40} className="brightness-0" />
      </div>
      
      <div className="px-4 mb-6">
        <div className="bg-[#1e293b]/50 rounded-xl p-4 border border-slate-700/30">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#31408e] rounded-xl flex items-center justify-center text-white shadow-inner">
               <Store size={24} />
            </div>
            <div>
              <p className="text-[14px] font-bold text-white leading-tight">Adebayo Fashion Store</p>
              <p className="text-[11px] text-slate-400 font-medium">Merchant</p>
            </div>
          </div>
          <div className="mt-4 py-2 px-3 bg-[#141d54] text-[#ff4d4d] rounded-lg border border-[#ff4d4d]/20 flex items-center justify-center gap-2 text-[11px] font-bold tracking-wide">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            KYC: NOT STARTED
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {merchantMenuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.label} 
              href={item.href}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-[14px] font-medium transition-all duration-200 ${
                isActive 
                ? 'bg-[#31408e] text-white shadow-lg' 
                : 'hover:bg-[#31408e]/30 text-slate-300'
              }`}
            >
              <item.icon size={20} className={isActive ? "text-white" : "text-slate-400"} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button className="w-full flex items-center gap-4 px-4 py-4 text-slate-300 hover:text-white transition-colors text-sm font-medium leading-none">
          <HelpCircle size={20} />
          Help & Support
        </button>
      </div>
    </aside>
  );
}