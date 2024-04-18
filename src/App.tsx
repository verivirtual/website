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
  return (
    <div
      className="flex flex-1 flex-col justify-center items-center h-full w-full hover:cursor-pointer"
      onClick={() => navigate("/intro")}
    >
      <img src={loading} alt="3V logo" title="Click to enter" />
      <Footer sticky />
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
