"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ShieldAlert, User, Paperclip, 
  Send, Clock, Info, CheckCircle2, MoreVertical
} from 'lucide-react';

export default function DisputeDetails({ params }: { params: { id: string } }) {
  // Mock data representing the specific dispute state
  const dispute = {
    id: params.id || 'DSP-2025-001',
    reason: 'Item Not as Described',
    status: 'Vendor Responded',
    invoice: 'INV-1015',
    order: 'ORD-8463',
    vendor: 'Gadget Haven NG',
    amount: '₦320,000',
    description: 'The laptop received has significantly lower specifications than advertised in the listing.',
    created: '2025-02-09',
    lastUpdate: '2025-02-11',
    totalMessages: 2
  };

  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto w-full space-y-6 pb-24">
      
      {/* BACK LINK */}
      <Link 
        href="/buyer/disputes" 
        className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#19246a] transition-colors group w-fit"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Disputes
      </Link>

      {/* DISPUTE HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
            <ShieldAlert size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#1e293b]">{dispute.id}</h1>
            <p className="text-sm font-bold text-slate-400">{dispute.reason}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
           <button className="px-6 py-2.5 rounded-xl border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-all">
             Escalate to Admin
           </button>
           <button className="px-6 py-2.5 rounded-xl bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100">
             Close Dispute
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: CONVERSATION */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Dispute Metadata Grid (Visible on Mobile) */}
          <div className="lg:hidden grid grid-cols-2 gap-4">
             <div className="bg-white p-4 rounded-2xl border border-slate-100">
                <p className="text-[9px] font-black text-slate-400 uppercase">Status</p>
                <p className="text-xs font-black text-blue-600 mt-1">{dispute.status}</p>
             </div>
             <div className="bg-white p-4 rounded-2xl border border-slate-100">
                <p className="text-[9px] font-black text-slate-400 uppercase">Amount</p>
                <p className="text-xs font-black text-[#19246a] mt-1">{dispute.amount}</p>
             </div>
          </div>

          <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden flex flex-col min-h-[500px]">
            <div className="p-6 border-b border-slate-50 bg-slate-50/30">
              <h3 className="text-[10px] font-black text-[#1e293b] uppercase tracking-[0.2em]">Conversation</h3>
            </div>
            
            <div className="flex-1 p-6 md:p-8 space-y-8 overflow-y-auto no-scrollbar">
              
              {/* Buyer Message (Right Aligned) */}
              <div className="flex flex-col items-end gap-2">
                <div className="bg-blue-50/50 p-5 rounded-[24px] rounded-tr-none max-w-[85%] border border-blue-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                       <User size={10} className="text-blue-600" />
                    </div>
                    <span className="text-[10px] font-black text-blue-600 uppercase">You (Buyer)</span>
                    <span className="text-[9px] font-bold text-slate-400 ml-auto">{dispute.created} • 14:30</span>
                  </div>
                  <p className="text-sm font-bold text-slate-700 leading-relaxed">
                    The laptop received has 8GB RAM instead of the advertised 16GB, and an i5 processor instead of i7. I have attached photos of the specifications screen.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <div className="px-3 py-1.5 bg-white border border-blue-100 rounded-lg text-[10px] font-bold text-blue-600 flex items-center gap-1.5 hover:bg-blue-50 transition-colors cursor-pointer">
                      <Paperclip size={12} /> specs-screen.jpg
                    </div>
                    <div className="px-3 py-1.5 bg-white border border-blue-100 rounded-lg text-[10px] font-bold text-blue-600 flex items-center gap-1.5 hover:bg-blue-50 transition-colors cursor-pointer">
                      <Paperclip size={12} /> product-label.jpg
                    </div>
                  </div>
                </div>
              </div>

              {/* Vendor Message (Left Aligned) */}
              <div className="flex flex-col items-start gap-2">
                <div className="bg-slate-50 p-5 rounded-[24px] rounded-tl-none max-w-[85%] border border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center">
                       <User size={10} className="text-slate-500" />
                    </div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{dispute.vendor}</span>
                    <span className="text-[9px] font-bold text-slate-400 ml-auto">{dispute.lastUpdate} • 10:15</span>
                  </div>
                  <p className="text-sm font-bold text-slate-600 leading-relaxed">
                    We apologize for the confusion. There was a warehouse error during shipping. We can offer a full refund if you return the item, or send the correct laptop within 3 business days if you prefer.
                  </p>
                </div>
              </div>

            </div>

            {/* SEND RESPONSE BOX */}
            <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-100">
              <div className="bg-white rounded-2xl border border-slate-200 focus-within:border-indigo-500 transition-colors shadow-sm">
                <textarea 
                  placeholder="Type your response to the vendor..." 
                  className="w-full h-32 p-4 rounded-t-2xl outline-none text-sm font-bold text-slate-700 resize-none"
                />
                <div className="p-3 border-t border-slate-50 flex items-center justify-between">
                  <button className="flex items-center gap-2 px-4 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">
                    <Paperclip size={16} /> Attach Files
                  </button>
                  <button className="bg-[#19246a] text-white px-8 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-indigo-100 hover:bg-indigo-900 transition-all active:scale-95">
                    <Send size={14} /> Send Response
                  </button>
                </div>
              </div>
              <p className="text-[9px] font-bold text-slate-400 mt-4 text-center">
                Response time usually takes 1-2 business days. If unresolved, you can escalate to support.
              </p>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: SIDEBAR DETAILS */}
        <div className="space-y-6">
          
          {/* Status Box */}
          <div className="bg-[#eff6ff] border border-blue-100 p-6 rounded-[32px] space-y-4">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm">
                 <Clock size={16} />
               </div>
               <div className="space-y-0.5">
                  <p className="text-[9px] font-black text-blue-900/50 uppercase tracking-widest">Current Status</p>
                  <h3 className="text-base font-black text-blue-600">{dispute.status}</h3>
               </div>
             </div>
          </div>

          {/* Dispute Summary */}
          <div className="bg-white border border-slate-100 p-8 rounded-[32px] shadow-sm space-y-8">
            <h3 className="text-[10px] font-black text-[#1e293b] uppercase tracking-[0.2em] border-b border-slate-50 pb-4">Dispute Summary</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Invoice / Order</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-black text-[#1e293b]">{dispute.invoice}</p>
                  <span className="text-slate-300">/</span>
                  <p className="text-sm font-black text-[#1e293b]">{dispute.order}</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Vendor</p>
                <p className="text-sm font-black text-[#1e293b]">{dispute.vendor}</p>
              </div>

              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Issue Description</p>
                <p className="text-xs font-bold text-slate-500 leading-relaxed italic">{dispute.description}</p>
              </div>

              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Dispute Amount</p>
                <p className="text-2xl font-black text-[#19246a]">{dispute.amount}</p>
              </div>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-slate-50">
                 <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase">Created</p>
                    <p className="text-[11px] font-bold text-slate-700 mt-0.5">{dispute.created}</p>
                 </div>
                 <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase">Total Messages</p>
                    <p className="text-[11px] font-bold text-slate-700 mt-0.5">{dispute.totalMessages}</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Need Help CTA */}
          <div className="bg-slate-900 p-8 rounded-[32px] text-center space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mx-auto">
               <Info size={24} />
            </div>
            <div>
               <h4 className="text-white text-sm font-black uppercase tracking-widest">Escalation Policy</h4>
               <p className="text-slate-400 text-[10px] font-bold mt-2 leading-relaxed">
                 If the vendor does not provide a satisfactory solution within 48 hours, you can escalate this dispute for mediation.
               </p>
            </div>
            <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white uppercase tracking-widest hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>

        </div>

      </div>
    </main>
  );
}