"use client";
import React from "react";
import { useAppContext } from "@/components/AppContext";
import AresLandingDark from "@/stitch_components/AresLandingDark";
import AresLandingLight from "@/stitch_components/AresLandingLight";

export default function Home() {
  const { theme } = useAppContext();
  return theme === 'dark' ? <AresLandingDark /> : <AresLandingLight />;
}
