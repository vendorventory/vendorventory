"use client";

import React from 'react';
import { 
  Package, Truck, Clock, Wallet, 
  Eye, UserPlus, FileText, PlusCircle, 
  MapPin, CheckCircle2, TrendingUp,
  Star, ChevronRight
} from 'lucide-react';

// Sidebar correctly imported from your established components folder
import { Sidebar } from '../components/Sidebar';

export default function DeliveryDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* SIDEBAR NAVIGATION */}
      <Sidebar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24 lg:ml-[280px]">
        
        {/* HEADER AREA */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-[#1e293b]">Dashboard</h1>
            <p className="text-sm font-bold text-slate-400 mt-1">Real-time logistics operations overview</p>
          </div>
          <div className="flex items-center gap-3">
             <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
                Lagos, Nigeria
             </span>
          </div>
        </div>

        {/* TOP LEVEL STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Deliveries Today', value: '127', trend: '+8%', icon: Package, color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { label: 'Active Deliveries', value: '23', icon: Truck, color: 'text-purple-600', bg: 'bg-purple-50' },
            { label: 'Pending Pickups', value: '8', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50' },
            { label: 'Escrow locked until confirmation', value: '₦342,500', icon: Wallet, color: 'text-emerald-500', bg: 'bg-emerald-50' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-3">
              <div className="flex justify-between items-start">
                <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center ${item.color}`}>
                  <item.icon size={20} />
                </div>
                {item.trend && (
                  <span className="flex items-center gap-1 text-[10px] font-black text-emerald-500 uppercase">
                    <TrendingUp size={12} /> {item.trend}
                  </span>
                )}
              </div>
              <div>
                <h2 className="text-xl font-black text-[#1e293b]">{item.value}</h2>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: LIVE OPERATIONS & FLEET */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 md:p-8 border-b border-slate-50 flex items-center justify-between">
                <h3 className="text-sm font-black text-[#1e293b] uppercase tracking-[0.2em]">Live Delivery Operations</h3>
                <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-50/30 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                      <th className="px-8 py-4">Tracking ID</th>
                      <th className="px-4 py-4">Merchant</th>
                      <th className="px-4 py-4">Buyer</th>
                      <th className="px-4 py-4">Rider</th>
                      <th className="px-4 py-4 text-center">Status</th>
                      <th className="px-8 py-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { id: 'D-8901', merchant: 'TechHub Store', buyer: 'Adebayo O.', rider: 'Chidi Okafor', status: 'In Transit', color: 'bg-purple-50 text-purple-600' },
                      { id: 'D-8902', merchant: 'Fashion Hub NG', buyer: 'Amaka J.', rider: 'Tunde Bello', status: 'Picked Up', color: 'bg-blue-50 text-blue-600' },
                      { id: 'D-8903', merchant: 'Gadget Palace', buyer: 'Emeka N.', rider: 'Unassigned', status: 'Awaiting Pickup', color: 'bg-amber-50 text-amber-600' },
                      { id: 'D-8904', merchant: 'HomeEssentials', buyer: 'Funmi K.', rider: 'Ibrahim Yusuf', status: 'In Transit', color: 'bg-purple-50 text-purple-600' },
                      { id: 'D-8905', merchant: 'BookStore NG', buyer: 'Chiamaka P.', rider: 'Musa Abubakar', status: 'Picked Up', color: 'bg-blue-50 text-blue-600' }
                    ].map((op) => (
                      <tr key={op.id} className="text-[11px] font-bold text-slate-600 hover:bg-slate-50/50 transition-colors">
                        <td className="px-8 py-5 font-black text-[#1e293b]">{op.id}</td>
                        <td className="px-4 py-5">{op.merchant}</td>
                        <td className="px-4 py-5">{op.buyer}</td>
                        <td className="px-4 py-5">{op.rider}</td>
                        <td className="px-4 py-5 text-center">
                          <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${op.color}`}>
                            {op.status}
                          </span>
                        </td>
                        <td className="px-8 py-5 text-center">
                          <button className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors"><Eye size={14} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* RIDER FLEET SNAPSHOT */}
            <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6 md:p-8 space-y-8">
              <h3 className="text-sm font-black text-[#1e293b] uppercase tracking-[0.2em]">Rider Fleet Snapshot</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <h4 className="text-2xl font-black text-[#1e293b]">45</h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Total Riders</p>
                </div>
                <div className="bg-emerald-50/50 p-6 rounded-2xl">
                  <h4 className="text-2xl font-black text-emerald-600">32</h4>
                  <p className="text-[10px] font-black text-emerald-600/60 uppercase tracking-widest mt-1">Riders Online</p>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-2xl">
                  <h4 className="text-2xl font-black text-purple-600">23</h4>
                  <p className="text-[10px] font-black text-purple-600/60 uppercase tracking-widest mt-1">On Delivery</p>
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t border-slate-50">
                 {[
                   { name: 'Chidi Okafor', status: 'On Delivery', rating: '4.9', count: 12 },
                   { name: 'Tunde Bello', status: 'On Delivery', rating: '4.8', count: 10 }
                 ].map((rider, idx) => (
                   <div key={idx} className="flex items-center justify-between p-3 bg-slate-50/50 rounded-xl">
                      <p className="text-[11px] font-black text-[#1e293b]">{rider.name}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold text-purple-500 uppercase flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> {rider.status}</span>
                        <span className="text-[10px] font-black text-[#1e293b] flex items-center gap-1"><Star size={10} fill="currentColor" className="text-amber-400" /> {rider.rating}</span>
                      </div>
                   </div>
                 ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: FINANCIALS & ACTIONS */}
          <div className="space-y-8">
            {/* FINANCIAL BLOCKS */}
            <section className="space-y-4">
              <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-4 relative overflow-hidden">
                <Clock className="absolute -top-4 -right-4 w-24 h-24 text-slate-50 -rotate-12" />
                <div className="relative">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">Pending Escrow Earnings <Clock size={12} /></p>
                  <h3 className="text-2xl font-black text-[#1e293b] mt-2">₦342,500</h3>
                  <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase">Locked until delivery confirmation</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-4 relative overflow-hidden">
                <CheckCircle2 className="absolute -top-4 -right-4 w-24 h-24 text-slate-50 -rotate-12" />
                <div className="relative">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">Available for Withdrawal <CheckCircle2 size={12} className="text-emerald-500" /></p>
                  <h3 className="text-2xl font-black text-emerald-600 mt-2">₦1,250,000</h3>
                  <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-2 hover:underline flex items-center gap-1">View Details <ChevronRight size={10} /></button>
                </div>
              </div>
            </section>

            {/* QUICK ACTIONS */}
            <section className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-[10px] font-black text-[#1e293b] uppercase tracking-[0.2em]">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-[#19246a] text-white py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 active:scale-95 transition-all">
                  <UserPlus size={16} /> Assign Rider
                </button>
                <button className="w-full bg-white border border-slate-100 py-3.5 rounded-xl font-black text-[10px] text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                  <PlusCircle size={16} /> Create Manual Delivery
                </button>
                <button className="w-full bg-white border border-slate-100 py-3.5 rounded-xl font-black text-[10px] text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                  <FileText size={16} /> View All Deliveries
                </button>
              </div>
            </section>

            {/* DELIVERY FLOW LEGEND */}
            <section className="bg-blue-50/50 p-8 rounded-[32px] border border-blue-100 space-y-4">
              <div className="flex items-center gap-2 text-indigo-600">
                <MapPin size={16} />
                <h4 className="text-[10px] font-black uppercase tracking-widest">Delivery Flow</h4>
              </div>
              <ul className="space-y-3">
                {['Order Confirmed → Awaiting Pickup', 'Picked Up → In Transit', 'Delivered → Escrow Released'].map((step, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[10px] font-bold text-indigo-700/70">
                    <div className="w-1 h-1 bg-indigo-400 rounded-full" /> {step}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}