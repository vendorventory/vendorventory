"use client";

import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Calendar, 
  Filter, 
  Download, 
  FileText, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Eye,
  ChevronLeft,
  ChevronRight,
  Receipt,
  ShoppingCart,
  DollarSign,
  History,
  X,
  User,
  Package,
  Mail,
  Phone,
  Send
} from 'lucide-react';

const stats = [
  { label: 'Total Invoices', value: '127', icon: FileText, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { label: 'Pending Orders', value: '8', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
  { label: 'Completed Orders', value: '115', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Disputed Orders', value: '4', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
];

const orders = [
  { id: 'INV-2024-001', buyer: 'Chioma Nwankwo', product: 'Ankara Dress (Custom)', amount: '₦32,000', payment: 'In Escrow', status: 'Pending', date: 'Jan 30, 2024' },
  { id: 'ORD-2024-001', buyer: 'Yemi Adeyemi', product: 'Senator Agbada Set', amount: '₦45,000', payment: 'In Escrow', status: 'Pending', date: 'Jan 28, 2024' },
  { id: 'INV-2024-002', buyer: 'Olanrewaju Balogun', product: 'Wedding Aso-Ebi (Bulk)', amount: '₦350,000', payment: 'In Escrow', status: 'Completed', date: 'Jan 28, 2024' },
  { id: 'ORD-2024-044', buyer: 'Amina Hassan', product: 'Kaftan & Cap', amount: '₦22,000', payment: 'Released', status: 'Completed', date: 'Jan 27, 2024' },
  { id: 'ORD-2024-043', buyer: 'Tunde Ogunbiyi', product: 'Casual Shirt (3pcs)', amount: '₦17,500', payment: 'Held', status: 'Disputed', date: 'Jan 26, 2024' },
  { id: 'INV-2024-003', buyer: 'Ngozi Okeke', product: 'Corporate Suit', amount: '₦55,000', payment: 'Released', status: 'Completed', date: 'Jan 25, 2024' },
];

export default function MerchantInvoices() {
  const [activeTab, setActiveTab] = useState('All');
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const handleViewOrder = (order: any) => {
    setSelectedOrder(order);
    setIsViewModalOpen(true);
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8 bg-slate-50 min-h-screen pb-24 lg:pb-8 relative">
      
      {/* MOBILE HEADER & SUMMARY CARD */}
      <div className="lg:hidden space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-[#1e293b]">Invoices & Orders</h1>
            <p className="text-[11px] text-slate-500 font-medium tracking-tight">Manage your transactions</p>
          </div>
          <button 
            onClick={() => setIsCreateModalOpen(true)}
            className="w-10 h-10 bg-[#19246a] text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
          >
            <Plus size={20} />
          </button>
        </div>

        <div className="bg-[#19246a] rounded-[32px] p-6 text-white shadow-xl space-y-6">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <div className="text-center flex-1">
              <p className="text-[10px] uppercase font-bold text-indigo-200 tracking-wider">Total</p>
              <p className="text-xl font-black">127</p>
            </div>
            <div className="text-center flex-1 border-x border-white/10">
              <p className="text-[10px] uppercase font-bold text-indigo-200 tracking-wider">Pending</p>
              <p className="text-xl font-black text-orange-400">8</p>
            </div>
            <div className="text-center flex-1">
              <p className="text-[10px] uppercase font-bold text-indigo-200 tracking-wider">Escrow</p>
              <p className="text-xl font-black text-emerald-400">₦285.2K</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: Receipt, label: 'Invoice' },
              { icon: ShoppingCart, label: 'Orders' },
              { icon: DollarSign, label: 'Escrow', active: true },
              { icon: History, label: 'Disputed' }
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div className={`w-12 h-10 rounded-xl flex items-center justify-center transition-colors ${item.active ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/10 text-indigo-200'}`}>
                  <item.icon size={18} />
                </div>
                <p className="text-[9px] font-bold text-indigo-100 uppercase tracking-tighter">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP HEADER & STATS */}
      <div className="hidden lg:block space-y-8">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#1e293b]">Invoices & Orders</h1>
            <p className="text-sm text-slate-500 font-medium">Manage all your invoices and customer orders.</p>
          </div>
          <button 
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center justify-center gap-2 bg-[#19246a] hover:bg-[#141d54] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm active:scale-95"
          >
            <Plus size={18} /> Create Invoice
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
      </div>

      {/* FILTER PILLS */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {['All', 'Pending', 'Completed', 'Disputed'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
              activeTab === tab 
              ? 'bg-[#19246a] text-white border-[#19246a]' 
              : 'bg-white text-slate-400 border-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* SEARCH BAR & FILTERS - Desktop only */}
      <div className="hidden lg:block bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by invoice ID or buyer name..." 
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
            />
          </div>
          <div className="flex flex-row gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
              <Calendar size={16} /> Date Range
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
              <Download size={16} /> Export
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE LIST VIEW */}
      <div className="lg:hidden space-y-4">
        {orders.map((order) => (
          <div 
            key={order.id} 
            onClick={() => handleViewOrder(order)}
            className="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm space-y-4 relative active:scale-[0.98] transition-transform cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900">{order.id}</p>
                  <p className="text-[11px] text-slate-400 font-bold">{order.buyer}</p>
                </div>
              </div>
              <ChevronRight className="text-slate-300" size={18} />
            </div>
            <p className="text-xs font-medium text-slate-600">{order.product}</p>
            <div className="flex items-center justify-between pt-3 border-t border-slate-50">
              <span className="text-lg font-black text-[#19246a]">{order.amount}</span>
              <div className="flex gap-2">
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${
                  order.status === 'Pending' ? 'bg-orange-50 text-orange-500' : 'bg-emerald-50 text-emerald-500'
                }`}>
                  {order.status}
                </span>
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter bg-blue-50 text-blue-500 border border-blue-100`}>
                  {order.payment}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP TABLE VIEW */}
      <div className="hidden lg:block bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Buyer Name</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Product</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Amount</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Payment Status</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Order Status</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Date</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-sm text-[#1e293b]">{order.id}</td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-600">{order.buyer}</td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-600">{order.product}</td>
                  <td className="px-6 py-4 text-sm font-bold text-[#1e293b]">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-blue-600">{order.payment}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${order.status === 'Pending' ? 'bg-orange-50 text-orange-600' : 'bg-emerald-50 text-emerald-600'}`}>{order.status}</span>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-600">{order.date}</td>
                  <td className="px-6 py-4 text-center">
                    <button 
                      onClick={() => handleViewOrder(order)}
                      className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    >
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CREATE INVOICE MODAL (DUAL LAYOUT) */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-[250] flex items-end md:items-center justify-center p-0 md:p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsCreateModalOpen(false)} />
          
          <div className="relative bg-white w-full md:max-w-lg h-[90vh] md:h-auto overflow-hidden flex flex-col transition-all duration-300 shadow-2xl rounded-t-[32px] md:rounded-[32px]">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-50 flex items-center justify-between shrink-0">
              <div>
                <h2 className="text-xl font-black text-[#1e293b]">Create Invoice</h2>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tight">Send a request to your customer</p>
              </div>
              <button onClick={() => setIsCreateModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 custom-scrollbar pb-10">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-[#1e293b]">Buyer Name *</label>
                  <input type="text" placeholder="Enter customer's full name" className="w-full px-4 py-3.5 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-medium outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/10" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-[#1e293b]">Buyer Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                    <input type="email" placeholder="buyer@example.com" className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-medium outline-none focus:bg-white" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-1.5">
                    <label className="text-xs font-black text-[#1e293b]">Buyer Phone *</label>
                    <input type="tel" placeholder="08012345678" className="w-full px-4 py-3.5 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-medium outline-none" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-[#1e293b]">Amount (₦) *</label>
                    <input type="number" placeholder="25000" className="w-full px-4 py-3.5 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-black outline-none" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-[#1e293b]">Product / Service *</label>
                  <input type="text" placeholder="e.g. Ankara Dress (Custom)" className="w-full px-4 py-3.5 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-medium outline-none" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-[#1e293b]">Description (Optional)</label>
                  <textarea rows={3} placeholder="Add any additional details..." className="w-full px-4 py-3.5 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-medium outline-none resize-none" />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-3 shrink-0">
              <button onClick={() => setIsCreateModalOpen(false)} className="flex-1 py-4 rounded-2xl border border-slate-200 font-black text-slate-400 bg-white text-sm shadow-sm">Cancel</button>
              <button className="flex-[1.5] py-4 rounded-2xl bg-[#19246a] text-white font-black text-sm flex items-center justify-center gap-2 hover:bg-[#141d54] shadow-lg active:scale-95 transition-all">
                <Send size={18} /> Send Invoice
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW ORDER DETAILS MODAL (DUAL LAYOUT) */}
      {isViewModalOpen && selectedOrder && (
        <div className="fixed inset-0 z-[250] flex items-end md:items-center justify-center p-0 md:p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsViewModalOpen(false)} />
          <div className="relative bg-white w-full md:max-w-lg h-[90vh] md:h-auto rounded-t-[32px] md:rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between shrink-0">
              <div>
                <h2 className="text-xl font-black text-[#1e293b]">Order Details</h2>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">{selectedOrder.id}</p>
              </div>
              <button onClick={() => setIsViewModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-5 overflow-y-auto">
              <div className="flex gap-2">
                <span className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black ${selectedOrder.status === 'Pending' ? 'bg-[#fff9eb] text-[#f59e0b]' : 'bg-emerald-50 text-emerald-600'}`}>
                  <Clock size={14} /> {selectedOrder.status}
                </span>
                <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 text-blue-600 text-xs font-black border border-blue-100">
                  {selectedOrder.payment}
                </span>
              </div>

              <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-3">
                <h4 className="text-[10px] uppercase font-black text-slate-400 tracking-widest flex items-center gap-2"><User size={12} /> Buyer Information</h4>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-500">Name:</span>
                  <span className="text-sm font-black text-[#1e293b]">{selectedOrder.buyer}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-500">Order Type:</span>
                  <span className="text-sm font-black text-[#1e293b]">Invoice</span>
                </div>
              </div>

              <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-3">
                <h4 className="text-[10px] uppercase font-black text-slate-400 tracking-widest flex items-center gap-2"><Package size={12} /> Product Details</h4>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-bold text-slate-500">Item:</span>
                  <span className="text-sm font-black text-[#1e293b] text-right max-w-[200px]">{selectedOrder.product}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                  <span className="text-sm font-bold text-slate-500">Amount:</span>
                  <span className="text-lg font-black text-[#19246a]">{selectedOrder.amount}</span>
                </div>
              </div>

              <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-3">
                <h4 className="text-[10px] uppercase font-black text-slate-400 tracking-widest flex items-center gap-2"><Calendar size={12} /> Order Timeline</h4>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-500">Order Date:</span>
                  <span className="text-sm font-black text-[#1e293b]">{selectedOrder.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-500">Status Updated:</span>
                  <span className="text-sm font-black text-[#1e293b]">January 31, 2026</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-3 shrink-0">
              <button onClick={() => setIsViewModalOpen(false)} className="flex-1 py-4 rounded-2xl border border-slate-200 font-black text-slate-500 hover:bg-white text-sm shadow-sm">Close</button>
              <button className="flex-[1.5] py-4 rounded-2xl bg-[#19246a] text-white font-black text-sm flex items-center justify-center gap-2 hover:bg-[#141d54] shadow-lg active:scale-95 transition-all">
                <Download size={18} /> Download Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}