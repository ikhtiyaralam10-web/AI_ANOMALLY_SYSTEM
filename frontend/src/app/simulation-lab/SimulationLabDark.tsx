"use client";
import React from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";

export default function SimulationLabDark() {
  const { theme, setTheme } = useAppContext();

  return (
    <div className="dashboard-dark-theme font-body min-h-screen flex overflow-hidden bg-[#0A0E17] text-on-surface">
      {/* Side Navigation Shell */}
      <nav className="h-screen w-[15%] fixed left-0 top-0 bg-surface-container-low/40 backdrop-blur-xl border-r border-outline-variant/10 flex flex-col py-gutter px-4 z-50">
        <div className="mb-8 mt-4">
          <Link href="/">
            <h1 className="font-headline text-3xl font-bold text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] tracking-tighter uppercase">CORE<div>INSIGHT</div></h1>
          </Link>
          <p className="font-mono text-[11px] text-on-surface-variant mt-1 font-bold opacity-70">V.4.0 ONLINE</p>
        </div>
        <div className="flex-grow space-y-2">
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant/20 hover:text-primary transition-all" href="/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Overview</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant/20 hover:text-primary transition-all" href="/telemetry">
            <span className="material-symbols-outlined">analytics</span>
            <span>Live Telemetry</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant/20 hover:text-primary transition-all" href="/diagnostics">
            <span className="material-symbols-outlined">query_stats</span>
            <span>Diagnostics</span>
          </Link>
          <a className="flex items-center space-x-3 p-3 rounded text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] bg-[#64ffda]/10 border-l-[3px] border-[#00f0ff] shadow-[inset_4px_0_15px_-4px_rgba(0,240,255,0.4)] font-bold font-mono text-[11px] scale-95 duration-100" href="/simulation-lab">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>science</span>
            <span>Simulation Lab</span>
          </a>
          <a className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant/20 hover:text-primary transition-all" href="#">
            <span className="material-symbols-outlined">build</span>
            <span>Maintenance Hub</span>
          </a>
        </div>
        <div className="mt-auto pt-4 border-t border-outline-variant/10">
          <button className="w-full mb-4 bg-[#64ffda] text-on-primary-fixed font-mono text-[11px] font-bold py-3 rounded hover:bg-primary transition-colors shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            GENERATE REPORT
          </button>
          <div className="flex flex-col space-y-2">
            <a className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant/20 hover:text-primary transition-all" href="#">
              <span className="material-symbols-outlined mr-2">terminal</span>
              <span>System Logs</span>
            </a>
            <a className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant/20 hover:text-primary transition-all" href="#">
              <span className="material-symbols-outlined mr-2">settings</span>
              <span>Settings</span>
            </a>
          </div>
          <div className="mt-4 flex items-center space-x-2 text-[12px] font-mono text-on-surface-variant">
            <div className="w-2 h-2 rounded-full bg-[#64ffda] animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]"></div>
            <div className="flex flex-col">
              <span className="text-[10px] opacity-70 uppercase tracking-tighter">System Status:</span>
              <span className="text-[10px] text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] font-bold uppercase tracking-tighter">Online</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Top AppBar Shell */}
      <header className="fixed top-0 left-[15%] h-16 bg-surface-container/30 backdrop-blur-xl border-b border-outline-variant/20 flex items-center justify-between px-6 z-40 transition-all duration-200" style={{ width: "calc(100% - 15%)" }}>
        {/* Branding Left */}
        <div className="flex flex-col">
          <h2 className="font-mono text-[18px] font-bold text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] tracking-widest uppercase">Insight Monitor</h2>
        </div>

        {/* Navigation Center */}
        <nav className="hidden md:flex space-x-8 font-mono text-[11px] absolute left-1/2 -translate-x-1/2 items-center h-full">
          <a className="text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] border-b-2 border-[#64ffda] h-full flex items-center px-1 font-bold uppercase" href="#">Real-time</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center px-1 uppercase font-bold" href="#">History</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center px-1 uppercase font-bold" href="#">Nodes</a>
        </nav>

        {/* Actions Right */}
        <div className="flex items-center space-x-4">
          <button className="bg-[#1a0a0a] border border-[#441d1d] text-[#ffb4ab] font-mono text-[10px] px-4 py-1.5 rounded-sm hover:bg-[#2a1111] transition-colors uppercase font-bold tracking-wider">
            EMERGENCY SHUTDOWN
          </button>
          <div className="flex items-center space-x-3 text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors p-1 flex items-center">
              <span className="material-symbols-outlined text-[20px]">home</span>
            </Link>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hover:text-primary transition-colors p-1 flex items-center"
            >
              <span className="material-symbols-outlined text-[20px]">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <button className="hover:text-primary transition-colors p-1 relative flex items-center">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-error rounded-full"></span>
            </button>
            <button className="hover:text-primary transition-colors p-1 flex items-center">
              <span className="material-symbols-outlined text-[22px]">account_circle</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="ml-[15%] mt-16 flex-1 flex overflow-hidden w-full h-[calc(100vh-64px)] relative z-10 overflow-y-auto">
        <div className="p-6 space-y-4 w-full">
          <div className="grid grid-cols-12 gap-4">
            {/* PARAMETER CONFIGURATION PANEL */}
            <section className="col-span-12 lg:col-span-4 glass-panel p-6 flex flex-col space-y-6 rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div>
                <h2 className="font-mono text-[11px] font-bold text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] border-l-2 border-[#64ffda] pl-3 mb-2 uppercase tracking-widest">Parameter Configuration</h2>
                <p className="text-on-surface-variant font-body text-[14px]">Adjust system inputs to simulate hardware response profiles.</p>
              </div>

              {/* Scenarios */}
              <div className="space-y-3">
                <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Scenario Presets</label>
                <div className="flex flex-wrap gap-2">
                  <button className="bg-[#64ffda]/20 text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] border border-[#64ffda]/40 px-3 py-1.5 rounded font-mono text-[11px] hover:bg-[#64ffda]/30 transition-all font-bold">MAX STRESS TEST</button>
                  <button className="bg-white/5 text-on-surface-variant border border-white/10 px-3 py-1.5 rounded font-mono text-[11px] hover:bg-white/10 font-bold">GRADUAL WEAR</button>
                  <button className="bg-white/5 text-on-surface-variant border border-white/10 px-3 py-1.5 rounded font-mono text-[11px] hover:bg-white/10 font-bold">OPTIMAL EFFICIENCY</button>
                </div>
              </div>

              {/* What-If Sliders */}
              <div className="space-y-5 flex-1">
                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-on-surface">Vibration RMS</span>
                    <span className="text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">8.4 / <span className="opacity-60 text-on-surface-variant">12.0 mm/s</span></span>
                  </div>
                  <input className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-[#64ffda] rounded" max="20" min="0" type="range" defaultValue="8" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-on-surface">Bearing Temperature</span>
                    <span className="text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">68.2 / <span className="opacity-60 text-on-surface-variant">95.0 °C</span></span>
                  </div>
                  <input className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-[#64ffda] rounded" max="150" min="0" type="range" defaultValue="68" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-on-surface">Inlet Pressure</span>
                    <span className="text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">14.2 / <span className="opacity-60 text-on-surface-variant">18.0 BAR</span></span>
                  </div>
                  <input className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-[#64ffda] rounded" max="30" min="0" type="range" defaultValue="14" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-on-surface">Flow Rate</span>
                    <span className="text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">850.0 / <span className="opacity-60 text-on-surface-variant">1200.0 L/M</span></span>
                  </div>
                  <input className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-[#64ffda] rounded" max="2000" min="0" type="range" defaultValue="850" />
                </div>
              </div>

              <button className="w-full bg-[#64ffda] text-[#002022] py-4 font-mono text-[11px] font-bold tracking-[0.2em] shadow-[0_0_20px_rgba(0,240,255,0.3)] shadow-[inset_0_0_10px_rgba(0,240,255,0.4)] hover:brightness-110 active:scale-[0.98] transition-all relative overflow-hidden group rounded">
                RUN SIMULATION
                <span className="absolute inset-0 bg-white/20 animate-pulse opacity-0 group-hover:opacity-100"></span>
              </button>
            </section>

            {/* REAL-TIME RESULT VISUALIZATION */}
            <div className="col-span-12 lg:col-span-8 space-y-4">
              {/* Main Chart */}
              <div className="glass-panel p-6 min-h-[400px] flex flex-col rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="font-mono text-[11px] font-bold text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] border-l-2 border-[#64ffda] pl-3 uppercase tracking-widest">Simulated Projection</h2>
                    <p className="text-on-surface-variant text-[12px] mt-1 font-body">Predicted Operational Lifecycle (T-Minus Failure)</p>
                  </div>
                  <div className="text-right">
                    <span className="font-headline text-3xl font-bold text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">14,204 HRS</span>
                    <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Estimated Remaining Uptime</p>
                  </div>
                </div>

                <div className="flex-1 relative flex items-end gap-1">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 300">
                    {/* Technical Grid Background */}
                    <defs>
                      <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 240, 255, 0.05)" strokeWidth="1"></path>
                      </pattern>
                      <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.3"></stop>
                        <stop offset="100%" stopColor="#00f0ff" stopOpacity="0"></stop>
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur result="coloredBlur" stdDeviation="3"></feGaussianBlur>
                        <feMerge>
                          <feMergeNode in="coloredBlur"></feMergeNode>
                          <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                      </filter>
                    </defs>
                    <rect fill="url(#grid)" height="100%" width="100%"></rect>
                    {/* Area Fill */}
                    <path d="M0,220 L100,200 L200,160 L300,180 L400,100 L500,60 L600,110 L700,150 L800,280 L800,300 L0,300 Z" fill="url(#chartGradient)"></path>
                    {/* Main Chart Line */}
                    <path d="M0,220 L100,200 L200,160 L300,180 L400,100 L500,60 L600,110 L700,150 L800,280" fill="none" filter="url(#glow)" stroke="#00f0ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    {/* Data Markers */}
                    <circle className="animate-pulse" cx="100" cy="200" fill="#00f0ff" r="3"></circle>
                    <circle cx="200" cy="160" fill="#00f0ff" r="3"></circle>
                    <circle cx="300" cy="180" fill="#00f0ff" r="3"></circle>
                    <circle cx="400" cy="100" fill="#00f0ff" r="3"></circle>
                    <circle cx="500" cy="60" fill="#00f0ff" r="3"></circle>
                    <circle cx="600" cy="110" fill="#00f0ff" r="3"></circle>
                    <circle cx="800" cy="280" fill="#ffb4ab" r="3"></circle>
                  </svg>
                </div>

                <div className="mt-4 flex justify-between border-t border-white/5 pt-4">
                  <div className="flex gap-6">
                    <div>
                      <p className="font-mono text-[9px] text-on-surface-variant font-bold uppercase tracking-widest">Model Confidence</p>
                      <p className="font-mono text-[12px] text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] font-bold">98.2%</p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] text-on-surface-variant font-bold uppercase tracking-widest">Latency</p>
                      <p className="font-mono text-[12px] text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] font-bold">12ms</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="w-2 h-2 rounded-full bg-[#64ffda] shadow-[0_0_5px_#00f0ff]"></span>
                    <span className="w-2 h-2 rounded-full bg-white/20"></span>
                    <span className="w-2 h-2 rounded-full bg-white/20"></span>
                  </div>
                </div>
              </div>

              {/* Risk Matrix & Sub-data */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-panel p-6 rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <h3 className="font-mono text-[11px] font-bold text-on-surface mb-4 uppercase tracking-widest">Risk Matrix: Stability Heatmap</h3>
                  <div className="grid grid-cols-5 gap-1">
                    {/* Heatmap Rows */}
                    <div className="aspect-square bg-surface-container-highest/40 border border-white/5"></div>
                    <div className="aspect-square bg-surface-container-highest/40 border border-white/5"></div>
                    <div className="aspect-square bg-[#00f0ff]/20 border border-[#00f0ff]/30"></div>
                    <div className="aspect-square bg-[#00f0ff]/40 border border-[#00f0ff]/50"></div>
                    <div className="aspect-square bg-[#00f0ff]/60 border border-[#00f0ff]/70"></div>
                    
                    <div className="aspect-square bg-surface-container-highest/40 border border-white/5"></div>
                    <div className="aspect-square bg-[#00f0ff]/20 border border-[#00f0ff]/30"></div>
                    <div className="aspect-square bg-[#00f0ff]/40 border border-[#00f0ff]/50"></div>
                    <div className="aspect-square bg-[#00f0ff]/60 border border-[#00f0ff]/70"></div>
                    <div className="aspect-square bg-secondary-container/40 border border-secondary/50"></div>
                    
                    <div className="aspect-square bg-[#00f0ff]/20 border border-[#00f0ff]/30"></div>
                    <div className="aspect-square bg-[#00f0ff]/40 border border-[#00f0ff]/50"></div>
                    <div className="aspect-square bg-[#00f0ff]/60 border border-[#00f0ff]/70"></div>
                    <div className="aspect-square bg-secondary-container/60 border border-secondary/70"></div>
                    <div className="aspect-square bg-error/40 border border-error/50"></div>
                    
                    <div className="aspect-square bg-[#00f0ff]/40 border border-[#00f0ff]/50"></div>
                    <div className="aspect-square bg-[#00f0ff]/60 border border-[#00f0ff]/70"></div>
                    <div className="aspect-square bg-secondary-container/60 border border-secondary/70"></div>
                    <div className="aspect-square bg-error/60 border border-error/70 animate-pulse"></div>
                    <div className="aspect-square bg-error border border-white/20 animate-pulse"></div>
                  </div>
                  <div className="mt-4 flex justify-between font-mono text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">
                    <span>Min Stress</span>
                    <span>Critical Threshold</span>
                  </div>
                </div>

                <div className="glass-panel p-6 flex flex-col justify-center text-center space-y-4 rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div className="inline-flex mx-auto p-4 rounded-full bg-error/10 border border-error/20">
                    <span className="material-symbols-outlined text-error text-[32px]">warning</span>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-bold text-error uppercase tracking-widest">Anomaly Detected In Simulation</p>
                    <p className="text-on-surface-variant font-body text-[14px] mt-1 px-4">Configuration 4-C leads to resonant oscillation in bearing housing. Failure likely within 48 hours of deployment.</p>
                  </div>
                  <button className="text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] font-mono text-[11px] font-bold hover:underline tracking-widest uppercase">View Failure Report</button>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO GRID EXTRA INFO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-panel p-4 flex items-center gap-4 rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div className="h-10 w-10 bg-[#00f0ff]/10 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">memory</span>
              </div>
              <div>
                <p className="font-mono text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Sim Engine Load</p>
                <p className="font-mono text-[12px] text-on-surface font-bold">CORE-7: 42%</p>
              </div>
            </div>
            <div className="glass-panel p-4 flex items-center gap-4 rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div className="h-10 w-10 bg-[#00f0ff]/10 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">cloud_done</span>
              </div>
              <div>
                <p className="font-mono text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Cloud Sync</p>
                <p className="font-mono text-[12px] text-on-surface font-bold">LAST: 2M AGO</p>
              </div>
            </div>
            <div className="glass-panel p-4 flex items-center gap-4 rounded-xl" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div className="h-10 w-10 bg-[#00f0ff]/10 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">history</span>
              </div>
              <div>
                <p className="font-mono text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Previous Iteration</p>
                <p className="font-mono text-[12px] text-on-surface font-bold">V.4.2.1-STABLE</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FLOATING BACKGROUND DECORATION */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
}
