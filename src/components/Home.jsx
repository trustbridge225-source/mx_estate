import bcg from "../assets/bg.webp";
import bld from "../assets/bld.png";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen relative overflow-hidden mt-20 md:mt-0">
      
      {/* Mobile Background Image (rectangle, no crop) */}
      <img
        src={bcg}
        alt="background"
        className="md:hidden absolute top-1/5 left-1/2 
                   -translate-x-1/2 -translate-y-1/2 
                   w-4xl h-5xl object-contain rounded-xl"
      />

      {/* Desktop Background */}
      <div
        className="hidden md:block w-full h-full"
        style={{
          backgroundImage: `url(${bcg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content Card */}
      <div className="
        w-[90%] max-w-sm 
        absolute bottom-6 left-1/2 -translate-x-1/2 top-1/2
        md:left-[8%] md:top-1/4 md:translate-x-0 md:bottom-auto md:w-auto
        bg-black/40 border border-white rounded-2xl
      ">
        <div className="flex flex-col items-center p-4">
          
          <h1 className="text-2xl md:text-3xl font-bold text-white mt-2">
            Max Estate
          </h1>

          <p className="text-white text-sm md:text-base">
            Sector 105, Noida
          </p>

          {/* Info Section */}
          <div className="flex w-full flex-col space-y-2 mt-4">
            
            <div className="flex items-center bg-black rounded-xl p-2">
              <img src={bld} alt="" className="w-6 h-6 mr-2" />
              <p className="text-white text-sm">
                Land Parcel : 10.33 Acres
              </p>
            </div>

            <div className="flex items-center bg-black rounded-xl p-2">
              <img src={bld} alt="" className="w-6 h-6 mr-2" />
              <p className="text-white text-sm">
                Tower : 2
              </p>
            </div>

            <div className="flex items-center bg-black rounded-xl p-2">
              <img src={bld} alt="" className="w-6 h-6 mr-2" />
              <p className="text-white text-sm">
                G+36 to G+37 Towers
              </p>
            </div>

            <div className="flex items-center bg-black rounded-xl p-2">
              <img src={bld} alt="" className="w-6 h-6 mr-2" />
              <p className="text-white text-sm">
                60% Residential / 40% Commercial
              </p>
            </div>

          </div>

          {/* Highlights */}
          <div className="hidden md:flex w-full flex-col gap-2 mt-6">
            
            <div className="rounded-xl bg-white text-center">
              <p className="text-black text-sm p-2">
                45 homes per acre
              </p>
            </div>

            <div className="rounded-xl bg-white text-center">
              <p className="text-black text-sm p-2">
                Treated Fresh Air (TFA)
              </p>
            </div>

            <div className="rounded-xl bg-white text-center">
              <p className="text-black text-sm p-2">
                Vehicle-free ground level
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;