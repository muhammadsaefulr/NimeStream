import { useParams } from "react-router";
import { Star } from "lucide-react";
import EpisodeList from "./EpisodeList";
import fetchApi from "../../handleRequest/action";
import { EpisodeListSkeleton } from "@src/components/SkeletonLoad/EpisodeListSkeleton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface dataResInterfaces {
  thumbnailImage: string,
  title: string,
  rating: string,
  status: string,
  studio: string,
  releaseDate: string,
  genre: [
    
  ],
  sinopsis: string,
  totalEps: string

}

const Episodes = () => {
  const { source } = useParams();
  const [dataResInfo, setDataRes] = useState<dataResInterfaces | null>(null);

  const { data: dataRes, isLoading } = fetchApi.useReqAnimeEpsList(source);

  useEffect(() => {
    setDataRes(dataRes?.data?.dataInfo[0])
  }, [dataRes])

  if (isLoading) {
    return (
      <div>
        <EpisodeListSkeleton />
      </div>
    );
  }

  if (dataResInfo == null) {
    return (
      <div>
        <p>Data Not Available</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <img
        src={dataResInfo?.thumbnailImage}
        alt=""
        className="w-[100%] object-cover max-h-64 rounded-md sm:max-h-72 md:max-h-80 lg:max-h-96 xl:max-h-[30rem]"
        width={210}
        height={150}
        style={{
          maskImage: "linear-gradient(to top, transparent, black)",
          WebkitMaskImage: "linear-gradient (to top, transparent, black)",
        }}
      />
      <div className=" lg:px-6 md: px-2">
        <div className="flex-col">
          <h1 className="text-left text-white">{dataResInfo?.title}</h1>
          <h1 className="text-left py-2 font-semibold text-white lg:text-6xl sm: text-2xl">
            {dataResInfo?.title}
          </h1>
          <div className="section-info flex lg:text-lg sm: text-sm">
            <div className="flex">
              <Star className="lg:text-md sm: tex-sm" />
            </div>
            <div className="flex lg:pt-0 sm: pt-1 ">
              <p className="px-3">{dataResInfo?.rating}</p>
              <p>•</p>
              <p className="px-3">{dataResInfo?.status}</p>
              <p>•</p>
              <p className="px-3">{dataResInfo?.studio}</p>
              <p>•</p>
              <p className="px-3">
                {dataResInfo?.releaseDate?.replace("Tanggal Rilis: ", "")}
              </p>
            </div>
          </div>
        </div>
        <div className="container lg:w-1/3 md:w-full pt-6">
          <div className="flex flex-wrap gap-3">
            {dataResInfo?.genre.map((data: any, idx: number) => (
              <div key={idx}>
                <Link to={`/genre/${data.genre}/page/1`}>
                  <button className="rounded-md border-white border-2 px-2">
                    {data.genre}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="desc-sinopsis pt-5">
          <h1 className="text-white font-bold text-2xl py-3">Sinopsis</h1>
          <div className="overflow-auto max-h-64">
            <p>
              {dataResInfo?.sinopsis === "" || null
                ? "Tidak Tersedia"
                : dataResInfo?.sinopsis}
            </p>
          </div>
        </div>
        <section className="pt-6 relative">
          <div className="pt-2">
            <h1 className="text-white font-semibold text-xl">
              Hingga {dataResInfo?.totalEps} Episode
            </h1>
          </div>
          <EpisodeList dataEps={dataRes?.data.dataEps} />
        </section>
      </div>
    </div>
  );
};

export default Episodes;
