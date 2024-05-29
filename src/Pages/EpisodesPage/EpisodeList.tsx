import { PlaySquareIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const EpisodeList = ({ dataEps }) => {
  return (
    <div>
      <div className="pt-4">
        <div className="max-h-64 overflow-auto">
          <div className="grid gap-x-4">
            {dataEps?.reverse().map((data, idx) => {
              return (
                <Link key={idx} to={`/play/${data?.vidLinks.replace("https://otakudesu.cloud/", "")}`} className="pt-4">
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
