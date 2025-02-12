import { PlaySquareIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface PageProps {
  dataEps: any
}

const EpisodeList: React.FC<PageProps> = ({ dataEps }) => {

  return (
    <div>
      <div className="pt-4">
        <div className="max-h-64 overflow-auto no-scrollbar">
          <div className="grid gap-x-4">
            {dataEps?.slice().reverse().map((data: any, idx: number) => {
              return (
                <Link key={idx} to={`/play/episode/${data?.vidLinks.replace(data?.vidLinks.includes("https://otakudesu.cloud/lengkap")
                  ? "https://otakudesu.cloud/lengkap/"
                  : "https://otakudesu.cloud/",
                "")}`} className="pt-4">
                  <button className="bg-gray-800 rounded-lg w-full p-3 flex justify-between transition delay-75 ease-in text-white hover:bg-gray-500">
                    <p>{data?.title}</p>
                    <PlaySquareIcon className="lg:visible md: hidden" />
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeList;
