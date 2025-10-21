import React from "react";
import { ClipboardList, Gem, Plug2, ShieldAlert } from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Prosthodontics & Crowns",
    description:
      "Restoration and replacement of teeth using crowns, bridges, and dentures for optimal function and appearance.",
  },
  {
    icon: Gem,
    title: "Dental Implants",
    description:
      "Permanent tooth replacement rooted in the jawbone, providing natural look and feel.",
  },
  {
    icon: Plug2,
    title: "Teeth Whitening",
    description:
      "Safe, professional whitening treatments to brighten your smile.",
  },
  {
    icon: ShieldAlert,
    title: "Oral Health Care",
    description:
      "Comprehensive preventive care including routine exams, cleanings, and education.",
  },
];

const ServiceCard = ({ Icon, title, description }) => (
  <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
    <div className="bg-primary/20 p-4 rounded-full inline-block mb-4">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const ServicesSection = () => (
  <section
    id="services"
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[500px]"
  >
    <h2 className="text-4xl font-extrabold mb-8 text-center text-foreground">
      Our Services
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {services.map(({ icon, title, description }, idx) => (
        <ServiceCard
          key={idx}
          Icon={icon}
          title={title}
          description={description}
        />
      ))}
    </div>
  </section>
);

export default ServicesSection;
