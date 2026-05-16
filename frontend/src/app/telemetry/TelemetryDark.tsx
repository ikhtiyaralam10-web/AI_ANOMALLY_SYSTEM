"use client";
import React from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";

export default function TelemetryDark() {
  const { theme, setTheme } = useAppContext();

  return (
    <div className="dashboard-dark-theme min-h-screen font-body text-on-surface bg-surface-container-lowest">
      {/* Side Navigation Shell */}
      <aside className="h-screen w-[15%] fixed left-0 top-0 bg-surface-container-lowest/30 backdrop-blur-xl border-r border-outline-variant/10 flex flex-col py-gutter px-4 z-50">
        <div className="mb-10 mt-4">
          <Link href="/" className="font-headline text-3xl font-bold text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] tracking-tighter block">
            CORE<div>INSIGHT</div>
          </Link>
          <p className="font-mono text-[11px] font-bold text-on-surface-variant mt-1">V.4.0 ONLINE</p>
        </div>
        <nav className="flex-grow space-y-1">
          <Link className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group rounded" href="/dashboard">
            <span className="material-symbols-outlined mr-3 text-[20px]">dashboard</span>
            <span className="font-mono text-[11px] font-bold">Overview</span>
          </Link>
          <Link className="flex items-center px-3 py-3 text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] bg-[#64ffda]/10 border-l-2 border-[#64ffda] font-bold active:scale-95 duration-100 group rounded" href="/telemetry">
            <span className="material-symbols-outlined mr-3 text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>analytics</span>
            <span className="font-mono text-[11px] font-bold">Live Telemetry</span>
          </Link>
          <Link className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group rounded" href="/diagnostics">
            <span className="material-symbols-outlined mr-3 text-[20px]">query_stats</span>
            <span className="font-mono text-[11px] font-bold">Diagnostics</span>
          </Link>
          <Link className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group rounded" href="/simulation-lab">
            <span className="material-symbols-outlined mr-3 text-[20px]">science</span>
            <span className="font-mono text-[11px] font-bold">Simulation Lab</span>
          </Link>
          <a className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group rounded" href="#">
            <span className="material-symbols-outlined mr-3 text-[20px]">build</span>
            <span className="font-mono text-[11px] font-bold">Maintenance Hub</span>
          </a>
        </nav>
        <div className="mt-auto pt-6 border-t border-outline-variant/10">
          <button className="w-full py-3 bg-[#64ffda] text-on-primary-fixed font-mono text-[11px] font-bold hover:bg-primary-fixed transition-all active:scale-95 mb-6 rounded">
            GENERATE REPORT
          </button>
          <div className="space-y-1">
            <a className="flex items-center px-3 py-2 text-on-surface-variant font-medium hover:text-primary transition-all text-xs rounded" href="#">
              <span className="material-symbols-outlined mr-2 text-[18px]">terminal</span>
              <span className="font-mono text-[11px] font-bold">System Logs</span>
            </a>
            <a className="flex items-center px-3 py-2 text-on-surface-variant font-medium hover:text-primary transition-all text-xs rounded" href="#">
              <span className="material-symbols-outlined mr-2 text-[18px]">settings</span>
              <span className="font-mono text-[11px] font-bold">Settings</span>
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3 px-3">
            <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/20 overflow-hidden flex-shrink-0">
              <img alt="System Operator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB4_qK8TJkgY-LEMRr5m41Ab1q4UdiOaX-RAYJb5EfwIXfdYgebMfmJwo8AYSK77gmCFOUlH3LjPEpOXCXhFcV5dX5BxWNzvHwRC6dKBDsP4yLo8Cwm2QGURpk4-zA9FPWWL4aq_0fpTwpZ5LbYODssBs1JnYLvrpHfuTammv4W43n6j_2raFXUGsRTnaP9F1gSG2AXDuvrnkgX64HRuJlhDQ-qSO983ll65qOdU24tuCzmWEBcC3xNVPZxVL2IKJjzEI2dvpbrQw" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-on-surface">Operator 01</span>
              <span className="text-[10px] text-on-surface-variant">LEVEL 4 CLEARANCE</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Top AppBar Shell */}
      <header className="fixed top-0 left-[15%] right-0 h-16 bg-surface/10 backdrop-blur-md border-b border-outline-variant/5 flex items-center justify-between px-6 z-40">
        <div className="flex items-center gap-8 flex-1">
          <h2 className="font-headline text-2xl font-bold text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">INSIGHT MONITOR</h2>
          <div className="flex gap-6 flex-1 justify-center">
            <a className="font-mono text-[11px] font-bold uppercase text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] border-b-2 border-[#64ffda] pb-1 transition-all duration-200 ease-in-out" href="#">Real-time</a>
            <a className="font-mono text-[11px] font-bold uppercase text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out" href="#">History</a>
            <a className="font-mono text-[11px] font-bold uppercase text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out" href="#">Nodes</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-error-container/20 text-error border border-error/30 px-4 py-2 font-mono text-[11px] font-bold rounded hover:bg-error-container/40 transition-colors">
            EMERGENCY SHUTDOWN
          </button>
          <div className="flex items-center gap-4 text-on-surface-variant">
            <Link href="/">
              <span className="material-symbols-outlined cursor-pointer hover:text-primary flex items-center pt-1">home</span>
            </Link>
            <span 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="material-symbols-outlined cursor-pointer hover:text-primary flex items-center"
            >
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary">notifications</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary">account_circle</span>
          </div>
        </div>
      </header>

      {/* Main Telemetry Stage */}
      <main className="ml-[15%] mt-16 p-4 h-[calc(100vh-64px)] overflow-hidden flex flex-col gap-1">
        {/* Top Action Bar */}
        <div className="glass-panel flex items-center justify-between px-6 py-3 rounded-t-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-[#64ffda]/10 border border-[#64ffda]/30 rounded">
              <span className="font-mono text-[12px] text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] tracking-widest font-bold">ASSET ID: ST-049</span>
            </div>
            <span className="text-on-surface-variant font-medium">|</span>
            <span className="font-headline text-lg text-on-surface font-semibold">Motor Array Beta</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex bg-surface-container-low rounded p-0.5 border border-outline-variant/10">
              <button className="px-3 py-1 font-mono text-[10px] text-on-surface-variant hover:text-primary font-bold">1 MIN</button>
              <button className="px-3 py-1 font-mono text-[10px] text-on-surface-variant hover:text-primary font-bold">5 MIN</button>
              <button className="px-3 py-1 font-mono text-[10px] text-on-surface-variant hover:text-primary font-bold">1 HOUR</button>
              <button className="px-3 py-1 font-mono text-[10px] text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] bg-[#64ffda]/20 rounded-sm font-bold">LIVE</button>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
              <span className="font-mono text-[11px] text-emerald-400 font-bold">LIVE STREAM: ON</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant/20 hover:bg-surface-variant/20 transition-all font-mono text-[11px] rounded font-bold">
              <span className="material-symbols-outlined text-[16px]">download</span>
              EXPORT CSV
            </button>
          </div>
        </div>

        {/* Upper Section: Charts (60% Height) */}
        <div className="flex-[6] min-h-0 flex flex-col gap-1">
          {/* Chart 1 */}
          <div className="glass-panel flex-1 min-h-0 p-4 flex flex-col relative group rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[11px] font-bold text-on-surface-variant">VIBRATION RMS VS NOMINAL BAND</span>
              <span className="font-mono text-[12px] text-error animate-pulse font-bold">CRITICAL SPIKE DETECTED</span>
            </div>
            <div className="w-full flex-1 min-h-0 overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 120">
                {/* Safe Zone */}
                <rect fill="rgba(255, 255, 255, 0.03)" height="40" width="1000" x="0" y="40"></rect>
                {/* Nominal Line */}
                <line stroke="rgba(255,255,255,0.1)" strokeDasharray="4" x1="0" x2="1000" y1="60" y2="60"></line>
                {/* Red Line Spiking */}
                <path className="drop-shadow-[0_0_4px_rgba(255,180,171,0.5)]" d="M0,70 L100,65 L200,68 L300,60 L400,65 L500,10 L600,105 L700,40 L800,60 L900,55 L1000,62" fill="none" stroke="#ffb4ab" strokeWidth="2"></path>
              </svg>
            </div>
          </div>
          {/* Chart 2 */}
          <div className="glass-panel flex-1 min-h-0 p-4 flex flex-col relative group rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[11px] font-bold text-on-surface-variant">BEARING TEMPERATURE</span>
              <span className="font-mono text-[12px] text-secondary font-bold">+2.4°C / HR TREND</span>
            </div>
            <div className="w-full flex-1 min-h-0 overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 120">
                {/* Yellow Line Trending Up */}
                <path className="drop-shadow-[0_0_4px_rgba(255,186,32,0.5)]" d="M0,90 L150,85 L300,80 L450,70 L600,65 L750,50 L900,45 L1000,40" fill="none" stroke="#ffba20" strokeWidth="2"></path>
              </svg>
            </div>
          </div>
          {/* Chart 3 */}
          <div className="glass-panel flex-1 min-h-0 p-4 flex flex-col relative group rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[11px] font-bold text-on-surface-variant">MOTOR RPM</span>
              <span className="font-mono text-[12px] text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] font-bold">STABLE NOMINAL</span>
            </div>
            <div className="w-full flex-1 min-h-0 overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 120">
                {/* Cyan Line Stable */}
                <path className="drop-shadow-[0_0_4px_rgba(0,240,255,0.5)]" d="M0,60 L100,58 L200,62 L300,60 L400,59 L500,61 L600,60 L700,58 L800,62 L900,60 L1000,60" fill="none" stroke="#00f0ff" strokeWidth="2"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Lower Section: Telemetry Grid (40% Height) */}
        <div className="flex-[4] min-h-0 grid grid-cols-4 grid-rows-2 gap-1">
          {/* Vibration RMS */}
          <div className="glass-panel p-4 flex flex-col justify-between border-l-2 border-error/50 rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)" }}>
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">Vibration RMS</span>
              <span className="px-2 py-0.5 bg-error-container/20 text-error font-mono text-[9px] rounded-full animate-pulse font-bold">CRITICAL</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-mono text-[28px] text-error font-bold leading-none">14.2</span>
              <span className="font-mono text-on-surface-variant text-[12px] font-bold">MM/S</span>
            </div>
            <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
              <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 L10,12 L20,8 L30,15 L40,5 L50,18 L60,2 L70,14 L80,6 L90,12 L100,10" fill="none" stroke="#ffb4ab" strokeWidth="1"></path>
              </svg>
            </div>
          </div>
          {/* Bearing Temp */}
          <div className="glass-panel p-4 flex flex-col justify-between border-l-2 border-secondary/50 rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)" }}>
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">Bearing Temp</span>
              <span className="px-2 py-0.5 bg-secondary-container/20 text-secondary font-mono text-[9px] rounded-full font-bold">WARNING</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-mono text-[28px] text-secondary font-bold leading-none">85.5</span>
              <span className="font-mono text-on-surface-variant text-[12px] font-bold">°C</span>
            </div>
            <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
              <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,18 L20,16 L40,14 L60,10 L80,8 L100,5" fill="none" stroke="#ffba20" strokeWidth="1"></path>
              </svg>
            </div>
          </div>
          {/* Motor Current */}
          <div className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50 rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)" }}>
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">Motor Current</span>
              <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] rounded-full font-bold">NORMAL</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-mono text-[28px] text-on-surface font-bold leading-none">42.1</span>
              <span className="font-mono text-on-surface-variant text-[12px] font-bold">A</span>
            </div>
            <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
              <svg className="w-full h-full opacity-30" viewBox="0 0 100 20" preserveAspectRatio="none">
                <line stroke="var(--theme-on-surface)" strokeWidth="1" x1="0" x2="100" y1="10" y2="10"></line>
              </svg>
            </div>
          </div>
          {/* Motor RPM */}
          <div className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50 rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)" }}>
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">Motor RPM</span>
              <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] rounded-full font-bold">NORMAL</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-mono text-[28px] text-on-surface font-bold leading-none">1745.0</span>
              <span className="font-mono text-on-surface-variant text-[12px] font-bold">RPM</span>
            </div>
            <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
              <svg className="w-full h-full opacity-30" viewBox="0 0 100 20" preserveAspectRatio="none">
                <line stroke="var(--theme-on-surface)" strokeWidth="1" x1="0" x2="100" y1="10" y2="10"></line>
              </svg>
            </div>
          </div>
          {/* System Pressure */}
          <div className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50 rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)" }}>
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">System Pressure</span>
              <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] rounded-full font-bold">NORMAL</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-mono text-[28px] text-on-surface font-bold leading-none">115.2</span>
              <span className="font-mono text-on-surface-variant text-[12px] font-bold">PSI</span>
            </div>
            <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
              <svg className="w-full h-full opacity-30" viewBox="0 0 100 20" preserveAspectRatio="none">
                <line stroke="var(--theme-on-surface)" strokeWidth="1" x1="0" x2="100" y1="10" y2="10"></line>
              </svg>
            </div>
          </div>
          {/* Inlet Pressure */}
          <div className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50 rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)" }}>
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">Inlet Pressure</span>
              <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] rounded-full font-bold">NORMAL</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-mono text-[28px] text-on-surface font-bold leading-none">12.0</span>
              <span className="font-mono text-on-surface-variant text-[12px] font-bold">BAR</span>
            </div>
            <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
              <svg className="w-full h-full opacity-30" viewBox="0 0 100 20" preserveAspectRatio="none">
                <line stroke="var(--theme-on-surface)" strokeWidth="1" x1="0" x2="100" y1="10" y2="10"></line>
              </svg>
            </div>
          </div>
          {/* Flow Rate */}
          <div className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50 rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)" }}>
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">Flow Rate</span>
              <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] rounded-full font-bold">NORMAL</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-mono text-[28px] text-on-surface font-bold leading-none text-primary-fixed">110.5</span>
              <span className="font-mono text-on-surface-variant text-[12px] font-bold">L/MIN</span>
            </div>
            <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
              <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,2 L25,5 L50,8 L75,15 L100,18" fill="none" stroke="#7df4ff" strokeWidth="1"></path>
              </svg>
            </div>
          </div>
          {/* Valve Position */}
          <div className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50 rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)" }}>
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">Valve Position</span>
              <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] rounded-full font-bold">NORMAL</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-mono text-[28px] text-on-surface font-bold leading-none">45.0</span>
              <span className="font-mono text-on-surface-variant text-[12px] font-bold">%</span>
            </div>
            <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full opacity-30">
              <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <line stroke="var(--theme-on-surface)" strokeWidth="1" x1="0" x2="100" y1="10" y2="10"></line>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
