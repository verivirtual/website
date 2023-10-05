import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import loading from "./assets/images/loading.gif";

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
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-full flex-1 bg-contain bg-no-repeat bg-center justify-center items-center cursor-pointer"
      style={{ backgroundImage: `url(${loading})` }}
      onClick={() => navigate("/vv")}
    />
  );
}

function Video() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <video
        autoPlay
        playsInline
        src="https://d3gpdaqrcqt21a.cloudfront.net/3v.mp4"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export default App;
