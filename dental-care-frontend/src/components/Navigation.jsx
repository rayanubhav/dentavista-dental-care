import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/success-stories", label: "Success Stories" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/payment", label: "Payment" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  // Function to determine the contact link path
  const contactPath = location.pathname === "/" ? "#contact" : "/#contact";

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img
            src="/Full-logo1.png"
            alt="DENTAVISTA Logo"
            className="h-8 sm:h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-all duration-300 font-medium px-3 py-2 rounded-lg ${
                isActive(link.path)
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a // Changed Link to <a> for external anchor handling consistency
            href="/#contact"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:bg-primary-dark shadow-md hover:shadow-lg transform hover:scale-105 font-semibold transition-all duration-300"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-all duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-card border-t border-border overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-all ${
                isActive(link.path)
                  ? "bg-primary/10 text-primary font-semibold"
                  : "hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/#contact" // Updated to point to homepage anchor
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-center mt-2 hover:bg-primary-dark"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
};