import { ProjectCard } from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

export function ProjectList({ t }) {
  return (
    <section id="projects">
      <h2>{t("main.projects_title")}</h2>
      {projects.map((project) => (
        <ProjectCard key={project.id} t={t} project={project} />
      ))}
    </section>
  );
}
