import { useParams } from "react-router";
import PlayerVideo from "./ReactPlayer";
import fetchApi from "@src/handleRequest/action";
import { useEffect, useState } from "react";
import LoadingBars from "@src/components/LoadingBars/LoadingBars";
import { Link } from "react-router-dom";

const PlayAnime = () => {
  const { source } = useParams();
  const [urlSource, setUrlSource] = useState("");

  const { data: respData, isLoading } = fetchApi.reqPlayAnime(source);

  const dataResSelectable = respData?.resultPdrain;

  useEffect(() => {
    console.log(urlSource);
  }, [urlSource]);

  useEffect(() => {
    if (dataResSelectable && dataResSelectable.length > 0) {
      setUrlSource(dataResSelectable[0]?.links);
    }
  }, [dataResSelectable]);

  if (dataResSelectable && dataResSelectable == "") {
    return (
      <div className="flex min-h-screen justify-center translate-y-1/3">
        <div className="block">
          <p className=" text-2xl font-medium text-center mx-3">
            Error getting video streaming source
          </p>
          <Link to="/">
            <p className="pt-2 text-md text-white underline font-medium text-center mx-3">
             Kembali
            </p>
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="">
        <LoadingBars />
      </div>
    );
  }

  return (
    <section className="mx-3 pb-6 ">
      <div className="lg:flex md:block">
        <div>
          <PlayerVideo LinksSource={urlSource} />
        </div>
        <div className="lg:mx-4 visible lg:w-1/3 md: unvisible md: w-full">
          <h2 className="text-white font-semibold lg:pt-0 md: pt-3">
            Semua Episode
          </h2>
          <ul className="overflow-scroll lg:grid grid-cols-3 gap-6 max-h-96 md: flex justify-between gap-x-3 pt-4 no-scrollbar">
            {respData?.epsList
              ?.slice()
              .reverse()
              .map((data: any, idx: any) => (
                <a
                  key={idx}
                  className="btn bg-green-400 text-white"
                  href={data.links.replace("https://otakudesu.cloud", "/play")}
                >
                  <button>{data.title.match(/\d+/)}</button>
                </a>
              ))}
          </ul>
        </div>
      </div>
      <div className="pt-6 lg:flex justify-between md:block">
        <div className="block">
          <h2 className="text-white font-semibold text-2xl truncate">
            {respData?.title}
          </h2>
          <div>
            <div className="block gap-x-3 pt-3 text-white md: text-xs">
              <p className="text-lg truncate">{respData?.epsNow}</p>
              <p className="text-lg">{respData?.releaseOn}</p>
            </div>
          </div>
        </div>
        <div className="flex lg:mx-4 md:m-0 pt-4 justify-center text-white">
          <select
            value={urlSource}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setUrlSource(e.target.value)
            }
            className="select select-bordered lg: w-full"
          >
            <option disabled value="">
              Select Resolution
            </option>
            {dataResSelectable?.slice(0, 3).map((data: any, keyId: any) => (
              <option key={keyId} value={data.links}>
                {data.res}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default PlayAnime;
