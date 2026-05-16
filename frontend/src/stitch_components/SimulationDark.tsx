"use client";
import React, { useEffect, useRef } from "react";
import { useAppContext } from "@/components/AppContext";

export default function SimulationDark() {
  const { isAbnormal, setIsAbnormal, theme, setTheme } = useAppContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Find Theme Toggle
    const themeBtn = Array.from(containerRef.current.querySelectorAll('button')).find(b => b.textContent?.includes('mode') || b.textContent?.includes('Mode'));
    if (themeBtn) {
        themeBtn.onclick = () => setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    // Find ABNORMAL button and attach onClick
    const buttons = containerRef.current.querySelectorAll('button');
    buttons.forEach(btn => {
      if (btn.textContent?.includes('ABNORMAL') || btn.textContent?.includes('TRIGGER')) {
        btn.onclick = () => setIsAbnormal(!isAbnormal);
        // Modify button style if NORMAL
        if (!isAbnormal) {
           btn.className = btn.className.replace('bg-error/20', 'bg-surface-bright').replace('text-error', 'text-on-surface').replace('border-error/50', 'border-outline-variant');
           btn.innerHTML = btn.innerHTML.replace('ABNORMAL', 'NORMAL').replace('RESTORE', 'TRIGGER');
        } else {
           btn.className = btn.className.replace('bg-surface-bright', 'bg-error/20').replace('text-on-surface', 'text-error').replace('border-outline-variant', 'border-error/50');
           btn.innerHTML = btn.innerHTML.replace('NORMAL', 'ABNORMAL').replace('TRIGGER', 'RESTORE');
        }
      }
    });

    // Toggle CRIT / WARN badges
    const crits = containerRef.current.querySelectorAll('.bg-error-container\\/30, .bg-primary-container\\/10');
    crits.forEach(el => {
      if (!isAbnormal) {
        el.className = el.className.replace('bg-error-container/30', 'bg-primary-container/10').replace('text-error', 'text-primary-container').replace('border-error/50', 'border-primary-container/20');
        if (el.textContent === 'CRIT') el.textContent = 'NORMAL';
      } else {
        el.className = el.className.replace('bg-primary-container/10', 'bg-error-container/30').replace('text-primary-container', 'text-error').replace('border-primary-container/20', 'border-error/50');
        if (el.textContent === 'NORMAL') el.textContent = 'CRIT';
      }
    });

    const warns = containerRef.current.querySelectorAll('.bg-secondary-container\\/30, .bg-primary-container\\/10');
    warns.forEach(el => {
      if (el.textContent === 'WARN' || (el.getAttribute('data-orig') === 'WARN')) {
          el.setAttribute('data-orig', 'WARN');
          if (!isAbnormal) {
            el.className = el.className.replace('bg-secondary-container/30', 'bg-primary-container/10').replace('text-secondary', 'text-primary-container').replace('border-secondary/50', 'border-primary-container/20');
            el.textContent = 'NORMAL';
          } else {
            el.className = el.className.replace('bg-primary-container/10', 'bg-secondary-container/30').replace('text-primary-container', 'text-secondary').replace('border-primary-container/20', 'border-secondary/50');
            el.textContent = 'WARN';
          }
      }
    });
      
    // Remove pulsing glows
    const glows = containerRef.current.querySelectorAll('.animate-pulse');
    glows.forEach(el => {
      if (!el.className.includes('w-2 h-2')) { // Keep the system online indicator
         if (!isAbnormal) {
            el.classList.add('opacity-0');
         } else {
            el.classList.remove('opacity-0');
         }
      }
    });

    // Fix Sidebar Routing
    const links = containerRef.current.querySelectorAll('a');
    links.forEach(a => {
      const text = a.textContent?.toLowerCase() || '';
      if (text.includes('overview') || text.includes('dashboard')) a.href = '/dashboard';
      else if (text.includes('telemetry')) a.href = '/telemetry';
      else if (text.includes('diagnostics')) a.href = '/diagnostics';
      else if (text.includes('simulation')) a.href = '/simulation';
      else if (text.includes('launch') || text.includes('enter') || text.includes('get started')) a.href = '/dashboard';
    });

  }, [isAbnormal, setIsAbnormal, theme, setTheme]);

  return (
    <div ref={containerRef} className="w-full h-full">
      

<aside className="h-screen w-[15%] fixed left-0 top-0 bg-surface-container-lowest/30 backdrop-blur-xl border-r border-outline-variant/10 flex flex-col py-gutter px-4 z-50">
<div className="mb-10">
<h1 className="font-headline-lg text-headline-lg font-bold text-primary-container tracking-tighter">CORE<div className="">INSIGHT</div></h1>
<p className="font-label-caps text-label-caps text-on-surface-variant mt-1">V.4.0 ONLINE</p>
</div>
<nav className="flex-grow space-y-1">
<a className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group" href="#">
<span className="material-symbols-outlined mr-3 text-[20px]" data-icon="dashboard">dashboard</span>
<span className="font-label-caps text-label-caps">Overview</span>
</a>
<a className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group" href="#">
<span className="material-symbols-outlined mr-3 text-[20px]" data-icon="analytics">analytics</span>
<span className="font-label-caps text-label-caps">Live Telemetry</span>
</a>
<a className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group" href="#">
<span className="material-symbols-outlined mr-3 text-[20px]" data-icon="query_stats">query_stats</span>
<span className="font-label-caps text-label-caps">Diagnostics</span>
</a>
<a className="flex items-center px-3 py-3 text-primary-container bg-primary-container/10 border-l-2 border-primary-container font-bold active:scale-95 duration-100 group" href="#">
<span className="material-symbols-outlined mr-3 text-[20px]" data-icon="science" >science</span>
<span className="font-label-caps text-label-caps">Simulation Lab</span>
</a>
<a className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group" href="#">
<span className="material-symbols-outlined mr-3 text-[20px]" data-icon="build">build</span>
<span className="font-label-caps text-label-caps">Maintenance Hub</span>
</a>
</nav>
<div className="mt-auto pt-6 border-t border-outline-variant/10">
<button className="w-full py-3 bg-primary-container text-on-primary-container font-label-caps text-label-caps font-bold hover:brightness-110 transition-all active:scale-95 mb-6">
                GENERATE REPORT
            </button>
<div className="space-y-1">
<a className="flex items-center px-3 py-2 text-on-surface-variant font-medium hover:text-primary transition-all text-xs" href="#">
<span className="material-symbols-outlined mr-2 text-[18px]" data-icon="terminal">terminal</span>
<span className="font-label-caps text-label-caps">System Logs</span>
</a>
<a className="flex items-center px-3 py-2 text-on-surface-variant font-medium hover:text-primary transition-all text-xs" href="#">
<span className="material-symbols-outlined mr-2 text-[18px]" data-icon="settings">settings</span>
<span className="font-label-caps text-label-caps">Settings</span>
</a>
</div>
<div className="mt-6 flex items-center gap-3 px-3">
<div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/20 overflow-hidden">
<img alt="System Operator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB4_qK8TJkgY-LEMRr5m41Ab1q4UdiOaX-RAYJb5EfwIXfdYgebMfmJwo8AYSK77gmCFOUlH3LjPEpOXCXhFcV5dX5BxWNzvHwRC6dKBDsP4yLo8Cwm2QGURpk4-zA9FPWWL4aq_0fpTwpZ5LbYODssBs1JnYLvrpHfuTammv4W43n6j_2raFXUGsRTnaP9F1gSG2AXDuvrnkgX64HRuJlhDQ-qSO983ll65qOdU24tuCzmWEBcC3xNVPZxVL2IKJjzEI2dvpbrQw" className="" />
</div>
<div className="flex flex-col">
<span className="text-xs font-bold text-on-surface">Operator 01</span>
<span className="text-[10px] text-on-surface-variant">LEVEL 4 CLEARANCE</span>
</div>
</div>
</div>
</aside>

<header className="fixed top-0 left-[15%] right-0 h-16 bg-surface/10 backdrop-blur-md border-b border-outline-variant/5 flex items-center justify-between px-margin-desktop z-40">
<div className="flex items-center gap-8">
<h2 className="font-headline-md text-headline-md font-bold text-primary-container">INSIGHT MONITOR</h2>
<div className="flex gap-6 mx-auto">
<a className="font-label-caps text-label-caps text-primary-container border-b-2 border-primary-container pb-1 transition-all duration-200 ease-in-out" href="#">Real-time</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out" href="#">History</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out" href="#">Nodes</a>
</div>
</div>
<div className="flex items-center gap-6">
<button className="bg-error-container/20 text-error border border-error/30 px-4 py-2 font-label-caps text-label-caps hover:bg-error-container/40 transition-colors">
                EMERGENCY SHUTDOWN
            </button>
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-primary" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary" data-icon="account_circle">account_circle</span>
</div>
</div>
</header>

<main className="ml-[15%] mt-16 h-[calc(100vh-64px)] bg-surface overflow-y-auto">
<div className="p-margin-desktop space-y-gutter">
<div className="grid grid-cols-12 gap-gutter">

<section className="col-span-12 lg:col-span-4 glass-panel p-6 flex flex-col space-y-6">
<div>
<h2 className="font-label-caps text-label-caps text-primary border-l-2 border-primary pl-3 mb-2">PARAMETER CONFIGURATION</h2>
<p className="text-on-surface-variant font-body-sm">Adjust system inputs to simulate hardware response profiles.</p>
</div>

<div className="space-y-3">
<label className="font-label-caps text-[10px] text-on-surface-variant">SCENARIO PRESETS</label>
<div className="flex flex-wrap gap-2">
<button className="bg-primary-container/20 text-primary border border-primary/40 px-3 py-1.5 rounded font-label-caps text-[11px] hover:bg-primary/30 transition-all">MAX STRESS TEST</button>
<button className="bg-white/5 text-on-surface-variant border border-white/10 px-3 py-1.5 rounded font-label-caps text-[11px] hover:bg-white/10">GRADUAL WEAR</button>
<button className="bg-white/5 text-on-surface-variant border border-white/10 px-3 py-1.5 rounded font-label-caps text-[11px] hover:bg-white/10">OPTIMAL EFFICIENCY</button>
</div>
</div>

<div className="space-y-5 flex-1">
<div className="space-y-2">
<div className="flex justify-between font-label-caps text-[10px]">
<span className="text-on-surface">VIBRATION RMS</span>
<span className="text-primary">8.4 / <span className="opacity-60">12.0 mm/s</span></span>
</div>
<input className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-primary-container" max="20" min="0" type="range" value="8" />
</div>
<div className="space-y-2">
<div className="flex justify-between font-label-caps text-[10px]">
<span className="text-on-surface">BEARING TEMPERATURE</span>
<span className="text-primary">68.2 / <span className="opacity-60">95.0 °C</span></span>
</div>
<input className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-primary-container" max="150" min="0" type="range" value="68" />
</div>
<div className="space-y-2">
<div className="flex justify-between font-label-caps text-[10px]">
<span className="text-on-surface">INLET PRESSURE</span>
<span className="text-primary">14.2 / <span className="opacity-60">18.0 BAR</span></span>
</div>
<input className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-primary-container" max="30" min="0" type="range" value="14" />
</div>
<div className="space-y-2">
<div className="flex justify-between font-label-caps text-[10px]">
<span className="text-on-surface">FLOW RATE</span>
<span className="text-primary">850.0 / <span className="opacity-60">1200.0 L/M</span></span>
</div>
<input className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-primary-container" max="2000" min="0" type="range" value="850" />
</div>
</div>
<button className="w-full bg-primary-container text-on-primary py-4 font-label-caps text-label-caps tracking-[0.2em] shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:brightness-110 active:scale-[0.98] transition-all cyan-inner-glow relative overflow-hidden group">
                        RUN SIMULATION
                        <span className="absolute inset-0 bg-white/20 animate-pulse opacity-0 group-hover:opacity-100"></span>
</button>
</section>

<div className="col-span-12 lg:col-span-8 space-y-gutter">

<div className="glass-panel p-6 min-h-[400px] flex flex-col">
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="font-label-caps text-label-caps text-primary border-l-2 border-primary pl-3">SIMULATED PROJECTION</h2>
<p className="text-on-surface-variant text-[12px] mt-1">Predicted Operational Lifecycle (T-Minus Failure)</p>
</div>
<div className="text-right">
<span className="font-data-lg text-headline-lg text-primary">14,204 HRS</span>
<p className="font-label-caps text-[10px] text-on-surface-variant">ESTIMATED REMAINING UPTIME</p>
</div>
</div>
<div className="flex-1 relative flex items-end gap-1"><svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 300">

<defs>
<pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 240, 255, 0.05)" strokeWidth="1" />
</pattern>
<linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#00f0ff" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#00f0ff" stop-opacity="0"></stop>
</linearGradient>
<filter id="glow">
<feGaussianBlur result="coloredBlur" stdDeviation="3"></feGaussianBlur>
<feMerge>
<feMergeNode in="coloredBlur"></feMergeNode>
<feMergeNode in="SourceGraphic"></feMergeNode>
</feMerge>
</filter>
</defs>
<rect fill="url(#grid)" height="100%" width="100%" />

<path d="M0,220 L100,200 L200,160 L300,180 L400,100 L500,60 L600,110 L700,150 L800,280 L800,300 L0,300 Z" fill="url(#chartGradient)" />

<path d="M0,220 L100,200 L200,160 L300,180 L400,100 L500,60 L600,110 L700,150 L800,280" fill="none" filter="url(#glow)" stroke="#00f0ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />

<circle className="animate-pulse" cx="100" cy="200" fill="#00f0ff" r="3" />
<circle cx="200" cy="160" fill="#00f0ff" r="3" />
<circle cx="300" cy="180" fill="#00f0ff" r="3" />
<circle cx="400" cy="100" fill="#00f0ff" r="3" />
<circle cx="500" cy="60" fill="#00f0ff" r="3" />
<circle cx="600" cy="110" fill="#00f0ff" r="3" />
<circle cx="800" cy="280" fill="#ffb4ab" r="3" />
</svg></div>
<div className="mt-4 flex justify-between border-t border-white/5 pt-4">
<div className="flex gap-6">
<div>
<p className="font-label-caps text-[9px] text-on-surface-variant">MODEL CONFIDENCE</p>
<p className="font-data-sm text-primary">98.2%</p>
</div>
<div>
<p className="font-label-caps text-[9px] text-on-surface-variant">LATENCY</p>
<p className="font-data-sm text-primary">12ms</p>
</div>
</div>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_5px_#00f0ff]"></span>
<span className="w-2 h-2 rounded-full bg-white/20"></span>
<span className="w-2 h-2 rounded-full bg-white/20"></span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="glass-panel p-6">
<h3 className="font-label-caps text-label-caps text-on-surface mb-4">RISK MATRIX: STABILITY HEATMAP</h3>
<div className="grid grid-cols-5 gap-1">

<div className="risk-tile bg-surface-container-highest/40 border border-white/5"></div>
<div className="risk-tile bg-surface-container-highest/40 border border-white/5"></div>
<div className="risk-tile bg-primary/20 border border-primary/30"></div>
<div className="risk-tile bg-primary/40 border border-primary/50"></div>
<div className="risk-tile bg-primary/60 border border-primary/70"></div>
<div className="risk-tile bg-surface-container-highest/40 border border-white/5"></div>
<div className="risk-tile bg-primary/20 border border-primary/30"></div>
<div className="risk-tile bg-primary/40 border border-primary/50"></div>
<div className="risk-tile bg-primary/60 border border-primary/70"></div>
<div className="risk-tile bg-secondary-container/40 border border-secondary/50"></div>
<div className="risk-tile bg-primary/20 border border-primary/30"></div>
<div className="risk-tile bg-primary/40 border border-primary/50"></div>
<div className="risk-tile bg-primary/60 border border-primary/70"></div>
<div className="risk-tile bg-secondary-container/60 border border-secondary/70"></div>
<div className="risk-tile bg-error/40 border border-error/50"></div>
<div className="risk-tile bg-primary/40 border border-primary/50"></div>
<div className="risk-tile bg-primary/60 border border-primary/70"></div>
<div className="risk-tile bg-secondary-container/60 border border-secondary/70"></div>
<div className="risk-tile bg-error/60 border border-error/70 animate-pulse"></div>
<div className="risk-tile bg-error border border-white/20 animate-pulse"></div>
</div>
<div className="mt-4 flex justify-between font-label-caps text-[9px] text-on-surface-variant">
<span className="">MIN STRESS</span>
<span className="">CRITICAL THRESHOLD</span>
</div>
</div>
<div className="glass-panel p-6 flex flex-col justify-center text-center space-y-4">
<div className="inline-flex mx-auto p-4 rounded-full bg-error/10 border border-error/20">
<span className="material-symbols-outlined text-error text-[32px]">warning</span>
</div>
<div>
<p className="font-label-caps text-label-caps text-error">ANOMALY DETECTED IN SIMULATION</p>
<p className="text-on-surface-variant font-body-sm mt-1 px-4">Configuration 4-C leads to resonant oscillation in bearing housing. Failure likely within 48 hours of deployment.</p>
</div>
<button className="text-primary font-label-caps text-[11px] hover:underline">VIEW FAILURE REPORT</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="glass-panel p-4 flex items-center gap-4">
<div className="h-10 w-10 bg-primary/10 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-primary">memory</span>
</div>
<div>
<p className="font-label-caps text-[10px] text-on-surface-variant">SIM ENGINE LOAD</p>
<p className="font-data-sm text-on-surface">CORE-7: 42%</p>
</div>
</div>
<div className="glass-panel p-4 flex items-center gap-4">
<div className="h-10 w-10 bg-primary/10 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-primary">cloud_done</span>
</div>
<div>
<p className="font-label-caps text-[10px] text-on-surface-variant">CLOUD SYNC</p>
<p className="font-data-sm text-on-surface">LAST: 2M AGO</p>
</div>
</div>
<div className="glass-panel p-4 flex items-center gap-4">
<div className="h-10 w-10 bg-primary/10 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-primary">history</span>
</div>
<div>
<p className="font-label-caps text-[10px] text-on-surface-variant">PREVIOUS ITERATION</p>
<p className="font-data-sm text-on-surface">V.4.2.1-STABLE</p>
</div>
</div>
</div>
</div>
</main>

<div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
<div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]"></div>
</div>





    </div>
  );
}
