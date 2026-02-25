"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link for navigation
import { 
  Search, Filter, Eye, Send, 
  AlertCircle, MessageSquare, ShieldAlert, 
  CheckCircle2, Clock, ChevronRight 
} from 'lucide-react';

export default function BuyerDisputes() {
  const [activeTab, setActiveTab] = useState('All Status');

  const disputes = [
    { id: 'DSP-2025-001', date: '2025-02-09', inv: 'INV-1015', order: 'ORD-8463', vendor: 'Gadget Haven NG', amount: '₦320,000', reason: 'Item Not As Described', status: 'Vendor Responded', lastUpdate: '2025-02-11', color: 'bg-blue-50 text-blue-600', hasReply: true },
    { id: 'DSP-2025-002', date: '2025-02-08', inv: 'INV-1017', order: 'ORD-8465', vendor: 'Premium Home Decor', amount: '₦85,000', reason: 'Item Damaged', status: 'Under Review', lastUpdate: '2025-02-10', color: 'bg-indigo-50 text-[#19246a]', hasReply: false },
    { id: 'DSP-2025-003', date: '2025-02-03', inv: 'INV-1012', order: 'ORD-8460', vendor: 'Fashion Forward NG', amount: '₦125,000', reason: 'Wrong Item Received', status: 'Resolved', lastUpdate: '2025-02-07', color: 'bg-emerald-50 text-emerald-600', hasReply: false },
    { id: 'DSP-2024-052', date: '2025-01-18', inv: 'INV-0998', order: 'ORD-8414', vendor: 'Tech Solutions Ltd', amount: '₦450,000', reason: 'Service Not Delivered', status: 'Resolved', lastUpdate: '2025-01-22', color: 'bg-emerald-50 text-emerald-600', hasReply: false },
    { id: 'DSP-2024-048', date: '2025-01-10', inv: 'INV-0988', order: 'ORD-8402', vendor: 'Elite Electronics', amount: '₦175,000', reason: 'Item Not Delivered', status: 'Resolved', lastUpdate: '2025-01-15', color: 'bg-emerald-50 text-emerald-600', hasReply: false },
  ];

  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      
      {/* HEADER AREA */}
      <div>
        <h1 className="text-2xl font-black text-[#1e293b]">Disputes</h1>
        <p className="text-sm font-bold text-slate-400 mt-1">Manage issues raised on your orders or payments.</p>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Open', value: '2', sub: 'Require action', icon: AlertCircle, color: 'text-amber-500', bg: 'bg-amber-50', hasArrow: true },
          { label: 'Awaiting Response', value: '1', sub: 'Vendor replied', icon: MessageSquare, color: 'text-blue-500', bg: 'bg-blue-50', hasClock: true },
          { label: 'Under Review', value: '1', sub: 'Support investigating', icon: ShieldAlert, color: 'text-[#19246a]', bg: 'bg-indigo-50', hasFile: true },
          { label: 'Resolved', value: '3', sub: 'Successfully closed', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50', hasCheck: true }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-3 relative group hover:border-indigo-200 transition-all cursor-pointer">
            <div className="flex justify-between items-start">
              <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center ${item.color}`}>
                <item.icon size={20} />
              </div>
              {item.hasArrow && <ChevronRight size={16} className="text-slate-300" />}
              {item.hasClock && <Clock size={16} className="text-slate-300" />}
              {item.hasCheck && <CheckCircle2 size={16} className="text-slate-300" />}
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
            placeholder="Search by dispute ID, invoice, order, vendor, or reason..." 
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-bold text-[#1e293b] outline-none"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-48">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <select className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-black text-slate-500 uppercase tracking-widest outline-none appearance-none cursor-pointer">
              <option>All Status</option>
              <option>Open</option>
              <option>Under Review</option>
              <option>Resolved</option>
            </select>
          </div>
        </div>
      </div>

      {/* DISPUTES TABLE */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[1100px]">
            <thead>
              <tr className="border-b border-slate-50 bg-slate-50/30">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Dispute ID</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Invoice / Order</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Vendor</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Reason</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Update</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {disputes.map((dsp) => (
                <tr key={dsp.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg ${dsp.status === 'Resolved' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'} flex items-center justify-center shrink-0`}>
                        <ShieldAlert size={14} />
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#1e293b]">{dsp.id}</p>
                        <p className="text-[9px] font-bold text-slate-400 mt-0.5">{dsp.date}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-xs font-black text-slate-700">{dsp.inv}</p>
                    <p className="text-[9px] font-bold text-slate-400 mt-0.5 uppercase tracking-tighter">{dsp.order}</p>
                  </td>
                  <td className="px-8 py-6 text-xs font-black text-slate-700">{dsp.vendor}</td>
                  <td className="px-8 py-6 text-xs font-black text-[#19246a]">{dsp.amount}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${dsp.reason.includes('Damaged') ? 'bg-red-500' : 'bg-amber-500'}`} />
                      <p className="text-xs font-bold text-slate-600">{dsp.reason}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 w-fit ${dsp.color}`}>
                      {dsp.hasReply && <MessageSquare size={10} />}
                      {dsp.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-xs font-bold text-slate-500">{dsp.lastUpdate}</td>
                  <td className="px-8 py-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {/* Navigates to */}
                      <Link href={`/buyer/disputes/${dsp.id}`}>
                        <button className="p-2 rounded-lg border border-slate-100 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                          <Eye size={16} />
                        </button>
                      </Link>
                      
                      {dsp.hasReply && (
                        <Link href={`/buyer/disputes/${dsp.id}`}>
                          <button className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all">
                            <Send size={16} />
                          </button>
                        </Link>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-slate-50/50 border-t border-slate-50 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Showing 5 of 5 disputes</p>
        </div>
      </div>
    </main>
  );
}