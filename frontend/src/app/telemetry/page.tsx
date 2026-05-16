"use client";
import React from "react";
import { useAppContext } from "@/components/AppContext";
import TelemetryDark from "./TelemetryDark";
import TelemetryLight from "./TelemetryLight";

export default function TelemetryPage() {
  const { theme } = useAppContext();

  return (
    <>
      {theme === "dark" ? <TelemetryDark /> : <TelemetryLight />}
    </>
  );
}
