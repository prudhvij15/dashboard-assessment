"use client";
import React, { useState } from "react";

const NavigationButtons = () => {
  const buttons = [
    "General",
    "Security",
    "Billing",
    "Notifications",
    "Apps",
    "Branding",
    "Refer a Friend",
    "Sharing",
  ];

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  return (
    <div className="flex p-4 bg-gray-800">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-md mr-2 
            ${
              selectedButton === index
                ? "bg-gray-300 text-gray-800"
                : "bg-gray-800 text-gray-400 hover:bg-gray-300"
            }`}
          onClick={() => handleButtonClick(index)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default NavigationButtons;
