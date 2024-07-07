import { FaPlus, FaSearch } from "react-icons/fa";
import NavigationButtons from "./HeaderNavigation";
import SecuritySettings from "./SecuritySetting";
const Header = () => {
  return (
    <div className="bg-gray-800 h-screen">
      {" "}
      <header className="flex p-4 bg-gray-800 text-white items-center justify-between">
        <div className="flex items-center">
          <div className="flex flex-col">
            <h2 className="text-xl mb-2">Mia de Silva</h2>
            <p className="text-gray-400 ">
              Manage Your Details and personal preference here
            </p>
          </div>
        </div>
        <div className="flex-grow"></div>{" "}
        {/* Spacer to push content to the right */}
        <div className="flex items-center">
          <div className="relative">
            <button className="bg-black px-4 py-2 rounded-r-md   top-0 bottom-0  absolute  flex items-center">
              <FaSearch />
            </button>
            <input
              type="text"
              className="bg-white px-4 py-2 rounded-l-md focus:outline-none"
              placeholder="     Search"
            />
          </div>

          {/* Invite button */}
          <button className="bg-gray-500 flex items-center px-4 py-2 rounded ml-4">
            {" "}
            <FaPlus className="mr-2" />
            Invite
          </button>

          {/* Upgrade button */}
          <button className="bg-blue-500 px-4 py-2 rounded ml-4">
            Upgrade
          </button>

          {/* Small profile picture icon */}
          <div className="w-10 h-10 bg-gray-400 rounded-full ml-4"></div>
        </div>
      </header>
      <NavigationButtons />
      <SecuritySettings />
    </div>
  );
};

export default Header;
