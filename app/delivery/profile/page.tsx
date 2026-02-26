"use client";

import React from 'react';
import { 
  Building2, Globe, Mail, Phone, MapPin, 
  Edit3, ShieldCheck, CheckCircle2, Clock, 
  FileText, Landmark, User, ChevronRight,
  ShieldAlert, Activity, ExternalLink
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';

export default function DeliveryProfile() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24 lg:ml-[280px]">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#1e293b]">Profile & Verification</h1>
            <p className="text-sm font-bold text-slate-400 mt-1">Manage your company profile and verification status.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-200 bg-white text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 shadow-sm transition-all">
              <Edit3 size={14} /> Edit Profile
            </button>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600">
               <ShieldCheck size={16} />
               <span className="text-[10px] font-black uppercase tracking-widest">Verified</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: COMPANY & BANK INFO */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Company Information */}
            <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6 md:p-8 space-y-8">
              <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em] flex items-center gap-2">
                Company Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Company Name</p>
                  <p className="text-sm font-black text-[#1e293b] bg-slate-50 p-3 rounded-xl border border-slate-100">SwiftLogistics Nigeria</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">CAC Registration Number</p>
                  <p className="text-sm font-black text-[#1e293b] bg-slate-50 p-3 rounded-xl border border-slate-100">RC 1234567</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Tax Identification Number (TIN)</p>
                  <p className="text-sm font-black text-[#1e293b] bg-slate-50 p-3 rounded-xl border border-slate-100">TIN-12345678-0001</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Registered Address</p>
                  <p className="text-sm font-bold text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 leading-relaxed">
                    23 Marina Street, Lagos Island, Lagos State.
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Company Email</p>
                  <div className="flex items-center gap-2 text-sm font-black text-[#1e293b] bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <Mail size={14} className="text-slate-400" /> ops@swiftlogistics.ng
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Company Phone</p>
                  <div className="flex items-center gap-2 text-sm font-black text-[#1e293b] bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <Phone size={14} className="text-slate-400" /> +234 803 456 7890
                  </div>
                </div>
              </div>
            </section>

            {/* Bank Details (For Payouts) */}
            <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6 md:p-8 space-y-6">
              <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em]">Bank Details (For Payouts)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                      <p className="text-[10px] font-black text-slate-400 uppercase">Bank Name</p>
                      <p className="text-xs font-black text-[#1e293b]">Zenith Bank</p>
                   </div>
                   <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                      <p className="text-[10px] font-black text-slate-400 uppercase">Account Number</p>
                      <p className="text-xs font-black text-[#1e293b]">1023****89</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                      <p className="text-[10px] font-black text-slate-400 uppercase">Account Name</p>
                      <p className="text-xs font-black text-[#1e293b]">SwiftLogistics Nigeria</p>
                   </div>
                   <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                      <p className="text-[10px] font-black text-slate-400 uppercase">Verification Status</p>
                      <p className="text-[10px] font-black text-emerald-500 uppercase flex items-center gap-1.5">
                        <CheckCircle2 size={12} /> Verified
                      </p>
                   </div>
                </div>
              </div>
              <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest border border-indigo-100 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
                Update Bank Details
              </button>
            </section>

            {/* Verification Documents */}
            <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6 md:p-8 space-y-6">
              <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em]">Verification Documents</h2>
              <div className="space-y-3">
                {[
                  { name: 'CAC Certificate', file: 'swift-logistics-cac-certificate.pdf', date: 'Uploaded: 2025-01-10', status: 'Approved', color: 'bg-emerald-50 text-emerald-600' },
                  { name: 'Director ID', file: 'director-national-id.pdf', date: 'Uploaded: 2025-01-10', status: 'Approved', color: 'bg-emerald-50 text-emerald-600' },
                  { name: 'Company Utility Bill (Proof of Address)', file: 'utility-bill-jan-2025.pdf', date: 'Uploaded: 2025-01-15', status: 'Approved', color: 'bg-emerald-50 text-emerald-600' },
                  { name: 'Tax Clearance Certificate (Optional)', file: 'tax-clearance-2024.pdf', date: 'Uploaded: 2025-01-20', status: 'Pending', color: 'bg-amber-50 text-amber-600' },
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-slate-50/50 border border-slate-100 rounded-2xl group hover:border-indigo-100 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 shadow-sm transition-colors">
                        <FileText size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] font-black text-[#1e293b]">{doc.name}</p>
                        <p className="text-[9px] font-bold text-slate-400 mt-0.5">{doc.file} • {doc.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-tighter ${doc.color}`}>
                        {doc.status}
                      </span>
                      <button className="text-slate-300 hover:text-indigo-600"><ExternalLink size={16} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: ACCOUNT STATUS & PROGRESS */}
          <div className="space-y-6">
            
            {/* Account Status Sidebar */}
            <div className="bg-white border border-slate-100 p-8 rounded-[32px] shadow-sm space-y-8">
              <div>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Account Status</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-[11px] font-bold text-slate-500">Account Status</p>
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-md text-[9px] font-black uppercase flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-emerald-600" /> Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[11px] font-bold text-slate-500">Delivery Assignment</p>
                    <span className="text-[9px] font-black text-emerald-500 uppercase flex items-center gap-1.5"><CheckCircle2 size={12} /> Enabled</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[11px] font-bold text-slate-500">Withdrawal Access</p>
                    <span className="text-[9px] font-black text-emerald-500 uppercase flex items-center gap-1.5"><CheckCircle2 size={12} /> Enabled</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Verification Progress</h3>
                <div className="space-y-6 relative">
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-50" />
                  {[
                    { label: 'Company Profile', status: 'Complete' },
                    { label: 'Bank Details', status: 'Verified' },
                    { label: 'KYC Documents', status: 'Verified' },
                    { label: 'Representative', status: 'Verified' }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4 relative z-10">
                      <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center border-2 border-white shadow-sm"><CheckCircle2 size={8} /></div>
                      <div className="flex-1 flex justify-between">
                         <p className="text-[11px] font-bold text-slate-700">{step.label}</p>
                         <p className="text-[9px] font-black text-slate-300 uppercase">{step.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Snapshot */}
            <div className="bg-[#19246a] p-8 rounded-[32px] text-white space-y-6 overflow-hidden relative">
              <Activity className="absolute -bottom-4 -right-4 w-32 h-32 text-white/5 -rotate-12" />
              <div className="relative">
                <p className="text-[10px] font-black text-indigo-200 uppercase tracking-widest">Partner Since</p>
                <h4 className="text-sm font-bold mt-1">January 2025</h4>
              </div>
              <div className="grid grid-cols-2 gap-4 relative">
                <div>
                  <p className="text-[9px] font-black text-indigo-300 uppercase">Total Deliveries</p>
                  <p className="text-xl font-black mt-1">2,847</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-indigo-300 uppercase">Success Rate</p>
                  <p className="text-xl font-black text-emerald-400 mt-1">98.5%</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}