import React from "react";

const SettingsTab = ({ onButtonClick }) => {
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
    <div className="flex flex-wrap p-4 bg-gray-800">
      {buttons.map((button, index) => (
        <button
          key={index}
          className="bg-gray-800 px-4 py-2 text-gray-400 rounded-md mr-2 mb-2 hover:bg-gray-700 sm:text-sm md:text-base lg:text-lg"
          onClick={() => onButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default SettingsTab;
