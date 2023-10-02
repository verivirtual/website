import loading from "./assets/images/loading.gif";

function App() {
  return (
    <div
      className="w-full h-full flex-1 bg-contain bg-no-repeat bg-center justify-center items-center"
      style={{ backgroundImage: `url(${loading})` }}
    />
  );
}

export default App;
