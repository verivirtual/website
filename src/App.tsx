import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import loading from "./assets/images/loading.gif";
import Footer from "./components/Footer";
import About from "./pages/About";
import Intro from "./pages/Intro";
import Prototype from "./pages/Prototype";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Welcome} />
        <Route path="/intro" Component={Intro} />
        <Route path="/proto" Component={Prototype} />
        <Route path="/about" Component={About} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

function Welcome() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = React.useState<boolean>(false);
  return (
    <div
      className={`flex flex-1 flex-col justify-between items-center h-[100dvh] max-h-[100dvh] overflow-hidden hover:cursor-pointer ${
        fadeOut ? "transition-opacity opacity-0 duration-200" : ""
      }`}
      onClick={() => {
        setFadeOut(true);
        setTimeout(() => navigate("/intro"), 200);
      }}
    >
      <div className="flex flex-1 min-h-0 flex-col items-center justify-evenly">
        <img
          src={loading}
          alt="3V logo"
          title="Click to enter"
          className="object-contain w-full max-w-xs xl:max-w-lg"
        />
        <span className="relative h-8 w-8">
          <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-[#fd5e0f] opacity-50"></span>
          <span className="relative inline-flex rounded-full h-8 w-8 bg-[#fd5e0f]"></span>
        </span>
      </div>
      <Footer />
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
