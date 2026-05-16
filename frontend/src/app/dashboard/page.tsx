"use client";
import React from "react";
import DashboardDark from "./DashboardDark";
import DashboardLight from "./DashboardLight";
import { useAppContext } from "@/components/AppContext";

export default function DashboardPage() {
  const { theme } = useAppContext();

  return theme === 'dark' ? <DashboardDark /> : <DashboardLight />;
}
