import {
  Lightbulb,
  TrendingUp,
  Handshake,
  ArrowRight,
  Shield,
  Zap,
  Users,
} from "lucide-react";

export default function Home() {
  // Array containing core services data
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Digital Innovation",
      description:
        "Transform your business with cutting-edge technology solutions and strategic digital planning.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Growth",
      description:
        "Accelerate your growth with data-driven strategies and scalable solutions.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Strategic Consulting",
      description:
        "Expert guidance to optimize operations and maximize business potential.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern Layer */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Transforming Businesses Since 2013
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Corporate Business
                <span className="text-blue-600 block">
                  Solutions for Growth
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We help companies grow through innovative digital solutions,
                strategic consulting, and modern technology. Transform your
                business with our expert team.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center w-full sm:w-auto">
                  <Users className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
              </div>

              {/* Social Proof / Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mt-10 pt-8 border-t border-gray-200">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&h=50&q=80&crop=face`}
                      alt="Team member"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600 text-center sm:text-left">
                  <strong className="text-blue-600">500+</strong> happy clients
                  <br className="hidden sm:block lg:hidden" /> worldwide
                </div>
              </div>
            </div>

            {/* Hero Image Presentation */}
            <div className="relative mt-12 lg:mt-0 px-4 sm:px-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl blur-lg opacity-20 hidden sm:block"></div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Business professionals meeting"
                className="rounded-2xl shadow-2xl relative w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 sm:bottom-[-20px] sm:right-[-20px] bg-white rounded-xl shadow-xl p-4 sm:p-6 scale-90 sm:scale-100">
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-green-500" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      Success Rate
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">
                      98%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-blue-600 mb-4 bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center mt-auto w-max">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have already accelerated their
            growth with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg w-full sm:w-auto">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 w-full sm:w-auto">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
