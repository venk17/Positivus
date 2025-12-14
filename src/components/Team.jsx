import { Linkedin } from "lucide-react";
import john from "../assets/teamMenber/john.png";
import jane from "../assets/teamMenber/jane.png";
import micheal from "../assets/teamMenber/micheal.png";
import emily from "../assets/teamMenber/emily.png";
import brain from "..//assets/teamMenber/brain.png";
import sarah from "../assets/teamMenber/sarah.png";

function Team() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO and Founder",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      image:john
    },
    {
      name: "Jane Doe",
      role: "Director of Operations",
      description:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      image:jane
    },
    {
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      description:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      image:micheal
    },
    {
      name: "Emily Johnson",
      role: "PPC Manager",
      description:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      image:emily
    },
    {
      name: "Brian Williams",
      role: "Social Media Specialist",
      description:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics",
      image:brain
    },
    {
      name: "Sarah Kim",
      role: "Content Creator",
      description:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content",
      image:sarah
    }
  ];

  const linkedinUrl = "https://www.linkedin.com/company/dummy";

  return (
    <section className="px-6 md:px-12 py-16 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 SAME HEADING DESIGN AS SERVICES */}
        <div className="mb-12 flex flex-col md:flex-row gap-6">
          <div className="inline-block">
            <div className="bg-lime-400 px-4 py-2 rounded-md">
              <span className="font-bold text-2xl">Team</span>
            </div>
          </div>
          <p className="text-gray-600 max-w-xl">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-900 rounded-3xl p-8
                         hover:shadow-xl transition border-b-8 border-b-black"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-24 h-24  relative ">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                 
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {member.role}
                  </p>
                </div>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <Linkedin className="w-4 h-4 text-lime-400" />
                </a>
              </div>

              <hr className="my-6 border-gray-300" />

              <p className="text-sm text-gray-600">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition">
            See all team
          </button>
        </div>

      </div>
    </section>
  );
}

export default Team;
