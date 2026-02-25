"use client";

import React, { useState } from 'react';
import { 
  Globe, Coins, Clock, Bell, Mail, 
  MessageSquare, Lock, Smartphone, 
  ShieldCheck, Eye, Share2, LogOut, 
  AlertTriangle, Save
} from 'lucide-react';

export default function BuyerSettings() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [inAppNotif, setInAppNotif] = useState(true);

  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      
      {/* HEADER AREA */}
      <div>
        <h1 className="text-2xl font-black text-[#1e293b]">Settings</h1>
        <p className="text-sm font-bold text-slate-400 mt-1">Manage your account preferences and security options.</p>
      </div>

      {/* ACCOUNT PREFERENCES */}
      <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6 md:p-8 space-y-8">
        <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em]">Account Preferences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Preferred Language</label>
            <div className="relative">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <select className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 outline-none appearance-none cursor-pointer">
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Currency Display</label>
            <div className="relative">
              <Coins className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <select className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 outline-none appearance-none cursor-pointer">
                <option>Nigerian Naira (₦)</option>
                <option>US Dollar ($)</option>
                <option>British Pound (£)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Time Zone</label>
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <select className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 outline-none appearance-none cursor-pointer">
                <option>West African Time (WAT)</option>
                <option>Greenwich Mean Time (GMT)</option>
                <option>Central European Time (CET)</option>
              </select>
            </div>
          </div>
        </div>

        <button className="bg-[#19246a] text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-indigo-100 hover:bg-indigo-900 transition-all">
          <Save size={14} /> Save Preferences
        </button>
      </section>

      {/* NOTIFICATIONS */}
      <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6 md:p-8 space-y-6">
        <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em]">Notifications</h2>
        <p className="text-[11px] font-bold text-slate-400">Choose how you want to receive notifications about your account activity.</p>
        
        <div className="space-y-3">
          {[
            { id: 'email', label: 'Email Notifications', sub: 'Receive updates about orders, payments, and account activity via email.', icon: Mail, state: emailNotif, setter: setEmailNotif },
            { id: 'sms', label: 'SMS Notifications', sub: 'Get text messages for critical account events and security alerts.', icon: Smartphone, state: smsNotif, setter: setSmsNotif },
            { id: 'inApp', label: 'In-App Notifications', sub: 'See notifications within the platform for real-time updates.', icon: Bell, state: inAppNotif, setter: setInAppNotif }
          ].map((notif) => (
            <div key={notif.id} className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-[24px]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm"><notif.icon size={18} /></div>
                <div>
                  <p className="text-xs font-black text-[#1e293b]">{notif.label}</p>
                  <p className="text-[10px] font-bold text-slate-400 mt-0.5">{notif.sub}</p>
                </div>
              </div>
              <button 
                onClick={() => notif.setter(!notif.state)}
                className={`w-12 h-6 rounded-full transition-all relative ${notif.state ? 'bg-emerald-500' : 'bg-slate-200'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${notif.state ? 'left-7' : 'left-1'}`} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECURITY SETTINGS */}
      <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6 md:p-8 space-y-6">
        <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em]">Security Settings</h2>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-[24px]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm"><Lock size={18} /></div>
              <div>
                <p className="text-xs font-black text-[#1e293b]">Password</p>
                <p className="text-[10px] font-bold text-slate-400 mt-0.5">Last updated: 2025-01-10</p>
              </div>
            </div>
            <button className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50">Change Password</button>
          </div>

          <div className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-[24px]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-500 shadow-sm"><Smartphone size={18} /></div>
              <div>
                <p className="text-xs font-black text-[#1e293b]">Two-Factor Authentication</p>
                <p className="text-[10px] font-bold text-emerald-500 mt-0.5">Enabled - Your account is protected</p>
              </div>
            </div>
            <button className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50">Manage 2FA</button>
          </div>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 flex gap-4">
          <ShieldCheck className="text-blue-500 shrink-0" size={20} />
          <p className="text-[10px] font-bold text-blue-700/70 leading-relaxed">
            Security Tip: Enable two-factor authentication for an extra layer of security. Use a strong, unique password and change it regularly.
          </p>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6 md:p-8 space-y-6">
        <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em]">Privacy</h2>
        <p className="text-[11px] font-bold text-slate-400">Control how your data is used and who can see your information.</p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-[24px]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm"><Eye size={18} /></div>
              <div>
                <p className="text-xs font-black text-[#1e293b]">Profile Visibility</p>
                <p className="text-[10px] font-bold text-slate-400 mt-0.5">Control who can view your profile information</p>
              </div>
            </div>
            <select className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-[10px] font-black uppercase text-slate-500 outline-none">
              <option>Private</option>
              <option>Public</option>
            </select>
          </div>

          <div className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-[24px]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm"><Mail size={18} /></div>
              <div>
                <p className="text-xs font-black text-[#1e293b]">Marketing Communications</p>
                <p className="text-[10px] font-bold text-slate-400 mt-0.5">Receive promotional offers, tips, and product updates</p>
              </div>
            </div>
            <button className="w-12 h-6 rounded-full bg-slate-200 relative"><div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full" /></button>
          </div>
        </div>
      </section>

      {/* ACCOUNT ACTIONS */}
      <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6 md:p-8 space-y-6">
        <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em]">Account Actions</h2>
        <p className="text-[11px] font-bold text-slate-400">Manage critical account actions. These changes may affect your access.</p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-[24px]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm"><Smartphone size={18} /></div>
              <div>
                <p className="text-xs font-black text-[#1e293b]">Log Out from All Devices</p>
                <p className="text-[10px] font-bold text-slate-400 mt-0.5">Sign out from all active sessions on other devices.</p>
              </div>
            </div>
            <button className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50">Log Out All</button>
          </div>

          <div className="flex items-center justify-between p-5 bg-amber-50/30 border border-amber-100 rounded-[24px]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-amber-500 shadow-sm"><AlertTriangle size={18} /></div>
              <div>
                <p className="text-xs font-black text-amber-900">Deactivate Account</p>
                <p className="text-[10px] font-bold text-amber-600 mt-0.5">Temporarily disable your account. You can reactivate by logging in again.</p>
              </div>
            </div>
            <button className="px-5 py-2.5 rounded-xl border border-amber-200 bg-white text-[10px] font-black text-amber-500 uppercase tracking-widest hover:bg-amber-50">Deactivate</button>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center">
          <p className="text-[10px] font-bold text-slate-400">
            Note: Account deactivation and deletion are serious actions. Please review our <span className="underline text-indigo-600">terms and conditions</span> before proceeding.
          </p>
        </div>
      </section>

    </main>
  );
}