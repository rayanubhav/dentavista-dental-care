import React from "react";
import { DollarSign, Diamond, Clock } from "lucide-react";

const pricingPlans = [
  {
    id: 1,
    icon: DollarSign,
    title: "Basic Plan",
    description: "Ideal for simple crown and bridge restorations.",
    price: "₹15,000",
  },
  {
    id: 2,
    icon: Diamond,
    title: "Premium Plan",
    description: "Comprehensive implant procedures with lifetime warranty.",
    price: "₹75,000",
  },
  {
    id: 3,
    icon: Clock,
    title: "Express Plan",
    description: "Fast-track teeth whitening and cosmetic procedures.",
    price: "₹10,000",
  },
];

const PricingCard = ({ Icon, title, description, price }) => (
  <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-center gap-4 mb-4">
      <Icon className="w-8 h-8 text-primary" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-muted-foreground mb-6">{description}</p>
    <div className="text-primary font-bold text-lg">{price}</div>
  </div>
);

const PricingSection = () => (
  <section
    id="pricing"
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[500px]"
  >
    <h2 className="text-4xl font-extrabold mb-8 text-center text-foreground">
      Pricing Plans
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {pricingPlans.map(({ id, icon, title, description, price }) => (
        <PricingCard
          key={id}
          Icon={icon}
          title={title}
          description={description}
          price={price}
        />
      ))}
    </div>
  </section>
);

export default PricingSection;
