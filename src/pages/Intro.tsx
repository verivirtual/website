import { TriangleRightIcon } from "@radix-ui/react-icons";
import React from "react";
import aboutPoster from "../assets/images/about-poster.jpg";
import logo from "../assets/images/logo.png";
import protoPoster from "../assets/images/proto-poster.jpg";
import Page from "../components/Page";

export default function Intro() {
  const [playing, setPlaying] = React.useState<string>("");
  return (
    <Page>
      <div className="flex flex-1 flex-grow flex-col justify-center items-center py-4 gap-y-8 md:gap-y-12 mb-4">
        <div className="flex justify-center">
          <img src={logo} alt="3V logo" className="max-h-[200px]" />
        </div>
        <div className="flex flex-col px-8 items-center gap-8 max-w-3xl text-justify lg:text-center">
          <div>
            We take exceptional and construction-ready architectural designs and
            create full digital twins in the world's best games engine.
          </div>
          <div>3V architecture is true to life.</div>
          <div>
            Avatars - as clients, architects, contractors, realtors, or members
            of the public - explore, live, feel and interact in our 3V
            creations.
          </div>
          <div>Life is a game. Let's live it verivirtually.</div>
        </div>
        <VideoContainer
          url="https://d35w2e6bivcda.cloudfront.net/about.mp4"
          poster={aboutPoster}
          title="Our Mission"
          playing={playing}
          setPlaying={setPlaying}
        />
        <VideoContainer
          url="https://d35w2e6bivcda.cloudfront.net/proto.mp4"
          poster={protoPoster}
          title="3V Prototype"
          playing={playing}
          setPlaying={setPlaying}
        />
        {/* <div className="flex justify-center gap-12">
          <div className="border-b border-white hover:border-b-0 hover:cursor-pointer">
            <NavLink to="/about" className="text-md link-text">
              About
            </NavLink>
          </div>
          <div className="border-b border-white hover:border-b-0 hover:cursor-pointer">
            <NavLink to="/proto" className="text-md link-text">
              3V Prototype
            </NavLink>
          </div>
        </div> */}
        <div className="text-center">
          To join the community or discuss your project to go verivirtual,
          please contact us at:
          <br />
          <div className="flex justify-center">
            <div className="border-b border-white hover:border-b-0 hover:cursor-pointer">
              <a className="link-text" href="#self">
                info AT verivirtual DOT com
              </a>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

function VideoContainer({
  playing,
  poster,
  setPlaying,
  title,
  url,
}: Readonly<{
  playing: string;
  poster: string;
  setPlaying: (t: string) => void;
  title: string;
  url: string;
}>) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [btnHidden, setBtnHidden] = React.useState<boolean>(false);
  const vidContainerRef = React.useRef<HTMLDivElement | null>(null);
  const onEnded = React.useCallback(() => {
    setBtnHidden(false);
    videoRef.current?.removeEventListener("ended", onEnded);
    videoRef.current?.load();
  }, []);
  const onPaused = React.useCallback(() => {
    setBtnHidden(false);
    videoRef.current?.removeEventListener("pause", onPaused);
  }, []);
  React.useEffect(() => {
    if (playing && playing !== title) {
      videoRef.current?.pause();
      setBtnHidden(false);
    }
  }, [playing, title]);
  // React.useEffect(() => {
  //   const onresize = () => {
  //     if (vidContainerRef.current) {
  //       const cs = getComputedStyle(vidContainerRef.current);
  //       const vidStyle = videoRef.current?.style;
  //       if (vidStyle) {
  //         vidStyle.width = `${cs.width}px`;
  //         vidStyle.height = `${cs.height}px`;
  //       }
  //     }
  //   };
  //   onresize();
  //   window.addEventListener("resize", onresize);
  //   window.scrollTo(0, 0);
  //   return () => {
  //     window.removeEventListener("resize", onresize);
  //   };
  // }, []);
  return (
    <div className="flex flex-col items-center justify-center">
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
            setBtnHidden(true);
            setPlaying(title);
          }}
        />
        <video
          ref={(r) => (videoRef.current = r)}
          disablePictureInPicture
          poster={poster}
          src={url}
          className="object-contain max-h-screen"
          controls={btnHidden}
        />
      </div>
    </div>
  );
}

function PlayButton({
  hidden,
  onClick,
}: Readonly<{
  hidden: boolean;
  onClick: () => void;
}>) {
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
