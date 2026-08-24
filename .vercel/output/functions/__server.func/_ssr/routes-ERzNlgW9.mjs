import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as Calendar, E as Award, S as Car, T as Briefcase, _ as Fuel, a as ShieldCheck, b as ChevronRight, c as Phone, d as Menu, f as Map, g as GraduationCap, h as HeartHandshake, i as Sparkles, l as MessageSquarePlus, m as Key, n as Wallet, o as Settings2, p as MapPin, r as Users, s as Plane, t as X, u as MessageCircle, v as Clock, w as Building2, x as ChevronLeft, y as CircleCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ERzNlgW9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var suv_default = "/assets/suv-CCthJks6.jpg";
var sedan_default = "/assets/sedan-Dx8GV8LN.jpg";
var hatchback_default = "/assets/hatchback-CLhPQFph.jpg";
var muv_default = "/assets/muv-C9Z4IdCf.jpg";
var business = {
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
		"Pickup & Drop"
	],
	tags: [
		"Self Drive",
		"Outstation",
		"Local Transport"
	],
	languages: "English, Telugu, Hindi"
};
var vehicles = [
	{
		id: "r1",
		name: "Maruti Suzuki Swift DI",
		category: "Hatchback",
		image: hatchback_default,
		badge: "Easy City Drive",
		seats: "5 Seats",
		transmission: "To Be Confirmed",
		fuel: "Diesel",
		price12h150km: "₹1,200",
		price12h300km: "₹1,600",
		price24h300km: "₹2,000"
	},
	{
		id: "r2",
		name: "Maruti Suzuki Swift Dzire DI",
		category: "Sedan",
		image: sedan_default,
		badge: "Comfort Ride",
		seats: "5 Seats",
		transmission: "To Be Confirmed",
		fuel: "Diesel",
		price12h150km: "₹1,200",
		price12h300km: "₹1,800",
		price24h300km: "₹2,200"
	},
	{
		id: "r3",
		name: "Toyota Etios DI / GD",
		category: "Sedan",
		image: sedan_default,
		badge: "Comfort Ride",
		seats: "5 Seats",
		transmission: "To Be Confirmed",
		fuel: "Diesel",
		price12h150km: "₹1,200",
		price12h300km: "₹1,800",
		price24h300km: "₹2,200"
	},
	{
		id: "r4",
		name: "Maruti Suzuki Baleno",
		category: "Hatchback",
		image: hatchback_default,
		badge: "Premium Hatchback",
		seats: "5 Seats",
		transmission: "To Be Confirmed",
		fuel: "CNG / Petrol",
		price12h150km: "₹1,400",
		price12h300km: "₹2,000",
		price24h300km: "₹2,400"
	},
	{
		id: "r5",
		name: "Nissan Magnite",
		category: "Compact SUV",
		image: suv_default,
		badge: "Stylish SUV",
		seats: "5 Seats",
		transmission: "To Be Confirmed",
		fuel: "Petrol",
		price12h150km: "₹1,500",
		price12h300km: "₹2,100",
		price24h300km: "₹2,500"
	},
	{
		id: "r6",
		name: "Maruti Suzuki Fronx",
		category: "Compact SUV",
		image: suv_default,
		badge: "City SUV",
		seats: "5 Seats",
		transmission: "To Be Confirmed",
		fuel: "Petrol",
		price12h150km: "₹1,600",
		price12h300km: "₹2,400",
		price24h300km: "₹2,800"
	},
	{
		id: "r7",
		name: "Hyundai Venue",
		category: "Compact SUV",
		image: suv_default,
		badge: "Comfortable SUV",
		seats: "5 Seats",
		transmission: "To Be Confirmed",
		fuel: "Petrol",
		price12h150km: "₹1,800",
		price12h300km: "₹2,500",
		price24h300km: "₹3,000"
	},
	{
		id: "r8",
		name: "Maruti Suzuki Ertiga DI",
		category: "MUV",
		image: muv_default,
		badge: "Family Choice",
		seats: "7 Seats",
		transmission: "To Be Confirmed",
		fuel: "Diesel",
		price12h150km: "₹2,000",
		price12h300km: "₹3,000",
		price24h300km: "₹3,500"
	}
];
var logo_default = "/assets/logo-CjUVw2Io.png";
function Navbar() {
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const navLinks = [
		{
			name: "Home",
			href: "#top"
		},
		{
			name: "Cars",
			href: "#cars"
		},
		{
			name: "Why Us",
			href: "#why-us"
		},
		{
			name: "Services",
			href: "#services"
		},
		{
			name: "Contact",
			href: "#contact"
		},
		{
			name: "Policies",
			href: "#rules-regulations"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white/70 backdrop-blur-md shadow-sm border-b border-white/50 h-[70px] flex items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-7xl items-center justify-between px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "flex items-center gap-2 font-semibold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "RK Travels Logo",
						className: "h-[40px] w-[40px] md:h-[50px] md:w-[50px] object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-2 lg:gap-4",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm font-medium text-ink/80 hover:text-primary hover:bg-gray-100/50 px-3 py-1.5 rounded-full border border-transparent hover:border-gray-200 transition-all",
						children: link.name
					}, link.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: business.phoneHref,
							className: "text-sm font-semibold text-ink flex items-center gap-2 hover:bg-gray-50 transition-colors border border-gray-200 rounded-full px-4 py-2 bg-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-yellow-500" }), business.phone]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: business.whatsapp,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-bold text-white shadow-sm hover:bg-[#20bd5a] transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), "WhatsApp"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#cars",
							className: "inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-bold text-white shadow-sm hover:bg-primary/90 transition-all",
							children: "Book Now"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden p-2 text-ink",
					onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
					children: isMobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
				})
			]
		}), isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-5 flex flex-col gap-4 animate-in slide-in-from-top-4",
			children: [navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: link.href,
				className: "text-base font-medium text-ink py-2 border-b border-gray-50",
				onClick: () => setIsMobileMenuOpen(false),
				children: link.name
			}, link.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 mb-2 px-2 text-base font-semibold text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:+91${business.phone}`,
							className: "flex items-center gap-3 py-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-primary" }),
								" ",
								business.phone
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:+91${business.additionalPhone}`,
							className: "flex items-center gap-3 py-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-primary" }),
								" ",
								business.additionalPhone
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:+91${business.phone}`,
						className: "inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-white px-4 py-2.5 text-sm font-semibold text-primary",
						children: "Call"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: business.whatsapp,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-sm",
						children: "WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: business.mapsUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white shadow-sm",
						children: "Get Directions"
					})
				]
			})]
		})]
	});
}
var selfdrivebackground_default = "/assets/selfdrivebackground-CJ343hPz.png";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative mt-[70px] h-[calc(100vh-70px)] min-h-[650px] max-h-[750px] overflow-hidden flex items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 z-0 bg-cover bg-bottom bg-no-repeat",
			style: { backgroundImage: `url(${selfdrivebackground_default})` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 mx-auto w-full max-w-7xl px-5 flex flex-col items-start",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-4 mb-6 text-xs sm:text-sm font-bold text-accent uppercase tracking-wider",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4" }), " Claimed & Verified"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4" }), " Best in Jadcherla"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" }), " Open 24/7"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-display",
						children: [
							business.name.split("&")[0],
							" & ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: business.name.split("&")[1]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg sm:text-xl text-white/90 leading-relaxed",
						children: "Reliable and affordable self-drive car rentals in Jadcherla with easy booking and multiple vehicle options."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: business.phoneHref,
							className: "inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white shadow-lg hover:bg-primary/90 transition-all hover:scale-105",
							children: "Book by Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#cars",
							className: "inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-ink shadow-lg hover:bg-gray-50 transition-all",
							children: "View Fleet & Pricing"
						})]
					})
				]
			})
		})]
	});
}
var categories = [
	"All",
	"Hatchbacks",
	"Sedans",
	"Compact SUVs",
	"MUVs",
	"Premium"
];
function CategoryFilter({ selectedCategory, onSelectCategory }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl md:text-4xl font-bold font-display text-ink mb-3",
				children: "Choose Your Ride"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-lg",
				children: "Find the perfect vehicle for your journey."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full overflow-x-auto hide-scrollbar py-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center min-w-max gap-3 px-4",
				children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onSelectCategory(category),
					className: `px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${selectedCategory === category ? "bg-primary text-white shadow-md shadow-primary/20 scale-105" : "bg-white border border-gray-200 text-ink hover:border-primary hover:text-primary"}`,
					children: category
				}, category))
			})
		})]
	});
}
function CarCard({ vehicle, onViewDetails, onBookNow }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 flex flex-col h-full group",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] w-full overflow-hidden bg-gray-50 p-6 flex items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: vehicle.image,
				alt: vehicle.name,
				className: "w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-4 left-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full bg-accent/20 border border-accent/30 text-ink px-3 py-1.5 text-xs font-semibold backdrop-blur-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-accent" }), vehicle.badge]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 flex-1 flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold font-display text-ink",
					children: vehicle.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-100 px-2.5 py-1 text-[11px] font-semibold text-orange-700",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-3" }),
								" ",
								vehicle.seats
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-2.5 py-1 text-[11px] font-semibold text-blue-700",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "size-3" }),
								" ",
								vehicle.transmission
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-100 px-2.5 py-1 text-[11px] font-semibold text-green-700",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fuel, { className: "size-3" }),
								" ",
								vehicle.fuel
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 mb-6 h-px w-full bg-gray-100" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-2 mt-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm font-bold text-ink",
									children: ["12h - ", vehicle.price12h150km]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground font-medium uppercase",
									children: "Limit 150 KM"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold text-ink",
									children: vehicle.price12h300km
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground font-medium uppercase",
									children: "Limit 300 KM"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm font-bold text-ink",
									children: ["24h - ", vehicle.price24h300km]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground font-medium uppercase",
									children: "Limit 300 KM"
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onViewDetails(vehicle),
						className: "flex-1 h-11 inline-flex items-center justify-center rounded-xl border-2 border-gray-100 bg-white px-4 text-sm font-semibold text-ink hover:border-gray-200 hover:bg-gray-50 transition-colors",
						children: "Details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onBookNow(vehicle),
						className: "flex-1 h-11 inline-flex items-center justify-center rounded-xl bg-accent px-4 text-sm font-bold text-ink shadow-sm hover:bg-accent/90 hover:-translate-y-0.5 transition-all",
						children: "Book Now"
					})]
				})
			]
		})]
	});
}
function ImageLightbox({ images, initialIndex, onClose }) {
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(initialIndex);
	const [touchStart, setTouchStart] = (0, import_react.useState)(null);
	const [touchEnd, setTouchEnd] = (0, import_react.useState)(null);
	const handlePrevious = (0, import_react.useCallback)(() => {
		setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
	}, [images.length]);
	const handleNext = (0, import_react.useCallback)(() => {
		setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1);
	}, [images.length]);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowLeft") handlePrevious();
			if (e.key === "ArrowRight") handleNext();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [
		handleNext,
		handlePrevious,
		onClose
	]);
	const minSwipeDistance = 50;
	const onTouchStart = (e) => {
		setTouchEnd(null);
		setTouchStart(e.targetTouches[0]?.clientX ?? 0);
	};
	const onTouchMove = (e) => {
		setTouchEnd(e.targetTouches[0]?.clientX ?? 0);
	};
	const onTouchEndEvent = () => {
		if (!touchStart || !touchEnd) return;
		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > minSwipeDistance;
		const isRightSwipe = distance < -50;
		if (isLeftSwipe) handleNext();
		if (isRightSwipe) handlePrevious();
	};
	if (images.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200",
		onClick: onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					onClose();
				},
				className: "absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 28 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-6 left-6 text-white/80 font-medium tracking-wide z-50",
				children: [
					currentIndex + 1,
					" / ",
					images.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					handlePrevious();
				},
				className: "absolute left-2 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 32 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative w-full h-full max-w-6xl max-h-[85vh] mx-auto px-16 flex items-center justify-center select-none",
				onTouchStart,
				onTouchMove,
				onTouchEnd: onTouchEndEvent,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images[currentIndex],
					alt: `Gallery image ${currentIndex + 1}`,
					className: "max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-200",
					onClick: (e) => e.stopPropagation()
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					handleNext();
				},
				className: "absolute right-2 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 32 })
			})
		]
	});
}
function CarDetails({ vehicle, onClose, onBookNow }) {
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);
	const [lightboxIndex, setLightboxIndex] = (0, import_react.useState)(null);
	const imagesToShow = vehicle.gallery && vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.image];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-ink/40 backdrop-blur-sm animate-in fade-in duration-200",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0",
				onClick: onClose,
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in zoom-in-95 duration-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-sm transition-colors text-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full md:w-1/2 bg-gray-50 p-8 flex flex-col justify-center relative border-r border-gray-100 overflow-y-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-2",
									children: vehicle.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl font-bold font-display text-ink",
									children: vehicle.name
								})]
							}),
							vehicle.gallery && vehicle.gallery.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "cursor-zoom-in relative group rounded-xl overflow-hidden",
									onClick: () => setLightboxIndex(0),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: vehicle.gallery[0],
										alt: vehicle.name,
										className: "w-full h-auto object-contain mix-blend-multiply drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-4",
									children: vehicle.gallery.slice(1).map((img, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "cursor-zoom-in relative group rounded-xl overflow-hidden",
										onClick: () => setLightboxIndex(idx + 1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: img,
											alt: `${vehicle.name} detail ${idx + 1}`,
											className: "w-full h-32 object-cover rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
										})
									}, idx))
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "cursor-zoom-in relative group rounded-xl overflow-hidden",
								onClick: () => setLightboxIndex(0),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: vehicle.image,
									alt: vehicle.name,
									className: "w-full h-auto object-contain mix-blend-multiply drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-4 mt-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center p-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-5 text-primary mb-1" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] uppercase text-muted-foreground font-semibold",
												children: "Seats"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold",
												children: vehicle.seats
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center p-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "size-5 text-primary mb-1" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] uppercase text-muted-foreground font-semibold",
												children: "Transmission"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold",
												children: vehicle.transmission
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center p-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fuel, { className: "size-5 text-primary mb-1" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] uppercase text-muted-foreground font-semibold",
												children: "Fuel"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold",
												children: vehicle.fuel
											})
										]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full md:w-1/2 p-6 sm:p-8 flex flex-col overflow-y-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold font-display mb-6 border-b border-gray-100 pb-4",
								children: "Rental Options"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 mb-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center justify-between p-4 rounded-2xl border-2 border-primary bg-primary/5 cursor-pointer transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-ink",
												children: "12 Hours Plan"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm text-muted-foreground",
												children: "Up to 150 KM"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-right flex flex-col",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-primary text-xl",
												children: vehicle.price12h150km
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center justify-between p-4 rounded-2xl border-2 border-gray-100 cursor-pointer transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-ink",
												children: "12 Hours Plan"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm text-muted-foreground",
												children: "Up to 300 KM"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-right flex flex-col",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-ink text-xl",
												children: vehicle.price12h300km
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center justify-between p-4 rounded-2xl border-2 border-gray-100 cursor-pointer transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-ink",
												children: "24 Hours Plan"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm text-muted-foreground",
												children: "Up to 300 KM"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-right flex flex-col",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-ink text-xl",
												children: vehicle.price24h300km
											})
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm text-muted-foreground bg-gray-50 p-4 rounded-xl mb-8 space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "• Prices and availability are subject to confirmation." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "• Extra kilometre charges apply beyond package limit." })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto flex flex-col sm:flex-row gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onBookNow(vehicle),
									className: "flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white px-6 py-4 font-bold shadow-md hover:bg-[#20b958] transition-all hover:-translate-y-0.5",
									children: "Book Now"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+919121791992",
									className: "flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white px-6 py-4 font-bold shadow-md hover:bg-primary/90 transition-all hover:-translate-y-0.5",
									children: "Call to Book"
								})]
							})
						]
					})
				]
			}),
			lightboxIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageLightbox, {
				images: imagesToShow,
				initialIndex: lightboxIndex,
				onClose: () => setLightboxIndex(null)
			})
		]
	});
}
function BookingModal({ vehicle, onClose }) {
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);
	const [lightboxIndex, setLightboxIndex] = (0, import_react.useState)(null);
	const imagesToShow = vehicle.gallery && vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.image];
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		phone: "",
		pickupDate: "",
		returnDate: "",
		pickupTime: "",
		returnTime: "",
		duration: "12 Hours / 150 KM",
		pickupLocation: "",
		message: ""
	});
	const [error, setError] = (0, import_react.useState)("");
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
		setError("");
	};
	const handleDurationChange = (duration) => {
		setFormData((prev) => ({
			...prev,
			duration
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.name.trim()) return setError("Please enter your name.");
		if (!formData.phone.trim()) return setError("Please enter your phone number.");
		if (!formData.pickupDate) return setError("Please select a pickup date.");
		if (!formData.returnDate) return setError("Please select a return date.");
		if (!formData.pickupTime) return setError("Please select a pickup time.");
		if (!formData.returnTime) return setError("Please select a return time.");
		if (!formData.duration) return setError("Please select a rental package.");
		const price = formData.duration === "12 Hours / 150 KM" ? vehicle.price12h150km : formData.duration === "12 Hours / 300 KM" ? vehicle.price12h300km : vehicle.price24h300km;
		const formatDate = (dateStr) => {
			if (!dateStr) return "";
			const [year, month, day] = dateStr.split("-");
			return `${day}-${month}-${year}`;
		};
		const formatTime = (timeStr) => {
			if (!timeStr) return "";
			const parts = timeStr.split(":");
			const hourStr = parts[0] || "0";
			const minStr = parts[1] || "00";
			let hour = parseInt(hourStr, 10);
			const ampm = hour >= 12 ? "PM" : "AM";
			hour = hour % 12;
			if (hour === 0) hour = 12;
			return `${hour.toString().padStart(2, "0")}:${minStr} ${ampm}`;
		};
		const formattedPrice = price?.replace("₹", "Rs. ") || "";
		let text = `Hello RK Travels,\n\nI would like to enquire about ${vehicle.name}.\n\n`;
		text += `Name: ${formData.name}\n`;
		text += `Phone: ${formData.phone}\n`;
		text += `Pickup: ${formatDate(formData.pickupDate)} ${formatTime(formData.pickupTime)}\n`;
		text += `Return: ${formatDate(formData.returnDate)} ${formatTime(formData.returnTime)}\n`;
		text += `Package: ${formData.duration} (${formattedPrice})\n`;
		if (formData.pickupLocation) text += `Pickup Location: ${formData.pickupLocation}\n`;
		text += `\nPlease confirm availability and booking details.`;
		const whatsappUrl = `https://wa.me/919121791992?text=${encodeURIComponent(text)}`;
		window.open(whatsappUrl, "_blank");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-ink/60 backdrop-blur-sm animate-in fade-in duration-200",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0",
				onClick: onClose,
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in zoom-in-95 duration-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "absolute top-4 right-4 z-20 p-2 bg-gray-100/80 hover:bg-gray-200 rounded-full shadow-sm transition-colors text-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden md:flex w-full md:w-2/5 bg-gray-50 p-8 flex-col justify-between border-r border-gray-100 overflow-y-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-2",
									children: vehicle.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl font-bold font-display text-ink",
									children: vehicle.name
								})]
							}),
							vehicle.gallery && vehicle.gallery.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-4 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "cursor-zoom-in relative group rounded-xl overflow-hidden",
									onClick: () => setLightboxIndex(0),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: vehicle.gallery[0],
										alt: vehicle.name,
										className: "w-full h-auto object-contain mix-blend-multiply drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-4",
									children: vehicle.gallery.slice(1).map((img, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "cursor-zoom-in relative group rounded-xl overflow-hidden",
										onClick: () => setLightboxIndex(idx + 1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: img,
											alt: `${vehicle.name} detail ${idx + 1}`,
											className: "w-full h-24 object-cover rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
										})
									}, idx))
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "cursor-zoom-in relative group rounded-xl overflow-hidden mb-6",
								onClick: () => setLightboxIndex(0),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: vehicle.image,
									alt: vehicle.name,
									className: "w-full h-auto object-contain mix-blend-multiply drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] uppercase text-muted-foreground font-semibold",
												children: "Seats"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-bold",
												children: vehicle.seats
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "size-5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] uppercase text-muted-foreground font-semibold",
												children: "Transmission"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-bold",
												children: vehicle.transmission
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fuel, { className: "size-5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] uppercase text-muted-foreground font-semibold",
												children: "Fuel"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-bold",
												children: vehicle.fuel
											})]
										})]
									})
								]
							})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full md:w-3/5 p-6 sm:p-8 flex flex-col overflow-y-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-2xl font-bold font-display mb-2 text-ink",
								children: ["Book ", vehicle.name]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mb-6",
								children: "Fill in your trip details to confirm availability via WhatsApp."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSubmit,
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-bold text-ink ml-1",
												children: "Customer Name *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												name: "name",
												value: formData.name,
												onChange: handleInputChange,
												placeholder: "Your full name",
												className: "w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-bold text-ink ml-1",
												children: "Phone Number *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "tel",
												name: "phone",
												value: formData.phone,
												onChange: handleInputChange,
												placeholder: "e.g. 9876543210",
												className: "w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-bold text-ink ml-1",
												children: "Pickup Date *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "date",
													name: "pickupDate",
													value: formData.pickupDate,
													onChange: handleInputChange,
													className: "w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" })]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-bold text-ink ml-1",
												children: "Pickup Time *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "time",
													name: "pickupTime",
													value: formData.pickupTime,
													onChange: handleInputChange,
													className: "w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" })]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-bold text-ink ml-1",
												children: "Return Date *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "date",
													name: "returnDate",
													value: formData.returnDate,
													onChange: handleInputChange,
													className: "w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" })]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-bold text-ink ml-1",
												children: "Return Time *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "time",
													name: "returnTime",
													value: formData.returnTime,
													onChange: handleInputChange,
													className: "w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" })]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm font-bold text-ink ml-1",
											children: "Rental Package *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => handleDurationChange("12 Hours / 150 KM"),
													className: `relative p-3 rounded-xl border-2 text-center transition-all flex flex-col items-center justify-center ${formData.duration === "12 Hours / 150 KM" ? "border-primary bg-primary/5 shadow-[0_0_0_1px_rgba(var(--primary),0.1)]" : "border-gray-100 bg-gray-50 hover:bg-gray-100"}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1",
														children: "12 Hrs / 150 KM"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `text-lg font-bold font-display ${formData.duration === "12 Hours / 150 KM" ? "text-primary" : "text-ink"}`,
														children: vehicle.price12h150km
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => handleDurationChange("12 Hours / 300 KM"),
													className: `relative p-3 rounded-xl border-2 text-center transition-all flex flex-col items-center justify-center ${formData.duration === "12 Hours / 300 KM" ? "border-primary bg-primary/5 shadow-[0_0_0_1px_rgba(var(--primary),0.1)]" : "border-gray-100 bg-gray-50 hover:bg-gray-100"}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1",
														children: "12 Hrs / 300 KM"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `text-lg font-bold font-display ${formData.duration === "12 Hours / 300 KM" ? "text-primary" : "text-ink"}`,
														children: vehicle.price12h300km
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => handleDurationChange("24 Hours / 300 KM"),
													className: `relative p-3 rounded-xl border-2 text-center transition-all flex flex-col items-center justify-center ${formData.duration === "24 Hours / 300 KM" ? "border-primary bg-primary/5 shadow-[0_0_0_1px_rgba(var(--primary),0.1)]" : "border-gray-100 bg-gray-50 hover:bg-gray-100"}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1",
														children: "24 Hrs / 300 KM"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `text-lg font-bold font-display ${formData.duration === "24 Hours / 300 KM" ? "text-primary" : "text-ink"}`,
														children: vehicle.price24h300km
													})]
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm font-bold text-ink ml-1",
											children: "Pickup Location (Optional)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												name: "pickupLocation",
												value: formData.pickupLocation,
												onChange: handleInputChange,
												placeholder: "e.g. Jadcherla Railway Station",
												className: "w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" })]
										})]
									}),
									error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-3 bg-red-50 text-red-600 text-sm font-medium rounded-xl border border-red-100",
										children: error
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										className: "w-full h-14 bg-[#25D366] hover:bg-[#20b958] text-white font-bold rounded-xl shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2",
										children: ["Continue to WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 24 24",
											className: "w-5 h-5 fill-current",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
										})]
									})
								]
							})
						]
					})
				]
			}),
			lightboxIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageLightbox, {
				images: imagesToShow,
				initialIndex: lightboxIndex,
				onClose: () => setLightboxIndex(null)
			})
		]
	});
}
function Fleet() {
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("All");
	const [selectedVehicle, setSelectedVehicle] = (0, import_react.useState)(null);
	const [bookingVehicle, setBookingVehicle] = (0, import_react.useState)(null);
	const filteredVehicles = (0, import_react.useMemo)(() => {
		if (selectedCategory === "All") return vehicles;
		return vehicles.filter((v) => v.category === selectedCategory);
	}, [selectedCategory]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "cars",
		className: "py-24 bg-gray-50/50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryFilter, {
						selectedCategory,
						onSelectCategory: setSelectedCategory
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
						children: filteredVehicles.map((vehicle) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "animate-in fade-in zoom-in-95 duration-500 fill-mode-both",
							style: { animationDelay: `${vehicles.indexOf(vehicle) * 50}ms` },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarCard, {
								vehicle,
								onViewDetails: setSelectedVehicle,
								onBookNow: setBookingVehicle
							})
						}, vehicle.id))
					}),
					filteredVehicles.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center py-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-lg",
							children: "No vehicles found in this category."
						})
					})
				]
			}),
			selectedVehicle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarDetails, {
				vehicle: selectedVehicle,
				onClose: () => setSelectedVehicle(null),
				onBookNow: (vehicle) => {
					setSelectedVehicle(null);
					setBookingVehicle(vehicle);
				}
			}),
			bookingVehicle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingModal, {
				vehicle: bookingVehicle,
				onClose: () => setBookingVehicle(null)
			})
		]
	});
}
function WhyChooseUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "why-us",
		className: "py-24 bg-white relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto max-w-7xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-3xl mx-auto mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-bold font-display text-ink mb-4",
						children: "Why Choose RK Travels?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-lg",
						children: "Experience the joy of self-drive with Jadcherla's most trusted car rental service."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
					children: [
						{
							icon: Clock,
							title: "Multiple Car Options",
							description: "From hatchbacks to MUVs, we have a car for every need."
						},
						{
							icon: Wallet,
							title: "Affordable Pricing",
							description: "Transparent pricing with no hidden charges. Get the best value for your journey."
						},
						{
							icon: Sparkles,
							title: "Easy Booking",
							description: "Book instantly via WhatsApp or Call. Minimal paperwork required."
						},
						{
							icon: ShieldCheck,
							title: "Flexible Rental Plans",
							description: "Choose between 12-hour or 24-hour packages tailored to your trip."
						}
					].map((reason, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-gray-50 border border-gray-100 p-8 rounded-3xl transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(reason.icon, { className: "size-7 text-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold text-ink mb-3",
								children: reason.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground leading-relaxed",
								children: reason.description
							})
						]
					}, index))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 flex flex-wrap justify-center gap-6 md:gap-10",
					children: [
						"Transparent pricing",
						"Flexible rental plans",
						"Multiple car options",
						"Local support"
					].map((benefit, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-ink",
							children: benefit
						})]
					}, index))
				})
			]
		})]
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "py-24 bg-gray-50/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-3xl mx-auto mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl font-bold font-display text-ink mb-4",
					children: "Our Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-lg",
					children: "Comprehensive travel solutions tailored to your needs."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6",
				children: [
					{
						name: "Self-Drive Car Rentals",
						icon: Key
					},
					{
						name: "Car Rentals",
						icon: Car
					},
					{
						name: "SUV Rentals",
						icon: Map
					},
					{
						name: "Sedan Rentals",
						icon: Briefcase
					},
					{
						name: "Hatchback Rentals",
						icon: GraduationCap
					},
					{
						name: "Outstation Travel",
						icon: Plane
					},
					{
						name: "Family Travel",
						icon: HeartHandshake
					},
					{
						name: "Pickup & Drop",
						icon: Building2
					}
				].map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-gray-100 p-6 rounded-2xl flex flex-col items-center text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(service.icon, { className: "size-6 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm sm:text-base font-bold text-ink group-hover:text-primary transition-colors",
						children: service.name
					})]
				}, index))
			})]
		})
	});
}
function Reviews() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 bg-gray-50/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold font-display sm:text-4xl text-ink",
					children: "Customer Experiences"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-muted-foreground mb-12",
					children: "We value your feedback. Had a great trip with RK Travels? Let us know!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-3xl p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquarePlus, { className: "size-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-bold text-ink mb-4",
							children: "Share Your Experience"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground max-w-xl mx-auto mb-8",
							children: "Your reviews help us improve our services and help other customers make the right choice. Share your journey with us via WhatsApp."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: business.whatsapp,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex h-14 items-center justify-center rounded-xl bg-[#25D366] px-8 text-base font-bold text-white shadow-lg hover:bg-[#20b958] transition-all hover:-translate-y-0.5",
							children: "Leave a Review on WhatsApp"
						})
					]
				})
			]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 bg-white relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 flex flex-col lg:flex-row gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full lg:w-1/2 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-primary/10 rounded-[3rem] transform translate-x-4 translate-y-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative bg-gray-50 rounded-[3rem] p-10 sm:p-14 border border-gray-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl sm:text-5xl font-bold font-display text-primary mb-2",
									children: "100%"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider",
									children: "Quality Assured"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl sm:text-5xl font-bold font-display text-primary mb-2",
									children: "24/7"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider",
									children: "Customer Support"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl sm:text-5xl font-bold font-display text-primary mb-2",
									children: "8+"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider",
									children: "Vehicle Models"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl sm:text-5xl font-bold font-display text-primary mb-2",
									children: "100%"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider",
									children: "Customer Focus"
								})]
							})
						]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full lg:w-1/2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl md:text-4xl font-bold font-display text-ink mb-6",
						children: ["About ", business.shortName]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg text-muted-foreground leading-relaxed mb-6",
						children: [business.name, " provides reliable and affordable car rental services in Jadcherla and surrounding areas."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-muted-foreground leading-relaxed mb-8",
						children: "Choose from our fleet of well-maintained vehicles and enjoy a convenient, flexible and comfortable travel experience. With multiple options ranging from easy-to-drive hatchbacks to spacious MUVs, we have the perfect ride for every occasion."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-ink mb-2",
								children: "Location"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-sm text-muted-foreground mb-4 block hover:text-primary transition-colors cursor-pointer",
								children: business.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-ink mb-2",
								children: "Phone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:+91${business.phone}`,
									className: "hover:text-primary transition-colors",
									children: ["+91 ", business.phone]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:+91${business.additionalPhone}`,
									className: "hover:text-primary transition-colors",
									children: ["+91 ", business.additionalPhone]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: business.phoneHref,
						className: "inline-flex h-12 items-center justify-center rounded-full bg-ink px-8 text-base font-semibold text-white shadow-lg hover:bg-ink/80 transition-all",
						children: "Contact Us Today"
					})
				]
			})]
		})
	});
}
var englishRules = [
	"Valid Driving License and Aadhar Card are required.",
	"1 day means 24 hours. Extra hourly charge of ₹150 applies.",
	"Speed limit is 80 KM/HR. Exceeding speed limit incurs a fine of ₹200.",
	"Fastag, Tolls, and Challans are the customer's responsibility.",
	"In case of any damage, the customer is fully responsible.",
	"The car must not be used for illegal activities.",
	"Drunk driving is strictly prohibited.",
	"Cars must be returned clean, else a ₹300 washing charge applies.",
	"No refund for early returns."
];
var teluguRules = [
	"చెల్లుబాటయ్యే డ్రైవింగ్ లైసెన్స్ మరియు ఆధార్ కార్డ్ తప్పనిసరి.",
	"1 రోజు అంటే 24 గంటలు. అదనపు గంటకు ₹150 ఛార్జ్ చేయబడుతుంది.",
	"వేగ పరిమితి 80 KM/HR. వేగ పరిమితి మించితే ₹200 జరిమానా విధించబడుతుంది.",
	"ఫాస్టాగ్, టోల్స్ మరియు చలాన్లు కస్టమర్ బాధ్యత.",
	"ఏదైనా నష్టం జరిగితే, కస్టమరే పూర్తి బాధ్యత వహించాలి.",
	"కారును చట్టవిరుద్ధ కార్యకలాపాలకు ఉపయోగించరాదు.",
	"మద్యం సేవించి వాహనం నడపడం ఖచ్చితంగా నిషేధించబడింది.",
	"కార్లను శుభ్రంగా తిరిగి ఇవ్వాలి, లేదంటే ₹300 వాషింగ్ ఛార్జ్ వర్తిస్తుంది.",
	"ముందస్తుగా తిరిగి ఇస్తే రీఫండ్ లేదు."
];
function RulesAndRegulations() {
	const [language, setLanguage] = (0, import_react.useState)("en");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold font-display sm:text-4xl text-ink",
						children: "Rules and Regulations"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-muted-foreground",
						children: "Please read our rental policies carefully before booking."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex bg-gray-100 p-1 rounded-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLanguage("en"),
							className: `px-6 py-2.5 rounded-full text-sm font-bold transition-all ${language === "en" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-ink"}`,
							children: "English"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLanguage("te"),
							className: `px-6 py-2.5 rounded-full text-sm font-bold transition-all ${language === "te" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-ink"}`,
							children: "తెలుగు (Telugu)"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-gray-50/80 border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-6",
						children: (language === "en" ? englishRules : teluguRules).map((rule, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm",
								children: index + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink text-base sm:text-lg leading-relaxed pt-1 font-medium",
								children: rule
							})]
						}, index))
					})
				})
			]
		})
	});
}
function ContactCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "py-24 relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-5xl px-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl sm:text-5xl font-bold font-display text-white mb-6",
						children: "Ready to Hit the Road?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl text-white/90 mb-12 max-w-2xl mx-auto",
						children: "Book your car today and travel on your terms. Our team is available 24/7 to assist you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:+91${business.phone}`,
								className: "w-full sm:w-auto inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-lg font-bold text-ink shadow-xl hover:scale-105 transition-transform",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }),
									" Call ",
									business.phone
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:+91${business.additionalPhone}`,
								className: "w-full sm:w-auto inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-lg font-bold text-ink shadow-xl hover:scale-105 transition-transform",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }),
									" Call ",
									business.additionalPhone
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: business.whatsapp,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "w-full sm:w-auto inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 text-lg font-bold text-white shadow-xl hover:scale-105 transition-transform",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" }), " WhatsApp"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: business.mapsUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "w-full sm:w-auto inline-flex h-14 items-center justify-center gap-3 rounded-full bg-ink px-8 text-lg font-bold text-white shadow-xl border border-white/20 hover:scale-105 transition-transform",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5" }), " Get Directions"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center sm:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold",
									children: [
										business.phone,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-normal opacity-75 hidden sm:inline-block",
											children: "/"
										}),
										" ",
										business.additionalPhone
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden sm:block w-px h-6 bg-white/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: business.mapsUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center gap-3 max-w-sm cursor-pointer group p-2 -m-2 rounded-xl hover:bg-white/5 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-sm leading-tight group-hover:text-accent transition-colors",
									children: business.address
								})]
							})
						]
					})
				]
			})
		]
	});
}
function Footer() {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink text-white pt-20 pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#top",
								className: "flex items-center gap-2 font-semibold mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_default,
									alt: "RK Travels Logo",
									className: "h-16 object-contain"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/70 text-sm leading-relaxed mb-6",
								children: "Your trusted partner for self-drive cars, outstation travels, and family trips in Jadcherla."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: business.whatsapp,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" })
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold font-display mb-6",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-4 text-sm text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#top",
								className: "hover:text-primary transition-colors",
								children: "Home"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#cars",
								className: "hover:text-primary transition-colors",
								children: "Cars"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#why-us",
								className: "hover:text-primary transition-colors",
								children: "About"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "hover:text-primary transition-colors",
								children: "Services"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#why-us",
								className: "hover:text-primary transition-colors",
								children: "Why Choose Us"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "hover:text-primary transition-colors",
								children: "Contact"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#rules-regulations",
								className: "hover:text-primary transition-colors",
								children: "Policies"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold font-display mb-6",
						children: "Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-4 text-sm text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "hover:text-primary transition-colors",
								children: "Self Drive Cars"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "hover:text-primary transition-colors",
								children: "Car Rentals"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "hover:text-primary transition-colors",
								children: "SUV Rentals"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "hover:text-primary transition-colors",
								children: "Sedan Rentals"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "hover:text-primary transition-colors",
								children: "Hatchback Rentals"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "hover:text-primary transition-colors",
								children: "Outstation Travel"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold font-display mb-6",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-4 text-sm text-white/70 mb-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: business.mapsUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-start gap-3 cursor-pointer group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "group-hover:text-primary transition-colors",
										children: business.address
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: business.phoneHref,
											className: "hover:text-primary transition-colors",
											children: business.phone
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `tel:+91${business.additionalPhone}`,
											className: "hover:text-primary transition-colors",
											children: business.additionalPhone
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-semibold text-xs uppercase tracking-wider",
										children: "Hours"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open 24/7" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: business.mapsUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary/20 hover:bg-primary px-5 text-sm font-bold text-white transition-colors border border-primary/30",
							children: "📍 Get Directions"
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					currentYear,
					" ",
					business.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Made for Jadcherla" })]
			})]
		})
	});
}
function FloatingCTAs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] flex flex-col gap-4 md:gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: business.mapsUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300",
				style: { backgroundColor: "#C99445" },
				"aria-label": "Location",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-6 md:size-7" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `tel:+91${business.phone}`,
				className: "w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300",
				style: { backgroundColor: "#2563EB" },
				"aria-label": "Call",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-6 md:size-7" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: business.whatsapp,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300",
				style: { backgroundColor: "#25D366" },
				"aria-label": "WhatsApp",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-6 md:size-7" })
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground font-sans scroll-smooth relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fleet, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RulesAndRegulations, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCTAs, {})
		]
	});
}
//#endregion
export { Index as component };
