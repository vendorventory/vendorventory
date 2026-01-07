'use client'; 

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  XCircle, 
  PackageX, 
  AlertTriangle, 
  FileText, 
  Wallet, 
  Truck, 
  CheckCircle2, 
  Lock, 
  BadgeCheck,
  Menu,
  ArrowRight,
  Shield,
  Check,
  X,
  Box, 
  Users,
  Users2,
  Eye,
  Target,
  Compass,
  FileCheck,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react';
import Image from 'next/image';
import { Arimo } from 'next/font/google';

// Configuring the Arimo font
const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-white font-sans text-[#4A5565] ${arimo.variable} ${arimo.className}`}>
      
      {/* --- Navigation --- */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28"> {/* Increased height for bigger logo */}
            
            {/* Logo - INCREASED SIZE & LEFT ALIGNED */}
            <div className="flex items-center">
              <div className="relative w-80 h-20"> 
                <Image 
                  src="/images/logo.png" 
                  alt="VendorVentory Logo" 
                  fill
                  className="object-contain object-left" 
                  priority
                />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 text-[16px] font-medium text-slate-600">
              <a href="#" className="hover:text-[#152570] transition">How It Works</a>
              <a href="#" className="hover:text-[#152570] transition">Who It's For</a>
              <a href="#" className="hover:text-[#152570] transition">About</a>
              <a href="#" className="hover:text-[#152570] transition">Security</a>
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-6">
              <button className="text-[#152570] font-bold text-lg hover:text-blue-800">Sign In</button>
              <button className="bg-[#22c55e] hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold text-lg transition shadow-sm">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                 {isMobileMenuOpen ? <X className="w-8 h-8 text-slate-600"/> : <Menu className="w-8 h-8 text-slate-600" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
            <div className="md:hidden absolute top-28 left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-4 z-50 animate-in slide-in-from-top-5">
                <a href="#" className="text-lg font-medium text-slate-600 py-2 border-b border-slate-50">How It Works</a>
                <a href="#" className="text-lg font-medium text-slate-600 py-2 border-b border-slate-50">Who It's For</a>
                <a href="#" className="text-lg font-medium text-slate-600 py-2 border-b border-slate-50">About</a>
                <a href="#" className="text-lg font-medium text-slate-600 py-2 border-b border-slate-50">Security</a>
                <div className="flex flex-col gap-3 mt-2">
                    <button className="text-[#152570] font-bold text-lg py-2">Sign In</button>
                    <button className="bg-[#22c55e] text-white px-6 py-3 rounded-lg font-bold text-lg w-full">
                        Get Started
                    </button>
                </div>
            </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-16 pb-24 overflow-visible bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
                <Shield className="w-4 h-4 text-green-500 fill-green-500" />
                <span className="text-sm font-medium text-slate-600">Secure Escrow Payments</span>
              </div>
              <h1 className="font-normal" style={{ fontSize: '60px', lineHeight: '60px', letterSpacing: '-1.5px', color: '#152570' }}>
                The Safest Way <br />
                to Buy and Sell <br />
                Online
              </h1>
              <p className="text-lg text-[#4A5565] leading-relaxed max-w-lg">
                Trade with confidence using escrow protection, delivery confirmation, and built-in trust. No more payment fears. No more scams. Just secure, transparent transactions across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-green-600 text-white px-7 py-3.5 rounded-lg font-semibold text-base transition shadow-md shadow-green-500/20">
                  Get Started as a Vendor <ArrowRight size={18} />
                </button>
                <button className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[#152570] border-2 border-[#1e293b] hover:bg-slate-50 transition">
                  Learn How It Works
                </button>
              </div>
              <div className="flex flex-wrap gap-6 pt-6">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /><span className="text-[#4A5565] font-medium">Escrow Protected</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /><span className="text-[#4A5565] font-medium">Delivery Verified</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /><span className="text-[#4A5565] font-medium">Dispute Resolution</span></div>
              </div>
            </div>

            <div className="relative z-10 flex justify-center lg:justify-end mt-12 lg:mt-0">
              <div className="relative w-full max-w-[380px]">
                 <Image src="/images/mockup.png" alt="VendorVentory App" width={380} height={760} priority className="w-full h-auto drop-shadow-2xl" />
                 <div className="absolute top-12 -left-12 bg-white p-3 pr-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 animate-bounce-slow flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600"><BadgeCheck size={20} /></div>
                    <div><div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Verified</div><div className="text-sm font-bold text-slate-900">850+ sales</div></div>
                 </div>
                 <div className="absolute bottom-24 -right-6 bg-white p-3 pr-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 animate-bounce-slow delay-700 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600"><Lock size={20} /></div>
                    <div><div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Escrow</div><div className="text-sm font-bold text-slate-900">Protected</div></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Problem Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-red-50 text-red-500 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
              <span className="flex items-center gap-1.5"><X size={14} /> Common Online Shopping Risks</span>
            </div>
            <h2 className="font-normal mb-6" style={{ fontSize: '48px', lineHeight: '48px', letterSpacing: '0px', color: '#152570' }}>Why Social Commerce Feels Risky</h2>
            <p className="font-normal" style={{ fontSize: '18px', lineHeight: '28px', letterSpacing: '0px', color: '#4A5565' }}>Millions of Africans buy and sell through WhatsApp, Instagram, and Facebook every day. But without proper infrastructure, trust becomes the biggest barrier.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "💸", title: "Paying Before Delivery", desc: "Sending money first with no guarantee you'll receive your order." },
              { icon: "❌", title: "Fake or Unverified Vendors", desc: "No way to verify if a seller is legitimate or has a track record." },
              { icon: "📦", title: "No Order Tracking", desc: "Once you pay, you are left in the dark about delivery status." },
              { icon: "⚠️", title: "No Dispute Support", desc: "If something goes wrong, there is no one to help resolve the issue." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-[#F8FAFC] rounded-2xl text-left border border-transparent hover:border-slate-100 transition duration-300">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#152570] mb-3">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#4A5565]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- How it Works Section --- */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <div className="inline-block px-6 py-2 border border-green-400 text-green-600 rounded-full text-sm font-medium mb-6">Simple & Secure</div>
                <h2 className="font-normal mb-6" style={{ fontSize: '48px', lineHeight: '48px', letterSpacing: '0px', color: '#152570' }}>How Vendor Ventory Works</h2>
                <p className="text-lg text-[#4A5565]">A transparent, four-step process that protects both buyers and sellers</p>
            </div>
            <div className="relative">
                <div className="hidden lg:block absolute top-[28%] left-0 w-full h-0.5 bg-[#152570] -z-10"></div>
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { step: "01", title: "Vendor Creates Invoice", desc: "Seller generates a professional invoice or product ticket with all transaction details.", icon: <FileText className="text-white" size={28} />, color: "bg-[#152570]", completed: false },
                        { step: "02", title: "Buyer Pays into Escrow", desc: "Payment is held securely in escrow — vendor can't access it until delivery is confirmed.", icon: <Lock className="text-white" size={28} />, color: "bg-[#152570]", completed: false },
                        { step: "03", title: "Delivery is Tracked", desc: "Item is delivered with tracking and verification. Both parties stay informed.", icon: <Truck className="text-white" size={28} />, color: "bg-[#152570]", completed: false },
                        { step: "04", title: "Confirmation & Release of Funds", desc: "Buyer confirms receipt via OTP or proof. Funds are instantly released to vendor.", icon: <Check className="text-white" size={28} />, color: "bg-[#22c55e]", completed: true }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white rounded-[24px] p-8 relative shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 flex flex-col h-full">
                            {idx > 0 && <div className="hidden lg:block absolute top-[28%] -left-4 w-3 h-3 rounded-full border-2 border-[#152570] bg-white -translate-y-1/2 z-10"></div>}
                            {idx < 3 && <div className="hidden lg:block absolute top-[28%] -right-4 w-3 h-3 rounded-full border-2 border-[#152570] bg-white -translate-y-1/2 z-10"></div>}
                            <div className="absolute top-4 right-6 text-6xl font-normal text-slate-100 select-none">{item.step}</div>
                            <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 shadow-md relative z-10`}>{item.icon}</div>
                            <h3 className="text-xl font-bold text-[#152570] mb-3 leading-tight">{item.title}</h3>
                            <p className="text-[15px] text-[#4A5565] leading-relaxed mb-4 flex-grow">{item.desc}</p>
                            {item.completed && <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full w-fit"><CheckCircle2 size={12} /> Completed</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* --- Target Audience --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="px-4 py-2 bg-blue-50 text-[#152570] rounded-lg text-sm font-medium border border-blue-100"><Users2 size={16} className="inline-block mr-2 -mt-0.5" /> Built For Everyone</span>
                <h2 className="mt-6 font-normal" style={{ fontSize: '48px', lineHeight: '48px', letterSpacing: '0px', color: '#152570' }}>Who It's For</h2>
                <p className="mt-6 font-normal text-[#4A5565] max-w-2xl mx-auto" style={{ fontSize: '18px' }}>Whether you're selling, buying, or delivering — Vendor Ventory creates trust and structure for all parties</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Vendors", img: "/images/vendors.jpg", icon: <Box size={24} />, color: "bg-[#152570]", textColor: "text-[#152570]", desc: "Sell confidently, manage inventory, and get paid securely", list: ["Professional invoice generation", "Automatic payment on delivery", "Inventory & order management", "Customer trust & credibility"] },
                    { title: "Buyers", img: "/images/buyers.jpg", icon: <Users size={24} />, color: "bg-[#22c55e]", textColor: "text-[#22c55e]", desc: "Pay safely, track deliveries, and confirm before funds are released", list: ["Escrow-protected payments", "Real-time delivery tracking", "Confirm before release", "Dispute resolution support"] },
                    { title: "Delivery Partners", img: "/images/delivery-partners.jpg", icon: <Truck size={24} />, color: "bg-[#152570]", textColor: "text-[#152570]", desc: "Structured delivery, proof-based confirmation, and accountability", list: ["Clear delivery instructions", "Photo & OTP verification", "Payment accountability", "Professional infrastructure"] }
                ].map((card, idx) => (
                    <div key={idx} className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                        <div className="relative h-60">
                            <Image src={card.img} alt={card.title} fill className="object-cover" />
                            <div className={`absolute bottom-4 left-6 w-12 h-12 ${card.color} rounded-xl flex items-center justify-center shadow-lg text-white`}>{card.icon}</div>
                        </div>
                        <div className="p-8 pt-6 flex-grow flex flex-col">
                            <h3 className="text-2xl font-normal text-[#152570] mb-3">{card.title}</h3>
                            <p className="text-[#4A5565] text-sm leading-relaxed mb-6">{card.desc}</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {card.list.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-[#4A5565]"><span className={`w-1.5 h-1.5 rounded-full ${card.color} mt-2 flex-shrink-0`}></span>{item}</li>
                                ))}
                            </ul>
                            <a href="#" className={`inline-flex items-center ${card.textColor} font-bold text-sm hover:underline`}>Learn More <ArrowRight size={16} className="ml-2" /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- Trust Infrastructure --- */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-4 py-1.5 bg-blue-100/50 text-[#152570] rounded-full text-xs font-medium uppercase tracking-wide border border-blue-100 mb-6">About Vendor Ventory</span>
                <h2 className="font-normal mb-2" style={{ fontSize: '48px', lineHeight: '56px', letterSpacing: '-0.5px', color: '#152570' }}>Africa's E-Commerce <br /><span className="text-[#22c55e]">Trust Infrastructure</span></h2>
                <p className="text-lg text-[#4A5565] mt-6 max-w-2xl mx-auto">We're building the foundation of trust that will power the next generation of African commerce</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                    { title: "Vision", icon: <Eye size={24} />, bg: "bg-blue-600", desc: "To become Africa's most trusted infrastructure for safe and transparent online commerce.", water: <Eye size={120} strokeWidth={1} /> },
                    { title: "Mission", icon: <Target size={24} />, bg: "bg-[#22c55e]", desc: "To protect buyers, empower vendors, and eliminate fraud through escrow payments, delivery verification, and structured digital transactions.", water: <Target size={120} strokeWidth={1} /> },
                    { title: "Purpose", icon: <Compass size={24} />, bg: "bg-purple-600", desc: "To replace informal, risky online transactions with a system built on trust, proof, and accountability.", water: <Compass size={120} strokeWidth={1} /> }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-[24px] shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition">
                        <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center text-white mb-6`}>{item.icon}</div>
                        <h3 className="text-2xl font-normal text-[#152570] mb-4">{item.title}</h3>
                        <p className="text-[#4A5565] leading-relaxed relative z-10">{item.desc}</p>
                        <div className="absolute -bottom-4 -right-4 text-slate-50 opacity-50 z-0">{item.water}</div>
                    </div>
                ))}
            </div>
            <div className="bg-[#152570] rounded-[24px] p-12 text-center shadow-2xl relative overflow-hidden">
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-normal text-white mb-4">Trust Isn't Optional — It's Essential</h3>
                    <p className="text-blue-100 text-lg leading-relaxed">Every day, billions of naira change hands through informal online channels. We're here to make those transactions safer, clearer, and more accountable for everyone involved.</p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-[#152570] -z-0"></div>
            </div>
        </div>
      </section>

      {/* --- Trust & Security Built In --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-medium uppercase tracking-wide border border-green-100 mb-6"><ShieldCheck size={14} className="inline mr-1 -mt-0.5"/> Security First</span>
                <h2 className="font-normal mb-6" style={{ fontSize: '48px', lineHeight: '56px', letterSpacing: '-0.5px', color: '#152570' }}>Trust & Security Built In</h2>
                <p className="text-lg text-[#4A5565] max-w-2xl mx-auto">Multiple layers of protection ensure every transaction is safe, transparent, and accountable</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                    { title: "Escrow-Protected Payments", icon: <Shield size={26} />, desc: "Your money is held securely until delivery is confirmed. No early release, no risk.", color: "text-green-600", bg: "bg-green-50", decor: "bg-green-50/50" },
                    { title: "Verified Vendors", icon: <CheckCircle2 size={26} />, desc: "All vendors go through verification. Know who you're buying from before you pay.", color: "text-slate-600", bg: "bg-slate-100", decor: "bg-slate-100/50" },
                    { title: "Delivery Confirmation (OTP/Proof)", icon: <Lock size={26} />, desc: "Buyers confirm receipt with OTP or photo verification. Funds only release on proof.", color: "text-green-600", bg: "bg-green-50", decor: "bg-green-50/50" },
                    { title: "Built-in Dispute Resolution", icon: <FileCheck size={26} />, desc: "If something goes wrong, our structured process helps resolve issues fairly and quickly.", color: "text-slate-600", bg: "bg-slate-100", decor: "bg-slate-100/50" }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 rounded-[24px] p-8 flex gap-6 hover:shadow-lg transition relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-24 h-24 ${item.decor} rounded-bl-[100px] -z-0`}></div>
                        <div className={`w-14 h-14 ${item.bg} rounded-2xl flex-shrink-0 flex items-center justify-center ${item.color}`}>{item.icon}</div>
                        <div><h3 className="text-xl font-bold text-[#152570] mb-2">{item.title}</h3><p className="text-[#4A5565] text-sm leading-relaxed">{item.desc}</p></div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {[
                    { top: "256-bit", bot: "SSL Encryption", color: "text-[#152570]" },
                    { top: "100%", bot: "Escrow Protected", color: "text-[#22c55e]" },
                    { top: "24/7", bot: "Support Team", color: "text-[#152570]" },
                    { top: "Verified", bot: "All Vendors", color: "text-[#22c55e]" }
                ].map((stat, idx) => (
                    <div key={idx} className="bg-[#F8FAFC] py-8 rounded-2xl text-center">
                        <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.top}</div>
                        <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">{stat.bot}</div>
                    </div>
                ))}
            </div>
            <div className="bg-gradient-to-b from-[#F0F9FF] to-[#F0FDF4] rounded-[32px] p-12 text-center border border-blue-50/50">
                 <div className="inline-flex justify-center mb-4"><Shield size={48} className="text-[#152570]" strokeWidth={1.5} /></div>
                 <h3 className="text-2xl font-bold text-[#152570] mb-4">Your Safety Is Our Priority</h3>
                 <p className="text-[#4A5565] max-w-2xl mx-auto text-sm leading-relaxed">We've built Vendor Ventory from the ground up with security, transparency, and trust as core principles. Every feature, every process, and every decision is designed to protect you.</p>
            </div>
        </div>
      </section>

      {/* --- Start Selling Today --- */}
      <section className="bg-[#152570] py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
            <Shield size={500} strokeWidth={0.5} className="text-white" />
        </div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-blue-100 text-sm mb-8 backdrop-blur-sm">
                <ShieldCheck size={16} className="text-green-400" />
                <span>Join Thousands of Trusted Transactions</span>
            </div>
            <h2 className="text-[56px] leading-tight font-normal text-white mb-6">Start Selling Safely Today</h2>
            <p className="text-xl text-blue-100/90 mb-10 leading-relaxed font-light">
                No more payment fear. No more delivery disputes.<br className="hidden md:block"/>
                Just secure, transparent commerce built on trust.
            </p>
            <button className="bg-[#22c55e] hover:bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2 shadow-xl shadow-blue-900/50 transition-transform hover:-translate-y-1">
                Get Started <ArrowRight size={20} />
            </button>
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-400" /> Free to start</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-400" /> No setup fees</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-400" /> Get paid instantly</div>
            </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10 relative overflow-hidden">
        
        {/* Decorative Green Circle */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-50/80 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-6 gap-8 mb-16">
               
               {/* Col 1: Logo & Contact - ALIGNED LEFT */}
               <div className="col-span-2 pr-8">
                   <div className="relative w-72 h-20 mb-6"> {/* BIGGER FOOTER LOGO */}
                        <Image 
                            src="/images/logo.png" 
                            alt="Logo" 
                            fill 
                            className="object-contain object-left" 
                        />
                   </div>
                   <p className="text-[#4A5565] text-sm leading-relaxed mb-6">
                        Secure escrow-based e-commerce platform protecting buyers and vendors across Africa.
                   </p>
                   <div className="space-y-3">
                        <a href="mailto:support@vendorventory.com" className="flex items-center gap-3 text-sm text-[#4A5565] hover:text-[#152570] transition">
                            <Mail size={18} className="text-[#152570]" /> support@vendorventory.com
                        </a>
                        <a href="tel:+2341234567890" className="flex items-center gap-3 text-sm text-[#4A5565] hover:text-[#152570] transition">
                            <Phone size={18} className="text-[#152570]" /> +234 123 456 7890
                        </a>
                   </div>
               </div>

               {/* Links Columns */}
               <div>
                   <h4 className="text-[#152570] font-bold mb-6">Product</h4>
                   <ul className="space-y-4 text-sm text-[#4A5565]">
                       <li><a href="#" className="hover:text-[#152570]">How It Works</a></li>
                       <li><a href="#" className="hover:text-[#152570]">Features</a></li>
                       <li><a href="#" className="hover:text-[#152570]">Pricing</a></li>
                       <li><a href="#" className="hover:text-[#152570]">Security</a></li>
                       <li><a href="#" className="hover:text-[#152570]">Integrations</a></li>
                   </ul>
               </div>

               <div>
                   <h4 className="text-[#152570] font-bold mb-6">Company</h4>
                   <ul className="space-y-4 text-sm text-[#4A5565]">
                       <li><a href="#" className="hover:text-[#152570]">About Us</a></li>
                       <li><a href="#" className="hover:text-[#152570]">Careers</a></li>
                       <li><a href="#" className="hover:text-[#152570]">Blog</a></li>
                       <li><a href="#" className="hover:text-[#152570]">Press Kit</a></li>
                       <li><a href="#" className="hover:text-[#152570]">Contact</a></li>
                   </ul>
               </div>

               <div>
                   <h4 className="text-[#152570] font-bold mb-6">Resources</h4>
                   <ul className="space-y-4 text-sm text-[#4A5565]">
                       <li><a href="#" className="hover:text-[#152570]">Help Center</a></li>
                       <li><a href="#" className="hover:text-[#152570]">Documentation</a></li>
                       <li><a href="#" className="hover:text-[#152570]">API Reference</a></li>
                       <li><a href="#" className="hover:text-[#152570]">Status</a></li>
                       <li><a href="#" className="hover:text-[#152570]">Community</a></li>
                   </ul>
               </div>

               <div>
                   <h4 className="text-[#152570] font-bold mb-6">Legal</h4>
                   <ul className="space-y-4 text-sm text-[#4A5565]">
                       <li><a href="#" className="hover:text-[#152570]">Terms of Service</a></li>
                       <li><a href="#" className="hover:text-[#152570]">Privacy Policy</a></li>
                       <li><a href="#" className="hover:text-[#152570]">Cookie Policy</a></li>
                       <li><a href="#" className="hover:text-[#152570]">Compliance</a></li>
                       <li><a href="#" className="hover:text-[#152570]">Licenses</a></li>
                   </ul>
               </div>
            </div>

            <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-[#4A5565] mb-4 md:mb-0">
                    &copy; 2025 Vendor Ventory. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="bg-[#152570] text-white p-2 rounded-lg hover:bg-blue-800 transition">
                        <Twitter size={18} fill="currentColor" strokeWidth={0} />
                    </a>
                    <a href="#" className="bg-[#152570] text-white p-2 rounded-lg hover:bg-blue-800 transition">
                        <Linkedin size={18} fill="currentColor" strokeWidth={0} />
                    </a>
                    <a href="#" className="bg-[#152570] text-white p-2 rounded-lg hover:bg-blue-800 transition">
                        <Facebook size={18} fill="currentColor" strokeWidth={0} />
                    </a>
                </div>
            </div>
        </div>
      </footer>

    </div>
  );
}