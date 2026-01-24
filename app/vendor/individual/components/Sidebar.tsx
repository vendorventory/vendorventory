import Image from 'next/image';
import { LayoutDashboard, ShieldCheck, Package, FileText, Repeat, Truck, Scale, CreditCard, Settings, HelpCircle, User, AlertCircle } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: ShieldCheck, label: 'Business Profile & KYC' },
  { icon: Package, label: 'Products / Services' },
  { icon: FileText, label: 'Invoices & Orders' },
  { icon: Repeat, label: 'Transactions & Escrow' },
  { icon: Truck, label: 'Delivery Partners' },
  { icon: Scale, label: 'Disputes' },
  { icon: CreditCard, label: 'Subscription & Billing' },
  { icon: Settings, label: 'Settings' },
];

export function IndividualSidebar() {
  return (
    <aside className="w-[280px] bg-[#19246a] text-slate-300 min-h-screen flex flex-col">
      <div className="p-6 mb-2 bg-white flex items-center justify-center">
        <Image src="/images/logo-white.png" alt="Vendor Ventory" width={160} height={40} className="brightness-0" />
      </div>
      
      <div className="px-4 mb-6">
        <div className="bg-[#1e293b]/50 rounded-xl p-4 border border-slate-700/30">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#31408e] rounded-xl flex items-center justify-center text-white shadow-inner">
               <User size={24} />
            </div>
            <div>
              <p className="text-[14px] font-bold text-white leading-tight">Adebayo Ogunlesi</p>
              <p className="text-[11px] text-slate-400 font-medium">Individual</p>
            </div>
          </div>
          <div className="mt-4 py-2 px-3 bg-[#141d54] text-[#ff4d4d] rounded-lg border border-[#ff4d4d]/20 flex items-center justify-center gap-2 text-[11px] font-bold tracking-wide">
            <AlertCircle size={14} />
            KYC: NOT STARTED
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => (
          <button key={item.label} className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${item.active ? 'bg-[#31408e] text-white shadow-lg' : 'hover:bg-[#31408e]/30 text-slate-300'}`}>
            <item.icon size={20} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button className="w-full flex items-center gap-4 px-4 py-4 text-slate-300 hover:text-white transition-colors text-sm font-medium">
          <HelpCircle size={20} />
          Help & Support
        </button>
      </div>
    </aside>
  );
}