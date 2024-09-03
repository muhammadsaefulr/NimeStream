import { Menu, Search } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import SearchBarAnime from "../SearchBarAnime";

const Navbar = () => {  
  return (
    <>
      <nav className="z-50 navbar dark:bg-base-100 light:bg-white-200">
        <div className="flex-1">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn btn-primary btn-neutral"
              >
                <Menu />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <Sidebar />
            </div>
          </div>
        </div>

        <div className="flex-none gap-3 hover:outline rounded-md px-2">
          <Search />
          <SearchBarAnime/>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="drawer-sidebar"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
