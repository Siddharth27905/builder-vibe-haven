import React from "react";
import { useNavigate } from "react-router-dom";
import { useSafeBack } from "@/hooks/use-safe-back";

export default function GarageDetailing() {
  const navigate = useNavigate();
  const goBack = useSafeBack();
  return (
    <div className="relative min-h-screen text-foreground">
      <img
        src="https://images.unsplash.com/photo-1530041686259-c0421f6a5a08?auto=format&fit=crop&w=2000&q=80"
        alt="Detailing bay"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <header className="relative z-10 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <button
            onClick={goBack}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
          >
            ← Back
          </button>
          <a href="/" className="text-sm text-white/70 hover:text-white">
            Sidz Garage
          </a>
        </div>
      </header>

      <main className="container relative z-10 py-12">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[hsl(var(--background))]/90 backdrop-blur">
          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-extrabold">
                Detailing & Protection
              </h1>
              <p className="mt-3 text-white/70">
                From paint correction to ceramic coatings, we restore gloss and
                protect surfaces with meticulous care and premium products.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                <li>• Multi-stage paint correction</li>
                <li>• Ceramic and PPF applications</li>
                <li>• Interior deep clean and protection</li>
                <li>• Wheel and glass treatments</li>
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1550353127-b0da3aeaa0ca?auto=format&fit=crop&w=1200&q=80"
              alt="Detailing work"
              className="h-64 w-full rounded-xl object-cover md:h-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
