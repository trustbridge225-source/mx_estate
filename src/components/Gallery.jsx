"use client";
import { useState } from "react";
import { X } from "lucide-react";
import bg from "../assets/mxbg.webp";
import lt1 from "../assets/mx1.webp";
import lt2 from "../assets/mx3.webp";
import lt3 from "../assets/mx.webp";
import lt4 from "../assets/mx5.webp";
import lt5 from "../assets/mx6.webp";


const Gallery = () => {
  const images = [
    bg,
    lt1,
    lt2,
    lt3,
    lt4,
    lt5,
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-black relative inline-block">
            Gallery
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-green-700 rounded-full"></span>
          </h2>

          <p className="mt-6 text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
            An Unforgettable Once-in-a-Lifetime Experience
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => setSelected(src)}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
            >
              <img
                src={src}
                alt="Gallery"
                className="w-full h-full object-cover aspect-[4/3] 
                           group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          <img
            src={selected}
            alt="Preview"
            className="max-w-5xl w-full max-h-[90vh] object-contain rounded-xl"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;