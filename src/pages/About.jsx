import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">
                CorpSolutions
              </span>
            </div>
            <div className="flex space-x-8">
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 rounded-md text-sm transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-blue-600 font-semibold px-3 py-2 rounded-md text-sm transition-colors duration-200"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Our
              <span className="text-blue-600 block">Company</span>
            </h1>

            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a professional business consulting and software
                development company dedicated to helping organizations achieve
                sustainable growth.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our team specializes in web development, business automation,
                cloud solutions, and digital transformation.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <div className="text-gray-600 mt-1">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* About Image/Illustration */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-12 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-blue-100 leading-relaxed mb-6">
              To empower businesses with innovative technology solutions that
              drive growth and efficiency in the digital age.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-blue-100 leading-relaxed">
              To be the leading partner in digital transformation, helping
              organizations worldwide achieve their full potential.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
