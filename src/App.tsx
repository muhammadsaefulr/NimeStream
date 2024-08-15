import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/HomePage/Home";
import Episodes from "./Pages/EpisodesPage/Episodes";
import { useEffect, useState } from "react";
import PlayAnime from "./Pages/PlayAnime/PlayAnime";
import ReactQueryClientProviders from "./components/ReactQueryClientProvider/ReactClientQueryProvider";
import SearchPage from "./Pages/SearchPage/SearchPage";
import { useSearchStore } from "./state/zustandStore";
import GenrePage from "./Pages/GenrePage/GenrePage";
import Footer from "./components/Footer/Footer";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const datasearchQuery = useSearchStore((state) => state.title);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (datasearchQuery) {
      if (location.pathname.startsWith("/search")) {
        // console.log("at data search query: ", datasearchQuery);
      } else {
        navigate("/search");
      }
    }
  }, [datasearchQuery]);

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
          <nav className="z-50 relative flex">
            <Navbar />
          </nav>
        )}
        <div className="z-10 p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/genre/:genreTitle/page/:id" element={<GenrePage />} />
            <Route path="/watch/anime/:source" element={<Episodes />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/play/episode/:source" element={<PlayAnime />} />
        </Routes>
      </ReactQueryClientProviders>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
