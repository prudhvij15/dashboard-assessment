"use client";
import { useState } from "react";
import { FaAngleRight, FaCheckCircle } from "react-icons/fa";

const SecuritySettings = () => {
  const initialSession = [
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
  const [twoStepVerification, setTwoStepVerification] = useState(true);
  const [sessions, setSessions] = useState(initialSession);

  const handleToggleTwoStep = () => {
    setTwoStepVerification(!twoStepVerification);
  };
  const handleSession = (id) => {
    setSessions(sessions.filter((session) => session.id != id));
  };

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg w-full mx-auto">
      <div className="flex justify-between items-center mb-6 bg-gray-700 h-20 rounded-md">
        <div className="p-10 ml">
          <h2 className="text-sm font-semibold">
            Your account security is 90%
          </h2>
          <p className="text-sm">
            Please review your account security settings regularly and update
            your password{" "}
          </p>
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
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2">Basics</h3>
        <div className="border-t-2 border-gray-500"></div>
        <div className="flex justify-between items-center m-4">
          <div className="flex-1">
            <label className="flex-1">Password</label>
            <p className="text-gray-400">
              Set a password to protect your account
            </p>
          </div>
          <div className="flex-1  text-center">
            <div className="flex flex-row items-center gap-3">
              {" "}
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
          <div className="flex justify-between items-center m-4">
            <div className="flex-1">
              <label className="flex-1">Two-step verification</label>
              <p className="text-gray-400">
                We recommend requiring a verification <br />
                code in addition to your password
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
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
      <div>
        <h3 className="text-md font-medium mb-2">Browsers and devices</h3>
        <p className="mb-4">
          These browsers and devices are currently signed in to your account.
          Remove any unauthorized devices.
        </p>
        <ul>
          {sessions.map((session) => (
            <li
              key={session.id}
              className="flex items-center justify-between bg-gray-800 p-4 rounded-md mb-2"
            >
              <span>{session.browser}</span>
              <span>{session.location}</span>
              <span>{session.active ? "Current session" : "1 month ago"}</span>
              <button
                className="bg-red-600 text-white py-1 px-2 rounded-lg"
                onClick={() => handleSession(session.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecuritySettings;
