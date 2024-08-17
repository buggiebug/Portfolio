import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import UiHome from "./components/UiHome";
import CliHome from "./components/CliHome";
import Home from "./components/Home";
import { useEffect, useRef } from "react";


function InnerApp({ appRef }) {
  const location = useLocation();
  useEffect(() => {
    const removeLocation = () => {
      localStorage.removeItem("location");
    };
    if (location.pathname !== "/ui") {
      removeLocation();
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ui" element={<UiHome appRef={appRef} />} />
      <Route path="/cli" element={<CliHome appRef={appRef} />} />
    </Routes>
  );
}


function App() {
  const appRef = useRef(null);
  return (
    <div id="home" ref={appRef} className={`text-white border-4 border-green-600 overflow-scroll overflow-x-hidden`}>
      <BrowserRouter>
        <InnerApp appRef={appRef} />
      </BrowserRouter>
    </div>
  );
}

export default App;
