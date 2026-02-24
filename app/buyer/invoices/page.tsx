"use client";

import React, { useState } from 'react';
import { 
  Search, Filter, Download, Eye, 
  Clock, AlertCircle, CheckCircle2, 
  Wallet, Truck
} from 'lucide-react';

// Import Custom Components
import { PayInvoiceModal } from '../components/PayInvoiceModal';
import { EscrowInvoiceModal } from '../components/EscrowInvoiceModal';
import { PaidInvoiceModal } from '../components/PaidInvoiceModal';

export default function BuyerInvoices() {
  // Modal States
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [isEscrowModalOpen, setIsEscrowModalOpen] = useState(false);
  const [isPaidModalOpen, setIsPaidModalOpen] = useState(false);

  const invoices = [
    { id: 'INV-1024', desc: 'Custom Tailoring Service', vendor: 'Fashion Forward NG', vendorType: 'Verified Vendor', ref: 'ORD-8472', amount: '₦85,000', due: '2025-02-09', issued: '2025-02-02', status: 'Overdue', subtotal: '₦84,500', fee: '₦500' },
    { id: 'INV-1023', desc: 'Website Development', vendor: 'Tech Solutions Ltd', vendorType: 'Merchant Vendor', ref: 'ORD-8471', amount: '₦125,000', due: '2025-02-12', issued: '2025-02-05', status: 'Awaiting Payment', subtotal: '₦124,000', fee: '₦1,000' },
    { id: 'INV-1022', desc: 'Ankara Print Fabric (5 yards)', vendor: 'Adebayo Fashion Store', vendorType: 'Verified Vendor', ref: 'ORD-8470', amount: '₦125,000', due: '2025-02-28', issued: '2025-02-06', status: 'In Escrow', subtotal: '₦124,000', fee: '₦1,000' },
    { id: 'INV-1021', desc: 'MacBook Pro 14" M3', vendor: 'Lagos Tech Hub', vendorType: 'Merchant Vendor', ref: 'ORD-8399', amount: '₦2,450,000', due: '2025-02-08', issued: '2025-01-15', status: 'Paid', subtotal: '₦2,445,000', fee: '₦5,000' },
  ];

  const handleAction = (inv: any) => {
    setSelectedInvoice(inv);
    if (inv.status === 'Overdue' || inv.status === 'Awaiting Payment') {
      setIsPayModalOpen(true); //
    } else if (inv.status === 'In Escrow') {
      setIsEscrowModalOpen(true); //
    } else if (inv.status === 'Paid') {
      setIsPaidModalOpen(true); //
    }
  };

  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      
      {/* HEADER AREA */}
      <div>
        <h1 className="text-2xl font-black text-[#1e293b]">My Invoices</h1>
        <p className="text-sm font-bold text-slate-400 mt-1">View, pay and manage invoices from vendors.</p>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Outstanding', value: '₦685,000', sub: '4 invoices', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50' },
          { label: 'Overdue', value: '₦145,000', sub: '2 invoices', icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-50' },
          { label: 'Paid This Month', value: '₦1,250,000', sub: '3 invoices', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { label: 'In Escrow', value: '₦245,000', sub: '1 invoice', icon: Wallet, color: 'text-indigo-600', bg: 'bg-indigo-50' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-3">
            <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center ${item.color}`}>
              <item.icon size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
              <h2 className="text-xl font-black text-[#1e293b] mt-1">{item.value}</h2>
              <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FILTERS BAR */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-[20px] border border-slate-100 shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
          <input type="text" placeholder="Search invoices..." className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-bold text-[#1e293b] outline-none" />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-100 text-xs font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50 transition-all">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      {/* INVOICES TABLE */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[1000px]">
            <thead>
              <tr className="border-b border-slate-50 bg-slate-50/30">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Invoice ID</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Vendor</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Order Reference</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Due Date</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {invoices.map((inv) => (
                <tr key={inv.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <p className="text-sm font-black text-[#1e293b]">{inv.id}</p>
                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tight">{inv.desc}</p>
                  </td>
                  <td className="px-8 py-6 text-sm font-black text-slate-700">{inv.vendor}</td>
                  <td className="px-8 py-6 text-xs font-bold text-slate-400 uppercase tracking-widest">{inv.ref}</td>
                  <td className="px-8 py-6 text-sm font-black text-[#19246a]">{inv.amount}</td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-black text-slate-700">{inv.due}</p>
                    <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase">Issued: {inv.issued}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      inv.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' :
                      inv.status === 'Overdue' ? 'bg-red-50 text-red-500' :
                      inv.status === 'Awaiting Payment' ? 'bg-amber-50 text-amber-600' :
                      'bg-indigo-50 text-indigo-600'
                    }`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <button 
                      onClick={() => handleAction(inv)}
                      className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 ${
                        inv.status === 'Paid' || inv.status === 'In Escrow' 
                          ? 'border border-slate-200 text-slate-500 hover:bg-slate-50' 
                          : 'bg-emerald-500 text-white shadow-lg shadow-emerald-100'
                      }`}
                    >
                      {inv.status === 'In Escrow' ? <><Truck size={14} className="inline mr-1" /> Track</> : 
                       inv.status === 'Paid' ? <><Eye size={14} className="inline mr-1" /> View</> : 'Pay Now'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODALS */}
      {selectedInvoice && (
        <>
          <PayInvoiceModal 
            isOpen={isPayModalOpen} 
            onClose={() => setIsPayModalOpen(false)} 
            invoice={selectedInvoice} 
          />
          <EscrowInvoiceModal 
            isOpen={isEscrowModalOpen} 
            onClose={() => setIsEscrowModalOpen(false)} 
            invoice={selectedInvoice} 
          />
          <PaidInvoiceModal 
            isOpen={isPaidModalOpen} 
            onClose={() => setIsPaidModalOpen(false)} 
            invoice={selectedInvoice} 
          />
        </>
      )}
    </main>
  );
}