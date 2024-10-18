import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Response from "./pages/Response";
import Navbar from "./components/Navbar";

function App() {
  /** This is a root component */
  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scientists" element={<Details />} />
          <Route path="/response" element={<Response />} />
        </Routes>
      </>
  );
}

export default App;
