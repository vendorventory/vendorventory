"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, CheckCircle2, Clock, 
  ChevronRight, HelpCircle 
} from 'lucide-react';

export default function UpgradeUnderReview() {
  // State to store the actual submission timestamp
  const [submissionTime, setSubmissionTime] = useState("");

  useEffect(() => {
    // Capture the current date and time upon component mount
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    const formattedTime = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    
    setSubmissionTime(`${formattedDate} at ${formattedTime}`);
  }, []);

  return (
    <main className="p-4 md:p-10 max-w-5xl mx-auto w-full space-y-8 pb-24">
      {/* Back Link */}
      <Link 
        href="/vendor/individual/dashboard" 
        className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#19246a] transition-colors group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </Link>

      {/* COMPLETED PROGRESS INDICATOR */}
      <div className="relative flex justify-between items-center max-w-2xl mx-auto mb-12">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-emerald-500 -translate-y-1/2 z-0" />
        
        {[
          { label: 'Business Info' },
          { label: 'KYC Documents' },
          { label: 'Review' }
        ].map((s, idx) => (
          <div key={idx} className="relative z-10 flex items-center gap-3 bg-slate-50 px-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
              <CheckCircle2 size={16} />
            </div>
            <span className="text-[11px] font-black uppercase tracking-widest text-emerald-500">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* REVIEW STATUS BANNER */}
      <div className="bg-amber-50/50 border border-amber-100 rounded-[40px] p-12 flex flex-col items-center text-center space-y-4 shadow-sm">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm border border-amber-50">
          <Clock size={32} strokeWidth={2.5} />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-[#1e293b]">Upgrade Under Review</h2>
          <p className="text-sm font-bold text-slate-500 max-w-md mx-auto leading-relaxed">
            Your Merchant upgrade is under review. You can continue operating as an Individual Vendor.
          </p>
        </div>
      </div>

      {/* APPLICATION DETAILS */}
      <section className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-100 shadow-sm space-y-8">
        <h3 className="text-sm font-black text-[#1e293b] uppercase tracking-widest">Application Details</h3>
        
        <div className="space-y-6">
          <div className="flex justify-between items-center pb-6 border-b border-slate-50">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Submitted</p>
            <p className="text-sm font-black text-[#19246a]">{submissionTime || "Recording..."}</p>
          </div>
          
          <div className="flex justify-between items-center pb-6 border-b border-slate-50">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Estimated Review Time</p>
            <p className="text-sm font-black text-[#19246a]">2-3 business days</p>
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Status</p>
            <span className="px-4 py-1.5 bg-indigo-50 text-[#19246a] rounded-full text-[10px] font-black uppercase tracking-widest">
              In Review
            </span>
          </div>
        </div>
      </section>

      {/* NAVIGATION ACTION */}
      <div className="flex justify-center">
        <Link href="/vendor/individual/dashboard">
          <button className="bg-[#19246a] text-white px-12 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-indigo-900 transition-all shadow-xl shadow-indigo-100 active:scale-95">
            Go to Dashboard <ChevronRight size={18} />
          </button>
        </Link>
      </div>

      {/* HELP SECTION */}
      <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-8 flex items-start gap-4">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shrink-0 shadow-sm">
          <HelpCircle size={20} />
        </div>
        <div>
          <h4 className="text-sm font-black text-[#1e293b]">Need Help?</h4>
          <p className="text-xs font-bold text-slate-400 leading-relaxed mt-1">
            If you have questions about your upgrade status, please contact our support team at <span className="text-[#19246a] underline">support@vendorventory.ng</span>
          </p>
        </div>
      </div>
    </main>
  );
}