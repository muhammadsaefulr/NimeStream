import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowBigLeft,
  ArrowBigRight,
  Calendar,
  Play,
} from "lucide-react";
import fetchApi from "../../handleRequest/action";
import PostSkeleton from "@src/components/SkeletonLoad/PostSkeleton";

const AnimeOngoing = () => {
  const [previewImageIdx, setPreviewImageIdx] = useState<number | null>(null);
  const { pageNum } = useParams();
  const { data: dataRes, isLoading } = fetchApi.useReqAnimeOngoing(pageNum);

  const nextPage = parseInt(pageNum ?? "", 10) + 1;
  const prevPage = parseInt(pageNum ?? "", 0) > 0 ? parseInt(pageNum ?? "", 0) - 1 : 0;

  useEffect(() => {
    console.log(dataRes);
  }, [dataRes]);

  if (isLoading) {
    return (
      <div className="font-semibold text-white text-2xl">
        <PostSkeleton length={10} />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between ">
        <h1 className="pt-6 font-semibold text-xl dark:text-white light:text-black">
          Anime Ongoing Musim Ini
        </h1>
        <div className="flex gap-x-4 mt-6 mx-3">
          <a
            href={`/ongoing/page/${prevPage}`}
            className="rounded-md text-white hover:bg-green-400"
          >
            <ArrowBigLeft size={35} />
          </a>
          <p className="pt-1 font-semibold text-white">Page</p>
          <a
            href={`/ongoing/page/${nextPage}`}
            className="rounded-md text-white hover:bg-green-400"
          >
            <ArrowBigRight size={35} />
          </a>
        </div>
      </div>
      <div className="py-4 grid xl:grid-cols-5 gap-4 lg: grid-cols-2 items-center mx-auto mt-4 ">
        {dataRes?.map((data: any, idx: number) => (
          <div key={idx + 1} className="">
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
                <p className="font-medium px-2 text-white">
                  {data?.latestEp !== "Unknown Eps" &&
                  data?.latestEp !== "? Eps"
                    ? data?.latestEp
                    : "Ongoing"}
                </p>
                <p className="text-white px-2 flex gap-x-2 pt-1">
                  <Calendar />
                  {data?.updateAnime}
                </p>
              </div>
              <div
                className={`absolute inset-0 flex items-center flex-col transition ease-in ${
                  previewImageIdx === idx ? "visible" : "hidden"
                } xl:pt-24 lg: pt-8`}
              >
                <h1 className="text-center font-semibold xl:text-lg lg:text-xs">
                  {data?.title}
                </h1>
                <Link
                  className="pt-6"
                  to={`/watch/${data?.AnimeLinks?.replace(
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

export default AnimeOngoing;
