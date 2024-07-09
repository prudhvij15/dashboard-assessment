"use client";
import React, { useState } from "react";
import { FaBars, FaPlus, FaSearch } from "react-icons/fa";

import Image from "next/image";
import profilePic from "../..//public/assests/profile.png";
import SecuritySettings from "./SecuritySetting";
import GeneratPage from "../GeneratPage";
import Billing from "../Billing";
import Notifications from "../Notifications";
import Apps from "../Apps";
import Branding from "../Branding";
import Refer from "../Refer";
import Sharing from "../Sharing";
import SettingsTab from "./SettingsTab";

const Header = ({ toggleSidebar }) => {
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
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-800 h-screen sm:flex-row overflow-auto">
      <header className="p-4 bg-gray-800 text-white items-center lg:flex lg:justify-between">
        <div className="flex items-center lg:items-start lg:flex-row">
          <button className="text-white p-2 lg:hidden" onClick={toggleSidebar}>
            <FaBars size={24} />
          </button>
          <div className="ml-2 lg:ml-4 lg:flex lg:flex-col">
            <h2 className="text-xl mb-1 lg:mb-2 lg:text-2xl">Mia de Silva</h2>
            <p className="text-gray-400 lg:text-lg">
              Manage Your Details and personal preference here
            </p>
          </div>
        </div>
        <div className="lg:flex lg:items-center lg:space-x-4">
          <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0">
            <div className="relative items-center" id="inputwrapper">
              <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search"
                id="input"
                className="pl-8 pr-4 py-2 bg-gray-700 rounded-md text-white placeholder-gray-400"
              />
            </div>
            <button className="bg-gray-500 flex items-center px-4 py-2 rounded-md">
              <FaPlus className="mr-2" />
              Invite
            </button>
            <button className="bg-blue-500 px-4 py-2 rounded-lg">
              Upgrade
            </button>
          </div>
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
      <SettingsTab onButtonClick={setSelectedSection} />
      <div className="p-2">{renderedSelection()}</div>
    </div>
  );
};

export default Header;
