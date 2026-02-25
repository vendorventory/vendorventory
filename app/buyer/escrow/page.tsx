"use client";

import React, { useState } from 'react';
import { 
  Search, Filter, Download, Eye, 
  Clock, CheckCircle2, Wallet, 
  RotateCcw, CreditCard, Landmark, 
  TrendingUp, ArrowUpRight, ShieldCheck
} from 'lucide-react';

// Import the details modal
import { TransactionDetailModal } from '../components/TransactionDetailModal';

export default function BuyerEscrow() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTxn, setSelectedTxn] = useState<any>(null);

  const transactions = [
    { id: 'TXN-2025-091', order: 'ORD-8472', inv: 'INV-1024', vendor: 'Fashion Forward NG', amount: '₦85,000', method: 'Bank Transfer', status: 'Held in Escrow', date: '2025-02-09', time: '14:30', color: 'bg-amber-50 text-amber-600', methodIcon: Landmark },
    { id: 'TXN-2025-092', order: 'ORD-8471', inv: 'INV-1022', vendor: 'Tech Solutions Ltd', amount: '₦125,000', method: 'Card', status: 'Held in Escrow', date: '2025-02-07', time: '10:15', color: 'bg-amber-50 text-amber-600', methodIcon: CreditCard },
    { id: 'TXN-2025-093', order: 'ORD-8400', inv: 'INV-1020', vendor: 'Adebayo Fashion Store', amount: '₦128,000', method: 'Bank Transfer', status: 'Released', date: '2025-02-05', time: '20:45', color: 'bg-emerald-50 text-emerald-600', methodIcon: Landmark },
    { id: 'TXN-2025-094', order: 'ORD-8457', inv: 'INV-1019', vendor: 'Lagos Tech Hub', amount: '₦2,450,000', method: 'Card', status: 'Pending Release', date: '2025-02-04', time: '11:20', color: 'bg-blue-50 text-blue-600', methodIcon: CreditCard },
    { id: 'TXN-2025-095', order: 'ORD-8456', inv: 'INV-1018', vendor: 'Beauty Essentials NG', amount: '₦45,000', method: 'Bank Transfer', status: 'Released', date: '2025-02-03', time: '09:30', color: 'bg-emerald-50 text-emerald-600', methodIcon: Landmark },
    { id: 'TXN-2025-096', order: 'ORD-8460', inv: 'INV-1017', vendor: 'Premium Home Decor', amount: '₦85,000', method: 'Card', status: 'Refunded', date: '2025-01-31', time: '13:45', color: 'bg-slate-100 text-slate-500', methodIcon: CreditCard },
    { id: 'TXN-2025-097', order: 'ORD-8464', inv: 'INV-1016', vendor: 'Fashion Forward NG', amount: '₦195,000', method: 'Bank Transfer', status: 'Released', date: '2025-01-28', time: '15:20', color: 'bg-emerald-50 text-emerald-600', methodIcon: Landmark },
    { id: 'TXN-2025-098', order: 'ORD-8463', inv: 'INV-1015', vendor: 'Gadget Haven NG', amount: '₦320,000', method: 'Card', status: 'Under Dispute', date: '2025-01-25', time: '10:00', color: 'bg-red-50 text-red-500', methodIcon: CreditCard },
  ];

  const handleViewDetails = (txn: any) => {
    setSelectedTxn({
      id: txn.id,
      invoiceId: txn.inv,
      orderId: txn.order,
      date: txn.date,
      time: txn.time,
      vendor: txn.vendor,
      amount: txn.amount,
      method: txn.method,
      status: txn.status
    });
    setIsModalOpen(true); // Open the modal
  };

  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      
      {/* HEADER AREA */}
      <div>
        <h1 className="text-2xl font-black text-[#1e293b]">Payments / Escrow</h1>
        <p className="text-sm font-bold text-slate-400 mt-1">Monitor your payments held in escrow and released transactions.</p>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Paid', value: '₦2,845,000', sub: 'All-time payments', icon: Wallet, color: 'text-indigo-600', bg: 'bg-indigo-50', trend: true },
          { label: 'In Escrow', value: '₦245,000', sub: 'Held securely', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50', hasFile: true },
          { label: 'Released to Vendors', value: '₦2,515,000', sub: 'Successfully completed', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50', trend: true },
          { label: 'Refunded', value: '₦85,000', sub: 'Returned to you', icon: RotateCcw, color: 'text-slate-400', bg: 'bg-slate-50', hasFile: true }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-3">
            <div className="flex justify-between items-start">
              <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center ${item.color}`}>
                <item.icon size={20} />
              </div>
              {item.trend && <ArrowUpRight size={16} className="text-slate-300" />}
              {item.hasFile && <TrendingUp size={16} className="text-slate-300" />}
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
          <input 
            type="text" 
            placeholder="Search by transaction, invoice ID, or vendor..." 
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-bold text-[#1e293b] outline-none"
          />
        </div>
        <div className="flex items-center gap-3 w-auto">
            <Filter size={18} className="text-slate-400" />
            <select className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-xs font-black uppercase tracking-widest text-slate-500 outline-none cursor-pointer">
                <option>All Status</option>
            </select>
        </div>
      </div>

      {/* TRANSACTIONS TABLE */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[1100px]">
            <thead>
              <tr className="border-b border-slate-50 bg-slate-50/30">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Transaction ID</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Invoice ID</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Vendor</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Payment Method</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Escrow Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {transactions.map((txn) => (
                <tr key={txn.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                        <Wallet size={14} />
                      </div>
                      <div>
                        <p className="text-sm font-black text-[#1e293b]">{txn.id}</p>
                        <p className="text-[9px] font-bold text-slate-400 mt-0.5 uppercase tracking-tighter">{txn.order}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-xs font-bold text-slate-500">{txn.inv}</td>
                  <td className="px-8 py-6 text-xs font-black text-slate-700">{txn.vendor}</td>
                  <td className="px-8 py-6 text-sm font-black text-[#19246a]">{txn.amount}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-slate-500">
                      <txn.methodIcon size={14} />
                      <span className="text-[11px] font-bold">{txn.method}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${txn.color}`}>
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-xs font-black text-slate-700">{txn.date}</p>
                    <p className="text-[10px] font-bold text-slate-400 mt-0.5">{txn.time}</p>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => handleViewDetails(txn)}
                        className="p-2 rounded-lg border border-slate-100 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
                      >
                        <Eye size={16} />
                      </button>
                      <button className="p-2 rounded-lg border border-slate-100 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                        <Download size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-slate-50/50 border-t border-slate-50 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Showing 8 of 8 transactions</p>
        </div>
      </div>

      {/* --- MODAL INTEGRATION --- */}
      {selectedTxn && (
        <TransactionDetailModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          transaction={selectedTxn}
        />
      )}
    </main>
  );
}