"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, setTheme } = useAppContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number, height: number;
    let particles: { x: number; y: number }[] = [];
    const mouse = { x: -1000, y: -1000 };
    const dotSpacing = 32;
    const glowRadius = 150;

    // Fetch colors dynamically based on theme
    const computedStyle = getComputedStyle(document.documentElement);
    const brandColor = computedStyle.getPropertyValue('--particle-glow').trim() || (theme === 'dark' ? '#00e55b' : '#dae2fd');
    const outlineColor = computedStyle.getPropertyValue('--particle-outline').trim() || (theme === 'dark' ? '#3b4b3a' : '#c6c6cd');

    let animationFrameId: number;

    function init() {
      resize();
      window.addEventListener("resize", resize);
      window.addEventListener("mousemove", onMouseMove);
      animate();
    }

    function onMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function resize() {
      if (!canvas) return;
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
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < glowRadius) {
          const opacity = 1 - dist / glowRadius;
          ctx.fillStyle = brandColor;
          ctx.globalAlpha = opacity;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = outlineColor;
          ctx.globalAlpha = 0.3;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    init();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Re-run when theme changes so particles get new colors

  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-primary-container selection:text-on-primary-container font-body">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[-1] opacity-40"
        id="particle-canvas"
      ></canvas>

      {/* Floating Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              hexagon
            </span>
            <span className="font-headline font-bold text-xl tracking-tight text-on-surface">
              CoreInsight
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
              href="#"
            >
              Features
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
              href="#"
            >
              Technology
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
              href="#"
            >
              Case Studies
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
              href="#"
            >
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center"
              aria-label="Toggle theme"
            >
              <span className="material-symbols-outlined text-xl">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button className="hidden md:block outline-button px-4 py-2 rounded-md text-sm font-medium">
              Log In
            </button>
            <button className="primary-button px-5 py-2 rounded-md text-sm font-bold shadow-lg shadow-primary/20">
              Request Demo
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          {/* Background Grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20 hidden"
            style={{
              backgroundImage: "radial-gradient(var(--color-outline-variant) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          ></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                SYSTEM V4.2 LIVE
              </div>
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-6 text-on-surface">
                Predict Failures Before They <span className="text-secondary">Happen.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-xl font-body">
                ARES-1 leverages deep neural networks to process industrial telemetry in real-time, detecting micro-anomalies and preventing unplanned downtime before it impacts your bottom line.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard" className="primary-button px-8 py-4 rounded-lg font-bold text-base flex items-center justify-center gap-2">
                  Deploy ARES-1
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <button className="outline-button px-8 py-4 rounded-lg font-medium text-base flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                  View Interactive Demo
                </button>
              </div>
            </div>

            {/* 3D Mockup Container */}
            <div className="relative perspective-1000 lg:h-[600px] flex items-center justify-center">
              <div
                className="relative w-full max-w-lg aspect-[4/3] rounded-xl border border-outline-variant bg-surface-container overflow-hidden shadow-2xl shadow-primary/10"
                style={{
                  transform: "rotateY(-15deg) rotateX(10deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Mockup Header */}
                <div className="h-10 bg-surface-container-highest border-b border-outline-variant flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-outline"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-outline"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-outline"></div>
                  </div>
                  <span className="text-xs font-mono text-on-surface-variant ml-2">
                    ares_mission_control.exe
                  </span>
                </div>

                {/* Mockup Body */}
                <div className="p-6 grid grid-cols-2 gap-4 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik00MCAwaC0xdjQwTTAgNDBWMzloNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI3MjcyYSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] bg-surface">
                  <div className="col-span-2 bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-mono text-on-surface-variant uppercase">
                        Global Telemetry Flow
                      </span>
                      <span className="text-xs font-mono text-secondary">
                        99.98% UPTIME
                      </span>
                    </div>
                    <div className="h-16 w-full flex items-end gap-1">
                      <div className="w-full bg-primary/20 h-[30%] rounded-t-sm border-t border-primary relative">
                        <div className="absolute -top-1 right-0 w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <div className="w-full bg-primary/20 h-[45%] rounded-t-sm border-t border-primary relative">
                        <div className="absolute -top-1 right-0 w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <div className="w-full bg-primary/20 h-[60%] rounded-t-sm border-t border-primary relative">
                        <div className="absolute -top-1 right-0 w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <div className="w-full bg-primary/20 h-[50%] rounded-t-sm border-t border-primary relative">
                        <div className="absolute -top-1 right-0 w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <div className="w-full bg-error/20 h-[85%] rounded-t-sm border-t border-error relative">
                        <div className="absolute -top-1 right-0 w-2 h-2 bg-error rounded-full animate-ping"></div>
                      </div>
                      <div className="w-full bg-primary/20 h-[40%] rounded-t-sm border-t border-primary relative">
                        <div className="absolute -top-1 right-0 w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest border border-outline-variant rounded p-4">
                    <span className="text-[10px] font-mono text-on-surface-variant block mb-2">
                      THERMAL LOAD
                    </span>
                    <div className="text-2xl font-mono text-on-surface">
                      428.5<span className="text-sm text-on-surface-variant">K</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest border border-outline-variant rounded p-4">
                    <span className="text-[10px] font-mono text-on-surface-variant block mb-2">
                      PREDICTED FAILURE
                    </span>
                    <div className="text-sm font-mono text-error">TURBINE B - 14H 22M</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="border-y border-outline-variant/30 bg-surface-container-low py-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm font-mono text-on-surface-variant mb-6 uppercase tracking-wider">
              Securing assets for industry leaders
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl text-on-surface">token</span>
                <span className="font-headline font-bold text-xl text-on-surface">Nexus Corp</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl text-on-surface">all_inclusive</span>
                <span className="font-headline font-bold text-xl text-on-surface">Aether Heavy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl text-on-surface">change_history</span>
                <span className="font-headline font-bold text-xl text-on-surface">Tri-State</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl text-on-surface">blur_on</span>
                <span className="font-headline font-bold text-xl text-on-surface">Omni</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-on-surface">
              Industrial Intelligence. <br />
              <span className="text-secondary">Without the noise.</span>
            </h2>
            <p className="text-on-surface-variant max-w-2xl font-body">
              Our architecture is designed for precision. No bloated dashboards—just actionable telemetry and predictive insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* Feature 1: Real-Time Telemetry (Wide) */}
            <div className="bento-card col-span-1 md:col-span-2 p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 w-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">
                    monitor_heart
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-primary rounded-full animate-pulse"></div>
                    <div
                      className="w-1 h-6 bg-primary rounded-full animate-pulse"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-1 h-3 bg-primary rounded-full animate-pulse"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
                  Real-Time Telemetry Processing
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Ingest millions of data points per second with zero latency. Monitor thermal, kinetic, and fluid dynamics instantly.
                </p>
              </div>
            </div>

            {/* Feature 2: Predictive Maintenance */}
            <div className="bento-card col-span-1 p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col">
                <span className="material-symbols-outlined text-secondary text-3xl mb-4">
                  build_circle
                </span>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2 mt-auto">
                  Predictive Maintenance
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Schedule repairs exactly when needed, maximizing component lifespan.
                </p>
              </div>
            </div>

            {/* Feature 3: AI Root Cause Analysis */}
            <div className="bento-card col-span-1 p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col">
                <span className="material-symbols-outlined text-secondary text-3xl mb-4">
                  psychology
                </span>
                <div className="bg-surface-container-lowest border border-outline-variant p-3 rounded text-xs font-mono text-on-surface-variant mb-4 flex-grow">
                  <span className="text-secondary">&gt;</span> analyzing_vector_data...<br />
                  <span className="text-primary">[SUCCESS]</span> anomaly_isolated<br />
                  <span className="text-on-surface font-semibold">Source: Valve X-99</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
                  AI Root Cause Analysis
                </h3>
              </div>
            </div>

            {/* Feature 4: What-If Simulation Engine (Wide) */}
            <div className="bento-card col-span-1 md:col-span-2 p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group">
              <div className="flex-1 relative z-10">
                <span className="material-symbols-outlined text-secondary text-3xl mb-4">
                  science
                </span>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
                  What-If Simulation Engine
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Test operating parameters in a digital twin environment before applying them to physical hardware.
                </p>
              </div>
              <div className="flex-1 w-full bg-surface-container-lowest border border-outline-variant p-4 rounded-lg flex flex-col gap-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-on-surface-variant mb-1">
                    <span className="">PRESSURE</span>
                    <span className="">85%</span>
                  </div>
                  <div className="w-full bg-surface h-2 rounded-full overflow-hidden border border-outline-variant/50">
                    <div className="bg-primary w-[85%] h-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono text-on-surface-variant mb-1">
                    <span className="">TEMP_DELTA</span>
                    <span className="">42%</span>
                  </div>
                  <div className="w-full bg-surface h-2 rounded-full overflow-hidden border border-outline-variant/50">
                    <div className="bg-primary w-[42%] h-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t border-outline-variant/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-on-surface tracking-tight">
              Ready to eliminate unplanned downtime?
            </h2>
            <p className="text-lg text-on-surface-variant mb-10 font-body">
              Join the industry leaders trusting ARES-1 to secure their operational continuity.
            </p>
            <button className="primary-button px-10 py-5 rounded-lg font-bold text-lg inline-flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
              Start Your Free Pilot
              <span className="material-symbols-outlined">rocket_launch</span>
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-outline-variant/30 bg-surface-container-low py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-on-surface-variant">
              hexagon
            </span>
            <span className="font-headline font-bold tracking-tight text-on-surface-variant">
              CoreInsight
            </span>
          </div>
          <nav className="flex gap-6 text-sm text-on-surface-variant">
            <a className="hover:text-primary transition-colors" href="#">
              About
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Privacy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Terms
            </a>
          </nav>
          <div className="flex gap-4 text-on-surface-variant">
            <a className="hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-xl">language</span>
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
