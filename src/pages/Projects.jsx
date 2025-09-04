import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { profile } from "../data/profile";

export default function Projects() {
  return (
    <Section title="Projects" subtitle="Some things I’ve built recently">
      <div className="grid md:grid-cols-2 gap-6">
        {profile.projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </Section>
  );
}
