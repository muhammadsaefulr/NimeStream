import PostSkeleton from "@src/components/SkeletonLoad/PostSkeleton";
import fetchApi from "@src/handleRequest/action";
import { Play, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const SearchPage = () => {
  let [searchParams] = useSearchParams();
  let judul = searchParams.get("judul") as string;

  const [dataSearch, setDataSearch] = useState<dataResponseApi[] | null>([
    {
      title: "",
      AnimeLinks: "",
      status: "",
      rating: "",
      thumbnailImage: "",
      genre: [{ genreLinks: "", titleGenre: "" }],
    },
  ]);

  const { data: dataSearchApi, isLoading } = fetchApi.reqSearchAnime(judul);

  useEffect(() => {
    setDataSearch(dataSearchApi);
  }, [judul, dataSearchApi]);

  const [previewImageIdx, setPreviewImageIdx] = useState<number | null>(null);

  if (isLoading) {
    return (
      <div className="font-semibold text-white text-2xl">
        <div className="flex gap-x-2">
          <span className="loading loading-ring loading-lg"></span>
          <p className="text-md">Loading..</p>
        </div>
        <PostSkeleton length={10} />
      </div>
    );
  }

  if (dataSearch && dataSearch.length < 0) {
    return (
      <div className="flex justify-center h-screen item-center">
        <p className="font-medium text-xl py-12">Data Tidak Ditemukan !</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-semibold text-xl dark:text-white light:text-black">
        Result For {judul}
      </h1>
      <div className="py-6 grid xl:grid-cols-5 gap-4 lg: grid-cols-2 items-center mx-auto mt-6 ">
        {dataSearch?.map((data, idx) => (
          <div key={idx} className="">
            <div
              onMouseEnter={() => setPreviewImageIdx(idx)}
              onMouseLeave={() => setPreviewImageIdx(null)}
              className="image-thumb relative h-50 xl:w-60 lg:w-80"
            >
              <img
                style={{
                  maskImage: "linear-gradient(to top, transparent, black)",
                  WebkitMaskImage:
                    "linear-gradient (to top, transparent, black)",
                }}
                className="anime-image-thumbnail relative -z-10 rounded-lg"
                alt=""
                width={339}
                height={330}
                src={data.thumbnailImage}
              />

              <div
                className={`absolute inset-0 bg-black transition ease-in ${
                  previewImageIdx === idx ? "opacity-50" : "opacity-0"
                }`}
              ></div>
              <div className="relative inset-0 -translate-y-4 w-full">
                <p className="text-white px-2 flex gap-x-2 pt-1">
                  <Star /> {data.rating}
                </p>
              </div>
              <div
                className={`absolute inset-0 flex items-center flex-col transition ease-in ${
                  previewImageIdx === idx ? "visible" : "hidden"
                } xl:pt-24 lg: pt-8`}
              >
                <h1 className="text-center font-semibold xl:text-lg lg:text-xs">
                  {data.title}
                </h1>
                <Link
                  className="pt-6"
                  to={`/watch/${data.AnimeLinks.replace(
                    "https://otakudesu.cloud/",
                    ""
                  )}`}
                >
                  <Play
                    className="text bg-green-400 text-gray-300 rounded-full p-3"
                    size={50}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
