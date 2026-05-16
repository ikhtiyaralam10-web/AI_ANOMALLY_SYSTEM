"use client";
import React, { useEffect, useRef } from "react";
import { useAppContext } from "@/components/AppContext";

export default function DiagnosticsLight() {
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
      

<header className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-lg bg-surface/90 backdrop-blur-md h-16 border-b border-outline-variant">
<div className="flex items-center gap-md">
<span className="font-headline-lg text-headline-lg font-bold tracking-tight text-on-surface">CORE INSIGHT</span>
</div>
<nav className="hidden md:flex flex-1 justify-center gap-lg">
<a className="text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors duration-150 px-sm py-xs rounded" href="#">Real-time</a>
<a className="text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors duration-150 px-sm py-xs rounded" href="#">History</a>
<a className="text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors duration-150 px-sm py-xs rounded" href="#">Nodes</a>
</nav>
<div className="flex items-center gap-md">
<button className="bg-[#0f172a] text-[#00f0ff] px-md py-sm rounded border border-transparent hover:border-[#00f0ff] transition-all font-label-caps text-label-caps" >Emergency Shutdown</button>
<button className="text-on-surface-variant hover:bg-surface-container-high p-sm rounded-full transition-colors duration-150">
<span className="material-symbols-outlined" >notifications</span>
</button>
<button className="text-on-surface-variant hover:bg-surface-container-high p-sm rounded-full transition-colors duration-150">
<span className="material-symbols-outlined" >settings</span>
</button>
<div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center overflow-hidden ml-sm cursor-pointer hover:ring-1 ring-primary transition-all">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="Close up professional headshot of an individual, bright natural lighting, modern corporate environment, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB43FUUE4RIghnDoatGeh4BfWqHxAVNBP_ZOQZoTOyW636-mIWT2NTwe3ktcct2t1fvR10rfY8foCOtPn0NXpodpWEL_WwLIL2A__xUiWrpi90QUAtyp5GRvm-1jWBpZnqydv43AV0V0UL-6ZgYr_DMFIgfzWbIosActanpOd5qswnY5MzXQ6UQs28Q7nwPaljiIMGVCcF1uvUScRpkTPf8Ex-Y5gHgyBNKv5WuMsyqnBZwle9UBz4EvvNgEHeu17qdM1OYpDQFN4Q"/>
</div>
</div>
</header>

<div className="flex h-screen pt-16">

<aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 z-30 flex flex-col pt-lg pb-xl bg-surface border-r border-outline-variant">
<div className="px-lg mb-xl">
<div className="flex items-center gap-sm mb-sm">
<div className="w-10 h-10 rounded border border-outline-variant bg-surface-container-low flex items-center justify-center">
<span className="material-symbols-outlined text-primary">dns</span>
</div>
<div>
<div className="font-label-caps text-label-caps font-bold text-on-surface">CORE_SYS_01</div>
<div className="font-mono-data text-mono-data text-on-surface-variant text-[10px]">V.2.4.0_STABLE</div>
</div>
</div>
</div>
<nav className="flex-1 flex flex-col gap-xs px-sm">
<a className="flex items-center gap-md px-md py-sm rounded-r-none text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200" href="#">
<span className="material-symbols-outlined" >dashboard</span>
<span className="font-label-caps text-label-caps">Overview</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-r-none text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200" href="#">
<span className="material-symbols-outlined" >analytics</span>
<span className="font-label-caps text-label-caps">Telemetry</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-r-none bg-secondary-container/20 text-primary border-r-4 border-primary translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined" >biotech</span>
<span className="font-label-caps text-label-caps">Diagnostics</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-r-none text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200" href="#">
<span className="material-symbols-outlined" >science</span>
<span className="font-label-caps text-label-caps">Simulation Lab</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-r-none text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200" href="#">
<span className="material-symbols-outlined" >engineering</span>
<span className="font-label-caps text-label-caps">Maintenance Hub</span>
</a>
</nav>
</aside>

<main className="flex-1 ml-64 p-lg overflow-y-auto bg-surface-container-low">
<div className="flex gap-lg h-full">

<div className="w-1/3 flex flex-col gap-md">
<h2 className="font-title-md text-title-md text-on-surface pb-sm border-b border-outline-variant">Root Cause Radar</h2>
<div className="flex flex-col gap-sm overflow-y-auto pr-sm">

<div className="bg-error-container border border-error rounded p-md cursor-pointer hover:shadow-sm transition-shadow">
<div className="flex justify-between items-start mb-sm">
<div className="flex items-center gap-xs text-error">
<span className="material-symbols-outlined text-[18px]" >warning</span>
<span className="font-label-caps text-label-caps">CRITICAL</span>
</div>
<span className="font-mono-data text-mono-data text-error">98% PROBABILITY</span>
</div>
<h3 className="font-title-md text-title-md text-on-error-container mb-xs">Impending Bearing Failure</h3>
<p className="font-body-sm text-body-sm text-on-error-container/80 mb-sm">Excessive vibration detected in primary centrifuge spindle. Immediate intervention required to prevent catastrophic failure.</p>
<div className="flex gap-xs mt-auto">
<span className="bg-surface/50 text-on-error-container font-mono-data text-mono-data px-xs py-[2px] rounded text-[10px]">NODE: CF-04</span>
<span className="bg-surface/50 text-on-error-container font-mono-data text-mono-data px-xs py-[2px] rounded text-[10px]">VIB: 14.2 mm/s</span>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded p-md cursor-pointer hover:border-primary transition-colors">
<div className="flex justify-between items-start mb-sm">
<div className="flex items-center gap-xs text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">build</span>
<span className="font-label-caps text-label-caps">ELEVATED RISK</span>
</div>
<span className="font-mono-data text-mono-data text-on-surface-variant">64% PROBABILITY</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-xs">Thermal Gradient Anomaly</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-sm">Cooling loop 2 showing reduced efficiency. Potential coolant flow restriction or sensor drift.</p>
<div className="flex gap-xs mt-auto">
<span className="bg-surface-container text-on-surface font-mono-data text-mono-data px-xs py-[2px] rounded text-[10px]">NODE: CL-02</span>
<span className="bg-surface-container text-on-surface font-mono-data text-mono-data px-xs py-[2px] rounded text-[10px]">DELTA-T: 4.8°C</span>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded p-md cursor-pointer hover:border-primary transition-colors">
<div className="flex justify-between items-start mb-sm">
<div className="flex items-center gap-xs text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">network_check</span>
<span className="font-label-caps text-label-caps">MODERATE RISK</span>
</div>
<span className="font-mono-data text-mono-data text-on-surface-variant">32% PROBABILITY</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-xs">Data Latency Spike</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-sm">Intermittent packet loss detected on secondary diagnostic bus. Monitoring required.</p>
<div className="flex gap-xs mt-auto">
<span className="bg-surface-container text-on-surface font-mono-data text-mono-data px-xs py-[2px] rounded text-[10px]">BUS: DIAG-B</span>
<span className="bg-surface-container text-on-surface font-mono-data text-mono-data px-xs py-[2px] rounded text-[10px]">LOSS: 0.4%</span>
</div>
</div>
</div>
</div>

<div className="w-2/3 flex flex-col gap-md bg-surface-container-lowest border border-outline-variant rounded shadow-sm overflow-hidden">

<div className="flex items-center justify-between px-md py-sm border-b border-outline-variant bg-surface-container-high">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
<span className="font-label-caps text-label-caps text-on-surface">AI DIAGNOSTIC TERMINAL // CF-04</span>
</div>
<div className="flex gap-xs">
<button className="p-xs text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[16px]">content_copy</span></button>
<button className="p-xs text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[16px]">open_in_full</span></button>
</div>
</div>

<div className="flex-1 bg-[#1e293b] p-md overflow-y-auto font-mono-data text-[13px] text-[#e2e8f0] leading-relaxed relative">
<div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" ></div>
<pre><code>{"{"}
  "diagnostic_request": "CF-04_VIB_ANALYSIS",
  "timestamp": "2024-05-20T14:32:01Z",
  "status": "PROCESSING_COMPLETE",
  "ai_confidence": 0.984,
  "payload": {"{"}
    "sensor_data": {"{"}
      "x_axis": [12.4, 13.1, 14.2, 14.5, 15.0],
      "y_axis": [8.2, 8.5, 9.1, 9.8, 10.2],
      "z_axis": [4.1, 4.3, 4.2, 4.5, 4.8]
    {"}"},
    "fft_analysis": {"{"}
      "dominant_frequency_hz": 120.5,
      "harmonics_detected": true,
      "harmonic_ratio": 2.4
    {"}"},
    "historical_correlation": {"{"}
      "match_found": true,
      "reference_id": "INC-2023-08-14-A",
      "similarity_score": 0.92
    {"}"},
    "recommendation": [
      "INITIATE CONTROLLED SHUTDOWN SEQUENCE CF-04",
      "DISPATCH MAINTENANCE CREW FOR BEARING REPLACEMENT",
      "INSPECT SECONDARY SHAFT FOR MISALIGNMENT"
    ]
  {"}"}
{"}"}</code></pre>
</div>

<div className="p-md border-t border-outline-variant bg-surface">
<div className="flex flex-col gap-sm mb-md h-32 overflow-y-auto">

<div className="flex gap-sm items-start">
<div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center shrink-0 border border-primary/30">
<span className="material-symbols-outlined text-[14px] text-primary">smart_toy</span>
</div>
<div className="bg-surface-container-low p-sm rounded border border-outline-variant text-body-sm text-on-surface">
                                    Analysis complete. The vibration signature strongly correlates with inner race bearing degradation. I recommend immediate scheduled downtime to prevent secondary damage to the main shaft.
                                </div>
</div>

<div className="flex gap-sm items-start flex-row-reverse">
<div className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center shrink-0 border border-outline-variant">
<span className="material-symbols-outlined text-[14px] text-on-surface-variant">person</span>
</div>
<div className="bg-secondary-container/20 p-sm rounded border border-secondary/30 text-body-sm text-on-surface text-right">
                                    Generate the maintenance work order and attach this diagnostic payload.
                                </div>
</div>
</div>

<div className="relative">
<input className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface placeholder-on-surface-variant text-body-sm rounded pl-md pr-12 py-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Query AI assistant or enter command..." type="text"/>
<button className="absolute right-sm top-1/2 -translate-y-1/2 text-primary hover:text-primary-container p-xs rounded transition-colors">
<span className="material-symbols-outlined">send</span>
</button>
</div>
</div>
</div>
</div>
</main>
</div>

    </div>
  );
}
