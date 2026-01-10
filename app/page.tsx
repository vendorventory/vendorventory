'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, AlertTriangle, Wallet, Truck, CheckCircle2, Lock, 
  BadgeCheck, Menu, ArrowRight, Shield, Check, X, Box, Users2, 
  Twitter, Linkedin, Facebook, Sun, Moon, 
  Fingerprint, Receipt, Zap, Sparkles, Globe2,
  Banknote, UserX, PackageSearch, Scale
} from 'lucide-react';
import { Arimo } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

// Configuring the Arimo font
const arimo = Arimo({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo',
  display: 'swap',
});

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// --- Reusable Components ---

const SectionHeader = ({ badge, title, subtitle, align = 'center', light = false }: any) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    className={`mb-16 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
  >
    {badge && (
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 
        ${light 
          ? 'bg-white/10 text-blue-100 border border-white/20' 
          : 'bg-blue-50 text-primary-blue border border-blue-100 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-800'
        }`}
      >
        {badge}
      </div>
    )}
    <h2 className={`font-medium leading-tight mb-6 text-3xl md:text-5xl ${light ? 'text-white' : 'text-primary-blue dark:text-white'}`}>
      {title}
    </h2>
    <p className={`text-lg md:text-xl leading-relaxed ${light ? 'text-blue-100' : 'text-primary-blue/80 dark:text-slate-400'}`}>
      {subtitle}
    </p>
  </motion.div>
);

// --- Skeleton Loader ---
const LandingSkeleton = () => (
  <div className="min-h-screen bg-background animate-pulse">
    <div className="h-20 border-b border-slate-100 flex items-center justify-between px-8">
      <div className="w-48 h-10 bg-slate-200 rounded-lg"></div>
      <div className="hidden lg:flex gap-4">
        <div className="w-24 h-12 bg-slate-200 rounded-xl"></div>
        <div className="w-32 h-12 bg-slate-200 rounded-xl"></div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-8 pt-32 grid lg:grid-cols-2 gap-12">
      <div className="space-y-6">
        <div className="w-full h-20 bg-slate-200 rounded-2xl"></div>
        <div className="w-3/4 h-20 bg-slate-200 rounded-2xl"></div>
      </div>
      <div className="hidden lg:block bg-slate-200 rounded-3xl h-[600px]"></div>
    </div>
  </div>
);

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const currentYear = new Date().getFullYear();

  // Fake Loading Effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  if (loading) return <LandingSkeleton />;

  return (
    // DARK MODE WRAPPER: This div controls the 'dark' class for the entire page
    <div className={`${isDarkMode ? 'dark' : ''} ${arimo.variable} ${arimo.className}`}>
      <div className="min-h-screen bg-background dark:bg-slate-950 font-sans text-[#4A5565] dark:text-slate-300 transition-colors duration-300 overflow-x-hidden">
        
        <AnimatePresence>
          {/* --- Navigation --- */}
          <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 
              ${scrolled 
                ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm py-2' 
                : 'bg-background dark:bg-slate-950 py-4 border-b border-transparent'
              }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20"> 
                
                {/* Logo */}
                <div className="flex items-center relative z-50">
                  <div className="relative w-48 h-12 md:w-64 md:h-16 transition-all"> 
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
                <div className="hidden lg:flex items-center space-x-8 text-[16px] font-medium text-primary-blue dark:text-slate-300">
                  {['How It Works', "Who It's For", 'About', 'Security'].map((item) => (
                    <a key={item} href="#" className="hover:text-primary-green dark:hover:text-white relative group transition-colors">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-green transition-all group-hover:w-full"></span>
                    </a>
                  ))}
                </div>

                {/* Right Side Actions */}
                <div className="hidden lg:flex items-center gap-6">
                  <button 
                    onClick={toggleTheme} 
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-primary-blue dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>

                  <Link href="/login">
                      <button className="text-primary-blue dark:text-white font-bold text-lg hover:text-primary-green transition-colors">Sign In</button>
                  </Link>
                  <Link href="/signup">
                      <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-primary-green hover:bg-[#2da35e] text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg shadow-primary-green/20"
                      >
                          Get Started
                      </motion.button>
                  </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center gap-4 relative z-50">
                   <button 
                    onClick={toggleTheme} 
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-primary-blue dark:text-yellow-400"
                  >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>

                  <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                    className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                     {isMobileMenuOpen ? <X className="w-8 h-8 text-primary-blue dark:text-white"/> : <Menu className="w-8 h-8 text-primary-blue dark:text-white" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl z-40 transition-transform duration-300 lg:hidden flex flex-col pt-32 px-6 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col gap-6 text-2xl font-medium text-primary-blue dark:text-white">
                  {['How It Works', "Who It's For", 'About', 'Security'].map((item) => (
                     <a key={item} href="#" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">{item}</a>
                  ))}
                </div>
                <div className="mt-auto mb-10 flex flex-col gap-4">
                    <Link href="/login" className="w-full">
                      <button className="w-full bg-primary-blue dark:bg-slate-800 text-white py-4 rounded-xl font-bold text-lg">Sign In</button>
                    </Link>
                    <Link href="/signup" className="w-full">
                      <button className="w-full bg-primary-green text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary-green/20">Get Started</button>
                    </Link>
                </div>
            </div>
          </motion.nav>
        </AnimatePresence>

        {/* --- Hero Section --- */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background dark:bg-slate-950 transition-colors duration-300">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent dark:from-blue-900/20 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-primary-green fill-primary-green/10" />
                  <span className="text-sm font-semibold text-primary-blue dark:text-slate-300">Secure Escrow Payments</span>
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-[72px] leading-[1.1] font-medium tracking-tight text-primary-blue dark:text-white">
                  The Safest Way <br />
                  to <span className="text-primary-green">Buy and Sell</span> <br />
                  Online
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-blue/80 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Trade with confidence using escrow protection, delivery confirmation, and built-in trust. No more payment fears. No more scams.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                  <Link href="/signup">
                      <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center gap-2 bg-primary-green hover:bg-[#2da35e] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-primary-green/20"
                      >
                      Get Started as a Vendor <ArrowRight size={20} />
                      </motion.button>
                  </Link>
                  <motion.button 
                      whileHover={{ scale: 1.05, backgroundColor: isDarkMode ? "#1e293b" : "#fff" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-primary-blue dark:text-white border-2 border-slate-200 dark:border-slate-700 hover:border-primary-blue dark:hover:border-white transition-colors"
                  >
                    Learn How It Works
                  </motion.button>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 pt-4 text-sm font-medium text-primary-blue/70 dark:text-slate-400">
                  {["Escrow Protected", "Delivery Verified", "Dispute Resolution"].map(feature => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-green" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-10 flex justify-center lg:justify-end mt-8 lg:mt-0"
              >
                <div className="relative w-full max-w-[420px]">
                   <motion.div 
                      animate={{ y: [0, -15, 0] }}
                      whileHover={{ 
                        scale: 1.05, 
                        rotate: -2,
                        y: 0,
                        transition: { duration: 0.4, ease: "easeOut" }
                      }}
                      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                      className="cursor-pointer"
                   >
                       <Image 
                          src="/images/mockup.png" 
                          alt="VendorVentory App" 
                          width={420} 
                          height={840} 
                          priority 
                          className="w-full h-auto drop-shadow-2xl relative z-20" 
                       />
                   </motion.div>
                   
                   <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, type: "spring" }}
                      className="absolute top-24 -left-4 md:-left-12 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 dark:border-slate-700 flex items-center gap-4 z-30 max-w-[200px]"
                   >
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-primary-green dark:text-green-400 shrink-0">
                          <BadgeCheck size={24} />
                      </div>
                      <div>
                          <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Verified Vendor</div>
                          <div className="text-base font-bold text-primary-blue dark:text-white">850+ sales</div>
                      </div>
                   </motion.div>

                   <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.0, type: "spring" }}
                      className="absolute bottom-32 -right-4 md:-right-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 dark:border-slate-700 flex items-center gap-4 z-30 max-w-[220px]"
                   >
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-primary-blue dark:text-blue-400 shrink-0">
                          <Lock size={24} />
                      </div>
                      <div>
                          <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Status</div>
                          <div className="text-base font-bold text-primary-blue dark:text-white">Funds Secured</div>
                      </div>
                   </motion.div>

                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-primary-blue/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Problem Section (COLORS RESTORED) --- */}
        <section className="py-24 bg-white dark:bg-slate-950 relative transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
               badge={
                  <span className="flex items-center gap-1.5"><AlertTriangle size={14} /> The Problem</span>
               }
               title="Why Social Commerce Feels Risky"
               subtitle="Millions buy and sell through social apps daily. But without infrastructure, trust is the barrier."
            />

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { 
                  icon: <Banknote size={48} strokeWidth={1.5} />, 
                  title: "Pay Before Delivery", 
                  desc: "Sending money first with no guarantee you'll receive your order is a massive risk.",
                  iconColor: "text-primary-blue"
                },
                { 
                  icon: <UserX size={48} strokeWidth={1.5} />, 
                  title: "Unverified Vendors", 
                  desc: "No way to verify if a seller is legitimate or just a temporary account.",
                  iconColor: "text-primary-green"
                },
                { 
                  icon: <PackageSearch size={48} strokeWidth={1.5} />, 
                  title: "Zero Tracking", 
                  desc: "Once you pay, you are left in the dark about delivery status and timeline.",
                  iconColor: "text-primary-blue"
                },
                { 
                  icon: <Scale size={48} strokeWidth={1.5} />, 
                  title: "No Dispute Support", 
                  desc: "If something goes wrong, you're on your own. No refunds, no help.",
                  iconColor: "text-primary-green"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl text-left border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl dark:hover:shadow-blue-900/10 transition-all duration-300"
                >
                  {/* ICONS ARE NOW COLORED BY DEFAULT */}
                  <div className={`mb-6 ${item.iconColor} dark:text-white group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-primary-blue/70 dark:text-slate-400 group-hover:text-primary-blue dark:group-hover:text-slate-300 transition-colors">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- How it Works Section --- */}
        <section className="py-24 bg-background dark:bg-slate-900 overflow-hidden transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader 
                  badge="Simple & Secure"
                  title="How Vendor Ventory Works"
                  subtitle="A transparent, four-step process that protects both buyers and sellers"
              />
              
              <div className="relative mt-20">
                  <div className="hidden lg:block absolute top-[60px] left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 -z-10 rounded-full overflow-hidden">
                      <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "75%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          className="h-full bg-gradient-to-r from-primary-blue to-slate-200 dark:from-blue-500 dark:to-slate-800"
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
                          { step: "01", title: "Invoice", desc: "Vendor creates a professional invoice with all details.", icon: <Receipt size={24} />, color: "bg-primary-blue dark:bg-blue-600" },
                          { step: "02", title: "Escrow", desc: "Buyer pays securely. Funds are locked until delivery.", icon: <Wallet size={24} />, color: "bg-primary-blue dark:bg-blue-600" },
                          { step: "03", title: "Delivery", desc: "Item delivered with real-time tracking.", icon: <Truck size={24} />, color: "bg-primary-blue dark:bg-blue-600" },
                          { step: "04", title: "Release", desc: "Buyer confirms. Funds released instantly.", icon: <Sparkles size={24} />, color: "bg-primary-green" }
                      ].map((item, idx) => (
                          <motion.div key={idx} variants={fadeInUp} className="relative group">
                              <motion.div 
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  className={`w-12 h-12 lg:w-[120px] lg:h-[120px] lg:mx-auto mb-6 rounded-full ${item.color} flex items-center justify-center text-white shadow-lg lg:border-8 border-white dark:border-slate-900 transition-all`}
                              >
                                  <div className="hidden lg:block text-4xl font-bold">{item.step}</div>
                                  <div className="lg:hidden">{item.icon}</div>
                              </motion.div>
                              
                              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm group-hover:shadow-lg transition-all text-left lg:text-center h-full">
                                  <h3 className="text-lg font-bold text-primary-blue dark:text-white mb-2">{item.title}</h3>
                                  <p className="text-sm text-primary-blue/70 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                              </div>
                          </motion.div>
                      ))}
                  </motion.div>
              </div>
          </div>
        </section>

        {/* --- Target Audience (Bento Grid) --- */}
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader 
                  badge={<span className="flex items-center gap-2"><Globe2 size={16}/> Ecosystem</span>}
                  title="Who It's For"
                  subtitle="Vendor Ventory creates a unified platform where everyone wins."
              />
              
              <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-3 gap-8"
              >
                  {[
                      { 
                          title: "Vendors", 
                          img: "/images/vendors.jpg", 
                          icon: <Box size={24} />, 
                          color: "bg-primary-blue dark:bg-blue-600", 
                          desc: "Sell confidently, manage inventory, and get paid securely.",
                          features: ["Pro Invoicing", "Instant Payouts", "Order Mgmt"]
                      },
                      { 
                          title: "Buyers", 
                          img: "/images/buyers.jpg", 
                          icon: <Users2 size={24} />, 
                          color: "bg-primary-green", 
                          desc: "Pay safely, track deliveries, and confirm before funds release.",
                          features: ["Money Back Guarantee", "Live Tracking", "No Scams"]
                      },
                      { 
                          title: "Logistics", 
                          img: "/images/delivery-partners.jpg", 
                          icon: <Truck size={24} />, 
                          color: "bg-primary-blue dark:bg-blue-600", 
                          desc: "Structured delivery jobs with proof-based confirmation.",
                          features: ["Clear Routes", "Digital Proof", "Fast Payments"]
                      }
                  ].map((card, idx) => (
                      <motion.div 
                          key={idx} 
                          variants={scaleIn}
                          whileHover={{ y: -10 }}
                          className="group flex flex-col h-full bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-blue-900/10 transition-all duration-300"
                      >
                          <div className="relative h-56 overflow-hidden">
                              <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div className={`absolute bottom-4 left-6 w-12 h-12 ${card.color} rounded-xl flex items-center justify-center shadow-lg text-white`}>
                                  {card.icon}
                              </div>
                          </div>
                          <div className="p-8 flex-grow flex flex-col">
                              <h3 className="text-2xl font-bold text-primary-blue dark:text-white mb-3">{card.title}</h3>
                              <p className="text-primary-blue/70 dark:text-slate-400 mb-6 text-sm leading-relaxed">{card.desc}</p>
                              
                              <div className="mt-auto space-y-3">
                                  {card.features.map((feat, i) => (
                                      <div key={i} className="flex items-center gap-2 text-sm font-medium text-primary-blue/70 dark:text-slate-400">
                                          <div className={`w-1.5 h-1.5 rounded-full ${card.color}`}></div>
                                          {feat}
                                      </div>
                                  ))}
                              </div>
                              
                              <button className="mt-8 w-full py-3 rounded-xl border border-primary-blue/20 dark:border-slate-700 text-primary-blue dark:text-white font-bold text-sm hover:bg-primary-blue/5 dark:hover:bg-slate-800 transition flex items-center justify-center group/btn">
                                  Learn More <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                              </button>
                          </div>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
        </section>

        {/* --- Trust & Security --- */}
        <section className="py-24 bg-[#F0F9FF] dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                  >
                       <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                          <Fingerprint size={14}/> Security First
                       </div>
                       <h2 className="text-4xl md:text-5xl font-medium text-primary-blue dark:text-white mb-6 leading-tight">
                          Trust & Security <br /> Built In
                       </h2>
                       <p className="text-lg text-primary-blue/70 dark:text-slate-400 mb-10 leading-relaxed">
                          Multiple layers of protection ensure every transaction is safe, transparent, and accountable. We don't just facilitate trade; we protect it.
                       </p>
                       
                       <div className="space-y-6">
                          {[
                              { title: "Escrow Protection", desc: "Funds held securely until terms are met." },
                              { title: "Identity Verification", desc: "Know exactly who you are dealing with." },
                              { title: "Dispute Resolution", desc: "Fair mediation if things go wrong." }
                          ].map((item, i) => (
                              <motion.div 
                                  key={i} 
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex gap-4"
                              >
                                  <div className="mt-1 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary-blue dark:text-blue-400 shrink-0">
                                      <Check size={16} strokeWidth={3} />
                                  </div>
                                  <div>
                                      <h4 className="text-lg font-bold text-primary-blue dark:text-white">{item.title}</h4>
                                      <p className="text-primary-blue/60 dark:text-slate-400 text-sm">{item.desc}</p>
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
                      className="grid grid-cols-2 gap-6"
                  >
                      {[
                          { top: "256-bit", bot: "Encryption", color: "text-primary-blue dark:text-white", bg: "bg-white dark:bg-slate-800" },
                          { top: "100%", bot: "Escrowed", color: "text-primary-green", bg: "bg-white dark:bg-slate-800" },
                          { top: "24/7", bot: "Support", color: "text-primary-blue dark:text-white", bg: "bg-white dark:bg-slate-800" },
                          { top: "Verified", bot: "Merchants", color: "text-primary-green", bg: "bg-white dark:bg-slate-800" }
                      ].map((stat, idx) => (
                          <motion.div 
                              key={idx} 
                              variants={scaleIn}
                              whileHover={{ scale: 1.05 }}
                              className={`${stat.bg} p-8 rounded-[32px] shadow-sm text-center flex flex-col justify-center hover:shadow-lg transition`}
                          >
                              <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>{stat.top}</div>
                              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">{stat.bot}</div>
                          </motion.div>
                      ))}
                      
                      <motion.div 
                          variants={scaleIn}
                          className="col-span-2 bg-primary-blue dark:bg-blue-950 p-8 rounded-[32px] text-center text-white relative overflow-hidden"
                      >
                           <div className="relative z-10 flex items-center justify-center gap-4">
                               <Shield size={40} className="text-primary-green" />
                               <div className="text-left">
                                   <div className="font-bold text-lg">Bank Grade Security</div>
                                   <div className="text-blue-200 text-sm">PCI-DSS Compliant Infrastructure</div>
                               </div>
                           </div>
                      </motion.div>
                  </motion.div>
              </div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="bg-primary-blue dark:bg-blue-950 py-24 relative overflow-hidden transition-colors duration-300">
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
              className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green rounded-full mix-blend-multiply filter blur-[128px] opacity-20"
          />

          <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto px-4 text-center relative z-10"
          >
              <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 leading-tight">
                  Start Selling Safely Today
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
                  No more payment fear. No more delivery disputes. <br className="hidden md:block"/>
                  Just secure, transparent commerce built on trust.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/signup">
                      <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-primary-green hover:bg-[#2da35e] text-white px-10 py-5 rounded-xl font-bold text-xl inline-flex items-center justify-center gap-2 shadow-xl shadow-blue-900/50"
                      >
                          Create Free Account <ArrowRight size={22} />
                      </motion.button>
                  </Link>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-blue-200/80">
                  <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary-green" /> Free to start</span>
                  <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary-green" /> No setup fees</span>
                  <span className="flex items-center gap-2"><Zap size={16} className="text-primary-green" /> Instant Payouts</span>
              </div>
          </motion.div>
        </section>

        {/* --- Footer --- */}
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 pt-20 pb-10 relative transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
                 
                 {/* Brand Column */}
                 <div className="lg:col-span-2 pr-8">
                     <div className="relative w-48 h-12 mb-6"> 
                          <Image 
                              src="/images/logo.png" 
                              alt="Logo" 
                              fill 
                              className="object-contain object-left" 
                          />
                     </div>
                     <p className="text-primary-blue/80 dark:text-slate-400 text-sm leading-relaxed mb-6">
                         The most trusted escrow-based e-commerce platform protecting buyers and vendors across Africa.
                     </p>
                     <div className="flex gap-4">
                         {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                             <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary-blue/5 dark:bg-slate-800 flex items-center justify-center text-primary-blue dark:text-blue-400 hover:bg-primary-blue dark:hover:bg-blue-600 hover:text-white transition-colors">
                                 <Icon size={18} fill="currentColor" strokeWidth={0} />
                             </a>
                         ))}
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
                         <h4 className="text-primary-blue dark:text-white font-bold mb-6">{col.title}</h4>
                         <ul className="space-y-3 text-sm text-primary-blue/70 dark:text-slate-400">
                             {col.links.map((link) => (
                                 <li key={link}><a href="#" className="hover:text-primary-green dark:hover:text-white hover:underline transition">{link}</a></li>
                             ))}
                         </ul>
                     </div>
                 ))}
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-sm text-slate-400">
                      &copy; {currentYear} Vendor Ventory. All rights reserved.
                  </p>
                  <div className="flex gap-6 text-sm text-primary-blue/70 dark:text-slate-400">
                      <a href="#" className="hover:text-primary-blue dark:hover:text-white">Privacy Policy</a>
                      <a href="#" className="hover:text-primary-blue dark:hover:text-white">Terms of Service</a>
                  </div>
              </div>
          </div>
        </footer>
      </div>
    </div>
  );
}