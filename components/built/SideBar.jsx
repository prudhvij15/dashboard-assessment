"use client";
import Link from "next/link";
import {
  FaAllergies,
  FaAngleRight,
  FaFolder,
  FaHome,
  FaInvision,
  FaLock,
  FaShare,
  FaShareSquare,
  FaTrash,
} from "react-icons/fa";
import { DiAptana } from "react-icons/di";

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed z-30 inset-y-0 left-0 w-64 bg-gray-900 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform lg:translate-x-0 lg:static lg:inset-0 flex flex-col justify-between`}
      style={{ maxHeight: "100vh" }} // Ensure sidebar fits within viewport
    >
      <div>
        <div className="p-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="flex text-gray-500">
            <p className="text-gray-500 font-semibold">v4.O</p>
            <FaShareSquare className="m-1" />
          </div>
        </div>
        <nav className="mt-4 flex-grow overflow-y-auto">
          {" "}
          {/* Allow navigation to scroll */}
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
        <div className="p-3">
          <div className="flex  justify-between">
            <h4>File Browsers</h4>
          </div>
          <div className="m-2  items-center flex gap-3">
            <button className="flex items-center gap-3 ">
              <FaAngleRight />
              <h3 className="font-semibold">Folders</h3>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 p-2 m-2 rounded-md">
        <div className="flex justify-between m-1">
          <h4>Storage</h4>
          <Link href="">Upgrade</Link>
        </div>
        <div className="m-1">
          <progress value="82" max="100" id="progress"></progress>
          <p>9.22Gb used of 100</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
