"use client";
import React, { useEffect, useRef } from "react";
import { useAppContext } from "@/components/AppContext";

export default function AresLandingDark() {
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
      <canvas suppressHydrationWarning className="fixed inset-0 pointer-events-none z-[-1] opacity-40" id="particle-canvas"></canvas>

<header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
<div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary" >hexagon</span>
<span className="font-headline font-bold text-xl tracking-tight text-on-surface">CoreInsight</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href="#">Features</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href="#">Technology</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href="#">Case Studies</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:block outline-button px-4 py-2 rounded-md text-sm font-medium">Log In</button>
<button className="primary-button px-5 py-2 rounded-md text-sm font-bold shadow-lg shadow-[#065f46]/20">Request Demo</button>
</div>
</div>
</header>
<main>

<section className="relative pt-40 pb-20 overflow-hidden">

<div className="absolute inset-0 pointer-events-none opacity-20 hidden" ></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-8">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        SYSTEM V4.2 LIVE
                    </div>
<h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-6 text-on-surface">
                        Predict Failures Before They <span className="text-primary">Happen.</span>
</h1>
<p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-xl font-body">
                        ARES-1 leverages deep neural networks to process industrial telemetry in real-time, detecting micro-anomalies and preventing unplanned downtime before it impacts your bottom line.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="primary-button px-8 py-4 rounded-lg font-bold text-base flex items-center justify-center gap-2">
                            Deploy ARES-1
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
<button className="outline-button px-8 py-4 rounded-lg font-medium text-base flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">play_circle</span>
                            View Interactive Demo
                        </button>
</div>
</div>

<div className="relative perspective-1000 lg:h-[600px] flex items-center justify-center">
<div className="relative w-full max-w-lg aspect-[4/3] rounded-xl border border-outline-variant bg-surface-container overflow-hidden shadow-2xl shadow-[#065f46]/10" >

<div className="h-10 bg-surface-container-highest border-b border-outline-variant flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-outline"></div>
<div className="w-2.5 h-2.5 rounded-full bg-outline"></div>
<div className="w-2.5 h-2.5 rounded-full bg-outline"></div>
</div>
<span className="text-xs font-mono text-on-surface-variant ml-2">ares_mission_control.exe</span>
</div>

<div className="p-6 grid grid-cols-2 gap-4 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik00MCAwaC0xdjQwTTAgNDBWMzloNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI3MjcyYSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')]">
<div className="col-span-2 bg-surface border border-outline-variant rounded p-4 flex flex-col justify-between">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-mono text-on-surface-variant uppercase">Global Telemetry Flow</span>
<span className="text-xs font-mono text-secondary">99.98% UPTIME</span>
</div>
<div className="h-16 w-full flex items-end gap-1">
<div className="w-full bg-[#065f46]/40 h-[30%] rounded-t-sm border-t border-[#065f46] relative"><div className="absolute -top-1 right-0 w-2 h-2 bg-[#065f46] rounded-full"></div></div>
<div className="w-full bg-[#065f46]/40 h-[45%] rounded-t-sm border-t border-[#065f46] relative"><div className="absolute -top-1 right-0 w-2 h-2 bg-[#065f46] rounded-full"></div></div>
<div className="w-full bg-[#065f46]/40 h-[60%] rounded-t-sm border-t border-[#065f46] relative"><div className="absolute -top-1 right-0 w-2 h-2 bg-[#065f46] rounded-full"></div></div>
<div className="w-full bg-[#065f46]/40 h-[50%] rounded-t-sm border-t border-[#065f46] relative"><div className="absolute -top-1 right-0 w-2 h-2 bg-[#065f46] rounded-full"></div></div>
<div className="w-full bg-error/20 h-[85%] rounded-t-sm border-t border-error relative"><div className="absolute -top-1 right-0 w-2 h-2 bg-error rounded-full animate-ping"></div></div>
<div className="w-full bg-[#065f46]/40 h-[40%] rounded-t-sm border-t border-[#065f46] relative"><div className="absolute -top-1 right-0 w-2 h-2 bg-[#065f46] rounded-full"></div></div>
</div>
</div>
<div className="bg-surface border border-outline-variant rounded p-4">
<span className="text-[10px] font-mono text-on-surface-variant block mb-2">THERMAL LOAD</span>
<div className="text-2xl font-mono text-on-surface">428.5<span className="text-sm text-on-surface-variant">K</span></div>
</div>
<div className="bg-surface border border-outline-variant rounded p-4">
<span className="text-[10px] font-mono text-on-surface-variant block mb-2">PREDICTED FAILURE</span>
<div className="text-sm font-mono text-error">TURBINE B - 14H 22M</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-outline-variant/30 bg-surface-container-lowest/50 py-10">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-mono text-on-surface-variant mb-6 uppercase tracking-wider">Securing assets for industry leaders</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
<div className="flex items-center gap-2"><span className="material-symbols-outlined text-3xl">token</span><span className="font-headline font-bold text-xl">Nexus Corp</span></div>
<div className="flex items-center gap-2"><span className="material-symbols-outlined text-3xl">all_inclusive</span><span className="font-headline font-bold text-xl">Aether Heavy</span></div>
<div className="flex items-center gap-2"><span className="material-symbols-outlined text-3xl">change_history</span><span className="font-headline font-bold text-xl">Tri-State</span></div>
<div className="flex items-center gap-2"><span className="material-symbols-outlined text-3xl">blur_on</span><span className="font-headline font-bold text-xl">Omni</span></div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-on-surface">Industrial Intelligence. <br/><span className="text-primary">Without the noise.</span></h2>
<p className="text-on-surface-variant max-w-2xl font-body">Our architecture is designed for precision. No bloated dashboards—just actionable telemetry and predictive insights.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">

<div className="bento-card col-span-1 md:col-span-2 p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-[#065f46]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 w-full">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-primary text-3xl">monitor_heart</span>
<div className="flex gap-1">
<div className="w-1 h-4 bg-secondary rounded-full animate-pulse"></div>
<div className="w-1 h-6 bg-secondary rounded-full animate-pulse" ></div>
<div className="w-1 h-3 bg-secondary rounded-full animate-pulse" ></div>
</div>
</div>
<h3 className="font-headline text-xl font-bold text-on-surface mb-2">Real-Time Telemetry Processing</h3>
<p className="text-sm text-on-surface-variant">Ingest millions of data points per second with zero latency. Monitor thermal, kinetic, and fluid dynamics instantly.</p>
</div>
</div>

<div className="bento-card col-span-1 p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col">
<span className="material-symbols-outlined text-primary text-3xl mb-4">build_circle</span>
<h3 className="font-headline text-xl font-bold text-on-surface mb-2 mt-auto">Predictive Maintenance</h3>
<p className="text-sm text-on-surface-variant">Schedule repairs exactly when needed, maximizing component lifespan.</p>
</div>
</div>

<div className="bento-card col-span-1 p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col">
<span className="material-symbols-outlined text-primary text-3xl mb-4">psychology</span>
<div className="bg-surface-container-lowest border border-outline-variant p-3 rounded text-xs font-mono text-on-surface-variant mb-4 flex-grow">
<span className="text-primary">&gt;</span> analyzing_vector_data...<br/>
<span className="text-secondary">[SUCCESS]</span> anomaly_isolated<br/>
<span className="text-on-surface">Source: Valve X-99</span>
</div>
<h3 className="font-headline text-xl font-bold text-on-surface mb-2">AI Root Cause Analysis</h3>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-2 p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group">
<div className="flex-1 relative z-10">
<span className="material-symbols-outlined text-primary text-3xl mb-4">science</span>
<h3 className="font-headline text-xl font-bold text-on-surface mb-2">What-If Simulation Engine</h3>
<p className="text-sm text-on-surface-variant">Test operating parameters in a digital twin environment before applying them to physical hardware.</p>
</div>
<div className="flex-1 w-full bg-surface-container-lowest border border-outline-variant p-4 rounded-lg flex flex-col gap-4">
<div>
<div className="flex justify-between text-xs font-mono text-on-surface-variant mb-1"><span className="">PRESSURE</span><span className="">85%</span></div>
<div className="w-full bg-surface h-2 rounded-full overflow-hidden border border-outline-variant/50"><div className="bg-[#065f46] w-[85%] h-full"></div></div>
</div>
<div>
<div className="flex justify-between text-xs font-mono text-on-surface-variant mb-1"><span className="">TEMP_DELTA</span><span className="">42%</span></div>
<div className="w-full bg-surface h-2 rounded-full overflow-hidden border border-outline-variant/50"><div className="bg-[#065f46] w-[42%] h-full"></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-outline-variant/30">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-on-surface tracking-tight">Ready to eliminate unplanned downtime?</h2>
<p className="text-lg text-on-surface-variant mb-10 font-body">Join the industry leaders trusting ARES-1 to secure their operational continuity.</p>
<button className="primary-button px-10 py-5 rounded-lg font-bold text-lg inline-flex items-center justify-center gap-3 shadow-lg shadow-[#065f46]/20 hover:scale-[1.02] transition-transform">
                    Start Your Free Pilot
                    <span className="material-symbols-outlined">rocket_launch</span>
</button>
</div>
</section>
</main>

<footer className="border-t border-outline-variant/30 bg-surface-container-lowest py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-surface-variant">hexagon</span>
<span className="font-headline font-bold tracking-tight text-on-surface-variant">CoreInsight</span>
</div>
<nav className="flex gap-6 text-sm text-on-surface-variant"><a className="hover:text-primary transition-colors" href="#">About</a>
<a className="hover:text-primary transition-colors" href="#">Privacy</a>
<a className="hover:text-primary transition-colors" href="#">Terms</a></nav>
<div className="flex gap-4 text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">language</span></a>
<a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">share</span></a>
</div>
</div>
</footer>
<script dangerouslySetInnerHTML={{ __html: `
(function() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const mouse = { x: -1000, y: -1000 };
    const dotSpacing = 32;
    const glowRadius = 150;
    const brandColor = '#00e55b'; // primary-fixed-dim

    function init() {
        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        animate();
    }

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        createParticles();
    }

    function createParticles() {
        particles = [];
        for (let x = 0; x < width; x += dotSpacing) {
            for (let y = 0; y < height; y += dotSpacing) {
                particles.push({ x, y });
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < glowRadius) {
                const opacity = 1 - (dist / glowRadius);
                ctx.fillStyle = brandColor;
                ctx.globalAlpha = opacity;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.fillStyle = '#3b4b3a'; // outline-variant color
                ctx.globalAlpha = 0.3;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        requestAnimationFrame(animate);
    }

    init();
})();
` }} />
    </div>
  );
}
