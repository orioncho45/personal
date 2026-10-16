import React from "react";
import { ProjectActions } from "../components/ProjectActions.jsx";
import { ProjectViewer } from "../components/ProjectViewer.jsx";
import { ContactStrip, Eyebrow } from "../components/Section.jsx";

export function ProjectDetailPage({ project }) {
  return (
    <>
      <section className="detail-hero section-pad">
        <Eyebrow number="03">{project.category}</Eyebrow>
        <div className="detail-title-row">
          <h1>{project.title}</h1>
          <span>
            PROJECT / {project.slug.toUpperCase().replaceAll("-", " ")}
          </span>
        </div>
        <p>{project.summary}</p>
      </section>
      <section className="detail-media section-pad">
        <ProjectViewer media={project.media} />
      </section>
      <section className="detail-body section-pad">
        <div className="detail-facts">
          <div>
            <span>ROLE</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span>FOCUS</span>
            <strong>{project.category}</strong>
          </div>
          <div>
            <span>TOOLS / AREAS</span>
            <strong>{project.tags.join(" · ")}</strong>
          </div>
        </div>
        <div className="detail-story">
          <span className="side-label">THE PROJECT</span>
          <div>
            <h2>What it was built to do.</h2>
            <p>{project.story}</p>
            <ProjectActions actions={project.actions} />
          </div>
        </div>
      </section>
      <ContactStrip
        kicker="MORE TO EXPLORE"
        title="See the rest of the work."
        href="/projects/"
        action="All projects ↗"
      />
    </>
  );
}
