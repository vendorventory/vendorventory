'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, AlertTriangle, Wallet, Truck, CheckCircle2, Lock, 
  Menu, ArrowRight, Shield, Check, X, Box, 
  Receipt, Zap, Sparkles, Fingerprint, Linkedin, Facebook,
  CreditCard, UserX, PackageSearch, Gavel, Smartphone, Globe2,
  Eye, Target, Compass, Mail, Phone, Plus, Minus, Instagram
} from 'lucide-react';
import { Arimo } from 'next/font/google';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Configuring the Arimo font
const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

// --- Custom Icons for Brands not in Lucide (or specific versions) ---
const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// --- Helper for Smooth Scroll ---
const scrollToSection = (e: React.MouseEvent, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- Components ---

const LoadingSkeleton = () => (
  <motion.div 
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center p-6 space-y-8"
  >
    <div className="w-full max-w-4xl space-y-8 animate-pulse">
      <div className="flex justify-between items-center">
         <div className="h-10 w-32 bg-slate-200 rounded-lg"></div>
         <div className="hidden md:flex gap-4">
            <div className="h-4 w-20 bg-slate-200 rounded"></div>
            <div className="h-4 w-20 bg-slate-200 rounded"></div>
         </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 pt-20">
         <div className="space-y-6">
            <div className="h-16 w-3/4 bg-slate-200 rounded-xl"></div>
            <div className="h-6 w-full bg-slate-200 rounded-lg"></div>
            <div className="h-6 w-5/6 bg-slate-200 rounded-lg"></div>
            <div className="flex gap-4 pt-4">
              <div className="h-14 w-40 bg-slate-200 rounded-xl"></div>
              <div className="h-14 w-32 bg-slate-200 rounded-xl"></div>
            </div>
         </div>
         <div className="hidden md:block h-[500px] bg-slate-200 rounded-[32px]"></div>
      </div>
    </div>
  </motion.div>
);

const SectionHeader = ({ badge, title, subtitle, align = 'center', light = false }: any) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeInUp}
    className={`mb-12 md:mb-16 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
  >
    {badge && (
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 
        ${light 
          ? 'bg-white/10 text-blue-100 border border-white/20' 
          : 'bg-blue-50 text-[#152570] border border-blue-100'
        }`}
      >
        {badge}
      </div>
    )}
    <h2 className={`font-bold leading-tight mb-4 md:mb-6 text-3xl md:text-5xl ${light ? 'text-white' : 'text-[#152570]'}`}>
      {title}
    </h2>
    <p className={`text-base md:text-xl leading-relaxed ${light ? 'text-blue-100' : 'text-[#4A5565]'}`}>
      {subtitle}
    </p>
  </motion.div>
);

const FaqItem = ({ question, answer, isOpen, onClick }: any) => (
  <div className="border-b border-slate-100 last:border-0">
    <button 
      onClick={onClick}
      className="w-full py-6 flex items-center justify-between gap-4 text-left focus:outline-none group"
    >
      <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#152570]' : 'text-slate-700 group-hover:text-[#152570]'}`}>
        {question}
      </span>
      <span className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        {isOpen ? <Minus size={20} className="text-[#22c55e]" /> : <Plus size={20} className="text-slate-400" />}
      </span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-slate-500 leading-relaxed">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is VendorVentory free to use?",
      a: "Yes! Signing up and listing your products or services is completely free. We only charge a small transaction fee (1.5%) when you successfully make a sale."
    },
    {
      q: "How does the payment protection work?",
      a: "When a buyer pays, the funds are held securely in vendor ventory. The money is only released to the vendor after the buyer confirms they have received the correct item."
    },
    {
      q: "How long do payouts take?",
      a: "Once a transaction is completed and confirmed by the buyer, funds are instantly moved to your local bank account. Withdrawal to your local bank account typically takes 5-10 minutes."
    },
    {
      q: "Can I use this for services, or just physical products?",
      a: "Absolutely! VendorVentory is perfect for freelancers, consultants, and service providers. The 'delivery' is confirmed when the client approves the work."
    }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen || isLoading ? 'hidden' : 'unset';
  }, [isMobileMenuOpen, isLoading]);

  const navLinks = [
    { name: 'How It Works', id: 'how-it-works' },
    { name: "Who It's For", id: 'who-its-for' },
    { name: 'Features', id: 'features' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <div className={`${arimo.variable} ${arimo.className} bg-white text-[#4A5565] antialiased overflow-x-hidden selection:bg-blue-100 selection:text-[#152570]`}>
      
        <AnimatePresence>
          {isLoading && <LoadingSkeleton key="skeleton" />}
        </AnimatePresence>

        <AnimatePresence>
          {/* --- Navigation --- */}
          <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 
              ${scrolled 
                ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-slate-100' 
                : 'bg-transparent py-4 md:py-6'
              }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center"> 
                
                {/* Logo Area */}
                <div 
                  className="flex items-center relative z-50 cursor-pointer"
                  onClick={(e) => scrollToSection(e, 'home')}
                >
                  <div className="relative w-40 h-10 md:w-56 md:h-14 transition-all"> 
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
                <div className="hidden lg:flex items-center space-x-8 text-[15px] font-semibold text-slate-600">
                  {navLinks.map((item) => (
                    <a 
                      key={item.name} 
                      href={`#${item.id}`} 
                      onClick={(e) => scrollToSection(e as any, item.id)}
                      className="hover:text-[#152570] relative group transition-colors"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#152570] transition-all group-hover:w-full"></span>
                    </a>
                  ))}
                </div>

                {/* Right Side Actions */}
                <div className="hidden lg:flex items-center gap-4">
                  <Link href="/login">
                      <button className="text-[#152570] font-bold px-4 py-2 hover:bg-slate-50 rounded-lg transition-colors">Log In</button>
                  </Link>
                  <Link href="/signup">
                      <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-[#152570] hover:bg-blue-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-900/10 transition-all"
                      >
                          Get Started
                      </motion.button>
                  </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center gap-4 relative z-50">
                  <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                    className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                     {isMobileMenuOpen ? <X className="w-7 h-7 text-[#152570]"/> : <Menu className="w-7 h-7 text-[#152570]" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden flex flex-col pt-28 px-6 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col gap-6 text-2xl font-bold text-[#152570]">
                  {navLinks.map((item) => (
                      <a 
                        key={item.name} 
                        href={`#${item.id}`} 
                        onClick={(e) => {
                          setIsMobileMenuOpen(false);
                          scrollToSection(e as any, item.id);
                        }} 
                        className="py-3 border-b border-slate-100"
                      >
                        {item.name}
                      </a>
                  ))}
                </div>
                <div className="mt-auto mb-10 flex flex-col gap-4">
                    <Link href="/login" className="w-full">
                      <button className="w-full bg-slate-100 text-[#152570] py-4 rounded-xl font-bold text-lg">Log In</button>
                    </Link>
                    <Link href="/signup" className="w-full">
                      <button className="w-full bg-[#152570] text-white py-4 rounded-xl font-bold text-lg shadow-lg">Get Started Free</button>
                    </Link>
                </div>
            </div>
          </motion.nav>
        </AnimatePresence>

        {/* --- Hero Section --- */}
        <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-slate-50/50">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-green-50/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6 md:space-y-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-slate-200 rounded-full shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#22c55e] fill-[#22c55e]/10" />
                  <span className="text-xs md:text-sm font-bold text-slate-600 tracking-tight">Trust-First Commerce Platform</span>
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-[76px] leading-[1.1] md:leading-[1.05] font-bold tracking-tight text-[#152570]">
                  The Safest Way <br />
                  to <span className="text-[#22c55e] relative whitespace-nowrap">
                    Buy and Sell
                    <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-[#22c55e]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span> <br />
                  Online
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-base md:text-xl text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium px-2 lg:px-0">
                  Payments are held securely until both buyer and Vendor confirm delivery. No more payment fears. No scams. No stress. Just safe transactions across Africa.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4 justify-center lg:justify-start w-full sm:w-auto">
                  <Link href="/signup" className="w-full sm:w-auto">
                      <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-green-500/20"
                      >
                      Start Selling <ArrowRight size={20} />
                      </motion.button>
                  </Link>
                  <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#152570] bg-white border border-slate-200 hover:border-[#152570] shadow-sm hover:shadow-md transition-all"
                  >
                    View Demo
                  </motion.button>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 pt-4 md:pt-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                    <p className="w-full lg:w-auto text-xs font-bold uppercase tracking-widest text-slate-400">Trusted By</p>
                    {/* Placeholder logos using text for demo purposes */}
                    <span className="text-slate-400 font-bold text-base md:text-lg">LogisticsCo</span>
                    <span className="text-slate-400 font-bold text-base md:text-lg">PaySafe</span>
                    <span className="text-slate-400 font-bold text-base md:text-lg">MarketHub</span>
                </motion.div>
              </motion.div>

              <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-10 flex justify-center lg:justify-end mt-8 lg:mt-0"
              >
                <div className="relative w-[280px] md:w-full max-w-[420px]">
                   {/* Main Mockup Image */}
                   <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                      className="relative z-10"
                   >
                       <Image 
                         src="/images/mockup-phone.png" 
                         alt="VendorVentory App" 
                         width={420}
                         height={840}
                         className="w-full h-auto drop-shadow-2xl"
                         priority
                       />
                   </motion.div>
                   
                   {/* Floating Glass Card 1 */}
                   <motion.div 
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="absolute top-8 -left-4 md:top-12 md:-left-6 bg-white/80 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white flex items-center gap-3 md:gap-4 z-20 transform scale-90 md:scale-100"
                   >
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                          <ShieldCheck size={18} />
                      </div>
                      <div>
                          <div className="text-[10px] md:text-xs uppercase font-bold text-slate-400">Payment Status</div>
                          <div className="text-xs md:text-sm font-bold text-[#152570]">Secure and Protected</div>
                      </div>
                   </motion.div>

                   {/* Floating Glass Card 2 */}
                   <motion.div 
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="absolute bottom-20 -right-4 md:bottom-24 md:-right-6 bg-white/80 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white flex items-center gap-3 md:gap-4 z-20 transform scale-90 md:scale-100"
                   >
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center text-[#152570]">
                          <Truck size={18} />
                      </div>
                      <div>
                          <div className="text-[10px] md:text-xs uppercase font-bold text-slate-400">Delivery</div>
                          <div className="text-xs md:text-sm font-bold text-[#152570]">Item Verified</div>
                      </div>
                   </motion.div>
                   
                   {/* Glow behind phone */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-[#152570]/10 rounded-full blur-3xl -z-10"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* --- Problem Section --- */}
        <section id="features" className="py-16 md:py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
               badge={<span className="flex items-center gap-1.5"><AlertTriangle size={14} /> The Risk</span>}
               title="Social Commerce is Broken"
               subtitle="Millions trade on social apps daily, but the lack of trust infrastructure creates massive risks."
            />

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { 
                    icon: <CreditCard size={24} />, 
                    title: "Pay Before Delivery", 
                    desc: "Sending money first with no guarantee you'll receive your order is a gamble.",
                    color: "bg-red-50 text-red-600"
                },
                { 
                    icon: <UserX size={24} />, 
                    title: "Unverified Vendors", 
                    desc: "No way to verify if a seller is legitimate or just a temporary fake account.",
                    color: "bg-orange-50 text-orange-600"
                },
                { 
                    icon: <PackageSearch size={24} />, 
                    title: "Zero Visibility", 
                    desc: "Once you pay, you are left in the dark about delivery status and timeline.",
                    color: "bg-yellow-50 text-yellow-600"
                },
                { 
                    icon: <Gavel size={24} />, 
                    title: "No Recourse", 
                    desc: "If something goes wrong, you're on your own. No refunds, no support.",
                    color: "bg-slate-100 text-slate-600"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="group p-6 md:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300"
                >
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                      {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#152570] mb-3">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-slate-500 group-hover:text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- How it Works Section --- */}
        <section id="how-it-works" className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <SectionHeader 
                  badge="Simple Process"
                  title="How VendorVentory Works"
                  subtitle="A transparent, four-step workflow that protects both buyers and sellers equally."
              />
              
              <div className="relative mt-12 md:mt-20">
                  {/* Connecting Line (Desktop Only) */}
                  <div className="hidden lg:block absolute top-[60px] left-0 w-full h-1 bg-slate-200 -z-10 rounded-full overflow-hidden">
                      <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                          className="h-full bg-gradient-to-r from-[#152570] via-blue-500 to-[#22c55e]"
                      />
                  </div>

                  <motion.div 
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                  >
                      {[
                          { step: "01", title: "Invoice", desc: "Vendor creates a digital invoice detailing the item with price, and sends the product list to the buyer for payment.", icon: <Receipt size={24} />, bg: "bg-white", border: "border-[#152570]" },
                          { step: "02", title: "Payment", desc: "Buyer pays securely through Vendor Ventory. Funds are held by Vendor Ventory until delivery is confirmed by the buyer.", icon: <Lock size={24} />, bg: "bg-white", border: "border-blue-500" },
                          { step: "03", title: "Delivery", desc: "Logistics partner picks up and delivers item to buyer.", icon: <Truck size={24} />, bg: "bg-white", border: "border-blue-400" },
                          { step: "04", title: "Release", desc: "Buyer confirms. Funds are released to vendor's bank account instantly, once product is confirmed by the buyer.", icon: <Sparkles size={24} />, bg: "bg-[#22c55e]", border: "border-[#22c55e]", text: "text-white" }
                      ].map((item, idx) => (
                          <motion.div key={idx} variants={fadeInUp} className="relative group flex md:block items-start gap-4 md:gap-0">
                              {/* Step Bubble */}
                              <motion.div 
                                  whileHover={{ scale: 1.1 }}
                                  className={`shrink-0 w-16 h-16 lg:w-[120px] lg:h-[120px] lg:mx-auto mb-0 md:mb-8 rounded-full ${item.bg} ${item.text || 'text-[#152570]'} flex items-center justify-center shadow-xl border-4 ${item.border} transition-all z-10 relative`}
                              >
                                  <div className="hidden lg:block text-4xl font-bold">{item.step}</div>
                                  <div className="lg:hidden">{item.icon}</div>
                              </motion.div>
                              
                              {/* Card Content */}
                              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all text-left lg:text-center h-full w-full">
                                  <h3 className="text-lg font-bold text-[#152570] mb-2 flex items-center gap-2 lg:justify-center">
                                      <span className="lg:hidden font-mono text-blue-200">{item.step}.</span> {item.title}
                                  </h3>
                                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                              </div>
                          </motion.div>
                      ))}
                  </motion.div>
              </div>
          </div>
        </section>

        {/* --- Target Audience (Bento Grid) --- */}
        <section id="who-its-for" className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader 
                  badge={<span className="flex items-center gap-2"><Globe2 size={16}/> The Ecosystem</span>}
                  title="Who It's For"
                  subtitle="We unite the entire social commerce value chain."
              />
              
              <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                  {[
                      { 
                          title: "Vendors", 
                          img: "/images/vendors.jpg", 
                          icon: <Box size={24} />, 
                          color: "text-blue-600",
                          desc: "Sell confidently. No more 'pay on delivery' rejections.",
                          tags: ["Guaranteed Payment", "Inventory Mgmt"]
                      },
                      { 
                          title: "Buyers", 
                          img: "/images/buyers.jpg", 
                          icon: <Smartphone size={24} />, 
                          color: "text-green-600",
                          desc: "Shop from Instagram/Twitter vendors without fear of scams.",
                          tags: ["Money Back Guarantee", "Order Tracking"]
                      },
                      { 
                          title: "Logistics", 
                          img: "/images/delivery-partners.jpg", 
                          icon: <Truck size={24} />, 
                          color: "text-orange-600",
                          desc: "Get verified delivery jobs with instant payout upon completion.",
                          tags: ["Route Optimization", "Instant Pay"]
                      }
                  ].map((card, idx) => (
                      <motion.div 
                          key={idx} 
                          variants={scaleIn}
                          whileHover={{ y: -8 }}
                          className="group flex flex-col h-full bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
                      >
                          <div className="relative h-48 md:h-64 overflow-hidden">
                              <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#152570]/90 to-transparent"></div>
                              <div className="absolute bottom-6 left-6 text-white">
                                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-3 text-white">
                                      {card.icon}
                                  </div>
                                  <h3 className="text-2xl font-bold">{card.title}</h3>
                              </div>
                          </div>
                          <div className="p-6 md:p-8 flex-grow flex flex-col bg-white">
                              <p className="text-slate-600 mb-6 text-sm leading-relaxed font-medium">{card.desc}</p>
                              
                              <div className="mt-auto flex flex-wrap gap-2">
                                  {card.tags.map((tag, i) => (
                                      <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-500">
                                          {tag}
                                      </span>
                                  ))}
                              </div>
                              
                              <button className="mt-8 w-full py-3 rounded-xl border border-slate-200 text-[#152570] font-bold text-sm hover:bg-[#152570] hover:text-white transition-all flex items-center justify-center group/btn">
                                  Learn More <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                              </button>
                          </div>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
        </section>

        {/* --- Trust & Security --- */}
        <section id="security" className="py-16 md:py-24 bg-[#F0F9FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                  >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                          <Fingerprint size={14}/> Bank-Grade Security
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#152570] mb-6 leading-tight">
                          Trust is not a Feature. <br /> It's the Foundation.
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                          We use state-of-the-art encryption and rigorous verification processes to ensure every transaction is legitimate.
                        </p>
                        
                        <div className="space-y-6">
                          {[
                              { title: "Secure Payment Protection", desc: "Funds held in regulated trust accounts." },
                              { title: "KYC/KYB Verification", desc: "We verify the identity of every vendor." },
                              { title: "Dispute Arbitration", desc: "Fair mediation team on standby 24/7." }
                          ].map((item, i) => (
                              <motion.div 
                                  key={i} 
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-colors cursor-default"
                              >
                                  <div className="mt-1 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#152570] shrink-0">
                                      <Check size={20} strokeWidth={3} />
                                  </div>
                                  <div>
                                      <h4 className="text-lg font-bold text-[#152570]">{item.title}</h4>
                                      <p className="text-slate-500 text-sm">{item.desc}</p>
                                  </div>
                              </motion.div>
                          ))}
                        </div>
                  </motion.div>

                  <motion.div 
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="grid grid-cols-2 gap-4 md:gap-6"
                  >
                      {[
                          { top: "256-bit", bot: "Encryption", color: "text-[#152570]" },
                          { top: "100%", bot: "Money Back", color: "text-[#22c55e]" },
                          { top: "24/7", bot: "Live Support", color: "text-[#152570]" },
                          { top: "Verified", bot: "Merchants Only", color: "text-[#22c55e]" }
                      ].map((stat, idx) => (
                          <motion.div 
                              key={idx} 
                              variants={scaleIn}
                              whileHover={{ scale: 1.05 }}
                              className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm text-center flex flex-col justify-center hover:shadow-lg transition-all border border-slate-100"
                          >
                              <div className={`text-2xl md:text-4xl font-bold mb-2 ${stat.color}`}>{stat.top}</div>
                              <div className="text-[10px] md:text-xs uppercase tracking-wider text-slate-400 font-bold">{stat.bot}</div>
                          </motion.div>
                      ))}
                      
                      <motion.div 
                          variants={scaleIn}
                          className="col-span-2 bg-[#152570] p-6 md:p-8 rounded-[32px] text-center text-white relative overflow-hidden"
                      >
                           <div className="absolute top-0 right-0 p-32 bg-blue-500 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                           <div className="relative z-10 flex items-center justify-center gap-4">
                               <Shield size={32} className="text-[#22c55e]" />
                               <div className="text-left">
                                   <div className="font-bold text-base md:text-lg">PCI-DSS Compliant</div>
                                   <div className="text-blue-200 text-xs md:text-sm">Audited Infrastructure</div>
                               </div>
                           </div>
                      </motion.div>
                  </motion.div>
              </div>
          </div>
        </section>

        {/* --- FAQ Section --- */}
        <section id="faq" className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              badge="FAQ"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about VendorVentory."
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 space-y-2"
            >
              {faqs.map((faq, index) => (
                <FaqItem 
                  key={index}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFaqIndex === index}
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="bg-[#152570] py-16 md:py-24 relative overflow-hidden">
          {/* Background Effects */}
          <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none"
          >
              <Shield size={600} strokeWidth={0.5} className="text-white" />
          </motion.div>
          <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22c55e] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"
          />

          <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto px-4 text-center relative z-10"
          >
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
                  Start Selling Safely Today
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                  No more payment fear. No more delivery disputes. <br className="hidden md:block"/>
                  Just secure, transparent commerce built on trust.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/signup">
                      <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full sm:w-auto bg-[#22c55e] hover:bg-green-500 text-white px-10 py-5 rounded-xl font-bold text-xl inline-flex items-center justify-center gap-2 shadow-xl shadow-blue-900/50"
                      >
                          Create Free Account <ArrowRight size={22} />
                      </motion.button>
                  </Link>
              </div>

              <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-sm font-medium text-blue-200/80">
                  <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#22c55e]" /> Free to start</span>
                  <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#22c55e]" /> No setup fees</span>
                  <span className="flex items-center gap-2"><Zap size={16} className="text-[#22c55e]" /> Instant Payouts</span>
              </div>
          </motion.div>
        </section>

        {/* --- Footer --- */}
        <footer className="bg-white border-t border-slate-100 pt-16 md:pt-20 pb-10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
                 
                 {/* Brand Column */}
                 <div className="lg:col-span-2 pr-8">
                     <div 
                        className="flex items-center relative cursor-pointer mb-6"
                        onClick={(e) => scrollToSection(e, 'home')}
                      >
                        <div className="relative w-40 h-10 md:w-48 md:h-12 transition-all"> 
                          <Image 
                            src="/images/logo.png" 
                            alt="VendorVentory Logo" 
                            fill
                            className="object-contain object-left" 
                          />
                        </div>
                      </div>
                     <p className="text-[#4A5565] text-sm leading-relaxed mb-6">
                         Secure payment platform protecting buyers and vendors across Africa.
                     </p>
                     
                     {/* Contact Info */}
                     <div className="mb-6 space-y-3">
                      <a href="mailto:hello@vendorventory.com" className="flex items-center gap-3 text-sm text-[#4A5565] hover:text-[#152570] transition-colors">
                           <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#152570]">
                              <Mail size={14} />
                           </div>
                           support@vendorventory.com
                        </a>
                        <a href="mailto:hello@vendorventory.com" className="flex items-center gap-3 text-sm text-[#4A5565] hover:text-[#152570] transition-colors">
                           <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#152570]">
                              <Mail size={14} />
                           </div>
                           customercare@vendorventory.com
                        </a>
                        <a href="tel:+2348000000000" className="flex items-center gap-3 text-sm text-[#4A5565] hover:text-[#152570] transition-colors">
                           <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#152570]">
                              <Phone size={14} />
                           </div>
                           +234 708 907 7668
                        </a>
                     </div>

                     {/* Socials */}
                     <div className="flex gap-4">
                         <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#152570] hover:bg-black hover:text-white transition-colors" aria-label="X (Twitter)">
                             <XLogo className="w-4 h-4" />
                         </a>
                         <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#152570] hover:bg-[#E1306C] hover:text-white transition-colors" aria-label="Instagram">
                             <Instagram size={18} />
                         </a>
                         <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#152570] hover:bg-black hover:text-white transition-colors" aria-label="TikTok">
                             <TikTokLogo className="w-4 h-4" />
                         </a>
                     </div>
                 </div>

                 {/* Links Columns */}
                 {[
                     { title: "Product", links: ["How It Works", "Features", "Pricing", "Security"] },
                     { title: "Company", links: ["About Us", "Careers", "Blog", "Contact"] },
                     { title: "Resources", links: ["Help Center", "API Docs", "Status", "Community"] },
                     { title: "Legal", links: ["Terms", "Privacy", "Cookies", "Licenses"] }
                 ].map((col, idx) => (
                     <div key={idx}>
                         <h4 className="text-[#152570] font-bold mb-6">{col.title}</h4>
                         <ul className="space-y-3 text-sm text-[#4A5565]">
                             {col.links.map((link) => (
                                 <li key={link}><a href="#" className="hover:text-[#152570] hover:underline transition">{link}</a></li>
                             ))}
                         </ul>
                     </div>
                 ))}
              </div>

              <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                  <p className="text-sm text-slate-400">
                      &copy; 2026 VendorVentory. All rights reserved.
                  </p>
                  <div className="flex gap-6 text-sm text-slate-500 justify-center">
                      <a href="#" className="hover:text-[#152570]">Privacy Policy</a>
                      <a href="#" className="hover:text-[#152570]">Terms of Service</a>
                  </div>
              </div>
          </div>
        </footer>
    </div>
  );
}