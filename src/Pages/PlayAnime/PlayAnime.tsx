import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import fetchApi from "../../handleRequest/action";
import ControlsPlayer from "../../components/videoPlayer/ControlsPlayer";
import ReactPlayer from "react-player";

interface Params {
  source: string;
}

interface VideoState {
  playing: boolean;
  muted: boolean;
  played: number;
  seeking: boolean;
  buffer: boolean;
}

const PlayAnime: React.FC = () => {
  const { source } = useParams<Params>();
  const controlRef = useRef<HTMLDivElement>(null);
  const { data: respData, isLoading } = fetchApi.reqPlayAnime(source);
  const videoPlayerRef = useRef<ReactPlayer | null>(null);

  const [videoState, setVideoState] = useState<VideoState>({
    playing: true,
    muted: false,
    played: 0,
    seeking: false,
    buffer: true,
  });

  const { playing, muted, played, seeking, buffer } = videoState;

  const formatTime = (time: number) => {
    if (isNaN(time)) {
      return "00:00";
    }

    const date = new Date(time * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    if (hours) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
  };

  const currentTime = formatTime(videoPlayerRef.current ? videoPlayerRef.current.getCurrentTime() : 0);
  const duration = formatTime(videoPlayerRef.current ? videoPlayerRef.current.getDuration() : 0);

  const playPauseHandler = () => {
    setVideoState({ ...videoState, playing: !videoState.playing });
  };

  const rewindHandler = () => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 5);
    }
  };

  const fastForwardHandler = () => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
    }
  };

  const progressHandler = (state: { played: number }) => {
    if (!seeking) {
      setVideoState({ ...videoState, played: state.played });
    }
  };

  const seekHandler = (value: number) => {
    setVideoState({ ...videoState, played: value });
  };

  const seekMouseUpHandler = (value: number) => {
    setVideoState({ ...videoState, seeking: false });
    if (videoPlayerRef.current) {
      videoPlayerRef.current.seekTo(value);
    }
  };

  const muteHandler = () => {
    setVideoState({ ...videoState, muted: !videoState.muted });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log("data playable videos: ", respData);

  return (
    <>
      <section>
        <div className="flex justify-center relative">
          <div className="w-full rounded-md">
            <ReactPlayer
              ref={videoPlayerRef}
              className="rounded-full object-cover m-0 p-0"
              width="100%"
              height="100%"
              playing={playing}
              onProgress={progressHandler}
              muted={muted}
              url="/assets/videos/simplescreenrecorder-2024-02-19_20.54.32.mp4"
            />
          </div>
          <ControlsPlayer
            onPlayPause={playPauseHandler}
            onForward={fastForwardHandler}
            onRewind={rewindHandler}
            playing={playing}
            played={played}
            onSeek={seekHandler}
            onSeekMouseUp={seekMouseUpHandler}
            mute={muted}
            controlRef={controlRef}
            currentTime={currentTime}
            duration={duration}
            onMute={muteHandler}
          />
        </div>
      </section>
    </>
  );
};

export default PlayAnime;
