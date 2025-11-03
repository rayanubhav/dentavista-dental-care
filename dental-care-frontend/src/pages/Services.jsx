"use client";
import { Plug2, Diamond, ShieldAlert, Award, UserCheck, Sparkles, Zap, Stethoscope, ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { useRef, useEffect, useState, useCallback } from "react";

// ------------------- CONCEPTUAL DATA (MIMICS EXTERNAL DATA IMPORT) -------------------
const MASTER_SERVICES = [
    {
        icon: Diamond,
        title: "Full Mouth Rehabilitation",
        description: "Comprehensive reconstruction for severe wear and aesthetic balance.",
        isPrimary: true,
        bg_color: "#E1F5FE", // Light Blue
        text_color: "#0288D1" // Dark Blue
    },
    {
        icon: Plug2,
        title: "Dental Implant Surgery",
        description: "Advanced solutions for missing teeth, including Sinus Lifts and Bone Grafting.",
        isPrimary: true,
        bg_color: "#E8F5E9", // Light Green
        text_color: "#388E3C" // Dark Green
    },
    {
        icon: ShieldAlert,
        title: "Maxillofacial Prosthesis",
        description: "Specialized devices like Obturators for rehabilitation after surgical procedures.",
        isPrimary: true,
        bg_color: "#FBEFE8", // Light Orange/Peach
        text_color: "#E64A19" // Dark Orange
    },
    {
        icon: Award,
        title: "Implant Supported Dentures",
        description: "Restore stability and retention using implants to securely fasten a removable prosthesis.",
        isPrimary: true,
        bg_color: "#EDE7F6", // Light Lavender
        text_color: "#512DA8" // Dark Purple
    },
    {
        icon: Sparkles,
        title: "Aesthetic Veneers",
        description: "Instant correction of spacing, shape, and color issues using high-quality porcelain.",
        isPrimary: false,
        bg_color: "#F3E5F5", // Light Pink
        text_color: "#C2185B" // Dark Pink
    },
    {
        icon: UserCheck,
        title: "TMJ Management",
        description: "Diagnosis and treatment for jaw pain, clicking, and muscle tension using custom splints.",
        isPrimary: false,
        bg_color: "#F9FBE7", // Light Yellow
        text_color: "#AFB42B" // Dark Olive
    },
    {
        icon: Zap,
        title: "Aesthetic Gum Contouring",
        description: "Correction of uneven gum lines (gummy smile) for a balanced and aesthetic presentation.",
        isPrimary: false,
        bg_color: "#E0F7FA", // Light Cyan
        text_color: "#00BCD4" // Cyan
    },
    {
        icon: Stethoscope,
        title: "Micro-Endodontics",
        description: "Painless Root Canal Treatment (RCT) performed with magnification for maximum precision.",
        isPrimary: false,
        bg_color: "#FCE4EC", // Light Pink
        text_color: "#D81B60" // Red Pink
    },
];

/* ------------------- ANIMATED HEADER (Omitted for brevity) ------------------- */
const AnimatedHeader = ({ children, delay = 0 }) => {
 const ref = useRef(null);
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const observer = new IntersectionObserver(
   ([entry]) => {
    if (entry.isIntersecting) {
     setIsVisible(true);
     observer.unobserve(entry.target);
    }
   },
   { threshold: 0.1 }
  );
  if (ref.current) observer.observe(ref.current);
  return () => {
   if (ref.current) observer.unobserve(ref.current);
  };
 }, []);

 return (
  <div
   ref={ref}
   className="transition-all duration-700 ease-out transform"
   style={{
    transitionDelay: `${delay}ms`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
   }}
  >
   {children}
  </div>
 );
};

/* ------------------- MARQUEE SERVICE CARD ------------------- */
const MarqueeServiceCard = ({ icon: Icon, title, description, bg_color, text_color }) => {
    return (
        <div 
            className="slide flex-shrink-0 w-[300px] h-full mx-3 py-4"
        >
            <div 
                className={`group h-full bg-card p-6 rounded-2xl shadow-lg border border-border transition-all duration-300 hover:shadow-xl hover:ring-2`}
                style={{ borderColor: text_color, boxShadow: `0 0 10px ${text_color}1A` }}
            >
                <div 
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md`} 
                    style={{ backgroundColor: bg_color, color: text_color }}
                >
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

/* ------------------- INFINITE SERVICE MARQUEE (NEW IMPLEMENTATION) ------------------- */
const InfiniteServiceMarquee = ({ services, animationSpeed = 40 }) => {
    const totalCards = services.length;
    // Duplicate the services to ensure a seamless loop with no gap
    const loopedServices = [...services, ...services];
    // Calculate the total width of the track (Card width * Total cards including duplicates)
    // Card width is 300px + margin/padding (6px left/right = 312px total width per slide in track)
    const trackWidth = 312 * totalCards; 

    return (
        <div className="relative">
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    /* FIX: Translate exactly one set of services */
                    100% { transform: translateX(-${trackWidth}px); }
                }

                .slider {
                    background: transparent;
                    height: 250px; /* Fixed height for consistency */
                    margin: auto;
                    overflow: hidden;
                    position: relative;
                    width: 100%;
                }
                
                /* Gradient fades for edges (matching your original CSS idea) */
                .slider::before,
                .slider::after {
                    content: "";
                    height: 100%;
                    position: absolute;
                    width: 100px;
                    z-index: 2;
                    pointer-events: none;
                }
                
                .slider::after {
                    right: 0;
                    top: 0;
                    background: linear-gradient(to left, var(--bg-card) 0%, rgba(255, 255, 255, 0) 100%);
                }

                .slider::before {
                    left: 0;
                    top: 0;
                    background: linear-gradient(to right, var(--bg-card) 0%, rgba(255, 255, 255, 0) 100%);
                }

                .slide-track {
                    animation: scroll ${animationSpeed}s linear infinite;
                    display: flex;
                    width: ${trackWidth * 2}px; /* Total track width is two full sets */
                    height: 100%;
                }
            `}</style>
            
            <div className="slider">
                <div className="slide-track">
                    {/* Render the looped services */}
                    {loopedServices.map((service, index) => (
                        <MarqueeServiceCard
                            key={index}
                            {...service}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


/* ------------------- VIDEO SECTIONS (Omitted for brevity) ------------------- */
const ImplantAnimation = () => (
  <section className="bg-gradient-to-br from-card to-blue-50 py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
          Single Dental Implant Placement
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          The permanent solution for a missing tooth, functioning just like a natural root.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="relative w-full max-w-3xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20">
            <div className="aspect-video relative">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover bg-gray-500/20">
                <source src="/AdobeStock_1587849889.mp4" type="video/mp4" />
                <p>Your browser does not support the video tag.</p>
              </video>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                  <p className="text-sm font-semibold text-foreground">1. Preparation & Placement</p>
                </div>
                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                  <p className="text-sm font-semibold text-foreground">2. Abutment Connection</p>
                </div>
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                  <p className="text-sm font-semibold text-foreground">3. Crown Restoration</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground p-6 text-center">
              <p className="text-lg font-bold">
                Precision Implantology for Long-Term Function and Aesthetics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const OverdentureAnimation = () => (
  <section className="bg-background py-16 sm:py-24 border-t border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
          Implant Supported Overdentures
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Restore stability and confidence using implants to secure your removable prosthesis.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="relative w-full max-w-3xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-secondary/20">
            <div className="aspect-video relative">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover bg-gray-500/20">
                <source src="/AdobeStock_334819198.mp4" type="video/mp4" />
                <p>Your browser does not support the video tag.</p>
              </video>
              <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
                <div>
                  <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md inline-block">
                    <p className="text-sm font-semibold text-foreground">
                      1. Implant Fixture Placement
                    </p>
                  </div>
                </div>
                <div className="self-end">
                  <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md inline-block">
                    <p className="text-sm font-semibold text-foreground">
                      2. Attachment & Denture Connection
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-secondary to-secondary-dark text-primary-foreground p-6 text-center">
              <p className="text-lg font-bold">
                Enhanced Retention and Comfort for Full Arch Restoration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------- CLINIC GALLERY ------------------- */
const ClinicGallery = () => (
  <section className="py-16 sm:py-24 bg-background border-t border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
          Experience Our Modern Facility
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comfortable, modern, and sterile environment built for precision care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { src: "/clinic-reception.jpg", alt: "Clinic Reception Area" },
          { src: "/clinic-operatory.jpg", alt: "Advanced Operatory Room" },
          { src: "/clinic-waiting.jpg", alt: "Comfortable Waiting Area" },
        ].map((img, i) => (
          <div key={i} className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={img.src}
              alt={img.alt}
              className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);


/* ------------------- MAIN SERVICES COMPONENT ------------------- */
const Services = () => {
 const allServices = MASTER_SERVICES;
 const primaryServices = allServices.slice(0, 4);
 const detailedServices = allServices.slice(4); 

 return (
  <div className="min-h-screen">
   <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-card to-orange-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="text-center mb-16">
      <AnimatedHeader>
       <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4">
        Our Complete Specialty Treatments
       </h1>
      </AnimatedHeader>
      <AnimatedHeader delay={200}>
       <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Focused expertise in restoring function, aesthetics, and longevity to your smile.
       </p>
      </AnimatedHeader>
    </div>

     <h2 className="text-3xl font-bold text-foreground mb-8 border-b pb-2">
      Primary Expertise
     </h2>
            {/* ✅ INFINITE MARQUEE FOR PRIMARY SERVICES */}
     <InfiniteServiceMarquee services={primaryServices} animationSpeed={30} />


     <h2 className="text-3xl font-bold text-foreground mb-8 border-b pb-2 mt-16">
      Aesthetic & Adjunctive Services
     </h2>
            {/* ✅ INFINITE MARQUEE FOR ADJUNCTIVE SERVICES (Slightly slower) */}
     <InfiniteServiceMarquee services={detailedServices} animationSpeed={35} />

    </div>

    <div className="mt-16 text-center">
     <a
      href="/#contact"
      className="inline-block bg-primary text-primary-foreground font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-primary-dark"
     >
      Book My Specialist Consultation
     </a>
    </div>
   </section>

   <ImplantAnimation />
   <OverdentureAnimation />
   <ClinicGallery />
  </div>
 );
};

export default Services;



