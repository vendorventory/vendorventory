"use client";

import React from 'react';
import { 
  Briefcase, AlertCircle, CheckCircle2, Clock, 
  TrendingUp, Eye, ChevronRight, Search, 
  Filter, MoreVertical, Calendar, User
} from 'lucide-react';

// Sidebar correctly imported from your established components folder
import { Sidebar } from '../components/Sidebar';

export default function DisputeAgentDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* SIDEBAR NAVIGATION */}
      <Sidebar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24 lg:ml-[280px]">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#1e293b]">Welcome back, Adebayo</h1>
            <p className="text-sm font-bold text-slate-400 mt-1">Here's your dispute case overview</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-right hidden md:block">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Wednesday, February 25, 2026</p>
                <div className="flex items-center justify-end gap-2 mt-1">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-xs font-black text-emerald-600 uppercase tracking-tighter">Available</span>
                </div>
             </div>
          </div>
        </div>

        {/* TOP LEVEL STAT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Open Cases', value: '18', sub: '+3 from yesterday', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Escalated Cases', value: '5', sub: '-2 from yesterday', icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-50' },
            { label: 'Resolved Today', value: '12', sub: '+4 from yesterday', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
            { label: 'Avg. Resolution Time', value: '4.2h', sub: '-0.8h improvement', icon: Clock, color: 'text-purple-500', bg: 'bg-purple-50', trend: true }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-4">
              <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center ${item.color}`}>
                <item.icon size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#1e293b]">{item.value}</h2>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{item.label}</p>
                <p className={`text-[9px] font-bold mt-2 uppercase tracking-tighter ${item.trend ? 'text-emerald-500' : 'text-slate-300'}`}>
                   {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RECENT ASSIGNED CASES */}
        <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-50 flex items-center justify-between">
            <h3 className="text-sm font-black text-[#1e293b] uppercase tracking-[0.2em]">Recent Assigned Cases</h3>
            <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline flex items-center gap-1">
              View All Cases <ChevronRight size={12} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[900px]">
              <thead>
                <tr className="bg-slate-50/30 text-[9px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">
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
                {[
                  { id: 'C-8901', time: '10 min ago', buyer: 'Chidi Okonkwo', merchant: 'TechHub Store', order: 'ORD-45621', amount: '₦125,000', priority: 'High', pColor: 'text-red-500 bg-red-50', status: 'Open', sColor: 'text-blue-500 bg-blue-50' },
                  { id: 'C-8898', time: '1 hour ago', buyer: 'Funmi Adeyemi', merchant: 'Fashion Hub NG', order: 'ORD-45612', amount: '₦78,500', priority: 'Medium', pColor: 'text-amber-500 bg-amber-50', status: 'In Review', sColor: 'text-purple-500 bg-purple-50' },
                  { id: 'C-8895', time: '2 hours ago', buyer: 'Ibrahim Musa', merchant: 'Gadget Palace', order: 'ORD-45598', amount: '₦250,000', priority: 'High', pColor: 'text-red-500 bg-red-50', status: 'Escalated', sColor: 'text-red-500 bg-red-50' },
                  { id: 'C-8890', time: '3 hours ago', buyer: 'Amaka Johnson', merchant: 'HomeEssentials', order: 'ORD-45587', amount: '₦45,000', priority: 'Low', pColor: 'text-slate-400 bg-slate-50', status: 'In Review', sColor: 'text-purple-500 bg-purple-50' },
                  { id: 'C-8885', time: '4 hours ago', buyer: 'Emeka Nwosu', merchant: 'BookStore NG', order: 'ORD-45576', amount: '₦32,000', priority: 'Medium', pColor: 'text-amber-500 bg-amber-50', status: 'Open', sColor: 'text-blue-500 bg-blue-50' }
                ].map((row) => (
                  <tr key={row.id} className="text-[11px] font-bold text-slate-600 hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6">
                      <p className="font-black text-[#1e293b]">{row.id}</p>
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
                      <button className="bg-[#19246a] text-white px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg shadow-indigo-100 hover:bg-indigo-900 transition-all active:scale-95">
                        Review Case
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}