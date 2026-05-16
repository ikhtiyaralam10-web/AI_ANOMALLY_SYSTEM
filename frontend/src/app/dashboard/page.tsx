"use client";
import React from "react";
import { useAppContext } from "@/components/AppContext";
import DashboardDark from "@/stitch_components/DashboardDark";
import DashboardLight from "@/stitch_components/DashboardLight";

export default function DashboardPage() {
  const { theme } = useAppContext();
  return theme === 'dark' ? <DashboardDark /> : <DashboardLight />;
}
