import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Globe,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const expertiseLinks = [
    "Strategy",
    "M&A Advisory",
    "Restructuring",
    "Operations",
  ];
  const firmLinks = ["Leadership", "Careers", "Newsroom", "Contact"];
  const legalLinks = ["Privacy Policy", "Terms of Use", "Legal Disclosures"];

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-24 pb-8 border-t border-slate-800/50">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight leading-none">
                  Corporate
                </span>
                <span className="text-xs font-bold text-blue-400 tracking-[0.2em] uppercase">
                  Business
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-md text-sm">
              Setting the global standard for enterprise consulting, strategic
              growth, and corporate financial advisory since 1998.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                aria-label="Visit our website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                aria-label="Contact us"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-sm tracking-wider mb-6 relative inline-block">
              Expertise
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500 rounded-full" />
            </h3>
            <ul className="space-y-3 mt-4">
              {expertiseLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm transition-all duration-200 hover:pl-1.5 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-500 transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-sm tracking-wider mb-6 relative inline-block">
              Firm
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500 rounded-full" />
            </h3>
            <ul className="space-y-3 mt-4">
              {firmLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm transition-all duration-200 hover:pl-1.5 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-500 transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-sm tracking-wider mb-6 relative inline-block">
              Global Headquarters
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500 rounded-full" />
            </h3>
            <div className="space-y-6 mt-4">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 group-hover:border-blue-600/30 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
                    Address
                  </p>
                  <p className="text-sm text-white leading-relaxed">
                    100 Corporate Business Avenue,
                    <br />
                    Financial District, NY 10005
                  </p>
                </div>
              </div>

              <a
                href="tel:+12125550199"
                className="flex items-start gap-4 group hover:translate-x-1 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 group-hover:border-blue-600/30 transition-all duration-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
                    Direct Line
                  </p>
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                    +1 (212) 555-0199
                  </p>
                </div>
              </a>

              <a
                href="mailto:contact@corporate.com"
                className="flex items-start gap-4 group hover:translate-x-1 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 group-hover:border-blue-600/30 transition-all duration-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
                    Inquiries
                  </p>
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                    contact@corporate.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Strip */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © {currentYear} Corporate Business LLC. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-500 hover:after:w-full after:transition-all"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
