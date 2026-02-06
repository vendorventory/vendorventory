"use client";

import React, { useState } from 'react';
import { 
  Save, Lock, Bell, CreditCard, UserX, 
  Eye, EyeOff, Shield, Smartphone, Mail,
  AlertTriangle, Info, MapPin, Phone, Building,
  Clock, Monitor, LogOut
} from 'lucide-react';

export default function MerchantSettings() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 md:bg-transparent pb-24 lg:pb-8 relative overflow-x-hidden">
      
      {/* --- MOBILE BLUE CARD HEADER --- */}
      <div className="lg:hidden bg-[#19246a] pt-12 pb-24 px-4 rounded-b-[40px] mb-[-60px] relative z-0">
        <h1 className="text-2xl font-bold text-white tracking-tight">Settings</h1>
        <p className="text-blue-200/70 text-xs font-medium mt-1">Manage account, security, and notification preferences</p>
      </div>

      <div className="p-4 md:p-8 max-w-5xl mx-auto w-full space-y-10 relative z-10">
        
        {/* Desktop Header (Hidden on Mobile) */}
        <div className="hidden lg:block">
          <h1 className="text-2xl font-bold text-[#1e293b]">Settings</h1>
          <p className="text-sm text-slate-500 font-medium">Manage account, security, and notification preferences</p>
        </div>

        {/* --- ACCOUNT SETTINGS SECTION --- */}
        <section className="space-y-4">
          <h3 className="text-xs font-black text-white/90 lg:text-[#1e293b] uppercase tracking-widest px-1">Account Settings</h3>
          <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-xl shadow-blue-900/5 md:shadow-sm space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <Building size={14} /> Business / Store Name
                </label>
                <input type="text" defaultValue="Adebayo Fashion Store" className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-[#1e293b] outline-none focus:ring-2 focus:ring-indigo-500/10" />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <Mail size={14} /> Registered Email Address
                </label>
                <input type="email" defaultValue="adebayo@fashionstore.com" disabled className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 text-sm font-bold text-slate-400 cursor-not-allowed" />
                <p className="text-[10px] font-medium text-slate-400 italic">Email address cannot be changed. Contact support if you need assistance.</p>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <Phone size={14} /> Phone Number
                </label>
                <input type="text" defaultValue="+234 803 456 7890" className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-[#1e293b] outline-none focus:ring-2 focus:ring-indigo-500/10" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <MapPin size={14} /> Business Address
                </label>
                <textarea rows={3} defaultValue="12, Montgomery Road, Yaba, Lagos State, Nigeria." className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-[#1e293b] outline-none focus:ring-2 focus:ring-indigo-500/10" />
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-[#19246a] text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-indigo-100 active:scale-95 transition-all">
                <Save size={16} /> Save Changes
              </button>
            </div>
          </div>
        </section>

        {/* --- SECURITY SETTINGS SECTION --- */}
        <section className="space-y-4">
          <h3 className="text-xs font-black text-[#1e293b] uppercase tracking-widest px-1">Security Settings</h3>
          <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm space-y-8">
            <div className="space-y-6">
              <h4 className="text-[11px] font-black text-[#1e293b] uppercase tracking-tighter">Change Password</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Current Password', state: showCurrentPassword, setter: setShowCurrentPassword },
                  { label: 'New Password', state: showNewPassword, setter: setShowNewPassword, hint: 'Password must be at least 8 characters long' },
                  { label: 'Confirm New Password', state: showConfirmPassword, setter: setShowConfirmPassword }
                ].map((field) => (
                  <div key={field.label} className={`space-y-2 ${field.label === 'New Password' ? 'md:col-span-1' : ''}`}>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{field.label}</label>
                    <div className="relative">
                      <input type={field.state ? "text" : "password"} placeholder={`Enter ${field.label.toLowerCase()}`} className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-[#1e293b] outline-none pr-12 focus:ring-2 focus:ring-indigo-500/10" />
                      <button type="button" onClick={() => field.setter(!field.state)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-400">
                        {field.state ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    {field.hint && <p className="text-[10px] font-medium text-slate-400 italic">{field.hint}</p>}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#19246a] text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-indigo-100 active:scale-95 transition-all">
                  <Lock size={16} /> Update Password
                </button>
                <button className="flex items-center justify-center gap-2 px-8 py-3.5 border border-red-100 text-red-500 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-50 active:scale-95 transition-all">
                  <LogOut size={16} /> Log out all devices
                </button>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
              <div>
                <h4 className="text-[11px] font-black text-[#1e293b] uppercase tracking-tighter">Two-Factor Authentication</h4>
                <p className="text-[11px] font-medium text-slate-400 mt-1">Add an extra layer of security to your account by requiring a verification code</p>
              </div>
              <button className="w-12 h-6 bg-slate-200 rounded-full relative transition-colors duration-200 focus:outline-none shrink-0">
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200" />
              </button>
            </div>

            <div className="space-y-4 pt-8 border-t border-slate-50">
              <h4 className="text-[11px] font-black text-[#1e293b] uppercase tracking-tighter">Last Login Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl flex items-start gap-4 border border-slate-100">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm"><Clock size={20} /></div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date & Time</p>
                    <p className="text-xs font-bold text-[#1e293b] mt-1">Feb 5, 2026 at 10:30 AM</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl flex items-start gap-4 border border-slate-100">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm"><MapPin size={20} /></div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Location</p>
                    <p className="text-xs font-bold text-[#1e293b] mt-1">Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl md:col-span-2 flex items-start gap-4 border border-slate-100">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm"><Monitor size={20} /></div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Device Information</p>
                    <p className="text-xs font-bold text-[#1e293b] mt-1">Chrome on Windows Desktop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- NOTIFICATION PREFERENCES --- */}
        <section className="space-y-4">
          <h3 className="text-xs font-black text-[#1e293b] uppercase tracking-widest px-1">Notification Preferences</h3>
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm divide-y divide-slate-50 overflow-hidden">
            {[
              { id: 'email', title: 'Email Notifications', desc: 'Receive order updates, payment confirmations, and account notifications', icon: Mail, active: true },
              { id: 'sms', title: 'SMS Notifications', desc: 'Get urgent updates and security alerts sent directly to your phone', icon: Smartphone, active: false },
              { id: 'app', title: 'In-App Notifications', desc: 'Show notifications within the dashboard for new messages and orders', icon: Bell, active: true }
            ].map((item) => (
              <div key={item.id} className="p-6 md:p-8 flex items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0"><item.icon size={20} /></div>
                  <div>
                    <h4 className="text-sm font-black text-[#1e293b]">{item.title}</h4>
                    <p className="text-[11px] font-medium text-slate-400 mt-1 max-w-md">{item.desc}</p>
                  </div>
                </div>
                <button className={`w-12 h-6 ${item.active ? 'bg-emerald-500' : 'bg-slate-200'} rounded-full relative transition-colors focus:outline-none shrink-0`}>
                  <div className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-all ${item.active ? 'right-1' : 'left-1'}`} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* --- PAYMENT & PAYOUT SETTINGS --- */}
        <section className="space-y-4">
          <h3 className="text-xs font-black text-[#1e293b] uppercase tracking-widest px-1">Payment & Payout Settings</h3>
          <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm space-y-8">
            <div className="space-y-4">
              <h4 className="text-[11px] font-black text-[#1e293b] uppercase tracking-tighter">Linked Bank Account</h4>
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-100 shadow-sm"><Building size={24} className="text-slate-300" /></div>
                  <div>
                    <p className="text-sm font-black text-[#1e293b]">Access Bank PLC</p>
                    <p className="text-[11px] font-bold text-slate-400 tracking-tight">0123456789</p>
                    <p className="text-[10px] font-medium text-slate-400 mt-1 italic">Account Name: Adebayo Fashion Store</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[10px] font-black uppercase tracking-widest shrink-0">Active</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-[11px] font-black text-[#1e293b] uppercase tracking-tighter">Payout Schedule</h4>
              <div className="relative">
                <select className="w-full px-4 py-4 rounded-xl border border-slate-200 bg-white text-sm font-bold text-[#1e293b] outline-none appearance-none cursor-pointer">
                  <option>Weekly</option>
                  <option>Daily</option>
                  <option>Monthly</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  <Clock size={18} />
                </div>
              </div>
              <p className="text-[10px] font-medium text-slate-400 italic">Frequency of receiving payouts from completed orders</p>
            </div>

            <div className="flex justify-end">
              <button className="w-full md:w-auto px-8 py-3.5 bg-[#19246a] text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-indigo-100 active:scale-95 transition-all">
                Update Payout Details
              </button>
            </div>
          </div>
        </section>

        {/* --- ACCOUNT MANAGEMENT --- */}
        <section className="space-y-4">
          <h3 className="text-xs font-black text-[#1e293b] uppercase tracking-widest px-1 text-red-500">Account Management</h3>
          <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm space-y-10">
            <div className="space-y-6">
              <div>
                <h4 className="text-[11px] font-black text-[#1e293b] uppercase tracking-tighter">Deactivate Account</h4>
                <p className="text-[11px] font-medium text-slate-400 mt-1">Temporarily disable your account. You can reactivate it at any time.</p>
              </div>
              <div className="bg-[#fffbeb] border border-amber-100 rounded-2xl p-4 flex items-start gap-3">
                <AlertTriangle className="text-amber-500 mt-0.5 shrink-0" size={18} />
                <div>
                  <p className="text-xs font-black text-amber-800 uppercase tracking-tight">Your store will be hidden from customers</p>
                  <p className="text-[11px] font-bold text-amber-700/80 leading-relaxed">Active orders will continue, but customers won't be able to place new orders until reactivation.</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="w-full md:w-auto px-8 py-3 border border-amber-200 text-amber-600 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-amber-50 active:scale-95 transition-all">
                  Deactivate Account
                </button>
              </div>
            </div>

            <div className="space-y-6 pt-10 border-t border-slate-100">
              <div>
                <h4 className="text-[11px] font-black text-[#1e293b] uppercase tracking-tighter">Request Account Deletion</h4>
                <p className="text-[11px] font-medium text-slate-400 mt-1">Permanently delete your account and all data. This cannot be undone.</p>
              </div>
              <div className="bg-[#fff1f2] border border-red-100 rounded-2xl p-4 flex items-start gap-3">
                <AlertTriangle className="text-red-500 mt-0.5 shrink-0" size={18} />
                <div>
                  <p className="text-xs font-black text-red-800 uppercase tracking-tight">This action is permanent and irreversible</p>
                  <p className="text-[11px] font-bold text-red-700/80 leading-relaxed">All products, orders, and history will be permanently deleted.</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="w-full md:w-auto px-8 py-3 border border-red-200 text-red-500 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-50 active:scale-95 transition-all">
                  Request Account Deletion
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}