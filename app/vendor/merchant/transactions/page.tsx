"use client";

import React, { useState } from 'react';
import { 
  Plus, Search, Calendar, Filter, Download, 
  Wallet, Lock, CheckCircle2, History, Eye,
  X, Info, ExternalLink, ChevronLeft, ChevronRight,
  User, Receipt, ArrowUpRight, ArrowDownLeft,
  TrendingUp, ShieldCheck, AlertCircle, Zap
} from 'lucide-react';

const stats = [
  { label: 'Total Escrow Balance', value: '₦793,000', icon: Wallet, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { label: 'Available for Payout', value: '₦418,000', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Locked (Pending Orders)', value: '₦375,000', icon: Lock, color: 'text-orange-600', bg: 'bg-orange-50' },
  { label: 'Released Amount (Total)', value: '₦1,245,000', icon: History, color: 'text-slate-600', bg: 'bg-slate-100' },
];

const transactions = [
  { id: 'TXN-2024-001', orderId: 'INV-2024-001', buyer: 'Chioma Nwankwo', amount: '₦65,000', status: 'Locked', type: 'Payment', date: '2024-01-30' },
  { id: 'TXN-2024-002', orderId: 'ORD-2024-045', buyer: 'Yemi Adeyemi', amount: '₦45,000', status: 'Locked', type: 'Payment', date: '2024-01-29' },
  { id: 'TXN-2024-003', orderId: 'INV-2024-002', buyer: 'Olanrewaju Balogun', amount: '₦350,000', status: 'Locked', type: 'Payment', date: '2024-01-28' },
  { id: 'TXN-2024-004', orderId: 'ORD-2024-044', buyer: 'Amina Hassan', amount: '₦18,000', status: 'Released', type: 'Release', date: '2024-01-27' },
  { id: 'TXN-2024-005', orderId: 'INV-2024-003', buyer: 'Ngozi Okeke', amount: '₦65,000', status: 'Released', type: 'Release', date: '2024-01-25' },
  { id: 'TXN-2024-006', orderId: 'ORD-2024-042', buyer: 'Ibrahim Mohammed', amount: '₦32,000', status: 'Released', type: 'Release', date: '2024-01-24' },
  { id: 'TXN-2024-007', orderId: 'ORD-2024-043', buyer: 'Tunde Ogunbiyi', amount: '₦17,500', status: 'Refunded', type: 'Refund', date: '2024-01-23' },
];

export default function MerchantTransactions() {
  const [activeTab, setActiveTab] = useState('All');
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const [selectedTxn, setSelectedTxn] = useState<any>(null);

  const handleViewTxn = (txn: any) => {
    setSelectedTxn(txn);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8 bg-slate-50 min-h-screen pb-24 lg:pb-8 relative">
      
      {/* --- MOBILE VIEW: HEADER & ESCROW CARD --- */}
      <div className="lg:hidden space-y-6">
        <div>
          <h1 className="text-xl font-bold text-[#1e293b]">Transactions & Escrow</h1>
          <p className="text-[11px] text-slate-500 font-medium tracking-tight">Manage your escrow balance and history</p>
        </div>

        <div className="bg-[#19246a] rounded-[32px] p-6 text-white shadow-xl space-y-6">
          <div className="flex items-center gap-3 opacity-80">
            <Wallet size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">Escrow Balance</span>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-indigo-200">Total Balance</p>
            <p className="text-3xl font-black mt-1">₦793,000</p>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-white/10">
            <div className="text-center flex-1">
              <p className="text-[9px] uppercase font-bold text-indigo-200">Available</p>
              <p className="text-sm font-black mt-0.5">₦418,000</p>
            </div>
            <div className="text-center flex-1 border-x border-white/10">
              <p className="text-[9px] uppercase font-bold text-indigo-200">Locked</p>
              <p className="text-sm font-black mt-0.5 text-orange-400">₦375,000</p>
            </div>
            <div className="text-center flex-1">
              <p className="text-[9px] uppercase font-bold text-indigo-200">Released</p>
              <p className="text-sm font-black mt-0.5 text-emerald-400">₦1.24M</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: TrendingUp, label: 'Withdraw', color: 'text-emerald-500' },
            { icon: ShieldCheck, label: 'Rules', color: 'text-blue-500', onClick: () => setIsRulesModalOpen(true) },
            { icon: Receipt, label: 'History', color: 'text-indigo-600', active: true },
            { icon: AlertCircle, label: 'Disputes', color: 'text-red-500' }
          ].map((item) => (
            <button key={item.label} onClick={item.onClick} className="flex flex-col items-center gap-2">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all ${item.active ? 'border-[#19246a] bg-white shadow-md' : 'border-slate-100 bg-white'}`}>
                <item.icon size={22} className={item.color} />
              </div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{item.label}</p>
            </button>
          ))}
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
          {['All', 'Locked', 'Released', 'Refunds'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                activeTab === tab ? 'bg-[#19246a] text-white border-[#19246a]' : 'bg-white text-slate-400 border-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* --- DESKTOP VIEW: HEADER & STATS --- */}
      <div className="hidden lg:block space-y-8">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#1e293b]">Transactions & Escrow</h1>
            <p className="text-sm text-slate-500 font-medium">Manage your escrow balance and history.</p>
          </div>
          <button 
            onClick={() => setIsRulesModalOpen(true)}
            className="flex items-center gap-2 border border-slate-200 bg-white px-5 py-2.5 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 shadow-sm"
          >
            <Info size={16} /> View Payout Rules
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className={`${stat.bg} ${stat.color} w-10 h-10 rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon size={20} />
              </div>
              <p className="text-2xl font-extrabold text-[#1e293b]">{stat.value}</p>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="Search by transaction ID or order ID..." className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none" />
            </div>
            <div className="flex flex-row gap-3">
              <select className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm bg-white outline-none appearance-none cursor-pointer"><option>All Status</option></select>
              <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 bg-white shadow-sm"><Calendar size={16} /> Date Range</button>
              <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 bg-white shadow-sm"><Download size={16} /> Export</button>
            </div>
          </div>
        </div>
      </div>

      {/* --- TRANSACTION LISTS (RESPONSIVE) --- */}
      <div className="space-y-4">
        {/* Desktop Table */}
        <div className="hidden lg:block bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead className="bg-slate-50/50 border-b border-slate-200">
                <tr>
                  {['Transaction ID', 'Order ID', 'Buyer Name', 'Amount', 'Escrow Status', 'Type', 'Date', 'Action'].map((header) => (
                    <th key={header} className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {transactions.map((txn) => (
                  <tr key={txn.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-xs text-[#1e293b]">{txn.id}</td>
                    <td className="px-6 py-4 text-xs font-medium text-indigo-600 underline">{txn.orderId}</td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-600">{txn.buyer}</td>
                    <td className="px-6 py-4 text-sm font-black text-[#1e293b]">{txn.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold flex items-center w-fit gap-1.5 ${
                        txn.status === 'Locked' ? 'bg-orange-50 text-orange-600' : 'bg-emerald-50 text-emerald-600'
                      }`}>
                        <span className={`w-1 h-1 rounded-full ${txn.status === 'Locked' ? 'bg-orange-600' : 'bg-emerald-600'}`} />
                        {txn.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        {txn.type === 'Payment' ? <ArrowDownLeft size={14} /> : <ArrowUpRight size={14} />}
                        <span className="text-xs font-medium">{txn.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-500">{txn.date}</td>
                    <td className="px-6 py-4 text-center">
                      <button onClick={() => handleViewTxn(txn)} className="p-2 border border-slate-200 rounded-lg text-[#19246a] hover:bg-slate-50 transition-colors"><Eye size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Vertical Cards */}
        <div className="lg:hidden space-y-3">
          {transactions.map((txn) => (
            <div key={txn.id} onClick={() => handleViewTxn(txn)} className="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm flex items-center justify-between active:scale-[0.98] transition-all">
              <div className="space-y-1.5">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">{txn.id}</p>
                <p className="text-lg font-black text-[#19246a]">{txn.amount}</p>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                  <span>Order: {txn.orderId}</span>
                  <span>•</span>
                  <span>{txn.date}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter flex items-center gap-1.5 ${
                  txn.status === 'Locked' ? 'bg-orange-50 text-orange-500' : 
                  txn.status === 'Released' ? 'bg-emerald-50 text-emerald-500' : 'bg-red-50 text-red-500'
                }`}>
                  <Lock size={10} /> {txn.status}
                </span>
                <ChevronRight size={18} className="text-slate-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- HOW ESCROW WORKS SECTION --- */}
      <div className="bg-[#eff6ff] rounded-[32px] p-6 md:p-8 border border-blue-100 space-y-6 mt-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#19246a] rounded-xl flex items-center justify-center text-white shadow-lg">
            <Info size={20} />
          </div>
          <h3 className="text-lg font-black text-[#19246a]">How Escrow Works</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Payment Protection', text: 'When a buyer makes a payment, funds are held securely until the order is fulfilled.' },
            { title: 'Release Conditions', text: 'Funds are automatically released when delivery is confirmed or after 7 days.' },
            { title: 'Payout Schedule', text: 'Available funds can be withdrawn to your bank and process in 1-3 business days.' },
            { title: 'KYC Requirement', text: 'Complete verification to enable withdrawals and unlock full capabilities.' }
          ].map((item) => (
            <div key={item.title} className="space-y-2">
              <p className="text-xs font-black text-[#19246a] uppercase tracking-wider">{item.title}</p>
              <p className="text-xs text-[#1e293b]/70 font-medium leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <button className="bg-[#19246a] text-white px-6 py-3 rounded-2xl text-xs font-black hover:bg-[#141d54] transition-all shadow-lg active:scale-95 flex items-center gap-2">
          Learn More About Escrow <ExternalLink size={14} />
        </button>
      </div>

      {/* --- TRANSACTION DETAILS MODAL --- */}
      {isDetailsModalOpen && selectedTxn && (
        <div className="fixed inset-0 z-[250] flex items-end md:items-center justify-center p-0 md:p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" onClick={() => setIsDetailsModalOpen(false)} />
          <div className="relative bg-white w-full md:max-w-lg h-[90vh] md:h-auto rounded-t-[32px] md:rounded-[32px] shadow-2xl flex flex-col animate-in slide-in-from-bottom duration-300 overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between shrink-0">
              <div><h2 className="text-xl font-black text-[#1e293b]">Transaction Details</h2><p className="text-[11px] text-slate-400 font-bold uppercase tracking-tight">{selectedTxn.id}</p></div>
              <button onClick={() => setIsDetailsModalOpen(false)} className="p-2.5 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400"><X size={18} /></button>
            </div>
            <div className="p-6 overflow-y-auto space-y-6 flex-1 custom-scrollbar pb-10">
              <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-4 text-center">
                <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Amount</p><p className="text-3xl font-black text-[#19246a]">{selectedTxn.amount}</p>
                <div className="flex justify-center pt-2"><span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tighter ${selectedTxn.status === 'Locked' ? 'bg-orange-50 text-orange-600' : 'bg-emerald-50 text-emerald-600'}`}>{selectedTxn.status} Status</span></div>
              </div>
              <div className="space-y-4">
                {[ { icon: User, label: 'Buyer', value: selectedTxn.buyer }, { icon: Receipt, label: 'Order ID', value: selectedTxn.orderId, isLink: true }, { icon: Calendar, label: 'Date', value: selectedTxn.date } ].map((row) => (
                  <div key={row.label} className="flex items-center gap-4 px-1">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400"><row.icon size={18} /></div>
                    <div className="flex-1 border-b border-slate-50 pb-2"><p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">{row.label}</p><p className={`text-sm font-bold ${row.isLink ? 'text-indigo-600 underline' : 'text-[#1e293b]'}`}>{row.value}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-4 shrink-0">
              <button onClick={() => setIsDetailsModalOpen(false)} className="flex-1 py-4 text-sm font-black text-slate-400 border border-slate-100 rounded-2xl bg-white shadow-sm">Close</button>
              <button className="flex-[2] py-4 rounded-2xl bg-[#19246a] text-white font-black text-sm flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all"><Download size={18} /> Get Receipt</button>
            </div>
          </div>
        </div>
      )}

      {/* --- PAYOUT RULES MODAL --- */}
      {isRulesModalOpen && (
        <div className="fixed inset-0 z-[300] flex items-end md:items-center justify-center p-0 md:p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsRulesModalOpen(false)} />
          <div className="relative bg-white w-full md:max-w-xl h-[85vh] md:h-auto rounded-t-[32px] md:rounded-[32px] shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom duration-300">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between shrink-0">
              <div><h2 className="text-xl font-black text-[#19246a]">Payout Rules & Information</h2><p className="text-[11px] text-slate-400 font-bold uppercase tracking-tight">Understanding escrow management</p></div>
              <button onClick={() => setIsRulesModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400"><X size={20} /></button>
            </div>
            <div className="p-6 overflow-y-auto space-y-8 flex-1 custom-scrollbar">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="text-[10px] uppercase font-black text-slate-400 tracking-widest flex items-center gap-2"><Lock size={12} className="text-orange-500" /> Locked Funds</h4>
                  <ul className="space-y-3">
                    {[ "Payment received but order not delivered", "Within 7-day dispute window after delivery", "Active dispute or investigation in progress" ].map((text, i) => (
                      <li key={i} className="flex items-start gap-3"><CheckCircle2 size={14} className="text-orange-500 mt-0.5" /><span className="text-xs font-bold text-slate-700">{text}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[10px] uppercase font-black text-slate-400 tracking-widest flex items-center gap-2"><ShieldCheck size={12} className="text-emerald-500" /> Released Funds</h4>
                  <ul className="space-y-3">
                    {[ "Buyer confirms successful delivery", "7-day dispute window expires without issues", "Dispute resolved in vendor's favor" ].map((text, i) => (
                      <li key={i} className="flex items-start gap-3"><CheckCircle2 size={14} className="text-emerald-500 mt-0.5" /><span className="text-xs font-bold text-slate-700">{text}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 pb-4">
                  <h4 className="text-[10px] uppercase font-black text-slate-400 tracking-widest flex items-center gap-2"><Zap size={12} className="text-amber-500" /> Processing Time</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100"><p className="text-[10px] font-black text-slate-400 uppercase">Standard Payouts</p><p className="text-xs font-bold text-slate-700 mt-1">1-3 business days</p></div>
                    <div className="bg-indigo-50/50 p-3 rounded-xl border border-indigo-100"><p className="text-[10px] font-black text-indigo-400 uppercase">Instant Payouts (Premium)</p><p className="text-xs font-bold text-indigo-900 mt-1">Within 1 hour (Fees apply)</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white border-t border-slate-50 shrink-0"><button onClick={() => setIsRulesModalOpen(false)} className="w-full py-4 rounded-2xl bg-[#19246a] text-white font-black text-sm shadow-xl active:scale-95 transition-all">Got It</button></div>
          </div>
        </div>
      )}
    </div>
  );
}