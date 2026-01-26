'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LayoutDashboard, Store, Truck, Users, CreditCard, 
  FileText, ShieldCheck, Settings, Bell, ChevronDown, 
  Menu, X, DollarSign, ShoppingCart, Scale, 
  Globe, Lock, Mail, Link as LinkIcon, 
  CheckCircle2, AlertCircle, Eye, EyeOff, Upload, Save, AlertTriangle
} from 'lucide-react';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

// --- Interfaces ---
interface SectionHeaderProps {
  title: string;
  subtext: string;
  icon: React.ElementType;
  onEdit?: () => void;
  isEditing?: boolean;
}

interface StatusBadgeProps {
  status: string;
}

interface ToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

// --- Mock Data Constants ---
const roles = [
  { role: 'Super Admin', access: 'Full platform access' },
  { role: 'Dispute Agent', access: 'Dispute resolution only' },
  { role: 'Read-Only Admin', access: 'View access only' },
];

const emailTemplates = [
  'Transaction Confirmation Email', 
  'Dispute Alert Email', 
  'KYC Verification Email'
];

// --- Helper Components ---
const SectionHeader = ({ title, subtext, icon: Icon, onEdit, isEditing }: SectionHeaderProps) => (
  <div className="flex justify-between items-start mb-6">
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#152570]">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-lg font-bold text-[#152570]">{title}</h3>
        <p className="text-sm text-slate-500">{subtext}</p>
      </div>
    </div>
    {onEdit && !isEditing && (
      <button 
        onClick={onEdit}
        className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
      >
        Edit Settings
      </button>
    )}
    {isEditing && (
      <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded">
        Edit Mode
      </span>
    )}
  </div>
);

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const isEnabled = ['Enabled', 'Connected', 'Active', 'Required'].includes(status);
  const isOptional = status === 'Optional';
  
  let colorClass = 'bg-slate-100 text-slate-500';
  if (isEnabled) colorClass = 'bg-green-50 text-green-600';
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold ${colorClass}`}>
      {status}
    </span>
  );
};

const Toggle = ({ enabled, onToggle }: ToggleProps) => (
  <button 
    onClick={onToggle}
    className={`w-10 h-5 rounded-full relative transition-colors duration-200 ${enabled ? 'bg-green-500' : 'bg-slate-300'}`}
  >
    <div 
      className={`absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm transition-all duration-200 ${enabled ? 'left-6' : 'left-1'}`} 
    />
  </button>
);

export default function SettingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVendorsMenuOpen, setIsVendorsMenuOpen] = useState(false);

  // --- 1. Platform Settings State ---
  const [isEditingPlatform, setIsEditingPlatform] = useState(false);
  const [platformForm, setPlatformForm] = useState({
    name: 'Vendor Ventory',
    email: 'support@vendorventory.com',
    currency: 'NGN - Nigerian Naira',
    timezone: 'Africa/Lagos',
  });

  // --- 2. Payment Settings State ---
  const [isEditingPayment, setIsEditingPayment] = useState(false);
  const [paymentForm, setPaymentForm] = useState({
    timeline: 'T+2 (2 Business Days)',
    gateways: [
      { id: 'paystack', name: 'Paystack', desc: 'Nigerian payment processor', enabled: true },
      { id: 'flutterwave', name: 'Flutterwave', desc: 'Pan-African payment platform', enabled: true },
      { id: 'opay', name: 'Opay', desc: 'Mobile money platform', enabled: false },
    ]
  });

  // --- 3. Security Settings State ---
  const [isEditingSecurity, setIsEditingSecurity] = useState(false);
  const [securityForm, setSecurityForm] = useState({
    passwordLength: 8,
    specialChars: true,
    numbers: true,
    sessionTimeout: 30,
    twoFactor: false,
  });

  // --- 4. Notification Settings State ---
  const [isEditingNotifications, setIsEditingNotifications] = useState(false);
  const [notificationForm, setNotificationForm] = useState([
    { id: 'transaction', name: 'Transaction Alerts', desc: 'Notify admins of high-value transactions', enabled: true },
    { id: 'dispute', name: 'Dispute Notifications', desc: 'Alert when new disputes are opened', enabled: true },
    { id: 'kyc', name: 'KYC Alerts', desc: 'Notify when KYC submission requires review', enabled: true },
    { id: 'system', name: 'System Alerts', desc: 'Critical platform notifications', enabled: true },
  ]);

  // --- Handlers ---
  const handlePlatformChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlatformForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTimelineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentForm(prev => ({ ...prev, timeline: e.target.value }));
  };

  const handleGatewayToggle = (id: string) => {
    setPaymentForm(prev => ({
      ...prev,
      gateways: prev.gateways.map(gw => gw.id === id ? { ...gw, enabled: !gw.enabled } : gw)
    }));
  };

  const handleSecurityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecurityForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleSecurityOption = (key: keyof typeof securityForm) => {
    // @ts-ignore - simplified toggle logic for boolean keys
    setSecurityForm(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNotificationToggle = (id: string) => {
    setNotificationForm(prev => prev.map(n => n.id === id ? { ...n, enabled: !n.enabled } : n));
  };

  return (
    <div className={`min-h-screen bg-[#F8FAFC] flex ${arimo.variable} ${arimo.className}`}>
      
      {/* --- Sidebar (Left) --- */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#152570] text-white transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 shadow-2xl lg:shadow-none flex flex-col`}>
        <div className="p-6 border-b border-[#1f3a8a] flex justify-between items-center">
          <div className="relative w-40 h-10">
             <Image src="/images/logo.png" alt="Vendor Ventory" fill className="object-contain object-left" priority />
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white/70 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <Link href="/admin/dashboard" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <div className="pt-2 pb-2">
            <button onClick={() => setIsVendorsMenuOpen(!isVendorsMenuOpen)} className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors">
              <div className="flex items-center gap-3"><Store size={20} /> Vendors</div>
              <ChevronDown size={16} className={`transition-transform ${isVendorsMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {isVendorsMenuOpen && (
              <div className="mt-1 space-y-1">
                <Link href="/admin/vendors" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-blue-200 hover:text-white hover:bg-white/5 ml-4"><Users size={18} /> All Vendors</Link>
                <Link href="/admin/kyc" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-blue-200 hover:text-white hover:bg-white/5 ml-4"><ShieldCheck size={18} /> KYC & Verification</Link>
              </div>
            )}
          </div>
          <Link href="/admin/delivery-partners" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><Truck size={20} /> Delivery Partners</Link>
          <Link href="/admin/disputes" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><Scale size={20} /> Dispute Resolution Agents</Link>
          <Link href="/admin/buyers" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><ShoppingCart size={20} /> Buyers</Link>
          <Link href="/admin/transactions" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><CreditCard size={20} /> Transactions</Link>
          <Link href="/admin/compliance" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><FileText size={20} /> Compliance & Reports</Link>
          <Link href="/admin/billing" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/5 hover:text-white transition-colors"><DollarSign size={20} /> Subscription & Billing</Link>
          <div className="pt-4 mt-4 border-t border-[#1f3a8a]">
            {/* Active Link */}
            <Link href="/admin/settings" className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-white bg-white/10 border-l-4 border-[#22c55e] transition-colors"><Settings size={20} /> Settings</Link>
          </div>
        </nav>
      </aside>

      {/* --- Main Content (Right) --- */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen">
        <header className="bg-white border-b border-slate-200 h-16 shrink-0 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500 hover:text-[#152570] p-1 rounded-md"><Menu size={24} /></button>
            <h1 className="text-lg sm:text-xl font-medium text-slate-800 truncate">Super Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
             <div className="relative">
                <Bell size={20} className="text-slate-500" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">2</span>
             </div>
             <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
               <div className="w-9 h-9 bg-[#152570] rounded-full flex items-center justify-center text-white font-bold text-sm">AO</div>
               <div className="hidden lg:block">
                 <p className="text-sm font-bold text-[#152570]">Adebayo Ogunlesi</p>
                 <p className="text-xs text-slate-500">Super Admin</p>
               </div>
               <ChevronDown size={16} className="text-slate-400 hidden lg:block" />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-[#152570]">Platform Settings</h2>
            <p className="text-slate-500 text-sm mt-1">Configure foundational settings that apply globally across Vendor Ventory</p>
          </div>

          <div className="space-y-6 max-w-5xl">
            
            {/* 1. Platform Settings */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
              <SectionHeader 
                title="Platform Settings" 
                subtext="Basic platform configuration" 
                icon={Globe} 
                onEdit={() => setIsEditingPlatform(true)} 
                isEditing={isEditingPlatform} 
              />
              
              {isEditingPlatform ? (
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2 block">Platform Name</label>
                      <input name="name" value={platformForm.name} onChange={handlePlatformChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-[#152570] focus:outline-none focus:ring-2 focus:ring-[#152570]/20"/>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2 block">Support Email Address</label>
                      <input name="email" value={platformForm.email} onChange={handlePlatformChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-[#152570] focus:outline-none focus:ring-2 focus:ring-[#152570]/20"/>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2 block">Default Currency</label>
                      <input name="currency" value={platformForm.currency} onChange={handlePlatformChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-[#152570] focus:outline-none focus:ring-2 focus:ring-[#152570]/20"/>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2 block">Timezone</label>
                      <input name="timezone" value={platformForm.timezone} onChange={handlePlatformChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-[#152570] focus:outline-none focus:ring-2 focus:ring-[#152570]/20"/>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2 block">Platform Logo</label>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700">
                        <Upload size={16} /> Upload New Logo
                      </button>
                      <span className="text-xs text-slate-400">Recommended: 200x200px, PNG or SVG</span>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button onClick={() => setIsEditingPlatform(false)} className="flex items-center gap-2 px-6 py-2.5 bg-[#22c55e] hover:bg-green-600 text-white rounded-lg text-sm font-bold shadow-sm"><Save size={16} /> Save Changes</button>
                    <button onClick={() => setIsEditingPlatform(false)} className="px-6 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-bold">Cancel</button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Platform Name</p><p className="text-sm font-medium text-[#152570]">{platformForm.name}</p></div>
                  <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Support Email Address</p><p className="text-sm font-medium text-[#152570]">{platformForm.email}</p></div>
                  <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Default Currency</p><p className="text-sm font-medium text-[#152570]">{platformForm.currency}</p></div>
                  <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Timezone</p><p className="text-sm font-medium text-[#152570]">{platformForm.timezone}</p></div>
                  <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Platform Logo</p><p className="text-xs text-slate-500 italic">Current logo configured</p></div>
                </div>
              )}
            </div>

            {/* 2. Payment & Settlement Settings */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
              <SectionHeader 
                title="Payment & Settlement Settings" 
                subtext="Configure payment processing and settlement rules" 
                icon={CreditCard} 
                onEdit={() => setIsEditingPayment(true)} 
                isEditing={isEditingPayment} 
              />
              
              {isEditingPayment ? (
                <div className="space-y-8 animate-in fade-in zoom-in-95 duration-200">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2 block">Default Settlement Timeline</label>
                    <select value={paymentForm.timeline} onChange={handleTimelineChange} className="w-full max-w-md px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-[#152570] focus:outline-none focus:ring-2 focus:ring-[#152570]/20 cursor-pointer">
                      <option>T+1 (1 Business Day)</option>
                      <option>T+2 (2 Business Days)</option>
                      <option>T+3 (3 Business Days)</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Supported Payment Gateways</p>
                    <div className="space-y-3">
                      {paymentForm.gateways.map((gw) => (
                        <div key={gw.id} className="flex items-center justify-between py-3 px-4 bg-slate-50 rounded-lg border border-slate-100">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-6 bg-white rounded flex items-center justify-center text-xs text-slate-400 font-mono border border-slate-200 shadow-sm"><CreditCard size={12}/></div>
                            <div><p className="text-sm font-bold text-[#152570]">{gw.name}</p><p className="text-xs text-slate-400">{gw.desc}</p></div>
                          </div>
                          <Toggle enabled={gw.enabled} onToggle={() => handleGatewayToggle(gw.id)} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <div><p className="text-sm font-bold text-[#152570]">Escrow Release Rules (Read-Only)</p><p className="text-xs text-slate-600 mt-1 leading-relaxed">Funds are released automatically upon delivery confirmation or after dispute resolution. These rules are enforced at the application level and cannot be modified from this interface.</p></div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button onClick={() => setIsEditingPayment(false)} className="flex items-center gap-2 px-6 py-2.5 bg-[#22c55e] hover:bg-green-600 text-white rounded-lg text-sm font-bold shadow-sm"><Save size={16} /> Save Changes</button>
                    <button onClick={() => setIsEditingPayment(false)} className="px-6 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-bold">Cancel</button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-8"><p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Default Settlement Timeline</p><p className="text-sm font-medium text-[#152570]">{paymentForm.timeline}</p></div>
                  <div className="space-y-4 mb-8">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Supported Payment Gateways</p>
                    {paymentForm.gateways.map((gw, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-6 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-400 font-mono border border-slate-200"><CreditCard size={12}/></div>
                          <div><p className="text-sm font-bold text-[#152570]">{gw.name}</p><p className="text-xs text-slate-400">{gw.desc}</p></div>
                        </div>
                        <StatusBadge status={gw.enabled ? 'Enabled' : 'Disabled'} />
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3"><AlertCircle size={18} className="text-blue-600 shrink-0 mt-0.5" /><div><p className="text-sm font-bold text-[#152570]">Escrow Release Rules (Read-Only)</p><p className="text-xs text-slate-600 mt-1 leading-relaxed">Funds are released automatically upon delivery confirmation or after dispute resolution.</p></div></div>
                </div>
              )}
            </div>

            {/* 3. Security & Access Control */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
              <SectionHeader 
                title="Security & Access Control" 
                subtext="Manage admin access and security policies" 
                icon={ShieldCheck} 
                onEdit={() => setIsEditingSecurity(true)} 
                isEditing={isEditingSecurity} 
              />
              
              {isEditingSecurity ? (
                <div className="space-y-8 animate-in fade-in zoom-in-95 duration-200">
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Password Policy Configuration</p>
                      <div className="mb-4">
                        <label className="text-xs text-slate-500 block mb-1">Minimum Password Length</label>
                        <input type="number" name="passwordLength" value={securityForm.passwordLength} onChange={handleSecurityChange} className="w-20 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-[#152570] focus:outline-none focus:ring-2 focus:ring-[#152570]/20"/>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100"><span className="text-sm text-slate-600 font-medium">Require Special Characters</span><Toggle enabled={securityForm.specialChars} onToggle={() => toggleSecurityOption('specialChars')} /></div>
                        <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100"><span className="text-sm text-slate-600 font-medium">Require Numbers</span><Toggle enabled={securityForm.numbers} onToggle={() => toggleSecurityOption('numbers')} /></div>
                      </div>
                    </div>
                    <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Session Timeout (Minutes)</p><input type="number" name="sessionTimeout" value={securityForm.sessionTimeout} onChange={handleSecurityChange} className="w-20 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-[#152570] focus:outline-none focus:ring-2 focus:ring-[#152570]/20"/></div>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2"><Lock size={16} className="text-slate-400" /><div><p className="text-sm font-bold text-[#152570]">Two-Factor Authentication (2FA)</p><p className="text-xs text-slate-400">Require all admins to enable 2FA</p></div></div>
                      <Toggle enabled={securityForm.twoFactor} onToggle={() => toggleSecurityOption('twoFactor')} />
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center justify-between"><div className="flex items-center gap-2 text-yellow-700"><AlertTriangle size={16} /><span className="text-xs font-bold">Changing security settings will affect all active users immediately</span></div></div>
                  <div className="flex gap-3 pt-2"><button onClick={() => setIsEditingSecurity(false)} className="flex items-center gap-2 px-6 py-2.5 bg-[#22c55e] hover:bg-green-600 text-white rounded-lg text-sm font-bold shadow-sm"><Save size={16} /> Save Changes</button><button onClick={() => setIsEditingSecurity(false)} className="px-6 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-bold">Cancel</button></div>
                </div>
              ) : (
                <div>
                  <div className="mb-8 space-y-3">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Admin Role Management</p>
                    {roles.map((role, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                        <div className="flex items-center gap-2"><Users size={14} className="text-slate-400" /><span className="text-sm font-medium text-[#152570]">{role.role}</span></div>
                        <span className="text-xs text-slate-500">{role.access}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Password Policy Configuration</p>
                      <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center"><span className="text-sm text-slate-600">Minimum Password Length</span><span className="text-sm font-medium text-[#152570]">{securityForm.passwordLength}</span></div>
                        <div className="flex justify-between items-center"><span className="text-sm text-slate-600">Require Special Characters</span><StatusBadge status={securityForm.specialChars ? "Required" : "Optional"} /></div>
                        <div className="flex justify-between items-center"><span className="text-sm text-slate-600">Require Numbers</span><StatusBadge status={securityForm.numbers ? "Required" : "Optional"} /></div>
                      </div>
                    </div>
                    <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Session Timeout (Minutes)</p><p className="text-sm font-medium text-[#152570]">{securityForm.sessionTimeout} minutes</p></div>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2"><Lock size={16} className="text-slate-400" /><div><p className="text-sm font-bold text-[#152570]">Two-Factor Authentication (2FA)</p><p className="text-xs text-slate-400">Require all admins to enable 2FA</p></div></div>
                      <StatusBadge status={securityForm.twoFactor ? "Required" : "Optional"} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Notification Settings */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
              <SectionHeader 
                title="Notification Settings" 
                subtext="Configure platform-wide notification preferences" 
                icon={Bell} 
                onEdit={() => setIsEditingNotifications(true)} 
                isEditing={isEditingNotifications} 
              />
              
              {isEditingNotifications ? (
                <div className="space-y-8 animate-in fade-in zoom-in-95 duration-200">
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Admin Notification Alerts</p>
                    {notificationForm.map((notif) => (
                      <div key={notif.id} className="flex justify-between items-center py-4 border-b border-slate-50 last:border-0">
                        <div><p className="text-sm font-medium text-[#152570]">{notif.name}</p><p className="text-xs text-slate-400">{notif.desc}</p></div>
                        <Toggle enabled={notif.enabled} onToggle={() => handleNotificationToggle(notif.id)} />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button onClick={() => setIsEditingNotifications(false)} className="flex items-center gap-2 px-6 py-2.5 bg-[#22c55e] hover:bg-green-600 text-white rounded-lg text-sm font-bold shadow-sm"><Save size={16} /> Save Changes</button>
                    <button onClick={() => setIsEditingNotifications(false)} className="px-6 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-bold">Cancel</button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-8 space-y-3">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">System Email Templates (Read-Only Preview)</p>
                    {emailTemplates.map((template, i) => (
                      <div key={i} className="flex justify-between items-center py-2 px-3 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="flex items-center gap-2"><Mail size={14} className="text-slate-400" /><span className="text-sm text-slate-700">{template}</span></div>
                        <Eye size={14} className="text-slate-400 cursor-pointer hover:text-[#152570]" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Admin Notification Alerts</p>
                    {notificationForm.map((notif, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                        <div><p className="text-sm font-medium text-[#152570]">{notif.name}</p><p className="text-xs text-slate-400">{notif.desc}</p></div>
                        <StatusBadge status={notif.enabled ? 'Enabled' : 'Disabled'} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5. Integrations (Static / High-Fidelity) */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
              <SectionHeader title="Integrations" subtext="Manage external service connections and API keys" icon={LinkIcon} />
              
              <div className="space-y-6">
                {/* Paystack */}
                <div className="border border-green-200 rounded-xl p-5 bg-white relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2"><CreditCard size={18} className="text-slate-600" /><h4 className="font-bold text-[#152570]">Paystack</h4></div>
                    <div className="flex items-center gap-1 text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded"><CheckCircle2 size={12} /> Connected</div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-1">API Key</label>
                      <div className="flex gap-2"><div className="flex-1 bg-slate-100 rounded border border-slate-200 px-3 py-2 text-sm text-slate-500 font-mono flex justify-between items-center"><span>pk_live_*****************</span><EyeOff size={14} className="text-slate-400" /></div></div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-1">Webhook URL</label>
                      <div className="flex gap-2">
                        <input type="text" value="https://api.vendorventory.com/webhooks/..." readOnly className="flex-1 bg-slate-50 rounded border border-slate-200 px-3 py-2 text-sm text-slate-500"/>
                        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded text-xs font-bold transition-colors">Update</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flutterwave */}
                <div className="border border-green-200 rounded-xl p-5 bg-white relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2"><CreditCard size={18} className="text-slate-600" /><h4 className="font-bold text-[#152570]">Flutterwave</h4></div>
                    <div className="flex items-center gap-1 text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded"><CheckCircle2 size={12} /> Connected</div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-1">API Key</label>
                      <div className="flex gap-2"><div className="flex-1 bg-slate-100 rounded border border-slate-200 px-3 py-2 text-sm text-slate-500 font-mono flex justify-between items-center"><span>FLW-PUBK_*****************</span><EyeOff size={14} className="text-slate-400" /></div></div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-1">Webhook URL</label>
                      <div className="flex gap-2">
                        <input type="text" value="https://api.vendorventory.com/webhooks/..." readOnly className="flex-1 bg-slate-50 rounded border border-slate-200 px-3 py-2 text-sm text-slate-500"/>
                        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded text-xs font-bold transition-colors">Update</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}