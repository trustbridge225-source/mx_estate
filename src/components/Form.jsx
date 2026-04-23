import { X } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Form = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyName:"Max Estates - Sector 105"
  });
  const [isSubmitting,setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Enter valid 10-digit phone number");
      return;
    }

    const res = await axios.post("https://bkndlndng.trustbridgerealty.in/interest/v1/create",{
      ...formData,
      propertyName:"Max Estates - Sector 105"
    })

    if(res.data.success === true){
      toast.success("Form submitted successfully, our team will get back to you soon");
      // console.log(res);
      window.dataLayer.push({
        event:"form_success"
      })
    }
    else{
      toast.error("Something went wrong");
    }

    // const whatsApp = `https://wa.me/917303975006?text=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}%0A%0ALocation: Max Estates - Sector 105`;

    // window.open(whatsApp, "_blank");

    setOpen(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">

        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="font-bold mb-4 text-lg">Contact Us</h3>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
          {isSubmitting ? "Submitting..." : "Send"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Form;