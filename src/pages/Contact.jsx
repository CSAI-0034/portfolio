import { useState } from "react";
import Section from "../components/Section";
import { profile } from "../data/profile";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState(""); 
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://formspree.io/f/mrbaoqbr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section title="Contact Me" subtitle="Let’s build something great together 🚀">
      <div className="grid md:grid-cols-2 gap-8">
        
        
        <motion.form
          onSubmit={handleSubmit}
          className="rounded-3xl p-6 bg-white/5 backdrop-blur border border-white/10 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-xl bg-white/10 focus:outline-none border border-white/10"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-xl bg-white/10 focus:outline-none border border-white/10"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="px-4 py-3 rounded-xl bg-white/10 focus:outline-none border border-white/10"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-3 rounded-xl transition font-semibold flex items-center justify-center ${
                loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-pink-600 hover:bg-pink-500"
              }`}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message ✉️"
              )}
            </button>
          </div>

          
          {status === "success" && (
            <p className="mt-4 text-green-400 font-medium">
              ✅ Thank you! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-400 font-medium">
              ❌ Oops! Something went wrong. Please try again.
            </p>
          )}
        </motion.form>

        
        <motion.div
          className="rounded-3xl p-6 bg-white/5 backdrop-blur border border-white/10 shadow-xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-4">Reach Me Directly</h3>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-pink-400" /> {profile.email}
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-green-400" /> {profile.phone}
            </p>
            <p className="flex items-center gap-2">
              <FaLinkedin className="text-blue-400" />{" "}
              <a href={profile.socials.linkedin} target="_blank" className="underline">
                LinkedIn Profile
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaGithub className="text-gray-400" />{" "}
              <a href={profile.socials.github} target="_blank" className="underline">
                GitHub Profile
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}


















// import Section from "../components/Section";
// import { profile } from "../data/profile";

// export default function Contact() {
//   return (
//     <Section title="Contact" subtitle="Let’s build something great">
//       <div className="grid md:grid-cols-2 gap-8">
//         <form
//           className="rounded-2xl p-6 bg-white/5 border border-white/10"
//           action={`mailto:${profile.email}`}
//           method="post"
//           encType="text/plain"
//         >
//           <div className="grid gap-4">
//             <input className="px-4 py-3 rounded-xl bg-white/10 focus:outline-none" name="name" placeholder="Your name" required />
//             <input className="px-4 py-3 rounded-xl bg-white/10 focus:outline-none" name="email" type="email" placeholder="Your email" required />
//             <textarea className="px-4 py-3 rounded-xl bg-white/10 focus:outline-none" name="message" rows="6" placeholder="Your message" required />
//             <button className="px-4 py-3 rounded-xl bg-pink-600 hover:bg-pink-500 transition font-medium">Send</button>
//           </div>
//         </form>

//         <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
//           <h3 className="text-lg font-semibold mb-3">Reach me at</h3>
//           <div className="space-y-2 opacity-85">
//             <div>Email: <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></div>
//             <div>Phone: {profile.phone}</div>
//             <div>LinkedIn: <a className="underline" href={profile.socials.linkedin} target="_blank">Profile</a></div>
//             <div>GitHub: <a className="underline" href={profile.socials.github} target="_blank">CSAI-0034</a></div>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }
