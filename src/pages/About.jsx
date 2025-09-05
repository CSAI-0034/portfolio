import { motion } from "framer-motion";
import Section from "../components/Section";
import SkillPill from "../components/SkillPill";
import TimelineItem from "../components/TimelineItem";
import { profile } from "../data/profile";
import { FaInfoCircle, FaGraduationCap, FaTools, FaBriefcase } from "react-icons/fa";

export default function About() {
  return (
    <section className="relative min-h-screen py-16 bg-gradient-to-br from-gray-900 via-black to-gray-950 overflow-hidden">
      
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 shadow-xl p-8"
        >
          <h2 className="flex items-center gap-2 text-3xl font-bold text-pink-400 mb-4">
            <FaInfoCircle /> About Me
          </h2>
          <p className="opacity-85 leading-relaxed max-w-3xl text-gray-300">
            I’m a Computer Science (AI) undergrad passionate about building useful,
            elegant software and learning by doing. I enjoy full-stack web development,
            clean UI, and solving problems with DSA.
          </p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 shadow-xl p-8"
        >
          <h2 className="flex items-center gap-2 text-3xl font-bold text-blue-400 mb-8">
            <FaGraduationCap /> Education
          </h2>
          <div className="space-y-8">
            {profile.education.map((e, i) => (
              <TimelineItem
                key={i}
                left={e.years}
                title={`${e.degree} — ${e.institute}`}
                subtitle={e.score}
              />
            ))}
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 shadow-xl p-8"
        >
          <h2 className="flex items-center gap-2 text-3xl font-bold text-emerald-400 mb-6">
            <FaTools /> Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((s, i) => (
              <SkillPill key={i} label={s} />
            ))}
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 shadow-xl p-8"
        >
          <h2 className="flex items-center gap-2 text-3xl font-bold text-yellow-400 mb-8">
            <FaBriefcase /> Experience
          </h2>
          <div className="grid gap-6">
            {profile.experience.map((x, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-gray-900/40 border border-white/10 shadow-lg hover:scale-[1.02] transition"
              >
                <div className="text-lg font-semibold text-white">
                  {x.role} — {x.org}
                </div>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                  {x.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
