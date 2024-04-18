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
  const onEnded = React.useCallback(() => {
    setHideButton(false);
    videoRef.current?.removeEventListener("ended", onEnded);
    videoRef.current?.load();
  }, []);
  const onPaused = React.useCallback(() => {
    setHideButton(false);
    videoRef.current?.removeEventListener("pause", onPaused);
  }, []);
  return (
    <div className="flex-col flex flex-1 items-center justify-center">
      <div className="text-lg mb-4">{title}</div>
      <div className="flex-col flex items-center justify-center">
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
          poster={poster}
          disablePictureInPicture
          src={url}
          className="object-contain max-w-[848px] max-h-[848px]"
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
      className="text-center absolute w-[75px] h-[60px] bg-[#f9f9f9] hover:bg-black hover:cursor-pointer z-10"
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
