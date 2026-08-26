import { MapPin, Calendar, Clock, Search, ShieldCheck, Award } from "lucide-react";
import heroImg from "@/assets/selfdrivebackground.png";
import { business } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative mt-[70px] h-[calc(100vh-70px)] min-h-[650px] max-h-[750px] overflow-hidden flex items-center">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 flex flex-col items-start">
        <div className="max-w-2xl text-white">
          <div className="flex flex-wrap gap-4 mb-6 text-xs sm:text-sm font-bold text-accent uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-4" /> Claimed & Verified</span>
            <span className="flex items-center gap-1.5"><Award className="size-4" /> Best in Jadcherla</span>
            <span className="flex items-center gap-1.5"><Clock className="size-4" /> Open 24/7</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-display">
            {business.name.split("&")[0]} & <br className="hidden sm:block" />
            <span className="text-primary">{business.name.split("&")[1]}</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed">
            Reliable and affordable self-drive car rentals in Jadcherla with easy booking and multiple vehicle options.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={business.phoneHref}
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white shadow-lg transition-opacity duration-200 hover:opacity-90"
            >
              Book by Phone
            </a>
            <a
              href="#cars"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-ink shadow-lg hover:bg-gray-50 transition-all"
            >
              View Fleet & Pricing
            </a>
          </div>
        </div>


      </div>
    </section>
  );
}
