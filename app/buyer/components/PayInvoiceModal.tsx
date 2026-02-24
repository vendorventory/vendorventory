"use client";

import React, { useState } from 'react';
import { 
  X, CreditCard, Landmark, Wallet, 
  ShieldCheck, CheckCircle2 
} from 'lucide-react';

interface PayInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  invoice: {
    id: string;
    vendor: string;
    ref: string;
    amount: string;
    description: string;
    issueDate: string;
    dueDate: string;
    status: string;
  };
}

export function PayInvoiceModal({ isOpen, onClose, invoice }: PayInvoiceModalProps) {
  const [paymentMethod, setPaymentMethod] = useState('card');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-xl rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-slate-50 flex items-center justify-between">
          <h2 className="text-xl font-black text-[#1e293b]">Pay Invoice</h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-8 overflow-y-auto max-h-[70vh] no-scrollbar">
          
          {/* Invoice Summary Card */}
          <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Invoice</p>
                <h3 className="text-lg font-black text-[#19246a] mt-0.5">{invoice.id}</h3>
              </div>
              <span className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-[9px] font-black uppercase tracking-widest">
                {invoice.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Vendor</p>
                <p className="text-xs font-bold text-slate-700 mt-1">{invoice.vendor}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Order Reference</p>
                <p className="text-xs font-bold text-slate-700 mt-1">{invoice.ref}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Issue Date</p>
                <p className="text-xs font-bold text-slate-700 mt-1">{invoice.issueDate}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Due Date</p>
                <p className="text-xs font-bold text-slate-700 mt-1">{invoice.dueDate}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-between items-end">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Description</p>
                <p className="text-xs font-bold text-slate-700 mt-1">{invoice.description}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Amount</p>
                <p className="text-xl font-black text-[#19246a] mt-0.5">{invoice.amount}</p>
              </div>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-1">Select Payment Method</h4>
            
            <div className="space-y-3">
              {[
                { id: 'card', label: 'Card Payment', sub: 'Pay with debit or credit card', icon: CreditCard },
                { id: 'transfer', label: 'Bank Transfer', sub: 'Direct bank transfer via account number', icon: Landmark },
                { id: 'wallet', label: 'Wallet Balance', sub: 'Pay from your vendor ventory wallet', icon: Wallet }
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all ${
                    paymentMethod === method.id 
                    ? 'border-indigo-500 bg-indigo-50/30' 
                    : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      paymentMethod === method.id ? 'bg-indigo-500 text-white' : 'bg-slate-50 text-slate-400'
                    }`}>
                      <method.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#1e293b]">{method.label}</p>
                      <p className="text-[10px] font-bold text-slate-400 mt-0.5">{method.sub}</p>
                    </div>
                  </div>
                  {paymentMethod === method.id && (
                    <CheckCircle2 size={18} className="text-emerald-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Escrow Information */}
          <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 flex gap-4">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-500 shrink-0 shadow-sm">
              <ShieldCheck size={20} />
            </div>
            <div className="space-y-1">
              <h5 className="text-[10px] font-black text-blue-900 uppercase tracking-widest">Escrow Protection Enabled</h5>
              <p className="text-[10px] font-bold text-blue-700/70 leading-relaxed">
                Your payment will be held in escrow and only released to the vendor once you confirm delivery and satisfaction with the order.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-8 bg-slate-50 border-t border-slate-100 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <button 
            onClick={onClose}
            className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors"
          >
            Cancel
          </button>
          <button className="w-full sm:w-auto bg-emerald-500 text-white px-10 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-100 hover:bg-emerald-600 transition-all active:scale-95">
            Proceed to Pay {invoice.amount}
          </button>
        </div>
      </div>
    </div>
  );
}