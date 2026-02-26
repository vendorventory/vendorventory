"use client";

import React from 'react';
import { 
  Search, Filter, Plus, Map, 
  MapPin, Globe, Banknote, Users, 
  Edit2, Power, Trash2, ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';

export default function ServiceZones() {
  const stats = [
    { label: 'Total Zones', value: '5', icon: MapPin, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Active Zones', value: '4', icon: Globe, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: 'Avg. Rate', value: '₦1,640', icon: Banknote, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Riders Assigned', value: '45', icon: Users, color: 'text-amber-500', bg: 'bg-amber-50' },
  ];

  const zones = [
    { id: 'Z-001', name: 'Lagos Island (VI, Ikoyi, Lekki)', update: 'Updated 2 hours ago', coverage: 'Victoria...', rate: '₦1,500', riders: 15, status: 'Active', color: 'text-emerald-500 bg-emerald-50' },
    { id: 'Z-002', name: 'Lagos Mainland (Ikeja, Yaba)', update: 'Updated 57 mins ago', coverage: 'Ikeja...', rate: '₦1,200', riders: 12, status: 'Active', color: 'text-emerald-500 bg-emerald-50' },
    { id: 'Z-003', name: 'Lagos West (Alimosho, Festac)', update: 'Updated 1 day ago', coverage: 'Festac...', rate: '₦1,000', riders: 10, status: 'Active', color: 'text-emerald-500 bg-emerald-50' },
    { id: 'Z-004', name: 'Ajah & Ibeju-Lekki', update: 'Updated 3 days ago', coverage: 'Ajah...', rate: '₦2,500', riders: 'All Riders', status: 'Inactive', color: 'text-slate-400 bg-slate-100' },
    { id: 'Z-005', name: 'Abuja Central', update: 'Updated 12 hours ago', coverage: 'Wuse...', rate: '₦1,500', riders: 8, status: 'Active', color: 'text-emerald-500 bg-emerald-50' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24 lg:ml-[280px]">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#1e293b]">Service Zones</h1>
            <p className="text-sm font-bold text-slate-400 mt-1">Manage delivery coverage areas and zone-based pricing</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#19246a] text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-100 hover:bg-indigo-900 transition-all">
            <Plus size={16} /> Add New Zone
          </button>
        </div>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-4">
              <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center ${item.color}`}>
                <item.icon size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#1e293b]">{item.value}</h2>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{item.label}</p>
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
              placeholder="Search zones or coverage areas..." 
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-bold text-[#1e293b] outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-all">
              <Filter size={14} /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-all">
              <Map size={14} /> Map View
            </button>
          </div>
        </div>

        {/* ZONES TABLE */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[1000px]">
              <thead>
                <tr className="bg-slate-50/30 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  <th className="px-8 py-5">Zone Details</th>
                  <th className="px-4 py-5">Coverage</th>
                  <th className="px-4 py-5">Base Rate</th>
                  <th className="px-4 py-5">Riders</th>
                  <th className="px-4 py-5">Status</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {zones.map((zone) => (
                  <tr key={zone.id} className="text-[11px] font-bold text-slate-600 hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-6">
                      <p className="text-sm font-black text-[#1e293b]">{zone.name}</p>
                      <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">ID: {zone.id} • {zone.update}</p>
                    </td>
                    <td className="px-4 py-6 text-slate-700">{zone.coverage}</td>
                    <td className="px-4 py-6 font-black text-[#1e293b]">{zone.rate}</td>
                    <td className="px-4 py-6">
                      <div className="flex items-center">
                        {typeof zone.riders === 'number' ? (
                          <div className="flex -space-x-2">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[8px] text-slate-400">
                                <Users size={10} />
                              </div>
                            ))}
                            <div className="w-6 h-6 rounded-full bg-indigo-900 border-2 border-white flex items-center justify-center text-[8px] text-white font-black">
                              +{zone.riders - 3}
                            </div>
                          </div>
                        ) : (
                          <span className="text-red-500 font-black uppercase text-[9px]">{zone.riders}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-6">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${zone.color}`}>
                        {zone.status}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center justify-end gap-3 opacity-40 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 rounded-lg text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"><Edit2 size={16} /></button>
                        <button className="p-2 rounded-lg text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"><Power size={16} /></button>
                        <button className="p-2 rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="p-6 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Showing 5 zones</p>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 flex items-center gap-1">
                <ChevronLeft size={14} /> Previous
              </button>
              <button className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 flex items-center gap-1">
                Next <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}