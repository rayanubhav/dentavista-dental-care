import React from "react";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const DentistProfileSection = () => (
  <section
    id="dentist"
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[500px]"
  >
    <h2 className="text-4xl font-extrabold text-center mb-8 text-foreground">
      Meet Our Specialist
    </h2>

    <div className="max-w-xl mx-auto text-center">
      <img
        src="/assets/dentist-profile.jpg"
        alt="Dr. Amanita Dombivli Dentist"
        className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
      />
      <h3 className="text-2xl font-semibold mb-2 text-primary">
        Dr. Amanita Dombivli
      </h3>
      <p className="text-muted-foreground mb-4">
        Prosthodontist & Implant Specialist with 15+ years of experience
      </p>

      <div className="flex justify-center space-x-6 text-primary">
        <a
          href="https://linkedin.com/in/dentist"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-secondary transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://facebook.com/dentist"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-secondary transition-colors"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href="https://instagram.com/dentist"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-secondary transition-colors"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>
    </div>
  </section>
);

export default DentistProfileSection;
