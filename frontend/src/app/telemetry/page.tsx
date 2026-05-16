"use client";
import React from "react";
import { useAppContext } from "@/components/AppContext";
import TelemetryDark from "@/stitch_components/TelemetryDark";
import TelemetryLight from "@/stitch_components/TelemetryLight";

export default function TelemetryPage() {
  const { theme } = useAppContext();
  return theme === 'dark' ? <TelemetryDark /> : <TelemetryLight />;
}
