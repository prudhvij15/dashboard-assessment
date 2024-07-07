// components/SecuritySettings.js
"use client";
import { useState } from "react";

const SecuritySettings = () => {
  const [twoStepVerification, setTwoStepVerification] = useState(true);

  const handleToggleTwoStep = () => {
    setTwoStepVerification(!twoStepVerification);
  };

  const sessions = [
    {
      id: 1,
      browser: "Brave on Mac OS X",
      location: "Ninh Bình, Vietnam",
      active: true,
    },
    {
      id: 2,
      browser: "Mia’s MacBook Pro",
      location: "Ninh Bình, Vietnam",
      active: true,
    },
    {
      id: 3,
      browser: "Brave on Mac OS X",
      location: "Mexico City, Mexico",
      active: false,
    },
    {
      id: 4,
      browser: "Mia’s MacBook Pro",
      location: "Mexico City, Mexico",
      active: false,
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg w-full mx-auto">
      <div className="flex justify-between items-center mb-6 bg-gray-700 h-20  rounded-md">
        <div className="p-10 ml">
          <h2 className="text-sm font-semibold">
            Your account security is 90%
          </h2>
          <p className="text-sm">
            Please review your account security settings regularly and update
            your password{" "}
          </p>
        </div>
        {/* <div className="justify-evenly p-4 gap-10">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
            Dismiss
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
            Review security
          </button>
        </div> */}

        <div className="flex justify-evenly p-4 gap-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
            Dismiss
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
            Review security
          </button>
        </div>
      </div>
      <div className="mb-6"></div>
    </div>
  );
};

export default SecuritySettings;
