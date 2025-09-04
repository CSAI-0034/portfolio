import { motion } from "framer-motion";

export default function ProjectCard({ name, desc, stack = [], links = [] }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="opacity-80 mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((s, i) => (
          <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10">{s}</span>
        ))}
      </div>
      <div className="flex gap-3">
        {links.map((l, i) => (
          <a key={i} href={l.href} target="_blank" rel="noreferrer" className="underline">
            {l.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
