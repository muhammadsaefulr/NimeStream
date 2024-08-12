import React from "react";
import {
  ArrowBigLeft,
  ArrowRightToLineIcon,
  FastForwardIcon,
  FullscreenIcon,
  PauseIcon,
  PlayIcon,
  Volume2Icon,
  VolumeX,
} from "lucide-react";
import { Link } from "react-router-dom";

interface ControlsPlayerProps {
  onPlayPause: () => void;
  playing: boolean;
  played: number;
  mute: boolean;
  onForward: () => void;
  onRewind: () => void;
  onFullscreen: () => void;
  onSeek: (value: number) => void;
  onSeekMouseUp: (value: number) => void;
  onMute: () => void;
  currentTime: string;
  ControlRef: React.RefObject<HTMLDivElement>;
  duration: string;
  sourceTitle: string | undefined;
}

const ControlsPlayer: React.FC<ControlsPlayerProps> = ({
  onPlayPause,
  playing,
  played,
  onForward,
  onRewind,
  onSeek,
  onSeekMouseUp,
  onMute,
  mute,
  onFullscreen,
  // duration,
  currentTime,
}) => {
  const handleSeekChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSeek(parseFloat(event.target.value) / 100);
  };

  const handleSeekMouseUp = (
    event:
      | React.MouseEvent<HTMLInputElement>
      | React.TouchEvent<HTMLInputElement>
  ) => {
    onSeekMouseUp(parseFloat((event.target as HTMLInputElement).value) / 100);
  };

  return (
    <div className="absolute flex flex-col z-10 top-0 bottom-0 left-0 right-0">
      <div className="top-container flex items-center justify-between mx-2 mt-3">
        <Link to="/">
          <ArrowBigLeft
            size={30}
            className="text-white hover:bg-green-400 rounded-md"
          />
        </Link>
        {/* <p className="text-white font-semibold text-lg">{sourceTitle}</p> */}
      </div>
      <div className="middle-container flex justify-center items-center gap-x-4 content-center h-5/6 md: pt-3">
        <div>
          <FastForwardIcon
            onDoubleClick={onRewind}
            size={50}
            className="rotate-180 text-left text-white hover:bg-green-400 bg-opacity-50 p-2 rounded-full transition delay-75 ease-in"
          />
        </div>
        <div
          className="icon__btn text-white rounded-full p-2 hover:bg-green-400 transition ease-in"
          onClick={onPlayPause}
        >
          {playing ? (
            <PauseIcon size={40} fontSize="medium" />
          ) : (
            <PlayIcon size={40} fontSize="medium" />
          )}
        </div>
        <div>
          <FastForwardIcon
            onDoubleClick={onForward}
            size={50}
            className="text-white hover:bg-green-400 bg-opacity-50 p-2 rounded-full transition delay-75 ease-in"
          />
        </div>
      </div>
      <div className="bottom__container lg:pt-10 md: pt-0">
        <div className="flex items-center mx-2 ">
          <input
            type="range"
            min={0}
            max={100}
            value={played * 100}
            className="w-full sm: hidden"
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex p-2 items-center w-[50%] text-white font-semibold">
            <div className="mx-1" onClick={onPlayPause}>
              {playing ? <PauseIcon size={20} /> : <PlayIcon size={20} />}
            </div>
            <div className="mx-1">
              <ArrowRightToLineIcon size={25} />
            </div>
            <div className="mx-1" onClick={onMute}>
              {mute ? (
                <VolumeX fontSize="medium" />
              ) : (
                <Volume2Icon fontSize="medium" />
              )}
            </div>
          </div>
          <div className="flex">
            <span className="px-3 text-white font-bold">{currentTime}</span>
            <FullscreenIcon className="mx-3" onClick={onFullscreen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlsPlayer;
