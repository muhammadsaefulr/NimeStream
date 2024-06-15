import { Menu, Search } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    const getData = setTimeout(() => {
      if (searchData) {
        axios
          .get(`/main/api/service/otakudesu/search?q=${searchData}`)
          .then((response) => {
            console.log(response.data)
          });
      }
    }, 2000);

    return () => clearTimeout(getData);

  }, [searchData]);

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
          <input
            type="text"
            value={searchData}
            placeholder="Search"
            className="rounded-xl outline-none md:w-auto p-2 bg-transparent"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setSearchData(event.target.value)
            }
            onSubmit={() => {console.log("hello world")}}
            onClick={() => {console.log("click")}}
          />
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
