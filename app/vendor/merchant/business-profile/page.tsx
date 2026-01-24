"use client";

import React, { useState } from 'react';
import { 
  Building2, 
  FileText, 
  UserCheck, 
  CreditCard, 
  AlertCircle,
  ChevronRight,
  Upload,
  CheckCircle2,
  FileIcon,
  Info,
  Clock
} from 'lucide-react';

const steps = [
  { id: 1, label: 'Business Info', icon: Building2 },
  { id: 2, label: 'Documents', icon: FileText },
  { id: 3, label: 'Verification', icon: UserCheck },
  { id: 4, label: 'Bank Details', icon: CreditCard },
];

export default function MerchantBusinessProfile() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-6 md:space-y-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-xl md:text-2xl font-bold text-[#1e293b]">Business Verification (KYC)</h1>
        <p className="text-slate-500 text-xs md:text-sm font-medium">Complete verification to unlock payouts and full platform access</p>
      </div>

      {/* Alert */}
      <div className="bg-[#fff9eb] border border-[#ffecb3] p-3 md:p-4 rounded-xl flex items-start gap-3">
        <AlertCircle className="text-[#f59e0b] mt-0.5 shrink-0" size={18} />
        <div>
          <p className="text-[#92400e] font-bold text-sm leading-none">Payouts are currently locked</p>
          <p className="text-[#92400e]/80 text-[10px] md:text-[11px] mt-1.5 font-medium leading-normal">
            Complete and submit your KYC verification to unlock payout functionality and access all platform features.
          </p>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="relative flex justify-between items-center mb-8 md:mb-12 px-2 md:px-10">
        <div className="absolute top-5 md:top-6 left-0 w-full h-[1px] bg-slate-200 -z-0" />
        {steps.map((step, idx) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center flex-1">
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all ${
              isSubmitted || currentStep > step.id ? 'bg-[#22c55e] border-[#22c55e] text-white' :
              currentStep === step.id ? 'bg-[#19246a] border-[#19246a] text-white shadow-lg' :
              'bg-white border-slate-200 text-slate-300'
            }`}>
              {isSubmitted || currentStep > step.id ? <CheckCircle2 size={20} /> : <step.icon size={18} />}
            </div>
            <p className={`hidden sm:block text-[9px] md:text-[10px] font-bold mt-3 text-center uppercase tracking-tight ${
              isSubmitted || currentStep >= step.id ? 'text-[#1e293b]' : 'text-slate-400'
            }`}>
              {step.label}
            </p>
            {idx < steps.length - 1 && (
              <div className={`absolute top-5 md:top-6 left-[50%] w-full h-[2px] -z-10 ${
                isSubmitted || currentStep > step.id ? 'bg-[#22c55e]' : 'bg-slate-200'
              }`} />
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl md:rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Step 1: Business Information */}
        {currentStep === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="p-4 md:p-6 border-b border-slate-100 flex items-center gap-4">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0"><Building2 size={20} /></div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[#1e293b]">Business Information</h3>
                <p className="text-[10px] md:text-xs text-slate-500 font-medium leading-tight">Provide your registered business details as they appear on official documents</p>
              </div>
            </div>
            <div className="p-4 md:p-8 space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700">Business Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Adebayo Fashion Store" className="w-full px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 outline-none text-sm md:text-base" />
                  <p className="text-[10px] md:text-[11px] text-slate-400 font-medium">Must match the name on your CAC certificate</p>
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700">Business Type <span className="text-red-500">*</span></label>
                  <select className="w-full px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-indigo-500/20 outline-none appearance-none text-sm md:text-base">
                    <option>Select business type</option>
                    <option>Sole Proprietorship</option>
                    <option>Limited Liability Company</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700">CAC Registration Number <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="e.g., RC123456 or BN123456" className="w-full px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 outline-none text-sm md:text-base" />
                  <p className="text-[10px] md:text-[11px] text-slate-400 font-medium tracking-tight">Your Corporate Affairs Commission registration number</p>
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700">Business Address <span className="text-red-500">*</span></label>
                  <textarea rows={3} placeholder="Enter complete business address" className="w-full px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 outline-none resize-none text-sm md:text-base" />
                  <p className="text-[10px] md:text-[11px] text-slate-400 font-medium tracking-tight">Physical location of your business operations</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Business Documents */}
        {currentStep === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="p-4 md:p-6 border-b border-slate-100 flex items-center gap-4">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0"><FileText size={20} /></div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[#1e293b]">Business Documents</h3>
                <p className="text-[10px] md:text-xs text-slate-500 font-medium leading-tight">Upload clear copies of your business registration documents</p>
              </div>
            </div>
            <div className="p-4 md:p-8 space-y-6 md:space-y-8">
              <div className="space-y-3">
                <label className="text-xs md:text-sm font-bold text-slate-700">CAC Certificate <span className="text-red-500">*</span></label>
                <div className="border-2 border-emerald-500 border-dashed rounded-xl p-4 md:p-5 bg-emerald-50/30 flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                    <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 shrink-0"><FileIcon size={20} /></div>
                    <div className="overflow-hidden">
                      <p className="text-xs md:text-sm font-bold text-slate-800 truncate">CAC Certificate.pdf</p>
                      <p className="text-[10px] md:text-[11px] text-slate-400 font-medium">864.8 KB</p>
                    </div>
                  </div>
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                </div>
                <p className="text-[10px] md:text-[11px] text-slate-400 font-medium">Certificate of registration from Corporate Affairs Commission</p>
              </div>
              <div className="space-y-3">
                <label className="text-xs md:text-sm font-bold text-slate-700">CAC Status Report <span className="text-red-500">*</span></label>
                <div className="border-2 border-slate-200 border-dashed rounded-xl p-8 md:p-10 flex flex-col items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer group text-center">
                  <Upload className="text-slate-400 group-hover:text-[#19246a] mb-2" size={28} />
                  <p className="text-xs md:text-sm font-bold text-slate-800 tracking-tight">Upload CAC Status Report</p>
                  <p className="text-[9px] md:text-[11px] text-slate-400 mt-1 uppercase font-bold tracking-widest">PDF, JPG, or PNG (max 5MB)</p>
                </div>
                <p className="text-[10px] md:text-[11px] text-slate-400 font-medium tracking-tight">Recent status report from CAC confirming business is active</p>
              </div>
              <div className="space-y-3">
                <label className="text-xs md:text-sm font-bold text-slate-700">Business Address Proof <span className="text-slate-400 font-normal">(Optional)</span></label>
                <div className="border-2 border-slate-200 border-dashed rounded-xl p-8 md:p-10 flex flex-col items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer group text-center">
                  <Upload className="text-slate-400 group-hover:text-[#19246a] mb-2" size={28} />
                  <p className="text-xs md:text-sm font-bold text-slate-800 tracking-tight">Upload Address Proof</p>
                  <p className="text-[9px] md:text-[11px] text-slate-400 mt-1 uppercase font-bold tracking-widest">PDF, JPG, or PNG (max 5MB)</p>
                </div>
                <p className="text-[10px] md:text-[11px] text-slate-400 font-medium tracking-tight">Utility bill or lease agreement showing business address</p>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Owner / Director Verification */}
        {currentStep === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="p-4 md:p-6 border-b border-slate-100 flex items-center gap-4">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0"><UserCheck size={20} /></div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[#1e293b]">Owner / Director Verification</h3>
                <p className="text-[10px] md:text-xs text-slate-500 font-medium leading-tight">Verify the primary business owner or authorized director</p>
              </div>
            </div>
            <div className="p-4 md:p-8 space-y-4 md:space-y-6">
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold text-slate-700">Full Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter full name as on government ID" className="w-full px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 outline-none text-sm md:text-base" />
                <p className="text-[10px] md:text-[11px] text-slate-400 font-medium">Name must match government-issued ID</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" placeholder="+234 800 000 0000" className="w-full px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 outline-none text-sm md:text-base" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="owner@business.com" className="w-full px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 outline-none text-sm md:text-base" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs md:text-sm font-bold text-slate-700">Government-Issued ID <span className="text-red-500">*</span></label>
                <div className="border-2 border-slate-200 border-dashed rounded-xl p-8 md:p-10 flex flex-col items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer group text-center">
                  <Upload className="text-slate-400 group-hover:text-[#19246a] mb-2" size={28} />
                  <p className="text-xs md:text-sm font-bold text-slate-800 tracking-tight">Upload Government ID</p>
                  <p className="text-[9px] md:text-[11px] text-slate-400 mt-1 uppercase font-bold tracking-widest">PDF, JPG, or PNG (max 5MB)</p>
                </div>
                <p className="text-[10px] md:text-[11px] text-slate-400 font-medium">Valid ID: National ID, Driver's License, International Passport, or Voter's Card</p>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Bank Account Details */}
        {currentStep === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="p-4 md:p-6 border-b border-slate-100 flex items-center gap-4">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0"><CreditCard size={20} /></div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[#1e293b]">Bank Account Details</h3>
                <p className="text-[10px] md:text-xs text-slate-500 font-medium leading-tight">This account will receive all your platform payouts</p>
              </div>
            </div>
            <div className="p-4 md:px-8 md:mt-6">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                <Info className="text-indigo-600 shrink-0 mt-0.5" size={18} />
                <div className="space-y-1 overflow-hidden">
                  <p className="text-xs md:text-sm font-bold text-slate-800 truncate">Important: Bank Account Verification</p>
                  <p className="text-[10px] md:text-xs text-slate-600 font-medium leading-normal">Account name must match your business name or authorized signatory. We'll verify this information before approval.</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:p-8 space-y-4 md:space-y-6">
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold text-slate-700">Bank Name <span className="text-red-500">*</span></label>
                <select className="w-full px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-indigo-500/20 outline-none appearance-none text-sm md:text-base">
                  <option>Select your bank</option>
                  <option>Access Bank</option>
                  <option>GTBank</option>
                  <option>Zenith Bank</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold text-slate-700">Account Number <span className="text-red-500">*</span></label>
                <input type="text" maxLength={10} placeholder="0000000000" className="w-full px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 outline-none text-sm md:text-base" />
              </div>
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold text-slate-700">Account Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Account name will be verified" disabled className="w-full px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-slate-100 bg-slate-50 text-slate-400 font-medium italic text-sm md:text-base" />
                <p className="text-[10px] md:text-[11px] text-slate-400 font-medium">Enter account name exactly as registered with your bank</p>
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        {!isSubmitted && (
          <div className="p-4 md:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
            <button onClick={prevStep} disabled={currentStep === 1} className={`flex-1 sm:flex-none px-4 md:px-6 py-2.5 rounded-lg md:rounded-xl border font-bold text-xs md:text-sm transition-all ${currentStep === 1 ? 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 shadow-sm'}`}>
              Previous Step
            </button>
            {currentStep === steps.length ? (
              <button onClick={handleSubmit} className="flex-1 sm:flex-none px-6 md:px-10 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-[#22c55e] text-white font-bold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all active:scale-95 shadow-lg shadow-emerald-100"><CheckCircle2 size={18} /> Submit for Verification</button>
            ) : (
              <button onClick={nextStep} className="flex-1 sm:flex-none px-6 md:px-10 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-[#19246a] text-white font-bold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-indigo-900 transition-all active:scale-95 shadow-lg shadow-indigo-100">Next Step <ChevronRight size={18} /></button>
            )}
          </div>
        )}
      </div>

      {/* Review Box */}
      {isSubmitted && (
        <div className="bg-[#fff9eb] border border-[#ffecb3] p-6 md:p-8 rounded-xl md:rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="bg-[#f59e0b]/10 p-3 rounded-full text-[#f59e0b] shrink-0"><Clock size={24} /></div>
            <div className="space-y-2 overflow-hidden">
              <h3 className="text-base md:text-lg font-bold text-[#92400e]">Application Under Review</h3>
              <div className="text-[11px] md:text-sm text-[#92400e]/80 space-y-3 md:space-y-4 max-w-2xl font-medium leading-relaxed">
                <p>Your KYC application is currently being reviewed by our verification team. This typically takes 1-3 business days. You'll receive an email notification once the review is complete.</p>
                <p>During this time, you can continue to access your dashboard, but payout functionality remains locked until verification is approved.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}