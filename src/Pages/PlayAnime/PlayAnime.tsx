import React from "react";
import { useParams } from "react-router";
import fetchApi from "../../handleRequest/action";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import ControlsPlayer from "../../components/videoPlayer/ControlsPlayer";

const PlayAnime = () => {
  const { source } = useParams();
  const { data: respData, isLoading } = fetchApi.reqPlayAnime(source);

  if(isLoading){
    return <p>Loading...</p>
  }

  console.log("data playable videos: ", respData);

 
  return (
    <>
      <section>
        <VideoPlayer/>
        <ControlsPlayer/>
      </section>
    </>
  );
};

export default PlayAnime;

// {respData?.movieSource?.map((movie) => (
//   <div key={movie.res}>
//     <p className="py-6">{movie.res}</p>
//     {movie.dataList.map((data) => (
//       <div key={data.title}>
//         <p className="py-3">{data.title}</p>
//         <p>{data.links}</p>
//       </div>
//     ))}
//   </div>
// ))}
