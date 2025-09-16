import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Drive() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", contact: "", email: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Drive request received. We'll reach out soon.");
    navigate("/");
  };

  return (
    <div className="relative min-h-screen text-foreground">
      <img
        src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=2000&q=80"
        className="absolute inset-0 h-full w-full object-cover"
        alt="Hypercar"
      />
      <div className="absolute inset-0 bg-black/60" />
      <header className="relative z-10 border-b border-white/10 bg-black/40 backdrop-blur-xl">
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

      <main className="container relative z-10 py-12">
        <div className="rounded-2xl border border-white/10 bg-[hsl(var(--background))]/90 p-6 backdrop-blur">
          <h1 className="text-2xl font-bold">Book a Test Drive</h1>
          <p className="mt-1 text-white/70">Share your details and we'll get back to schedule your drive.</p>
          <form onSubmit={submit} className="mt-6 grid gap-4 md:grid-cols-3">
            <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Field label="Contact No" value={form.contact} onChange={(v) => setForm({ ...form, contact: v })} />
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <div className="md:col-span-3">
              <button className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-md shadow-primary/30 transition hover:brightness-105">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block text-sm">
      <span className="text-white/80">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 focus:border-white/20"
        placeholder={label}
        required
      />
    </label>
  );
}
