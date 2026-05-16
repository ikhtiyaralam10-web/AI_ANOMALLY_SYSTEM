"use client";
import React from "react";
import { useAppContext } from "@/components/AppContext";
import DiagnosticsDark from "@/stitch_components/DiagnosticsDark";
import DiagnosticsLight from "@/stitch_components/DiagnosticsLight";

export default function DiagnosticsPage() {
  const { theme } = useAppContext();
  return theme === 'dark' ? <DiagnosticsDark /> : <DiagnosticsLight />;
}
