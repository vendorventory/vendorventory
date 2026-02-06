"use client";

import React, { useState } from 'react';
import { 
  Search, AlertCircle, CheckCircle2, 
  Clock, Eye, X, MessageSquare, 
  Scale, Headset, ChevronDown
} from 'lucide-react';

const stats = [
  { label: 'Total Disputes', value: '8', icon: Scale, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { label: 'Open Disputes', value: '2', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Resolved Disputes', value: '3', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Escalated Disputes', value: '1', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
];

const disputes = [
  { 
    id: 'DSP001', 
    buyer: 'Chioma Nwosu', 
    orderId: 'ORD-2023-00342', 
    type: 'Delivery', 
    status: 'Open', 
    date: '3 Feb 2025',
    description: 'Order not received after 7 days. Expected delivery was on January 28, 2025.'
  },
  { 
    id: 'DSP002', 
    buyer: 'Ibrahim Yusuf', 
    orderId: 'TXN-2023-01823', 
    type: 'Payment', 
    status: 'In Review', 
    date: '1 Feb 2025',
    description: 'Double charged for the same order. Requesting refund for duplicate payment.'
  },
  { id: 'DSP003', buyer: 'Ngozi Okafor', orderId: 'ORD-2023-00298', type: 'Product', status: 'Resolved', date: '28 Jan 2025' },
  { id: 'DSP004', buyer: 'Tunde Bakare', orderId: 'ESC-2023-00421', type: 'Escrow', status: 'Escalated', date: '25 Jan 2025' },
  { id: 'DSP005', buyer: 'Amaka Johnson', orderId: 'ORD-2023-00276', type: 'Product', status: 'In Review', date: '20 Jan 2025' },
  { 
    id: 'DSP006', 
    buyer: 'Yemi Adebayo', 
    orderId: 'ORD-2023-00189', 
    type: 'Delivery', 
    status: 'Resolved', 
    date: '20 Jan 2025', 
    description: 'Package delivered to wrong address.', 
    resolution: 'Reshipped to correct address. Delivered on Jan 25, 2025.' 
  },
  { id: 'DSP007', buyer: 'Fatima Abubakar', orderId: 'TXN-2023-01567', type: 'Payment', status: 'Open', date: '4 Feb 2025' },
  { id: 'DSP008', buyer: 'Chukwudi Eze', orderId: 'ESC-2023-00399', type: 'Escrow', status: 'Resolved', date: '18 Jan 2025' },
];

export default function MerchantDisputes() {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedDispute, setSelectedDispute] = useState<any>(null);

  const handleViewDetails = (dispute: any) => {
    setSelectedDispute(dispute);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="flex-1 flex flex-col min-w-0">
      <main className="p-4 md:p-8 max-w-7xl mx-auto w-full space-y-6 md:space-y-8 pb-24 lg:pb-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#19246a] md:bg-transparent p-6 md:p-0 rounded-b-[40px] md:rounded-none">
          <div className="space-y-1">
            <h1 className="text-xl md:text-2xl font-bold text-white md:text-[#1e293b]">Disputes</h1>
            <p className="text-xs md:text-sm text-indigo-200 md:text-slate-500 font-medium tracking-tight">Manage and resolve transaction or order-related disputes.</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 px-4 md:px-0 -mt-8 md:mt-0 relative z-10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-4 md:p-6 rounded-xl border border-slate-100 shadow-sm">
              <div className={`${stat.bg} ${stat.color} w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center mb-3 md:mb-4`}>
                <stat.icon size={18} />
              </div>
              <p className="text-lg md:text-2xl font-extrabold text-[#1e293b]">{stat.value}</p>
              <p className="text-[9px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-100 shadow-sm mx-4 md:mx-0">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input type="text" placeholder="Search by dispute ID, buyer name..." className="w-full pl-10 pr-4 py-2.5 border border-slate-100 rounded-xl text-sm outline-none bg-slate-50/50" />
            </div>
            <div className="flex flex-row gap-3">
              <select className="flex-1 lg:w-40 px-4 py-2.5 border border-slate-100 rounded-xl text-sm bg-white outline-none appearance-none cursor-pointer"><option>All Status</option></select>
              <select className="flex-1 lg:w-40 px-4 py-2.5 border border-slate-100 rounded-xl text-sm bg-white outline-none appearance-none cursor-pointer"><option>All Types</option></select>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead className="bg-slate-50/50 border-b border-slate-200">
                <tr>
                  {['Dispute ID', 'Buyer Name', 'Order / Transaction ID', 'Dispute Type', 'Status', 'Date Opened', 'Action'].map((header) => (
                    <th key={header} className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {disputes.map((dispute) => (
                  <tr key={dispute.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-xs text-[#1e293b]">{dispute.id}</td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-600">{dispute.buyer}</td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-400">{dispute.orderId}</td>
                    <td className="px-6 py-4 capitalize text-xs text-slate-500 font-medium">
                      <MessageSquare size={14} className="text-blue-400" /> {dispute.type}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                        dispute.status === 'Open' ? 'bg-blue-50 text-blue-600' :
                        dispute.status === 'In Review' ? 'bg-orange-50 text-orange-600' :
                        dispute.status === 'Resolved' ? 'bg-emerald-50 text-emerald-600' :
                        'bg-red-50 text-red-600'
                      }`}>{dispute.status}</span>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-400">{dispute.date}</td>
                    <td className="px-6 py-4 text-center">
                      <button onClick={() => handleViewDetails(dispute)} className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-[11px] font-bold text-[#19246a] hover:bg-slate-50 transition-all">
                        <Eye size={14} /> View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4 px-4">
          {disputes.map((dispute) => (
            <div key={dispute.id} onClick={() => handleViewDetails(dispute)} className="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm flex items-center justify-between active:scale-[0.98] transition-all">
              <div className="space-y-1.5">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">{dispute.id}</p>
                <p className="text-sm font-black text-[#19246a]">{dispute.buyer}</p>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                  <span>{dispute.type}</span><span>•</span><span>{dispute.date}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${
                  dispute.status === 'Open' ? 'bg-blue-50 text-blue-600' : 
                  dispute.status === 'Resolved' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'
                }`}>{dispute.status}</span>
                <ChevronDown size={18} className="text-slate-300 -rotate-90" />
              </div>
            </div>
          ))}
        </div>

        {/* DISPUTE DETAILS MODAL */}
        {isDetailsModalOpen && selectedDispute && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsDetailsModalOpen(false)} />
            <div className="relative bg-white w-full max-w-xl rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in duration-200">
              <div className="p-6 border-b border-slate-50 flex items-center justify-between shrink-0">
                <h2 className="text-lg font-black text-[#1e293b]">Dispute Details</h2>
                <button onClick={() => setIsDetailsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"><X size={20} /></button>
              </div>
              
              <div className="p-6 md:p-8 space-y-8 max-h-[75vh] overflow-y-auto no-scrollbar">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center border border-indigo-100">
                    <Scale size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#1e293b]">{selectedDispute.id}</h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">Filed by {selectedDispute.buyer} on {selectedDispute.date}</p>
                    <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-black uppercase mt-1 ${
                      selectedDispute.status === 'Open' ? 'bg-blue-50 text-blue-600' :
                      selectedDispute.status === 'In Review' ? 'bg-orange-50 text-orange-500' :
                      selectedDispute.status === 'Escalated' ? 'bg-red-50 text-red-500' : 'bg-emerald-50 text-emerald-500'
                    }`}>
                      {selectedDispute.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-6 border-t border-slate-50 pt-6">
                  <div>
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Buyer Name</p>
                    <p className="text-sm font-bold text-[#1e293b]">{selectedDispute.buyer}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Order / Transaction ID</p>
                    <p className="text-sm font-bold text-[#1e293b]">{selectedDispute.orderId}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Dispute Type</p>
                    <p className="text-sm font-bold text-[#1e293b] flex items-center gap-2 capitalize">
                      <MessageSquare size={14} className="text-blue-400" /> {selectedDispute.type}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Date Opened</p>
                    <p className="text-sm font-bold text-[#1e293b]">{selectedDispute.date}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Description</p>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-xs font-medium text-slate-600 leading-relaxed">
                      {selectedDispute.description || "Package delivered to wrong address."}
                    </p>
                  </div>
                </div>

                {/* ACTION REQUIRED ALERT (Shows for both 'Open' and 'In Review') */}
                {(selectedDispute.status === 'Open' || selectedDispute.status === 'In Review') && (
                  <div className="bg-[#fffbeb] border border-amber-100 rounded-2xl p-4 flex items-start gap-3">
                    <AlertCircle className="text-amber-500 mt-0.5 shrink-0" size={18} />
                    <div className="space-y-1">
                      <p className="text-xs font-black text-amber-800 uppercase tracking-tight">Action Required</p>
                      <p className="text-[11px] font-bold text-amber-700/80 leading-relaxed">
                        This dispute requires your attention. Please provide necessary documentation or respond to buyer inquiries.
                      </p>
                    </div>
                  </div>
                )}

                {selectedDispute.status === 'Escalated' && (
                  <div className="bg-[#fff1f2] border border-red-100 rounded-2xl p-4 flex items-start gap-3">
                    <AlertCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
                    <div className="space-y-1">
                      <p className="text-xs font-black text-red-800 uppercase tracking-tight">Dispute Escalated</p>
                      <p className="text-[11px] font-bold text-red-700/80 leading-relaxed">
                        This dispute has been escalated to our resolution team. You will be contacted for additional information.
                      </p>
                    </div>
                  </div>
                )}

                {selectedDispute.status === 'Resolved' && (
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Resolution</p>
                    <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                      <p className="text-xs font-bold text-emerald-700 leading-relaxed">
                        {selectedDispute.resolution}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-50 flex items-center justify-end gap-3 shrink-0">
                <button 
                  onClick={() => setIsDetailsModalOpen(false)} 
                  className="px-6 py-3 rounded-2xl bg-white border border-slate-200 font-black text-slate-400 hover:bg-slate-50 text-xs uppercase tracking-widest shadow-sm transition-all"
                >
                  Close
                </button>
                
                {selectedDispute.status === 'In Review' && (
                  <button className="px-6 py-3 rounded-2xl bg-[#22c55e] hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-emerald-100 active:scale-95 transition-all">
                    <Headset size={16} /> Contact Support
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}