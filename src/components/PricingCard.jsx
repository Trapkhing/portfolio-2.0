import React from "react";
import { useNavigate } from "react-router-dom";

const PricingCard = ({ title, price, features }) => {
  const navigate = useNavigate();
  return (
    <div className={`border rounded-lg p-8 flex flex-col ${title === 'Pro' ? 'border-4 border-accent' : ''}`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-4xl font-bold mb-4">{price}</p>
      <ul className="mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg
              className="w-4 h-4 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button
        className="bg-accent text-white py-2 px-4 rounded hover:bg-accent/90 mt-auto"
        onClick={() => navigate('/#contact', { state: { plan: title } })}
      >
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
