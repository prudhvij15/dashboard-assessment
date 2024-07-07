import { FaPlus } from "react-icons/fa";

const Header = () => {
  const handleSearch = () => {
    // Handle search functionality here with searchText
    console.log("Perform search action with:", searchText);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <header className="flex p-4 bg-gray-800 text-white items-center justify-between">
      <div className="flex items-center">
        <div className="flex flex-col">
          <h2 className="text-xl mb-2">Mia de Silva</h2>
          <p>Manage Your Details and personal preference here</p>
        </div>
      </div>
      <div className="flex-grow"></div>{" "}
      {/* Spacer to push content to the right */}
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            className="bg-white px-4 py-2 rounded-l-md focus:outline-none"
            placeholder="Search"
          />
          <button className="bg-blue-500 px-4 py-2 rounded-r-md absolute right-0 top-0 bottom-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Add your SVG path for the search icon */}
            </svg>
          </button>
        </div>

        {/* Invite button */}
        <button className="bg-blue-500 flex items-center px-4 py-2 rounded ml-4">
          {" "}
          <FaPlus className="mr-2" />
          Invite
        </button>

        {/* Small profile picture icon */}
        <div className="w-8 h-8 bg-gray-400 rounded-full ml-4"></div>

        {/* Upgrade button */}
        <button className="bg-blue-500 px-4 py-2 rounded ml-4">Upgrade</button>
      </div>
    </header>
  );
};

export default Header;
