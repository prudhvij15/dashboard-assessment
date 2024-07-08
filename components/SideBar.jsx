"use client";
import Link from "next/link";

import {
  FaAllergies,
  FaFolder,
  FaHome,
  FaInvision,
  FaLock,
  FaShare,
  FaTrash,
} from "react-icons/fa";

import { DiAptana } from "react-icons/di";
const SideBar = () => {
  return (
    <div className="h-screen bg-gray-900 text-white w-64 flex flex-col">
      <div className="p-4">
        <h1 className="text-xl font-bold">Untitled UI</h1>
      </div>
      <nav className="mt-10 flex-grow">
        <Link
          href="/"
          className="py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
        >
          <FaHome className="mr-2" /> Home
        </Link>
        <Link
          href="/files"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
        >
          <FaFolder className="mr-2" /> All files
        </Link>
        <Link
          href="/settings"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
        >
          <FaLock className="mr-2" />
          Private Files
        </Link>
        <Link
          href="/settings"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
        >
          <FaShare className="mr-2" />
          Shared with me
        </Link>
        <Link
          href="/settings"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
        >
          <FaTrash className="mr-2" />
          Deleted Files
        </Link>
        <Link
          href="/settings"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
        >
          <FaInvision className="mr-2" />
          Design
        </Link>
        <Link
          href="/settings"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
        >
          <FaAllergies className="mr-2" />
          Notifications
        </Link>
        <Link
          href="/settings"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
        >
          <DiAptana className="mr-2 text-xl" />
          Settings
        </Link>
      </nav>
      <div className="bg-gray-500 m-2 p-1 ">
        <div className="flex justify-between m-2">
          <h4>Storage</h4>
          <p>Upgrade</p>
        </div>
        <div className="m-2">
          <progress value="32" max="100">
            32%
          </progress>
          <p>9.22Gb used of 100</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
