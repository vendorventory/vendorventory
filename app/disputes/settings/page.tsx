"use client";

import React, { useState } from 'react';
import { 
  Bell, Lock, Save, Eye, EyeOff, 
  LogOut, CheckCircle2, ShieldCheck,
  ToggleLeft, ToggleRight
} from 'lucide-react';

// Sidebar correctly imported from your established components folder
import { Sidebar } from '../components/Sidebar';

export default function DisputeSettings() {
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* SIDEBAR NAVIGATION */}
      <Sidebar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-6 pb-24 lg:ml-[280px]">
        
        {/* HEADER AREA */}
        <div>
          <h1 className="text-2xl font-black text-[#1e293b]">Settings</h1>
          <p className="text-sm font-bold text-slate-400 mt-1">Manage your preferences and account settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* NOTIFICATION PREFERENCES */}
          <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 space-y-8 flex flex-col">
            <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em] flex items-center gap-2">
              <Bell size={16} className="text-indigo-600" /> Notification Preferences
            </h2>
            
            <div className="space-y-6 flex-1">
              {[
                { id: 'email-assign', label: 'Email on New Case Assignment', sub: 'Receive email when a new case is assigned to you', active: true },
                { id: 'email-escalate', label: 'Email on Case Escalation', sub: 'Get notified when a case is escalated', active: true },
                { id: 'email-resolve', label: 'Email on Case Resolution', sub: 'Receive confirmation when cases are resolved', active: false },
                { id: 'push-notif', label: 'Push Notifications', sub: 'Enable browser push notifications', active: true },
                { id: 'sms-alerts', label: 'SMS Alerts', sub: 'Receive SMS for high-priority cases', active: false },
              ].map((item) => (
                <div key={item.id} className="flex items-center justify-between group">
                  <div className="space-y-1">
                    <p className="text-[11px] font-black text-[#1e293b]">{item.label}</p>
                    <p className="text-[10px] font-bold text-slate-400 leading-tight max-w-[240px]">{item.sub}</p>
                  </div>
                  <button className={`w-10 h-5 rounded-full relative transition-colors ${item.active ? 'bg-blue-600' : 'bg-slate-200'}`}>
                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${item.active ? 'left-6' : 'left-1'}`} />
                  </button>
                </div>
              ))}
            </div>

            <button className="w-fit bg-[#19246a] text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-indigo-100 hover:bg-indigo-900 transition-all">
              <Save size={14} /> Save Preferences
            </button>
          </section>

          {/* CHANGE PASSWORD */}
          <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 space-y-8">
            <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em] flex items-center gap-2">
              <Lock size={16} className="text-indigo-600" /> Change Password
            </h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Current Password</label>
                <div className="relative">
                  <input 
                    type={showCurrentPass ? "text" : "password"} 
                    placeholder="Enter current password"
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 outline-none" 
                  />
                  <button onClick={() => setShowCurrentPass(!showCurrentPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500">
                    {showCurrentPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">New Password</label>
                <div className="relative">
                  <input 
                    type={showNewPass ? "text" : "password"} 
                    placeholder="Enter new password"
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 outline-none" 
                  />
                  <button onClick={() => setShowNewPass(!showNewPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500">
                    {showNewPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <p className="text-[9px] font-bold text-slate-300 uppercase tracking-tighter ml-1">Must be at least 8 characters with letters and numbers</p>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Confirm New Password</label>
                <input 
                  type="password" 
                  placeholder="Confirm new password"
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 outline-none" 
                />
              </div>

              <button className="bg-[#19246a] text-white px-8 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-indigo-100 hover:bg-indigo-900 transition-all">
                Change Password
              </button>
            </div>
          </section>

          {/* AVAILABILITY STATUS */}
          <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 space-y-6">
            <div className="space-y-1">
               <h2 className="text-sm font-black text-[#1e293b]">Availability Status</h2>
               <p className="text-[10px] font-bold text-slate-400">Control whether you can receive new case assignments</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-[24px] border border-slate-100 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs font-black text-[#1e293b]">Current Status</p>
                <p className="text-[10px] font-bold text-slate-400">You can receive new cases</p>
              </div>
              <button 
                onClick={() => setIsAvailable(!isAvailable)}
                className={`w-12 h-6 rounded-full relative transition-all ${isAvailable ? 'bg-emerald-500' : 'bg-slate-200'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isAvailable ? 'left-7' : 'left-1'}`} />
              </button>
            </div>

            {isAvailable && (
              <div className="bg-emerald-50/50 p-4 rounded-xl flex items-center gap-3 border border-emerald-100 animate-in fade-in zoom-in-95 duration-300">
                <ShieldCheck className="text-emerald-500" size={18} />
                <p className="text-[11px] font-black text-emerald-600 uppercase tracking-widest">Available for Cases</p>
              </div>
            )}
          </section>

          {/* LOGOUT */}
          <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 space-y-6">
            <div className="space-y-1">
               <h2 className="text-sm font-black text-[#1e293b]">Logout</h2>
               <p className="text-[10px] font-bold text-slate-400">Sign out of your account on this device</p>
            </div>
            
            <button className="w-full py-4 rounded-2xl border border-red-100 text-red-500 font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-red-50 transition-all">
              <LogOut size={16} /> Sign Out
            </button>
          </section>

        </div>
      </main>
    </div>
  );
}