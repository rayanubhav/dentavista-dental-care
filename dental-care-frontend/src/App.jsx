/* eslint-disable no-irregular-whitespace */
import React, { useState, useEffect, useCallback } from "react";
import {
  Menu,
  ClipboardList,
  Gem,
  Plug2,
  ShieldAlert,
  Award,
  Sparkles,
  CheckCircle,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Home,
  Facebook,
  Instagram,
  Loader2,
  DollarSign,
  Diamond,
  X,
  Clock,
  ArrowRight,
  Linkedin,
  AlertCircle,
} from "lucide-react";

// --- Note: Global HSL CSS variables are assumed to be defined in your external index.css. ---
// The component uses Tailwind classes (bg-primary, text-secondary, etc.) that draw from these HSL definitions.

// --- Toaster Component for Notifications ---

const Toaster = ({ message, type, setMessageState }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessageState({ text: "", type: "" });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message, setMessageState]);

  if (!message) return null;

  return (
    <div
      className={`fixed top-5 right-5 z-[100] p-4 rounded-xl shadow-xl text-white transition-all duration-300 max-w-sm ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div className="flex items-start gap-3">
        {type === "success" ? (
          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        ) : (
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        )}
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
};

// --- Navigation Link Component ---

const NavLink = ({
  href,
  children,
  activeSection,
  setMenuOpen,
  className = "",
}) => {
  const isActive = activeSection === href.substring(1);

  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    if (setMenuOpen) setMenuOpen(false);
  };

  // Style for the 'Book Appointment' button link
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

// --- Header Component ---

const Header = ({ activeSection, isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <NavLink href="#home" activeSection={activeSection}>
          <span className="text-2xl font-bold flex items-center gap-2 text-primary">
            <img
              src="/logo.png"
              alt="DENTAVISTA Logo"
              className="h-7 w-7"
            />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ᴅᴇɴᴛᴀᴠɪꜱᴛᴀ
            </span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#services" activeSection={activeSection}>
            Services
          </NavLink>
          <NavLink href="#success-stories" activeSection={activeSection}>
            Success Stories
          </NavLink>
          <NavLink href="#dentist" activeSection={activeSection}>
            Our Specialist
          </NavLink>
          <NavLink href="#pricing" activeSection={activeSection}>
            Pricing
          </NavLink>
          <NavLink href="#contact" activeSection={activeSection}>
            Book Appointment
          </NavLink>
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
          <NavLink
            href="#services"
            activeSection={activeSection}
            setMenuOpen={setIsMenuOpen}
            className="block px-4 py-3 rounded-lg hover:bg-muted"
          >
            Services
          </NavLink>
          <NavLink
            href="#success-stories"
            activeSection={activeSection}
            setMenuOpen={setIsMenuOpen}
            className="block px-4 py-3 rounded-lg hover:bg-muted"
          >
            Success Stories
          </NavLink>
          <NavLink
            href="#dentist"
            activeSection={activeSection}
            setMenuOpen={setIsMenuOpen}
            className="block px-4 py-3 rounded-lg hover:bg-muted"
          >
            Our Specialist
          </NavLink>
          <NavLink
            href="#pricing"
            activeSection={activeSection}
            setMenuOpen={setIsMenuOpen}
            className="block px-4 py-3 rounded-lg hover:bg-muted"
          >
            Pricing
          </NavLink>
          <a
            href="#contact"
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

// --- Hero Section ---

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-card to-orange-50 py-20 sm:py-32"
    >
      {/* Decorative Elements (Using abstract color classes) */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold">
            Expert Prosthodontics & Implantology
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Specialist Care.
          </span>
          <br />
          Lifetime Smiles.
        </h1>

        <p className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Expert solutions for worn teeth, missing teeth, and complex dental
          rehabilitation in Dombivali.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="group bg-primary text-primary-foreground font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 hover:bg-primary-dark"
          >
            Consult Our Specialist
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#success-stories"
            className="bg-card text-foreground border-2 border-primary/20 font-semibold py-4 px-8 rounded-full shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300 transform hover:scale-105"
          >
            View Patient Results
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "15+", label: "Years Experience" },
            { number: "2000+", label: "Happy Patients" },
            { number: "98%", label: "Success Rate" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Services Section ---

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  link = "#services",
  delay = 0,
}) => (
  <a
    href={link}
    className="group bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border block"
  >
    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
      <Icon className="w-8 h-8 text-primary-foreground" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </a>
);

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Our Core Specialty Treatments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Focused expertise in restoring function, aesthetics, and longevity
            to your smile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={Plug2}
            title="Dental Implants & Augmentation"
            description="Advanced solutions for missing teeth, including Sinus Lifts, Bone Grafting, and immediate implant placement."
            link="#implant-animation"
            delay={0}
          />
          <ServiceCard
            icon={Diamond}
            title="Full Mouth Rehabilitation (FMR)"
            description="Comprehensive treatment for severely worn-out or damaged dentition (Hobo's Technique for functional harmony)."
            link="#success-stories"
            delay={0.1}
          />
          <ServiceCard
            icon={ShieldAlert}
            title="Removable Prosthesis"
            description="Custom Cast Partial Dentures (CPD), Complete Dentures (CD), and Implant Supported Overdentures."
            delay={0.2}
          />
          <ServiceCard
            icon={Award}
            title="Maxillofacial Prosthesis"
            description="Specialized devices like Obturators for patients requiring rehabilitation after surgical procedures."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

// --- Implant Animation Section ---

const ImplantAnimationSection = () => {
  return (
    <section
      id="implant-animation"
      className="bg-gradient-to-br from-card to-blue-50 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Precision Implantology: How it Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As Prosthodontics specialists, we use advanced planning (like CBCT)
            to ensure every implant is placed with maximum precision and
            longevity.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl">
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20">
              <div className="aspect-video relative">
                {/* Background illustration */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-50 to-orange-50">
                  <div className="relative w-3/4 h-3/4">
                    {/* Bone representation */}
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-100 to-orange-200 rounded-lg opacity-70"></div>

                    {/* Augmentation area - Abstracted to use colors */}
                    <div className="absolute top-1/4 left-1/4 w-1/3 h-1/4 bg-secondary-light/60 opacity-60 rounded-full blur-sm"></div>

                    {/* Implant screw */}
                    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-4 h-20 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full shadow-lg"></div>

                    {/* Crown */}
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-12 h-10 bg-card rounded-t-full shadow-xl border-2 border-border"></div>

                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-30">
                      <line
                        x1="20%"
                        y1="50%"
                        x2="45%"
                        y2="50%"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                      />
                      <line
                        x1="80%"
                        y1="50%"
                        x2="55%"
                        y2="50%"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                      />
                    </svg>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                  <p className="text-sm font-semibold text-foreground">
                    1. Bone Augmentation
                  </p>
                </div>
                <div className="absolute top-1/2 left-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                  <p className="text-sm font-semibold text-foreground">
                    2. Implant Placement
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                  <p className="text-sm font-semibold text-foreground">
                    3. Crown Restoration
                  </p>
                </div>
              </div>

              {/* Bottom info bar */}
              <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground p-6 text-center">
                <p className="text-lg font-bold">
                  Complete Implant & Bone Augmentation Process
                </p>
                <p className="text-sm opacity-90 mt-1">
                  CBCT-guided precision for optimal outcomes
                </p>
              </div>
            </div>

            {/* Feature points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {[
                "Advanced 3D Planning",
                "Minimally Invasive",
                "Long-term Success",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-xl shadow-md text-center border border-border"
                >
                  <p className="font-semibold text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Success Stories Section ---

const CaseStudy = ({ title, subtitle, description, imageUrl, delay }) => (
  <div className="group bg-card rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-border">
    <div className="relative overflow-hidden h-56">
      {/* FIX: Directly using imageUrl as the source for the public folder path */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 font-medium">
        {subtitle}
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
      >
        View Detailed Process
        <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  </div>
);

const SuccessStories = () => {
  return (
    <section
      id="success-stories"
      className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Patient Transformations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the dramatic, life-changing results of complex prosthetic and
            implant cases completed by Dr. Satishkumar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudy
            title="FMR: Restoring Worn Dentition"
            subtitle="Case: Severe Wear, Instability (Ajit, 66)"
            description="We restored decades of wear and instability using the Hobo's Technique to achieve a perfect, stable bite, eliminating sensitivity and restoring aesthetic confidence."
            imageUrl="/fmr.png" 
            delay={0}
          />
          <CaseStudy
            title="Advanced Implant Surgery"
            subtitle="Case: Bone Atrophy, Missing Posterior Teeth (Priyanka, 28)"
            description="Overcame severe bone deficiency in the upper jaw with a CAS Kit for precise Indirect Sinus Lift, securing a long-lasting foundation for dental implants."
            imageUrl="/advancedImplant.png" 
            delay={0.1}
          />
          <CaseStudy
            title="Maxillofacial Guide Flange"
            subtitle="Case: Post-Mandibulectomy Function (Dattu, 68)"
            description="Precision device for patients with jaw shifting post-surgery, restoring functional chewing ability and mandibular alignment."
            imageUrl="/maxillofacial.png" 
            delay={0.2}
          />
          <CaseStudy
            title="Telescopic Dentures"
            subtitle="Case: Partially Edentulous, Max Retention (Subhadra, 57)"
            description="Innovative system using precision attachments (copings) on existing teeth for maximum denture retention and stability superior to conventional partial dentures."
            imageUrl="/dentures.png" 
            delay={0.3}
          />
          <CaseStudy
            title="Aesthetic Gum Contouring"
            subtitle="Case: Peg-Shape Laterals, Aesthetics (Nilofer, 27)"
            description="Combined minor gum surgery with E-MAX crowns to transform conical teeth into aesthetically pleasing, natural-looking permanent restorations."
            // NOTE: Removed unnecessary '/dental-care-frontend/public' prefix
            imageUrl="/pegShaped.png" 
            delay={0.4}
          />
          <CaseStudy
            title="TMJ Stabilization & Pain Relief"
            subtitle="Case: Jaw Joint Pain, Muscle Tension (TMJ Patient)"
            description="Diagnostic and therapeutic treatment using a Centric Stabilisation Occlusal Splint to deprogram hyperactive muscles and stabilize the jaw joint for long-term pain relief."
            // NOTE: Removed unnecessary '/public' prefix
            imageUrl="/tmj.png" 
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};



// --- Dentist Profile Section ---

const DentistProfileSection = () => {
  return (
    <section
      id="dentist"
      className="bg-card py-16 sm:py-24 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-foreground mb-12">
          Meet Our Specialist: Dr. Satishkumar
        </h2>

        <div className="flex flex-col lg:flex-row items-center bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 lg:p-12 shadow-2xl border border-primary/10">
          {/* Profile Photo */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-30"></div>
              <img
                src="https://placehold.co/300x300/2173CB/ffffff?text=Dr.+Satishkumar"
                alt="Dr. Satishkumar Profile"
                className="relative w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-card"
              />
            </div>
          </div>

          {/* Credentials and Bio */}
          <div className="w-full lg:w-2/3 lg:pl-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MDS, Prosthodontist & Implantologist
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Dr. Satishkumar is a dedicated{" "}
              <strong>Consultant Prosthodontist and Oral Implantologist</strong>
              , specializing in the design, construction, and fitting of
              artificial replacements for teeth and other facial structures. His
              expertise includes complex{" "}
              <strong>Full Mouth Rehabilitation (FMR)</strong> using
              philosophies like Hobo's Technique, advanced implant surgery
              (including Sinus Lifts), and Maxillofacial Prosthesis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-foreground">
                  Key Specializations
                </h4>
                <ul className="space-y-3">
                  {[
                    {
                      icon: Award,
                      text: "Full Mouth Rehabilitation (FMR)",
                      color: "text-yellow-600",
                    },
                    {
                      icon: Plug2,
                      text: "Oral Implantology & Bone Augmentation",
                      color: "text-pink-500",
                    },
                    {
                      icon: CheckCircle,
                      text: "Maxillofacial & Complete Prosthesis",
                      color: "text-green-500",
                    },
                    {
                      icon: Sparkles,
                      text: "TMJ Disorder Management & Smile Design",
                      color: "text-blue-500",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center shadow-md">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <span className="text-muted-foreground font-medium">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                <h4 className="text-xl font-bold mb-3 text-foreground">
                  Philosophy: Restoring Confidence
                </h4>
                <p className="text-muted-foreground leading-relaxed italic">
                  "My practice focuses on a long-term, comprehensive approach.
                  We don't just fix teeth; we restore the patient's bite
                  function, aesthetic confidence, and long-term oral health."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Pricing Section ---

const PricingCard = ({ title, items, note, color, delay }) => (
  <div
    className={`bg-card p-8 rounded-2xl shadow-xl border-t-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
    style={{ borderColor: `var(--${color})` }}
  >
    <div
      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg bg-gradient-to-br`}
      style={{
        // Using direct CSS variables for background/gradients for dynamic coloring
        backgroundColor: `var(--${color})`,
        backgroundImage: `linear-gradient(to bottom right, var(--${color}), var(--${color}-light))`,
      }}
    >
      <DollarSign className="w-7 h-7 text-black" />
    </div>
    <h3
      className={`text-2xl font-bold mb-6`}
      style={{ color: `var(--${color})` }}
    >
      {title}
    </h3>
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex justify-between items-center border-b border-border pb-3 text-sm"
        >
          <span className="text-muted-foreground font-medium">
            {item.service}
          </span>
          <span className="text-foreground font-bold text-lg">
            {item.price}
          </span>
        </li>
      ))}
    </ul>
    {note && (
      <p className="text-xs text-green-600 mt-6 bg-green-50 p-3 rounded-lg border border-green-200">
        {note}
      </p>
    )}
  </div>
);

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="bg-gradient-to-br from-card to-blue-50 py-16 sm:py-24 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Transparent Fees & Treatment Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in clear pricing for our specialized services. Quoted
            charges often include warranties and follow-up care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard
            title="IMPLANTOLOGY"
            color="primary"
            delay={0}
            items={[
              { service: "Implant Placement (Surgery)", price: "₹20,000" },
              { service: "Implant Crown (PFM)", price: "₹5,000" },
              { service: "Implant Crown (Zirconia)", price: "₹10,000" },
            ]}
            note="Note: Does not include bone augmentation fees."
          />
          <PricingCard
            title="DENTURES & PROSTHETICS"
            color="secondary"
            delay={0.1}
            items={[
              { service: "Complete Denture (Luciton)", price: "₹20,000" },
              { service: "BPS Denture (Advanced)", price: "₹35,000" },
              { service: "Cast Partial Denture", price: "₹20,000" },
            ]}
            note="Includes 5-10 Year Warranty on select crowns."
          />
          <PricingCard
            title="GENERAL & PREVENTIVE"
            color="primary"
            delay={0.2}
            items={[
              { service: "OPD Consultation", price: "₹100" },
              { service: "Digital X-ray", price: "₹100" },
              { service: "Composite Filling", price: "₹1,200" },
              { service: "Scaling (Cleaning)", price: "₹1,000" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

// --- Contact Section ---

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const setMessageState = useCallback((newState) => {
    setMessage(newState);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: "", type: "" });

    try {
      // NOTE: Update the URL to your actual backend endpoint when deployed
      const response = await fetch(
        "https://dentavista-api.onrender.com/api/request-appointment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setMessage({
          text: "Success! Your appointment request has been sent. We will call you shortly.",
          type: "success",
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          reason: "",
          message: "",
        });
      } else {
        setMessage({
          text:
            result.message ||
            "Error submitting request. Please try again or call us directly.",
          type: "error",
        });
      }
    } catch (error) {
      setMessage({
        text: "Network Error: Could not reach the server. Please call us directly.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-card"
    >
      <Toaster
        message={message.text}
        type={message.type}
        setMessageState={setMessageState}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Schedule Your Consultation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us to begin your journey toward functional and aesthetic
            restoration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-card p-8 rounded-3xl shadow-2xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              </div>
              
              {/* NEW: Preferred Date and Time Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
              </div>
              {/* END NEW FIELDS */}

              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Reason for Visit
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                >
                  <option value="">-- Select an Option --</option>
                  <option value="fmr">
                    Full Mouth Rehabilitation (Worn/Missing Teeth)
                  </option>
                  <option value="implant">Dental Implant Consultation</option>
                  <option value="prosthesis">
                    Dentures/Maxillofacial Prosthesis
                  </option>
                  <option value="general">General Checkup / Cleaning</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-xl shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    Sending Request...
                  </>
                ) : (
                  "Request Specialist Consultation"
                )}
              </button>
            </form>
          </div>

          {/* Clinic Info */}
          <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Clinic Details</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm opacity-80 mb-1">Call Us Directly</p>
                  <p className="text-xl font-bold">(+91) 9326960595</p>
                  <p className="text-lg font-semibold">(+91) 8898760364</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm opacity-80 mb-1">Email</p>
                  <p className="font-semibold">satishy529@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm opacity-80 mb-1">Location</p>
                  <p className="font-semibold">101,First Floor, Simran Elegance</p>
                  <p className="font-semibold">Tandon Rd, next to Thakur Hall, above Induslnd Bank, Ramnagar, Dombivli East, Dombivli, Maharashtra 421201</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm opacity-80 mb-1">Hours</p>
                  <p className="font-semibold">Mon-Sat: 10:00 AM - 9:00 PM</p>
                  <p className="text-sm opacity-80">Sunday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <iframe
            title="Clinic Location"
            // Using the map source specific to your clinic provided previously
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5550530440164!2d73.08662559999999!3d19.2146269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bffcb38be82d%3A0x8154e81e692f59f9!2sDr.Satish&#39;s%20DENTAVISTA%20DENTAL%20CARE%20AND%20IMPLANT%20CENTRE!5e0!3m2!1sen!2sin!4v1760806314488!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

// --- Footer Component ---

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Clinic Info */}
          <div>
            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-dark to-secondary-light bg-clip-text text-transparent">
              DENTAVISTA
            </h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              Restoring Smiles, Restoring Confidence. Specialist in complex
              prosthetic and implant solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
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
                { label: "Implant Services", href: "#services" },
                { label: "FMR Case Studies", href: "#success-stories" },
                { label: "View Transparent Fees", href: "#pricing" },
                { label: "Consultation Request", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
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
                  <p className="font-semibold text-white">101,First Floor, Simran Elegance</p>
                  <p className="text-sm">Tandon Rd, next to Thakur Hall, above Induslnd Bank, Ramnagar, Dombivli East, Dombivli, Maharashtra 421201</p>
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

// --- Main Application Component ---
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Logic to determine which section is currently visible on scroll
  const handleScroll = useCallback(() => {
    const sections = [
      "home",
      "services",
      "implant-animation",
      "success-stories",
      "dentist",
      "pricing",
      "contact",
    ];
    const scrollY = window.pageYOffset;

    let currentActive = "home";

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionBottom = section.offsetTop + section.offsetHeight - 150;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          currentActive = id;
        }
      }
    });

    setActiveSection(currentActive);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="min-h-screen font-sans bg-background">
      <Header
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <HeroSection />
        <ServicesSection />
        <ImplantAnimationSection />
        <SuccessStories />
        <DentistProfileSection />
        <PricingSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;

//101,First Floor, Simran Elegance, Tandon Rd, next to Thakur Hall, above Induslnd Bank, Ramnagar, Dombivli East, Dombivli, Maharashtra 421201