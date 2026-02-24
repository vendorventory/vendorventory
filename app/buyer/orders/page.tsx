"use client";

import React, { useState } from 'react';
import { 
  Package, Truck, CheckCircle2, Clock, 
  Eye, MapPin, ChevronRight, Search,
  Filter, ExternalLink
} from 'lucide-react';

// Import the dynamic modal component
import { OrderTrackingModal } from '../components/OrderTrackingModal';

export default function BuyerOrders() {
  const [activeFilter, setActiveFilter] = useState('All Orders');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const filters = ['All Orders', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered'];

  const orders = [
    { 
      id: 'ORD-8472', 
      inv: 'INV-1024', 
      vendor: 'Fashion Forward NG', 
      vendorType: 'Verified Vendor',
      buyer: 'Chioma Nwosu',
      buyerEmail: 'chioma.nwosu@example.com',
      service: 'Custom Tailoring Service', 
      amount: '₦85,000', 
      partner: 'GiG Logistics', 
      partnerID: 'GIG-2925-45678', 
      estDelivery: '2025-02-12', 
      status: 'Out for Delivery', 
      description: 'Full custom suit tailoring with premium fabric.',
      color: 'bg-purple-50 text-purple-600', 
      action: 'Track' 
    },
    { 
      id: 'ORD-8471', 
      inv: 'INV-1023', 
      vendor: 'Tech Solutions Ltd', 
      vendorType: 'Verified Vendor',
      buyer: 'Chioma Nwosu',
      buyerEmail: 'chioma.nwosu@example.com',
      service: 'Website Development (Milestone 1)', 
      amount: '₦125,000', 
      partner: 'N/A', 
      partnerID: 'N/A', 
      estDelivery: '2025-02-15', 
      status: 'Processing', 
      description: 'Initial UI/UX design and homepage development.',
      color: 'bg-amber-50 text-amber-600', 
      action: 'View' 
    },
    { 
      id: 'ORD-8470', 
      inv: 'INV-1022', 
      vendor: 'Adebayo Fashion Store', 
      vendorType: 'Verified Vendor',
      buyer: 'Chioma Nwosu',
      buyerEmail: 'chioma.nwosu@example.com',
      service: 'Ankara Print Fabric (5 yards)', 
      amount: '₦125,000', 
      partner: 'DHL Nigeria', 
      partnerID: 'DHL-NG-123495', 
      estDelivery: '2025-02-10', 
      status: 'Completed', 
      description: 'High-quality Ankara print fabric from Lagos market.',
      color: 'bg-emerald-50 text-emerald-600', 
      action: 'Confirm' 
    },
  ];

  const handleActionClick = (order: any) => {
    setSelectedOrder({
      id: order.id,
      invoiceId: order.inv,
      vendor: order.vendor,
      vendorType: order.vendorType,
      buyer: order.buyer,
      buyerEmail: order.buyerEmail,
      deliveryPartner: order.partner,
      trackingNumber: order.partnerID || 'N/A',
      estDelivery: order.estDelivery,
      amount: order.amount,
      description: order.service,
      status: order.status
    });
    setIsModalOpen(true); // Open the modal
  };

  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      
      {/* HEADER AREA */}
      <div>
        <h1 className="text-2xl font-black text-[#1e293b]">Orders & Tracking</h1>
        <p className="text-sm font-bold text-slate-400 mt-1">Track deliveries and monitor order progress.</p>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Active Orders', value: '5', sub: 'Currently in progress', icon: Package, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'Shipped', value: '2', sub: 'In transit', icon: Truck, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Out for Delivery', value: '1', sub: 'Arriving soon', icon: MapPin, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Awaiting Confirmation', value: '2', sub: 'Delivered - confirm receipt', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-3">
            <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center ${item.color}`}>
              <item.icon size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
              <h2 className="text-xl font-black text-[#1e293b] mt-1">{item.value}</h2>
              <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* STATUS FILTER BAR */}
      <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar pb-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mr-4 shrink-0">Filter by Status:</span>
          <div className="flex items-center bg-white p-1 rounded-xl border border-slate-100 shadow-sm gap-1">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeFilter === filter 
                    ? 'bg-[#19246a] text-white shadow-md' 
                    : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ORDERS TABLE */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[1100px]">
            <thead>
              <tr className="border-b border-slate-50 bg-slate-50/30">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Order / Invoice ID</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Vendor</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Delivery Partner</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Est. Delivery</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {orders.map((order) => (
                <tr key={order.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <p className="text-sm font-black text-[#1e293b]">{order.id}</p>
                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tight">{order.inv}</p>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-black text-slate-700">{order.vendor}</p>
                    <p className="text-[10px] font-bold text-slate-400 mt-1">{order.service}</p>
                  </td>
                  <td className="px-8 py-6 text-sm font-black text-[#19246a]">{order.amount}</td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-black text-slate-700">{order.partner}</p>
                    <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">{order.partnerID}</p>
                  </td>
                  <td className="px-8 py-6 text-sm font-black text-slate-700">{order.estDelivery}</td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${order.color}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <button 
                      onClick={() => handleActionClick(order)}
                      className={`flex items-center justify-center gap-2 mx-auto px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-sm ${
                        order.action === 'Track' ? 'bg-blue-600 text-white shadow-blue-100' :
                        order.action === 'Confirm' ? 'bg-emerald-50 text-white shadow-emerald-100' :
                        'border border-slate-200 text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      {order.action === 'Track' && <Truck size={14} />}
                      {order.action === 'Confirm' && <CheckCircle2 size={14} />}
                      {order.action === 'View' && <Eye size={14} />}
                      {order.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- MODAL INTEGRATION --- */}
      {selectedOrder && (
        <OrderTrackingModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          order={selectedOrder}
        />
      )}
    </main>
  );
}