import React from "react";

const NavigationButtons = ({ onButtonClick }) => {
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

  return (
    <div className="flex p-0 bg-gray-800">
      {buttons.map((button, index) => (
        <button
          key={index}
          className="bg-gray-800 px-4 py-2 text-gray-400 rounded-md mr-2 hover:bg-gray-300"
          onClick={() => onButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default NavigationButtons;
