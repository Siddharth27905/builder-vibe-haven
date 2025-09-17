import React from "react";
import { useNavigate } from "react-router-dom";
import { useSafeBack } from "@/hooks/use-safe-back";

export default function GaragePerformance() {
  const navigate = useNavigate();
  const goBack = useSafeBack();
  return (
    <div className="relative min-h-screen text-foreground">
      <img
        src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=2000&q=80"
        alt="Dyno tuning"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <header className="relative z-10 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <button onClick={goBack} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">← Back</button>
          <a href="/" className="text-sm text-white/70 hover:text-white">Sidz Garage</a>
        </div>
      </header>

      <main className="container relative z-10 py-12">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[hsl(var(--background))]/90 backdrop-blur">
          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-extrabold">Performance Tuning</h1>
              <p className="mt-3 text-white/70">Unlock the full potential of your machine. From ECU remaps to track-ready hardware upgrades, our tuning packages are engineered and dyno-verified.</p>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                <li>• ECU remapping (stage 1-3)</li>
                <li>• Intake and exhaust systems</li>
                <li>• Intercoolers and fueling upgrades</li>
                <li>• Coilovers, brakes, aero kits</li>
              </ul>
            </div>
            <img src="https://images.unsplash.com/photo-1591843337763-2f2b62b8a18b?auto=format&fit=crop&w=1200&q=80" alt="Performance parts" className="h-64 w-full rounded-xl object-cover md:h-full" />
          </div>
        </div>
      </main>
    </div>
  );
}
