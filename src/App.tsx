import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import loading from "./assets/images/loading.gif";
import aboutPoster from "./assets/images/about-poster.jpg";
import logo from "./assets/images/logo.png";
import React from "react";
import { TriangleRightIcon } from "@radix-ui/react-icons";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Intro} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

function Intro() {
  const [showLogo, setShowLogo] = React.useState<boolean>(true);
  if (showLogo) {
    return (
      <div
        className="flex flex-1 justify-center items-center h-full w-full hover:cursor-pointer"
        onClick={() => setShowLogo(false)}
      >
        <img src={loading} alt="3V logo" title="Click to enter" />
      </div>
    );
  }
  return (
    <div className="flex flex-1 flex-grow flex-col justify-center items-center py-4">
      <div className="flex justify-center">
        <img src={logo} alt="3V logo" className="max-w-sm" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2 px-2 items-center">
        <div className="text-center order-2 md:order-1">
          <VideoContainer url="https://d3gpdaqrcqt21a.cloudfront.net/3v_2.mp4" />
          <span className="text-lg">Prototype</span>
        </div>
        <div className="text-center order-1 md:order-2">
          <VideoContainer
            url="https://d19m8pewllwwe8.cloudfront.net/about.mp4"
            poster
          />
          <span className="text-lg">About</span>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="flex flex-1 flex-col justify-center items-center">
  //     <video
  //       ref={vidRef}
  //       playsInline
  //       loop
  //       disablePictureInPicture
  //       src="https://d3gpdaqrcqt21a.cloudfront.net/3v_2.mp4"
  //       poster={loading}
  //       className="w-full h-full object-contain cursor-pointer"
  //       onClick={() => {
  //         if (vidRef.current) {
  //           if (playingRef.current) {
  //             vidRef.current.pause();
  //           } else {
  //             vidRef.current.play();
  //           }
  //           playingRef.current = !playingRef.current;
  //         }
  //       }}
  //     />
  //   </div>
  // );
}

function VideoContainer({ url, poster }: { url: string; poster?: boolean }) {
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
    <div className="mb-2 flex-col flex flex-1 items-center justify-center">
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
        poster={poster ? aboutPoster : undefined}
        disablePictureInPicture
        src={url}
        className="w-full h-full object-contain"
        controls={btnHidden}
      />
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

// function Video() {
//   return (
//     <div className="flex flex-1 flex-col justify-center items-center">
//       <video
//         autoPlay
//         disablePictureInPicture
//         src="https://d3gpdaqrcqt21a.cloudfront.net/3v_2.mp4"
//         className="w-full h-full object-contain"
//       />
//     </div>
//   );
// }

export default App;
