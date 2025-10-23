import {
  DollarSign,
  CreditCard,
  Landmark,
  Shield,
  CheckCircle,
} from "lucide-react";
import * as React from "react";
import { useRef, useEffect, useState } from "react"; // Ensure these are imported from 'react'

// Helper component to apply the slide-in animation without external CSS Keyframes
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      {children}
    </div>
  );
};


const PricingCard = ({ title, items, note }) => (
  <div className="bg-card p-8 rounded-2xl shadow-xl border-2 border-primary/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:border-primary/40">
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg bg-gradient-to-br from-primary to-primary-dark">
      <DollarSign className="w-7 h-7 text-primary-foreground" />
    </div>
    <h3 className="text-2xl font-bold mb-6 text-primary">{title}</h3>
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

const Payment = () => {
  const paymentMethods = [
    {
      icon: CreditCard,
      title: "Card Payments",
      description:
        "We accept all major credit and debit cards including Visa, Mastercard, and RuPay.",
      color: "text-blue-600",
    },
    {
      icon: Landmark,
      title: "Bank Transfer",
      description:
        "Direct bank transfers and UPI payments for your convenience.",
      color: "text-green-600",
    },
    {
      icon: DollarSign,
      title: "Cash Payments",
      description: "Traditional cash payments accepted at our clinic.",
      color: "text-orange-600",
    },
    {
      icon: Shield,
      title: "EMI Options",
      description: "Flexible installment plans available for major treatments.",
      color: "text-purple-600",
    },
  ];

  const pricingCategories = [
    {
      title: "IMPLANTOLOGY",
      items: [
        { service: "Implant Placement (Surgery)", price: "₹20,000" },
        { service: "Implant Crown (PFM)", price: "₹5,000" },
        { service: "Implant Crown (Zirconia)", price: "₹10,000" },
      ],
      note: "Note: Does not include bone augmentation fees.",
    },
    {
      title: "DENTURES & PROSTHETICS",
      items: [
        { service: "Complete Denture (Luciton)", price: "₹20,000" },
        { service: "BPS Denture (Advanced)", price: "₹35,000" },
        { service: "Cast Partial Denture", price: "₹20,000" },
      ],
      note: "Includes 5-10 Year Warranty on select crowns.",
    },
    {
      title: "GENERAL & PREVENTIVE",
      items: [
        { service: "OPD Consultation", price: "₹100" },
        { service: "Digital X-ray", price: "₹100" },
        { service: "Composite Filling", price: "₹1,200" },
        { service: "Scaling (Cleaning)", price: "₹1,000" },
      ],
    },
  ];

  const benefits = [
    "Transparent pricing with no hidden costs",
    "Detailed treatment plans and cost breakdowns",
    "Flexible payment options to suit your budget",
    "Quality warranties on select treatments",
    "Insurance documentation support",
    "Free initial consultation",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-card to-orange-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Header Animation */}
            <AnimatedHeader>
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4">
                Transparent Pricing & Payment Options
              </h1>
            </AnimatedHeader>
            <AnimatedHeader delay={200}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We believe in clear pricing for our specialized services. Quality
                dental care shouldn't come with surprises.
              </p>
            </AnimatedHeader>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Flexible Payment Methods
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the payment option that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                  <method.icon className={`w-8 h-8 ${method.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16 bg-gradient-to-br from-card to-blue-50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Treatment Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All prices include consultation, follow-up care, and warranties
              where applicable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingCategories.map((category, index) => (
              <PricingCard
                key={index}
                title={category.title}
                items={category.items}
                note={category.note}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-3xl p-8 lg:p-12 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              Why Choose Our Payment Plans?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA/PDF Download Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Need a Detailed Service Breakdown?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Download our comprehensive PDF guide covering all service fees and
            payment structures.
          </p>
          {/* PDF Download Link */}
          <a
            href="http://digil.ink/l/3764J6vd5r" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-secondary-foreground font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-secondary-dark mb-8"
          >
            Download Full Price List (PDF)
          </a>

        </div>
      </section>
    </div>
  );
};

export default Payment;