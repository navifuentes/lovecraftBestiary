import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/header/Header";
import Bestiary from "./pages/Bestiary";
import Hero from "./components/Hero";
import Map from "./pages/Map";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/bestiary" element={<Bestiary />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
