import { BrowserRouter, Routes, Route } from "react-router-dom";
import UiHome from "./components/UiHome";
import CliHome from "./components/CliHome";
import Home from "./components/Home";
import { useRef } from "react";

function App() {

  const appRef = useRef(null);

  return (
    <div id="home" ref={appRef} className={`text-white border-4 border-green-600 overflow-scroll overflow-x-hidden`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ui" element={<UiHome />} />
          <Route path="/cli" element={<CliHome appRef={appRef} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


