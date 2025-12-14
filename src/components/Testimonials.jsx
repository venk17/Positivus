import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

function Testimonials() {
  const [current, setCurrent] = useState(2);

  const testimonials = [
    { text: "Great experience working with Positivus.", author: "Jane Doe", company: "CEO at ABC Company" },
    { text: "Professional and results-driven team.", author: "Michael Brown", company: "Founder at Growth Labs" },
    {
      text:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
      author: "John Smith",
      company: "Marketing Director at XYZ Corp"
    },
    { text: "Clear strategy and excellent execution.", author: "Sarah Kim", company: "Head of Marketing at Startify" },
    { text: "Highly recommended for scaling businesses.", author: "David Lee", company: "COO at NextGen" },
    { text: "Outstanding ROI and communication.", author: "Emma Wilson", company: "CMO at BrightTech" }
  ];

  const prevIndex = (current - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (current + 1) % testimonials.length;

  return (
    <section className="px-6 md:px-12 py-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-12 flex flex-col md:flex-row gap-6">
          <div className="bg-lime-400 px-4 py-2 rounded-md font-bold text-2xl">
            Testimonials
          </div>
          <p className="text-gray-600 max-w-xl">
            Hear from our satisfied clients.
          </p>
        </div>

        {/* Slider */}
        <div className="bg-[#12131a] rounded-[40px] px-10 py-16">

          <div className="flex items-center justify-center gap-6">

            {/* Previous */}
            <Card data={testimonials[prevIndex]} type="side" />

            {/* Current (60%) */}
            <Card data={testimonials[current]} type="main" />

            {/* Next */}
            <Card data={testimonials[nextIndex]} type="side" />

          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-12">

            <button onClick={() => setCurrent(prevIndex)} className="text-gray-400 hover:text-white">
              <ChevronLeft size={28} />
            </button>

            {/* ⭐ Stars indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={`transition ${
                    i === current
                      ? "fill-lime-400 text-lime-400"
                      : "fill-gray-600 text-gray-600"
                  }`}
                />
              ))}
            </div>

            <button onClick={() => setCurrent(nextIndex)} className="text-gray-400 hover:text-white">
              <ChevronRight size={28} />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

/* Card */
function Card({ data, type }) {
  const isMain = type === "main";

  return (
    <div
      className={`relative transition-all duration-300
        ${isMain ? "w-[60%] opacity-100" : "w-[20%] opacity-40 hidden md:block"}
      `}
    >
      <div className={`relative rounded-3xl p-6 text-white border
        ${isMain ? "border-lime-400" : "border-lime-400/40"}
      `}>
        <p className="text-sm leading-relaxed">“{data.text}”</p>

        {isMain && (
          <div className="absolute -bottom-3 left-10 w-6 h-6 bg-[#12131a] border-b border-r border-lime-400 rotate-45" />
        )}
      </div>

      <div className="mt-6 text-center">
        <p className="text-lime-400 font-semibold">{data.author}</p>
        <p className="text-gray-400 text-sm">{data.company}</p>
      </div>
    </div>
  );
}

export default Testimonials;
