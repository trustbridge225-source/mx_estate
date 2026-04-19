import { useState } from "react";
import { Phone, Mail, MapPin, Building2, Trees, ShieldCheck, Send } from "lucide-react";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate WhatsApp redirect like in Form.jsx
    const whatsApp = `https://wa.me/917303975006?text=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}%0A%0ALocation: Max Estates - Sector 105`;
    
    setTimeout(() => {
        window.open(whatsApp, "_blank");
        setIsSubmitting(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  const projectDetails = [
    { icon: <MapPin className="text-green-700" />, text: "Sector 105, Noida Expressway" },
    { icon: <Building2 className="text-green-700" />, text: "2 Iconic High-Rise Towers (G+36 to G+37)" },
    { icon: <Trees className="text-green-700" />, text: "Ultra-Low Density: ~45 homes per acre" },
    { icon: <ShieldCheck className="text-green-700" />, text: "Treated Fresh Air (TFA) systems" },
  ];

  return (
    <section id="contact" className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Left Side: Project Details */}
          <div className="lg:w-1/2 flex flex-col justify-center space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Experience the Pinnacle of <span className="text-green-700">Luxury Living</span>
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                At Max Estate Sector 105, we redefine urban elegance with wellness-focused design and world-class amenities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {projectDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-200 transition-colors">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    {detail.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{detail.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-100">
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3 text-gray-600">
                        <Phone size={20} className="text-green-700" />
                        <span>+91 73039 75006</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                        <Mail size={20} className="text-green-700" />
                        <span>sales@maxestatenoida.com</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Side: Modern Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-50 relative overflow-hidden group">
              {/* Decorative background element */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-50 rounded-full blur-3xl transition-all group-hover:bg-green-100" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Inquire Now</h3>
                <p className="text-gray-500 mb-8">Fill in your details and our team will get in touch shortly.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="10-digit number"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="I'm interested in..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-700/20 transform transition-all active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? "Sending..." : (
                        <>
                            Get Expert Assistance
                            <Send size={18} />
                        </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FormSection;