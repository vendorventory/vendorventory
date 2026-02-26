"use client";

import React from 'react';
import { 
  Search, Filter, Download, MoreVertical, 
  Clock, AlertTriangle, CheckCircle2, Wallet,
  TrendingDown, TrendingUp, MessageSquare, ShieldAlert
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';

export default function DeliveryDisputes() {
  const stats = [
    { label: 'Total Disputes', value: '5', icon: Clock, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Open Disputes', value: '3', icon: AlertTriangle, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Resolved Disputes', value: '1', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: 'Escrow On Hold', value: '₦432,000', icon: Wallet, color: 'text-blue-500', bg: 'bg-blue-50' },
  ];

  const disputes = [
    { id: 'DIS-2024-001', dId: 'DEL-8901', info: 'TechHub Store / Adebayo O.', rider: 'Chidi Okafor', type: 'Late Delivery', amount: '₦125,000', status: 'Open', lastUpdate: '2 mins ago', color: 'bg-amber-50 text-amber-600', typeColor: 'bg-purple-50 text-purple-600' },
    { id: 'DIS-2024-002', dId: 'DEL-8945', info: 'Fashion Hub NG / Amaka J.', rider: 'Tunde Bello', type: 'Damaged Goods', amount: '₦45,000', status: 'Under Review', lastUpdate: '1 hour ago', color: 'bg-blue-50 text-blue-600', typeColor: 'bg-red-50 text-red-600' },
    { id: 'DIS-2024-003', dId: 'DEL-8922', info: 'Gadget Palace / Emeka N.', rider: 'Ibrahim Yusuf', type: 'Not Delivered', amount: '₦250,000', status: 'Awaiting Evidence', lastUpdate: '4 hours ago', color: 'bg-amber-50 text-amber-600', typeColor: 'bg-slate-100 text-slate-600' },
    { id: 'DIS-2024-004', dId: 'DEL-8780', info: 'HomeEssentials / Funmi K.', rider: 'Musa Abubakar', type: 'Wrong Address', amount: '₦18,500', status: 'Resolved', lastUpdate: 'Yesterday', color: 'bg-emerald-50 text-emerald-600', typeColor: 'bg-indigo-50 text-indigo-600' },
    { id: 'DIS-2024-005', dId: 'DEL-8601', info: 'BookStore NG / Chiamaka P.', rider: 'Chidi Okafor', type: 'Rider Misconduct', amount: '₦12,000', status: 'Escalated', lastUpdate: '2 days ago', color: 'bg-red-50 text-red-600', typeColor: 'bg-orange-50 text-orange-600' },
  ];

  const footerStats = [
    { label: 'Dispute Rate', value: '1.2%', trend: '-0.3%', trendUp: false },
    { label: 'Most Common Issue', value: 'Late Delivery', trend: null, trendUp: null },
    { label: 'Avg. Resolution Time', value: '4.5 hrs', trend: '-1.2 hrs', trendUp: false },
    { label: 'Rider With Most Complaints', value: 'Tunde Bello', trend: null, trendUp: null },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24 lg:ml-[280px]">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#1e293b]">Disputes</h1>
            <p className="text-sm font-bold text-slate-400 mt-1">Manage and resolve delivery disputes efficiently.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input 
                type="text" 
                placeholder="Search Dispute ID / Delivery ID..." 
                className="pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-100 text-sm font-bold w-80 outline-none shadow-sm" 
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-white shadow-sm">
              <Filter size={14} /> Filter
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 shadow-sm">
              <Download size={16} /> Export Report
            </button>
          </div>
        </div>

        {/* TOP LEVEL STAT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-4">
              <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center ${item.color}`}>
                <item.icon size={24} />
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">{item.label}</p>
                <h2 className="text-2xl font-black text-[#1e293b] mt-2">{item.value}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* DISPUTES TABLE */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[1100px]">
              <thead>
                <tr className="bg-slate-50/30 text-[9px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">
                  <th className="px-8 py-5">Dispute ID</th>
                  <th className="px-4 py-5">Delivery ID</th>
                  <th className="px-4 py-5">Merchant / Buyer</th>
                  <th className="px-4 py-5">Assigned Rider</th>
                  <th className="px-4 py-5">Type</th>
                  <th className="px-4 py-5">Escrow</th>
                  <th className="px-4 py-5">Status</th>
                  <th className="px-4 py-5">Last Updated</th>
                  <th className="px-8 py-5 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {disputes.map((dsp) => (
                  <tr key={dsp.id} className="text-[11px] font-bold text-slate-600 hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6 font-black text-[#1e293b]">{dsp.id}</td>
                    <td className="px-4 py-6 font-black text-slate-400 uppercase">{dsp.dId}</td>
                    <td className="px-4 py-6 leading-tight max-w-[150px]">{dsp.info}</td>
                    <td className="px-4 py-6 text-[#1e293b]">{dsp.rider}</td>
                    <td className="px-4 py-6">
                      <span className={`px-2 py-1 rounded text-[9px] font-black uppercase tracking-tighter ${dsp.typeColor}`}>
                        {dsp.type}
                      </span>
                    </td>
                    <td className="px-4 py-6 font-black text-[#1e293b]">{dsp.amount}</td>
                    <td className="px-4 py-6">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 w-fit ${dsp.color}`}>
                        <div className={`w-1 h-1 rounded-full bg-current`} />
                        {dsp.status}
                      </span>
                    </td>
                    <td className="px-4 py-6 text-slate-400">{dsp.lastUpdate}</td>
                    <td className="px-8 py-6 text-center">
                      <button className="p-2 rounded-lg text-slate-400 hover:bg-slate-100">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ANALYTICS FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {footerStats.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-2">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
              <div className="flex items-center justify-between">
                <h3 className={`text-sm font-black ${idx === 3 ? 'text-indigo-600' : 'text-[#1e293b]'}`}>{item.value}</h3>
                {item.trend && (
                  <span className={`text-[9px] font-black flex items-center gap-0.5 ${item.trendUp ? 'text-red-500' : 'text-emerald-500'}`}>
                    {item.trendUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                    {item.trend}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}