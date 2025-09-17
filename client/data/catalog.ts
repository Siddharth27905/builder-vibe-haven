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
      "https://upload.wikimedia.org/wikipedia/commons/9/90/BMW_G82_M4_IMG_3872.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Mercedes-AMG_GT_63_S_4MATIC%2B.jpg",
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
  {
    id: 3,
    make: "BMW",
    model: "M3",
    year: 2024,
    price: "$74,300",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/63/BMW_G80_M3_IMG_3842.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/BMW_M5_Competition_Pack_%28F90%29.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/6/68/2015_BMW_X5_M_%28F85%29_4.4_Front.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/BMW_i8_IAA_2013_01.jpg",
    specs: {
      engine: "1.5L Turbo I3 + eDrive",
      horsepower: "369 HP",
      acceleration: "0-60 mph in 4.2s",
      fuelEconomy: "69 MPGe",
    },
    features: ["Carbon Core", "Laser Headlights", "Head-Up Display"],
  },
  {
    id: 7,
    make: "Mercedes-AMG",
    model: "C63 S",
    year: 2021,
    price: "$78,250",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/2018_Mercedes-AMG_C63_S_Premium_Plus_Automatic_4.0_Front.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Mercedes-AMG_E_63_S_4MATIC%2B.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Mercedes-AMG_GLE_63_S_4MATIC%2B_Coupe_IMG_4089.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/5/59/2022_Mercedes-AMG_SL_63_4MATIC%2B_Front.jpg",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "577 HP",
      acceleration: "0-60 mph in 3.5s",
      fuelEconomy: "14/21 mpg",
    },
    features: [
      "Active Roll Stabilization",
      "AMG Performance 4MATIC+",
      "Burmester",
    ],
  },
  {
    id: 11,
    make: "Audi",
    model: "RS6",
    year: 2023,
    price: "$118,900",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/Audi_RS6_Avant_C8_IMG_2921.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Audi_RS7_Sportback_C8_IMG_2924.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/6/66/2019_Audi_R8_Performance_5.2_Front.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/7/70/2020_Audi_RSQ8_TFSI_quattro_Automatic_4.0_Front.jpg",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "591 HP",
      acceleration: "0-60 mph in 3.7s",
      fuelEconomy: "13/19 mpg",
    },
    features: [
      "Active Roll Stabilization",
      "Quattro",
      "Dynamic All-Wheel Steering",
    ],
  },
  {
    id: 15,
    make: "Audi",
    model: "e-tron GT",
    year: 2023,
    price: "$104,900",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Audi_e-tron_GT_quattro_IMG_2905.jpg",
    specs: {
      engine: "Dual-Motor Electric",
      horsepower: "522 HP",
      acceleration: "0-60 mph in 3.9s",
      fuelEconomy: "83 MPGe",
    },
    features: [
      "Adaptive Air Suspension",
      "Matrix LED",
      "Virtual Cockpit",
    ],
  },
];

export const makes: Make[] = [
  {
    name: "BMW",
    description: "Ultimate Driving Machine",
    models: ["M3", "M4 Competition", "M5", "X5 M", "i8"],
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
