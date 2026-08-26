import { MapPin, Calendar, Clock, Search, ShieldCheck, Award, User } from "lucide-react";
import heroImg from "@/assets/selfdrivebackground.png";
import { business } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative mt-[64px] md:mt-[74px] h-[calc(100vh-64px)] md:h-[calc(100vh-74px)] min-h-[550px] sm:min-h-[650px] max-h-[750px] overflow-hidden flex items-center">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center sm:bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/50 sm:from-ink/90 sm:via-ink/70 sm:to-ink/40"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 flex flex-col items-start">
        <div className="max-w-2xl text-white">
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6 text-[10px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-wider">
            <span className="flex items-center gap-1 sm:gap-1.5"><ShieldCheck className="size-3 sm:size-4" /> Claimed & Verified</span>
            <span className="flex items-center gap-1 sm:gap-1.5"><Award className="size-3 sm:size-4" /> Best in Jadcherla</span>
            <span className="flex items-center gap-1 sm:gap-1.5"><Clock className="size-3 sm:size-4" /> Open 24/7</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-display">
            {business.name.split("&")[0]} & <br className="hidden sm:block" />
            <span className="text-primary">{business.name.split("&")[1]}</span>
          </h1>
          
          <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl md:text-3xl font-bold text-white">
            <User className="size-5 sm:size-6 md:size-8" />
            <span>Driver Also Available</span>
          </div>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
            Reliable and affordable self-drive car rentals in Jadcherla with easy booking and multiple vehicle options.
          </p>
          
          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href={business.phoneHref}
              className="inline-flex h-12 sm:h-12 items-center justify-center rounded-full bg-primary px-8 text-sm sm:text-base font-semibold text-white shadow-lg transition-opacity duration-200 hover:opacity-90 active:opacity-80 w-full sm:w-auto"
            >
              Book by Phone
            </a>
            <a
              href="#cars"
              className="inline-flex h-12 sm:h-12 items-center justify-center rounded-full bg-white px-8 text-sm sm:text-base font-semibold text-ink shadow-lg hover:bg-gray-50 transition-all active:bg-gray-100 w-full sm:w-auto"
            >
              View Cars & Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
