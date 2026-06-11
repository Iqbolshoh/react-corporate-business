import { Building2, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Presentation */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight leading-none">
                  Corporate
                </span>
                <span className="text-xs font-semibold text-blue-500 tracking-widest uppercase">
                  Business
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 pe-4">
              Setting the global standard for enterprise consulting, strategic
              growth, and corporate financial advisory since 1998.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">
              Expertise
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform text-sm"
                >
                  Strategy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform text-sm"
                >
                  M&A Advisory
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform text-sm"
                >
                  Restructuring
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform text-sm"
                >
                  Operations
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">
              Firm
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform text-sm"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform text-sm"
                >
                  Newsroom
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Communication Channels */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">
              Global Headquarters
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-sm text-slate-400 leading-relaxed">
                  100 Corporate Business Avenue,
                  <br />
                  Financial District, NY 10005
                </p>
              </div>

              <a
                href="tel:+12125550199"
                className="flex items-center gap-4 group"
              >
                <Phone className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors" />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Direct Line
                  </p>
                  <p className="text-white group-hover:text-blue-400 transition-colors">
                    +1 (212) 555-0199
                  </p>
                </div>
              </a>

              <a
                href="mailto:executive@corporatebusiness.com"
                className="flex items-center gap-4 group"
              >
                <Mail className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors" />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Inquiries
                  </p>
                  <p className="text-white group-hover:text-blue-400 transition-colors">
                    contact@corporate.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Strip */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Corporate Business LLC. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Legal Disclosures
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
