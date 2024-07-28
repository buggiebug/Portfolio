import { BrowserRouter, Routes, Route } from "react-router-dom";
import UiHome from "./components/UiHome";
import CliHome from "./components/CliHome";
import Home from "./components/Home";

function App() {

  return (
    <div className={`home text-white`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/ui" element={<UiHome />} />
        </Routes>
        <Routes>
          <Route path="/cli" element={<CliHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


