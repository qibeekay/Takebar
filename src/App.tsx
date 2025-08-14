import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import SavingsPlans from "./pages/SavingsPlans";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="font-nunito">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/savings-plans" element={<SavingsPlans />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
