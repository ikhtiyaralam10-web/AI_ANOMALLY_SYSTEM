"use client";
import React from "react";
import { useAppContext } from "@/components/AppContext";
import SimulationLabDark from "@/app/simulation-lab/SimulationLabDark";
import SimulationLabLight from "@/app/simulation-lab/SimulationLabLight";

export default function SimulationLabPage() {
  const { theme } = useAppContext();

  if (theme === "dark") {
    return <SimulationLabDark />;
  }

  return <SimulationLabLight />;
}
