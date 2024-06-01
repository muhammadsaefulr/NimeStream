import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchApi from "../../handleRequest/action";
import ControlsPlayer from "../../components/videoPlayer/ControlsPlayer";
import ReactPlayer from "react-player";
import screenfull from "screenfull";

interface Params extends Record<string, string | undefined> {
  source: string;
}

interface VideoState {
  playing: boolean;
  muted: boolean;
  played: number;
  seeking: boolean;
  buffer: boolean;
}

const PlayerVideo: React.FC = () => {
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

  const [controlsVisible, setControlsVisible] = useState(true);

  const handleClickFullScreen = () => {
    if (screenfull.isEnabled && videoPlayerRef.current) {
      screenfull.request(videoPlayerRef.current.getInternalPlayer() as Element);
    }
  };

  const { playing, muted, played, seeking } = videoState;

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

  const currentTime = formatTime(
    videoPlayerRef.current ? videoPlayerRef.current.getCurrentTime() : 0
  );
  const duration = formatTime(
    videoPlayerRef.current ? videoPlayerRef.current.getDuration() : 0
  );

  const playPauseHandler = () => {
    setVideoState({ ...videoState, playing: !videoState.playing });
  };

  const rewindHandler = () => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.seekTo(
        videoPlayerRef.current.getCurrentTime() - 5
      );
    }
  };

  const fastForwardHandler = () => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.seekTo(
        videoPlayerRef.current.getCurrentTime() + 10
      );
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

  const progressHandler = (state: any) => {
    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };

  const mouseMoveHandler = () => {
    if (controlRef.current) {
      controlRef.current.style.display = "block";
    }
    setControlsVisible(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (controlsVisible) {
      timer = setTimeout(() => {
        if (controlRef.current) {
          controlRef.current.style.display = "none";
        }
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [controlsVisible]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (controlsVisible) {
      timer = setTimeout(() => {
        setControlsVisible(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [controlsVisible]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log("data playable videos: ", respData);

  return (
    <>
      <section>
        <div
          className="flex justify-center relative"
          onMouseMove={mouseMoveHandler}
        >
          <div className="w-full rounded-md">
            <ReactPlayer
              ref={videoPlayerRef}
              controls={screenfull.isFullscreen}
              className="rounded-full object-cover m-0 p-0"
              width="100%"
              height="100%"
              playing={playing}
              onProgress={progressHandler}
              muted={muted}
              url="/assets/videos/simplescreenrecorder-2024-02-19_20.54.32.mp4"
            />
          </div>
          <div
            ref={controlRef}
            className={`transition-opacity duration-500 ease-in-out ${
              controlsVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <ControlsPlayer
              onPlayPause={playPauseHandler}
              onForward={fastForwardHandler}
              onRewind={rewindHandler}
              playing={playing}
              played={played}
              onSeek={seekHandler}
              onSeekMouseUp={seekMouseUpHandler}
              mute={muted}
              ControlRef={controlRef}
              currentTime={currentTime}
              duration={duration}
              onFullscreen={handleClickFullScreen}
              onMute={muteHandler}
              sourceTitle={"dummy"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PlayerVideo;
