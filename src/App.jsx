import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/header/Header";
import Bestiary from "./pages/Bestiary2";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col items-center justify-between overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bestiary" element={<Bestiary />} />
          <Route path="/map" element={<Map />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
