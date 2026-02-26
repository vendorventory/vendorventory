"use client";

import React from 'react';
import { 
  Search, Filter, Plus, MoreVertical, 
  Users, Activity, Truck, AlertTriangle,
  Clock, Award, BarChart3, Zap,
  Star, Bike, Car, HardDrive, Phone
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';

export default function RidersPage() {
  const fleetStats = [
    { label: 'Total Riders', value: '8', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Riders Online', value: '3', icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: 'Riders On Delivery', value: '3', icon: Truck, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Suspended Riders', value: '1', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-50' },
  ];

  const analytics = [
    { label: 'Average Delivery Time', value: '42 mins', icon: Clock, detail: null },
    { label: 'Best Performing Rider', value: 'Musa Abubakar (R-051)', icon: Award, detail: 'green' },
    { label: 'Fleet Utilization Rate', value: '73.5%', icon: BarChart3, detail: 'purple' },
    { label: 'Fleet Efficiency %', value: '91.2%', icon: Zap, detail: 'orange' },
  ];

  const riders = [
    { id: 'R-042', name: 'Chidi Okafor', phone: '+234 803 456 7890', status: 'On Delivery', current: 'D-8901', today: 12, rating: '4.9', vehicle: 'Bike', availability: 'Busy', color: 'bg-blue-50 text-blue-600', availColor: 'bg-amber-100 text-amber-600' },
    { id: 'R-036', name: 'Tunde Bello', phone: '+234 806 456 7890', status: 'Online', current: '-', today: 5, rating: '4.8', vehicle: 'Bike', availability: 'Available', color: 'bg-emerald-50 text-emerald-600', availColor: 'bg-emerald-100 text-emerald-600' },
    { id: 'R-029', name: 'Ibrahim Yusuf', phone: '+234 811 456 7890', status: 'Online', current: '-', today: 6, rating: '4.7', vehicle: 'Car', availability: 'Available', color: 'bg-emerald-50 text-emerald-600', availColor: 'bg-emerald-100 text-emerald-600' },
    { id: 'R-051', name: 'Musa Abubakar', phone: '+234 814 456 7890', status: 'On Delivery', current: 'D-8905', today: 9, rating: '4.9', vehicle: 'Bike', availability: 'Busy', color: 'bg-blue-50 text-blue-600', availColor: 'bg-amber-100 text-amber-600' },
    { id: 'R-019', name: 'Kunle Hassan', phone: '+234 817 456 7890', status: 'Offline', current: '-', today: 0, rating: '4.6', vehicle: 'Van', availability: 'Not Available', color: 'bg-slate-100 text-slate-500', availColor: 'bg-slate-100 text-slate-400' },
    { id: 'R-012', name: 'Segun Adebayo', phone: '+234 820 456 7890', status: 'Suspended', current: '-', today: 0, rating: '4.3', vehicle: 'Bike', availability: 'Not Available', color: 'bg-red-50 text-red-500', availColor: 'bg-slate-100 text-slate-400' },
    { id: 'R-033', name: 'Femi Oladipo', phone: '+234 823 456 7890', status: 'Online', current: '-', today: 4, rating: '4.5', vehicle: 'Bike', availability: 'Available', color: 'bg-emerald-50 text-emerald-600', availColor: 'bg-emerald-100 text-emerald-600' },
    { id: 'R-007', name: 'Aminu Bello', phone: '+234 826 789 0123', status: 'On Delivery', current: 'D-8902', today: 7, rating: '4.8', vehicle: 'Car', availability: 'Busy', color: 'bg-blue-50 text-blue-600', availColor: 'bg-amber-100 text-amber-600' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24 lg:ml-[280px]">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#1e293b]">Riders / Drivers</h1>
            <p className="text-sm font-bold text-slate-400 mt-1">Manage your fleet and monitor rider performance</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input type="text" placeholder="Search by Rider Name or ID..." className="pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-100 text-sm font-bold w-80 outline-none shadow-sm" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-white shadow-sm transition-all">
              <Filter size={14} /> Filter
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#19246a] text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-100">
              <Plus size={16} /> Add New Rider
            </button>
          </div>
        </div>

        {/* FLEET OVERVIEW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {fleetStats.map((item, idx) => (
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

        {/* PERFORMANCE ANALYTICS */}
        <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-6 overflow-x-auto">
          <h3 className="text-[10px] font-black text-[#1e293b] uppercase tracking-[0.2em] mb-6 px-2">Rider Performance Analytics</h3>
          <div className="flex items-center justify-between min-w-[900px] divide-x divide-slate-100">
            {analytics.map((item, idx) => (
              <div key={idx} className="flex-1 px-6 first:pl-2 last:pr-2 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${
                  item.detail === 'green' ? 'bg-emerald-50 text-emerald-500' :
                  item.detail === 'purple' ? 'bg-purple-50 text-purple-500' :
                  item.detail === 'orange' ? 'bg-orange-50 text-orange-500' : 'bg-blue-50 text-blue-500'
                }`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className={`text-sm font-black ${item.detail === 'green' ? 'text-emerald-600' : 'text-[#1e293b]'}`}>{item.value}</h4>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RIDERS TABLE */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[1100px]">
              <thead>
                <tr className="bg-slate-50/30 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  <th className="px-8 py-5">Rider ID</th>
                  <th className="px-4 py-5">Rider Name</th>
                  <th className="px-4 py-5">Phone</th>
                  <th className="px-4 py-5">Status</th>
                  <th className="px-4 py-5">Current Delivery</th>
                  <th className="px-4 py-5 text-center">Deliveries Today</th>
                  <th className="px-4 py-5">Rating</th>
                  <th className="px-4 py-5">Vehicle Type</th>
                  <th className="px-4 py-5">Availability</th>
                  <th className="px-8 py-5 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {riders.map((rider) => (
                  <tr key={rider.id} className="text-[11px] font-bold text-slate-600 hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-6 font-black text-[#1e293b]">{rider.id}</td>
                    <td className="px-4 py-6 font-black text-slate-700">{rider.name}</td>
                    <td className="px-4 py-6 text-slate-400">{rider.phone}</td>
                    <td className="px-4 py-6">
                      <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${rider.color}`}>
                        {rider.status}
                      </span>
                    </td>
                    <td className="px-4 py-6 text-blue-600 font-black">{rider.current}</td>
                    <td className="px-4 py-6 text-center">{rider.today}</td>
                    <td className="px-4 py-6">
                      <div className="flex items-center gap-1 text-amber-500 font-black">
                        <Star size={12} fill="currentColor" /> {rider.rating}
                      </div>
                    </td>
                    <td className="px-4 py-6">
                      <div className="flex items-center gap-2 text-slate-500">
                        {rider.vehicle === 'Bike' && <Bike size={14} />}
                        {rider.vehicle === 'Car' && <Car size={14} />}
                        {rider.vehicle === 'Van' && <HardDrive size={14} />}
                        {rider.vehicle}
                      </div>
                    </td>
                    <td className="px-4 py-6">
                      <span className={`px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-tighter ${rider.availColor}`}>
                        {rider.availability}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
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
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Showing 8 of 8 riders</p>
          </div>
        </div>
      </main>
    </div>
  );
}