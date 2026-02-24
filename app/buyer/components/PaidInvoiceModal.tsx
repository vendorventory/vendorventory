"use client";

import React from 'react';
import { 
  X, Download, CheckCircle2, 
  Clock, ShieldCheck, FileText 
} from 'lucide-react';

interface InvoiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  invoice: {
    id: string;
    status: 'Paid' | 'In Escrow' | 'Overdue' | 'Awaiting Payment';
    vendor: string;
    vendorType: string;
    buyerName: string;
    buyerEmail: string;
    orderRef: string;
    issueDate: string;
    dueDate: string;
    description: string;
    subtotal: string;
    processingFee: string;
    totalAmount: string;
  };
}

export function PaidInvoiceModal({ isOpen, onClose, invoice }: InvoiceDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-xl rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-slate-50 flex items-center justify-between shrink-0">
          <h2 className="text-xl font-black text-[#1e293b]">Invoice Details</h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 space-y-8 overflow-y-auto no-scrollbar">
          
          {/* Invoice ID and Status Badge */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Invoice Number</p>
              <h3 className="text-xl font-black text-[#19246a] mt-1">{invoice.id}</h3>
            </div>
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
              invoice.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' :
              invoice.status === 'In Escrow' ? 'bg-blue-50 text-blue-600' :
              'bg-amber-50 text-amber-600'
            }`}>
              {invoice.status}
            </span>
          </div>

          {/* From / To Section */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">From</p>
              <p className="text-sm font-black text-[#19246a]">{invoice.vendor}</p>
              <p className="text-[11px] font-bold text-slate-400">{invoice.vendorType}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">To</p>
              <p className="text-sm font-black text-[#19246a]">{invoice.buyerName}</p>
              <p className="text-[11px] font-bold text-slate-400 break-all">{invoice.buyerEmail}</p>
            </div>
          </div>

          {/* Invoice Information Grid */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] border-b border-indigo-50 pb-2">Invoice Information</h4>
            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Order Reference</p>
                <p className="text-xs font-bold text-slate-700 mt-1">{invoice.orderRef}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Issue Date</p>
                <p className="text-xs font-bold text-slate-700 mt-1">{invoice.issueDate}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Due Date</p>
                <p className="text-xs font-bold text-slate-700 mt-1">{invoice.dueDate}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Payment Status</p>
                <p className={`text-xs font-black mt-1 ${invoice.status === 'Paid' ? 'text-emerald-600' : 'text-blue-600'}`}>{invoice.status}</p>
              </div>
              <div className="col-span-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Description</p>
                <p className="text-xs font-bold text-slate-700 mt-1 leading-relaxed">{invoice.description}</p>
              </div>
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center text-xs font-bold text-slate-500">
              <span>Subtotal</span>
              <span className="text-slate-700">{invoice.subtotal}</span>
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-500">
              <span>Processing Fee</span>
              <span className="text-slate-700">{invoice.processingFee}</span>
            </div>
            <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
              <span className="text-sm font-black text-[#1e293b] uppercase tracking-widest">Total Amount</span>
              <span className="text-xl font-black text-[#19246a]">{invoice.totalAmount}</span>
            </div>
          </div>

          {/* Conditional Escrow Status Section */}
          {invoice.status === 'In Escrow' && (
            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 space-y-4 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-blue-500" size={18} />
                <h5 className="text-xs font-black text-blue-900 uppercase tracking-widest">Escrow Status</h5>
              </div>
              <div className="space-y-3 pl-1">
                <p className="text-[11px] font-bold text-slate-600 leading-relaxed">
                  Your payment of <span className="font-black text-[#19246a]">{invoice.totalAmount}</span> is currently held in escrow.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <CheckCircle2 size={14} />
                    <span className="text-[10px] font-bold">Payment received and secured</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock size={14} />
                    <span className="text-[10px] font-bold">Awaiting delivery confirmation</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#19246a] text-white py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] active:scale-[0.98] transition-all">
                Track Order
              </button>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-100 flex gap-4 shrink-0">
          <button 
            onClick={onClose}
            className="flex-1 px-6 py-3 rounded-xl border border-slate-200 bg-white text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50 transition-all"
          >
            Close
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50 transition-all">
            <Download size={16} /> Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
}