import { BrowserRouter, Routes, Route } from "react-router-dom";
import UiHome from "./components/UiHome";
import CliHome from "./components/CliHome";
import Home from "./components/Home";

function App() {
  return (
    <div id="home" className={`text-white overflow-scroll overflow-x-hidden`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ui" element={<UiHome />} />
          <Route path="/cli" element={<CliHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


