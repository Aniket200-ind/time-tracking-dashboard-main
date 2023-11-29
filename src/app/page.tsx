"use client";

import CardContainer from "@/components/CardContainer";
import Profile from "@/components/Profile";
import { useState } from "react";

export default function Home() {
  // ! Use state to store the timeMode property
  const [mode, setMode] = useState("weekly");

  // !Function to update the timeMode property on click from the Profile component
  const handleModeChange = (updatedMode: string) => {
    setMode(updatedMode);
  };

  return (
    <main className="w-screen h-auto px-6 py-8 lg:h-screen bg-very-dark-blue lg:flex lg:justify-center lg:gap-10 lg:py-10">
      <Profile onModeChange={handleModeChange} />
      <CardContainer mode={mode} />
    </main>
  );
}
