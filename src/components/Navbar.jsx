import { useState ,useEffect } from "react";
import logo from "../assets/mxlogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);

  const menuItems = [
    "Home",
    "Highlights",
    "Gallery",
    "Price Floor",
    "Location",
    "Contact",
  ];

  const handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));
  };

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  },[])

  return (
    <nav id="home" className={`fixed top-0 left-0 w-full z-50 ${scrolled ? "bg-white" : "bg-transparent backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="w-32">
          <img src={logo} alt="logo" className="w-full object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 font-medium border-2 rounded-full p-3 ${scrolled ? "text-white bg-green-600" : "text-white bg-gray-400"}`}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="relative group transition duration-300"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Call Button */}
        <div className="hidden md:block">
          <a href="tel:+7303975006">
            <button className="px-6 py-2 rounded-full bg-yellow-500 text-white hover:bg-green-400 transition duration-300">
              Call Us
            </button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-2"
          onClick={() => setOpen(!open)}
        >
          <span className={`w-6 h-[2px] ${scrolled ? "bg-black" : "bg-white"}`}></span>
          <span className={`w-6 h-[2px] ${scrolled ? "bg-black" : "bg-white"}`}></span>
          <span className={`w-6 h-[2px] ${scrolled ? "bg-black" : "bg-white"}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="block text-gray-700 font-medium"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="tel:+7303975006">
            <button className="w-full mt-4 px-6 py-2 rounded-full bg-black text-white">
              Call Us
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;