// "use client";
// import { useState } from "react";
// import SideBar from "@/components/built/SideBar";
// import Header from "@/components/built/Header";
// import "../components/styles.css";

// export default function Home() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row">
//       {/* Sidebar */}
//       <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//       {/* Overlay for mobile */}
//       {isSidebarOpen && (
//         <div
//           className=" inset-0 bg-black opacity-50 z-20 lg:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Main content */}
//       <div className=" flex flex-col lg:w-full">
//         <Header toggleSidebar={toggleSidebar} />
//         <div className="flex-1 p-6">{/* Your content goes here */}</div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import SideBar from "@/components/built/SideBar";
import Header from "@/components/built/Header";
import "../components/styles.css";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };

    if (isSidebarOpen) {
      document.addEventListener("click", closeSidebar);
    } else {
      document.removeEventListener("click", closeSidebar);
    }

    return () => {
      document.removeEventListener("click", closeSidebar);
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar */}
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="inset-0 bg-black opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main content */}
      <div className="flex flex-col lg:w-full">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex-1 p-6">{/* Your content goes here */}</div>
      </div>
    </div>
  );
}
