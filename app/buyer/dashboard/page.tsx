"use client";

import React, { useState } from 'react';
import { 
  Wallet, CheckCircle2, Clock, 
  Eye, FileText, Truck, CreditCard, 
  Gavel, ShoppingBag, TrendingUp, 
  ArrowRight, AlertCircle, X
} from 'lucide-react';

export default function BuyerDashboard() {
  // Dynamic Notification State
  const [notifications, setNotifications] = useState([
    { 
      id: 1, 
      message: "You have 2 invoices awaiting payment", 
      actionLabel: "Pay Now", 
      type: "invoice" 
    },
    { 
      id: 2, 
      message: "Delivery completed – confirm release for Order #ORD-8472", 
      actionLabel: "Confirm Delivery", 
      type: "delivery" 
    }
  ]);

  const dismissNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 bg-slate-50 min-h-screen pb-24">
      
      {/* HEADER AREA */}
      <div>
        <h1 className="text-2xl font-black text-[#1e293b] flex items-center gap-2">
          Welcome back, Chioma! 👋
        </h1>
        <p className="text-sm font-bold text-slate-400 mt-1">
          Track your orders, manage payments, and stay updated on all your purchases.
        </p>
      </div>

      {/* DYNAMIC NOTIFICATION ALERTS */}
      {notifications.length > 0 && (
        <div className="space-y-3 animate-in fade-in slide-in-from-top-4 duration-500">
          {notifications.map((notif) => (
            <div 
              key={notif.id} 
              className="bg-[#fffbeb] border border-amber-100 p-4 rounded-xl flex items-center justify-between group relative overflow-hidden"
            >
              {/* Decorative side accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100/50 rounded-lg flex items-center justify-center text-amber-600 shrink-0">
                  <AlertCircle size={20} />
                </div>
                <p className="text-amber-900 text-[13px] font-bold leading-tight">{notif.message}</p>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  className="bg-[#19246a] text-white px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all shadow-lg shadow-indigo-100 shrink-0"
                >
                  {notif.actionLabel}
                </button>
                <button 
                  onClick={() => dismissNotification(notif.id)}
                  className="p-2 hover:bg-amber-200/50 rounded-full text-amber-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ESCROW OVERVIEW */}
      <section className="space-y-4">
        <h3 className="text-[10px] font-black text-[#1e293b] uppercase tracking-[0.2em] px-1">Escrow Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Money in Escrow', value: '₦245,000', sub: '3 active orders', icon: Wallet, color: 'text-indigo-600', bg: 'bg-indigo-50', hasClock: true },
            { label: 'Pending Payments', value: '₦85,000', sub: '2 invoices', icon: AlertCircle, color: 'text-amber-500', bg: 'bg-amber-50' },
            { label: 'Ready to Release', value: '₦125,000', sub: '1 order delivered', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
            { label: 'Refunded', value: '₦0', sub: 'This month', icon: TrendingUp, color: 'text-slate-400', bg: 'bg-slate-50' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-4 hover:border-indigo-200 transition-all group">
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon size={20} />
                </div>
                {item.hasClock && <Clock size={16} className="text-slate-300" />}
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                <h2 className="text-2xl font-black text-[#19246a] mt-1">{item.value}</h2>
                <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ORDERS IN PROGRESS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-[10px] font-black text-[#1e293b] uppercase tracking-[0.2em]">Orders in Progress</h3>
          <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-1 hover:underline">
            View all orders <ArrowRight size={12} />
          </button>
        </div>
        
        <div className="space-y-4">
          {[
            { id: 'ORD-8472', name: 'Ankara Print Fabric (5 yards)', vendor: 'Adebayo Fashion Store', price: '₦125,000', status: 'Delivered', color: 'emerald', progress: 100 },
            { id: 'ORD-8471', name: 'MacBook Pro 14" M3', vendor: 'Lagos Tech Hub', price: '₦2,450,000', status: 'Shipped', color: 'blue', progress: 75 },
            { id: 'ORD-8470', name: 'Skincare Bundle', vendor: 'Beauty Essentials NG', price: '₦45,000', status: 'Processing', color: 'amber', progress: 35 }
          ].map((order) => (
            <div key={order.id} className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6 md:p-8 space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1">
                  <h4 className="text-base font-black text-[#1e293b]">{order.name}</h4>
                  <p className="text-xs font-bold text-slate-400">{order.vendor}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Order <span className="text-indigo-600">#{order.id}</span></p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-lg font-black text-[#19246a]">{order.price}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mt-2 ${
                    order.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : 
                    order.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Dynamic Stepper */}
              <div className="space-y-4">
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{ width: `${order.progress}%` }} />
                </div>
                <div className="grid grid-cols-4 text-center">
                  {['Paid', 'Processing', 'Shipped', 'Delivered'].map((step, i) => (
                    <p key={step} className={`text-[9px] font-black uppercase tracking-tighter ${order.progress >= (i+1)*25 || (i===0 && order.progress > 0) ? 'text-emerald-600' : 'text-slate-300'}`}>
                      {step}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button className="flex-1 flex items-center justify-center gap-2 border border-slate-200 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all">
                  <Eye size={16} /> Track Order
                </button>
                {order.status === 'Delivered' && (
                  <button className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 text-white py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all active:scale-95 shadow-lg shadow-emerald-50">
                    <CheckCircle2 size={16} /> Confirm Delivery
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOWER GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Pending Invoices */}
        <section className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-[10px] font-black text-[#1e293b] uppercase tracking-[0.2em]">Pending Invoices</h3>
            <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-1">View all <ArrowRight size={10} /></button>
          </div>
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-x-auto">
            <table className="w-full text-left min-w-[500px]">
              <thead className="border-b border-slate-50">
                <tr>
                  <th className="px-6 py-5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Invoice</th>
                  <th className="px-6 py-5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Vendor</th>
                  <th className="px-6 py-5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                  <th className="px-6 py-5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Due Date</th>
                  <th className="px-6 py-5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { id: 'INV-1024', desc: 'Custom Tailoring Service', vendor: 'Fashion Forward NG', amount: '₦85,000', date: '2025-02-09', status: 'Overdue' },
                  { id: 'INV-1023', desc: 'Website Development', vendor: 'Tech Solutions Ltd', amount: '₦125,000', date: '2025-02-12', status: 'Pending' }
                ].map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-5">
                      <p className="text-xs font-black text-[#1e293b]">{inv.id}</p>
                      <p className="text-[9px] font-bold text-slate-400 mt-0.5">{inv.desc}</p>
                    </td>
                    <td className="px-6 py-5 text-[11px] font-bold text-slate-600">{inv.vendor}</td>
                    <td className="px-6 py-5 text-[11px] font-black text-[#19246a]">{inv.amount}</td>
                    <td className="px-6 py-5">
                      <p className="text-[10px] font-bold text-slate-600">{inv.date}</p>
                      <span className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded mt-1 inline-block ${inv.status === 'Overdue' ? 'bg-red-50 text-red-500' : 'bg-amber-50 text-amber-500'}`}>{inv.status}</span>
                    </td>
                    <td className="px-6 py-5">
                      <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-md">Pay Now</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recent Activity Feed */}
        <section className="lg:col-span-2 space-y-4">
          <h3 className="text-[10px] font-black text-[#1e293b] uppercase tracking-[0.2em] px-1">Recent Activity</h3>
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 space-y-8 h-full">
            {[
              { title: 'You paid ₦125,000 to Adebayo Fashion Store', time: '2 hours ago', icon: Wallet, bg: 'bg-emerald-50 text-emerald-600' },
              { title: 'Lagos Tech Hub shipped your order', time: '5 hours ago', icon: Truck, bg: 'bg-indigo-50 text-indigo-600' },
              { title: 'Funds released to Beauty Essentials NG', time: '1 day ago', icon: CheckCircle2, bg: 'bg-emerald-50 text-emerald-600' },
              { title: 'New invoice from Fashion Forward NG', time: '1 day ago', icon: FileText, bg: 'bg-indigo-50 text-indigo-600' }
            ].map((activity, idx) => (
              <div key={idx} className="flex gap-4 relative">
                {idx !== 3 && <div className="absolute left-[19px] top-10 w-[2px] h-8 bg-slate-100" />}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activity.bg} z-10 border-2 border-white shadow-sm`}>
                  <activity.icon size={18} />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#1e293b] leading-tight">{activity.title}</p>
                  <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* QUICK ACTIONS */}
      <section className="space-y-4">
        <h3 className="text-[10px] font-black text-[#1e293b] uppercase tracking-[0.2em] px-1">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Pay Invoice', sub: 'Make a payment', icon: CreditCard, color: 'text-emerald-500', bg: 'bg-emerald-50' },
            { label: 'Track Order', sub: 'Check delivery status', icon: ShoppingBag, color: 'text-indigo-500', bg: 'bg-indigo-50' },
            { label: 'View Transactions', sub: 'Escrow history', icon: FileText, color: 'text-indigo-500', bg: 'bg-indigo-50' },
            { label: 'Raise Dispute', sub: 'Get help', icon: Gavel, color: 'text-red-500', bg: 'bg-red-50' }
          ].map((action, idx) => (
            <button key={idx} className="bg-white border border-slate-100 hover:border-indigo-500 p-6 md:p-8 rounded-[32px] group transition-all shadow-sm text-center active:scale-95">
              <div className={`w-12 h-12 ${action.bg} rounded-xl mx-auto mb-4 flex items-center justify-center transition-transform group-hover:scale-110`}>
                <action.icon className={action.color} size={24} />
              </div>
              <p className="font-black text-xs text-[#1e293b] uppercase tracking-tighter">{action.label}</p>
              <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tight">{action.sub}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}