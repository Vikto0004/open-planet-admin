import {
  Briefcase,
  ChartColumnDecreasing,
  Layers3,
  Newspaper,
  StickyNote,
  UserRoundCog,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [isPagesOpen, setIsPagesOpen] = useState<boolean>(false);

  const togglePagesMenu = () => {
    setIsPagesOpen(!isPagesOpen);
  };

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
            Статистика
          </NavLink>
        </li>
        <li className="border rounded-md">
          <button
            onClick={togglePagesMenu}
            className="uppercase font-medium text-sm p-2 rounded-md flex w-full items-center gap-2 transition-opacity hover:opacity-50"
          >
            <Layers3 />
            Сторінки
          </button>
          {isPagesOpen && (
            <ul className="pl-4">
              <li>
                <NavLink
                  to="/pages/home"
                  className={({ isActive }) =>
                    `${
                      isActive ? "opacity-50" : ""
                    } uppercase font-medium text-xs p-2 rounded-md flex items-center gap-2 transition-opacity hover:opacity-50`
                  }
                >
                  <StickyNote size={15} />
                  Головна
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pages/about"
                  className={({ isActive }) =>
                    `${
                      isActive ? "opacity-50" : ""
                    } uppercase font-medium text-xs p-2 rounded-md flex items-center gap-2 transition-opacity hover:opacity-50`
                  }
                >
                  <StickyNote size={15} />
                  Про наш фонд
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pages/support"
                  className={({ isActive }) =>
                    `${
                      isActive ? "opacity-50" : ""
                    } uppercase font-medium text-xs p-2 rounded-md flex items-center gap-2 transition-opacity hover:opacity-50`
                  }
                >
                  <StickyNote size={15} />
                  Підтримати фонд
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pages/international-transfers"
                  className={({ isActive }) =>
                    `${
                      isActive ? "opacity-50" : ""
                    } uppercase font-medium text-xs p-2 rounded-md flex items-center gap-2 transition-opacity hover:opacity-50`
                  }
                >
                  <StickyNote size={15} />
                  Перекази з-за кордону
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pages/public-offer"
                  className={({ isActive }) =>
                    `${
                      isActive ? "opacity-50" : ""
                    } uppercase font-medium text-xs p-2 rounded-md flex items-center gap-2 transition-opacity hover:opacity-50`
                  }
                >
                  <StickyNote size={15} />
                  Публічна оферта
                </NavLink>
              </li>
            </ul>
          )}
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
            Новини
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
            Вакансії
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
            Модерація
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
