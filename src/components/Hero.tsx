import { MapPin, Calendar, Clock, Search, ShieldCheck, Award } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { business } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Car driving on highway"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 flex flex-col items-start pt-10">
        <div className="max-w-2xl text-white">
          <div className="flex flex-wrap gap-4 mb-6 text-xs sm:text-sm font-bold text-accent uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-4" /> Claimed & Verified</span>
            <span className="flex items-center gap-1.5"><Clock className="size-4" /> Open 24 Hrs</span>
            <span className="flex items-center gap-1.5"><Award className="size-4" /> 9+ Years in Business</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-display">
            Vinayaka Self Drive Cars <br className="hidden sm:block" />
            <span className="text-primary">and Car Rentals</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed">
            24/7 self-drive car rentals in Hanamkonda and Warangal with easy booking and affordable prices.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={business.phoneHref}
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
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

        {/* Booking/Search Panel */}
        <div className="w-full max-w-5xl mt-16 bg-white rounded-2xl p-4 sm:p-6 shadow-2xl animate-in slide-in-from-bottom-8 duration-700">
          <form className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2 relative">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Pickup Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-primary" />
                <select className="w-full h-12 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none">
                  <option>Hanamkonda, Warangal</option>
                  <option>Kazipet Railway Station</option>
                  <option>Warangal Railway Station</option>
                </select>
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Pickup Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-primary" />
                <input type="date" className="w-full h-12 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Return Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-primary" />
                <input type="date" className="w-full h-12 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
              </div>
            </div>

            <div className="flex items-end">
              <button
                type="button"
                className="w-full h-12 bg-accent hover:bg-accent/90 text-ink font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Search className="size-5" />
                Search Cars
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
