import suv from "@/assets/suv.jpg";
import sedan from "@/assets/sedan.jpg";
import hatchback from "@/assets/hatchback.jpg";
import muv from "@/assets/muv.jpg";

import balenoImg from "@/assets/cars/maruti_suzuki_baleno.jpg";
import ertigaImg from "@/assets/cars/maruti_suzuki_ertiga.jpg";
import fronxImg from "@/assets/cars/maruti_suzuki_fronx.jpg";
import magniteImg from "@/assets/cars/nissan_magnet.jpg";
import etiosImg from "@/assets/cars/toyota_etios_gd.jpg";

export const business = {
  name: "RK Travels & Self-Drive Cars",
  shortName: "RK Travels",
  phone: "9121791992",
  additionalPhone: "9177340016",
  phoneHref: "tel:+919121791992",
  whatsapp: "https://wa.me/919121791992",
  area: "Jadcherla, Telangana",
  address: "Road No. 03, Vijay Nagar Colony, Jadcherla, Telangana, India",
  mapsUrl: "https://maps.google.com/?q=Jadcherla",
  dealsIn: [
    "Self Drive Cars",
    "Car Rentals",
    "SUV Rentals",
    "Sedan Rentals",
    "Hatchback Rentals",
    "Outstation Travel",
    "Family Travel",
    "Pickup & Drop",
  ],
  tags: ["Self Drive", "Outstation", "Local Transport"],
  languages: "English, Telugu, Hindi",
};

export type Vehicle = {
  id: string;
  name: string;
  category: string;
  image: string;
  badge: string;
  seats: string;
  transmission: string;
  fuel: string;
  price12h150km: string;
  price12h300km: string;
  price24h300km: string;
  gallery?: string[];
};

export const vehicles: Vehicle[] = [
  {
    id: "r1",
    name: "Maruti Suzuki Swift DI",
    category: "Hatchback",
    image: hatchback,
    badge: "Easy City Drive",
    seats: "5 Seats",
    transmission: "To Be Confirmed",
    fuel: "Diesel",
    price12h150km: "₹1,200",
    price12h300km: "₹1,600",
    price24h300km: "₹2,000",
  },
  {
    id: "r2",
    name: "Maruti Suzuki Swift Dzire DI",
    category: "Sedan",
    image: sedan,
    badge: "Comfort Ride",
    seats: "5 Seats",
    transmission: "To Be Confirmed",
    fuel: "Diesel",
    price12h150km: "₹1,200",
    price12h300km: "₹1,800",
    price24h300km: "₹2,200",
  },
  {
    id: "r3",
    name: "Toyota Etios DI / GD",
    category: "Sedan",
    image: etiosImg,
    badge: "Comfort Ride",
    seats: "5 Seats",
    transmission: "To Be Confirmed",
    fuel: "Diesel",
    price12h150km: "₹1,200",
    price12h300km: "₹1,800",
    price24h300km: "₹2,200",
  },
  {
    id: "r4",
    name: "Maruti Suzuki Baleno",
    category: "Hatchback",
    image: balenoImg,
    badge: "Premium Hatchback",
    seats: "5 Seats",
    transmission: "To Be Confirmed",
    fuel: "CNG / Petrol",
    price12h150km: "₹1,400",
    price12h300km: "₹2,000",
    price24h300km: "₹2,400",
  },
  {
    id: "r5",
    name: "Nissan Magnite",
    category: "Compact SUV",
    image: magniteImg,
    badge: "Stylish SUV",
    seats: "5 Seats",
    transmission: "To Be Confirmed",
    fuel: "Petrol",
    price12h150km: "₹1,500",
    price12h300km: "₹2,100",
    price24h300km: "₹2,500",
  },
  {
    id: "r6",
    name: "Maruti Suzuki Fronx",
    category: "Compact SUV",
    image: fronxImg,
    badge: "City SUV",
    seats: "5 Seats",
    transmission: "To Be Confirmed",
    fuel: "Petrol",
    price12h150km: "₹1,600",
    price12h300km: "₹2,400",
    price24h300km: "₹2,800",
  },
  {
    id: "r7",
    name: "Hyundai Venue",
    category: "Compact SUV",
    image: suv,
    badge: "Comfortable SUV",
    seats: "5 Seats",
    transmission: "To Be Confirmed",
    fuel: "Petrol",
    price12h150km: "₹1,800",
    price12h300km: "₹2,500",
    price24h300km: "₹3,000",
  },
  {
    id: "r8",
    name: "Maruti Suzuki Ertiga DI",
    category: "MUV",
    image: ertigaImg,
    badge: "Family Choice",
    seats: "7 Seats",
    transmission: "To Be Confirmed",
    fuel: "Diesel",
    price12h150km: "₹2,000",
    price12h300km: "₹3,000",
    price24h300km: "₹3,500",
  },
];
