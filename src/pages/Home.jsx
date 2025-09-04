import { motion } from "framer-motion";
import { profile } from "../data/profile";
import avatar from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950">
      {/* Gradient glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m <span className="text-pink-500">{profile.name}</span>
          </h1>
          <p className="mt-4 text-2xl font-medium text-gray-300">
            {profile.title}
          </p>
          <p className="mt-6 text-gray-400 max-w-md">{profile.objective}</p>

          <div className="mt-8 flex gap-4">
            <a
              href="/src/assets/resume.pdf"
              download
              className="px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-500 transition font-semibold"
            >
              📄 Download Resume
            </a>
            <a
              href="/resume"
              className="px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition font-semibold"
            >
              👀 View Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-6 flex gap-6 text-2xl text-gray-400">
            <a href={profile.socials.github} target="_blank" className="hover:text-white">
              <FaGithub />
            </a>
            <a href={profile.socials.linkedin} target="_blank" className="hover:text-[#0A66C2]">
              <FaLinkedin />
            </a>
            <a href={profile.socials.leetcode} target="_blank" className="hover:text-yellow-400">
              <SiLeetcode />
            </a>
            <a href={profile.socials.hackerrank} target="_blank" className="hover:text-green-500">
              <FaHackerrank />
            </a>
          </div>
        </motion.div>

        {/* Right photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="justify-self-center"
        >
          <div className="relative w-[320px] h-[380px] mx-auto rounded-3xl overflow-hidden shadow-2xl ring-4 ring-pink-500/40">
            <img
              src={avatar}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
