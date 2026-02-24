"use client";

import React from 'react';
import { BuyerSidebar } from './components/Sidebar';

export default function BuyerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar Component */}
      <BuyerSidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-end px-8 sticky top-0 z-40 lg:hidden">
          {/* Mobile Header Placeholder - Hamburger is handled inside Sidebar component */}
          <div className="font-black text-[#19246a] text-sm uppercase tracking-widest">Buyer Dashboard</div>
        </header>
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}