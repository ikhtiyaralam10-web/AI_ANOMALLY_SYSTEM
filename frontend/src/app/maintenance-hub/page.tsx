"use client";
// Force recompile
import React from "react";
import { useAppContext } from "@/components/AppContext";
import MaintenanceHubDark from "@/app/maintenance-hub/MaintenanceHubDark";
import MaintenanceHubLight from "@/app/maintenance-hub/MaintenanceHubLight";

export default function MaintenanceHubPage() {
  const { theme } = useAppContext();

  if (theme === "dark") {
    return <MaintenanceHubDark />;
  }

  return <MaintenanceHubLight />;
}
