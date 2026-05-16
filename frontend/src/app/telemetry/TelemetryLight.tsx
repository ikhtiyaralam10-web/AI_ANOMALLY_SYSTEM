"use client";
import React from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";

export default function TelemetryLight() {
  const { theme, setTheme } = useAppContext();

  return (
    <div className="dashboard-light-theme font-body min-h-screen flex overflow-hidden bg-[#f4f9f9] text-[#151d1e]">
      {/* Side Navigation Shell */}
      <nav className="h-screen w-64 fixed left-0 top-0 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-gutter px-4 z-50">
        <div className="mb-8 mt-4">
          <Link href="/">
            <h1 className="font-headline text-3xl font-bold text-on-surface tracking-tighter uppercase">CORE<div>INSIGHT</div></h1>
          </Link>
          <p className="font-mono text-[11px] text-on-surface-variant mt-1 font-bold opacity-70">V.4.0 ONLINE</p>
        </div>
        <div className="flex-grow space-y-2">
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant hover:text-on-surface transition-all" href="/dashboard">
            <span className="material-symbols-outlined mr-3">dashboard</span>
            <span>Overview</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 rounded text-primary bg-primary-container/30 border-l-2 border-primary font-bold font-mono text-[11px] scale-95 duration-100" href="/telemetry">
            <span className="material-symbols-outlined mr-3" style={{ fontVariationSettings: '"FILL" 1' }}>analytics</span>
            <span>Live Telemetry</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant hover:text-on-surface transition-all" href="/diagnostics">
            <span className="material-symbols-outlined mr-3">query_stats</span>
            <span>Diagnostics</span>
          </Link>
          <a className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant hover:text-on-surface transition-all" href="#">
            <span className="material-symbols-outlined mr-3">science</span>
            <span>Simulation Lab</span>
          </a>
          <a className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant hover:text-on-surface transition-all" href="#">
            <span className="material-symbols-outlined mr-3">build</span>
            <span>Maintenance Hub</span>
          </a>
        </div>
        <div className="mt-auto pt-4 border-t border-outline-variant">
          <button className="w-full mb-4 bg-primary text-on-primary font-mono text-[11px] font-bold py-3 rounded hover:bg-primary-fixed-variant transition-colors">
            GENERATE REPORT
          </button>
          <div className="flex flex-col space-y-2">
            <a className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant hover:text-on-surface transition-all" href="#">
              <span className="material-symbols-outlined mr-2">terminal</span>
              <span>System Logs</span>
            </a>
            <a className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant hover:text-on-surface transition-all" href="#">
              <span className="material-symbols-outlined mr-2">settings</span>
              <span>Settings</span>
            </a>
          </div>
          <div className="mt-4 flex items-center space-x-2 text-[12px] font-mono text-on-surface-variant">
            <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant overflow-hidden mr-2">
              <img alt="System Operator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB4_qK8TJkgY-LEMRr5m41Ab1q4UdiOaX-RAYJb5EfwIXfdYgebMfmJwo8AYSK77gmCFOUlH3LjPEpOXCXhFcV5dX5BxWNzvHwRC6dKBDsP4yLo8Cwm2QGURpk4-zA9FPWWL4aq_0fpTwpZ5LbYODssBs1JnYLvrpHfuTammv4W43n6j_2raFXUGsRTnaP9F1gSG2AXDuvrnkgX64HRuJlhDQ-qSO983ll65qOdU24tuCzmWEBcC3xNVPZxVL2IKJjzEI2dvpbrQw" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-on-surface font-bold text-[12px]">Operator 01</span>
              <span className="text-[10px] opacity-70">LEVEL 4 CLEARANCE</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Top AppBar Shell */}
      <header className="fixed top-0 left-64 h-16 bg-white/95 backdrop-blur-sm border-b border-outline-variant flex items-center justify-between px-6 z-40 transition-all duration-200" style={{ width: "calc(100% - 16rem)" }}>
        {/* Branding Left */}
        <div className="flex flex-col">
          <h2 className="font-mono text-[18px] font-bold text-[#006970] tracking-tight leading-none uppercase">Insight Monitor</h2>
        </div>

        {/* Navigation Center */}
        <nav className="hidden md:flex space-x-8 font-mono text-[11px] absolute left-1/2 -translate-x-1/2 items-center h-full">
          <a className="text-primary border-b-2 border-primary h-full flex items-center px-1 font-bold uppercase" href="#">Real-time</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center px-1 uppercase font-bold" href="#">History</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center px-1 uppercase font-bold" href="#">Nodes</a>
        </nav>

        {/* Actions Right */}
        <div className="flex items-center space-x-4">
          <button className="bg-[#fee2e2] border border-[#fca5a5] text-[#991b1b] font-mono text-[10px] px-4 py-1.5 rounded-sm hover:bg-red-200 transition-colors uppercase font-bold tracking-wider">
            EMERGENCY SHUTDOWN
          </button>
          <div className="flex items-center space-x-3 text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors p-1 flex items-center">
              <span className="material-symbols-outlined text-[20px]">home</span>
            </Link>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hover:text-primary transition-colors p-1"
            >
              <span className="material-symbols-outlined text-[20px]">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <button className="hover:text-primary transition-colors p-1 relative">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-error rounded-full"></span>
            </button>
            <button className="hover:text-primary transition-colors p-1">
              <span className="material-symbols-outlined text-[22px]">account_circle</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Telemetry Stage */}
      <main className="mt-16 p-6 h-[calc(100vh-64px)] overflow-hidden flex flex-col gap-6 w-full" style={{ marginLeft: "16rem", width: "calc(100% - 16rem)" }}>
        {/* Top Action Bar */}
        <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex items-center justify-between px-6 py-4 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-primary-container/30 border border-primary-container rounded">
              <span className="font-mono text-[12px] text-primary tracking-widest uppercase font-bold">ASSET ID: ST-049</span>
            </div>
            <span className="text-outline-variant font-medium">|</span>
            <span className="font-headline text-2xl text-on-surface font-semibold">Motor Array Beta</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex bg-surface-container rounded p-1 border border-outline-variant">
              <button className="px-3 py-1 font-mono text-[10px] text-on-surface-variant hover:text-on-surface rounded font-bold">1 MIN</button>
              <button className="px-3 py-1 font-mono text-[10px] text-on-surface-variant hover:text-on-surface rounded font-bold">5 MIN</button>
              <button className="px-3 py-1 font-mono text-[10px] text-on-surface-variant hover:text-on-surface rounded font-bold">1 HOUR</button>
              <button className="px-3 py-1 font-mono text-[10px] text-primary bg-surface shadow-sm rounded border border-outline-variant font-bold">LIVE</button>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,105,112,0.5)]"></span>
              <span className="font-mono text-[11px] text-primary font-bold">LIVE STREAM: ON</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded hover:bg-surface-variant transition-all font-mono text-[11px] text-on-surface-variant font-bold">
              <span className="material-symbols-outlined text-[16px]">download</span>
              EXPORT CSV
            </button>
          </div>
        </div>

        {/* Upper Section: Charts (60% Height) */}
        <div className="flex-[6] min-h-0 flex flex-col gap-4">
          {/* Chart 1 */}
          <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex-1 min-h-0 p-4 flex flex-col relative group rounded-xl">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">VIBRATION RMS VS NOMINAL BAND</span>
              <span className="font-mono text-[12px] text-error font-bold animate-pulse">CRITICAL SPIKE DETECTED</span>
            </div>
            <div className="w-full h-[calc(100%-20px)] overflow-hidden bg-surface-container rounded border border-outline-variant relative">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 120">
                {/* Safe Zone */}
                <rect fill="rgba(0, 105, 112, 0.05)" height="40" width="1000" x="0" y="40"></rect>
                {/* Nominal Line */}
                <line stroke="#bfc8c9" strokeDasharray="4" x1="0" x2="1000" y1="60" y2="60"></line>
                {/* Red Line Spiking */}
                <path className="drop-shadow-[0_2px_4px_rgba(186,26,26,0.2)]" d="M0,70 L100,65 L200,68 L300,60 L400,65 L500,10 L600,105 L700,40 L800,60 L900,55 L1000,62" fill="none" stroke="#ba1a1a" strokeWidth="2.5"></path>
              </svg>
            </div>
          </div>
          {/* Chart 2 */}
          <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex-1 min-h-0 p-4 flex flex-col relative group rounded-xl">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">BEARING TEMPERATURE</span>
              <span className="font-mono text-[12px] text-secondary font-bold">+2.4°C / HR TREND</span>
            </div>
            <div className="w-full h-[calc(100%-20px)] overflow-hidden bg-surface-container rounded border border-outline-variant relative">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 120">
                {/* Yellow Line Trending Up */}
                <path className="drop-shadow-[0_2px_4px_rgba(126,87,0,0.2)]" d="M0,90 L150,85 L300,80 L450,70 L600,65 L750,50 L900,45 L1000,40" fill="none" stroke="#7e5700" strokeWidth="2.5"></path>
              </svg>
            </div>
          </div>
          {/* Chart 3 */}
          <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex-1 min-h-0 p-4 flex flex-col relative group rounded-xl">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">MOTOR RPM</span>
              <span className="font-mono text-[12px] text-primary font-bold">STABLE NOMINAL</span>
            </div>
            <div className="w-full h-[calc(100%-20px)] overflow-hidden bg-surface-container rounded border border-outline-variant relative">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 120">
                {/* Cyan Line Stable */}
                <path className="drop-shadow-[0_2px_4px_rgba(0,105,112,0.2)]" d="M0,60 L100,58 L200,62 L300,60 L400,59 L500,61 L600,60 L700,58 L800,62 L900,60 L1000,60" fill="none" stroke="#006970" strokeWidth="2.5"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Lower Section: Telemetry Grid (40% Height) */}
        <div className="flex-[4] min-h-0 grid grid-cols-4 grid-rows-2 gap-4">
          {/* Vibration RMS */}
          <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col justify-between border-t-4 border-t-error rounded-xl">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Vibration RMS</span>
              <span className="px-2 py-0.5 bg-error-container text-on-error-container font-mono text-[9px] rounded font-bold animate-pulse">CRITICAL</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-headline text-[32px] text-error font-bold leading-none">14.2</span>
              <span className="font-mono text-on-surface-variant text-[12px] font-bold">MM/S</span>
            </div>
            <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
              <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 L10,12 L20,8 L30,15 L40,5 L50,18 L60,2 L70,14 L80,6 L90,12 L100,10" fill="none" stroke="#ba1a1a" strokeWidth="1.5"></path>
              </svg>
            </div>
          </div>
          {/* Bearing Temp */}
          <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col justify-between border-t-4 border-t-secondary rounded-xl">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Bearing Temp</span>
              <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container font-mono text-[9px] rounded font-bold">WARNING</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-headline text-[32px] text-secondary font-bold leading-none">85.5</span>
              <span className="font-mono text-on-surface-variant text-[12px] font-bold">°C</span>
            </div>
            <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
              <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,18 L20,16 L40,14 L60,10 L80,8 L100,5" fill="none" stroke="#7e5700" strokeWidth="1.5"></path>
              </svg>
            </div>
          </div>
          {/* Motor Current */}
          <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Motor Current</span>
              <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-mono text-[9px] rounded font-bold">NORMAL</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-headline text-[32px] text-on-surface font-bold leading-none">42.1</span>
              <span className="font-mono text-on-surface-variant text-[12px] font-bold">A</span>
            </div>
            <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
              <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <line stroke="#bfc8c9" strokeWidth="1.5" x1="0" x2="100" y1="10" y2="10"></line>
              </svg>
            </div>
          </div>
          {/* Motor RPM */}
          <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Motor RPM</span>
              <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-mono text-[9px] rounded font-bold">NORMAL</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-headline text-[32px] text-on-surface font-bold leading-none">1745.0</span>
              <span className="font-mono text-on-surface-variant text-[12px] font-bold">RPM</span>
            </div>
            <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
              <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <line stroke="#bfc8c9" strokeWidth="1.5" x1="0" x2="100" y1="10" y2="10"></line>
              </svg>
            </div>
          </div>
          {/* System Pressure */}
          <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">System Pressure</span>
              <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-mono text-[9px] rounded font-bold">NORMAL</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-headline text-[32px] text-on-surface font-bold leading-none">115.2</span>
              <span className="font-mono text-on-surface-variant text-[12px] font-bold">PSI</span>
            </div>
            <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
              <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <line stroke="#bfc8c9" strokeWidth="1.5" x1="0" x2="100" y1="10" y2="10"></line>
              </svg>
            </div>
          </div>
          {/* Inlet Pressure */}
          <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Inlet Pressure</span>
              <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-mono text-[9px] rounded font-bold">NORMAL</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-headline text-[32px] text-on-surface font-bold leading-none">12.0</span>
              <span className="font-mono text-on-surface-variant text-[12px] font-bold">BAR</span>
            </div>
            <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
              <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <line stroke="#bfc8c9" strokeWidth="1.5" x1="0" x2="100" y1="10" y2="10"></line>
              </svg>
            </div>
          </div>
          {/* Flow Rate */}
          <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Flow Rate</span>
              <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-mono text-[9px] rounded font-bold">NORMAL</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-headline text-[32px] text-primary font-bold leading-none">110.5</span>
              <span className="font-mono text-on-surface-variant text-[12px] font-bold">L/MIN</span>
            </div>
            <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
              <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,2 L25,5 L50,8 L75,15 L100,18" fill="none" stroke="#006970" strokeWidth="1.5"></path>
              </svg>
            </div>
          </div>
          {/* Valve Position */}
          <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Valve Position</span>
              <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-mono text-[9px] rounded font-bold">NORMAL</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-headline text-[32px] text-on-surface font-bold leading-none">45.0</span>
              <span className="font-mono text-on-surface-variant text-[12px] font-bold">%</span>
            </div>
            <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
              <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <line stroke="#bfc8c9" strokeWidth="1.5" x1="0" x2="100" y1="10" y2="10"></line>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
