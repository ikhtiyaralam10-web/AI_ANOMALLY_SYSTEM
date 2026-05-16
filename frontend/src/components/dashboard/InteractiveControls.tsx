"use client";

import React from "react";
import { AlertOctagon } from "lucide-react";

interface InteractiveControlsProps {
  isAbnormal: boolean;
  onToggle: () => void;
}

export default function InteractiveControls({ isAbnormal, onToggle }: InteractiveControlsProps) {
  return (
    <div className="flex items-center gap-4 bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.08)] rounded-[var(--radius-lg)] p-4">
      <div className="flex-1">
        <h2 className="text-sm font-semibold text-[var(--color-on-surface)]">System Simulator</h2>
        <p className="text-xs text-[var(--color-on-surface-variant)] mt-1">
          Trigger an artificial anomaly state to test dashboard responsiveness.
        </p>
      </div>
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 px-6 py-2.5 rounded-[var(--radius-md)] text-sm font-bold tracking-wide transition-all duration-300 ${
          isAbnormal 
            ? "bg-[rgba(255,51,102,0.2)] text-[#ff3366] border border-[#ff3366] shadow-[0_0_15px_rgba(255,51,102,0.4)]" 
            : "bg-[var(--color-surface-bright)] text-[var(--color-on-surface)] border border-[var(--color-outline-variant)] hover:bg-[rgba(255,255,255,0.1)]"
        }`}
      >
        <AlertOctagon className="w-4 h-4" />
        {isAbnormal ? "RESTORE NORMAL" : "TRIGGER ABNORMAL"}
      </button>
    </div>
  );
}
