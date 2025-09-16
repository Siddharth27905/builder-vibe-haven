import type React from "react";

export interface CarSpecs {
  engine: string;
  horsepower: string;
  acceleration: string;
  fuelEconomy: string;
}

export interface FeaturedCar {
  id: number;
  make: string;
  model: string;
  year: number;
  price: string;
  image: string;
  specs: CarSpecs;
  features: string[];
}

export interface Make {
  name: string;
  description: string;
  models: string[];
  image: string;
}

export const featuredCars: FeaturedCar[] = [
  {
    id: 1,
    make: "BMW",
    model: "M4 Competition",
    year: 2024,
    price: "$84,900",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80",
    specs: {
      engine: "3.0L Twin-Turbo I6",
      horsepower: "503 HP",
      acceleration: "0-60 mph in 3.8s",
      fuelEconomy: "16/23 mpg",
    },
    features: [
      "Carbon Fiber Roof",
      "Adaptive M Suspension",
      "M Performance Exhaust",
      "Harman Kardon Audio",
    ],
  },
  {
    id: 2,
    make: "Mercedes-AMG",
    model: "GT 63 S",
    year: 2024,
    price: "$159,900",
    image:
      "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&w=1600&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "630 HP",
      acceleration: "0-60 mph in 3.1s",
      fuelEconomy: "15/21 mpg",
    },
    features: [
      "AMG Performance 4MATIC+",
      "Active Aero",
      "Carbon Ceramic Brakes",
      "Burmester Audio",
    ],
  },
];

export const makes: Make[] = [
  {
    name: "BMW",
    description: "Ultimate Driving Machine",
    models: ["M3", "M4", "M5", "X5 M", "i8"],
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mercedes-AMG",
    description: "Performance Perfected",
    models: ["GT 63 S", "C63 S", "E63 S", "GLE 63 S", "SL 63"],
    image:
      "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Audi",
    description: "Vorsprung durch Technik",
    models: ["RS6", "RS7", "R8", "RSQ8", "e-tron GT"],
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
  },
];
