import {
  Target,
  Eye,
  Shield,
  Users,
  Award,
  Briefcase,
  Heart,
  Star,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function About() {
  // Team member details
  const team = [
    {
      name: "John Anderson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
    },
    {
      name: "Sarah Mitchell",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80",
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300&q=80",
    },
  ];

  // Company core values
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Constantly pushing boundaries to deliver cutting-edge solutions",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "Building trust through transparent and ethical practices",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working together to achieve exceptional results",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Dedicated to making a meaningful impact in every project",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-800/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              About Our Company
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building the Future of
              <span className="text-blue-300 block">Business Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate professionals dedicated to transforming
              businesses through innovative technology and strategic consulting.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Details Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Area */}
          <div className="relative order-2 lg:order-1 px-4 sm:px-0">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80"
              alt="Modern office workspace"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 sm:p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 sm:w-10 sm:h-10" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold">15+</div>
                  <div className="text-blue-200 text-xs sm:text-sm">
                    Industry Awards
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Area */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our
              <span className="text-blue-600 block">Company</span>
            </h2>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                We are a professional business consulting and software
                development company dedicated to helping organizations achieve
                sustainable growth.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Our team specializes in web development, business automation,
                cloud solutions, and digital transformation.
              </p>
            </div>

            {/* Company Statistics Data */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-3 mb-2 text-center sm:text-left">
                  <Clock className="w-6 h-6 text-blue-600 mb-2 sm:mb-0" />
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                    10+
                  </div>
                </div>
                <div className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                  Years Experience
                </div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-3 mb-2 text-center sm:text-left">
                  <CheckCircle className="w-6 h-6 text-green-600 mb-2 sm:mb-0" />
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                    200+
                  </div>
                </div>
                <div className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                  Projects Completed
                </div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-3 mb-2 text-center sm:text-left">
                  <Users className="w-6 h-6 text-purple-600 mb-2 sm:mb-0" />
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                    50+
                  </div>
                </div>
                <div className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                  Team Members
                </div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-3 mb-2 text-center sm:text-left">
                  <Star className="w-6 h-6 text-yellow-600 mb-2 sm:mb-0" />
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                    4.9
                  </div>
                </div>
                <div className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                  Client Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 md:p-12 text-white shadow-xl transform transition hover:-translate-y-1">
              <Target className="w-10 h-10 md:w-12 md:h-12 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-blue-100 leading-relaxed text-base md:text-lg">
                To empower businesses with innovative technology solutions that
                drive growth and efficiency in the digital age. We're committed
                to delivering excellence in every project.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-8 md:p-12 text-white shadow-xl transform transition hover:-translate-y-1">
              <Eye className="w-10 h-10 md:w-12 md:h-12 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-purple-100 leading-relaxed text-base md:text-lg">
                To be the leading partner in digital transformation, helping
                organizations worldwide achieve their full potential through
                innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Rendering */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Users className="w-4 h-4 mr-2" />
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Journey / Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600">
            How we became industry leaders
          </p>
        </div>
        <div className="space-y-8 max-w-3xl mx-auto">
          {[
            {
              year: "2013",
              title: "Company Founded",
              description: "Started with a vision to transform businesses",
            },
            {
              year: "2015",
              title: "First Major Client",
              description: "Secured partnership with Fortune 500 company",
            },
            {
              year: "2018",
              title: "Global Expansion",
              description: "Opened offices in 5 countries worldwide",
            },
            {
              year: "2024",
              title: "Industry Leadership",
              description: "200+ projects, 500+ satisfied clients",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:space-x-6 relative"
            >
              <div className="text-left sm:text-right w-full sm:w-32 mb-2 sm:mb-0">
                <span className="text-2xl font-bold text-blue-600">
                  {item.year}
                </span>
              </div>

              {/* Visual Timeline Connector (Hidden on mobile) */}
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full z-10 relative"></div>
                {index < 3 && (
                  <div className="absolute top-4 w-0.5 h-full bg-blue-200"></div>
                )}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex-1 w-full border-l-4 sm:border-l-0 border-blue-600 sm:border-transparent mt-2 sm:mt-0">
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
