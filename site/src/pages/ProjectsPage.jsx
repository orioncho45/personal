import React from "react";
import { projects } from "../../data/projects.mjs";
import { ProjectCard } from "../components/ProjectCard.jsx";
import { InnerHero } from "../components/Section.jsx";

export function ProjectsPage() {
  return (
    <>
      <InnerHero
        number="03"
        kicker="Selected work"
        title={
          <>
            Ideas made
            <br />
            <em>useful.</em>
          </>
        }
        description="Each project starts with a different constraint. Explore what the software was built to do."
      />
      <section className="work-section section-pad">
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
