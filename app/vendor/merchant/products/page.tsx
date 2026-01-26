"use client";

import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Download, 
  Package, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  Edit2,
  Power,
  X,
  ShoppingBag,
  Wrench,
  ChevronRight,
  Filter,
  Eye
} from 'lucide-react';

const stats = [
  { label: 'Total Products', value: '4', icon: Package, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { label: 'Active Listings', value: '6', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Out of Stock', value: '1', icon: XCircle, color: 'text-red-600', bg: 'bg-red-50' },
  { label: 'Low Stock Alerts', value: '2', icon: AlertTriangle, color: 'text-orange-600', bg: 'bg-orange-50' },
];

const products = [
  { id: 'PS001', name: "Men's Casual Shirt", category: 'Clothing', type: 'Product', price: '₦8,500', stock: '45 units', stockStatus: 'In Stock', status: 'Active' },
  { id: 'PS002', name: "Women's Ankara Dress", category: 'Clothing', type: 'Product', price: '₦15,000', stock: '8 units', stockStatus: 'Low Stock', status: 'Active' },
  { id: 'PS003', name: 'Custom Tailoring Service', category: 'Services', type: 'Service', price: '₦5,000', stock: 'N/A', stockStatus: null, status: 'Active' },
  { id: 'PS004', name: 'Leather Belt', category: 'Accessories', type: 'Product', price: '₦3,500', stock: '0 units', stockStatus: 'Out of Stock', status: 'Active' },
  { id: 'PS005', name: 'Fabric Consultation', category: 'Services', type: 'Service', price: '₦2,000', stock: 'N/A', stockStatus: null, status: 'Active' },
  { id: 'PS006', name: 'Designer Handbag', category: 'Accessories', type: 'Product', price: '₦25,000', stock: '5 units', stockStatus: 'Low Stock', status: 'Active' },
];

export default function MerchantProducts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemType, setItemType] = useState<'Product' | 'Service'>('Product');

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8 bg-slate-50 min-h-screen relative pb-24 md:pb-8">
      
      {/* Header Area - Responsive Layout */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="bg-[#19246a] md:bg-transparent -mx-4 -mt-4 p-6 md:p-0 md:m-0 rounded-b-[24px] md:rounded-none shadow-lg md:shadow-none">
          <div className="flex items-center justify-between md:block">
            <h1 className="text-xl md:text-2xl font-bold text-white md:text-[#1e293b]">Products</h1>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="md:hidden bg-[#22c55e] text-white p-2 rounded-full shadow-lg active:scale-95"
            >
              <Plus size={24} />
            </button>
          </div>
          <p className="text-indigo-100 md:text-slate-500 text-xs md:text-sm font-medium mt-1">
            Manage your store inventory and offerings
          </p>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="hidden md:flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm active:scale-95"
        >
          <Plus size={18} /> Add Product / Service
        </button>
      </div>

      {/* Quick Actions (Mobile Only Cards) */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col items-center gap-2 text-center shadow-sm">
           <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center">
             <Plus size={20} />
           </div>
           <p className="text-[11px] font-bold text-slate-700">Add Product</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col items-center gap-2 text-center shadow-sm">
           <div className="w-10 h-10 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center">
             <Eye size={20} />
           </div>
           <p className="text-[11px] font-bold text-slate-700">View Store</p>
        </div>
      </div>

      {/* Stats Summary Grid - 2 cols on mobile */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-100 shadow-sm">
            <div className={`${stat.bg} ${stat.color} w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center mb-3 md:mb-4`}>
              <stat.icon size={18} />
            </div>
            <p className="text-lg md:text-2xl font-extrabold text-[#1e293b]">{stat.value}</p>
            <p className="text-[9px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters & Search - Optimized for Screen Width */}
      <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-10 pr-4 py-2.5 border border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none bg-slate-50/50"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 md:grid md:grid-cols-3 md:gap-3 no-scrollbar">
            <button className="lg:hidden flex items-center gap-2 px-4 py-2.5 border border-slate-100 rounded-xl bg-white text-slate-600 text-xs font-bold shrink-0">
               <Filter size={14} /> Filter
            </button>
            <select className="hidden md:block px-4 py-2.5 border border-slate-100 rounded-xl text-sm bg-white outline-none cursor-pointer">
              <option>All Categories</option>
            </select>
            <select className="hidden md:block px-4 py-2.5 border border-slate-100 rounded-xl text-sm bg-white outline-none cursor-pointer">
              <option>Status</option>
            </select>
            <button className="hidden md:flex items-center gap-2 px-4 py-2 text-slate-500 border border-slate-100 rounded-xl text-xs font-bold hover:bg-slate-50">
              <Download size={14} /> Export
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View Table */}
      <div className="hidden md:block bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-200">
                <th className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Product</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Category</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Price</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Stock</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Status</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500"><Package size={20} /></div>
                      <div>
                        <p className="text-sm font-bold text-[#1e293b]">{item.name}</p>
                        <p className="text-[10px] text-slate-400 font-medium tracking-tight">ID: {item.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-600">{item.category}</td>
                  <td className="px-6 py-4 text-sm font-bold text-[#1e293b]">{item.price}</td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-bold text-slate-700">{item.stock}</p>
                    {item.stockStatus && (
                      <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${
                        item.stockStatus === 'In Stock' ? 'bg-emerald-50 text-emerald-500' :
                        item.stockStatus === 'Low Stock' ? 'bg-orange-50 text-orange-500' : 'bg-red-50 text-red-500'
                      }`}>
                        {item.stockStatus}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs"><CheckCircle2 size={16} /> Active</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3 text-slate-400">
                      <button className="hover:text-indigo-600 transition-colors"><Edit2 size={16} /></button>
                      <button className="hover:text-red-500 transition-colors"><Power size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile View List (Responsive Cards) */}
      <div className="md:hidden space-y-3">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">All Products ({products.length})</p>
        {products.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group active:bg-slate-50 transition-colors">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-indigo-500 border border-slate-100"><Package size={24} /></div>
                <div className="space-y-1">
                   <p className="text-sm font-bold text-slate-900">{item.name}</p>
                   <p className="text-[11px] text-slate-400 font-medium">{item.category}</p>
                   <div className="flex items-center gap-2">
                     <span className="text-sm font-black text-[#19246a]">{item.price}</span>
                     {item.stockStatus && (
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                          item.stockStatus === 'In Stock' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'
                        }`}>
                          {item.stock}
                        </span>
                     )}
                   </div>
                </div>
             </div>
             <ChevronRight className="text-slate-300 group-active:translate-x-1 transition-transform" size={20} />
          </div>
        ))}
      </div>

      {/* ADD PRODUCT MODAL - Fully Responsive Full-screen Mobile Style */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-center">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" onClick={() => setIsModalOpen(false)} />
          
          <div className="relative bg-white w-full md:max-w-lg h-[90vh] md:h-auto rounded-t-[32px] md:rounded-3xl shadow-2xl flex flex-col animate-in slide-in-from-bottom duration-300">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-50 flex items-center justify-between shrink-0">
              <h2 className="text-lg font-black text-[#1e293b]">Add Product / Service</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2.5 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 custom-scrollbar pb-10">
              <div className="space-y-3">
                <label className="text-[11px] uppercase font-bold text-slate-400 tracking-widest">Type *</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setItemType('Product')}
                    className={`p-5 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${
                      itemType === 'Product' ? 'border-[#22c55e] bg-emerald-50/20' : 'border-slate-50 bg-slate-50/50'
                    }`}
                  >
                    <ShoppingBag className={itemType === 'Product' ? 'text-[#22c55e]' : 'text-slate-300'} size={28} />
                    <div className="text-center">
                      <p className={`text-xs font-bold ${itemType === 'Product' ? 'text-slate-900' : 'text-slate-500'}`}>Product</p>
                      <p className="text-[10px] text-slate-400">Physical item</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setItemType('Service')}
                    className={`p-5 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${
                      itemType === 'Service' ? 'border-[#22c55e] bg-emerald-50/20' : 'border-slate-50 bg-slate-50/50'
                    }`}
                  >
                    <Wrench className={itemType === 'Service' ? 'text-[#22c55e]' : 'text-slate-300'} size={28} />
                    <div className="text-center">
                      <p className={`text-xs font-bold ${itemType === 'Service' ? 'text-slate-900' : 'text-slate-500'}`}>Service</p>
                      <p className="text-[10px] text-slate-400">Offering</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Form Fields - Consistently Spaced */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Item Name *</label>
                  <input type="text" placeholder="e.g., Men's Shirt" className="w-full px-4 py-3.5 rounded-xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 outline-none text-sm font-medium" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Category *</label>
                  <select className="w-full px-4 py-3.5 rounded-xl border border-slate-100 bg-slate-50/50 outline-none text-sm font-medium appearance-none">
                    <option value="">Select Category</option>
                    <option value="clothing">Clothing</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Price (₦) *</label>
                    <input type="number" placeholder="0.00" className="w-full px-4 py-3.5 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-medium" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Stock *</label>
                    <input 
                      type="number" 
                      placeholder="0" 
                      disabled={itemType === 'Service'}
                      className={`w-full px-4 py-3.5 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-medium ${itemType === 'Service' ? 'opacity-30 cursor-not-allowed' : ''}`} 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Description *</label>
                  <textarea rows={4} placeholder="Describe your item..." className="w-full px-4 py-3.5 rounded-xl border border-slate-100 bg-slate-50/50 resize-none text-sm font-medium" />
                </div>
              </div>
            </div>

            {/* Modal Footer - Sticky Bottom */}
            <div className="p-6 bg-white border-t border-slate-50 flex items-center gap-4 shrink-0">
              <button onClick={() => setIsModalOpen(false)} className="flex-1 py-3 text-sm font-bold text-slate-400">Cancel</button>
              <button className="flex-[2] py-4 rounded-2xl bg-[#22c55e] text-white font-black text-sm shadow-xl shadow-emerald-100 active:scale-95 transition-all">
                Add {itemType}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}