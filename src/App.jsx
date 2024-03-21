import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initializeCreatures } from "./reducers/creaturesReducer";

import Header from "./components/header/Header";
import Bestiary from "./pages/Bestiary2";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Footer from "./components/footer/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCreatures());
  }, []);

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
