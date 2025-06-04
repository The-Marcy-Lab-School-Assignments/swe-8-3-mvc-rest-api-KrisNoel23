import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeroDetails from "./pages/HeroDetails";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes/:id" element={<HeroDetails />} />
      </Routes>
  );
}

export default App;