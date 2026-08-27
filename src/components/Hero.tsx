import { Clock, ShieldCheck, Award, User } from "lucide-react";
import rkBannerImg from "@/assets/rk_banner.png";
import { business } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative mt-[64px] md:mt-[74px] min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-74px)] overflow-hidden flex flex-col">
      {/* Banner Image — fills the section, crops intelligently per screen */}
      <div className="relative w-full flex-1 min-h-0">
        <img
          src={rkBannerImg}
          alt="RK Travels Banner"
          className="w-full h-full object-cover object-bottom sm:object-center"
          style={{ minHeight: "300px" }}
        />
        {/* Subtle bottom gradient so the CTA bar blends in */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/90 to-transparent" />
      </div>

      {/* Bottom bar with badges + CTAs */}
      <div className="relative z-10 bg-ink px-5 py-5 sm:py-6">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 text-[10px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-3 sm:size-4" /> Claimed & Verified</span>
            <span className="flex items-center gap-1.5"><Award className="size-3 sm:size-4" /> Best in Jadcherla</span>
            <span className="flex items-center gap-1.5"><Clock className="size-3 sm:size-4" /> Open 24/7</span>
            <span className="flex items-center gap-1.5"><User className="size-3 sm:size-4" /> Driver Available</span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
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
