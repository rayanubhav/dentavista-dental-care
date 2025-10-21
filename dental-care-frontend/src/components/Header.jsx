import React from "react";
import { Menu, X } from "lucide-react";

const NavLink = ({ href, children, activeSection, setMenuOpen, className = "" }) => {
  const isActive = activeSection === href.substring(1);

  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    if (setMenuOpen) setMenuOpen(false);
  };

  const isCta = href === "#contact";
  const baseClasses = "transition-all duration-300 font-medium";
  const activeClasses = "text-primary font-semibold";
  const defaultClasses = "text-foreground hover:text-primary";

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${baseClasses} ${isActive ? activeClasses : defaultClasses} ${
        isCta
          ? "bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:bg-primary-dark shadow-md hover:shadow-lg transform hover:scale-105 font-semibold"
          : ""
      } ${className}`}
    >
      {children}
    </a>
  );
};

const Header = ({ activeSection, isMenuOpen, setIsMenuOpen }) => (
  <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-md">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <NavLink href="#home" activeSection={activeSection}>
        <span className="text-2xl font-bold flex items-center gap-2 text-primary">
          <img src="/logo.png" alt="DENTAVISTA Logo" className="h-7 w-7" />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ᴅᴇɴᴛᴀᴠɪꜱᴛᴀ
          </span>
        </span>
      </NavLink>
      <div className="hidden md:flex items-center gap-8">
        <NavLink href="#services" activeSection={activeSection}>Services</NavLink>
        <NavLink href="#success-stories" activeSection={activeSection}>Success Stories</NavLink>
        <NavLink href="#dentist" activeSection={activeSection}>Our Specialist</NavLink>
        <NavLink href="#pricing" activeSection={activeSection}>Pricing</NavLink>
        <NavLink href="#contact" activeSection={activeSection}>Book Appointment</NavLink>
      </div>
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
  </header>
);

export default Header;
