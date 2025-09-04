import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="opacity-70">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-4 opacity-80">
          <a href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.socials.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
          <a href={profile.socials.hackerrank} target="_blank" rel="noreferrer">HackerRank</a>
        </div>
      </div>
    </footer>
  );
}
