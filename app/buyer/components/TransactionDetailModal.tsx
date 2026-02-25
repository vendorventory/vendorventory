"use client";

import React from 'react';
import { 
  X, CheckCircle2, Clock, 
  CreditCard, Landmark, Download, 
  Eye, Info, ShieldCheck
} from 'lucide-react';

interface TransactionDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  transaction: {
    id: string;
    invoiceId: string;
    orderId: string;
    date: string;
    time: string;
    vendor: string;
    amount: string;
    method: 'Card' | 'Bank Transfer';
    status: 'Held in Escrow' | 'Released' | 'Pending Release' | 'Refunded';
  };
}

export function TransactionDetailModal({ isOpen, onClose, transaction }: TransactionDetailModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-xl rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-slate-50 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-xl font-black text-[#1e293b]">Transaction Details</h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{transaction.id}</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 space-y-8 overflow-y-auto no-scrollbar">
          
          {/* Status Banner */}
          <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-500 shadow-sm">
                <Info size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Escrow Status</p>
                <h3 className="text-lg font-black text-blue-600 mt-0.5">{transaction.status}</h3>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</p>
              <h3 className="text-xl font-black text-[#19246a] mt-0.5">{transaction.amount}</h3>
            </div>
          </div>

          {/* Transaction Grid */}
          <div className="grid grid-cols-2 gap-y-6 gap-x-8 border-b border-slate-50 pb-8">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Transaction ID</p>
              <p className="text-xs font-bold text-slate-700 mt-1">{transaction.id}</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Invoice ID</p>
              <p className="text-xs font-bold text-slate-700 mt-1">{transaction.invoiceId}</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Order ID</p>
              <p className="text-xs font-bold text-slate-700 mt-1">{transaction.orderId}</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date & Time</p>
              <p className="text-xs font-bold text-slate-700 mt-1">{transaction.date} at {transaction.time}</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Vendor</p>
              <p className="text-sm font-black text-[#19246a] mt-1">{transaction.vendor}</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Payment Method</p>
              <div className="flex items-center gap-2 mt-1">
                {transaction.method === 'Card' ? <CreditCard size={14} className="text-slate-400" /> : <Landmark size={14} className="text-slate-400" />}
                <p className="text-xs font-bold text-slate-700">{transaction.method}</p>
              </div>
            </div>
          </div>

          {/* Escrow Timeline */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-6 shadow-sm">
            <h4 className="text-[11px] font-black text-[#1e293b] uppercase tracking-widest flex items-center gap-2">
               Escrow Timeline
            </h4>
            
            <div className="space-y-8 relative">
              {/* Vertical line */}
              <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-50" />

              {/* Timeline Item 1: Payment Received */}
              <div className="flex gap-4 relative z-10">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 border-4 border-white shadow-sm">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <p className="text-xs font-black text-[#1e293b]">Payment Received</p>
                  <p className="text-[10px] font-bold text-slate-400 mt-0.5">{transaction.date} at {transaction.time}</p>
                </div>
              </div>

              {/* Timeline Item 2: Funds Held */}
              <div className="flex gap-4 relative z-10">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 border-4 border-white shadow-sm">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <p className="text-xs font-black text-[#1e293b]">Funds Held in Escrow</p>
                  <p className="text-[10px] font-bold text-slate-400 mt-0.5">Secured by Vendor Ventory</p>
                </div>
              </div>

              {/* Timeline Item 3: Awaiting Confirmation */}
              <div className="flex gap-4 relative z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-sm ${
                  transaction.status === 'Released' ? 'bg-emerald-500 text-white' : 'bg-blue-500 text-white'
                }`}>
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-xs font-black text-[#1e293b]">Awaiting Release Confirmation</p>
                  <p className="text-[10px] font-bold text-slate-400 mt-0.5">Order delivered, confirm to release funds</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-100 flex gap-4 shrink-0">
          <button 
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50 transition-all"
          >
            <Download size={16} /> Download Receipt
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#19246a] text-white text-[10px] font-black uppercase tracking-widest hover:bg-indigo-900 transition-all shadow-lg shadow-indigo-100">
            <Eye size={16} /> View Order
          </button>
        </div>
      </div>
    </div>
  );
}