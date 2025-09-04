import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white ring-hero">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={
            <div className="p-10 text-center">
              <h1 className="text-3xl font-bold mb-3">404</h1>
              <p className="opacity-70 mb-6">Page not found.</p>
              <NavLink to="/" className="underline">Go Home</NavLink>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
