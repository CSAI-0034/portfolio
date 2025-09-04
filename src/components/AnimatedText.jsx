import { motion } from "framer-motion";

export default function AnimatedText({ text, className = "" }) {
  const letters = text.split("");
  return (
    <h1 className={`inline-block ${className}`}>
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.02, type: "spring", stiffness: 350, damping: 20 }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </h1>
  );
}
