import { useState } from "react";
import { Phone, Mail, MapPin, Building2, Trees, ShieldCheck, Send } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyName:"Max Estates - Sector 105"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await axios.post("https://bkndlndng.trustbridgerealty.in/interest/v1/create",{
        ...formData,
        propertyName:"Max Estates - Sector 105"
      })
      if(res.data.success === true){
        toast.success("Form submitted successfully, our team will get back to you soon");
        console.log(res);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    
    // Simulate WhatsApp redirect like in Form.jsx
    // const whatsApp = `https://wa.me/917303975006?text=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}%0A%0ALocation: Max Estates - Sector 105`;
    
    // setTimeout(() => {
    //     window.open(whatsApp, "_blank");
    //     setIsSubmitting(false);
    //     setFormData({ name: "", email: "", phone: "", message: "" });
    // }, 1000);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
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
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    About <span className="text-blue-600">Max Estates</span>
                </h2>

                <p className="mt-4 text-gray-600 text-lg">
                    Max Estates is the real estate arm of the Max Group, known for its strong legacy in healthcare and financial services. Focused on premium developments in Delhi-NCR, the brand is built around the philosophy of “LiveWell” and “WorkWell”.
                </p>

                <p className="mt-4 text-gray-600 text-lg">
                    The developer emphasizes wellness-driven living with features like fresh air systems, low-density planning, and thoughtfully designed green spaces. Max Estates projects are positioned in the luxury segment, targeting modern homebuyers looking for quality, sustainability, and long-term value.
                </p>
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
                    className={`w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transform transition-all active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
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