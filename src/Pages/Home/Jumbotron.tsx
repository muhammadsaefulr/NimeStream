import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { nessecaryData } from "./logic/jumbotron.logic";

const Jumbotron = () => {

  let dataJumbotron = nessecaryData()

  return (
    <>
      <div className="w-full h-[80vh] carousel rounded-box">
        {dataJumbotron.map((data, idx) => {
          return (
            <div
              key={idx}
              className="carousel-item w-full relative overflow-hidden rounded-md"
            >
              <img
                src={data.image}
                className="w-full h-full object-cover absolute top-0 left-0 -z-10"
                alt="Tailwind CSS Carousel component"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute inset-0 flex flex-col justify-center z-10 text-white xl:mx-16 lg: mx-8">
                <h1 className="font-semibold text-xl mb-2">{data.title}</h1>
                <p className="text-md py-2 xl:w-1/2 lg: w-full">
                  {data.description}
                </p>

                <div className="genre flex gap-x-2 pt-2">
                  {data.genre.map((data, idx) => {
                    return (
                      <div
                        key={idx}
                        className="rounded-full border-2 border-b-slate-100 px-2"
                      >
                        <Link to="">{data.title}</Link>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4">
                  <Link to="/">
                    <button className="rounded-full flex p-2 px-5 bg-green-400">
                      <Play />
                      <p className="font-semibold px-4">Putar</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Jumbotron;
