"use client";
import React from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";

export default function MaintenanceHubLight() {
  const { theme, setTheme } = useAppContext();

  return (
    <div className="dashboard-light-theme font-body min-h-screen flex overflow-hidden bg-[#f4f9f9] text-[#151d1e]">
      {/* Side Navigation Shell */}
      <nav className="h-screen w-[15%] fixed left-0 top-0 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-4 px-4 z-50">
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
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant hover:text-on-surface transition-all" href="/telemetry">
            <span className="material-symbols-outlined mr-3" style={{ fontVariationSettings: '"FILL" 1' }}>analytics</span>
            <span>Live Telemetry</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant hover:text-on-surface transition-all" href="/diagnostics">
            <span className="material-symbols-outlined mr-3">query_stats</span>
            <span>Diagnostics</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant hover:text-on-surface transition-all" href="/simulation-lab">
            <span className="material-symbols-outlined mr-3">science</span>
            <span>Simulation Lab</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 rounded text-primary bg-primary-container/30 border-l-2 border-primary font-bold font-mono text-[11px] scale-95 duration-100" href="/maintenance-hub">
            <span className="material-symbols-outlined mr-3">build</span>
            <span>Maintenance Hub</span>
          </Link>
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
      <header className="fixed top-0 left-[15%] h-16 bg-white/95 backdrop-blur-sm border-b border-outline-variant flex items-center justify-between px-6 z-40 transition-all duration-200" style={{ width: "calc(100% - 15%)" }}>
        {/* Branding Left */}
        <div className="flex flex-col">
          <h2 className="font-mono text-[18px] font-bold text-[#006970] tracking-tight leading-none uppercase">Insight Monitor</h2>
        </div>

        {/* Navigation Center */}
        <nav className="hidden md:flex space-x-8 font-mono text-[11px] absolute left-1/2 -translate-x-1/2 items-center h-full">
          <a className="text-primary border-b-2 border-primary h-full flex items-center px-1 font-bold uppercase" href="#">Work Orders</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center px-1 uppercase font-bold" href="#">Inventory</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center px-1 uppercase font-bold" href="#">Technicians</a>
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

      {/* Main Content Area */}
      <main className="ml-[15%] pt-20 md:pt-24 min-h-screen w-full flex-1 px-4 pb-4 md:px-8 md:pb-8 overflow-y-auto grid grid-cols-12 gap-4 relative">
        <style>{`
          .critical-pulse { animation: pulse-critical-light 2s infinite; }
          @keyframes pulse-critical-light {
              0% { opacity: 0.8; box-shadow: inset 0 0 5px rgba(220, 38, 38, 0.1); }
              50% { opacity: 1; box-shadow: inset 0 0 15px rgba(220, 38, 38, 0.3); }
              100% { opacity: 0.8; box-shadow: inset 0 0 5px rgba(220, 38, 38, 0.1); }
          }
        `}</style>
        {/* Page Header & Actions */}
        <div className="col-span-12 flex justify-between items-end mb-4">
          <div>
            <h1 className="font-headline text-3xl font-bold text-primary">Maintenance Hub</h1>
            <p className="font-mono text-[12px] text-on-surface-variant mt-1">System Status: OPTIMAL | Last sync: 0.2s ago</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-transparent border border-primary text-primary font-mono text-[11px] font-bold uppercase tracking-widest py-2 px-6 rounded hover:bg-primary/5 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">shopping_cart</span> Order Parts
            </button>
            <button className="bg-primary text-on-primary font-mono text-[11px] font-bold uppercase tracking-widest py-2 px-6 rounded hover:brightness-110 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">add_task</span> Initiate Work Order
            </button>
          </div>
        </div>

        {/* Left Column: Work Orders & Inventory */}
        <div className="col-span-12 xl:col-span-8 flex flex-col gap-4">
          {/* Work Order Management */}
          <div className="glass-panel rounded-lg flex flex-col h-[500px]" style={{ background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(0, 0, 0, 0.05)" }}>
            <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center">
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface">ACTIVE WORK ORDERS</h3>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-surface-container-low text-on-surface-variant font-mono text-[12px] rounded text-xs border border-outline-variant/50">Filter: ALL</span>
              </div>
            </div>
            <div className="flex-1 overflow-auto">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-surface-container-low/90 backdrop-blur-md z-10">
                  <tr>
                    <th className="p-3 font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">Asset ID</th>
                    <th className="p-3 font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">Priority</th>
                    <th className="p-3 font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">Type</th>
                    <th className="p-3 font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">Status</th>
                    <th className="p-3 font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">Assigned Tech</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-[12px]">
                  <tr className="hover:bg-surface-container-highest/20 border-b border-outline-variant/10">
                    <td className="p-3 text-primary font-bold">#AX-0992</td>
                    <td className="p-3"><span className="text-error font-bold critical-pulse px-2 py-1 rounded">CRITICAL</span></td>
                    <td className="p-3 text-on-surface">Predictive</td>
                    <td className="p-3"><span className="text-primary font-bold">In-Progress</span></td>
                    <td className="p-3 text-on-surface-variant">T. Vance</td>
                  </tr>
                  <tr className="hover:bg-surface-container-highest/20 border-b border-outline-variant/10">
                    <td className="p-3 text-primary font-bold">#PL-441B</td>
                    <td className="p-3"><span className="text-secondary-container font-bold">WARNING</span></td>
                    <td className="p-3 text-on-surface">Routine</td>
                    <td className="p-3 text-on-surface-variant">Pending</td>
                    <td className="p-3 text-on-surface-variant">UNASSIGNED</td>
                  </tr>
                  <tr className="hover:bg-surface-container-highest/20 border-b border-outline-variant/10">
                    <td className="p-3 text-primary font-bold">#NV-8820</td>
                    <td className="p-3"><span className="text-outline">NOMINAL</span></td>
                    <td className="p-3 text-on-surface">Routine</td>
                    <td className="p-3 text-on-surface-variant">Scheduled</td>
                    <td className="p-3 text-on-surface-variant">M. Ross</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Inventory Status */}
          <div className="glass-panel rounded-lg p-4" style={{ background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(0, 0, 0, 0.05)" }}>
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface mb-4">CRITICAL SPARE PARTS INVENTORY</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-surface-container-lowest border border-outline-variant/20 p-3 rounded">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-[12px] text-on-surface-variant uppercase">High-Temp Bearings</span>
                  <span className="material-symbols-outlined text-error text-[18px]">warning</span>
                </div>
                <div className="font-mono text-xl font-bold text-error">12 <span className="text-xs text-on-surface-variant">/ 50 (MIN 20)</span></div>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant/20 p-3 rounded">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-[12px] text-on-surface-variant uppercase">Pressure Sensors</span>
                  <span className="material-symbols-outlined text-outline text-[18px]">check_circle</span>
                </div>
                <div className="font-mono text-xl font-bold text-primary">145 <span className="text-xs text-on-surface-variant">/ 200</span></div>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant/20 p-3 rounded">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-[12px] text-on-surface-variant uppercase">Actuator Valves</span>
                  <span className="material-symbols-outlined text-secondary-container text-[18px]">info</span>
                </div>
                <div className="font-mono text-xl font-bold text-secondary-container">34 <span className="text-xs text-on-surface-variant">/ 100 (MIN 30)</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Scheduling & 3D View */}
        <div className="col-span-12 xl:col-span-4 flex flex-col gap-4">
          {/* 3D / Context View Placeholder */}
          <div className="glass-panel rounded-lg h-64 relative overflow-hidden flex items-center justify-center border border-primary/20" style={{ background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(0, 0, 0, 0.05)" }}>
            {/* Faux 3D Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#006970 1px, transparent 1px), linear-gradient(90deg, #006970 1px, transparent 1px)', backgroundSize: '20px 20px', transform: 'perspective(500px) rotateX(60deg)', transformOrigin: 'bottom' }}></div>
            <div className="z-10 text-center">
              <span className="material-symbols-outlined text-primary text-6xl mb-2" style={{ fontVariationSettings: '"FILL" 0, "wght" 200' }}>precision_manufacturing</span>
              <p className="font-mono text-[12px] text-primary tracking-widest font-bold">ASSET VISUALIZER OFFLINE</p>
            </div>
          </div>

          {/* Scheduled Downtime */}
          <div className="glass-panel rounded-lg flex-1 p-4 flex flex-col" style={{ background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(0, 0, 0, 0.05)" }}>
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface mb-4">SCHEDULED DOWNTIME WINDOWS</h3>
            <div className="space-y-4 flex-1 overflow-y-auto pr-2">
              <div className="border-l-2 border-primary pl-3 py-1 relative">
                <div className="absolute w-2 h-2 rounded-full bg-primary -left-[5px] top-2"></div>
                <p className="font-mono text-[12px] text-primary font-bold mb-1">T-Minus 04:22:00</p>
                <p className="font-body text-[14px] text-on-surface">Main Turbine Inspection</p>
                <p className="font-mono text-[12px] text-on-surface-variant mt-1">Est. Duration: 4h</p>
              </div>
              <div className="border-l-2 border-outline-variant pl-3 py-1 relative">
                <div className="absolute w-2 h-2 rounded-full bg-outline-variant -left-[5px] top-2"></div>
                <p className="font-mono text-[12px] text-on-surface-variant mb-1">Tomorrow, 0800 HRS</p>
                <p className="font-body text-[14px] text-on-surface">Coolant Flush Line C</p>
                <p className="font-mono text-[12px] text-on-surface-variant mt-1">Est. Duration: 2h</p>
              </div>
              <div className="border-l-2 border-outline-variant pl-3 py-1 relative">
                <div className="absolute w-2 h-2 rounded-full bg-outline-variant -left-[5px] top-2"></div>
                <p className="font-mono text-[12px] text-on-surface-variant mb-1">Thursday, 2200 HRS</p>
                <p className="font-body text-[14px] text-on-surface">Firmware Update: Node Cluster Alpha</p>
                <p className="font-mono text-[12px] text-on-surface-variant mt-1">Est. Duration: 45m</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
