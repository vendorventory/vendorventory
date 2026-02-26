"use client";

import React from 'react';
import { 
  Wallet, Clock, CheckCircle2, ArrowUpRight, 
  Download, Filter, Eye, AlertCircle,
  TrendingUp, Calendar, ChevronRight, Info
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';

export default function EarningsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24 lg:ml-[280px]">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#1e293b]">Earnings & Payouts</h1>
            <p className="text-sm font-bold text-slate-400 mt-1">Manage your revenue, escrow balance, and withdrawals.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 flex items-center gap-2 shadow-sm">
              <Calendar size={16} className="text-slate-400" />
              <select className="bg-transparent text-xs font-black uppercase tracking-widest outline-none cursor-pointer">
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>
            <button className="bg-white border border-slate-200 text-slate-500 px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
              <Download size={14} /> Export Report
            </button>
            <button className="bg-[#19246a] text-white px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-indigo-100 hover:bg-indigo-900 transition-all">
              Request Withdrawal
            </button>
          </div>
        </div>

        {/* TOP LEVEL STAT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Earnings (This Month)', value: '₦4,850,000', trend: '+12%', icon: Wallet, color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { label: 'Pending Escrow Earnings', value: '₦450,000', sub: '4 Active', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50' },
            { label: 'Available for Withdrawal', value: '₦1,250,000', sub: 'Instant Payout', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
            { label: 'Total Withdrawn', value: '₦3,150,000', trend: '+₦240k last wk', icon: ArrowUpRight, color: 'text-slate-400', bg: 'bg-slate-100' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-3">
              <div className="flex justify-between items-start">
                <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center ${item.color}`}>
                  <item.icon size={20} />
                </div>
                {item.trend && <span className="text-[10px] font-black text-emerald-500">{item.trend}</span>}
                {item.sub && <span className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">{item.sub}</span>}
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">{item.label}</p>
                <h2 className="text-xl font-black text-[#1e293b] mt-2">{item.value}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* ESCROW BREAKDOWN TABLE */}
        <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-50 flex items-center justify-between">
            <h3 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em]">Escrow Breakdown</h3>
            <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[1000px]">
              <thead>
                <tr className="bg-slate-50/30 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  <th className="px-8 py-4">Delivery ID</th>
                  <th className="px-4 py-4">Merchant</th>
                  <th className="px-4 py-4">Buyer</th>
                  <th className="px-4 py-4">Fee</th>
                  <th className="px-4 py-4">Total Escrow</th>
                  <th className="px-4 py-4">Escrow Status</th>
                  <th className="px-4 py-4">Delivery Status</th>
                  <th className="px-8 py-4">Est. Release</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-[11px] font-bold text-slate-600">
                {[
                  { id: 'D-8901', merchant: 'TechHub Store', buyer: 'Adebayo O.', fee: '₦2,500', total: '₦125,000', eStatus: 'Locked', dStatus: 'In Transit', dColor: 'bg-blue-50 text-blue-600', eColor: 'bg-slate-100 text-slate-400', date: 'Feb 20, 2026' },
                  { id: 'D-8902', merchant: 'Fashion Hub NG', buyer: 'Amaka J.', fee: '₦3,500', total: '₦85,000', eStatus: 'Pending Confirmation', dStatus: 'Delivered', dColor: 'bg-emerald-50 text-emerald-600', eColor: 'bg-amber-50 text-amber-600', date: 'Feb 18, 2026' },
                  { id: 'D-8905', merchant: 'BookStore NG', buyer: 'Chiamaka P.', fee: '₦1,800', total: '₦15,000', eStatus: 'Released', dStatus: 'Delivered', dColor: 'bg-emerald-50 text-emerald-600', eColor: 'bg-emerald-50 text-emerald-600', date: 'Feb 16, 2026' },
                  { id: 'D-8908', merchant: 'FoodHub NG', buyer: 'Ahmed Musa', fee: '₦1,500', total: '₦8,500', eStatus: 'On Hold', dStatus: 'Disputed', dColor: 'bg-orange-50 text-orange-600', eColor: 'bg-red-50 text-red-600', date: 'TBD' }
                ].map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-5 font-black text-[#1e293b]">{row.id}</td>
                    <td className="px-4 py-5">{row.merchant}</td>
                    <td className="px-4 py-5">{row.buyer}</td>
                    <td className="px-4 py-5 font-black text-[#1e293b]">{row.fee}</td>
                    <td className="px-4 py-5 font-black text-[#1e293b]">{row.total}</td>
                    <td className="px-4 py-5">
                      <span className={`px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-tighter ${row.eColor}`}>
                        {row.eStatus}
                      </span>
                    </td>
                    <td className="px-4 py-5">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${row.dColor}`}>
                        {row.dStatus}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-slate-400">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* PAYOUT HISTORY */}
          <section className="lg:col-span-2 bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-50">
              <h3 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em]">Payout History</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50/30 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                    <th className="px-8 py-4">Payout ID</th>
                    <th className="px-4 py-4">Amount</th>
                    <th className="px-4 py-4">Bank Info</th>
                    <th className="px-4 py-4">Status</th>
                    <th className="px-4 py-4">Processed Date</th>
                    <th className="px-8 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-[11px] font-bold text-slate-600">
                  {[
                    { id: 'PAY-7721', amount: '₦650,000', bank: 'Zenith Bank ****789', status: 'Completed', color: 'bg-emerald-50 text-emerald-600', date: 'Feb 12, 2026' },
                    { id: 'PAY-7650', amount: '₦825,000', bank: 'GTBank ****344', status: 'Completed', color: 'bg-emerald-50 text-emerald-600', date: 'Feb 05, 2026' },
                    { id: 'PAY-7590', amount: '₦250,000', bank: 'Zenith Bank ****112', status: 'Failed', color: 'bg-red-50 text-red-600', date: 'Jan 28, 2026' }
                  ].map((payout) => (
                    <tr key={payout.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-6 font-black text-[#1e293b]">{payout.id}</td>
                      <td className="px-4 py-6 font-black text-[#1e293b]">{payout.amount}</td>
                      <td className="px-4 py-6">{payout.bank}</td>
                      <td className="px-4 py-6">
                        <span className={`px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-tighter ${payout.color}`}>
                          {payout.status}
                        </span>
                      </td>
                      <td className="px-4 py-6">{payout.date}</td>
                      <td className="px-8 py-6 text-center">
                        <button className="text-indigo-600 hover:underline">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* RIGHT SIDEBAR: ANALYTICS & GUIDE */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Avg Earnings / Delivery</p>
                  <h4 className="text-sm font-black text-[#1e293b]">₦2,450 <span className="text-emerald-500 text-[9px]">+4%</span></h4>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Highest Earning Day</p>
                  <h4 className="text-sm font-black text-[#1e293b]">₦84,200 <span className="text-slate-300 font-normal">Feb 14</span></h4>
                </div>
              </div>
            </div>

            {/* HOW ESCROW WORKS */}
            <section className="bg-emerald-50/30 border border-emerald-100 rounded-[32px] p-8 space-y-6">
              <div className="flex items-center gap-3 text-emerald-600">
                <CheckCircle2 size={20} />
                <h4 className="text-xs font-black uppercase tracking-widest">How Escrow Works</h4>
              </div>
              <div className="space-y-6">
                {[
                  { title: 'Delivery Completed', desc: 'Rider marks the delivery as successful.' },
                  { title: 'Buyer Confirms', desc: 'Buyer confirms receipt of items in good condition.' },
                  { title: 'Escrow Released', desc: 'Funds move from locked to available balance.' },
                  { title: 'Earnings Available', desc: 'You can now withdraw funds to your bank.' }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 relative">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 shrink-0" />
                    <div className="space-y-1">
                      <p className="text-[11px] font-black text-[#1e293b] leading-none uppercase">{step.title}</p>
                      <p className="text-[10px] font-bold text-slate-400 leading-tight">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-emerald-100 flex items-start gap-3">
                 <AlertCircle size={16} className="text-red-400 shrink-0" />
                 <p className="text-[9px] font-bold text-slate-400 leading-relaxed">
                   <span className="text-red-500 font-black uppercase">Dispute Note:</span> If a delivery is disputed, escrow remains "On Hold" until resolved by support teams.
                 </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}