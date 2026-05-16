"use client";
// Force recompile
import React from "react";
import { useAppContext } from "@/components/AppContext";
import DiagnosticsDark from "@/app/diagnostics/DiagnosticsDark";
import DiagnosticsLight from "@/app/diagnostics/DiagnosticsLight";

export default function DiagnosticsPage() {
  const { theme } = useAppContext();

  if (theme === "dark") {
    return <DiagnosticsDark />;
  }

  return <DiagnosticsLight />;
}
