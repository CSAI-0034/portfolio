import Section from "../components/Section";
import resumePdf from "../assets/resume.pdf";

export default function Resume() {
  return (
    <Section title="Resume" subtitle="View or download my latest resume">
      <div className="mb-6 flex gap-3">
        <a href={resumePdf} download className="px-4 py-2 rounded-full bg-pink-600 hover:bg-pink-500 transition">Download PDF</a>
        <a href="mailto:anubhavtripathi512@gmail.com" className="px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/15">Email Me</a>
      </div>
      <div className="rounded-xl overflow-hidden border border-white/10 bg-white">
        <iframe src={resumePdf} title="Resume" className="w-full h-[1000px]" />
      </div>
    </Section>
  );
}
