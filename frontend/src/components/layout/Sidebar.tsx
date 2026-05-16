import React from "react";
import { LayoutDashboard, Activity, ActivitySquare, TerminalSquare, Wrench } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border-r border-[rgba(255,255,255,0.08)] flex flex-col p-4 z-10 relative">
      <div className="mb-8 px-2">
        <h1 className="text-xl font-bold tracking-tight text-[var(--color-on-surface)]">
          CORE INSIGHT
        </h1>
        <p className="text-xs text-[var(--color-outline)] font-mono uppercase tracking-widest mt-1">
          Mission Control
        </p>
      </div>

      <nav className="flex-1 space-y-2">
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-[var(--radius-md)] bg-[#64ffda]/10 text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] border border-[#64ffda]/20 transition-colors">
          <LayoutDashboard className="w-4 h-4" />
          <span className="text-sm font-medium">Overview</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-[var(--radius-md)] text-[var(--color-on-surface-variant)] hover:bg-[rgba(255,255,255,0.05)] hover:text-[var(--color-on-surface)] transition-colors">
          <Activity className="w-4 h-4" />
          <span className="text-sm font-medium">Live Telemetry</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-[var(--radius-md)] text-[var(--color-on-surface-variant)] hover:bg-[rgba(255,255,255,0.05)] hover:text-[var(--color-on-surface)] transition-colors">
          <TerminalSquare className="w-4 h-4" />
          <span className="text-sm font-medium">Diagnostics</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-[var(--radius-md)] text-[var(--color-on-surface-variant)] hover:bg-[rgba(255,255,255,0.05)] hover:text-[var(--color-on-surface)] transition-colors">
          <ActivitySquare className="w-4 h-4" />
          <span className="text-sm font-medium">Simulation Lab</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-[var(--radius-md)] text-[var(--color-on-surface-variant)] hover:bg-[rgba(255,255,255,0.05)] hover:text-[var(--color-on-surface)] transition-colors">
          <Wrench className="w-4 h-4" />
          <span className="text-sm font-medium">Maintenance Hub</span>
        </a>
      </nav>

      <div className="mt-auto pt-4 border-t border-[rgba(255,255,255,0.08)]">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-2 h-2 rounded-full bg-[#64ffda] animate-pulse shadow-[0_0_4px_#64ffda]"></div>
          <span className="text-sm font-medium text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">System: Online</span>
        </div>
      </div>
    </div>
  );
}
