import { ArrowUpRight } from "lucide-react";
import searchEngineImg from "../assets/services/searchEngineImg.png";
import payPerClickImg from "../assets/services/payPerClickImg.png";
import socialMediaImg from "../assets/services/socialMediaImg.png";
import emailMarketingImg from "../assets/services/emailImg.png";
import contentCerationImg from "../assets/services/contentImg.png";
import analyticsImg from "../assets/services/analyticsImg.png";


export default function Services() {
  const services = [
    {
      titleLine1: "Search engine",
      titleLine2: "optimization",
      image:searchEngineImg,
      cardbg: "bg-[#F3F3F3]",
      titlebg: "bg-[#B9FF66]",
      textColor: "text-black",
      arrowBg: "bg-black",
      arrowColor: "text-[#B9FF66]",
    },
    {
      titleLine1: "Pay-per-click",
      titleLine2: "advertising",
      image:payPerClickImg,
      cardbg: "bg-[#B9FF66]",
      titlebg: "bg-white",
      textColor: "text-black",
      arrowBg: "bg-black",
      arrowColor: "text-[#B9FF66]",
    },
    {
      titleLine1: "Social Media",
      titleLine2: "Marketing",
      image:socialMediaImg,
      cardbg: "bg-black",
      titlebg: "bg-white",
      textColor: "text-white",
      arrowBg: "bg-white",
      arrowColor: "text-black",
    },
    {
      titleLine1: "Email",
      titleLine2: "Marketing",
      image:emailMarketingImg,
      cardbg: "bg-[#F3F3F3]",
      titlebg: "bg-[#B9FF66]",
      textColor: "text-black",
      arrowBg: "bg-black",
      arrowColor: "text-[#B9FF66]",
    },
    {
      titleLine1: "Content",
      titleLine2: "Creation",
      image:contentCerationImg,
      cardbg: "bg-[#B9FF66]",
      titlebg: "bg-white",
      textColor: "text-black",
      arrowBg: "bg-black",
      arrowColor: "text-[#B9FF66]",
    },
    {
      titleLine1: "Analytics",
      titleLine2: "and Tracking",
      image:analyticsImg,
      cardbg: "bg-black",
      titlebg: "bg-white",
      textColor: "text-white",
      arrowBg: "bg-white",
      arrowColor: "text-black",
    },
  ];

  return (
    <section
      id="services"
      className="px-6 md:px-12 py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row gap-6">
          <div className="inline-block">
            <div className="bg-lime-400 px-4 py-2 rounded-md">
              <span className="font-bold text-2xl">Services</span>
            </div>
          </div>
          <p className="text-gray-600 max-w-xl">
            At our digital marketing agency, we offer a range of services to help
            businesses grow and succeed online.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.cardbg} ${service.textColor}
                rounded-2xl p-6 sm:p-8 md:p-12
                border-2 border-black
                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                hover:translate-x-1 hover:translate-y-1
                hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300`}
            >
              <div className="flex flex-col lg:flex-row gap-6 justify-between items-start">
                {/* Left */}
                <div className="flex-1">
                  <div className="space-y-2 mb-7">
                    <h2
                      className={`${service.titlebg} text-black inline-block px-2 py-1 rounded-md text-2xl md:text-3xl font-bold`}
                    >
                      {service.titleLine1}
                    </h2>
                    <h2
                      className={`${service.titlebg} text-black inline-block px-2 py-1 rounded-md text-2xl md:text-3xl font-bold`}
                    >
                      {service.titleLine2}
                    </h2>
                  </div>

                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${service.arrowBg}`}
                    >
                      <ArrowUpRight
                        className={`w-5 h-5 ${service.arrowColor}`}
                      />
                    </div>
                    <span className="font-medium">Learn more</span>
                  </a>
                </div>

                {/* Image */}
                <img
                  src={service.image}
                  alt={`${service.titleLine1} ${service.titleLine2}`}
                  className="w-36 h-36 object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
