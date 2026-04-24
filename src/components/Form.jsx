import { X, Send } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const Form = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyName: "Max Estates - Sector 105",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData((prev)=>({...prev,[name]:value}));
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
        propertyName: "Max Estates - Sector 105",
      });

      if (res.data.success === true) {
        toast.success("Form submitted successfully, our team will get back to you soon");
        window.dataLayer?.push({
          event: "form_success",
        });
        setOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          propertyName: "Max Estates - Sector 105"
        });
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/60 z-[100] backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-[2rem] shadow-2xl p-8 w-full max-w-md relative border border-gray-100 overflow-hidden"
          >
            {/* Abstract Decorative Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -mr-10 -mt-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-50 -ml-10 -mb-10 pointer-events-none" />

            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 p-2 bg-gray-50 hover:bg-gray-300 text-gray-500 hover:text-gray-800 rounded-full transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
              <p className="text-gray-500 text-sm mt-1">We'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  id="modal-name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full px-5 py-3.5 rounded-xl bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white outline-none transition-all placeholder-transparent"
                  required
                />
                <label htmlFor="modal-name" className="absolute left-5 top-3.5 text-gray-400 pointer-events-none transition-all peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-blue-600 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
                  Full Name
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  id="modal-email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full px-5 py-3.5 rounded-xl bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white outline-none transition-all placeholder-transparent"
                  required
                />
                <label htmlFor="modal-email" className="absolute left-5 top-3.5 text-gray-400 pointer-events-none transition-all peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-blue-600 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
                  Email Address
                </label>
              </div>

              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  id="modal-phone"
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  className="peer w-full px-5 py-3.5 rounded-xl bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white outline-none transition-all placeholder-transparent"
                  required
                />
                <label htmlFor="modal-phone" className="absolute left-5 top-3.5 text-gray-400 pointer-events-none transition-all peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-blue-600 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
                  Phone Number
                </label>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  id="modal-message"
                  rows="3"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full px-5 py-3.5 rounded-xl bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white outline-none transition-all resize-none placeholder-transparent"
                />
                <label htmlFor="modal-message" className="absolute left-5 top-3.5 text-gray-400 pointer-events-none transition-all peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-blue-600 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
                  Your Message (Optional)
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-4 rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
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
                    SUBMIT INQUIRY
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Form;