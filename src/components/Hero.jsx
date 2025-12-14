import heroImg from "../assets/homeImg.png";
import BrandSection from "./Brands";

function Hero() {
  return (
    <section className="px-6 md:px-12 py-16 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HERO CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Navigating the digital landscape for success
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Our digital marketing agency helps businesses grow and succeed online
              through SEO, PPC, social media marketing, and content creation.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition">
              Book a consultation
            </button>
          </div>

          <div>
            <img
              src={heroImg}
              alt="hero"
              className="w-full max-w-lg mx-auto"
            />
          </div>

        </div>

        {/* BRANDS INSIDE HERO */}
        <div className="mt-20">
          <BrandSection />
        </div>

      </div>
    </section>
  );
}

export default Hero;
