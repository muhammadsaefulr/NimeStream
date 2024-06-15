import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/HomePage/Home";
import Ongoing from "./Pages/GenrePage/GenrePage";
import Episodes from "./Pages/EpisodesPage/Episodes";
import { useEffect, useState } from "react";
import PlayAnime from "./Pages/PlayAnime/PlayAnime";
import ReactQueryClientProviders from "./components/ReactQueryClientProvider/ReactClientQueryProvider";

const App = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (location.pathname.startsWith("/play/episode/")) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location.pathname]);

  return (
    <div>
      <ReactQueryClientProviders>
        {showNavbar && (
          <nav className="z-50 relative">
            <Navbar />
          </nav>
        )}
        <div className="z-10 p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ongoing" element={<Ongoing />} />
            <Route path="/watch/anime/:source" element={<Episodes />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/play/episode/:source" element={<PlayAnime />} />
        </Routes>
      </ReactQueryClientProviders>
    </div>
  );
};

export default App;
