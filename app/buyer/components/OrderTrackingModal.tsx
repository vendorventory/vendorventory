"use client";

import React from 'react';
import { 
  X, CheckCircle2, Clock, Truck, 
  Package, ShieldCheck, Download 
} from 'lucide-react';

interface OrderTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: {
    id: string;
    invoiceId: string;
    vendor: string;
    vendorType: string;
    buyer: string;
    buyerEmail: string;
    deliveryPartner: string;
    trackingNumber: string;
    estDelivery: string;
    amount: string;
    description: string;
    // Map statuses to visual steps
    status: 'Paid' | 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered' | 'Completed';
  };
}

export function OrderTrackingModal({ isOpen, onClose, order }: OrderTrackingModalProps) {
  if (!isOpen) return null;

  const steps = ['Paid', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered'];
  
  // Handle 'Completed' as fully 'Delivered' visually
  const effectiveStatus = order.status === 'Completed' ? 'Delivered' : order.status;
  const currentStepIndex = steps.indexOf(effectiveStatus);

  // Dynamic Styles based on status
  const getBadgeStyles = () => {
    if (order.status === 'Completed' || order.status === 'Delivered') 
      return 'bg-emerald-50 text-emerald-600'; //
    if (order.status === 'Processing') 
      return 'bg-amber-50 text-amber-600'; //
    return 'bg-purple-50 text-purple-600'; // Out for Delivery
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-xl rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 md:p-8 border-b border-slate-50 flex items-center justify-between shrink-0">
          <h2 className="text-xl font-black text-[#1e293b]">Order Tracking</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400"><X size={20} /></button>
        </div>

        <div className="p-6 md:p-8 space-y-8 overflow-y-auto no-scrollbar">
          {/* Header with Dynamic Badge */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Order Number</p>
              <h3 className="text-xl font-black text-[#19246a] mt-1">{order.id}</h3>
              <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Invoice: {order.invoiceId}</p>
            </div>
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${getBadgeStyles()}`}>
              {order.status === 'Processing' && <Clock size={12} />}
              {order.status === 'Out for Delivery' && <Truck size={12} />}
              {(order.status === 'Delivered' || order.status === 'Completed') && <CheckCircle2 size={12} />}
              {order.status}
            </span>
          </div>

          {/* Delivery Progress Stepper */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">Delivery Progress</h4>
            <div className="relative flex justify-between items-start pt-2 px-2">
              <div className="absolute top-5 left-8 right-8 h-1 bg-slate-100 -translate-y-1/2 z-0">
                <div 
                  className="h-full bg-emerald-400 transition-all duration-1000" 
                  style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
                />
              </div>

              {steps.map((step, idx) => {
                const isReached = idx <= currentStepIndex;
                return (
                  <div key={step} className="relative z-10 flex flex-col items-center gap-2 w-16">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm transition-colors ${
                      isReached ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {idx === 0 && <CheckCircle2 size={18} />}
                      {idx === 1 && <Clock size={18} />}
                      {idx === 2 && <Package size={18} />}
                      {idx === 3 && <Truck size={18} />}
                      {idx === 4 && <CheckCircle2 size={18} />}
                    </div>
                    <span className={`text-[9px] font-black uppercase text-center tracking-tighter leading-tight ${
                      idx > currentStepIndex ? 'text-slate-300' : 'text-[#19246a]'
                    }`}>
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vendor/Buyer Info */}
          <div className="grid grid-cols-2 gap-8 border-t border-slate-50 pt-6">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Vendor</p>
              <p className="text-sm font-black text-[#19246a]">{order.vendor}</p>
              <p className="text-[11px] font-bold text-slate-400">{order.vendorType}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Buyer</p>
              <p className="text-sm font-black text-[#19246a]">{order.buyer}</p>
              <p className="text-[11px] font-bold text-slate-400 truncate">{order.buyerEmail}</p>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 space-y-6">
            <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] border-b border-indigo-50 pb-2">Delivery Information</h4>
            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Delivery Partner</p>
                <p className="text-xs font-bold text-slate-700 mt-1">{order.deliveryPartner}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tracking Number</p>
                <p className={`text-xs font-black mt-1 ${order.trackingNumber === 'N/A' ? 'text-slate-400' : 'text-blue-600 underline'}`}>
                  {order.trackingNumber}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Est. Delivery</p>
                <p className="text-xs font-bold text-slate-700 mt-1">{order.estDelivery}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Order Amount</p>
                <p className="text-xs font-black text-[#19246a] mt-1">{order.amount}</p>
              </div>
              <div className="col-span-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Item Description</p>
                <p className="text-xs font-bold text-slate-700 mt-1 leading-relaxed">{order.description}</p>
              </div>
            </div>
          </div>

          {/* Escrow Banner */}
          <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 flex gap-4">
            <ShieldCheck className="text-blue-500 shrink-0" size={20} />
            <div className="space-y-1">
              <h5 className="text-[10px] font-black text-blue-900 uppercase tracking-widest">Escrow Protection Active</h5>
              <p className="text-[10px] font-bold text-blue-700/70 leading-relaxed">
                Funds will only be released to the vendor after you confirm delivery and satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-100 flex gap-4 shrink-0">
          <button onClick={onClose} className="flex-1 px-6 py-3 rounded-xl border border-slate-200 bg-white text-[10px] font-black text-slate-500 uppercase tracking-widest">Close</button>
          <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white text-[10px] font-black text-slate-500 uppercase tracking-widest">
            <Download size={16} /> Download Details
          </button>
        </div>
      </div>
    </div>
  );
}