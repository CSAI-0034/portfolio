import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const linkClass = ({ isActive }) =>
  `px-3 py-1 rounded-full transition ${
    isActive ? "bg-white/10" : "hover:bg-white/5"
  }`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-gray-950/60 border-b border-white/5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1,y:0}} className="font-bold text-lg">
          Anubhav<span className="text-pink-500">.</span>
        </motion.div>
        <div className="flex items-center gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/resume" className={linkClass}>Resume</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
