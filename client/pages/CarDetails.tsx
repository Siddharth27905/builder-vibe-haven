import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { featuredCars, makes } from "@/data/catalog";
import { slugify } from "@/lib/slug";
import { Activity, Car as CarIcon, Fuel, Zap } from "lucide-react";

export default function CarDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const makeParam = params.make ?? "";
  const modelParam = params.model ?? "";

  const car = featuredCars.find(
    (c) => slugify(c.make) === makeParam && slugify(c.model) === modelParam,
  );

  const brand = makes.find((m) => slugify(m.name) === makeParam);

  const image =
    car?.image ||
    brand?.image ||
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80";

  const title =
    `${brand?.name ?? makeParam.toUpperCase()} ${car?.model ?? modelParam.replace(/-/g, " ")}`.trim();
  const price = car?.price || "Contact for pricing";

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(1000px_500px_at_100%_0%,rgba(34,211,238,0.15),transparent_60%),hsl(var(--background))] text-foreground">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
          >
            ← Back
          </button>
          <a href="/" className="text-sm text-white/70 hover:text-white">
            Sidz Garage
          </a>
        </div>
      </header>

      <main className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img src={image} alt={title} className="h-80 w-full object-cover" />
          </div>

          <div>
            <h1 className="text-3xl font-extrabold md:text-4xl">{title}</h1>
            <div className="mt-2 text-white/70">{brand?.description}</div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <Spec
                icon={Zap}
                label="Power"
                value={car?.specs.horsepower || "—"}
              />
              <Spec
                icon={Activity}
                label="0-60"
                value={car?.specs.acceleration || "—"}
              />
              <Spec
                icon={Fuel}
                label="Engine"
                value={car?.specs.engine || "—"}
              />
              <Spec
                icon={CarIcon}
                label="MPG"
                value={car?.specs.fuelEconomy || "—"}
              />
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/60">Starting at</div>
              <div className="text-2xl font-bold">{price}</div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-md shadow-primary/30 transition hover:brightness-105">
                Book a Test Drive
              </button>
              <button className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
                Request Quote
              </button>
            </div>
          </div>
        </div>

        {car?.features?.length ? (
          <section className="mt-12">
            <h2 className="text-xl font-semibold">Key Features</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {car.features.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                >
                  {f}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
    </div>
  );
}

function Spec({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
      <Icon className="h-4 w-4 text-sky-400" />
      <div>
        <div className="text-xs text-white/60">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}
