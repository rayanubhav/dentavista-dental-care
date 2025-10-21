import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-card to-orange-50 py-20 sm:py-32"
    >
      {/* Decorative gradients */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
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

export default HeroSection;
