import { ArrowUpRight } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      text:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      text:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      text:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];

  return (
    <section
      id="cases"
      className="px-6 md:px-12 py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row gap-6">
          <div className="inline-block">
            <div className="bg-lime-400 px-4 py-2 rounded-md">
              <span className="font-bold text-2xl">Case Studies</span>
            </div>
          </div>
          <p className="text-gray-600 max-w-xl">
            Explore real-life examples of our proven digital marketing success
            through our case studies.
          </p>
        </div>

        {/* Case studies box */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-black rounded-3xl p-8 md:p-12 gap-8 md:gap-0">
          {cases.map((item, index) => (
            <div
              key={index}
              className="relative text-white md:px-6 first:md:pl-0 last:md:pr-0"
            >
              <p className="text-sm leading-relaxed mb-6 text-gray-200">
                {item.text}
              </p>

              <button className="flex items-center gap-2 text-lime-400 hover:text-lime-300 transition">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Vertical divider */}
              {index !== cases.length - 1 && (
                <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
