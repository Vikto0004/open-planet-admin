import SideBar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen border-x-2 flex">
      <SideBar />
      <div className="flex flex-col flex-grow">
        <div className="p-2 border-b flex items-center gap-6 justify-end bg-red-500">
          <p className=" text-white">
            Іван В. <span className="opacity-30 text-black">| Модератор</span>
          </p>
          <Button className="flex items-center gap-2">
            <LogOut size={15} />
            Вийти
          </Button>
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
