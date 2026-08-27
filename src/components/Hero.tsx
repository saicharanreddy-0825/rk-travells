import { Clock, ShieldCheck, Award, User } from "lucide-react";
import rkBannerImg from "@/assets/rk_banner.png";
import { business } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative mt-[64px] md:mt-[74px] h-[calc(100vh-64px)] md:h-[calc(100vh-74px)] min-h-[450px] overflow-hidden">
      {/* Banner image — cropped from the top by using object-bottom */}
      <img
        src={rkBannerImg}
        alt="RK Travels Banner"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />

      {/* Left-side gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-transparent" />

      {/* Text content — aligned left */}
      <div className="absolute inset-0 flex items-center">
        <div className="px-6 sm:px-10 md:px-16 lg:px-24 w-full max-w-3xl">
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-5 text-[10px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-wider">
            <span className="flex items-center gap-1 sm:gap-1.5"><ShieldCheck className="size-3 sm:size-4" /> Claimed & Verified</span>
            <span className="flex items-center gap-1 sm:gap-1.5"><Award className="size-3 sm:size-4" /> Best in Jadcherla</span>
            <span className="flex items-center gap-1 sm:gap-1.5"><Clock className="size-3 sm:size-4" /> Open 24/7</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-display text-white drop-shadow-lg">
            {business.name.split("&")[0]} &<br />
            <span className="text-primary">{business.name.split("&")[1]}</span>
          </h1>

          <div className="mt-2 sm:mt-3 flex items-center gap-2 sm:gap-3 text-lg sm:text-2xl md:text-3xl font-bold text-white drop-shadow-md">
            <User className="size-5 sm:size-6 md:size-8" />
            <span>Driver Also Available</span>
          </div>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed drop-shadow-sm max-w-lg">
            Reliable and affordable self-drive car rentals in Jadcherla with easy booking and multiple vehicle options.
          </p>

          <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href={business.phoneHref}
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-full bg-primary px-8 text-sm sm:text-base font-semibold text-white shadow-lg transition-opacity duration-200 hover:opacity-90 active:opacity-80 w-full sm:w-auto"
            >
              Book by Phone
            </a>
            <a
              href="#cars"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-full bg-white px-8 text-sm sm:text-base font-semibold text-ink shadow-lg hover:bg-gray-50 transition-all active:bg-gray-100 w-full sm:w-auto"
            >
              View Cars & Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
