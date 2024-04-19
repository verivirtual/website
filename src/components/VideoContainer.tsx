import { TriangleRightIcon } from "@radix-ui/react-icons";
import React from "react";

export default function VideoContainer({
  url,
  poster,
  title,
}: {
  url: string;
  poster: string;
  title: string;
}) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [btnHidden, setHideButton] = React.useState<boolean>(false);
  const vidContainerRef = React.useRef<HTMLDivElement | null>(null);
  const onEnded = React.useCallback(() => {
    setHideButton(false);
    videoRef.current?.removeEventListener("ended", onEnded);
    videoRef.current?.load();
  }, []);
  const onPaused = React.useCallback(() => {
    setHideButton(false);
    videoRef.current?.removeEventListener("pause", onPaused);
  }, []);
  React.useEffect(() => {
    const onresize = () => {
      if (vidContainerRef.current) {
        const cs = getComputedStyle(vidContainerRef.current);
        const vidStyle = videoRef.current?.style;
        if (vidStyle) {
          vidStyle.width = `${cs.width}px`;
          vidStyle.height = `${cs.height}px`;
        }
      }
    };
    onresize();
    window.addEventListener("resize", onresize);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("resize", onresize);
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-[100dvh]">
      <div className="text-lg mb-4">{title}</div>
      <div
        className="flex-col flex flex-grow-0 items-center justify-center overflow-hidden"
        ref={(r) => (vidContainerRef.current = r)}
      >
        <PlayButton
          hidden={btnHidden}
          onClick={() => {
            videoRef.current?.addEventListener("ended", onEnded);
            videoRef.current?.addEventListener("pause", onPaused);
            videoRef.current?.play();
            setHideButton(true);
          }}
        />
        <video
          ref={(r) => (videoRef.current = r)}
          disablePictureInPicture
          poster={poster}
          src={url}
          className="object-contain"
          controls={btnHidden}
        />
      </div>
    </div>
  );
}

function PlayButton({
  hidden,
  onClick,
}: {
  hidden: boolean;
  onClick: () => void;
}) {
  const [iconColor, setIconColor] = React.useState<string>("text-black");
  return (
    <div
      className="text-center absolute w-[70px] h-[55px] bg-[#f9f9f9] hover:bg-black hover:cursor-pointer z-10"
      style={{ display: hidden ? "none" : "" }}
      onMouseEnter={() => setIconColor("text-white")}
      onMouseLeave={() => setIconColor("text-black")}
      onClick={onClick}
    >
      <div className="flex items-center justify-center h-full w-full">
        <TriangleRightIcon className={iconColor} width="32px" height="32px" />
      </div>
    </div>
  );
}
