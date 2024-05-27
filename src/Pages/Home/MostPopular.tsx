import React from "react";

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

const MostPopular = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl dark:text-white light:text-black">
        Most Popular Anime
      </h1>
      <div className="py-6 xl:flex gap-x-7 lg: block items-center mx-auto gap-y-5">
        {dataDummy.map((data, idx) => {
          return (
            <div key={idx} className="">
              <div className="image-thumb h-50 xl:w-60 lg: w-80">
                <img
                  alt=""
                  width={339}
                  height={330}
                  src={data.thumbnailSrc}
                />
              </div>
              <p className="font-semibold pt-2 w-2/3">{data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MostPopular;
