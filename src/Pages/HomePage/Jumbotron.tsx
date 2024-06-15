import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { nessecaryData } from "./func/homepage.func";

const Jumbotron = () => {
  const dataJumbotron = nessecaryData();

  return (
    <>
      <div className="w-full carousel rounded-box lg:h-[80vh] xl: h-[60vh]">
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
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="absolute inset-0 flex flex-col justify-center z-10 text-white xl:mx-16 lg: mx-8">
                <h1 className="font-semibold mb-2 lg: text-2xl">{data.title}</h1>
                <p className="py-2 lg:text-lg lg:h-32 lg:w-2/3 xl: w-full overflow-y-scroll h-1/3 text-md">
                  {data.description}
                </p>

                <div className="genre pt-2 gap-2 lg:flex gap-x-2 xl: grid grid-cols-3">
                  {data.genre.map((data, idx) => {
                    return (
                      <Link to="">
                        <button
                          key={idx}
                          className="rounded-full border-2 border-b-slate-100 px-2 transition ease-in hover:bg-white hover:text-gray-400"
                        >
                          {data.title}
                        </button>
                      </Link>
                    );
                  })}
                </div>

                <div className="pt-4">
                  <Link to={data.linkSource}>
                    <button className="rounded-full flex p-2 px-5 bg-green-400 transition ease-in hover:bg-green-500">
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
