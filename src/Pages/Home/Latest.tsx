import axios from "axios";
import React, { useEffect, useState } from "react";

interface dataResp {
  title: string;
  thumbnailUrl: string;
}

const LatestAnime = () => {
  const [data, setData] = useState<dataResp[] | null>(null);
  useEffect(() => {
    axios.get(`/main/otakudesu`).then((res) => {
      console.log(res.data);
      setData(res.data.data);
    });
  }, []);

  const dataDummy = [
    {
      title: "Tensei shitara Slime Datta Ken 3rd Season",
      thumbnailSrc: "https://cdn.myanimelist.net/images/anime/1587/141789.jpg",
    },
    {
      title: "One Piece",
      thumbnailSrc: "https://cdn.myanimelist.net/images/anime/1244/138851.jpg",
    },
    {
      title: "Tensei shitara Slime Datta Ken 3rd Season",
      thumbnailSrc: "https://cdn.myanimelist.net/images/anime/1587/141789.jpg",
    },
    {
      title: "Tensei shitara Slime Datta Ken 3rd Season",
      thumbnailSrc: "https://cdn.myanimelist.net/images/anime/1587/141789.jpg",
    },
    {
      title: "Tensei shitara Slime Datta Ken 3rd Season",
      thumbnailSrc: "https://cdn.myanimelist.net/images/anime/1587/141789.jpg",
    },
  ];
  return (
    <div>
      <h1 className="font-semibold text-xl dark:text-white light:text-black">
        Latest Updated Anime
      </h1>
      <div className="py-12 xl:grid grid-cols-5 gap-4 lg: block items-center mx-auto gap-y-5">
        {data?.map((data, idx) => {
          return (
            <div key={idx} className="">
              <div className="image-thumb h-50 xl:w-60 lg: w-80">
                <img alt="" width={339} height={330} src={data.thumbnailUrl} />
              </div>
              <p className="font-semibold text-sm pt-2">{data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestAnime;
