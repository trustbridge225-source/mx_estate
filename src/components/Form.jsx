import { X } from "lucide-react";
import { useState } from "react";

const Form = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Please fill all required fields");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    const whatsApp = `https://wa.me/917303975006?text=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}%0A%0ALocation: Max Estates - Sector 105`;

    window.open(whatsApp, "_blank");

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
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Send
          </button>

        </form>
      </div>
    </div>
  );
};

export default Form;