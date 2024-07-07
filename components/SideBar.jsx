import Link from "next/link";
import {
  FaAllergies,
  FaCircle,
  FaFile,
  FaFolder,
  FaGithub,
  FaHome,
  FaInvision,
  FaLock,
  FaMailBulk,
  FaShare,
  FaTrash,
} from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="h-screen bg-gray-900 text-white w-64 flex-none">
      <div className="p-4">
        <h1 className="text-xl font-bold">Untitled UI</h1>
      </div>
      <nav className="mt-10">
        <Link
          href="/"
          className=" py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
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
          <FaCircle className="mr-2" />
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
