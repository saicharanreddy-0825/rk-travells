import suv from "@/assets/suv.jpg";
import sedan from "@/assets/sedan.jpg";
import hatchback from "@/assets/hatchback.jpg";
import muv from "@/assets/muv.jpg";
import bus from "@/assets/bus.jpg";
import tempo from "@/assets/tempo.jpg";

export const business = {
  name: "Vinayaka Self Drive Cars and Car Rentals",
  shortName: "Vinayaka Self Drive Cars",
  phone: "6300943161",
  additionalPhone: "957366842",
  phoneHref: "tel:+916300943161",
  whatsapp: "https://wa.me/916300943161?text=Hi%2C%20I%27m%20interested%20in%20booking%20a%20self-drive%20car.",
  rating: "4.8",
  ratingSource: "Justdial",
  years: "9+ Years in Business",
  hours: "Open 24 Hours",
  area: "Hanamkonda, Warangal, Telangana",
  address: "Road No-8, Postal Colony, Julywada, Hanamkonda, Telangana",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Road+No-8,+Postal+Colony,+Julywada,+Hanamkonda,+Telangana",
  dealsIn: [
    "Self Drive Cars",
    "Car Rentals",
    "SUV Rentals",
    "Sedan Rentals",
    "Hatchback Rentals",
    "Wedding & Event Cars",
  ],
  tags: ["Self Drive", "Outstation", "Wedding", "Local Transport"],
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
  price12h: string;
  limit12h: string;
  price24h: string;
  limit24h: string;
  extraHr: string;
  extraKm: string;
};

export const vehicles: Vehicle[] = [
  {
    id: "v1",
    name: "Maruti Suzuki Swift",
    category: "Hatchbacks",
    image: hatchback,
    badge: "Easy City Driver",
    seats: "5 Seats",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: "₹1,300",
    limit12h: "200 km",
    price24h: "₹2,500",
    limit24h: "400 km",
    extraHr: "₹150",
    extraKm: "₹10",
  },
  {
    id: "v2",
    name: "Maruti Suzuki Baleno",
    category: "Hatchbacks",
    image: hatchback,
    badge: "Premium Hatchback",
    seats: "5 Seats",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: "₹1,400",
    limit12h: "200 km",
    price24h: "₹2,600",
    limit24h: "400 km",
    extraHr: "₹150",
    extraKm: "₹10",
  },
  {
    id: "v3",
    name: "Hyundai i20",
    category: "Hatchbacks",
    image: hatchback,
    badge: "Comfort Ride",
    seats: "5 Seats",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: "₹1,400",
    limit12h: "200 km",
    price24h: "₹2,600",
    limit24h: "400 km",
    extraHr: "₹150",
    extraKm: "₹10",
  },
  {
    id: "v4",
    name: "Maruti Suzuki Dzire",
    category: "Sedans",
    image: sedan,
    badge: "Spacious Boot",
    seats: "5 Seats",
    transmission: "Manual",
    fuel: "Petrol/CNG",
    price12h: "₹1,500",
    limit12h: "200 km",
    price24h: "₹2,800",
    limit24h: "400 km",
    extraHr: "₹200",
    extraKm: "₹12",
  },
  {
    id: "v5",
    name: "Hyundai Aura",
    category: "Sedans",
    image: sedan,
    badge: "Family Choice",
    seats: "5 Seats",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: "₹1,500",
    limit12h: "200 km",
    price24h: "₹2,800",
    limit24h: "400 km",
    extraHr: "₹200",
    extraKm: "₹12",
  },
  {
    id: "v6",
    name: "Maruti Suzuki Brezza",
    category: "Compact SUVs",
    image: suv,
    badge: "City SUV",
    seats: "5 Seats",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: "₹2,000",
    limit12h: "200 km",
    price24h: "₹3,500",
    limit24h: "400 km",
    extraHr: "₹250",
    extraKm: "₹15",
  },
  {
    id: "v7",
    name: "Kia Sonet",
    category: "Compact SUVs",
    image: suv,
    badge: "Stylish SUV",
    seats: "5 Seats",
    transmission: "Automatic",
    fuel: "Petrol",
    price12h: "₹2,200",
    limit12h: "200 km",
    price24h: "₹3,800",
    limit24h: "400 km",
    extraHr: "₹250",
    extraKm: "₹15",
  },
  {
    id: "v8",
    name: "Toyota Innova",
    category: "MUVs",
    image: muv,
    badge: "Group Travel",
    seats: "7 Seats",
    transmission: "Manual",
    fuel: "Diesel",
    price12h: "₹2,500",
    limit12h: "200 km",
    price24h: "₹4,500",
    limit24h: "400 km",
    extraHr: "₹300",
    extraKm: "₹18",
  },
  {
    id: "v9",
    name: "Mahindra XUV",
    category: "Premium",
    image: suv,
    badge: "Luxury Ride",
    seats: "7 Seats",
    transmission: "Manual/Auto",
    fuel: "Diesel",
    price12h: "₹3,000",
    limit12h: "200 km",
    price24h: "₹5,000",
    limit24h: "400 km",
    extraHr: "₹350",
    extraKm: "₹20",
  },
];

export const reviews = [
  {
    name: "Rajasekhar",
    rating: 5,
    date: "03 Feb 2025",
    tags: ["Good service", "Clean vehicle"],
    text: "Vinayaka Self Drive Cars and Car Rentals provided excellent service. The vehicle was clean and well-maintained. Highly recommended!",
  },
  {
    name: "Sai",
    rating: 5,
    text: "Great service in warangal",
  },
  {
    name: "Ranjith",
    rating: 5,
    date: "20 Jun 2020",
    text: "Good service and good price",
  },
];
