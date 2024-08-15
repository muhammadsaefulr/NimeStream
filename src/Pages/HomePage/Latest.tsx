import { Link } from "react-router-dom";
import { useState } from "react";
import { Play, Star } from "lucide-react";
import fetchApi from "../../handleRequest/action";
import PostSkeleton from "@src/components/SkeletonLoad/PostSkeleton";

const LatestAnime = () => {
  const [previewImageIdx, setPreviewImageIdx] = useState<number | null>(null);

  const { data: dataRes, isLoading } = fetchApi.useReqAnimeLatest();

  if (isLoading) {
    return (
      <div className="font-semibold text-white text-2xl">
        <PostSkeleton length={10} />
      </div>
    );
  }

  return (
    <div className="">
      <div>
        <h1 className="pt-3 uppercase font-semibold text-xl dark:text-white light:text-black">
          Ongoing Anime
        </h1>
        <div className="grid xl:grid-cols-5 gap-4 lg: grid-cols-2 items-center mx-auto mt-3 ">
          {dataRes
            ?.filter((data: { updateAnime: string }) =>
              /^[^\d]*$/.test(data.updateAnime)
            )
            .map((data: any, idx: number) => (
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
                    src={data.thumbnailUrl}
                  />

                  <div
                    className={`absolute inset-0 bg-black transition ease-in ${
                      previewImageIdx === idx ? "opacity-50" : "opacity-0"
                    }`}
                  ></div>
                  <div className="relative inset-0 -translate-y-4 w-full">
                    <p className="font-medium px-2 text-white">
                      {data.latestEp}
                    </p>
                    <p className="text-white px-2 flex gap-x-2 pt-1">
                      {/[A-Z]/g.test(data.updateAnime) === true ? (
                        "Setiap "
                      ) : (
                        <Star />
                      )}
                      {data.updateAnime}
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
                      to={`/watch/${data.url.replace(
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
      <div>
        <h1 className="pt-8 uppercase font-semibold text-xl dark:text-white light:text-black">
          Complete Anime
        </h1>
        <div className="grid xl:grid-cols-5 gap-4 lg: grid-cols-2 items-center mx-auto mt-4 ">
          {dataRes
            ?.filter((data: { updateAnime: string }) =>
              /\d/.test(data.updateAnime)
            )
            .map((data: any, idx: number) => (
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
                    src={data.thumbnailUrl}
                  />

                  <div
                    className={`absolute inset-0 bg-black transition ease-in ${
                      previewImageIdx === idx ? "opacity-50" : "opacity-0"
                    }`}
                  ></div>
                  <div className="relative inset-0 -translate-y-4 w-full">
                    <p className="font-medium px-2 text-white">
                      {data.latestEp}
                    </p>
                    <p className="text-white px-2 flex gap-x-2 pt-1">
                      <Star />

                      {data.updateAnime}
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
                      to={`/watch/${data.url.replace(
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
    </div>
  );
};

export default LatestAnime;
