"use client";

import { Plug2, Diamond, ShieldAlert, Award, UserCheck, Sparkles } from "lucide-react";
import { MASTER_SERVICES } from "@/data/servicesData";
import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

/* ------------------- ANIMATED HEADER ------------------- */
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

/* ------------------- SERVICE CARD ------------------- */
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="keen-slider__slide group bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
      <Icon className="w-8 h-8 text-primary-foreground" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

/* ------------------- SERVICE CAROUSEL ------------------- */
const ServiceCarousel = ({ services }) => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      renderMode: "performance",
      slides: {
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        "(min-width: 640px)": { slides: { perView: 2, spacing: 20 } },
        "(min-width: 1024px)": { slides: { perView: 3, spacing: 25 } },
        "(min-width: 1280px)": { slides: { perView: 4, spacing: 30 } },
      },
      dragSpeed: 0.8,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        const clearNextTimeout = () => clearTimeout(timeout);
        const nextTimeout = () => {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => slider.next(), 2200);
        };
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-foreground rounded-full p-2 shadow-md transition-all"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-foreground rounded-full p-2 shadow-md transition-all"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
};

/* ------------------- VIDEO SECTIONS ------------------- */
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
  const primaryServices = allServices.filter((s) => s.isPrimary);
  const detailedServices = allServices.filter((s) => s.isDetail);

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
          <ServiceCarousel services={primaryServices} />

          <h2 className="text-3xl font-bold text-foreground mb-8 border-b pb-2 mt-16">
            Aesthetic & Adjunctive Services
          </h2>
          <ServiceCarousel services={detailedServices} />
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
