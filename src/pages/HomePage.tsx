import SideBar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen border-x-2 flex">
      <SideBar />
      <div className="flex flex-col flex-grow">
        <div className="p-2 border-b flex items-center gap-6 justify-end bg-red-500">
          <p className=" text-white">
            John Smith{" "}
            <span className="opacity-30 text-black">| Moderator</span>
          </p>
          <Button>Log out</Button>
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
