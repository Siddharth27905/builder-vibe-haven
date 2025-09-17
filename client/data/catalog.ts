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
  // Additional BMW models
  {
    id: 3,
    make: "BMW",
    model: "M3",
    year: 2024,
    price: "$74,300",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=80",
    specs: {
      engine: "3.0L Twin-Turbo I6",
      horsepower: "473 HP",
      acceleration: "0-60 mph in 4.1s",
      fuelEconomy: "16/23 mpg",
    },
    features: ["M Sport Differential", "Adaptive Suspension", "Live Cockpit Pro"],
  },
  {
    id: 4,
    make: "BMW",
    model: "M5",
    year: 2023,
    price: "$109,900",
    image:
      "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&w=1600&q=80",
    specs: {
      engine: "4.4L Twin-Turbo V8",
      horsepower: "600 HP",
      acceleration: "0-60 mph in 3.2s",
      fuelEconomy: "15/21 mpg",
    },
    features: ["xDrive AWD", "Executive Package", "Bowers & Wilkins Audio"],
  },
  {
    id: 5,
    make: "BMW",
    model: "X5 M",
    year: 2024,
    price: "$122,300",
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1d?auto=format&fit=crop&w=1600&q=80",
    specs: {
      engine: "4.4L Twin-Turbo V8",
      horsepower: "617 HP",
      acceleration: "0-60 mph in 3.7s",
      fuelEconomy: "13/18 mpg",
    },
    features: ["M Multifunction Seats", "Sport Exhaust", "Parking Assistant Plus"],
  },
  {
    id: 6,
    make: "BMW",
    model: "i8",
    year: 2020,
    price: "$147,500",
    image:
      "https://images.unsplash.com/photo-1511390404551-1b9f3d6b7fcd?auto=format&fit=crop&w=1600&q=80",
    specs: {
      engine: "1.5L Turbo I3 + eDrive",
      horsepower: "369 HP",
      acceleration: "0-60 mph in 4.2s",
      fuelEconomy: "69 MPGe",
    },
    features: ["Carbon Core", "Laser Headlights", "Head-Up Display"],
  },
  // Mercedes-AMG
  {
    id: 7,
    make: "Mercedes-AMG",
    model: "C63 S",
    year: 2021,
    price: "$78,250",
    image:
      "https://images.unsplash.com/photo-1619767886547-6e4b1cd5df85?auto=format&fit=crop&w=1600&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "503 HP",
      acceleration: "0-60 mph in 3.8s",
      fuelEconomy: "18/27 mpg",
    },
    features: ["AMG Ride Control", "Performance Exhaust", "MBUX"],
  },
  {
    id: 8,
    make: "Mercedes-AMG",
    model: "E63 S",
    year: 2022,
    price: "$112,450",
    image:
      "https://images.unsplash.com/photo-1600359755060-0c3c9d805e18?auto=format&fit=crop&w=1600&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "603 HP",
      acceleration: "0-60 mph in 3.3s",
      fuelEconomy: "16/23 mpg",
    },
    features: ["Drift Mode", "AMG Performance Seats", "Burmester 3D"],
  },
  {
    id: 9,
    make: "Mercedes-AMG",
    model: "GLE 63 S",
    year: 2023,
    price: "$120,990",
    image:
      "https://images.unsplash.com/photo-1606664516078-29841e0254dd?auto=format&fit=crop&w=1600&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8 + EQ Boost",
      horsepower: "603 HP",
      acceleration: "0-60 mph in 3.7s",
      fuelEconomy: "15/19 mpg",
    },
    features: ["AIR BODY CONTROL", "AMG Dynamic Select", "Panoramic Roof"],
  },
  {
    id: 10,
    make: "Mercedes-AMG",
    model: "SL 63",
    year: 2023,
    price: "$183,000",
    image:
      "https://images.unsplash.com/photo-1603386329225-868f9b1ee4f6?auto=format&fit=crop&w=1600&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "577 HP",
      acceleration: "0-60 mph in 3.5s",
      fuelEconomy: "14/21 mpg",
    },
    features: ["Active Roll Stabilization", "AMG Performance 4MATIC+", "Burmester"],
  },
  // Audi
  {
    id: 11,
    make: "Audi",
    model: "RS6",
    year: 2023,
    price: "$118,900",
    image:
      "https://images.unsplash.com/photo-1598133894008-5b9b419a07b1?auto=format&fit=crop&w=1600&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "591 HP",
      acceleration: "0-60 mph in 3.5s",
      fuelEconomy: "15/22 mpg",
    },
    features: ["Quattro AWD", "Matrix LED", "Bang & Olufsen"],
  },
  {
    id: 12,
    make: "Audi",
    model: "RS7",
    year: 2023,
    price: "$122,995",
    image:
      "https://images.unsplash.com/photo-1524169358666-79f22534bc6e?auto=format&fit=crop&w=1600&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "591 HP",
      acceleration: "0-60 mph in 3.5s",
      fuelEconomy: "15/22 mpg",
    },
    features: ["RS Sport Suspension", "Quattro", "Head-Up Display"],
  },
  {
    id: 13,
    make: "Audi",
    model: "R8",
    year: 2022,
    price: "$158,600",
    image:
      "https://images.unsplash.com/photo-1558980664-10a5ac3313f8?auto=format&fit=crop&w=1600&q=80",
    specs: {
      engine: "5.2L V10",
      horsepower: "602 HP",
      acceleration: "0-60 mph in 3.2s",
      fuelEconomy: "13/20 mpg",
    },
    features: ["Magnetic Ride", "Carbon Interior", "Laser Lights"],
  },
  {
    id: 14,
    make: "Audi",
    model: "RSQ8",
    year: 2023,
    price: "$126,945",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "591 HP",
      acceleration: "0-60 mph in 3.7s",
      fuelEconomy: "13/19 mpg",
    },
    features: ["Active Roll Stabilization", "Quattro", "Dynamic All-Wheel Steering"],
  },
  {
    id: 15,
    make: "Audi",
    model: "e-tron GT",
    year: 2023,
    price: "$104,900",
    image:
      "https://images.unsplash.com/photo-1627856019514-3b3b9c1a40d2?auto=format&fit=crop&w=1600&q=80",
    specs: {
      engine: "Dual-Motor Electric",
      horsepower: "522 HP",
      acceleration: "0-60 mph in 3.9s",
      fuelEconomy: "83 MPGe",
    },
    features: ["Adaptive Air Suspension", "Matrix LED", "Virtual Cockpit"],
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
