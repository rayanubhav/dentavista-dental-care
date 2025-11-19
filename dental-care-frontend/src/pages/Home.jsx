import { useEffect, useState, useCallback } from "react";
import {
  Sparkles,
  ArrowRight,
  Plug2,
  Diamond,
  ShieldAlert,
  Award,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { MASTER_SERVICES } from "@/data/servicesData";

// NOTE: Ensure your global CSS has the @keyframes blur-in-out and .animated-char styles!

const AnimatedCharacter = ({ char, delay, styleClass = "" }) => (
  <span
    className={`animated-char inline-block ${styleClass}`} // Inject the style class here
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Use a non-breaking space for actual spaces to maintain layout integrity */}
    {char === ' ' ? '\u00A0' : char}
  </span>
);

const BlurredTextHeading = ({ speed = 90 }) => {
  const line1 = "Specialist Care.";
  const line2 = "Lifetime Smiles.";
  const line1Length = line1.length;

  // Define the style classes necessary for the gradient text clipping
  const gradientClasses = "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent";

  return (
    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6 min-h-[140px] sm:min-h-[200px]">
      
      {/* LINE 1: SPECIALIST CARE. (Apply gradient/clip class to EACH character) */}
      {line1.split("").map((char, index) => (
        <AnimatedCharacter
          key={`l1-${index}`}
          char={char} 
          delay={index * speed}
          styleClass={gradientClasses} // <-- Pass gradient classes here
        />
      ))}
      
      <br />
      
      {/* LINE 2: LIFETIME SMILES. (No gradient classes needed) */}
      {line2.split("").map((char, index) => (
        <AnimatedCharacter
          key={`l2-${index}`}
          char={char} 
          delay={(line1Length + index) * speed} 
        />
      ))}
    </h1>
  );
};


// Hero Section
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-card to-orange-50 py-20 sm:py-32"
    >
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold">
            Expert Prosthodontics & Implantology
          </span>
        </div>

        {/* Use the corrected animated component */}
        <BlurredTextHeading speed={90} /> 

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
            href="/success-stories"
            className="bg-card text-foreground border-2 border-primary/20 font-semibold py-4 px-8 rounded-full shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300 transform hover:scale-105"
          >
            View Patient Results
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "5+", label: "Years Experience" },
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

// Services Overview
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
      <Icon className="w-8 h-8 text-primary-foreground" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const ServicesOverview = () => {
  // Filter for only the 4 main services for the homepage
  const primaryServices = MASTER_SERVICES.filter(s => s.isPrimary);

  return (
    <section className="py-16 sm:py-24 bg-background">
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
          {primaryServices.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Dentist Profile
const DentistProfile = () => {
  return (
    <section className="bg-card py-16 sm:py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-foreground mb-12">
          Meet Our Specialist: Dr. Satishkumar
        </h2>

        <div className="flex flex-col lg:flex-row items-center bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 lg:p-12 shadow-2xl border border-primary/10">
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-30"></div>
              <img
                src="/DrSatish.png"
                alt="Dr. Satishkumar Profile"
                className="relative w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-card"
              />
            </div>
          </div>

          <div className="w-full lg:w-2/3 lg:pl-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MDS, Prosthodontist & Implantologist
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Dr. Satishkumar is a dedicated{" "}
              <strong>Consultant Prosthodontist and Oral Implantologist</strong>
              , specializing in the design, construction, and fitting of
              artificial replacements for teeth and other facial structures.
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
                    },
                    {
                      icon: Plug2,
                      text: "Oral Implantology & Bone Augmentation",
                    },
                    {
                      icon: CheckCircle,
                      text: "Maxillofacial & Complete Prosthesis",
                    },
                    {
                      icon: Sparkles,
                      text: "TMJ Disorder Management & Smile Design",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center shadow-md">
                        <item.icon className="w-5 h-5 text-primary" />
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

// Contact Section
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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
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
    setMessage({ text: "", type: "" });

    const requiredFields = [
      "name",
      "phone",
      "email",
      "reason",
      "preferredDate",
      "preferredTime",
    ];
    const missingField = requiredFields.find((field) => !formData[field]);

    if (missingField) {
      setMessage({
        text: `Please fill out the required field: ${
          missingField.charAt(0).toUpperCase() + missingField.slice(1)
        }.`,
        type: "error",
      });
      return;
    }

    if (!/^\d{10,15}$/.test(formData.phone)) {
      setMessage({ text: "Please enter a valid phone number.", type: "error" });
      return;
    }

    setIsLoading(true);

    try {
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
          text: "Success! Your specialist consultation request has been received. Our staff will contact you shortly to confirm the availability of your preferred date/time.",
          type: "success",
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          reason: "",
          message: "",
          preferredDate: "",
          preferredTime: "",
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
                    className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
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
                    className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
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
                  className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                />
              </div>
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
                    className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
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
                    className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                  />
                </div>
              </div>
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
                  className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
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
                  className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none bg-background"
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
                  <p className="font-semibold">
                    Tandon Rd, next to Thakur Hall, above Induslnd Bank,
                    Ramnagar, Dombivli East, Dombivli, Maharashtra 421201
                  </p>
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

        <div className="mt-16">
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5550530440164!2d73.08662559999999!3d19.2146269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bffcb38be82d%3A0x8154e81e692f59f9!2sDr.Satish's%20DENTAVISTA%20DENTAL%20CARE%20AND%20IMPLANT%20CENTRE!5e0!3m2!1sen!2sin!4v1760806314488!5m2!1sen!2sin"
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

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <DentistProfile />
      <ContactSection />
    </div>
  );
};

export default Home;