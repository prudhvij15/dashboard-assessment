import React, { useState } from "react";
import { FaCheckCircle, FaGithub } from "react-icons/fa";
const PasswordSettings = () => {
  const [twoStepVerification, setTwoStepVerification] = useState(false);

  const handleToggleTwoStep = () => {
    setTwoStepVerification(!twoStepVerification);
  };

  const handleSession = (id) => {
    setSessions(sessions.filter((session) => session.id !== id));
  };
  return (
    <>
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2">Basics</h3>
        <div className="border-t-2 border-gray-500"></div>
        <div className="flex flex-col lg:flex-row justify-between items-center m-4">
          <div className="flex-1 mb-4 lg:mb-0">
            <label>Password</label>
            <p className="text-gray-400">
              Set a password to protect your account
            </p>
          </div>
          <div className="flex-1 text-center mb-4 lg:mb-0">
            <div className="flex flex-row items-center gap-3">
              <input
                type="password"
                value="***********"
                readOnly
                className="bg-gray-800 text-white px-4 py-2 rounded-md mx-2"
              />
              <FaCheckCircle className="text-green" />
              <span className="text-green-500">Very secure</span>
            </div>
          </div>
          <div className="flex-1 text-right">
            <button className="bg-blue-600 text-white py-1 px-4 rounded-md">
              Edit
            </button>
          </div>
        </div>
        <div className="border-b-2 border-gray-500"></div>

        <div className="mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-center m-4">
            <div className="flex-1 mb-4 lg:mb-0">
              <label>Two-step verification</label>
              <p className="text-gray-400">
                We recommend requiring a verification code in addition to your
                password.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center mb-4 lg:mb-0">
              <label
                htmlFor="toggle"
                className={`relative block w-12 h-6 bg-gray-600 rounded-full cursor-pointer ${
                  twoStepVerification ? "bg-green-500" : "bg-red-500"
                }`}
                onClick={handleToggleTwoStep}
              >
                <span
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition ${
                    twoStepVerification ? "translate-x-6" : ""
                  }`}
                />
              </label>
              <span className="ml-2">Two-step verification</span>
            </div>
            <div className="flex-1 text-right">
              <button className="bg-blue-600 text-white py-1 px-4 rounded-lg">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordSettings;
