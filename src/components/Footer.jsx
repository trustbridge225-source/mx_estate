"use client";
import { useState } from "react";
import { X } from "lucide-react";

const Compliance = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-gray-100 py-10 px-4 border-t">
      <div className="max-w-7xl mx-auto text-center space-y-4">

        {/* <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          Project RERA Details
        </h3>

        <div className="text-gray-700 text-sm md:text-base space-y-1">
          <p><strong>Tower 1 & 2:</strong> UPRERAPRJ459796/09/2025</p>
          <p><strong>Tower 3 & 4:</strong> UPRERAPRJ794300/09/2025</p>
          <p><strong>Agent RERA:</strong> UPRERAAGT10202</p>
        </div>

        <a
          href="https://up-rera.in/projects/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-green-700 font-medium hover:underline"
        >
          Visit Official UP-RERA Website
        </a> */}

        <div>
          <button
            onClick={() => setOpen(true)}
            className="text-gray-600 hover:text-green-700 text-sm underline transition"
          >
            Disclaimer & Privacy Policy
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl p-8 relative overflow-y-auto max-h-[90vh]">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>

            <h4 className="text-2xl font-semibold mb-6">
              Disclaimer & Privacy Policy
            </h4>

            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">

              <p>
                This website is for informational purposes only and does not constitute
                an offer to avail of any service. Prices, plans, specifications, and
                amenities are subject to change without prior notice.
              </p>

              <p>
                The images shown are artistic impressions and may not represent the
                actual project. All content, including brochures and marketing material,
                is subject to approval from relevant authorities.
              </p>

              <p>
                By submitting your contact details, you agree to receive communication
                from our sales team via call, SMS, WhatsApp, or email regarding this
                project and related offerings.
              </p>

              <p>
                We respect your privacy and do not sell or share your personal
                information with unauthorized third parties.
              </p>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Compliance;