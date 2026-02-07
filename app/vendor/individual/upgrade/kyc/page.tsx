"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, CheckCircle2, Upload, FileText, 
  CreditCard, Info, ChevronRight, RefreshCcw, X, Building, User
} from 'lucide-react';

export default function KYCDocumentSubmission() {
  // State for tracking uploaded files and bank details
  const [idFile, setIdFile] = useState<File | null>(null);
  const [businessFile, setBusinessFile] = useState<File | null>(null);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  
  // Bank Information State
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    bankName: '',
    accountName: ''
  });
  const [bankAdded, setBankAdded] = useState(false);

  // Refs for hidden file inputs
  const idInputRef = useRef<HTMLInputElement>(null);
  const businessInputRef = useRef<HTMLInputElement>(null);

  // Validation: ID and Bank Details are required
  const isComplete = idFile !== null && bankAdded;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (f: File | null) => void) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0]);
    }
  };

  const handleSaveBank = (e: React.FormEvent) => {
    e.preventDefault();
    if (bankDetails.accountNumber && bankDetails.bankName && bankDetails.accountName) {
      setBankAdded(true);
      setIsBankModalOpen(false);
    }
  };

  return (
    <main className="p-4 md:p-10 max-w-5xl mx-auto w-full space-y-6 md:space-y-8 pb-24 relative">
      {/* Back Link */}
      <Link href="/vendor/individual/upgrade" className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#19246a] transition-colors group">
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </Link>

      {/* --- PROGRESS INDICATOR (Responsive Column/Row) --- */}
      <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center max-w-2xl mx-auto mb-8 md:mb-12 gap-4 sm:gap-0">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0 hidden sm:block" />
        
        <div className="relative z-10 flex items-center gap-3 bg-slate-50 pr-4">
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
            <CheckCircle2 size={16} />
          </div>
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-emerald-500">Business Info</span>
        </div>
        <div className="relative z-10 flex items-center gap-3 bg-slate-50 px-4">
          <div className="w-8 h-8 rounded-full bg-[#19246a] text-white flex items-center justify-center text-xs font-black">2</div>
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-[#19246a]">KYC Documents</span>
        </div>
        <div className="relative z-10 flex items-center gap-3 bg-slate-50 pl-4">
          <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-black">3</div>
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-400">Review</span>
        </div>
      </div>

      <div className="space-y-1 md:space-y-2">
        <h1 className="text-xl md:text-2xl font-black text-[#1e293b]">KYC Document Submission</h1>
        <p className="text-xs md:text-sm font-bold text-slate-400">Upload documents to verify your merchant account</p>
      </div>

      <div className="space-y-4 md:space-y-6">
        <input type="file" ref={idInputRef} className="hidden" onChange={(e) => handleFileChange(e, setIdFile)} accept=".jpg,.png,.pdf" />
        <input type="file" ref={businessInputRef} className="hidden" onChange={(e) => handleFileChange(e, setBusinessFile)} accept=".jpg,.png,.pdf" />

        {/* Valid ID Card */}
        <div className={`bg-white p-5 md:p-8 rounded-[24px] md:rounded-[32px] border ${idFile ? 'border-emerald-100 shadow-emerald-50/50' : 'border-slate-100'} shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 relative transition-all`}>
          {idFile && <CheckCircle2 className="absolute top-4 right-4 md:top-6 md:right-6 text-emerald-500" size={20} />}
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 md:w-12 md:h-12 ${idFile ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400'} rounded-xl md:rounded-2xl flex items-center justify-center shrink-0`}>
              <FileText size={20} className="md:w-6 md:h-6" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-black text-[#1e293b]">Valid ID <span className="text-red-500">*</span></h3>
              <p className="text-[10px] md:text-[11px] font-bold text-slate-400 mt-0.5 truncate">{idFile ? idFile.name : "National ID, Passport, or Driver's License"}</p>
            </div>
          </div>
          <button 
            onClick={() => idInputRef.current?.click()}
            className={`w-full md:w-auto px-6 py-3 rounded-xl md:rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 ${idFile ? 'bg-white border border-slate-200 text-slate-600' : 'bg-[#19246a] text-white'}`}
          >
            {idFile ? <><RefreshCcw size={14} /> Re-upload</> : <><Upload size={14} /> Upload ID</>}
          </button>
        </div>

        {/* Business Proof Card */}
        <div className={`bg-white p-5 md:p-8 rounded-[24px] md:rounded-[32px] border ${businessFile ? 'border-emerald-100' : 'border-slate-100'} shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 relative transition-all`}>
          {businessFile && <CheckCircle2 className="absolute top-4 right-4 md:top-6 md:right-6 text-emerald-500" size={20} />}
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 md:w-12 md:h-12 ${businessFile ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400'} rounded-xl md:rounded-2xl flex items-center justify-center shrink-0`}>
              <FileText size={20} className="md:w-6 md:h-6" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-black text-[#1e293b]">Business Proof (Optional)</h3>
              <p className="text-[10px] md:text-[11px] font-bold text-slate-400 mt-0.5 truncate">{businessFile ? businessFile.name : "CAC, Reg, or Utility Bill"}</p>
            </div>
          </div>
          <button 
            onClick={() => businessInputRef.current?.click()}
            className="w-full md:w-auto bg-white border border-slate-200 text-slate-600 px-6 py-3 rounded-xl md:rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            {businessFile ? <><RefreshCcw size={14} /> Re-upload</> : <><Upload size={14} /> Upload Document</>}
          </button>
        </div>

        {/* Bank Account Card */}
        <div className={`bg-white p-5 md:p-8 rounded-[24px] md:rounded-[32px] border ${bankAdded ? 'border-emerald-100 shadow-emerald-50/50' : 'border-slate-100'} shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 relative transition-all`}>
          {bankAdded && <CheckCircle2 className="absolute top-4 right-4 md:top-6 md:right-6 text-emerald-500" size={20} />}
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 md:w-12 md:h-12 ${bankAdded ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400'} rounded-xl md:rounded-2xl flex items-center justify-center shrink-0`}>
              <CreditCard size={20} className="md:w-6 md:h-6" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-black text-[#1e293b]">Bank Account Details <span className="text-red-500">*</span></h3>
              <p className="text-[10px] md:text-[11px] font-bold text-slate-400 mt-0.5 truncate">
                {bankAdded ? `${bankDetails.bankName} • ${bankDetails.accountNumber}` : "Provide bank account for payouts"}
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsBankModalOpen(true)}
            className={`w-full md:w-auto px-6 py-3 rounded-xl md:rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 ${bankAdded ? 'bg-white border border-slate-200 text-slate-600' : 'bg-[#19246a] text-white'}`}
          >
            {bankAdded ? 'Update Details' : 'Add Bank Details'}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 md:gap-4 pt-6">
          <Link href="/vendor/individual/dashboard" className="w-full sm:w-auto">
            <button className="w-full px-10 py-4 rounded-xl md:rounded-2xl font-black text-xs text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-all">
              Cancel
            </button>
          </Link>
          
          {isComplete ? (
            <Link href="/vendor/individual/upgrade/review" className="w-full sm:w-auto">
              <button className="w-full bg-[#19246a] text-white px-10 py-4 rounded-xl md:rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-indigo-900 transition-all shadow-xl shadow-indigo-100 active:scale-95">
                Submit for Review <ChevronRight size={18} />
              </button>
            </Link>
          ) : (
            <button disabled className="w-full sm:w-auto bg-slate-200 text-slate-400 px-10 py-4 rounded-xl md:rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 cursor-not-allowed">
              Submit for Review <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>

      {/* BANK DETAILS MODAL */}
      {isBankModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsBankModalOpen(false)} />
          <form onSubmit={handleSaveBank} className="relative bg-white w-full max-w-lg rounded-[24px] md:rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in duration-200">
            <div className="p-6 md:p-8 border-b border-slate-50 flex items-center justify-between">
              <h2 className="text-lg md:text-xl font-black text-[#1e293b]">Bank Details</h2>
              <button type="button" onClick={() => setIsBankModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400"><X size={20} /></button>
            </div>
            
            <div className="p-6 md:p-8 space-y-4 md:space-y-6">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><Building size={14} /> Bank Name</label>
                <input required type="text" placeholder="e.g. Access Bank" className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-[#1e293b] outline-none focus:ring-2 focus:ring-indigo-500/10" value={bankDetails.bankName} onChange={(e) => setBankDetails({...bankDetails, bankName: e.target.value})} />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><CreditCard size={14} /> Account Number</label>
                <input required type="text" maxLength={10} placeholder="10-digit number" className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-[#1e293b] outline-none focus:ring-2 focus:ring-indigo-500/10" value={bankDetails.accountNumber} onChange={(e) => setBankDetails({...bankDetails, accountNumber: e.target.value.replace(/\D/g, '')})} />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><User size={14} /> Account Name</label>
                <input required type="text" placeholder="Full name on account" className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-[#1e293b] outline-none focus:ring-2 focus:ring-indigo-500/10" value={bankDetails.accountName} onChange={(e) => setBankDetails({...bankDetails, accountName: e.target.value})} />
              </div>
            </div>

            <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-4">
              <button type="button" onClick={() => setIsBankModalOpen(false)} className="font-black text-slate-400 uppercase text-xs tracking-widest">Cancel</button>
              <button type="submit" className="bg-[#19246a] text-white px-6 md:px-8 py-3 rounded-xl md:rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-indigo-100 active:scale-95 transition-all">Save Details</button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}