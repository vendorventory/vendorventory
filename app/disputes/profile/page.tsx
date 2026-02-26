"use client";

import React from 'react';
import { 
  User, Mail, Phone, MapPin, 
  ShieldCheck, Edit3, Calendar, 
  Briefcase, Clock, TrendingUp 
} from 'lucide-react';

// Sidebar component imported from your established components folder
import { Sidebar } from '../components/Sidebar';

export default function DisputeAgentProfile() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* SIDEBAR NAVIGATION */}
      <Sidebar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24 lg:ml-[280px]">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#1e293b]">Profile</h1>
            <p className="text-sm font-bold text-slate-400 mt-1">Manage your personal information</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-200 bg-white text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 shadow-sm transition-all">
            <Edit3 size={14} /> Update Profile
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: PERSONAL INFORMATION */}
          <section className="lg:col-span-2 bg-white rounded-[32px] border border-slate-100 shadow-sm p-6 md:p-10 space-y-10">
            <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em]">Personal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-1.5">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</p>
                <p className="text-sm font-black text-[#1e293b]">Adebayo Olusola</p>
              </div>

              <div className="space-y-1.5">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Agent ID</p>
                <p className="text-sm font-black text-[#1e293b]">AGT-2024-001</p>
              </div>

              <div className="space-y-1.5">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</p>
                <p className="text-sm font-black text-[#1e293b]">a.olusola@vendorventory.com</p>
              </div>

              <div className="space-y-1.5">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone</p>
                <p className="text-sm font-black text-[#1e293b]">+234 803 456 7890</p>
              </div>

              <div className="space-y-1.5">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Assigned Region</p>
                <p className="text-sm font-black text-[#1e293b]">Lagos, Nigeria</p>
              </div>

              <div className="space-y-1.5">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Verification Status</p>
                <div className="flex items-center gap-2 text-emerald-500">
                  <ShieldCheck size={18} />
                  <p className="text-sm font-black">Verified Agent</p>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT COLUMN: STATS & PROGRESS */}
          <div className="space-y-6">
            
            {/* Membership Card */}
            <div className="bg-white border border-slate-100 p-8 rounded-[32px] shadow-sm space-y-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Member Since</p>
              <h3 className="text-lg font-black text-[#19246a]">January 15, 2024</h3>
            </div>

            {/* Performance Stats Card */}
            <div className="bg-white border border-slate-100 p-8 rounded-[32px] shadow-sm space-y-8">
              <h3 className="text-[11px] font-black text-[#19246a] uppercase tracking-[0.2em]">Performance Stats</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Cases Handled</p>
                    <p className="text-lg font-black text-[#1e293b] mt-1">487</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <Briefcase size={20} />
                  </div>
                </div>

                <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Avg Resolution Time</p>
                    <p className="text-lg font-black text-[#1e293b] mt-1">4.2 hours</p>
                  </div>
                  <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Success Rate</p>
                    <p className="text-lg font-black text-emerald-500 mt-1">94.2%</p>
                  </div>
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                    <TrendingUp size={20} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}