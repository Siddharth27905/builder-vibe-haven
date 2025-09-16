import React from "react";
import { useNavigate } from "react-router-dom";

export default function Consult() {
  const navigate = useNavigate();
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
          <a href="/" className="text-sm text-white/70 hover:text-white">Sidz Garage</a>
        </div>
      </header>

      <main className="container py-10">
        <h1 className="text-3xl font-extrabold md:text-4xl">Consult our team</h1>
        <p className="mt-2 text-white/70">Get expert guidance from our specialists.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <PersonCard
            name="Siddharth Nair"
            title="Senior Auto Dealer"
            email="s.nair@sidzgarage.com"
            phone="+1 (555) 012-3456"
            photo="https://images.unsplash.com/photo-1541534401786-2077eed87a72?auto=format&fit=crop&w=800&q=80"
          />
          <PersonCard
            name="Mr. Aman"
            title="Sales Manager"
            email="aman@sidzgarage.com"
            phone="+1 (555) 987-6543"
            photo="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </main>
    </div>
  );
}

function PersonCard({
  name,
  title,
  email,
  phone,
  photo,
}: {
  name: string;
  title: string;
  email: string;
  phone: string;
  photo: string;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <img src={photo} alt={name} className="h-56 w-full object-cover md:h-full md:col-span-1" />
        <div className="p-6 md:col-span-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-white/70">{title}</p>
          <div className="mt-4 space-y-1 text-sm">
            <div>Email: <a href={`mailto:${email}`} className="text-sky-400 hover:underline">{email}</a></div>
            <div>Phone: <a href={`tel:${phone}`} className="text-sky-400 hover:underline">{phone}</a></div>
          </div>
        </div>
      </div>
    </article>
  );
}
