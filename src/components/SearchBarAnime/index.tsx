import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const SearchBarAnime = () => {
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
    <div>
      <input
        type="text"
        value={searchData}
        placeholder="Search"
        className="rounded-xl outline-none md:w-auto p-2 bg-transparent"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearchData(event.target.value)
        }
      />
    </div>
  );
};

export default SearchBarAnime;
