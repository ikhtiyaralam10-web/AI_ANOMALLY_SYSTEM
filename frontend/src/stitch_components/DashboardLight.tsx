"use client";
import React, { useEffect, useRef } from "react";
import { useAppContext } from "@/components/AppContext";

export default function DashboardLight() {
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
      

<nav className="h-screen w-[15%] fixed left-0 top-0 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-gutter px-4 z-50">
<div className="mb-8 mt-4">
<div className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter">CORE<div className="">INSIGHT</div></div>
<div className="font-data-sm text-data-sm text-on-surface-variant mt-1 opacity-70">V.4.0 ONLINE</div>
</div>
<div className="flex-grow space-y-2">
<a className="flex items-center space-x-3 p-3 rounded text-on-primary bg-primary border-l-2 border-primary-fixed-dim font-bold font-label-caps text-label-caps scale-95 duration-100" href="#">
<span className="material-symbols-outlined" >dashboard</span>
<span className="">Overview</span>
</a>
<a className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="">Live Telemetry</span>
</a>
<a className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all" href="#">
<span className="material-symbols-outlined">query_stats</span>
<span className="">Diagnostics</span>
</a>
<a className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all" href="#">
<span className="material-symbols-outlined">science</span>
<span className="">Simulation Lab</span>
</a>
<a className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all" href="#">
<span className="material-symbols-outlined">build</span>
<span className="">Maintenance Hub</span>
</a>
</div>
<div className="mt-auto pt-4 border-t border-outline-variant">
<button className="w-full mb-4 bg-primary text-on-primary font-label-caps text-label-caps py-3 rounded hover:bg-on-primary-fixed-variant transition-colors">
                GENERATE REPORT
            </button>
<div className="flex flex-col space-y-2">
<a className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all" href="#">
<span className="material-symbols-outlined">terminal</span>
<span className="">System Logs</span>
</a>
<a className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="">Settings</span>
</a>
</div>
<div className="mt-4 flex items-center space-x-2 text-data-sm font-data-sm text-on-surface-variant">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,105,112,0.5)]"></div>
<span className="">System Status: Online</span>
</div>
</div>
</nav>

<main className="ml-[15%] flex-grow flex h-screen pt-16 pb-gutter px-gutter gap-panel-gap">

<header className="fixed top-0 left-[15%] right-0 h-16 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex items-center justify-between px-gutter transition-all duration-200 ease-in-out">
  <div className="flex items-center flex-1">
    <div className="font-headline-md text-headline-md font-bold text-primary">INSIGHT MONITOR</div>
  </div>
  
  <nav className="hidden md:flex flex-1 justify-center space-x-6 font-label-caps text-label-caps">
    <a className="text-primary border-b-2 border-primary pb-1" href="#">Real-time</a>
    <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">History</a>
    <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Nodes</a>
  </nav>
  
  <div className="flex items-center justify-end flex-1 space-x-4">
    <button className="bg-error-container border border-error text-on-error-container font-label-caps text-label-caps px-4 py-2 rounded hover:bg-error hover:text-on-error transition-colors whitespace-nowrap">
      EMERGENCY SHUTDOWN
    </button>
    <button className="text-on-surface-variant hover:text-primary transition-colors">
      <span className="material-symbols-outlined">dark_mode</span>
    </button>
    <button className="text-on-surface-variant hover:text-primary transition-colors">
      <span className="material-symbols-outlined">notifications</span>
    </button>
    <button className="text-on-surface-variant hover:text-primary transition-colors">
      <span className="material-symbols-outlined">account_circle</span>
    </button>
  </div>
</header>

<div className="flex-[55%] flex flex-col gap-panel-gap">

<div className="flex gap-panel-gap h-[25%]">
<div className="glass-panel flex-1 rounded-xl p-6 flex flex-col items-center justify-center relative bg-surface-container overflow-hidden">
<div className="font-label-caps text-label-caps text-primary mb-4 tracking-widest uppercase">Anomaly Score</div>
<div className="relative w-32 h-32 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#dee3e4" strokeWidth="8" />
<circle className="drop-shadow-[0_0_5px_rgba(0,105,112,0.2)]" cx="50" cy="50" fill="none" r="45" stroke="#006970" stroke-dasharray="283" stroke-dashoffset="31" strokeWidth="8" />
</svg>
<div className="absolute font-headline-lg text-headline-lg font-bold text-primary glow-cyan">89%</div>
</div>
</div>
<div className="glass-panel flex-1 rounded-xl p-6 flex flex-col items-center justify-center relative shadow-[inset_0_0_10px_rgba(186,26,26,0.05)] overflow-hidden border-error/50">
<div className="font-label-caps text-label-caps text-error mb-4 tracking-widest uppercase">Failure Probability</div>
<div className="relative w-32 h-32 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#dee3e4" strokeWidth="8" />
<circle className="drop-shadow-[0_0_5px_rgba(186,26,26,0.2)] animate-pulse" cx="50" cy="50" fill="none" r="45" stroke="#ba1a1a" stroke-dasharray="283" stroke-dashoffset="50" strokeWidth="8" />
</svg>
<div className="absolute font-headline-lg text-headline-lg font-bold text-error glow-crimson animate-pulse">82%</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-panel-gap h-[22%]">
<div className="glass-panel rounded-xl p-4 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Vibration RMS</span>
<span className="px-2 py-1 bg-error text-on-error font-data-sm text-data-sm rounded">CRIT</span>
</div>
<div>
<div className="font-data-lg text-data-lg text-error glow-crimson">14.2 <span className="text-data-sm text-on-surface-variant">mm/s</span></div>
<div className="h-8 mt-2 w-full bg-surface-container rounded relative overflow-hidden">
<div className="absolute bottom-0 left-0 h-[60%] w-full border-t border-error bg-gradient-to-t from-error/10 to-transparent"></div>
<svg className="w-full h-full" preserveAspectRatio="none"><path d="M0,30 Q10,10 20,20 T40,25 T60,5 T80,15 T100,0 L100,32 L0,32 Z" fill="rgba(186,26,26,0.1)" stroke="#ba1a1a" strokeWidth="2" /></svg>
</div>
</div>
</div>
<div className="glass-panel rounded-xl p-4 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Bearing Temp</span>
<span className="px-2 py-1 bg-secondary text-on-secondary font-data-sm text-data-sm rounded">WARN</span>
</div>
<div>
<div className="font-data-lg text-data-lg text-secondary">88.5 <span className="text-data-sm text-on-surface-variant">°C</span></div>
<div className="h-8 mt-2 w-full bg-surface-container rounded relative overflow-hidden">
<svg className="w-full h-full" preserveAspectRatio="none"><path d="M0,20 Q15,15 30,25 T60,10 T90,20 T100,15 L100,32 L0,32 Z" fill="rgba(126,87,0,0.1)" stroke="#7e5700" strokeWidth="2" /></svg>
</div>
</div>
</div>
<div className="glass-panel rounded-xl p-4 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Motor Current</span>
<span className="px-2 py-1 bg-primary text-on-primary font-data-sm text-data-sm rounded">NOM</span>
</div>
<div>
<div className="font-data-lg text-data-lg text-primary">42.1 <span className="text-data-sm text-on-surface-variant">A</span></div>
<div className="h-8 mt-2 w-full bg-surface-container rounded relative overflow-hidden">
<svg className="w-full h-full" preserveAspectRatio="none"><path d="M0,25 Q20,25 40,25 T80,25 T100,25 L100,32 L0,32 Z" fill="rgba(0,105,112,0.1)" stroke="#006970" strokeWidth="2" /></svg>
</div>
</div>
</div>
</div><div className="grid grid-cols-3 gap-panel-gap h-[18%]">

<div className="glass-panel rounded-xl p-4 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">RPM</span>
<span className="px-2 py-1 bg-primary text-on-primary font-data-sm text-data-sm rounded">NOM</span>
</div>
<div>
<div className="font-data-lg text-data-lg text-primary">1750 <span className="text-data-sm text-on-surface-variant">rpm</span></div>
<div className="h-8 mt-2 w-full bg-surface-container rounded relative overflow-hidden">
<svg className="w-full h-full" preserveAspectRatio="none">
<path d="M0,25 Q15,20 30,25 T60,22 T90,25 T100,24 L100,32 L0,32 Z" fill="rgba(0,105,112,0.1)" stroke="#006970" strokeWidth="2" />
</svg>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">PRESSURE</span>
<span className="px-2 py-1 bg-secondary text-on-secondary font-data-sm text-data-sm rounded">WARN</span>
</div>
<div>
<div className="font-data-lg text-data-lg text-secondary">102.4 <span className="text-data-sm text-on-surface-variant">N/m³</span></div>
<div className="h-8 mt-2 w-full bg-surface-container rounded relative overflow-hidden">
<svg className="w-full h-full" preserveAspectRatio="none">
<path d="M0,28 Q20,15 40,22 T70,18 T100,25 L100,32 L0,32 Z" fill="rgba(126,87,0,0.1)" stroke="#7e5700" strokeWidth="2" />
</svg>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex flex-col">
<div className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-3">SYSTEM OVERRIDE / SIMULATION</div>
<div className="flex flex-col gap-2 flex-grow justify-center">
<button className="w-full py-2 border border-primary text-primary font-label-caps text-label-caps rounded hover:bg-primary hover:text-on-primary transition-all text-[10px]">
                NORMAL
            </button>
<button className="w-full py-2 bg-error border border-error text-on-error font-label-caps text-label-caps rounded shadow-[0_0_10px_rgba(186,26,26,0.2)] animate-pulse hover:bg-on-error-container transition-all text-[10px]">
                ABNORMAL
            </button>
</div>
</div>
</div>

<div className="glass-panel flex-grow rounded-xl p-6 flex flex-col">
<div className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Sensor Trends (24H)</div>
<div className="flex-grow relative bg-surface-container rounded border border-outline-variant overflow-hidden">

<div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-20">
<div className="border-b border-r border-outline-variant"></div><div className="border-b border-r border-outline-variant"></div><div className="border-b border-r border-outline-variant"></div><div className="border-b border-r border-outline-variant"></div><div className="border-b border-r border-outline-variant"></div><div className="border-b border-outline-variant"></div>
<div className="border-b border-r border-outline-variant"></div><div className="border-b border-r border-outline-variant"></div><div className="border-b border-r border-outline-variant"></div><div className="border-b border-r border-outline-variant"></div><div className="border-b border-r border-outline-variant"></div><div className="border-b border-outline-variant"></div>
<div className="border-b border-r border-outline-variant"></div><div className="border-b border-r border-outline-variant"></div><div className="border-b border-r border-outline-variant"></div><div className="border-b border-r border-outline-variant"></div><div className="border-b border-r border-outline-variant"></div><div className="border-b border-outline-variant"></div>
<div className="border-r border-outline-variant"></div><div className="border-r border-outline-variant"></div><div className="border-r border-outline-variant"></div><div className="border-r border-outline-variant"></div><div className="border-r border-outline-variant"></div><div></div>
</div>

<div className="absolute top-[40%] bottom-[20%] left-0 right-0 bg-primary/5 border-y border-primary/20"></div>

<div className="absolute top-0 bottom-[60%] left-[70%] right-[10%] bg-error/10 border-b border-error/30"></div>

<svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
<path className="drop-shadow-[0_0_3px_rgba(0,105,112,0.3)]" d="M0,70 Q10,75 20,65 T40,60 T60,70 T70,20 T80,10 T90,50 T100,55" fill="none" stroke="#006970" strokeWidth="3" />
<path className="drop-shadow-[0_0_5px_rgba(186,26,26,0.5)]" d="M70,20 T80,10" fill="none" stroke="#ba1a1a" strokeWidth="4" />
</svg>
</div>
</div>
</div>

<div className="flex-[30%] flex flex-col gap-panel-gap">

<div className="glass-panel flex-[40%] rounded-xl p-6 border-l-4 border-l-secondary">
<div className="font-label-caps text-label-caps text-secondary mb-4 flex items-center space-x-2">
<span className="material-symbols-outlined text-sm">psychology</span>
<span className="">Root Cause Analysis</span>
</div>
<div className="font-headline-md text-headline-md text-on-surface mb-2">Stage 3 Bearing Degradation</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">AI Hypothesizes structural fatigue in inner race due to prolonged elevated thermal states.</p>
<ul className="space-y-2 font-data-sm text-data-sm text-on-surface-variant">
<li className="flex items-start space-x-2">
<span className="text-error mt-0.5">•</span>
<span className="">High frequency vibration harmonic matched to bearing defect freq (BPFI).</span>
</li>
<li className="flex items-start space-x-2">
<span className="text-secondary mt-0.5">•</span>
<span className="">Temp gradient exceeds nominal +15°C over 48h.</span>
</li>
</ul>
</div>

<div className="glass-panel flex-[25%] rounded-xl p-6 bg-error-container/50 border border-error/50 flex flex-col justify-center">
<div className="font-label-caps text-label-caps text-error mb-2 uppercase">Required Action</div>
<div className="font-body-lg text-body-lg font-bold text-on-error-container mb-4">Schedule Immediate Bearing Replacement</div>
<div>
<div className="flex justify-between font-data-sm text-data-sm text-on-error-container mb-1">
<span className="">AI Confidence</span>
<span className="">94%</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded overflow-hidden">
<div className="h-full bg-error w-[94%] shadow-[0_0_5px_rgba(186,26,26,0.5)]"></div>
</div>
</div>
<button className="mt-4 w-full bg-error text-on-error font-label-caps text-label-caps py-2 rounded hover:bg-on-error-container transition-colors">
                    INITIATE WORK ORDER
                </button>
</div>

<div className="glass-panel flex-[35%] rounded-xl p-6">
<div className="font-label-caps text-label-caps text-primary mb-4 flex items-center space-x-2 uppercase">
<span className="material-symbols-outlined text-sm">tune</span>
<span className="">Simulate Parameters</span>
</div>
<div className="space-y-6 mt-4">
<div>
<div className="flex justify-between font-data-sm text-data-sm mb-2">
<span className="text-on-surface-variant">vibration_rms</span>
<span className="text-primary">14.2 mm/s</span>
</div>
<input className="w-full accent-primary h-1 bg-surface-container rounded appearance-none focus:outline-none" max="20" min="0" type="range" value="14.2" />
</div>
<div>
<div className="flex justify-between font-data-sm text-data-sm mb-2">
<span className="text-on-surface-variant">bearing_temp</span>
<span className="text-secondary">88.5 °C</span>
</div>
<input className="w-full accent-secondary h-1 bg-surface-container rounded appearance-none focus:outline-none" max="150" min="0" type="range" value="88.5" />
</div>
</div>
</div>
</div>
</main>









    </div>
  );
}
