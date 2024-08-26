import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { Tooltip } from "@chakra-ui/react";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu === true && screenSize <= 900) setActiveMenu(false);
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md m-2 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              <SiShopware />
              <span>Shoppy</span>
            </Link>
            <Tooltip label="menu" placement="bottom">
              <button
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                onClick={() => setActiveMenu(!activeMenu)}
              >
                <MdOutlineCancel />
              </button>
            </Tooltip>
          </div>
          <div className="mt-10">
            {links.map((item) => {
              return (
                <div key={item.title}>
                  <p className="text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                  {item.links.map((link) => {
                    return (
                      <NavLink
                        to={link.name}
                        key={link.name}
                        onClick={handleCloseSidebar}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                        style={({ isActive }) =>
                          isActive
                            ? {
                                backgroundColor: currentColor,
                                color: "white",
                              }
                            : {}
                        }
                      >
                        {link.icon}
                        <span className="capitalize">{link.name}</span>
                      </NavLink>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
