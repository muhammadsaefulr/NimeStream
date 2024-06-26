import ControlsPlayer from "@src/components/videoPlayer/ControlsPlayer";
import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";

interface VideoState {
  playing: boolean;
  muted: boolean;
  played: number;
  seeking: boolean;
  buffer: boolean;
}


interface PlayerVideoProps {
  LinksSource: string;
}

const PlayerVideo: React.FC<PlayerVideoProps> = ({LinksSource}) => {
  const controlRef = useRef<HTMLDivElement>(null);
  const [linksVideoPlay, setLinkSource] = useState("")
  const videoPlayerRef = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    setLinkSource(LinksSource)
  }, [LinksSource])

  const [videoState, setVideoState] = useState<VideoState>({
    playing: false,
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

  return (
    <>
      <section>
        <div
          className="flex justify-center relative"
          onMouseMove={mouseMoveHandler}
        >
          <div className="lg:w-[850px] md: w-full">
            <ReactPlayer
              ref={videoPlayerRef}
              controls={screenfull.isFullscreen}
              className="rounded-full object-cover m-0 p-0 w-full"
              width="450"
              height="450"
              playing={playing}
              onProgress={progressHandler}
              muted={muted}
              url={linksVideoPlay}
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
