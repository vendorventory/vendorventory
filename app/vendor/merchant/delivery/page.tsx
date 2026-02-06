"use client";

import React, { useState } from 'react';
import { 
  Plus, Search, Truck, CheckCircle2, Package, 
  Star, MapPin, ExternalLink, ChevronRight,
  Filter, MoreHorizontal, Bike, Car, ArrowRight,
  X, Mail, Phone, Calendar, ChevronDown, Headset
} from 'lucide-react';

const stats = [
  { label: 'Total Partners', value: '6', icon: Truck, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { label: 'Active Partners', value: '4', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Ongoing Deliveries', value: '19', icon: Package, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Completed Deliveries', value: '400', icon: CheckCircle2, color: 'text-slate-600', bg: 'bg-slate-100' },
];

const partners = [
  { id: 'DP001', name: 'SwiftLogistics Nigeria', type: 'Van', coverage: 'Lagos, Abuja, Port Harcourt', status: 'Active', ongoing: 5, rating: 4.8 },
  { id: 'DP002', name: 'QuickRide Express', type: 'Bike', coverage: 'Lagos Metropolis', status: 'Active', ongoing: 8, rating: 4.5 },
  { id: 'DP003', name: 'Mega Cargo Services', type: 'Truck', coverage: 'Nationwide', status: 'Active', ongoing: 2, rating: 4.6 },
  { id: 'DP004', name: 'Metro Delivery Co.', type: 'Cargo Van', coverage: 'Lagos, Ibadan', status: 'Restricted', ongoing: 1, rating: 3.9 },
  { id: 'DP005', name: 'RoadRunner Logistics', type: 'Motorcycle', coverage: 'Abuja, Kano', status: 'Active', ongoing: 3, rating: 4.2 },
  { id: 'DP006', name: 'City Express Delivery', type: 'Van', coverage: 'Port Harcourt Only', status: 'Inactive', ongoing: 0, rating: 3.5 },
];

export default function DeliveryPartners() {
  const [activeTab, setActiveTab] = useState('All');
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<any>(null);

  const handleManagePartner = (partner: any) => {
    setSelectedPartner(partner);
    setIsManageModalOpen(true);
  };

  return (
    <div className="p-0 md:p-8 max-w-7xl mx-auto space-y-0 md:space-y-8 bg-slate-50 min-h-screen pb-24 lg:pb-8 relative">
      
      {/* MOBILE BLUE HEADER CARD */}
      <div className="lg:hidden bg-[#19246a] p-6 pb-10 rounded-b-[40px] shadow-lg space-y-6">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h1 className="text-xl font-bold text-white">Delivery Partners</h1>
            <p className="text-[11px] text-indigo-200 font-medium tracking-tight">Manage logistics partners handling your deliveries</p>
          </div>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-colors"
          >
            <Plus size={20} />
          </button>
        </div>

        {/* Mobile Quick Stats Row */}
        <div className="flex justify-between items-center bg-white/5 border border-white/10 rounded-2xl p-4">
          <div className="text-center flex-1">
            <p className="text-[9px] uppercase font-bold text-indigo-200">Total</p>
            <p className="text-sm font-black text-white mt-0.5">6</p>
          </div>
          <div className="text-center flex-1 border-x border-white/10">
            <p className="text-[9px] uppercase font-bold text-indigo-200">Active</p>
            <p className="text-sm font-black text-emerald-400 mt-0.5">4</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-[9px] uppercase font-bold text-indigo-200">Ongoing</p>
            <p className="text-sm font-black text-blue-400 mt-0.5">19</p>
          </div>
        </div>
      </div>

      {/* DESKTOP HEADER AREA */}
      <div className="hidden lg:flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-[#1e293b]">Delivery Partners</h1>
          <p className="text-xs md:text-sm text-slate-500 font-medium">Manage logistics partners handling your deliveries.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm active:scale-95"
        >
          <Plus size={18} /> Add Delivery Partner
        </button>
      </div>

      {/* DESKTOP STATS GRID */}
      <div className="hidden lg:grid grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className={`${stat.bg} ${stat.color} w-10 h-10 rounded-lg flex items-center justify-center mb-4`}>
              <stat.icon size={20} />
            </div>
            <p className="text-2xl font-extrabold text-[#1e293b]">{stat.value}</p>
            <p className="text-xs text-slate-400 font-bold uppercase mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* SEARCH, FILTER & LIST SECTION */}
      <div className="px-4 md:px-0 -mt-6 lg:mt-0 space-y-6 relative z-10">
        {/* Search Bar Container */}
        <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input 
                type="text" 
                placeholder="Search by partner name, coverage area..." 
                className="w-full pl-10 pr-4 py-2.5 border border-slate-100 rounded-xl text-sm outline-none bg-slate-50/50"
              />
            </div>
            <div className="flex gap-2">
              <select className="flex-1 lg:w-48 px-4 py-2.5 border border-slate-100 rounded-xl text-sm bg-white outline-none appearance-none cursor-pointer">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <button className="flex items-center justify-center p-2.5 border border-slate-100 rounded-xl bg-white text-slate-400 lg:hidden">
                <Filter size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Partner Table */}
        <div className="hidden md:block bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead className="bg-slate-50/50 border-b border-slate-200">
                <tr>
                  {['Partner Name', 'Service Type', 'Coverage Area', 'Status', 'Ongoing Deliveries', 'Rating', 'Action'].map((header) => (
                    <th key={header} className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {partners.map((partner) => (
                  <tr key={partner.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center"><Truck size={20} /></div>
                        <div>
                          <p className="text-sm font-bold text-[#1e293b]">{partner.name}</p>
                          <p className="text-[10px] text-slate-400 font-medium tracking-tight">ID: {partner.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-slate-600"><Car size={14} className="text-slate-400" /><span className="text-xs font-medium">{partner.type}</span></div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-slate-500"><MapPin size={14} className="text-slate-300" /><span className="text-xs font-medium max-w-[180px] truncate">{partner.coverage}</span></div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${partner.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : partner.status === 'Restricted' ? 'bg-orange-50 text-orange-600' : 'bg-slate-100 text-slate-400'}`}>{partner.status}</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-[#1e293b] text-center">{partner.ongoing}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-orange-400 font-black text-xs"><Star size={14} fill="currentColor" /> {partner.rating}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button onClick={() => handleManagePartner(partner)} className="px-4 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">Manage</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Partner Cards */}
        <div className="md:hidden space-y-4">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center border border-emerald-100"><Truck size={24} /></div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-black text-[#1e293b]">{partner.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">ID: {partner.id}</p>
                    <div className="flex items-center gap-1.5 pt-0.5">
                      <span className={`w-2 h-2 rounded-full ${partner.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                      <span className="text-[10px] font-black text-slate-500 uppercase">{partner.status}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-orange-50 text-orange-500 rounded-lg text-[10px] font-black"><Star size={12} fill="currentColor" /> {partner.rating}</div>
              </div>
              <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-50">
                <div><p className="text-[9px] uppercase font-black text-slate-300 tracking-widest">Ongoing</p><p className="text-sm font-black text-[#19246a]">{partner.ongoing} Deliveries</p></div>
                <div><p className="text-[9px] uppercase font-black text-slate-300 tracking-widest">Type</p><p className="text-sm font-black text-[#19246a]">{partner.type}</p></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-400"><MapPin size={14} /><span className="text-[10px] font-bold max-w-[150px] truncate">{partner.coverage}</span></div>
                <button onClick={() => handleManagePartner(partner)} className="flex items-center gap-1 text-[10px] font-black text-indigo-600 uppercase">Manage Partner <ArrowRight size={14} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MANAGE PARTNER MODAL */}
      {isManageModalOpen && selectedPartner && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsManageModalOpen(false)} />
          <div className="relative bg-white w-full max-w-lg rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between shrink-0">
              <h2 className="text-xl font-black text-[#1e293b]">Manage Partner</h2>
              <button onClick={() => setIsManageModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh] no-scrollbar">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center border border-emerald-100"><Truck size={32} /></div>
                <div>
                  <h3 className="text-lg font-black text-[#1e293b]">{selectedPartner.name}</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">Partner ID: {selectedPartner.id}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-black text-emerald-500 uppercase mt-1"><CheckCircle2 size={10} /> {selectedPartner.status}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-2">
                <div className="space-y-1"><p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Service Type</p><p className="text-sm font-bold text-[#1e293b] flex items-center gap-2"><Truck size={14} className="text-slate-400" /> {selectedPartner.type}</p></div>
                <div className="space-y-1"><p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Coverage Area</p><p className="text-sm font-bold text-[#1e293b] flex items-center gap-2"><MapPin size={14} className="text-slate-400" /> {selectedPartner.coverage}</p></div>
                <div className="space-y-1"><p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Contact Email</p><p className="text-sm font-bold text-indigo-600 flex items-center gap-2 underline">ops@swiftlogistics.ng</p></div>
                <div className="space-y-1"><p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Contact Phone</p><p className="text-sm font-bold text-[#1e293b] flex items-center gap-2">+234 810 123 4567</p></div>
              </div>
              <div className="bg-slate-50 rounded-[24px] p-5 flex items-center justify-between border border-slate-100">
                <div className="text-center flex-1 border-r border-slate-200"><p className="text-2xl font-black text-blue-600">{selectedPartner.ongoing}</p><p className="text-[9px] uppercase font-black text-slate-400 mt-1">Ongoing Deliveries</p></div>
                <div className="text-center flex-1"><p className="text-2xl font-black text-emerald-500">142</p><p className="text-[9px] uppercase font-black text-slate-400 mt-1">Completed Deliveries</p></div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Update Status</label>
                <div className="relative">
                  <select className="w-full pl-4 pr-10 py-3.5 rounded-2xl border border-slate-200 bg-white text-sm font-bold text-[#1e293b] outline-none appearance-none focus:ring-2 focus:ring-indigo-500/10"><option value="active">Active</option><option value="restricted">Restricted</option><option value="inactive">Inactive</option></select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                </div>
              </div>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-50 flex justify-end shrink-0"><button onClick={() => setIsManageModalOpen(false)} className="px-8 py-3 rounded-2xl bg-white border border-slate-200 font-black text-slate-500 hover:bg-slate-100 text-sm shadow-sm transition-all active:scale-95">Close</button></div>
          </div>
        </div>
      )}

      {/* ADD PARTNER MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsAddModalOpen(false)} />
          <div className="relative bg-white w-full max-w-md rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <button onClick={() => setIsAddModalOpen(false)} className="absolute right-6 top-6 p-2 hover:bg-slate-100 rounded-full text-slate-400 z-10 transition-colors"><X size={20} /></button>
            <div className="p-10 flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-100/50 shadow-inner"><Truck size={40} strokeWidth={1.5} /></div>
              <div className="space-y-2">
                <h2 className="text-xl font-black text-[#1e293b]">Request New Delivery Partner</h2>
                <p className="text-sm text-slate-500 font-medium leading-relaxed px-4">Connect with our support team to add a new delivery partner to your account. We'll help you find the best logistics solution for your business.</p>
              </div>
              <button className="w-full py-4 rounded-2xl bg-[#22c55e] hover:bg-emerald-600 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-100 active:scale-95 transition-all"><Headset size={18} /> Contact Support</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}