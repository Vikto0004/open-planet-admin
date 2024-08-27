import {
  Briefcase,
  ChartColumnDecreasing,
  Layers3,
  Newspaper,
  UserRoundCog,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="shadow-md p-4 border-r min-h-full max-w-[20%] w-full">
      <h2 className="font-bold uppercase mb-10">Open Planet | Admin</h2>
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "bg-neutral-200" : ""
              } uppercase font-medium text-sm p-2 rounded-md flex items-center gap-2 transition-opacity hover:opacity-50`
            }
          >
            <ChartColumnDecreasing />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pages"
            className={({ isActive }) =>
              `${
                isActive ? "bg-neutral-200" : ""
              } uppercase font-medium text-sm p-2 rounded-md flex items-center gap-2 transition-opacity hover:opacity-50`
            }
          >
            <Layers3 />
            Pages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              `${
                isActive ? "bg-neutral-200" : ""
              } uppercase font-medium text-sm p-2 rounded-md flex items-center gap-2 transition-opacity hover:opacity-50`
            }
          >
            <Newspaper />
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/vacancies"
            className={({ isActive }) =>
              `${
                isActive ? "bg-neutral-200" : ""
              } uppercase font-medium text-sm p-2 rounded-md flex items-center gap-2 transition-opacity hover:opacity-50`
            }
          >
            <Briefcase />
            Vacancies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/moderators"
            className={({ isActive }) =>
              `${
                isActive ? "bg-neutral-200" : ""
              } uppercase font-medium text-sm p-2 rounded-md flex items-center gap-2 transition-opacity hover:opacity-50`
            }
          >
            <UserRoundCog />
            Moderators
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
