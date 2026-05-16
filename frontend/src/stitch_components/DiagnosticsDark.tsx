"use client";
import React, { useEffect, useRef } from "react";
import { useAppContext } from "@/components/AppContext";

export default function DiagnosticsDark() {
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
      

<nav className="hidden md:flex flex-col h-full py-6 bg-surface-container-low dark:bg-surface-container-low/40 backdrop-blur-xl docked left-0 h-screen w-64 border-r border-outline-variant/10 z-40">
<div className="px-margin-desktop mb-8 flex items-center gap-4"><div className="flex flex-col gap-1"><h1 className="font-headline-md text-[28px] leading-none font-black text-primary-container tracking-tight">CORE<br/>INSIGHT</h1><p className="font-label-caps text-[10px] text-on-surface-variant/70 uppercase tracking-widest">V.4.0 ONLINE</p></div></div>
<div className="flex-1 flex flex-col gap-2 px-2 overflow-y-auto scrollbar-hide"><a className="flex items-center gap-4 text-on-surface-variant px-4 py-3 opacity-70 hover:bg-primary-container/5 hover:opacity-100 transition-all duration-200 hover:translate-x-1 rounded-lg" href="#"><span className="material-symbols-outlined">grid_view</span><span className="font-label-caps text-label-caps uppercase">Overview</span></a><a className="flex items-center gap-4 text-on-surface-variant px-4 py-3 opacity-70 hover:bg-primary-container/5 hover:opacity-100 transition-all duration-200 hover:translate-x-1 rounded-lg" href="#"><span className="material-symbols-outlined">show_chart</span><span className="font-label-caps text-label-caps uppercase">Live Telemetry</span></a><a className="flex items-center gap-4 bg-[#00f0ff]/10 text-primary-container px-4 py-3 border-l-[3px] border-[#00f0ff] shadow-[inset_4px_0_15px_-4px_rgba(0,240,255,0.4)] transition-all duration-200 rounded-r-sm" href="#"><span className="material-symbols-outlined text-xl">query_stats</span><span className="font-label-caps text-label-caps uppercase">Diagnostics</span></a><a className="flex items-center gap-4 text-on-surface-variant px-4 py-3 opacity-70 hover:bg-primary-container/5 hover:opacity-100 transition-all duration-200 hover:translate-x-1 rounded-lg" href="#"><span className="material-symbols-outlined">science</span><span className="font-label-caps text-label-caps uppercase">Simulation Lab</span></a><a className="flex items-center gap-4 text-on-surface-variant px-4 py-3 opacity-70 hover:bg-primary-container/5 hover:opacity-100 transition-all duration-200 hover:translate-x-1 rounded-lg" href="#"><span className="material-symbols-outlined">build</span><span className="font-label-caps text-label-caps uppercase">Maintenance Hub</span></a></div>
<div className="mt-auto px-4 pt-6 border-t border-outline-variant/10 flex flex-col gap-4">
<button className="w-full py-3 bg-[#00f0ff] text-black font-label-caps text-label-caps uppercase font-bold rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:brightness-110 transition-all">
        Generate Report
    </button>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 text-on-surface-variant/60 py-2 hover:text-on-surface transition-colors" href="#">
<span className="material-symbols-outlined text-lg">terminal</span>
<span className="font-label-caps text-label-caps uppercase text-[10px]">System Logs</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant/60 py-2 hover:text-on-surface transition-colors" href="#">
<span className="material-symbols-outlined text-lg">settings</span>
<span className="font-label-caps text-label-caps uppercase text-[10px]">Settings</span>
</a>
</div>
<div className="flex items-center gap-3 py-4 border-t border-outline-variant/5"><span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.8)]"></span><div className="flex flex-col"><span className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase tracking-tighter">System Status:</span><span className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase tracking-tighter">Online</span></div></div>
</div>
</nav>

<div className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="flex justify-between items-center w-full bg-surface-container dark:bg-surface-container/30 backdrop-blur-xl docked full-width top-0 z-50 h-16 border-b border-outline-variant/20 absolute px-6" ><div className="flex items-center gap-8">
<div className="flex items-center">
<h1 className="text-primary-container font-black tracking-widest text-lg" >INSIGHT MONITOR</h1>
</div>
<nav className="flex items-center gap-6">
<a className="relative text-primary-container font-bold text-xs uppercase tracking-wider py-1" href="#" >
      Real-time
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-container"></span>
</a>
<a className="text-on-surface-variant hover:text-on-surface transition-colors font-bold text-xs uppercase tracking-wider" href="#" >History</a>
<a className="text-on-surface-variant hover:text-on-surface transition-colors font-bold text-xs uppercase tracking-wider" href="#" >Nodes</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="px-4 py-1 border border-[#441d1d] bg-[#1a0a0a] text-[#ffb4ab] font-bold text-[10px] uppercase tracking-[0.2em] rounded-sm hover:bg-[#2a1111] transition-colors">
    EMERGENCY SHUTDOWN
  </button>
<div className="flex items-center gap-1 ml-4">
<button className="w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[20px]">dark_mode</span>
</button>
<button className="w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[20px]">notifications</span>
</button>
<button className="w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[20px]">account_circle</span>
</button>
</div>
</div></header>

<main className="flex-1 mt-16 flex overflow-hidden max-h-[calc(100vh-64px)]">

<aside className="w-[30%] min-w-[320px] flex flex-col gap-4 overflow-y-auto scrollbar-hide pb-8 px-6 pt-6 border-r border-outline-variant/10">
<h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-primary-container">radar</span>
                    Root Cause Radar
                </h2>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between border-b border-error/20 pb-2">
<span className="font-label-caps text-label-caps text-error uppercase tracking-widest">Current Active Causes</span>
<span className="font-data-sm text-data-sm text-error/70">1 Critical</span>
</div>
<div className="glass-overlay rounded-lg p-4 border-error/30 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-error pulse-crimson"></div>
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-error pulse-crimson shadow-[0_0_8px_rgba(255,180,171,0.6)]"></span>
<h3 className="font-body-sm text-body-sm font-semibold text-on-surface">Impending Bearing Failure</h3>
</div>
<span className="material-symbols-outlined text-error/80 text-sm">warning</span>
</div>
<div className="font-data-sm text-data-sm text-on-surface-variant mb-4 bg-black/20 p-2 rounded border border-white/5">
<span className="text-error/90">ERR_CODE:</span> BRG_VIB_XR9
                        </div>
<button className="w-full py-2 bg-error/10 hover:bg-error/20 border border-error/30 text-error font-body-sm text-body-sm rounded flex items-center justify-center gap-2 transition-colors">
<span className="material-symbols-outlined text-sm">smart_toy</span>
                            Ask AI to Explain
                        </button>
</div>
</div>

<div className="flex flex-col gap-3 mt-6">
<div className="flex items-center justify-between border-b border-secondary-container/20 pb-2">
<span className="font-label-caps text-label-caps text-secondary-container uppercase tracking-widest">Predicted Future Risks</span>
<span className="font-data-sm text-data-sm text-secondary-container/70">T-48hrs</span>
</div>
<div className="glass-panel rounded-lg p-4 border-secondary-container/20 border-l-4 hover:bg-white/[0.04] transition-colors">
<div className="flex justify-between items-start mb-3">
<h3 className="font-body-sm text-body-sm font-semibold text-on-surface text-secondary-container">Flow Rate Drop Detected</h3>
<span className="material-symbols-outlined text-secondary-container/80 text-sm">trending_down</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-2">
                            Possible Valve Blockage in Main Coolant Line A. Probability: 87%.
                        </p>
<button className="w-full py-2 bg-transparent hover:bg-secondary-container/10 border border-secondary-container/50 text-secondary-container font-body-sm text-body-sm rounded flex items-center justify-center gap-2 transition-colors">
<span className="material-symbols-outlined text-sm">science</span>
                            Run What-If Simulation
                        </button>
</div>
<div className="glass-panel rounded-lg p-4 border-outline-variant/20 hover:bg-white/[0.04] transition-colors opacity-60">
<div className="flex justify-between items-start mb-2">
<h3 className="font-body-sm text-body-sm text-on-surface">Thermal Drift</h3>
<span className="font-data-sm text-data-sm text-outline">T-120hrs</span>
</div>
<p className="font-data-sm text-data-sm text-on-surface-variant">Sensor Array B2 showing minor calibration drift.</p>
</div>
</div>
</aside>

<section className="flex-1 glass-panel flex flex-col overflow-hidden relative border-t border-primary-container/20" >

<div className="px-6 py-4 border-b border-white/5 bg-black/20 flex items-center justify-between shrink-0">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container">terminal</span>
<h2 className="font-body-lg text-body-lg font-semibold text-on-surface">AI Diagnostic Terminal</h2>
</div>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-outline-variant"></span>
<span className="w-2 h-2 rounded-full bg-outline-variant"></span>
<span className="w-2 h-2 rounded-full bg-primary-container glow-cyan-inner"></span>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 scrollbar-hide">

<div className="flex justify-end w-full">
<div className="max-w-[70%] bg-surface-variant border border-outline-variant/30 text-on-surface p-4 rounded-xl rounded-tr-sm shadow-lg">
<p className="font-body-sm text-body-sm">Explain the bearing failure drivers.</p>
</div>
</div>

<div className="flex justify-start w-full">
<div className="flex gap-4 max-w-[90%]">
<div className="w-8 h-8 rounded bg-primary-container/10 border border-primary-container/30 flex items-center justify-center shrink-0 mt-1">
<span className="material-symbols-outlined text-primary-container text-sm" >smart_toy</span>
</div>
<div className="flex flex-col gap-3">
<div className="text-on-surface font-body-sm text-body-sm pt-1">
                                    The anomaly is driven by a 3.2x deviation in <code className="font-data-sm text-data-sm text-primary-container bg-primary-container/10 px-1 rounded border border-primary-container/20">vibration_rms</code>.
                                </div>

<div className="bg-[#05070A] rounded-lg border border-white/10 overflow-hidden w-full shadow-2xl">
<div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-error/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-secondary-container/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-primary-container/80"></div>
</div>
<span className="font-data-sm text-data-sm text-outline-variant">payload.json</span>
<button className="text-outline hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-sm">content_copy</span>
</button>
</div>
<div className="p-4 overflow-x-auto">
<pre className="font-data-sm text-data-sm leading-relaxed"><code className="text-on-surface-variant">{"{"}
  <span className="text-primary-fixed-dim">"endpoint"</span>: <span className="text-[#a8e6cf]">"/explain"</span>,
  <span className="text-primary-fixed-dim">"context"</span>: <span className="text-[#a8e6cf]">"Bearing Failure RCA"</span>,
  <span className="text-primary-fixed-dim">"failure_probability"</span>: <span className="text-secondary-container">0.942</span>,
  <span className="text-primary-fixed-dim">"top_failure_features"</span>: [
    {"{"}<span className="text-primary-fixed-dim">"feature"</span>: <span className="text-[#a8e6cf]">"vibration_rms"</span>, <span className="text-primary-fixed-dim">"contribution"</span>: <span className="text-secondary-container">0.65</span>{"}"},
    {"{"}<span className="text-primary-fixed-dim">"feature"</span>: <span className="text-[#a8e6cf]">"bearing_temp_c"</span>, <span className="text-primary-fixed-dim">"contribution"</span>: <span className="text-secondary-container">0.22</span>{"}"}
  ],
  <span className="text-primary-fixed-dim">"anomaly_feature_deviations"</span>: [
    {"{"}<span className="text-primary-fixed-dim">"sensor"</span>: <span className="text-[#a8e6cf]">"vibration_rms"</span>, <span className="text-primary-fixed-dim">"expected"</span>: <span className="text-secondary-container">5.2</span>, <span className="text-primary-fixed-dim">"actual"</span>: <span className="text-secondary-container">14.8</span>, <span className="text-primary-fixed-dim">"severity"</span>: <span className="text-error">"CRITICAL"</span>{"}"}
  ]
{"}"}</code></pre>
</div>
</div>
<button className="flex items-center gap-1 font-label-caps text-label-caps text-outline hover:text-primary-container transition-colors w-fit">
<span className="material-symbols-outlined text-sm">chevron_right</span>
                                    Show Raw Telemetry JSON
                                </button>
</div>
</div>
</div>
</div>

<div className="p-4 bg-black/40 border-t border-white/5 backdrop-blur-md shrink-0">

<div className="flex gap-2 mb-3 overflow-x-auto scrollbar-hide pb-1">
<button className="shrink-0 px-3 py-1.5 rounded-full border border-primary-container/30 bg-primary-container/5 text-primary-container hover:bg-primary-container/10 font-label-caps text-label-caps transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                            Analyze Valve Blockage
                        </button>
<button className="shrink-0 px-3 py-1.5 rounded-full border border-outline-variant/50 bg-white/5 text-on-surface-variant hover:bg-white/10 font-label-caps text-label-caps transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">data_object</span>
                            Show Bearing Data JSON
                        </button>
</div>

<div className="relative flex items-center">
<input className="w-full bg-[#0A0E17]/80 border border-outline-variant/30 rounded-lg pl-4 pr-12 py-3 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/50 transition-all shadow-inner" placeholder="Query the RCA, run predictions, or ask for raw JSON..." type="text"/>
<button className="absolute right-2 w-8 h-8 rounded bg-primary-container text-black flex items-center justify-center hover:bg-primary transition-colors shadow-[0_0_10px_rgba(0,240,255,0.4)]">
<span className="material-symbols-outlined text-sm" >send</span>
</button>
</div>
</div>
</section>
</main>
</div>

    </div>
  );
}
