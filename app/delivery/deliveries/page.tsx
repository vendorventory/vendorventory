"use client";

import React, { useState } from 'react';
import { 
  Search, Filter, Plus, MoreVertical, 
  Eye, UserPlus, CheckCircle2, AlertCircle,
  Clock, Truck, Package, ShieldCheck,
  TrendingUp, TrendingDown, MapPin
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';

export default function DeliveriesPage() {
  const [activeTab, setActiveTab] = useState('All Deliveries');

  const analytics = [
    { label: 'Average Delivery Time', value: '42 mins', icon: Clock, trend: null, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Failed Delivery Rate', value: '2.1%', icon: TrendingDown, trend: '2.1%', color: 'text-red-500', bg: 'bg-red-50' },
    { label: 'On-Time Delivery %', value: '94.3%', icon: TrendingUp, trend: '94.3%', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: 'Dispute Rate', value: '1.2%', icon: AlertCircle, trend: '1.2%', color: 'text-orange-500', bg: 'bg-orange-50' },
  ];

  const tabs = [
    { label: 'All Deliveries', count: 287 },
    { label: 'Awaiting Pickup', count: 23 },
    { label: 'Picked Up', count: 15 },
    { label: 'In Transit', count: 24 },
    { label: 'Delivered', count: 215 },
    { label: 'Failed', count: 5 },
    { label: 'Disputed', count: 2 },
  ];

  const deliveries = [
    { id: 'D-8901', order: 'ORD-45231', merchant: 'TechHub Store', buyer: 'Adebayo Olaniyan', rider: 'Chidi Okafor', route: 'Victoria Island → Lekki Phase 1', est: '45 mins', escrow: 'Locked', status: 'In Transit', color: 'bg-purple-50 text-purple-600' },
    { id: 'D-8902', order: 'ORD-45232', merchant: 'Fashion Hub NG', buyer: 'Amaka Johnson', rider: 'Tunde Bello', route: 'Ikeja → Surulere', est: '30 mins', escrow: 'Locked', status: 'Picked Up', color: 'bg-blue-50 text-blue-600' },
    { id: 'D-8903', order: 'ORD-45233', merchant: 'Gadget Palace', buyer: 'Emeka Nnamdi', rider: 'Unassigned', route: 'Yaba → Ajah', est: 'Pending', escrow: 'Locked', status: 'Awaiting Pickup', color: 'bg-amber-50 text-amber-600' },
    { id: 'D-8906', order: 'ORD-45236', merchant: 'ElectroMart', buyer: 'Bola Adeyemi', rider: 'Kevin Hassan', route: 'Gbagada → VI', est: 'Completed', escrow: 'Released', status: 'Delivered', color: 'bg-emerald-50 text-emerald-600' },
    { id: 'D-8908', order: 'ORD-45238', merchant: 'FoodHub NG', buyer: 'Ahmed Musa', rider: 'Femi Oladipo', route: 'Ikeja → Ojota', est: 'Disputed', escrow: 'On Hold', status: 'Disputed', color: 'bg-red-50 text-red-500' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24 lg:ml-[280px]">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#1e293b]">Deliveries</h1>
            <p className="text-sm font-bold text-slate-400 mt-1">Manage all delivery operations and track shipments.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input type="text" placeholder="Search by Tracking ID, Merchant, Buyer..." className="pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-100 text-sm font-bold w-80 outline-none shadow-sm" />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#19246a] text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-100">
              <Plus size={16} /> Create Manual Delivery
            </button>
          </div>
        </div>

        {/* ANALYTICS SUMMARY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {analytics.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-[#1e293b]">{item.value}</h2>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* STATUS TABS */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                activeTab === tab.label 
                ? 'bg-[#19246a] text-white shadow-md' 
                : 'bg-white text-slate-400 hover:text-slate-600 border border-slate-100 shadow-sm'
              }`}
            >
              {tab.label} <span className={`px-2 py-0.5 rounded-md ${activeTab === tab.label ? 'bg-white/20' : 'bg-slate-50 text-slate-400'}`}>{tab.count}</span>
            </button>
          ))}
        </div>

        {/* DELIVERIES TABLE */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[1100px]">
              <thead>
                <tr className="bg-slate-50/30 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  <th className="px-8 py-5">Tracking ID</th>
                  <th className="px-4 py-5">Order ID</th>
                  <th className="px-4 py-5">Merchant</th>
                  <th className="px-4 py-5">Buyer</th>
                  <th className="px-4 py-5">Assigned Rider</th>
                  <th className="px-4 py-5">Route</th>
                  <th className="px-4 py-5">Est. Time</th>
                  <th className="px-4 py-5">Escrow Status</th>
                  <th className="px-4 py-5">Delivery Status</th>
                  <th className="px-8 py-5 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {deliveries.map((dlv) => (
                  <tr key={dlv.id} className="text-[11px] font-bold text-slate-600 hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-6 font-black text-[#1e293b]">{dlv.id}</td>
                    <td className="px-4 py-6 text-slate-400">{dlv.order}</td>
                    <td className="px-4 py-6">{dlv.merchant}</td>
                    <td className="px-4 py-6">{dlv.buyer}</td>
                    <td className="px-4 py-6">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${dlv.rider === 'Unassigned' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                        {dlv.rider}
                      </div>
                    </td>
                    <td className="px-4 py-6 leading-tight max-w-[180px]">{dlv.route}</td>
                    <td className="px-4 py-6">{dlv.est}</td>
                    <td className="px-4 py-6">
                      <span className={`px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-tighter ${
                        dlv.escrow === 'Released' ? 'bg-emerald-50 text-emerald-600' : 
                        dlv.escrow === 'On Hold' ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-400'
                      }`}>
                        {dlv.escrow}
                      </span>
                    </td>
                    <td className="px-4 py-6">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${dlv.color}`}>
                        {dlv.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center relative">
                      {/* ACTION DROPDOWN TRIGGER */}
                      <button className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-slate-50/50 border-t border-slate-50 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Showing 5 of 287 deliveries</p>
          </div>
        </div>
      </main>
    </div>
  );
}