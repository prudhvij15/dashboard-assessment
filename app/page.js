import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import { FaGithub } from "react-icons/fa";
export default function Home() {
  return (
    <main className="flex min-h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-6">
          {/* Add your main content here */}
          <h2 className="text-2xl font-bold">Main Content</h2>
          <p>Welcome to the main content area.</p>

          <FaGithub />
        </div>
      </div>
    </main>
  );
}
