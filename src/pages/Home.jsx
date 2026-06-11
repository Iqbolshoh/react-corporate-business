import {
  LineChart,
  Target,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  Award,
  ArrowUpRight,
} from "lucide-react";

export default function Home() {
  // Service offerings data array
  const services = [
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Strategic Planning",
      description:
        "Comprehensive business strategies designed to drive sustainable growth and market dominance.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Market Expansion",
      description:
        "Data-driven methodologies to identify and capture new market opportunities effectively.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Corporate Finance",
      description:
        "Expert financial restructuring and investment advisory for optimal resource allocation.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="w-full pt-24 pb-12 bg-slate-50">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Hero Typography and Actions */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-sm font-bold tracking-wide uppercase mb-8">
              <Award className="w-4 h-4" />
              Industry Leading Consultancy
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
              Empower Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Corporate Future
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              Partner with Corporate Business to unlock unprecedented growth. We
              deliver premium strategic solutions tailored for visionary
              enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-600/20 hover:-translate-y-1">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm">
                Book Consultation
              </button>
            </div>
          </div>

          {/* Hero Imagery */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-3xl transform rotate-3 scale-105 blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
              alt="Corporate Office"
              className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full"
            />

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 hidden md:flex items-center gap-4 animate-bounce-slow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">
                  Client Trust
                </p>
                <p className="text-2xl font-black text-slate-900">99.9%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Premium Solutions
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive frameworks designed for enterprise-scale success.
            </p>
          </div>
          <button className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2 group">
            View all services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 z-20 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-blue-600 shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center text-slate-900 font-bold group-hover:text-blue-600 transition-colors mt-auto">
                  Learn More
                  <ArrowUpRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
