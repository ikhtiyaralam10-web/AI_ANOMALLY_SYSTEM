"use client";

import React from "react";
import ParameterCard from "./ParameterCard";

interface SensorGridProps {
  isAbnormal: boolean;
}

// Helper to generate mock sparkline data
const generateData = (base: number, variance: number, trend: number = 0) => {
  return Array.from({ length: 20 }).map((_, i) => ({
    value: base + (Math.random() * variance * 2 - variance) + (i * trend)
  }));
};

export default function SensorGrid({ isAbnormal }: SensorGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {/* Top Row */}
      <ParameterCard
        label="Vibration RMS"
        value={isAbnormal ? "14.2" : "5.1"}
        unit="mm/s"
        status={isAbnormal ? "CRIT" : "NORMAL"}
        sparklineData={isAbnormal ? generateData(12, 3, 0.5) : generateData(5, 0.5)}
      />
      <ParameterCard
        label="Bearing Temp"
        value={isAbnormal ? "85.5" : "62.3"}
        unit="°C"
        status={isAbnormal ? "WARN" : "NORMAL"}
        sparklineData={isAbnormal ? generateData(80, 2, 0.2) : generateData(62, 1)}
      />
      <ParameterCard
        label="Motor Current"
        value={isAbnormal ? "45.1" : "42.1"}
        unit="A"
        status="NORMAL"
        sparklineData={generateData(42, 1.5)}
      />

      {/* Bottom Row */}
      <ParameterCard
        label="RPM"
        value="1450"
        unit="rev/min"
        status="NORMAL"
        sparklineData={generateData(1450, 10)}
      />
      <ParameterCard
        label="Inlet Pressure"
        value={isAbnormal ? "2.1" : "4.5"}
        unit="bar"
        status={isAbnormal ? "CRIT" : "NORMAL"}
        sparklineData={isAbnormal ? generateData(3, 0.5, -0.1) : generateData(4.5, 0.2)}
      />
      <ParameterCard
        label="System Override"
        value={isAbnormal ? "ENGAGED" : "STANDBY"}
        unit=""
        status={isAbnormal ? "WARN" : "NORMAL"}
        sparklineData={isAbnormal ? generateData(1, 0) : generateData(0, 0)}
      />
    </div>
  );
}
