import { useState, useEffect } from "react";

// Estimates a performance tier so the 3D scene can scale down on weak devices.
// "low" => fewer particles, no parallax, capped DPR. "high" => full scene.
export function usePerformanceTier() {
  const [tier, setTier] = useState("high");

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    const cores = navigator.hardwareConcurrency || 4;
    const mem = navigator.deviceMemory || 4;
    // Also fall back to low if WebGL is unavailable (the canvas won't render anyway).
    const gl =
      document.createElement("canvas").getContext("webgl2") ||
      document.createElement("canvas").getContext("webgl");
    if (!gl || mobile || cores <= 4 || mem <= 4) setTier("low");
    else setTier("high");
  }, []);

  return tier;
}
