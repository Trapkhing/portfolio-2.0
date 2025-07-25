import React from "react";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  const pricingPlans = [
  {
    title: "Basic",
    price: "$299",
    features: [
      "1-page website (Landing or Portfolio)",
      "Responsive design (Mobile + Desktop)",
      "Basic animations & interactions",
      "Free domain connection",
      "Delivery in 5 days",
    ],
  },
  {
    title: "Pro",
    price: "$599",
    features: [
      "Up to 5-page website (e.g. Home, About, Services, Blog, Contact)",
      "Modern UI/UX with animations",
      "Basic CMS integration (e.g. Sanity or Notion)",
      "Contact form with email or Telegram integration",
      "SEO optimization",
      "1 revision",
    ],
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    features: [
      "Custom multi-page site or dashboard",
      "E-commerce or booking integration",
      "Full CMS with admin panel",
      "Custom backend/API (if needed)",
      "Ongoing maintenance & updates",
      "Team collaboration + support",
      "Priority delivery & multiple revisions",
    ],
  },
];


  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[var(--text-color)] text-center mb-12">Our Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
