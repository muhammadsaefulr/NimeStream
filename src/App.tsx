import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/HomePage/Home";
import Ongoing from "./Pages/GenrePage/GenrePage";
import Episodes from "./Pages/EpisodesPage/Episodes";
import PlayAnime from "./Pages/PlayAnime/PlayAnime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <nav className="z-50 relative">
        <Navbar />
      </nav>
      <div className="z-10 p-3">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ongoing" element={<Ongoing />} />
            <Route path="/watch/anime/:source" element={<Episodes />} />
            <Route path="/play/episode/:source" element={<PlayAnime />} />
          </Routes>
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default App;
