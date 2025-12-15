import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "@/components";
import CharacterPage from "./character/page";
import EpisodePage from "./episode/page";
import LocationPage from "./location/page";
import LocationDetailPage from "./location/detail/page";
import HomePage from "./home/page";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <NavigationBar />

      <main className="flex-grow container mx-auto p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character" element={<CharacterPage />} />
          <Route path="/episode" element={<EpisodePage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/location/:name" element={<LocationDetailPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
