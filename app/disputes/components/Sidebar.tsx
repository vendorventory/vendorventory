"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Briefcase, BarChart3, User, 
  Settings, HelpCircle, Home, MoreHorizontal, 
  X, ShieldAlert
} from 'lucide-react';

// Menu items specific to Dispute Resolution Agents
const disputeMenuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/disputes/dashboard' },
  { icon: Briefcase, label: 'Cases', href: '/disputes/cases' },
  { icon: BarChart3, label: 'Performance', href: '/disputes/performance' },
  { icon: User, label: 'Profile', href: '/disputes/profile' },
  { icon: Settings, label: 'Settings', href: '/disputes/settings' },
];

const mobileNavItems = [
  { icon: Home, label: 'Home', href: '/disputes/dashboard' },
  { icon: Briefcase, label: 'Cases', href: '/disputes/cases' },
  { icon: BarChart3, label: 'Performance', href: '/disputes/performance' },
  { icon: User, label: 'Profile', href: '/disputes/profile' },
];

export function Sidebar() {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* --- DESKTOP SIDEBAR --- */}
      <aside className="hidden lg:flex fixed top-0 left-0 z-[55] w-[280px] h-screen bg-[#19246a] flex-col">
        {/* Branding */}
        <div className="h-20 flex items-center px-6 bg-white shrink-0">
          <div className="relative w-full h-8">
            <Image src="/images/logo.png" alt="Vendor Ventory" fill className="object-contain object-left" priority />
          </div>
        </div>
        
        {/* Dispute Agent Profile Summary */}
        <div className="px-4 mt-6 mb-4 shrink-0">
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-100 shrink-0">
                 <ShieldAlert size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-black text-white truncate">Adebayo Olusola</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Dispute Resolution Agent</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1 mt-2 overflow-y-auto no-scrollbar">
          {disputeMenuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.label} 
                href={item.href} 
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[12px] font-black  tracking-widest transition-all ${
                  isActive 
                  ? 'bg-white/10 text-white shadow-lg border border-white/10' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon size={18} className={isActive ? "text-indigo-400" : "text-slate-400"} />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer Support */}
        <div className="p-4 border-t border-white/5 shrink-0 mt-auto">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all text-[12px] font-black  tracking-widest">
            <HelpCircle size={18} />
            Help & Support
          </button>
        </div>
      </aside>

      {/* --- MOBILE "MORE" OVERLAY --- */}
      {showMore && (
        <div className="lg:hidden fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm p-4 flex flex-col justify-end">
          <div className="bg-white rounded-[32px] p-6 pb-8 shadow-2xl animate-in slide-in-from-bottom-10 duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-[#19246a] text-lg uppercase tracking-widest">Agent Menu</h3>
              <button onClick={() => setShowMore(false)} className="p-2 bg-slate-100 rounded-full text-slate-500">
                <X size={20} />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-y-8 gap-x-2">
              {disputeMenuItems.map((item) => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setShowMore(false)}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${pathname === item.href ? 'bg-[#19246a] text-white' : 'bg-slate-50 text-slate-400'}`}>
                    <item.icon size={22} />
                  </div>
                  <span className="text-[9px] font-black text-center text-slate-600  tracking-tighter leading-tight px-1">
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
        <nav className="max-w-md mx-auto bg-[#19246a]/95 backdrop-blur-md border border-white/10 flex justify-around items-center py-3 px-2 rounded-[28px] shadow-2xl">
          {mobileNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.label} href={item.href} className="flex flex-col items-center gap-1 flex-1 transition-transform active:scale-90">
                <div className={`p-1 transition-colors ${isActive ? 'text-indigo-400' : 'text-slate-400'}`}>
                  <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={`text-[8px] font-black  tracking-widest ${isActive ? "text-white" : "text-slate-400/70"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
          
          <button 
            onClick={() => setShowMore(true)}
            className="flex flex-col items-center gap-1 flex-1 transition-transform active:scale-90"
          >
            <div className={`p-1 transition-colors ${showMore ? 'text-indigo-400' : 'text-slate-400'}`}>
              <MoreHorizontal size={20} strokeWidth={showMore ? 2.5 : 2} />
            </div>
            <span className={`text-[8px] font-black  tracking-widest ${showMore ? "text-white" : "text-slate-400/70"}`}>
              More
            </span>
          </button>
        </nav>
      </div>
    </>
  );
}