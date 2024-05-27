import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Ongoing from "./Pages/Ongoing/Ongoing";

const App = () => {
  return (
    <div>
      <nav className="z-50 relative">
        <Navbar />
      </nav>
      <div className="z-10 p-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ongoing" element={<Ongoing />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
