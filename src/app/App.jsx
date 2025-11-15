import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from "@/components";
import CharacterPage from "./character/page";
import EpisodePage from "./episode/page";
import LocationPage from "./location/page";
import HomePage from "./home/page";

function App() {
  return (
    <Router className="p-5">
      <NavigationBar/>

      <main className="flex-grow container mx-auto p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/character" element={<CharacterPage />} />
            <Route path="/episode" element={<EpisodePage />} />
            <Route path="/location" element={<LocationPage />} />
          </Routes>
        </main>
    </Router>
  )
}

export default App
