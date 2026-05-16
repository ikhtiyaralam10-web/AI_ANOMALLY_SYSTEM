"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, AlertCircle, Activity } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

type StatusType = "NORMAL" | "WARN" | "CRIT";

interface ParameterCardProps {
  label: string;
  value: string;
  unit: string;
  status: StatusType;
  sparklineData: { value: number }[];
}

export default function ParameterCard({ label, value, unit, status, sparklineData }: ParameterCardProps) {
  // Styles based on status
  const isAbnormal = status === "CRIT" || status === "WARN";
  const isCrit = status === "CRIT";
  
  const borderColor = isCrit 
    ? "rgba(255, 51, 102, 0.4)" 
    : status === "WARN" 
      ? "rgba(255, 184, 0, 0.4)" 
      : "rgba(255, 255, 255, 0.08)";
      
  const glowShadow = isCrit 
    ? "0 0 20px rgba(255, 51, 102, 0.2)" 
    : "none";

  const statusColor = isCrit 
    ? "text-[var(--color-error-container)]" 
    : status === "WARN" 
      ? "text-[var(--color-secondary-container)]" 
      : "text-[var(--color-primary-container)]";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[12px] p-4 flex flex-col justify-between"
      style={{ 
        border: `1px solid ${borderColor}`,
        boxShadow: glowShadow,
        transition: "border 300ms ease-in-out, box-shadow 300ms ease-in-out" 
      }}
    >
      {/* Background Pulse for CRIT */}
      {isCrit && (
        <div className="absolute inset-0 bg-[rgba(255,51,102,0.05)] animate-pulse pointer-events-none" />
      )}

      <div className="relative z-10 flex justify-between items-start mb-4">
        <h3 className="text-[11px] font-mono font-bold tracking-[0.1em] text-[var(--color-on-surface-variant)] uppercase">
          {label}
        </h3>
        {/* Status Badge */}
        {isAbnormal && (
          <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-[var(--radius-sm)] text-[10px] font-mono font-bold uppercase tracking-wider ${
            isCrit ? "bg-[rgba(255,51,102,0.15)] text-[#ff3366]" : "bg-[rgba(255,184,0,0.15)] text-[#ffb800]"
          }`}>
            {isCrit ? <AlertCircle className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
            {status}
          </div>
        )}
        {!isAbnormal && (
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-[var(--radius-sm)] text-[10px] font-mono font-bold uppercase tracking-wider bg-[rgba(0,240,255,0.1)] text-[var(--color-primary-container)]">
            <Activity className="w-3 h-3" />
            NORMAL
          </div>
        )}
      </div>

      <div className="relative z-10 flex items-end justify-between">
        <div className="flex items-baseline gap-1">
          <span className={`text-3xl font-mono font-medium ${statusColor} transition-colors duration-300`}>
            {value}
          </span>
          <span className="text-sm font-mono text-[var(--color-on-surface-variant)]">
            {unit}
          </span>
        </div>
        
        <div className="w-24 h-10 opacity-70">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sparklineData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={isCrit ? "#ff3366" : status === "WARN" ? "#ffb800" : "#00f0ff"} 
                strokeWidth={2} 
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}
