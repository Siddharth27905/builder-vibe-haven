import React, { useEffect, useRef, useState } from "react";
import {
  Activity,
  Calendar,
  Car as CarIcon,
  ChevronDown,
  Fuel,
  ShoppingCart,
  Star,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { featuredCars, makes, type FeaturedCar } from "@/data/catalog";
import { slugify } from "@/lib/slug";
import { useNavigate } from "react-router-dom";

const sections = [
  { id: "home", name: "Home" },
  { id: "makes", name: "Makes" },
  { id: "model", name: "Models" },
  { id: "shopping", name: "Shopping" },
  { id: "garage", name: "Garage" },
  { id: "about", name: "About" },
] as const;

type SectionId = (typeof sections)[number]["id"];

export default function Index() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.3,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    Object.values(sectionsRef.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: SectionId) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goToMake = (name: string) => navigate(`/make/${slugify(name)}`);
  const goToCar = (car: { make: string; model: string }) =>
    navigate(`/car/${slugify(car.make)}/${slugify(car.model)}`);

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(1000px_500px_at_100%_0%,rgba(34,211,238,0.15),transparent_60%),hsl(var(--background))] text-foreground">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="group inline-flex items-center gap-2"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg shadow-blue-500/20">
              <CarIcon className="h-5 w-5" />
            </span>
            <span className="font-extrabold tracking-tight">
              Sidz Garage
            </span>
          </a>

          <nav className="hidden gap-2 md:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "text-white/70 hover:bg-white/5 hover:text-white",
                )}
              >
                {section.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection("shopping")}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 md:hidden"
            aria-label="Open menu"
          >
            Menu <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        ref={(el) => (sectionsRef.current.home = el)}
        className="relative overflow-hidden bg-gradient-to-b from-black via-black to-transparent"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=2000&q=80"
            className="h-full w-full object-cover opacity-30"
            alt="Performance Cars Night City"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.7),transparent_30%)]" />
        </div>

        <div className="container relative z-10 flex min-h-[75vh] flex-col items-start justify-center py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Zap className="h-3.5 w-3.5 text-sky-400" />
            Curated performance machines
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Drive the extraordinary.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 md:text-lg">
            Handpicked, high-performance vehicles with transparent specs and
            concierge buying experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection("model")}
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-105"
            >
              Explore Featured
            </button>
            <button
              onClick={() => scrollToSection("shopping")}
              className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </section>

      {/* Makes */}
      <section
        id="makes"
        ref={(el) => (sectionsRef.current.makes = el)}
        className="py-20"
      >
        <div className="container">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Popular Makes</h2>
              <p className="mt-1 text-white/60">
                Performance-first brands we specialize in.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {makes.map((make) => (
              <article
                key={make.name}
                onClick={() => goToMake(make.name)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm transition hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={make.image}
                    alt={`${make.name} showcase`}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{make.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{make.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {make.models.map((m) => (
                      <button
                        key={m}
                        onClick={(e) => {
                          e.stopPropagation();
                          goToCar({ make: make.name, model: m });
                        }}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 hover:bg-white/10"
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Models */}
      <section
        id="model"
        ref={(el) => (sectionsRef.current.model = el)}
        className="bg-gradient-to-b from-white/[0.04] to-transparent py-20"
      >
        <div className="container">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Featured</h2>
              <p className="mt-1 text-white/60">
                Our current top picks. Specs verified, history inspected.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {featuredCars.map((car: FeaturedCar) => (
              <article
                key={car.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm"
              >
                <div className="relative">
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="h-64 w-full cursor-pointer object-cover"
                    loading="lazy"
                    onClick={() => goToCar(car)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    {car.make} {" "}
                    <span className="text-white/80">{car.model}</span>
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {(makes.find((m) => m.name === car.make)?.models || []).map((m) => (
                      <button
                        key={m}
                        onClick={() => goToCar({ make: car.make, model: m })}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 hover:bg-white/10"
                      >
                        {m}
                      </button>
                    ))}
                  </div>


                  <div className="mt-6">
                    <button
                      onClick={() => goToCar(car)}
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Experience */}
      <section
        id="shopping"
        ref={(el) => (sectionsRef.current.shopping = el)}
        className="py-20"
      >
        <div className="container">
          <div className="mb-10">
            <h2 className="text-2xl font-bold md:text-3xl">Shopping</h2>
            <p className="mt-1 text-white/60">
              A transparent, expert-guided process from discovery to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <Step
              icon={ShoppingCart}
              title="Browse"
              desc="Explore curated inventory with verified specs and history."
            />
            <Step
              icon={Users}
              title="Consult"
              desc="Talk to an expert for trade-ins, financing, and options."
            />
            <Step
              icon={Calendar}
              title="Drive"
              desc="Book a test drive at your convenience."
            />
            <Step
              icon={Star}
              title="Deliver"
              desc="White-glove delivery straight to your door."
            />
          </div>
        </div>
      </section>

      {/* Garage / Services */}
      <section
        id="garage"
        ref={(el) => (sectionsRef.current.garage = el)}
        className="bg-gradient-to-b from-white/[0.04] to-transparent py-20"
      >
        <div className="container">
          <div className="mb-10">
            <h2 className="text-2xl font-bold md:text-3xl">Our Garage</h2>
            <p className="mt-1 text-white/60">
              Performance upgrades, precision maintenance, and detailing.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <ServiceCard
              icon={Zap}
              title="Performance Tuning"
              desc="ECU remaps, intake/exhaust, and track-ready setups."
            />
            <ServiceCard
              icon={Wrench}
              title="Maintenance"
              desc="Manufacturer-spec service with OEM/approved parts."
            />
            <ServiceCard
              icon={Activity}
              title="Detailing"
              desc="Paint correction, ceramic coating, and protection."
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        ref={(el) => (sectionsRef.current.about = el)}
        className="py-20"
      >
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">About Sidz Garage</h2>
              <p className="mt-4 text-white/70">
                Founded by enthusiasts, for enthusiasts. We obsess over the
                details so you can enjoy the drive. Every car is vetted,
                documented, and prepared to the highest standards.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
                <Stat value="250+" label="Sold/Year" />
                <Stat value="98%" label="5★ Reviews" />
                <Stat value="12yrs" label="Experience" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1">
              <img
                src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80"
                alt="Showroom"
                className="h-72 w-full rounded-xl object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        <div className="container">
          © {new Date().getFullYear()} Sidz Garage. All rights reserved.
        </div>
      </footer>
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

function Step({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md shadow-blue-500/20">
        <Icon className="h-5 w-5" />
      </div>
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/70">{desc}</div>
    </div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
        <Icon className="h-5 w-5 text-sky-400" />
      </div>
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/70">{desc}</div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-4">
      <div className="text-xl font-bold">{value}</div>
      <div className="mt-1 text-xs text-white/60">{label}</div>
    </div>
  );
}
