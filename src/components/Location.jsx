import Form from "./Form";
import { CircleArrowRight } from "lucide-react";
import { useState } from "react";

const Location = () => {

  const [open, setOpen] = useState(false);
  const advantages = [
    "Located directly on Noida Expressway for seamless city connectivity",
    "10 minutes to South Delhi via DND Flyway",
    "15 minutes to Sector 18 Noida commercial hub",
    "20 minutes to Kalindi Kunj and Okhla",
    "Close to Sector 101 & Sector 142 Aqua Line Metro Stations",
    "25 minutes to Indira Gandhi International Airport via expressways",
    "Easy access to FNG Corridor connecting Noida, Faridabad & Ghaziabad",
    "Near leading schools like Amity University and Lotus Valley International",
    "Surrounded by major IT parks and corporate hubs",
    "Close proximity to hospitals, malls and premium social infrastructure"
  ];

  return (
    <section id="location" className="w-full bg-linear-gradient-to-b from-white to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-black relative inline-block">
            Location Advantages
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-blue-600 rounded-full"></span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Discover Your Perfect Place in the Perfect Location
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-14 items-start">

          {/* Advantages List */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Key Connectivity Highlights
            </h3>

            <ul className="space-y-4">
              {advantages.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 bg-blue-600 hover:bg-blue-800 transition-all duration-300 text-white px-8 py-3 rounded-full text-lg shadow-md hover:shadow-lg flex items-center gap-2" onClick={() => setOpen(true)}>
              Book Visit
              <CircleArrowRight size={20} />
            </button>
          </div>

          {/* Map */}
          <div className="w-full h-full">
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl aspect-[16/10]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4313.124153800435!2d77.3621103761346!3d28.53162858865437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7e1686bb3fd%3A0x6aa7e35d6cb54ee3!2sMax%20Estates-%20Sector%20105!5e1!3m2!1sen!2sin!4v1772434146839!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <Form open={open} setOpen={setOpen} />
    </section>
  );
};

export default Location;