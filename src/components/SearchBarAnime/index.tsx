import { SearchIcon } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const SearchBarAnime = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");

  const [isSearchClicked, setIsSearchClicked] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchData ? navigate(`/search?judul=${searchData}`) : "";
      console.log(searchData);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [searchData]);

  return (
    <div className="flex">
      <div className={`mx-2 cursor-pointer ${isSearchClicked ? "bg-green-400" : "bg-green-400"} rounded-full transition ease-in hover:bg-green-400 p-2 bg-transparent`} onClick={() => setIsSearchClicked(!isSearchClicked)}>
        <SearchIcon size={25} />
      </div>

      <div className="rounded-xl">
        <input
          type="text"
          value={searchData}
          placeholder="Search"
          className={`bg-white text-black transition-opacity ease-in-out delay-200 rounded-full ${!isSearchClicked ? "hidden" : "visible"} outline-none md:w-auto p-2 bg-transparent`}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchData(event.target.value)
          }
        />
      </div>
    </div>
  );
};

export default SearchBarAnime;
