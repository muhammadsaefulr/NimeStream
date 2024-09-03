import { SearchIcon } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Search = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchData ? navigate(`/search?judul=${searchData}`) : "";
      console.log(searchData);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [searchData]);

  return (
    <div className="lg: visible sm:hidden">
      <div className="flex bg-gray-800 justify-center gap-x-10 py-4 rounded-lg">
        <div className="bg-green-400 p-2 rounded-md">
          <SearchIcon size={30} className="text-white" />
        </div>
        <input
          type="text"
          value={searchData}
          placeholder="Search anime"
          className={`bg-white text-black transition-opacity ease-in-out delay-200 rounded-full outline-none md:w-auto p-2 bg-transparent`}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchData(event.target.value)
          }
        />
      </div>
    </div>
  );
};
