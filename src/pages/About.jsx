import {
  Diamond,
  Scale,
  Users2,
  Trophy,
  CheckCircle2,
  Building,
  ArrowUpRight,
  Quote,
  TrendingUp,
  Globe2,
} from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Arthur Pendelton",
      role: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "30+ years of strategic leadership experience",
    },
    {
      name: "Eleanor Vance",
      role: "Managing Partner",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Former Fortune 500 executive advisor",
    },
    {
      name: "Marcus Sterling",
      role: "Head of Strategy",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Harvard MBA, McKinsey alumnus",
    },
    {
      name: "Sophia Laurent",
      role: "Financial Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "CFA charterholder, 20+ years experience",
    },
  ];

  const values = [
    {
      icon: <Diamond className="w-7 h-7" />,
      title: "Excellence",
      description:
        "Delivering unparalleled quality in every corporate endeavor.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <Scale className="w-7 h-7" />,
      title: "Integrity",
      description: "Upholding the highest ethical standards in business.",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      icon: <Users2 className="w-7 h-7" />,
      title: "Partnership",
      description: "Fostering deeply collaborative client relationships.",
      color: "from-violet-500 to-violet-700",
    },
    {
      icon: <Trophy className="w-7 h-7" />,
      title: "Achievement",
      description: "Focusing on measurable results and robust ROI.",
      color: "from-amber-500 to-amber-700",
    },
  ];

  const milestones = [
    { year: "1998", event: "Founded in New York" },
    { year: "2005", event: "First International Office" },
    { year: "2012", event: "Reached $1B in Client Revenue" },
    { year: "2024", event: "12 Global Offices Worldwide" },
  ];

  return (
    <div className="w-full pt-24 bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-slate-50/50 rounded-3xl" />
        <div className="relative text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/60 border border-blue-200/60 text-blue-700 text-sm font-semibold tracking-wide mb-8 backdrop-blur-sm">
            <Building className="w-4 h-4" />
            Global Advisory Since 1998
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
            Defining the Standard of <br className="hidden md:block" />
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Corporate Excellence
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,4 Q100,0 200,4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-blue-400/30"
                />
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Corporate Business is a premier global advisory firm. We specialize
            in elevating enterprises through astute strategy, uncompromising
            integrity, and innovative management solutions.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Global Offices",
              value: "12+",
              icon: <Globe2 className="w-6 h-6" />,
              trend: "+3 this year",
            },
            {
              label: "Years Active",
              value: "25+",
              icon: <TrendingUp className="w-6 h-6" />,
              trend: "Since 1998",
            },
            {
              label: "Elite Consultants",
              value: "150+",
              icon: <Users2 className="w-6 h-6" />,
              trend: "Top 1% talent",
            },
            {
              label: "Client Success",
              value: "100%",
              icon: <CheckCircle2 className="w-6 h-6" />,
              trend: "Satisfaction rate",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-2">{stat.trend}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl rotate-6 blur-3xl" />
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
                <Quote className="w-12 h-12 text-blue-600/20 mb-4" />
                <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                  "Our mission has always been to transform businesses through
                  strategic excellence and unwavering commitment to our clients'
                  success."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    AP
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Arthur Pendelton</p>
                    <p className="text-sm text-slate-500">
                      CEO, Corporate Business
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Our Legacy of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Excellence
                </span>
              </h2>
              <div className="w-20 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8" />

              <div className="space-y-4 mb-8">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center font-bold text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {milestone.year}
                    </div>
                    <div className="flex-grow bg-slate-50 rounded-2xl p-4 group-hover:bg-blue-50 transition-all duration-300">
                      <p className="font-semibold text-slate-700">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                Since our inception, Corporate Business has been at the
                forefront of strategic transformation. We don't just advise; we
                partner with our clients to architect their future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/60 border border-blue-200/60 text-blue-700 text-sm font-semibold tracking-wide mb-6">
            <Diamond className="w-4 h-4" />
            What We Stand For
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Core Principles
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The foundation of our corporate ethos and the pillars that guide
            every engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl border border-slate-100 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {value.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Learn more
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-slate-900 relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-blue-300 text-sm font-semibold tracking-wide mb-6">
              <Users2 className="w-4 h-4" />
              Our Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Executive Leadership
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Guiding strategy with decades of expertise and a passion for
              transforming businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-700"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
                        {member.role}
                      </p>
                      <p className="text-sm text-slate-600">{member.bio}</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 md:p-16 overflow-hidden">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
              backgroundRepeat: "repeat",
            }}
          />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Partner with our experts and discover how Corporate Business can
              elevate your organization to new heights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Schedule Consultation
              </button>
              <button className="bg-transparent text-white border-2 border-white/50 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:border-white">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
