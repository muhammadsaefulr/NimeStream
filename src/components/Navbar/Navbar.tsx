import { Menu } from "lucide-react";
import Sidebar from "../Sidebar/index";
import SearchBarAnime from "../SearchBarDesktop";

const Navbar = () => {
  return (
    <>
      <nav className="z-50 navbar dark:bg-base-100 light:bg-white-200">
        <div className="flex-1">
          <a href="https://nimestream.msaepul.my.id">
            <div className="mx-3 flex">
              <div className="w-10">
                <img src="/icon.png"/>
              </div>
              <p className="mx-2 mt-1 bg-gradient-to-r from-green-300 to-white text-transparent bg-clip-text tracking-tighter text-2xl font-semibold">
                NimeStream
              </p>
            </div>
          </a>

          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
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

        <div className="flex-none gap-3 rounded-md px-2">
          <SearchBarAnime />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="drawer-sidebar"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
        </div>
        <div className="drawer-content bg-transparent">
          <label
            htmlFor="my-drawer"
            className="btn bg-gray-700 outline-none border-none btn-primary btn-neutral"
          >
            <Menu />
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
