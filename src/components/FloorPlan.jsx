"use client";
import { useState } from "react";
import floorplan from "../assets/floorplan.png";
import { CircleArrowRightIcon } from "lucide-react";
import Form from "./Form";

const FloorPlan = () => {
  const [active, setActive] = useState("4 BHK + Staff");
  const [open, setOpen] = useState(false);

  const plans = [
    {
      title: "4 BHK + Staff",
      size: "3750 – 3800 Sq. Ft.",
      price: "Starting ₹9.5 Cr*",
    },
    {
      title: "4.5 BHK / Sky Villa",
      size: "4200 – 4300 Sq. Ft.",
      price: "Starting ₹11.5 Cr*",
    },
    {
      title: "Duplex / Townhouse",
      size: "Up to 9900 Sq. Ft.",
      price: "Ultra Luxury Residences",
    },
  ];

  const currentPlan = plans.find((p) => p.title === active);

  return (
    <section id="floorplan" className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-black relative inline-block">
            Floor Plan
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-green-700 rounded-full"></span>
          </h2>

          <p className="mt-6 text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Spacious LiveWell Residences Designed For Luxury & Privacy
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-14">
          {plans.map((plan, index) => (
            <button
              key={index}
              onClick={() => setActive(plan.title)}
              className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300
              ${
                active === plan.title
                  ? "bg-green-700 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {plan.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-16">
          <div className="bg-gray-50 rounded-3xl shadow-xl p-8 md:p-12 text-center">

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              {currentPlan.title}
            </h3>

            <p className="mt-4 text-gray-600 text-lg">
              Size: {currentPlan.size}
            </p>

            <p className="text-gray-700 font-medium">
              {currentPlan.price}
            </p>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Each residence features private lift access, dedicated lobby space,
              expansive living areas, and ultra-premium finishes designed for
              modern luxury living.
            </p>

            {/* Floorplan Preview */}
            <div className="relative mt-10 aspect-[16/10] bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-lg backdrop-blur-2xl">
              <img src={floorplan} alt="floorplan" className="opacity-10" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="bg-green-700 px-6 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:bg-green-600 transition-all duration-300"
                  onClick={() => setOpen(true)}
                >
                  <button className="text-white text-lg font-semibold">
                    View Floor Plan
                  </button>
                  <CircleArrowRightIcon className="text-white" />
                </div>
              </div>
            </div>

          </div>
        </div>

        <Form open={open} setOpen={setOpen} />
      </div>
    </section>
  );
};

export default FloorPlan;