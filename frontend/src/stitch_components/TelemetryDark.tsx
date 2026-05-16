"use client";
import React, { useEffect, useRef } from "react";
import { useAppContext } from "@/components/AppContext";

export default function TelemetryDark() {
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
      

<aside className="h-screen w-[15%] fixed left-0 top-0 bg-surface-container-lowest/30 backdrop-blur-xl border-r border-outline-variant/10 flex flex-col h-full py-gutter px-4 z-50">
<div className="mb-10">
<h1 className="font-headline-lg text-headline-lg font-bold text-primary-container tracking-tighter">CORE<div className="">INSIGHT</div></h1>
<p className="font-label-caps text-label-caps text-on-surface-variant mt-1">V.4.0 ONLINE</p>
</div>
<nav className="flex-grow space-y-1">
<a className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group" href="#">
<span className="material-symbols-outlined mr-3 text-[20px]" data-icon="dashboard">dashboard</span>
<span className="font-label-caps text-label-caps">Overview</span>
</a>
<a className="flex items-center px-3 py-3 text-primary-container bg-primary-container/10 border-l-2 border-primary-container font-bold active:scale-95 duration-100 group" href="#">
<span className="material-symbols-outlined mr-3 text-[20px]" data-icon="analytics" >analytics</span>
<span className="font-label-caps text-label-caps">Live Telemetry</span>
</a>
<a className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group" href="#">
<span className="material-symbols-outlined mr-3 text-[20px]" data-icon="query_stats">query_stats</span>
<span className="font-label-caps text-label-caps">Diagnostics</span>
</a>
<a className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group" href="#">
<span className="material-symbols-outlined mr-3 text-[20px]" data-icon="science">science</span>
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
<img alt="System Operator" data-alt="A close-up portrait of a professional system operator in a dimly lit, high-tech command center. Subtle blue ambient light from large monitors reflects off his face, highlighting a focused and serious expression. He is wearing a dark, technical polo shirt with a small corporate logo. The style is cinematic with a shallow depth of field, emphasizing industrial expertise and digital oversight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB4_qK8TJkgY-LEMRr5m41Ab1q4UdiOaX-RAYJb5EfwIXfdYgebMfmJwo8AYSK77gmCFOUlH3LjPEpOXCXhFcV5dX5BxWNzvHwRC6dKBDsP4yLo8Cwm2QGURpk4-zA9FPWWL4aq_0fpTwpZ5LbYODssBs1JnYLvrpHfuTammv4W43n6j_2raFXUGsRTnaP9F1gSG2AXDuvrnkgX64HRuJlhDQ-qSO983ll65qOdU24tuCzmWEBcC3xNVPZxVL2IKJjzEI2dvpbrQw" className="" />
</div>
<div className="flex flex-col">
<span className="text-xs font-bold text-on-surface">Operator 01</span>
<span className="text-[10px] text-on-surface-variant">LEVEL 4 CLEARANCE</span>
</div>
</div>
</div>
</aside>

<header className="fixed top-0 left-[15%] right-0 h-16 bg-surface/10 backdrop-blur-md border-b border-outline-variant/5 flex items-center justify-between px-gutter z-40">
<div className="flex items-center gap-8 flex-1">
<h2 className="font-headline-md text-headline-md font-bold text-primary-container">INSIGHT MONITOR</h2>
<div className="flex gap-6 flex-1 justify-center">
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

<main className="ml-[15%] mt-16 p-4 h-[calc(100vh-64px)] overflow-hidden flex flex-col gap-panel-gap">

<div className="glass-panel flex items-center justify-between px-6 py-3 rounded-t-lg">
<div className="flex items-center gap-4">
<div className="px-3 py-1 bg-primary-container/10 border border-primary-container/30">
<span className="font-label-caps text-[12px] text-primary-container tracking-widest">ASSET ID: ST-049</span>
</div>
<span className="text-on-surface-variant font-medium">|</span>
<span className="font-headline-md text-body-lg text-on-surface font-semibold">Motor Array Beta</span>
</div>
<div className="flex items-center gap-6">
<div className="flex bg-surface-container-low rounded p-0.5 border border-outline-variant/10">
<button className="px-3 py-1 font-label-caps text-[10px] text-on-surface-variant hover:text-primary">1 MIN</button>
<button className="px-3 py-1 font-label-caps text-[10px] text-on-surface-variant hover:text-primary">5 MIN</button>
<button className="px-3 py-1 font-label-caps text-[10px] text-on-surface-variant hover:text-primary">1 HOUR</button>
<button className="px-3 py-1 font-label-caps text-[10px] text-primary-container bg-primary-container/20 rounded-sm">LIVE</button>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
<span className="font-label-caps text-[11px] text-emerald-400">LIVE STREAM: ON</span>
</div>
<button className="flex items-center gap-2 px-4 py-2 border border-outline-variant/20 hover:bg-surface-variant/20 transition-all font-label-caps text-[11px]">
<span className="material-symbols-outlined text-[16px]" data-icon="download">download</span>
                    EXPORT CSV
                </button>
</div>
</div>

<div className="flex-grow flex flex-col gap-panel-gap h-[60%]">

<div className="glass-panel flex-1 p-4 relative group">
<div className="flex justify-between items-start mb-2">
<span className="font-label-caps text-label-caps text-on-surface-variant">VIBRATION RMS VS NOMINAL BAND</span>
<span className="font-data-sm text-data-sm text-error pulse-red">CRITICAL SPKE DETECTED</span>
</div>
<div className="w-full h-[calc(100%-20px)] overflow-hidden">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 120">

<rect fill="rgba(255, 255, 255, 0.03)" height="40" width="1000" x="0" y="40" />

<line stroke="rgba(255,255,255,0.1)" stroke-dasharray="4" x1="0" x2="1000" y1="60" y2="60" />

<path className="drop-shadow-[0_0_4px_rgba(255,180,171,0.5)]" d="M0,70 L100,65 L200,68 L300,60 L400,65 L500,10 L600,105 L700,40 L800,60 L900,55 L1000,62" fill="none" stroke="#ffb4ab" strokeWidth="2" />
</svg>
</div>
</div>

<div className="glass-panel flex-1 p-4 relative group">
<div className="flex justify-between items-start mb-2">
<span className="font-label-caps text-label-caps text-on-surface-variant">BEARING TEMPERATURE</span>
<span className="font-data-sm text-data-sm text-secondary">+2.4°C / HR TREND</span>
</div>
<div className="w-full h-[calc(100%-20px)] overflow-hidden">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 120">

<path className="drop-shadow-[0_0_4px_rgba(255,186,32,0.5)]" d="M0,90 L150,85 L300,80 L450,70 L600,65 L750,50 L900,45 L1000,40" fill="none" stroke="#ffba20" strokeWidth="2" />
</svg>
</div>
</div>

<div className="glass-panel flex-1 p-4 relative group">
<div className="flex justify-between items-start mb-2">
<span className="font-label-caps text-label-caps text-on-surface-variant">MOTOR RPM</span>
<span className="font-data-sm text-data-sm text-primary-container">STABLE NOMINAL</span>
</div>
<div className="w-full h-[calc(100%-20px)] overflow-hidden">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 120">

<path className="drop-shadow-[0_0_4px_rgba(0,240,255,0.5)]" d="M0,60 L100,58 L200,62 L300,60 L400,59 L500,61 L600,60 L700,58 L800,62 L900,60 L1000,60" fill="none" stroke="#00f0ff" strokeWidth="2" />
</svg>
</div>
</div>
</div>

<div className="h-[40%] grid grid-cols-4 gap-panel-gap">

<div className="glass-panel p-4 flex flex-col justify-between border-l-2 border-error/50">
<div className="flex justify-between items-start">
<span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">Vibration RMS</span>
<span className="px-2 py-0.5 bg-error-container/20 text-error font-label-caps text-[9px] rounded-full pulse-red">CRITICAL</span>
</div>
<div className="flex items-baseline gap-2 mt-4">
<span className="font-data-lg text-[28px] text-error font-bold leading-none">14.2</span>
<span className="font-label-caps text-on-surface-variant text-[12px]">MM/S</span>
</div>
<div className="mt-auto h-8 w-full">
<svg className="w-full h-full" viewBox="0 0 100 20">
<path d="M0,10 L10,12 L20,8 L30,15 L40,5 L50,18 L60,2 L70,14 L80,6 L90,12 L100,10" fill="none" stroke="#ffb4ab" strokeWidth="1" />
</svg>
</div>
</div>

<div className="glass-panel p-4 flex flex-col justify-between border-l-2 border-secondary/50">
<div className="flex justify-between items-start">
<span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">Bearing Temp</span>
<span className="px-2 py-0.5 bg-secondary-container/20 text-secondary font-label-caps text-[9px] rounded-full">WARNING</span>
</div>
<div className="flex items-baseline gap-2 mt-4">
<span className="font-data-lg text-[28px] text-secondary font-bold leading-none">85.5</span>
<span className="font-label-caps text-on-surface-variant text-[12px]">°C</span>
</div>
<div className="mt-auto h-8 w-full">
<svg className="w-full h-full" viewBox="0 0 100 20">
<path d="M0,18 L20,16 L40,14 L60,10 L80,8 L100,5" fill="none" stroke="#ffba20" strokeWidth="1" />
</svg>
</div>
</div>

<div className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50">
<div className="flex justify-between items-start">
<span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">Motor Current</span>
<span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-label-caps text-[9px] rounded-full">NORMAL</span>
</div>
<div className="flex items-baseline gap-2 mt-4">
<span className="font-data-lg text-[28px] text-on-surface font-bold leading-none">42.1</span>
<span className="font-label-caps text-on-surface-variant text-[12px]">A</span>
</div>
<div className="mt-auto h-8 w-full">
<svg className="w-full h-full opacity-30" viewBox="0 0 100 20">
<line stroke="#dce4e5" strokeWidth="1" x1="0" x2="100" y1="10" y2="10" />
</svg>
</div>
</div>

<div className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50">
<div className="flex justify-between items-start">
<span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">Motor RPM</span>
<span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-label-caps text-[9px] rounded-full">NORMAL</span>
</div>
<div className="flex items-baseline gap-2 mt-4">
<span className="font-data-lg text-[28px] text-on-surface font-bold leading-none">1745.0</span>
<span className="font-label-caps text-on-surface-variant text-[12px]">RPM</span>
</div>
<div className="mt-auto h-8 w-full">
<svg className="w-full h-full opacity-30" viewBox="0 0 100 20">
<line stroke="#dce4e5" strokeWidth="1" x1="0" x2="100" y1="10" y2="10" />
</svg>
</div>
</div>

<div className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50">
<div className="flex justify-between items-start">
<span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">System Pressure</span>
<span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-label-caps text-[9px] rounded-full">NORMAL</span>
</div>
<div className="flex items-baseline gap-2 mt-4">
<span className="font-data-lg text-[28px] text-on-surface font-bold leading-none">115.2</span>
<span className="font-label-caps text-on-surface-variant text-[12px]">PSI</span>
</div>
<div className="mt-auto h-8 w-full">
<svg className="w-full h-full opacity-30" viewBox="0 0 100 20">
<line stroke="#dce4e5" strokeWidth="1" x1="0" x2="100" y1="10" y2="10" />
</svg>
</div>
</div>

<div className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50">
<div className="flex justify-between items-start">
<span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">Inlet Pressure</span>
<span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-label-caps text-[9px] rounded-full">NORMAL</span>
</div>
<div className="flex items-baseline gap-2 mt-4">
<span className="font-data-lg text-[28px] text-on-surface font-bold leading-none">12.0</span>
<span className="font-label-caps text-on-surface-variant text-[12px]">BAR</span>
</div>
<div className="mt-auto h-8 w-full">
<svg className="w-full h-full opacity-30" viewBox="0 0 100 20">
<line stroke="#dce4e5" strokeWidth="1" x1="0" x2="100" y1="10" y2="10" />
</svg>
</div>
</div>

<div className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50">
<div className="flex justify-between items-start">
<span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">Flow Rate</span>
<span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-label-caps text-[9px] rounded-full">NORMAL</span>
</div>
<div className="flex items-baseline gap-2 mt-4">
<span className="font-data-lg text-[28px] text-on-surface font-bold leading-none text-primary-fixed">110.5</span>
<span className="font-label-caps text-on-surface-variant text-[12px]">L/MIN</span>
</div>
<div className="mt-auto h-8 w-full">
<svg className="w-full h-full" viewBox="0 0 100 20">
<path d="M0,2 L25,5 L50,8 L75,15 L100,18" fill="none" stroke="#7df4ff" strokeWidth="1" />
</svg>
</div>
</div>

<div className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50 rounded-br-lg">
<div className="flex justify-between items-start">
<span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">Valve Position</span>
<span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-label-caps text-[9px] rounded-full">NORMAL</span>
</div>
<div className="flex items-baseline gap-2 mt-4">
<span className="font-data-lg text-[28px] text-on-surface font-bold leading-none">45.0</span>
<span className="font-label-caps text-on-surface-variant text-[12px]">%</span>
</div>
<div className="mt-auto h-8 w-full opacity-30">
<svg className="w-full h-full" viewBox="0 0 100 20">
<line stroke="#dce4e5" strokeWidth="1" x1="0" x2="100" y1="10" y2="10" />
</svg>
</div>
</div>
</div>
</main>





    </div>
  );
}
