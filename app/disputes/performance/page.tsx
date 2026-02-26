"use client";

import React from 'react';
import { 
  Briefcase, Clock, AlertTriangle, CheckCircle2, 
  TrendingUp, TrendingDown, ChevronRight, Filter,
  Calendar, Download, PieChart
} from 'lucide-react';

// Sidebar correctly imported from your established components folder
import { Sidebar } from '../components/Sidebar';

export default function PerformanceMetrics() {
  const metrics = [
    { label: 'Total Cases Handled', value: '487', trend: '+12%', sub: '+12% vs last month', icon: Briefcase, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Avg. Resolution Time', value: '4.2h', trend: '-0.8h', sub: '-0.8h improvement', icon: Clock, color: 'text-purple-500', bg: 'bg-purple-50', isGood: true },
    { label: 'Escalation Rate', value: '8.5%', trend: '-2.1%', sub: '-2.1% improvement', icon: AlertTriangle, color: 'text-amber-500', bg: 'bg-amber-50', isGood: true },
    { label: 'SLA Compliance', value: '94.2%', trend: '+3.5%', sub: '+3.5% improvement', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50', isGood: true },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* SIDEBAR NAVIGATION */}
      <Sidebar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24 lg:ml-[280px]">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#1e293b]">Performance Metrics</h1>
            <p className="text-sm font-bold text-slate-400 mt-1">Track your dispute resolution performance</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 shadow-sm transition-all">
              <Calendar size={14} /> Last 30 Days
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#19246a] text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-100 hover:bg-indigo-900 transition-all">
              <Download size={14} /> Export Stats
            </button>
          </div>
        </div>

        {/* TOP LEVEL METRIC CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-black uppercase ${item.isGood ? 'text-emerald-500' : 'text-indigo-600'}`}>
                   {item.trend?.startsWith('+') ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                   {item.trend}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#1e293b]">{item.value}</h2>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{item.label}</p>
                <p className={`text-[9px] font-bold mt-2 uppercase tracking-tighter ${item.isGood ? 'text-emerald-500' : 'text-slate-300'}`}>
                   {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* CASES RESOLVED CHART */}
          <section className="lg:col-span-3 bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 space-y-8">
            <h3 className="text-sm font-black text-[#1e293b] uppercase tracking-[0.2em]">Cases Resolved Over Time</h3>
            
            <div className="relative h-[300px] w-full pt-10">
              {/* Simplified SVG Path mimicking the design's line chart */}
              <div className="absolute inset-0 flex flex-col justify-between text-[9px] font-bold text-slate-200 pointer-events-none uppercase tracking-widest pr-4">
                <span>24 —</span>
                <span>18 —</span>
                <span>12 —</span>
                <span>6 —</span>
                <span>0 —</span>
              </div>
              
              <svg className="w-full h-full overflow-visible ml-6" preserveAspectRatio="none">
                <path 
                  d="M0,200 L100,160 L200,120 L300,180 L400,60 L500,140 L600,220" 
                  fill="none" 
                  stroke="#19246a" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                {[
                  { x: 0, v: 12 }, { x: 100, v: 14 }, { x: 200, v: 18 }, 
                  { x: 300, v: 14 }, { x: 400, v: 22 }, { x: 500, v: 16 }, { x: 600, v: 10 }
                ].map((p, i) => (
                  <circle key={i} cx={p.x} cy={240 - (p.v * 10)} r="5" fill="#19246a" className="cursor-pointer hover:r-6 transition-all" />
                ))}
              </svg>
              
              <div className="flex justify-between mt-4 ml-6 text-[9px] font-black text-slate-300 uppercase tracking-widest">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
               <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#19246a]" />
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Cases Resolved</span>
               </div>
            </div>
          </section>

          {/* OUTCOME DISTRIBUTION */}
          <section className="lg:col-span-2 bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 flex flex-col justify-between">
            <h3 className="text-sm font-black text-[#1e293b] uppercase tracking-[0.2em]">Resolution Outcome Distribution</h3>
            
            <div className="flex-1 flex flex-col items-center justify-center py-8">
               <div className="relative w-48 h-48">
                  {/* Stylized Pie Chart */}
                  <svg viewBox="0 0 32 32" className="w-full h-full -rotate-90">
                    <circle r="16" cx="16" cy="16" fill="transparent" stroke="#19246a" strokeWidth="32" strokeDasharray="55 100" />
                    <circle r="16" cx="16" cy="16" fill="transparent" stroke="#10b981" strokeWidth="32" strokeDasharray="45 100" strokeDashoffset="-55" />
                    <circle r="16" cx="16" cy="16" fill="white" />
                  </svg>
               </div>
            </div>

            <div className="space-y-4">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                     <span className="text-xs font-bold text-slate-500">Refund to Buyer</span>
                  </div>
                  <span className="text-sm font-black text-[#1e293b]">45%</span>
               </div>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-[#19246a]" />
                     <span className="text-xs font-bold text-slate-500">Release to Merchant</span>
                  </div>
                  <span className="text-sm font-black text-[#1e293b]">55%</span>
               </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}