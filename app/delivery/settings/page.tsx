"use client";

import React, { useState } from 'react';
import { 
  Settings, Bell, Lock, Users, 
  Truck, Save, Globe, Mail, 
  Phone, Clock, CheckCircle2 
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';

export default function DeliverySettings() {
  const [activeTab, setActiveTab] = useState('General');

  const settingsTabs = [
    { id: 'General', icon: Settings, label: 'General' },
    { id: 'Notifications', icon: Bell, label: 'Notifications' },
    { id: 'Security', icon: Lock, label: 'Security' },
    { id: 'Team Management', icon: Users, label: 'Team Management' },
    { id: 'Delivery Preferences', icon: Truck, label: 'Delivery Preferences' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* SIDEBAR NAVIGATION */}
      <Sidebar />

      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24 lg:ml-[280px]">
        
        {/* HEADER AREA */}
        <div>
          <h1 className="text-2xl font-black text-[#1e293b]">Settings</h1>
          <p className="text-sm font-bold text-slate-400 mt-1">Manage your account preferences and configurations</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT COLUMN: SETTINGS TABS */}
          <aside className="w-full lg:w-72 bg-white rounded-[32px] border border-slate-100 shadow-sm p-4 space-y-1 shrink-0">
            {settingsTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                  activeTab === tab.id 
                  ? 'bg-blue-50 text-[#19246a] shadow-sm shadow-blue-100/50' 
                  : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                }`}
              >
                <tab.icon size={18} className={activeTab === tab.id ? "text-blue-600" : "text-slate-300"} />
                {tab.label}
              </button>
            ))}
          </aside>

          {/* RIGHT COLUMN: SETTINGS CONTENT */}
          <section className="flex-1 bg-white rounded-[40px] border border-slate-100 shadow-sm p-6 md:p-10 space-y-10">
            
            <div className="space-y-1">
              <h2 className="text-lg font-black text-[#1e293b]">{activeTab} Settings</h2>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Update your basic logistics profile information</p>
            </div>

            <div className="space-y-8 max-w-3xl">
              {/* Company Display Name */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company Display Name</label>
                <input 
                  type="text" 
                  defaultValue="SwiftLogistics Nigeria" 
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-200 transition-all"
                />
              </div>

              {/* Support Contact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Support Email</label>
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      type="email" 
                      defaultValue="support@swiftlogistics.ng" 
                      className="w-full pl-14 pr-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Support Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      type="text" 
                      defaultValue="+234 803 456 7890" 
                      className="w-full pl-14 pr-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Timezone Selection */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Timezone</label>
                <div className="relative">
                  <Globe className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <select className="w-full pl-14 pr-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 outline-none appearance-none cursor-pointer">
                    <option>Africa/Lagos (WAT)</option>
                    <option>GMT (UTC +0)</option>
                  </select>
                </div>
              </div>

              {/* Business Hours */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Business Hours Start</label>
                  <div className="relative">
                    <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input type="text" defaultValue="08:00" className="w-full pl-14 pr-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 outline-none" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Business Hours End</label>
                  <div className="relative">
                    <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input type="text" defaultValue="18:00" className="w-full pl-14 pr-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 outline-none" />
                  </div>
                </div>
              </div>

              {/* Language */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Language</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 outline-none appearance-none cursor-pointer">
                  <option>English</option>
                  <option>French</option>
                </select>
              </div>

              {/* Save Button */}
              <div className="pt-6">
                <button className="bg-[#19246a] text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 shadow-xl shadow-indigo-100 hover:bg-indigo-900 transition-all active:scale-95">
                  <CheckCircle2 size={16} /> Save Changes
                </button>
              </div>
            </div>

          </section>
        </div>
      </main>
    </div>
  );
}