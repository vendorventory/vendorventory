"use client";

import React, { useState } from 'react';
import { 
  Search, Filter, Eye, ChevronRight, 
  Clock, AlertCircle, CheckCircle2, Briefcase 
} from 'lucide-react';

// Sidebar component imported from your established components folder
import { Sidebar } from '../components/Sidebar';

export default function DisputeCases() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['Active', 'Escalated', 'Resolved', 'All'];

  const cases = [
    { id: 'C-8901', time: '10 min ago', buyer: 'Chidi Okonkwo', merchant: 'TechHub Store', order: 'ORD-45621', amount: '₦125,000', priority: 'High', pColor: 'text-red-500 bg-red-50', status: 'Open', sColor: 'text-blue-500 bg-blue-50' },
    { id: 'C-8898', time: '1 hour ago', buyer: 'Funmi Adeyemi', merchant: 'Fashion Hub NG', order: 'ORD-45612', amount: '₦78,500', priority: 'Medium', pColor: 'text-amber-500 bg-amber-50', status: 'In Review', sColor: 'text-purple-500 bg-purple-50' },
    { id: 'C-8895', time: '2 hours ago', buyer: 'Ibrahim Musa', merchant: 'Gadget Palace', order: 'ORD-45598', amount: '₦250,000', priority: 'High', pColor: 'text-red-500 bg-red-50', status: 'Escalated', sColor: 'text-red-500 bg-red-50' },
    { id: 'C-8890', time: '3 hours ago', buyer: 'Amaka Johnson', merchant: 'HomeEssentials', order: 'ORD-45587', amount: '₦45,000', priority: 'Low', pColor: 'text-slate-400 bg-slate-50', status: 'In Review', sColor: 'text-purple-500 bg-purple-50' },
    { id: 'C-8885', time: '4 hours ago', buyer: 'Emeka Nwosu', merchant: 'BookStore NG', order: 'ORD-45576', amount: '₦32,000', priority: 'Medium', pColor: 'text-amber-500 bg-amber-50', status: 'Open', sColor: 'text-blue-500 bg-blue-50' }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* SIDEBAR NAVIGATION */}
      <Sidebar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24 lg:ml-[280px]">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-2xl font-black text-[#1e293b]">Cases</h1>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input 
                type="text" 
                placeholder="Search cases..." 
                className="pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-100 text-sm font-bold w-80 outline-none shadow-sm" 
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 shadow-sm transition-all">
              <Filter size={16} /> Filter
            </button>
          </div>
        </div>

        {/* TAB NAVIGATION */}
        <div className="flex items-center gap-8 border-b border-slate-200/60 pb-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 text-[11px] font-black uppercase tracking-widest transition-all ${
                activeTab === tab ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full animate-in fade-in duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* CASES TABLE */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[900px]">
              <thead>
                <tr className="text-[9px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">
                  <th className="px-8 py-5">Case ID</th>
                  <th className="px-4 py-5">Buyer</th>
                  <th className="px-4 py-5">Merchant</th>
                  <th className="px-4 py-5">Order ID</th>
                  <th className="px-4 py-5">Escrow Amount</th>
                  <th className="px-4 py-5">Priority</th>
                  <th className="px-4 py-5">Status</th>
                  <th className="px-8 py-5 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {cases.map((row) => (
                  <tr key={row.id} className="text-[11px] font-bold text-slate-600 hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-6 font-black text-[#1e293b]">
                      {row.id}
                      <p className="text-[9px] text-slate-300 font-bold uppercase mt-0.5">{row.time}</p>
                    </td>
                    <td className="px-4 py-6 font-black text-slate-700">{row.buyer}</td>
                    <td className="px-4 py-6">{row.merchant}</td>
                    <td className="px-4 py-6 font-black text-slate-400 uppercase tracking-tighter">{row.order}</td>
                    <td className="px-4 py-6 font-black text-[#1e293b]">{row.amount}</td>
                    <td className="px-4 py-6">
                      <span className={`px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-tighter ${row.pColor}`}>
                        {row.priority}
                      </span>
                    </td>
                    <td className="px-4 py-6 text-center">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${row.sColor}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <button className="bg-[#19246a] text-white px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg shadow-indigo-100 hover:bg-indigo-900 transition-all active:scale-95">
                        Review Case
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-slate-50/50 border-t border-slate-50 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Showing 5 of 18 open cases</p>
          </div>
        </div>
      </main>
    </div>
  );
}