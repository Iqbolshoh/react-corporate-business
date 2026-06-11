import {
  LineChart,
  Target,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  Award,
  ArrowUpRight,
  TrendingUp,
  Star,
  Clock,
  BarChart3,
  Zap,
  Trophy,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <LineChart className="w-7 h-7" />,
      title: "Strategic Planning",
      description:
        "Comprehensive business strategies designed to drive sustainable growth and market dominance.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      stats: "95% client retention",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Market Expansion",
      description:
        "Data-driven methodologies to identify and capture new market opportunities effectively.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
      stats: "40+ markets entered",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <Briefcase className="w-7 h-7" />,
      title: "Corporate Finance",
      description:
        "Expert financial restructuring and investment advisory for optimal resource allocation.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      stats: "$5B+ assets managed",
      color: "from-violet-500 to-violet-600",
    },
  ];

  const metrics = [
    {
      icon: <BarChart3 className="w-5 h-5" />,
      value: "500+",
      label: "Clients Worldwide",
    },
    {
      icon: <Star className="w-5 h-5" />,
      value: "99.9%",
      label: "Client Satisfaction",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      value: "24/7",
      label: "Expert Support",
    },
    { icon: <Zap className="w-5 h-5" />, value: "3x", label: "Average ROI" },
  ];

  return (
    <div className="w-full pt-24 pb-12 bg-white">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-50 to-emerald-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 text-blue-700 text-sm font-bold tracking-wide uppercase mb-8 shadow-sm">
              <Award className="w-4 h-4" />
              <span>Industry Leading Consultancy</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
              Empower Your <br className="hidden md:block" />
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient">
                  Corporate Future
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              Partner with Corporate Business to unlock unprecedented growth. We
              deliver premium strategic solutions tailored for visionary
              enterprises.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm">
                    {metric.icon}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">
                      {metric.value}
                    </div>
                    <div className="text-xs text-slate-500">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/30 hover:-translate-y-1">
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md">
                <Star className="w-5 h-5" />
                Book Consultation
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl transform rotate-6 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="Corporate Office"
                className="relative rounded-3xl shadow-2xl object-cover h-[450px] md:h-[550px] w-full"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-slate-100 hidden md:flex items-center gap-4 animate-bounce-gentle">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Client Trust
                </p>
                <p className="text-2xl font-black text-slate-900">99.9%</p>
                <div className="flex items-center gap-1 text-emerald-600 text-xs">
                  <TrendingUp className="w-3 h-3" />
                  <span>+2.5% this quarter</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-slate-100 hidden lg:flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Excellence
                </p>
                <p className="text-2xl font-black text-slate-900">25+</p>
                <p className="text-xs text-slate-400">Years of Leadership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/50 text-blue-700 text-sm font-semibold tracking-wide mb-4">
              <Zap className="w-4 h-4" />
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Premium Solutions
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive frameworks designed for enterprise-scale success and
              sustainable growth.
            </p>
          </div>
          <button className="group text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2 bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-xl transition-all duration-300">
            View all services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Service Icon */}
                <div
                  className={`absolute top-6 left-6 z-20 w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-white/90 text-sm font-semibold bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-block">
                    {service.stats}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center text-slate-900 font-bold group-hover:text-blue-600 transition-colors">
                    Learn More
                    <ArrowUpRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220%200%2060%2060%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-blue-300 text-sm font-semibold tracking-wide mb-6">
              <TrendingUp className="w-4 h-4" />
              Start Growing Today
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Join 500+ companies that trust Corporate Business for strategic
              advisory and transformative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/30 hover:-translate-y-1">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:border-white/50">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
