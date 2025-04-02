import { SpotlightNew } from "@/components/Spotlight";
import SolidBento from "@/components/bento-grid";
import React from "react";

export default function Home() {
  return (
    <main>
      <SpotlightNew />
      <div className="content">
      <SolidBento />
      </div>
    </main>
  );
}
