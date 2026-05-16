"use client";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="dashboard-theme min-h-screen flex overflow-hidden font-body">
      {/* SideNavBar */}
      <nav className="h-screen w-[15%] fixed left-0 top-0 bg-surface-container-lowest/30 backdrop-blur-xl border-r border-outline-variant/10 flex flex-col py-gutter px-4 z-50">
        <div className="mb-8 mt-4">
          <div className="font-headline text-3xl font-bold text-primary-container tracking-tighter">
            CORE<div>INSIGHT</div>
          </div>
          <div className="font-mono text-xs text-on-surface-variant mt-1 opacity-70">
            V.4.0 ONLINE
          </div>
        </div>
        <div className="flex-grow space-y-2">
          <a
            className="flex items-center space-x-3 p-3 rounded text-primary-container bg-primary-container/10 border-l-2 border-primary-container font-bold font-mono text-xs scale-95 duration-100"
            href="#"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              dashboard
            </span>
            <span>Overview</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-xs hover:bg-surface-variant/20 hover:text-primary transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">analytics</span>
            <span>Live Telemetry</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-xs hover:bg-surface-variant/20 hover:text-primary transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">query_stats</span>
            <span>Diagnostics</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-xs hover:bg-surface-variant/20 hover:text-primary transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">science</span>
            <span>Simulation Lab</span>
          </a>
          <a
            className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-xs hover:bg-surface-variant/20 hover:text-primary transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">build</span>
            <span>Maintenance Hub</span>
          </a>
        </div>
        <div className="mt-auto pt-4 border-t border-outline-variant/10">
          <button className="w-full mb-4 bg-primary-container text-on-primary-fixed font-mono text-xs py-3 rounded hover:bg-primary-fixed transition-colors">
            GENERATE REPORT
          </button>
          <div className="flex flex-col space-y-2">
            <a
              className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-mono text-xs hover:bg-surface-variant/20 hover:text-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">terminal</span>
              <span>System Logs</span>
            </a>
            <a
              className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-mono text-xs hover:bg-surface-variant/20 hover:text-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              <span>Settings</span>
            </a>
          </div>
          <div className="mt-4 flex items-center space-x-2 font-mono text-xs text-on-surface-variant">
            <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]"></div>
            <span>System Status: Online</span>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="ml-[15%] flex-grow flex h-screen pt-16 pb-4 px-4 gap-1">
        {/* TopAppBar */}
        <header className="fixed top-0 left-[15%] right-0 h-16 z-40 bg-surface/10 backdrop-blur-md border-b border-outline-variant/5 flex items-center justify-between px-4 transition-all duration-200 ease-in-out">
          <div className="flex items-center min-w-[240px]">
            <div className="font-headline text-2xl font-bold text-primary-container">
              INSIGHT MONITOR
            </div>
          </div>
          <nav className="hidden md:flex flex-grow justify-center space-x-6 font-mono text-xs font-bold uppercase">
            <a className="text-primary-container border-b-2 border-primary-container pb-1" href="#">
              Real-time
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              History
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              Nodes
            </a>
          </nav>
          <div className="flex items-center space-x-4 min-w-[240px] justify-end">
            <button className="bg-error-container/20 border border-error text-error font-mono text-xs font-bold px-4 py-2 rounded hover:bg-error-container/40 transition-colors">
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

        {/* Center Stage (55%) */}
        <div className="flex-[55%] flex flex-col gap-1">
          {/* Gauges Row */}
          <div className="flex gap-1 h-[25%]">
            <div className="glass-panel flex-1 rounded-xl p-6 flex flex-col items-center justify-center relative bg-glow-cyan overflow-hidden" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div className="font-mono text-xs text-primary-container mb-4 opacity-80 tracking-widest uppercase font-bold">
                Anomaly Score
              </div>
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="none" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="8"></circle>
                  <circle
                    className="drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                    cx="50"
                    cy="50"
                    fill="none"
                    r="45"
                    stroke="#00f0ff"
                    strokeDasharray="283"
                    strokeDashoffset="31"
                    strokeWidth="8"
                  ></circle>
                </svg>
                <div className="absolute font-headline text-3xl font-bold text-primary-container glow-cyan">
                  89%
                </div>
              </div>
            </div>
            <div className="glass-panel flex-1 rounded-xl p-6 flex flex-col items-center justify-center relative shadow-[inset_0_0_30px_rgba(255,180,171,0.1)] overflow-hidden border-error/30" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div className="font-mono text-xs text-error mb-4 opacity-80 tracking-widest uppercase font-bold">
                Failure Probability
              </div>
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="none" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="8"></circle>
                  <circle
                    className="drop-shadow-[0_0_10px_rgba(255,180,171,0.8)] animate-pulse"
                    cx="50"
                    cy="50"
                    fill="none"
                    r="45"
                    stroke="#ffb4ab"
                    strokeDasharray="283"
                    strokeDashoffset="50"
                    strokeWidth="8"
                  ></circle>
                </svg>
                <div className="absolute font-headline text-3xl font-bold text-error glow-crimson animate-pulse">
                  82%
                </div>
              </div>
            </div>
          </div>

          {/* Parameter Grid */}
          <div className="grid grid-cols-3 gap-1 h-[22%]">
            <div className="glass-panel rounded-xl p-4 flex flex-col justify-between" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div className="flex justify-between items-start">
                <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">Vibration RMS</span>
                <span className="px-2 py-1 bg-error-container/30 text-error font-mono text-xs rounded border border-error/50">CRIT</span>
              </div>
              <div>
                <div className="font-mono text-lg font-medium text-error glow-crimson">
                  14.2 <span className="text-xs text-on-surface-variant">mm/s</span>
                </div>
                <div className="h-8 mt-2 w-full bg-surface-container-low rounded relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 h-[60%] w-full border-t border-error/50 bg-gradient-to-t from-error/20 to-transparent"></div>
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0,30 Q10,10 20,20 T40,25 T60,5 T80,15 T100,0 L100,32 L0,32 Z" fill="rgba(255,180,171,0.2)" stroke="#ffb4ab" strokeWidth="1"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-xl p-4 flex flex-col justify-between" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div className="flex justify-between items-start">
                <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">Bearing Temp</span>
                <span className="px-2 py-1 bg-secondary-container/30 text-secondary-fixed-dim font-mono text-xs rounded border border-secondary-fixed-dim/50">WARN</span>
              </div>
              <div>
                <div className="font-mono text-lg font-medium text-secondary-fixed-dim">
                  88.5 <span className="text-xs text-on-surface-variant">°C</span>
                </div>
                <div className="h-8 mt-2 w-full bg-surface-container-low rounded relative overflow-hidden">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0,20 Q15,15 30,25 T60,10 T90,20 T100,15 L100,32 L0,32 Z" fill="rgba(255,186,32,0.2)" stroke="#ffba20" strokeWidth="1"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-xl p-4 flex flex-col justify-between" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div className="flex justify-between items-start">
                <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">Motor Current</span>
                <span className="px-2 py-1 bg-primary-container/10 text-primary-container font-mono text-xs rounded border border-primary-container/30">NOM</span>
              </div>
              <div>
                <div className="font-mono text-lg font-medium text-primary-container">
                  42.1 <span className="text-xs text-on-surface-variant">A</span>
                </div>
                <div className="h-8 mt-2 w-full bg-surface-container-low rounded relative overflow-hidden">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0,25 Q20,25 40,25 T80,25 T100,25 L100,32 L0,32 Z" fill="rgba(0,240,255,0.1)" stroke="#00f0ff" strokeWidth="1"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1 h-[18%]">
            {/* Container 4: RPM */}
            <div className="glass-panel rounded-xl p-4 flex flex-col justify-between" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div className="flex justify-between items-start">
                <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">RPM</span>
                <span className="px-2 py-1 bg-primary-container/10 text-primary-container font-mono text-xs rounded border border-primary-container/30">NOM</span>
              </div>
              <div>
                <div className="font-mono text-lg font-medium text-primary-container">
                  1750 <span className="text-xs text-on-surface-variant">rpm</span>
                </div>
                <div className="h-8 mt-2 w-full bg-surface-container-low rounded relative overflow-hidden">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0,25 Q15,20 30,25 T60,22 T90,25 T100,24 L100,32 L0,32 Z" fill="rgba(0,240,255,0.1)" stroke="#00f0ff" strokeWidth="1"></path>
                  </svg>
                </div>
              </div>
            </div>
            {/* Container 5: PRESSURE */}
            <div className="glass-panel rounded-xl p-4 flex flex-col justify-between" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div className="flex justify-between items-start">
                <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">PRESSURE</span>
                <span className="px-2 py-1 bg-secondary-container/30 text-secondary-fixed-dim font-mono text-xs rounded border border-secondary-fixed-dim/50">WARN</span>
              </div>
              <div>
                <div className="font-mono text-lg font-medium text-secondary-fixed-dim">
                  102.4 <span className="text-xs text-on-surface-variant">N/m³</span>
                </div>
                <div className="h-8 mt-2 w-full bg-surface-container-low rounded relative overflow-hidden">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0,28 Q20,15 40,22 T70,18 T100,25 L100,32 L0,32 Z" fill="rgba(255,186,32,0.2)" stroke="#ffba20" strokeWidth="1"></path>
                  </svg>
                </div>
              </div>
            </div>
            {/* Container 6: SYSTEM OVERRIDE / SIMULATION */}
            <div className="glass-panel rounded-xl p-4 flex flex-col" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div className="font-mono text-[11px] font-bold text-on-surface-variant uppercase mb-3">SYSTEM OVERRIDE / SIMULATION</div>
              <div className="flex flex-col gap-2 flex-grow justify-center">
                <button className="w-full py-2 border border-primary-container/40 text-primary-container font-mono font-bold rounded hover:bg-primary-container/10 transition-all text-[10px]">
                  NORMAL
                </button>
                <button className="w-full py-2 bg-error/20 border border-error text-error font-mono font-bold rounded shadow-[0_0_15px_rgba(255,180,171,0.4)] animate-pulse hover:bg-error/30 transition-all text-[10px]">
                  ABNORMAL
                </button>
              </div>
            </div>
          </div>

          {/* Historical Chart */}
          <div className="glass-panel flex-grow rounded-xl p-6 flex flex-col" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <div className="font-mono text-[11px] font-bold text-on-surface-variant mb-4 uppercase">Sensor Trends (24H)</div>
            <div className="flex-grow relative bg-surface-container-low/50 rounded border border-outline-variant/20 overflow-hidden">
              {/* Fake Chart Grid & Content */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10">
                <div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-white"></div>
                <div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-white"></div>
                <div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-white"></div>
                <div className="border-r border-white"></div><div className="border-r border-white"></div><div className="border-r border-white"></div><div className="border-r border-white"></div><div className="border-r border-white"></div><div></div>
              </div>
              {/* Safe Band */}
              <div className="absolute top-[40%] bottom-[20%] left-0 right-0 bg-primary-container/5 border-y border-primary-container/20"></div>
              {/* Spike Area */}
              <div className="absolute top-0 bottom-[60%] left-[70%] right-[10%] bg-error/10 border-b border-error/30"></div>
              {/* Line */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <path className="drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" d="M0,70 Q10,75 20,65 T40,60 T60,70 T70,20 T80,10 T90,50 T100,55" fill="none" stroke="#00f0ff" strokeWidth="2"></path>
                <path className="drop-shadow-[0_0_8px_rgba(255,180,171,0.8)]" d="M70,20 T80,10" fill="none" stroke="#ffb4ab" strokeWidth="3"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Pane (30%) */}
        <div className="flex-[30%] flex flex-col gap-1">
          {/* RCA Narrative */}
          <div className="glass-panel flex-[40%] rounded-xl p-6 border-l-4 border-l-secondary-fixed-dim" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)", borderLeftColor: "var(--theme-secondary-fixed-dim)" }}>
            <div className="font-mono text-[11px] font-bold text-secondary-fixed-dim mb-4 flex items-center space-x-2">
              <span className="material-symbols-outlined text-sm">psychology</span>
              <span>Root Cause Analysis</span>
            </div>
            <div className="font-headline text-2xl font-semibold text-on-surface mb-2">Stage 3 Bearing Degradation</div>
            <p className="text-sm text-on-surface-variant mb-4">AI Hypothesizes structural fatigue in inner race due to prolonged elevated thermal states.</p>
            <ul className="space-y-2 font-mono text-xs text-on-surface-variant">
              <li className="flex items-start space-x-2">
                <span className="text-error mt-0.5">•</span>
                <span>High frequency vibration harmonic matched to bearing defect freq (BPFI).</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-secondary-fixed-dim mt-0.5">•</span>
                <span>Temp gradient exceeds nominal +15°C over 48h.</span>
              </li>
            </ul>
          </div>
          {/* Recommended Action */}
          <div className="glass-panel flex-[25%] rounded-xl p-6 bg-error-container/10 border border-error/30 flex flex-col justify-center" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)" }}>
            <div className="font-mono text-[11px] font-bold text-error mb-2 uppercase">Required Action</div>
            <div className="text-base font-bold text-on-error-container mb-4">Schedule Immediate Bearing Replacement</div>
            <div>
              <div className="flex justify-between font-mono text-xs text-on-surface-variant mb-1">
                <span>AI Confidence</span>
                <span>94%</span>
              </div>
              <div className="w-full h-1 bg-surface-container-high rounded overflow-hidden">
                <div className="h-full bg-error w-[94%] shadow-[0_0_8px_rgba(255,180,171,0.8)]"></div>
              </div>
            </div>
            <button className="mt-4 w-full bg-error text-on-error font-mono text-[11px] font-bold py-2 rounded hover:bg-error/80 transition-colors">
              INITIATE WORK ORDER
            </button>
          </div>
          {/* Simulation Lab */}
          <div className="glass-panel flex-[35%] rounded-xl p-6" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <div className="font-mono text-[11px] font-bold text-primary-container mb-4 flex items-center space-x-2 uppercase">
              <span className="material-symbols-outlined text-sm">tune</span>
              <span>Simulate Parameters</span>
            </div>
            <div className="space-y-6 mt-4">
              <div>
                <div className="flex justify-between font-mono text-xs mb-2">
                  <span className="text-on-surface-variant">vibration_rms</span>
                  <span className="text-primary-container">14.2 mm/s</span>
                </div>
                <input className="w-full accent-primary-container h-1 bg-surface-container-high rounded appearance-none focus:outline-none" max="20" min="0" type="range" defaultValue="14.2" />
              </div>
              <div>
                <div className="flex justify-between font-mono text-xs mb-2">
                  <span className="text-on-surface-variant">bearing_temp</span>
                  <span className="text-secondary-fixed-dim">88.5 °C</span>
                </div>
                <input className="w-full accent-secondary-fixed-dim h-1 bg-surface-container-high rounded appearance-none focus:outline-none" max="150" min="0" type="range" defaultValue="88.5" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
