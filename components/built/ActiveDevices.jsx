import React, { useState } from "react";
import { DiApple } from "react-icons/di";
import Brave from "../../public/assests/brave.png";
import Image from "next/image";
const ActiveDevices = () => {
  const initialSession = [
    {
      id: 1,
      browser: "Brave on Mac OS X",
      location: "Ninh Bình, Vietnam",
      active: true,
      icon: <Image src={Brave} />,
    },
    {
      id: 2,
      browser: "Mia’s MacBook Pro",
      location: "Ninh Bình, Vietnam",
      active: true,
      icon: <DiApple className="text-4xl" />,
    },
    {
      id: 3,
      browser: "Brave on Mac OS X",
      location: "Mexico City, Mexico",
      active: false,
      icon: <Image src={Brave} />,
    },
    {
      id: 4,
      browser: "Mia’s MacBook Pro",
      location: "Mexico City, Mexico",
      active: false,
      icon: <DiApple className="text-4xl" />,
    },
  ];

  const [sessions, setSessions] = useState(initialSession);
  return (
    <div>
      <h3 className="text-md font-medium mb-2">Browsers and devices</h3>
      <p className="mb-4 text-gray-400">
        These browsers and devices are currently signed in to your account.
        Remove any unauthorized devices.
      </p>
      <ul>
        {sessions.map((session) => (
          <li
            key={session.id}
            className="flex flex-col lg:flex-row items-center justify-between bg-gray-800 p-4 rounded-md mb-2"
          >
            <div className="flex gap-4 items-center">
              <span className="bg-gray-700 rounded-lg p-1 hidden  lg:block">
                {session.icon}
              </span>

              <span className="mb-2 lg:mb-0 text-lg font-semibold">
                {session.browser}
              </span>
            </div>
            <span className="mb-2 lg:mb-0">{session.location}</span>
            <span className="mb-2 lg:mb-0">
              {session.active ? "Current session" : "1 month ago"}
            </span>
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
  );
};

export default ActiveDevices;
