import { X, Users, Settings2, Fuel, MapPin, Calendar, Clock } from "lucide-react";
import { Vehicle } from "@/lib/site-data";
import { useEffect } from "react";

interface CarDetailsProps {
  vehicle: Vehicle;
  onClose: () => void;
  onBookNow: (vehicle: Vehicle) => void;
}

export function CarDetails({ vehicle, onClose, onBookNow }: CarDetailsProps) {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-ink/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-sm transition-colors text-ink"
        >
          <X className="size-5" />
        </button>

        {/* Left: Image & Title */}
        <div className="w-full md:w-1/2 bg-gray-50 p-8 flex flex-col justify-center relative border-r border-gray-100 overflow-y-auto">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-2">
              {vehicle.category}
            </span>
            <h2 className="text-3xl font-bold font-display text-ink">{vehicle.name}</h2>
          </div>
          
          <img 
            src={vehicle.image} 
            alt={vehicle.name} 
            className="w-full h-auto object-contain mix-blend-multiply drop-shadow-xl"
          />

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="flex flex-col items-center p-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
              <Users className="size-5 text-primary mb-1" />
              <span className="text-[10px] uppercase text-muted-foreground font-semibold">Seats</span>
              <span className="text-xs font-bold">{vehicle.seats}</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
              <Settings2 className="size-5 text-primary mb-1" />
              <span className="text-[10px] uppercase text-muted-foreground font-semibold">Transmission</span>
              <span className="text-xs font-bold">{vehicle.transmission}</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
              <Fuel className="size-5 text-primary mb-1" />
              <span className="text-[10px] uppercase text-muted-foreground font-semibold">Fuel</span>
              <span className="text-xs font-bold">{vehicle.fuel}</span>
            </div>
          </div>
        </div>

        {/* Right: Booking Options */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col overflow-y-auto">
          <h3 className="text-xl font-bold font-display mb-6 border-b border-gray-100 pb-4">Rental Options</h3>
          
          <div className="space-y-4 mb-8">
            <label className="flex items-center justify-between p-4 rounded-2xl border-2 border-primary bg-primary/5 cursor-pointer transition-colors">
              <div className="flex flex-col">
                <span className="font-bold text-ink">12 Hours Plan</span>
                <span className="text-sm text-muted-foreground">Up to {vehicle.limit12h}</span>
              </div>
              <div className="text-right flex flex-col">
                <span className="font-bold text-primary text-xl">{vehicle.price12h}</span>
              </div>
            </label>
            <label className="flex items-center justify-between p-4 rounded-2xl border-2 border-gray-100 hover:border-gray-200 cursor-pointer transition-colors">
              <div className="flex flex-col">
                <span className="font-bold text-ink">24 Hours Plan</span>
                <span className="text-sm text-muted-foreground">Up to {vehicle.limit24h}</span>
              </div>
              <div className="text-right flex flex-col">
                <span className="font-bold text-ink text-xl">{vehicle.price24h}</span>
              </div>
            </label>
          </div>

          <div className="text-sm text-muted-foreground bg-gray-50 p-4 rounded-xl mb-8 space-y-2">
            <p>• Extra Hour Charge: <span className="font-semibold text-ink">{vehicle.extraHr}</span></p>
            <p>• Extra KM Charge: <span className="font-semibold text-ink">{vehicle.extraKm}</span></p>
          </div>

          <div className="mt-auto flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onBookNow(vehicle)}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white px-6 py-4 font-bold shadow-md hover:bg-[#20b958] transition-all hover:-translate-y-0.5"
            >
              Book Now
            </button>
            <a
              href="tel:+916300943161"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white px-6 py-4 font-bold shadow-md hover:bg-primary/90 transition-all hover:-translate-y-0.5"
            >
              Call to Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
