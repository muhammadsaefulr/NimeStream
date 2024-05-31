import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="w-full rounded-md">
      <ReactPlayer className="rounded-full object-cover m-0 p-0" width="100%" height="100%" url="/assets/videos/simplescreenrecorder-2024-02-19_20.54.32.mp4" />
    </div>
  );
};

export default VideoPlayer;
