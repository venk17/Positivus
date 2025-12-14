import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function WorkingProcess() {
  const [openIndex, setOpenIndex] = useState(0);

  const processes = [
    {
      number: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts."
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      description:
        "We conduct thorough research and develop a comprehensive strategy tailored to your business needs."
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "Our team executes the strategy with precision and attention to detail."
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      description:
        "We continuously monitor performance and optimize for better results."
    },
    {
      number: "05",
      title: "Reporting and Communication",
      description:
        "Regular reports keep you informed of progress and results."
    },
    {
      number: "06",
      title: "Continual Improvement",
      description:
        "We constantly refine our approach based on data and feedback."
    }
  ];

  return (
    <section className="px-6 md:px-12 py-16 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row gap-6">
          <div className="inline-block">
            <div className="bg-lime-400 px-4 py-2 rounded-md">
              <span className="font-bold text-2xl">Our Working Process</span>
            </div>
          </div>
          <p className="text-gray-600 max-w-xl">
            Step-by-step guide to achieving your business goals.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          {processes.map((process, index) => (
            <div
              key={index}
              className={`
                rounded-3xl overflow-hidden
                border-2 border-black
                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                hover:translate-x-1 hover:translate-y-1
                hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300
                ${openIndex === index ? "bg-lime-400" : "bg-gray-100"}
              `}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-6">
                  <span className="text-4xl md:text-5xl font-bold">
                    {process.number}
                  </span>
                  <span className="text-xl md:text-2xl font-bold">
                    {process.title}
                  </span>
                </div>

                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="border-t-2 border-black pt-6">
                    <p className="text-lg">{process.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WorkingProcess;
