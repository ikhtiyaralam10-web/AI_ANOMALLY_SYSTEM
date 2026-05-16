"use client";
import React from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";

export default function DiagnosticsDark() {
  const { theme, setTheme } = useAppContext();

  return (
    <div className="dashboard-dark-theme font-body min-h-screen flex overflow-hidden bg-[#0A0E17] text-on-surface">
      {/* Side Navigation Shell */}
      <nav className="h-screen w-[15%] fixed left-0 top-0 bg-surface-container-low/40 backdrop-blur-xl border-r border-outline-variant/10 flex flex-col py-gutter px-4 z-50">
        <div className="mb-8 mt-4">
          <Link href="/">
            <h1 className="font-headline text-3xl font-bold text-primary-container tracking-tighter uppercase">CORE<div>INSIGHT</div></h1>
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
          <a className="flex items-center space-x-3 p-3 rounded text-primary-container bg-primary-container/10 border-l-[3px] border-[#00f0ff] shadow-[inset_4px_0_15px_-4px_rgba(0,240,255,0.4)] font-bold font-mono text-[11px] scale-95 duration-100" href="/diagnostics">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>query_stats</span>
            <span>Diagnostics</span>
          </a>
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant/20 hover:text-primary transition-all" href="/simulation-lab">
            <span className="material-symbols-outlined">science</span>
            <span>Simulation Lab</span>
          </Link>
          <a className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant/20 hover:text-primary transition-all" href="#">
            <span className="material-symbols-outlined">build</span>
            <span>Maintenance Hub</span>
          </a>
        </div>
        <div className="mt-auto pt-4 border-t border-outline-variant/10">
          <button className="w-full mb-4 bg-primary-container text-on-primary-fixed font-mono text-[11px] font-bold py-3 rounded hover:bg-primary transition-colors shadow-[0_0_20px_rgba(0,240,255,0.2)]">
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
            <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]"></div>
            <div className="flex flex-col">
              <span className="text-[10px] opacity-70 uppercase tracking-tighter">System Status:</span>
              <span className="text-[10px] text-primary-container font-bold uppercase tracking-tighter">Online</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Top AppBar Shell */}
      <header className="fixed top-0 left-[15%] h-16 bg-surface-container/30 backdrop-blur-xl border-b border-outline-variant/20 flex items-center justify-between px-6 z-40 transition-all duration-200" style={{ width: "calc(100% - 15%)" }}>
        {/* Branding Left */}
        <div className="flex flex-col">
          <h2 className="font-mono text-[18px] font-bold text-primary-container tracking-widest uppercase">Insight Monitor</h2>
        </div>

        {/* Navigation Center */}
        <nav className="hidden md:flex space-x-8 font-mono text-[11px] absolute left-1/2 -translate-x-1/2 items-center h-full">
          <a className="text-primary-container border-b-2 border-primary-container h-full flex items-center px-1 font-bold uppercase" href="#">Real-time</a>
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
      <main className="ml-[15%] mt-16 flex-1 flex overflow-hidden w-full h-[calc(100vh-64px)]">
        {/* Left Pane: Root Cause Radar (30%) */}
        <aside className="w-[30%] min-w-[320px] flex flex-col gap-4 overflow-y-auto pb-8 px-6 pt-6 border-r border-outline-variant/10">
          <h2 className="font-headline text-2xl text-on-surface flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary-container">radar</span>
            Root Cause Radar
          </h2>

          {/* Section A: Current Active Causes */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-error/20 pb-2">
              <span className="font-mono text-[11px] text-error font-bold uppercase tracking-widest">Current Active Causes</span>
              <span className="font-mono text-[12px] text-error/70">1 Critical</span>
            </div>

            <div className="glass-overlay rounded-lg p-4 border-error/30 relative overflow-hidden group" style={{ background: "rgba(255, 255, 255, 0.06)", backdropFilter: "blur(20px)", border: "1px solid rgba(255, 255, 255, 0.15)" }}>
              <div className="absolute top-0 left-0 w-1 h-full bg-error animate-pulse shadow-[0_0_10px_4px_rgba(255,180,171,0.1)]"></div>
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-error animate-pulse shadow-[0_0_8px_rgba(255,180,171,0.6)]"></span>
                  <h3 className="font-body text-[14px] font-semibold text-on-surface">Impending Bearing Failure</h3>
                </div>
                <span className="material-symbols-outlined text-error/80 text-sm">warning</span>
              </div>
              <div className="font-mono text-[12px] text-on-surface-variant mb-4 bg-black/20 p-2 rounded border border-white/5">
                <span className="text-error/90">ERR_CODE:</span> BRG_VIB_XR9
              </div>
              <button className="w-full py-2 bg-error/10 hover:bg-error/20 border border-error/30 text-error font-body text-[14px] rounded flex items-center justify-center gap-2 transition-colors">
                <span className="material-symbols-outlined text-sm">smart_toy</span>
                Ask AI to Explain
              </button>
            </div>
          </div>

          {/* Section B: Predicted Future Risks */}
          <div className="flex flex-col gap-3 mt-6">
            <div className="flex items-center justify-between border-b border-secondary-container/20 pb-2">
              <span className="font-mono text-[11px] font-bold text-secondary-container uppercase tracking-widest">Predicted Future Risks</span>
              <span className="font-mono text-[12px] text-secondary-container/70">T-48hrs</span>
            </div>

            <div className="glass-panel rounded-lg p-4 border-secondary-container/20 border-l-4 border-l-secondary-container hover:bg-white/[0.04] transition-colors" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)" }}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-body text-[14px] font-semibold text-secondary-container">Flow Rate Drop Detected</h3>
                <span className="material-symbols-outlined text-secondary-container/80 text-sm">trending_down</span>
              </div>
              <p className="font-body text-[14px] text-on-surface-variant mb-4 line-clamp-2">
                Possible Valve Blockage in Main Coolant Line A. Probability: 87%.
              </p>
              <button className="w-full py-2 bg-transparent hover:bg-secondary-container/10 border border-secondary-container/50 text-secondary-container font-body text-[14px] rounded flex items-center justify-center gap-2 transition-colors">
                <span className="material-symbols-outlined text-sm">science</span>
                Run What-If Simulation
              </button>
            </div>

            <div className="glass-panel rounded-lg p-4 border border-outline-variant/20 hover:bg-white/[0.04] transition-colors opacity-60" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)" }}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-body text-[14px] text-on-surface">Thermal Drift</h3>
                <span className="font-mono text-[12px] text-outline">T-120hrs</span>
              </div>
              <p className="font-mono text-[12px] text-on-surface-variant">Sensor Array B2 showing minor calibration drift.</p>
            </div>
          </div>
        </aside>

        {/* Right Pane: AI Diagnostic Terminal (70%) */}
        <section className="flex-1 glass-panel flex flex-col overflow-hidden relative border-t border-primary-container/20 border-l border-l-outline-variant/10 rounded-none" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)" }}>
          {/* Terminal Header */}
          <div className="px-6 py-4 border-b border-white/5 bg-black/20 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container">terminal</span>
              <h2 className="font-body text-[16px] font-semibold text-on-surface">AI Diagnostic Terminal</h2>
            </div>
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
              <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
              <span className="w-2 h-2 rounded-full bg-primary-container shadow-[inset_0_0_10px_rgba(0,240,255,0.2)]"></span>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
            {/* User Bubble */}
            <div className="flex justify-end w-full">
              <div className="max-w-[70%] bg-surface-variant border border-outline-variant/30 text-on-surface p-4 rounded-xl rounded-tr-sm shadow-lg">
                <p className="font-body text-[14px]">Explain the bearing failure drivers.</p>
              </div>
            </div>

            {/* AI Assistant Bubble */}
            <div className="flex justify-start w-full">
              <div className="flex gap-4 max-w-[90%] w-full">
                <div className="w-8 h-8 rounded bg-primary-container/10 border border-primary-container/30 flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>smart_toy</span>
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <div className="text-on-surface font-body text-[14px] pt-1">
                    The anomaly is driven by a 3.2x deviation in <code className="font-mono text-[12px] text-primary-container bg-primary-container/10 px-1 rounded border border-primary-container/20">vibration_rms</code>.
                  </div>

                  {/* JSON Code Block */}
                  <div className="bg-[#05070A] rounded-lg border border-white/10 overflow-hidden w-full shadow-2xl">
                    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-error/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-secondary-container/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-primary-container/80"></div>
                      </div>
                      <span className="font-mono text-[12px] text-outline-variant">payload.json</span>
                      <button className="text-outline hover:text-on-surface transition-colors">
                        <span className="material-symbols-outlined text-sm">content_copy</span>
                      </button>
                    </div>
                    <div className="p-4 overflow-x-auto">
                      <pre className="font-mono text-[12px] leading-relaxed"><code className="text-on-surface-variant">{`{
  "`}<span className="text-primary">endpoint</span>{`": "`}<span className="text-[#a8e6cf]">/explain</span>{`",
  "`}<span className="text-primary">context</span>{`": "`}<span className="text-[#a8e6cf]">Bearing Failure RCA</span>{`",
  "`}<span className="text-primary">failure_probability</span>{`": `}<span className="text-secondary-container">0.942</span>{`,
  "`}<span className="text-primary">top_failure_features</span>{`": [
    {"`}<span className="text-primary">feature</span>{`": "`}<span className="text-[#a8e6cf]">vibration_rms</span>{`", "`}<span className="text-primary">contribution</span>{`": `}<span className="text-secondary-container">0.65</span>{`},
    {"`}<span className="text-primary">feature</span>{`": "`}<span className="text-[#a8e6cf]">bearing_temp_c</span>{`", "`}<span className="text-primary">contribution</span>{`": `}<span className="text-secondary-container">0.22</span>{`}
  ],
  "`}<span className="text-primary">anomaly_feature_deviations</span>{`": [
    {"`}<span className="text-primary">sensor</span>{`": "`}<span className="text-[#a8e6cf]">vibration_rms</span>{`", "`}<span className="text-primary">expected</span>{`": `}<span className="text-secondary-container">5.2</span>{`, "`}<span className="text-primary">actual</span>{`": `}<span className="text-secondary-container">14.8</span>{`, "`}<span className="text-primary">severity</span>{`": "`}<span className="text-error">CRITICAL</span>{`"}
  ]
}`}</code></pre>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 font-mono text-[11px] font-bold text-outline hover:text-primary-container transition-colors w-fit uppercase">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    Show Raw Telemetry JSON
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area (Bottom) */}
          <div className="p-4 bg-black/40 border-t border-white/5 backdrop-blur-md shrink-0">
            {/* Context Chips */}
            <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
              <button className="shrink-0 px-3 py-1.5 rounded-full border border-primary-container/30 bg-primary-container/5 text-primary-container hover:bg-primary-container/10 font-mono text-[11px] font-bold uppercase transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                Analyze Valve Blockage
              </button>
              <button className="shrink-0 px-3 py-1.5 rounded-full border border-outline-variant/50 bg-white/5 text-on-surface-variant hover:bg-white/10 font-mono text-[11px] font-bold uppercase transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">data_object</span>
                Show Bearing Data JSON
              </button>
            </div>

            {/* Input Bar */}
            <div className="relative flex items-center">
              <input 
                className="w-full bg-[#0A0E17]/80 border border-outline-variant/30 rounded-lg pl-4 pr-12 py-3 font-body text-[14px] text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/50 transition-all shadow-inner" 
                placeholder="Query the RCA, run predictions, or ask for raw JSON..." 
                type="text"
              />
              <button className="absolute right-2 w-8 h-8 rounded bg-primary-container text-black flex items-center justify-center hover:bg-primary transition-colors shadow-[0_0_10px_rgba(0,240,255,0.4)]">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>send</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
