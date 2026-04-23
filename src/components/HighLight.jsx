import Form from "./Form";
import { useState } from "react";
import { CircleArrowRight } from "lucide-react";

const Highlights = () => {
  const [open, setOpen] = useState(false);

  const highlights = [
    "Ultra-Low Density development with only ~45 homes per acre",
    "Large luxury residences ranging from 3,750 sq.ft. to 4,400 sq.ft.",
    "Exclusive Sky Villas up to 9,900 sq.ft. for ultra-premium living",
    "Only 2–4 apartments per floor ensuring maximum privacy",
    "Two private lifts per residence with a dedicated private lobby",
    "Vehicle-free podium living with all parking in a 3-level basement",
    "72,000 sq.ft. luxury clubhouse with temperature-controlled pools",
    "Wellness-focused design with Treated Fresh Air (TFA) systems",
    "UV-filtered water and advanced air filtration for healthier living",
    "460m elevated jogging sky-walk above the ground level",
    "Prime location directly on the Noida Expressway",
    "10-minute connectivity to South Delhi via DND and Sector 18",
    "Grade-A office spaces designed for corporate tenants and HNIs",
    "High-street luxury retail promenade with cafes and dining",
    "Integrated service apartments within the mixed-use development"
  ];

  return (
    <section id="highlights" className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-black relative inline-block">
            Highlights
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-blue-600 rounded-full"></span>
          </h2>

          <p className="mt-6 text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Premium residences designed for luxury, wellness, and exclusivity.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl 
                         transition-all duration-300 p-8 
                         border border-gray-100 hover:border-blue-600"
            >
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full shrink-0"></span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <button
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 transition-all duration-300 text-white px-10 py-3 rounded-full text-lg shadow-md hover:shadow-lg"
            onClick={() => setOpen(true)}
          >
            View More
            <CircleArrowRight />
          </button>
        </div>

        <Form open={open} setOpen={setOpen} />
      </div>
    </section>
  );
};

export default Highlights;