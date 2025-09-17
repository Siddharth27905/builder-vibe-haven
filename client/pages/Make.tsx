import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSafeBack } from "@/hooks/use-safe-back";
import { makes } from "@/data/catalog";
import { slugify } from "@/lib/slug";

export default function MakePage() {
  const { makeId } = useParams();
  const navigate = useNavigate();
  const goBack = useSafeBack();
  const make = makes.find((m) => slugify(m.name) === makeId);

  if (!make) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="container py-16">
          <button
            onClick={() => navigate(-1)}
            className="rounded border border-white/10 bg-white/5 px-3 py-2 text-sm"
          >
            ← Back
          </button>
          <h1 className="mt-6 text-2xl font-bold">Make not found</h1>
          <p className="mt-2 text-white/60">We couldn't find this brand.</p>
          <Link to="/" className="mt-4 inline-block text-sky-400">
            Go home
          </Link>
        </div>
      </div>
    );
  }

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
            <img
              src={make.image}
              alt={make.name}
              className="h-80 w-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold md:text-4xl">{make.name}</h1>
            <p className="mt-2 text-white/70">{make.description}</p>
            <div className="mt-6">
              <h2 className="font-semibold">Popular Models</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {make.models.map((m) => (
                  <Link
                    key={m}
                    to={`/car/${slugify(make.name)}/${slugify(m)}`}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
                  >
                    {m}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
