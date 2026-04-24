import { useState } from "react";
import { Phone, Mail, MapPin, Building2, Trees, ShieldCheck, Send, MessageCircle } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyName: "Max Estates - Sector 105"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData((prev)=>({...prev,[name]:value}))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email) {
      toast.error("Please fill all required fields");
      setIsSubmitting(false);
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Enter valid 10-digit phone number");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await axios.post("https://bkndlndng.trustbridgerealty.in/interest/v1/create", {
        ...formData,
        propertyName: "Max Estates - Sector 105"
      })
      if (res.data.success === true) {
        toast.success("Form submitted successfully, our team will get back to you soon");
        window.dataLayer?.push({
          event: "form_success"
        })
        setFormData({ name: "", email: "", phone: "", message: "", propertyName: "Max Estates - Sector 105" });
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to submit form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-gradient-to-br from-white via-gray-50 to-blue-50/30 py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Abstract background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-48 right-0 w-64 h-64 bg-green-100/40 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide"
              >
                CONTACT US
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Experience Luxury at <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Max Estates</span>
              </h2>
            </div>

            <div className="prose prose-lg text-gray-600 max-w-xl">
              <p>
                Max Estates is the real estate arm of the Max Group, known for its strong legacy in healthcare and financial services. Built around the philosophy of “LiveWell” and “WorkWell”, we focus on premium developments in Delhi-NCR.
              </p>
              <p className="mt-4">
                Our projects emphasize wellness-driven living with fresh air systems, low-density planning, and thoughtfully designed green spaces, targeting modern homebuyers looking for quality and sustainability.
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-500">RERA NO:</p>
                <p className="text-blue-800 font-bold">UPRERAPRJ529777/03/2026</p>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <a 
                href="tel:+917303975006" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Call Us</p>
                  <p className="text-lg font-bold text-gray-900">+91 73039 75006</p>
                </div>
              </a>
              <a 
                href="https://wa.me/917303975006" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">WhatsApp</p>
                  <p className="text-lg font-bold text-gray-900">Get Instant Info</p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <ShieldCheck size={18} className="text-green-600" />
                <span>Your data is secure and will only be used for communication.</span>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-12 border border-gray-100 relative">
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-gray-900">Inquire Now</h3>
                <p className="text-gray-500 mt-2">Fill the form and we'll connect within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    id="name-section"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white outline-none transition-all placeholder-transparent"
                    required
                  />
                  <label htmlFor="name-section" className="absolute left-5 top-4 text-gray-400 pointer-events-none transition-all peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-blue-600 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
                    Full Name
                  </label>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      id="email-section"
                      placeholder=" "
                      value={formData.email}
                      onChange={handleChange}
                      className="peer w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white outline-none transition-all placeholder-transparent"
                      required
                    />
                    <label htmlFor="email-section" className="absolute left-5 top-4 text-gray-400 pointer-events-none transition-all peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-blue-600 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
                      Email Address
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      id="phone-section"
                      placeholder=" "
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="[0-9]{10}"
                      className="peer w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white outline-none transition-all placeholder-transparent"
                      required
                    />
                    <label htmlFor="phone-section" className="absolute left-5 top-4 text-gray-400 pointer-events-none transition-all peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-blue-600 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
                      Phone Number
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    id="message-section"
                    rows="4"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    className="peer w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white outline-none transition-all resize-none placeholder-transparent"
                  />
                  <label htmlFor="message-section" className="absolute left-5 top-4 text-gray-400 pointer-events-none transition-all peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-blue-600 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
                    Your Message
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-5 rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        SENDING...
                    </span>
                  ) : (
                      <>
                          GET EXPERT ASSISTANCE
                          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                  )}
                </motion.button>
                <p className="text-center text-sm text-gray-500 mt-4">We respect your privacy. You will receive a call from our team within 24 hours.</p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FormSection;
