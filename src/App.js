import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import UiHome from "./components/UiHome";
import CliHome from "./components/CliHome";
import Home from "./components/Home";
import bgImage from "./components/images/bgImage.jpg"


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

  useEffect(() => {
    const appHomeId = document.getElementById("home");
    appHomeId.style.backgroundImage = `url(${bgImage})`
    appHomeId.style.color = `white`
  }, [location.pathname]);


  // Scroll Height...
  const [scrollPositionValue, setScrollPositionValue] = useState({ current: 0, prev: 0 });
  const [scrollPosition, setScrollPosition] = useState({ top: true, bottom: false });
  useEffect(() => {
    const appHomeId = document.getElementById("home");
    if (appRef.current) {
      const handleScroll = () => {
        const scrollTop = appHomeId.scrollTop;
        setScrollPositionValue({ current: scrollTop, prev: scrollPositionValue.current });
        if (scrollPositionValue.current > scrollPositionValue.prev) {
          setScrollPosition({ top: false, bottom: true })
        } else {
          setScrollPosition({ top: true, bottom: false })
        }
      };
      appHomeId.addEventListener("scroll", handleScroll);
      return () => {
        appHomeId.removeEventListener("scroll", handleScroll);
      };
    }
  }, [appRef, scrollPositionValue]);

  return (
    <Routes>
      <Route path="/" element={<Home scroll={{ scrollPosition, scrollPositionValue }} />} />
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
