"use client";
import { useEffect, useState } from "react";

import CircleProgress from "./CircleProgress";

import ActiveDevices from "./ActiveDevices";
import PasswordSettings from "./passwordSettings";

const SecuritySettings = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => (prev < 70 ? prev + 1 : 70));
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-white p-2 sm:p-8 rounded-lg w-full mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 bg-gray-700 p-4 lg:p-8 rounded-md">
        <div className="flex flex-col sm:flex-row items-center">
          <div
            style={{
              width: 50,
              height: 50,
              pathTransitionDuration: 0.5,
              background: {
                fill: "#3e98c7",
              },
            }}
            className="text-red-600 mb-4 sm:mb-0 sm:mr-4"
          >
            <CircleProgress progress={percentage} radius={20} />
          </div>
          <div className="flex flex-col text-center sm:text-left ">
            <h2 className="text-sm font-semibold">
              Your account security is 90%
            </h2>
            <p className="text-sm">
              Please review your account security settings regularly and update
              your password.
            </p>
          </div>
        </div>
        <div className="flex justify-evenly p-4 gap-4">
          <button className="bg-gray-600 text-white py-2 px-4 rounded-lg">
            Dismiss
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
            Review security
          </button>
        </div>
      </div>

      <PasswordSettings />

      <div>
        <ActiveDevices />
      </div>
    </div>
  );
};

export default SecuritySettings;
