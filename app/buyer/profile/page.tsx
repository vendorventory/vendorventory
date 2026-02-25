"use client";

import React, { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, Edit3, 
  ShieldCheck, ShieldAlert, Zap, 
  TrendingUp, FileText, Camera, 
  Calendar, Lock, Smartphone, LogOut,
  Upload, CheckCircle2, Clock, Eye
} from 'lucide-react';

type KYCStatus = 'unverified' | 'step1' | 'step2' | 'step3' | 'step4' | 'pending' | 'verified';

export default function BuyerProfile() {
  const [kycStatus, setKycStatus] = useState<KYCStatus>('unverified');

  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      
      {/* HEADER AREA */}
      <div>
        <h1 className="text-2xl font-black text-[#1e293b]">Profile & KYC</h1>
        <p className="text-sm font-bold text-slate-400 mt-1">Manage your personal information and verification status.</p>
      </div>

      {/* PERSONAL INFORMATION (Static across all states) */}
      <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 border-b border-slate-50 flex items-center justify-between">
          <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em]">Personal Information</h2>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-100 text-[10px] font-black text-slate-500 uppercase hover:bg-slate-50 transition-all">
            <Edit3 size={14} /> Edit
          </button>
        </div>
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input readOnly value="Chioma Nwosu" className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 outline-none" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input readOnly value="chioma.nwosu@example.com" className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-400 outline-none" />
            </div>
          </div>
        </div>
      </section>

      {/* --- DYNAMIC KYC SECTION --- */}
      
      {/* STATE 1: UNVERIFIED */}
      {kycStatus === 'unverified' && (
        <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6 md:p-8 space-y-8 animate-in fade-in duration-500">
          <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em]">KYC Status</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-[24px] p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm shrink-0">
              <ShieldAlert size={28} />
            </div>
            <div className="space-y-1">
              <span className="px-3 py-1 bg-slate-200 text-slate-500 rounded-full text-[9px] font-black uppercase tracking-widest">Not Verified</span>
              <h3 className="text-lg font-black text-[#1e293b] mt-2">Your identity is not verified yet.</h3>
              <p className="text-sm font-bold text-slate-400">Complete verification to unlock secure payments and higher protection.</p>
            </div>
            <button 
              onClick={() => setKycStatus('step1')}
              className="md:ml-auto bg-[#19246a] text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-indigo-100 hover:bg-indigo-900 transition-all"
            >
              <ShieldCheck size={16} /> Start Verification
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {[
              { label: 'Safer Transactions', sub: 'Enhanced escrow protection', icon: ShieldCheck, color: 'text-emerald-500', bg: 'bg-emerald-50' },
              { label: 'Faster Refunds', sub: 'Priority processing', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
              { label: 'Better Protection', sub: 'Dispute resolution support', icon: ShieldAlert, color: 'text-blue-500', bg: 'bg-blue-50' },
              { label: 'Higher Trust', sub: 'Confidence with vendors', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50' }
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className={`w-10 h-10 ${benefit.bg} rounded-xl flex items-center justify-center ${benefit.color} shrink-0`}><benefit.icon size={18} /></div>
                <div className="space-y-0.5">
                  <p className="text-[11px] font-black text-[#1e293b]">{benefit.label}</p>
                  <p className="text-[10px] font-bold text-slate-400">{benefit.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* STATE 2: STEP-BY-STEP VERIFICATION */}
      {(kycStatus.startsWith('step')) && (
        <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6 md:p-8 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em]">KYC Verification</h2>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className={`h-1 w-12 rounded-full transition-colors ${kycStatus === `step${s}` ? 'bg-emerald-500' : 'bg-slate-100'}`} />
              ))}
            </div>
          </div>

          {kycStatus === 'step1' && (
            <div className="space-y-6">
              <h3 className="text-sm font-black text-[#1e293b]">Step 1: Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input placeholder="Enter full name" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm font-bold" />
                <input type="date" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm font-bold" />
              </div>
              <button onClick={() => setKycStatus('step2')} className="bg-[#19246a] text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase">Continue</button>
            </div>
          )}

          {kycStatus === 'step2' && (
            <div className="space-y-6">
              <h3 className="text-sm font-black text-[#1e293b]">Step 2: Upload ID Document</h3>
              <div className="border-2 border-dashed border-slate-100 rounded-3xl p-12 text-center space-y-4 hover:border-indigo-200 transition-colors cursor-pointer">
                <Upload className="mx-auto text-slate-300" size={32} />
                <p className="text-xs font-bold text-slate-400">Click to upload front of ID</p>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setKycStatus('step1')} className="px-8 py-3 rounded-xl border border-slate-100 font-black text-[10px] uppercase">Back</button>
                <button onClick={() => setKycStatus('step3')} className="bg-[#19246a] text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase">Continue</button>
              </div>
            </div>
          )}

          {kycStatus === 'step3' && (
            <div className="space-y-6 text-center">
              <h3 className="text-sm font-black text-[#1e293b] text-left">Step 3: Selfie / Face Capture</h3>
              <div className="w-48 h-48 bg-slate-50 rounded-full mx-auto flex items-center justify-center border-4 border-white shadow-lg">
                <Camera size={48} className="text-slate-300" />
              </div>
              <p className="text-xs font-bold text-slate-400">Ensure your face is well-lit and clearly visible.</p>
              <div className="flex gap-4 justify-center">
                <button onClick={() => setKycStatus('step2')} className="px-8 py-3 rounded-xl border border-slate-100 font-black text-[10px] uppercase">Back</button>
                <button onClick={() => setKycStatus('step4')} className="bg-[#19246a] text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase">Continue</button>
              </div>
            </div>
          )}

          {kycStatus === 'step4' && (
            <div className="space-y-6">
              <h3 className="text-sm font-black text-[#1e293b]">Step 4: Review & Submit</h3>
              <div className="bg-slate-50 p-6 rounded-2xl space-y-4">
                <div className="flex justify-between border-b border-slate-200 pb-2"><span className="text-[10px] font-black text-slate-400 uppercase">Full Name</span><span className="text-xs font-bold">Chioma Nwosu</span></div>
                <div className="flex justify-between border-b border-slate-200 pb-2"><span className="text-[10px] font-black text-slate-400 uppercase">ID Type</span><span className="text-xs font-bold">National ID Card</span></div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setKycStatus('step3')} className="px-8 py-3 rounded-xl border border-slate-100 font-black text-[10px] uppercase">Back</button>
                <button onClick={() => setKycStatus('pending')} className="bg-emerald-500 text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase shadow-lg shadow-emerald-100">Submit for Verification</button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* STATE 3: PENDING REVIEW */}
      {kycStatus === 'pending' && (
        <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6 md:p-8 space-y-8 animate-in fade-in duration-500">
          <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em]">KYC Status</h2>
          <div className="bg-amber-50/50 border border-amber-200 rounded-[24px] p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm shrink-0">
              <Clock size={28} />
            </div>
            <div className="space-y-1">
              <span className="px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-[9px] font-black uppercase tracking-widest">Pending Review</span>
              <h3 className="text-lg font-black text-[#1e293b] mt-2">Your documents have been submitted.</h3>
              <p className="text-sm font-bold text-slate-400">Verification usually takes 24-48 hours.</p>
            </div>
            <button onClick={() => setKycStatus('verified')} className="md:ml-auto opacity-0 pointer-events-none">Placeholder</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-slate-100 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="text-slate-300" size={20} />
                <div><p className="text-[10px] font-black text-slate-400 uppercase">ID Document</p><p className="text-xs font-bold">national_id_front.jpg</p></div>
              </div>
              <Eye size={16} className="text-slate-300" />
            </div>
          </div>
        </section>
      )}

      {/* STATE 4: VERIFIED */}
      {kycStatus === 'verified' && (
        <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6 md:p-8 space-y-8 animate-in zoom-in-95 duration-500">
          <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em]">KYC Status</h2>
          <div className="bg-emerald-50 border border-emerald-100 rounded-[24px] p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm shrink-0">
              <CheckCircle2 size={28} />
            </div>
            <div className="space-y-1">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-[9px] font-black uppercase tracking-widest">Verified</span>
              <h3 className="text-lg font-black text-emerald-900 mt-2">Your identity has been verified!</h3>
              <p className="text-sm font-bold text-emerald-700/60">Your account is fully verified and you have full access to all features.</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl flex justify-between items-center">
            <div><p className="text-[10px] font-black text-slate-400 uppercase">Verifier Level</p><p className="text-sm font-black text-[#19246a]">Level 2 - Full Verification</p></div>
            <div className="text-right"><p className="text-[10px] font-black text-slate-400 uppercase">Approved Date</p><p className="text-sm font-black text-slate-700">2025-02-14</p></div>
          </div>
        </section>
      )}

      {/* SECURITY SNAPSHOT (Static) */}
      <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6 md:p-8 space-y-8">
        <h2 className="text-xs font-black text-[#1e293b] uppercase tracking-[0.2em]">Security Snapshot</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400"><Lock size={18} /></div>
              <div><p className="text-[11px] font-black text-[#1e293b]">Password</p><p className="text-[10px] font-bold text-slate-400">Last updated: 2025-01-15</p></div>
            </div>
            <button className="px-4 py-2 rounded-lg border border-slate-200 text-[9px] font-black text-slate-500 uppercase">Change</button>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-500"><Smartphone size={18} /></div>
              <div><p className="text-[11px] font-black text-[#1e293b]">2FA</p><p className="text-[10px] font-bold text-emerald-500">Enabled</p></div>
            </div>
            <button className="px-4 py-2 rounded-lg border border-slate-200 text-[9px] font-black text-slate-500 uppercase">Manage</button>
          </div>
        </div>
        <button className="w-full bg-[#19246a] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3">
          <Smartphone size={18} /> Manage Security Settings
        </button>
      </section>

      <div className="flex justify-center pt-8 border-t border-slate-100">
        <button className="flex items-center gap-2 text-[10px] font-black text-red-400 uppercase tracking-widest hover:text-red-600 transition-colors">
          <LogOut size={16} /> Delete Account
        </button>
      </div>
    </main>
  );
}