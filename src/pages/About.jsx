import {
  Diamond,
  Scale,
  Users2,
  Trophy,
  CheckCircle2,
  Building,
} from "lucide-react";

export default function About() {
  // Executive team data
  const team = [
    {
      name: "Arthur Pendelton",
      role: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Eleanor Vance",
      role: "Managing Partner",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Marcus Sterling",
      role: "Head of Strategy",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Sophia Laurent",
      role: "Financial Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
    },
  ];

  // Fundamental business values
  const values = [
    {
      icon: <Diamond className="w-8 h-8" />,
      title: "Excellence",
      description:
        "Delivering unparalleled quality in every corporate endeavor.",
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Integrity",
      description: "Upholding the highest ethical standards in business.",
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Partnership",
      description: "Fostering deeply collaborative client relationships.",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Achievement",
      description: "Focusing on measurable results and robust ROI.",
    },
  ];

  return (
    <div className="w-full pt-24 bg-white">
      {/* Executive Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8">
            Defining the Standard of <br />
            <span className="text-blue-600">Corporate Excellence</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Corporate Business is a premier global advisory firm. We specialize
            in elevating enterprises through astute strategy, uncompromising
            integrity, and innovative management solutions.
          </p>
        </div>
      </section>

      {/* Corporate Overview Grid */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Statistics and Facts */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Global Offices", value: "12+", icon: <Building /> },
                { label: "Years Active", value: "25+", icon: <Trophy /> },
                { label: "Elite Consultants", value: "150+", icon: <Users2 /> },
                {
                  label: "Client Success",
                  value: "100%",
                  icon: <CheckCircle2 />,
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center"
                >
                  <div className="text-blue-600 mb-4">{stat.icon}</div>
                  <div className="text-4xl font-black text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Narrative Content */}
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                Our Legacy
              </h2>
              <div className="w-20 h-2 bg-blue-600 rounded-full mb-8"></div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Since our inception, Corporate Business has been at the
                forefront of strategic transformation. We do not just advise; we
                partner with our clients to architect their future.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our methodology blends rigorous analytical frameworks with deep
                industry expertise, ensuring that every solution is both
                innovative and flawlessly executable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Core Principles
          </h2>
          <p className="text-xl text-slate-600">
            The foundation of our corporate ethos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 border border-slate-200 rounded-3xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Executive Leadership
            </h2>
            <p className="text-xl text-slate-400">
              Guiding strategy with decades of expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden rounded-3xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium uppercase tracking-wider text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
