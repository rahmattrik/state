import { Route, Router, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Response from "./pages/Response";

function App() {
  /** This is a root component */
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scientists" element={<Details />} />
        <Route path="/response" element={<Response />} />
      </Routes>
    </>
  );
}

export default App;
