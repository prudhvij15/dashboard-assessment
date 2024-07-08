"use client";
import React, { useEffect, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";

import Image from "next/image";
import profilePic from "../public/assests/profile.png";
import NavigationButtons from "./HeaderNavigation";
import SecuritySettings from "./SecuritySetting";
import GeneratPage from "./GeneratPage";
import Billing from "./Billing";
import Notifications from "./Notifications";
import Apps from "./Apps";
import Branding from "./Branding";
import Refer from "./Refer";
import Sharing from "./Sharing";

const Header = () => {
  const [selectedSection, setSelectedSection] = useState("Security");

  const renderedSelection = () => {
    switch (selectedSection) {
      case "General":
        return <GeneratPage />;
      case "Security":
        return <SecuritySettings />;
      case "Billing":
        return <Billing />;
      case "Notifications":
        return <Notifications />;
      case "Apps":
        return <Apps />;
      case "Branding":
        return <Branding />;
      case "Refer a Friend":
        return <Refer />;
      case "Sharing":
        return <Sharing />;
    }
  };
  return (
    <div className="bg-gray-800 h-screen">
      <header className="flex p-4 bg-gray-800 text-white items-center justify-between">
        <div className="flex items-center">
          <div className="flex flex-col">
            <h2 className="text-xl mb-2">Mia de Silva</h2>
            <p className="text-gray-400 ">
              Manage Your Details and personal preference here
            </p>
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="flex items-center">
          <div className="items-center" id="inputwrapper">
            <FaSearch id="search-" />
            <input type="text" placeholder="Search" id="input" />
          </div>
          <button className="bg-gray-500 flex items-center px-4 py-2 rounded ml-4">
            <FaPlus className="mr-2" />
            Invite
          </button>
          <button className="bg-blue-500 px-4 py-2 rounded ml-4">
            Upgrade
          </button>
          <div className="w-10 h-10 bg-gray-400 rounded-full ml-4 overflow-hidden">
            <Image
              src={profilePic}
              alt="Profile Picture"
              width={40}
              height={40}
            />
          </div>
        </div>
      </header>
      <NavigationButtons onButtonClick={setSelectedSection} />
      <div className="p-2">{renderedSelection()}</div>
    </div>
  );
};

export default Header;
