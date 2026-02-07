"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building, MapPin, Mail, Phone, 
  ChevronRight, ArrowLeft, Building2,
  Briefcase, Info
} from 'lucide-react';

export default function MerchantUpgrade() {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState('business_name');
  const [cacStatus, setCacStatus] = useState('yes');

  // Form State for Validation
  const [formData, setFormData] = useState({
    businessName: '',
    businessAddress: '',
    businessEmail: '',
    businessPhone: ''
  });

  // Check if all required fields are filled
  const isFormValid = 
    formData.businessName.trim() !== '' &&
    formData.businessAddress.trim() !== '' &&
    formData.businessEmail.trim() !== '' &&
    formData.businessPhone.trim() !== '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="p-4 md:p-10 max-w-5xl mx-auto w-full space-y-6 md:space-y-8 pb-24">
      {/* --- BACK LINK --- */}
      <Link 
        href="/vendor/individual/dashboard" 
        className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#19246a] transition-colors group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </Link>

      {/* --- PROGRESS INDICATOR (Column on Mobile, Row on Desktop) --- */}
      <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center max-w-2xl mx-auto mb-8 md:mb-12 gap-4 sm:gap-0">
        {/* Horizontal Line (Only visible on desktop) */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0 hidden sm:block" />
        
        {[
          { num: 1, label: 'Business Info' },
          { num: 2, label: 'KYC Documents' },
          { num: 3, label: 'Review' }
        ].map((s) => (
          <div key={s.num} className="relative z-10 flex items-center gap-3 bg-slate-50 pr-4 shrink-0">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-colors ${
              step >= s.num ? 'bg-[#19246a] text-white' : 'bg-slate-200 text-slate-500'
            }`}>
              {s.num}
            </div>
            <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-widest ${
              step >= s.num ? 'text-[#19246a]' : 'text-slate-400'
            }`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* --- PAGE HEADER --- */}
      <div className="space-y-1 md:space-y-2">
        <h1 className="text-xl md:text-2xl font-black text-[#1e293b]">Merchant Account Information</h1>
        <p className="text-xs md:text-sm font-bold text-slate-400">Please provide your business details to upgrade</p>
      </div>

      <div className="space-y-6 md:space-y-8">
        {/* Business Type Selection */}
        <section className="bg-white p-5 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-[10px] md:text-xs font-black text-[#1e293b] uppercase tracking-widest px-1">Business Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              { id: 'business_name', label: 'Business Name', sub: 'Individual/Sole Trade', icon: Building },
              { id: 'registered_company', label: 'Registered Company', sub: 'CAC Registered', icon: Building2 }
            ].map((type) => (
              <div 
                key={type.id}
                onClick={() => setBusinessType(type.id)}
                className={`p-4 md:p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-4 ${
                  businessType === type.id ? 'border-[#19246a] bg-indigo-50/20' : 'border-slate-50 hover:border-slate-100'
                }`}
              >
                <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  businessType === type.id ? 'bg-[#19246a] text-white' : 'bg-slate-50 text-slate-400'
                }`}>
                  <type.icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs md:text-sm font-black text-[#1e293b] truncate">{type.label}</p>
                  <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase mt-0.5">{type.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Primary Business Details Section */}
        <section className="bg-white p-5 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-[10px] md:text-xs font-black text-[#1e293b] uppercase tracking-widest px-1">Business Details</h3>
          <div className="grid grid-cols-1 gap-5">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <Building size={14} /> Business Name <span className="text-red-500">*</span>
              </label>
              <input 
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                type="text" 
                placeholder="Enter your business name" 
                className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-[#1e293b] outline-none focus:ring-2 focus:ring-indigo-500/10 transition-all" 
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <MapPin size={14} /> Business Address <span className="text-red-500">*</span>
              </label>
              <textarea 
                name="businessAddress"
                value={formData.businessAddress}
                onChange={handleInputChange}
                rows={3} 
                placeholder="Enter your full business address" 
                className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-[#1e293b] outline-none focus:ring-2 focus:ring-indigo-500/10 transition-all" 
              />
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="bg-white p-5 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-[10px] md:text-xs font-black text-[#1e293b] uppercase tracking-widest px-1">Contact Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <Mail size={14} /> Business Email <span className="text-red-500">*</span>
              </label>
              <input 
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleInputChange}
                type="email" 
                placeholder="business@example.com" 
                className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-[#1e293b] outline-none focus:ring-2 focus:ring-indigo-500/10" 
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <Phone size={14} /> Phone Number <span className="text-red-500">*</span>
              </label>
              <input 
                name="businessPhone"
                value={formData.businessPhone}
                onChange={handleInputChange}
                type="text" 
                placeholder="+234 XXX XXX XXXX" 
                className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-[#1e293b] outline-none focus:ring-2 focus:ring-indigo-500/10" 
              />
            </div>
          </div>
        </section>

        {/* CAC Registration Section */}
        <section className="bg-white p-5 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-[10px] md:text-xs font-black text-[#1e293b] uppercase tracking-widest px-1">CAC Registration</h3>
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase">Is your business CAC registered?</p>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {['Yes', 'No', 'Pending'].map((opt) => (
                  <button 
                    key={opt}
                    type="button"
                    onClick={() => setCacStatus(opt.toLowerCase())}
                    className={`flex-1 min-w-[80px] py-2.5 md:py-3 rounded-xl text-[11px] md:text-xs font-bold transition-all border ${
                      cacStatus === opt.toLowerCase() ? 'bg-[#19246a] text-white border-[#19246a]' : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            
            {cacStatus === 'yes' && (
              <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="flex items-center gap-2 text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <Briefcase size={14} /> Registration Number
                </label>
                <input type="text" placeholder="RC123456" className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-[#1e293b] outline-none focus:ring-2 focus:ring-indigo-500/10" />
              </div>
            )}

            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4 flex items-start gap-3">
              <Info className="text-blue-500 mt-0.5 shrink-0" size={16} />
              <p className="text-[10px] md:text-[11px] font-bold text-blue-800/80 leading-relaxed">
                Note: CAC registration is not required at this stage. You can provide it later.
              </p>
            </div>
          </div>
        </section>

        {/* --- PAGE ACTIONS --- */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 md:gap-4 pt-4 md:pt-6">
          <Link href="/vendor/individual/dashboard" className="w-full sm:w-auto">
            <button className="w-full px-10 py-4 rounded-2xl font-black text-xs text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-all">
              Cancel
            </button>
          </Link>
          
          {isFormValid ? (
            <Link href="/vendor/individual/upgrade/kyc" className="w-full sm:w-auto">
              <button className="w-full bg-[#19246a] text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-indigo-900 transition-all shadow-xl shadow-indigo-100 active:scale-95">
                Continue <ChevronRight size={18} />
              </button>
            </Link>
          ) : (
            <button 
              disabled 
              className="w-full sm:w-auto bg-slate-200 text-slate-400 px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 cursor-not-allowed"
            >
              Continue <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>
    </main>
  );
}