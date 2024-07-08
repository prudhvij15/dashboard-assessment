import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import "../components/styles.css";
import { FaGithub } from "react-icons/fa";
export default function Home() {
  return (
    <main className="flex min-h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-6"></div>
      </div>
    </main>
  );
}
