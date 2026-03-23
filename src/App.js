import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen" style={{ background: "var(--bg-primary)" }}>
        <Navbar />
        <main className="flex-grow" style={{ position: "relative", zIndex: 1 }}>
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume"   element={<Resume />} />
            <Route path="/blog"     element={<Blog />} />
            <Route path="/contact"  element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;