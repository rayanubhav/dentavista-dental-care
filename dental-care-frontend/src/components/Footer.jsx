import { Facebook, Instagram, Linkedin, Phone, Mail, Home } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Clinic Info */}
          <div>
            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DENTAVISTA
            </h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              Restoring Smiles, Restoring Confidence. Specialist in complex
              prosthetic and implant solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1HJUumdYND/"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/dentavista_dental_care?utm_source=qr&igsh=ZzNtMzUzejFnZHB2"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Specialty Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Implant Services", href: "/services" },
                { label: "Success Stories", href: "/success-stories" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Payment Options", href: "/payment" },
                { label: "Consultation Request", href: "/#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Details</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">(+91) 9326960595</p>
                  <p className="text-sm">(+91) 8898760364</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="font-semibold text-white">satishy529@gmail.com</p>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <Home className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">
                    101,First Floor, Simran Elegance
                  </p>
                  <p className="text-sm">
                    Tandon Rd, next to Thakur Hall, above Induslnd Bank,
                    Ramnagar, Dombivli East, Dombivli, Maharashtra 421201
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} DENTAVISTA Dental Care & Implant Centre. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};