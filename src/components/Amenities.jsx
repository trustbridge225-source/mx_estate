import {
  Waves,
  Dumbbell,
  ShieldCheck,
  Building2,
  Trees,
  Activity,
  HeartPulse,
  Briefcase,
} from "lucide-react";

const Amenities = () => {
  const amenities = [
    { name: "72,000 Sq.Ft. Luxury Clubhouse", icon: Building2 },
    { name: "Temperature Controlled Swimming Pool", icon: Waves },
    { name: "460m Elevated Sky Jogging Track", icon: Activity },
    { name: "State-of-the-art Fitness & Wellness Center", icon: Dumbbell },
    { name: "Vehicle-Free Podium with Green Trails", icon: Trees },
    { name: "Advanced Air & Water Filtration Systems", icon: HeartPulse },
    { name: "24/7 Concierge & Security Services", icon: ShieldCheck },
    { name: "Grade-A Offices & Retail Promenade", icon: Briefcase },
  ];

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-black relative inline-block">
            Our Amenities
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-green-700 rounded-full"></span>
          </h2>

          <p className="mt-6 text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Luxury, wellness and convenience designed for elevated living
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 hover:bg-white transition-all duration-300 
                           shadow-md hover:shadow-xl rounded-2xl p-8 
                           flex flex-col items-center text-center 
                           group cursor-pointer"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center 
                             bg-green-100 text-green-700 rounded-full 
                             group-hover:bg-green-700 group-hover:text-white 
                             transition-all duration-300"
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Amenities;