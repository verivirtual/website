import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import loading from "./assets/images/loading.gif";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Intro} />
        <Route path="/vv" Component={Video} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

function Intro() {
  const vidRef = React.useRef<HTMLVideoElement | null>(null);
  const playingRef = React.useRef<boolean>(false);
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <video
        ref={vidRef}
        playsInline
        disablePictureInPicture
        src="https://d3gpdaqrcqt21a.cloudfront.net/3v_2.mp4"
        poster={loading}
        className="w-full h-full object-contain cursor-pointer"
        onClick={() => {
          if (vidRef.current) {
            if (playingRef.current) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
            playingRef.current = !playingRef.current;
          }
        }}
      />
    </div>
  );
}

function Video() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <video
        autoPlay
        disablePictureInPicture
        src="https://d3gpdaqrcqt21a.cloudfront.net/3v_2.mp4"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export default App;
