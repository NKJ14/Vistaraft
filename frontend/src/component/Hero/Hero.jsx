import hero1 from "../../assets/hero1.jpg";
import Typewriting from "../Typewriting/Typewriting";
function Hero() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${hero1})` }}>
      <div className="absolute inset-0 bg-opacity-90"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        
<div>
      <div class="max-w-[85rem] mx-auto z-10 px-4 sm:px-6 lg:px-8">
        {/* <!-- Grid --> */}
        <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <Typewriting />
            <p class="mt-3 text-xl text-white">
              <strong>
              Hand-picked professionals and expertly curated trips, for You.
              </strong>
            </p>

            {/* <!-- Buttons --> */}
            <div class="mt-7 grid gap-3 w-full sm:inline-flex">
            <a
                class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-gray-50 text-white shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Get Started
              </a>
              <a
                class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-gray-50 text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Book a Trip Now
              </a>
            </div>
            {/* <!-- End Buttons --> */}

            {/* <!-- Review --> */}
            <div class="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5"></div>
            {/* <!-- End Review --> */}
          </div>
          {/* <!-- End Col --> */}

          <div class="relative ms-4">
            <div class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Hero --> */}
    </div>
      </div>
    </div>
  );
}

export default Hero;
